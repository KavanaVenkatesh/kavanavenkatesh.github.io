/* Vintage publication catalogue: search, text-safe ink emphasis, tactile cards, and paper unfolding.
 * The abstract's ORIGINAL wording is never changed. Emphasis only wraps exact substrings in <mark>.
 */
(() => {
  const root = document.querySelector('[data-kvl]');
  if (!root || root.dataset.kvlInitialized === 'true') return;
  root.dataset.kvlInitialized = 'true';

  const buttons = [...root.querySelectorAll('[data-kvl-area]')];
  const search = root.querySelector('#kvl-search-input');
  const records = [...root.querySelectorAll('[data-kvl-record]')];
  const yearSections = [...root.querySelectorAll('[data-kvl-year]')];
  const count = root.querySelector('#kvl-count');
  const empty = root.querySelector('#kvl-empty');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let area = 'all';
  const norm = value => String(value || '').normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase();

  function update() {
    const query = norm(search?.value.trim());
    let visible = 0;
    records.forEach(record => {
      const show = (area === 'all' || record.dataset.area === area) &&
        (!query || norm(record.dataset.search).includes(query));
      record.hidden = !show;
      if (show) visible++;
    });
    yearSections.forEach(section => {
      section.hidden = ![...section.querySelectorAll('[data-kvl-record]')]
        .some(record => !record.hidden);
    });
    empty.hidden = visible !== 0;
    count.textContent = `${visible} ${visible === 1 ? 'publication' : 'publications'}`;
  }

  buttons.forEach(button => button.addEventListener('click', () => {
    area = button.dataset.kvlArea;
    buttons.forEach(tab => {
      const selected = tab === button;
      tab.classList.toggle('is-active', selected);
      tab.setAttribute('aria-pressed', String(selected));
    });
    update();
  }));
  search?.addEventListener('input', update);

  // An understated typesetter's emphasis: match exact substrings from the YAML,
  // retaining every letter, punctuation mark, and space of the source abstract.
  root.querySelectorAll('.kvl-abstract-text').forEach(paragraph => {
    const original = paragraph.textContent;
    const phrases = (paragraph.dataset.kvlHighlights || '').split('||')
      .map(phrase => phrase.trim()).filter(Boolean).sort((a, b) => b.length - a.length);
    if (!phrases.length || !original.trim()) return;
    const matches = [];
    const lower = original.toLocaleLowerCase();
    phrases.forEach(phrase => {
      const needle = phrase.toLocaleLowerCase();
      let offset = 0;
      while (offset < original.length) {
        const start = lower.indexOf(needle, offset);
        if (start < 0) break;
        const end = start + needle.length;
        if (!matches.some(m => start < m.end && end > m.start)) {
          matches.push({start, end});
          break; // One emphasis per phrase is enough.
        }
        offset = start + 1;
      }
    });
    matches.sort((a, b) => a.start - b.start);
    if (!matches.length) return;
    const fragment = document.createDocumentFragment();
    let pos = 0;
    matches.forEach((match, index) => {
      fragment.appendChild(document.createTextNode(original.slice(pos, match.start)));
      const mark = document.createElement('mark');
      mark.className = `kvl-key-term kvl-key-term--${index % 3}`;
      mark.textContent = original.slice(match.start, match.end);
      fragment.appendChild(mark);
      pos = match.end;
    });
    fragment.appendChild(document.createTextNode(original.slice(pos)));
    paragraph.replaceChildren(fragment);
  });

  // Smooth physical pull-out, with native <details> as the no-JS fallback.
  const abstracts = [...root.querySelectorAll('.kvl-abstract')];
  const activeAnimations = new WeakMap();
  function setOpen(details, wantOpen) {
    if (activeAnimations.has(details)) {
      activeAnimations.get(details).cancel();
      activeAnimations.delete(details);
    }
    const sheet = details.querySelector('.kvl-slide');
    if (wantOpen) details.open = true;
    if (reduceMotion || !sheet || !sheet.animate) {
      details.open = wantOpen;
      return;
    }
    const height = sheet.scrollHeight;
    const frames = wantOpen
      ? [{height: '0px', opacity: .05, transform: 'translateY(-11px) rotateX(-5deg)'},
         {height: `${height}px`, opacity: 1, transform: 'translateY(0) rotateX(0)'}]
      : [{height: `${height}px`, opacity: 1, transform: 'translateY(0) rotateX(0)'},
         {height: '0px', opacity: .05, transform: 'translateY(-11px) rotateX(-5deg)'}];
    const animation = sheet.animate(frames, {
      duration: wantOpen ? 440 : 280,
      easing: wantOpen ? 'cubic-bezier(.15,.75,.2,1)' : 'ease-in',
    });
    activeAnimations.set(details, animation);
    animation.onfinish = () => {
      if (activeAnimations.get(details) !== animation) return;
      activeAnimations.delete(details);
      if (!wantOpen) details.open = false;
    };
  }
  root.addEventListener('click', event => {
    const summary = event.target.closest('.kvl-abstract summary');
    if (!summary || !root.contains(summary)) return;
    event.preventDefault();
    const details = summary.parentElement;
    const isOpening = !details.open;
    if (isOpening) abstracts.forEach(other => {
      if (other !== details && other.open) setOpen(other, false);
    });
    setOpen(details, isOpening);
  });

  // Paper records rise gently into view; hover/focus lifts a record without
  // continuously moving its click targets, so links remain easy to use.
  if (!reduceMotion) {
    root.classList.add('kvl-has-motion');
    if ('IntersectionObserver' in window) {
      records.forEach(record => {
        if (record.getBoundingClientRect().top > window.innerHeight * .9) {
          record.dataset.kvlEnter = 'pending';
        }
      });
      const reveal = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.dataset.kvlEnter = 'arrived';
          reveal.unobserve(entry.target);
        });
      }, {threshold: .05, rootMargin: '0px 0px 45px 0px'});
      records.forEach(record => reveal.observe(record));
    }
  }

  // A real drawer interaction, rather than a decorative link that immediately jumps away.
  // Reduced-motion visitors keep the normal native anchor behavior.
  const papersDrawer = root.querySelector('.kvl-drawer-first');
  papersDrawer?.addEventListener('click', event => {
    if (reduceMotion) return;
    event.preventDefault();
    papersDrawer.classList.add('is-pulled');
    window.setTimeout(() => {
      root.querySelector('#kvl-catalogue')?.scrollIntoView({behavior: 'smooth', block: 'start'});
      if (history.replaceState) history.replaceState(null, '', '#kvl-catalogue');
    }, 340);
    window.setTimeout(() => papersDrawer.classList.remove('is-pulled'), 1000);
  });

  // Citation controls stay functional even on non-HTTPS local previews.
  root.addEventListener('click', async event => {
    const button = event.target.closest('[data-kvl-copy]');
    if (!button) return;
    const tag = document.getElementById('kvl-cite-' + button.dataset.kvlCopy);
    if (!tag) return;
    let citation;
    try { citation = JSON.parse(tag.textContent); } catch { return; }
    try {
      if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(citation);
      else {
        const field = document.createElement('textarea');
        field.value = citation;
        field.style.cssText = 'position:fixed;left:-9999px';
        document.body.appendChild(field);
        field.select();
        const copied = document.execCommand('copy');
        field.remove();
        if (!copied) throw new Error('Clipboard not available');
      }
      button.textContent = 'Copied ✓';
      setTimeout(() => { button.textContent = 'Copy citation'; }, 1700);
    } catch { button.textContent = 'Copy unavailable'; }
  });

  // Correct the active navigation link without modifying the shared layout.
  document.querySelectorAll('.site-nav a').forEach(a => {
    if (a.getAttribute('href')?.replace(/\/$/, '') === '/publications') a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
  update();
})();
