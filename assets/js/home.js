/* Homepage V6 — continuous research wheel + academic noticeboard. */
(() => {
  'use strict';
  const home = document.querySelector('.kv-home-v2');
  if (!home) return;

  const wheel = home.querySelector('[data-curiosity-wheel]');
  if (wheel) {
    const orbit = wheel.querySelector('.kv-wheel-orbit');
    const highlight = wheel.querySelector('.kv-wheel-focus');
    const wheelButtons = Array.from(wheel.querySelectorAll('[data-wheel-topic]'));
    const title = wheel.querySelector('[data-wheel-title]');
    const summary = wheel.querySelector('[data-wheel-description]');
    const counter = wheel.querySelector('[data-wheel-counter]');
    const caption = wheel.querySelector('[data-wheel-core-caption]');
    const keywords = wheel.querySelector('[data-wheel-keywords]');

    const themes = [
      {
        key: 'safety',
        title: 'Multi-agent safety & coordination',
        description: 'I study how language-model agents communicate, delegate work, establish dependencies, and manage trust across distributed workflows. My broader interests include secure coordination, cascading failures, adversarial interaction, and the reliability of collaborative systems under uncertainty.',
        keywords: 'SECURITY · TRUST · PROPAGATION · COORDINATION',
        caption: 'COMMUNICATION · TRUST · PROPAGATION'
      },
      {
        key: 'evolving',
        title: 'Self-evolving agents',
        description: 'How do agents improve and adapt as their skills, memories, tools, and workflows change? I study the mechanisms of agent evolution, the risks introduced by changing capabilities, and safety methods that can respond alongside increasingly autonomous behavior.',
        keywords: 'ADAPTATION · MEMORY · TOOLS · EVOLVING RISK',
        caption: 'CAPABILITY UPDATES · CONTINUOUS ADAPTATION'
      },
      {
        key: 'emergence',
        title: 'Emergent behavior in multi-agent systems',
        description: 'I investigate what can arise when individually capable agents become a society: collective intelligence, specialization, influence, coordination bottlenecks, network effects, and scaling dynamics. I am also interested in generative agent-based modeling of complex systems.',
        keywords: 'COLLECTIVE BEHAVIOR · SCALING · NETWORKS',
        caption: 'INFLUENCE · SPECIALIZATION · COLLECTIVES'
      },
      {
        key: 'harness',
        title: 'Agent harnesses & evaluation',
        description: 'My interests include the infrastructure that surrounds agent reasoning—tools, memory, orchestration, monitoring, and interventions—and ways to evaluate increasingly autonomous systems beyond final-task accuracy, including interpretability, calibration, reliability, and failure modes.',
        keywords: 'ORCHESTRATION · EVALUATION · INTERPRETABILITY',
        caption: 'TOOLS · MEMORY · MONITORING · EVALUATION'
      }
    ];

    const visualSteps = Array.from(wheel.querySelectorAll('[data-wheel-step]'));
    const stepsByTopic = {
      safety: ['Agent communication', 'Cross-agent dependencies', 'Resilience & containment'],
      evolving: ['Agent at time t', 'Skills · memory · tools update', 'Agent at time t + 1'],
      emergence: ['Individual interactions', 'Influence · specialization', 'Collective system behavior'],
      harness: ['Planning · tool calls', 'Monitor · intervene', 'Evaluate reliability']
    };

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const cycleMs = 24000; // 6 seconds near each sector; ball moves smoothly throughout.
    let angle = 0;
    let active = -1;
    let lastFrame = null;
    let inView = false;
    let holdUntil = 0;
    let raf = null;

    function setTheme(next) {
      if (next === active) return;
      active = next;
      const topic = themes[next];
      wheel.dataset.active = topic.key;
      title.textContent = topic.title;
      summary.textContent = topic.description;
      counter.textContent = String(next + 1).padStart(2, '0') + ' / 04';
      caption.textContent = topic.caption;
      keywords.textContent = topic.keywords;
      visualSteps.forEach((node, position) => {
        node.textContent = stepsByTopic[topic.key][position];
      });
      wheelButtons.forEach((button, index) => {
        const selected = index === next;
        button.classList.toggle('is-current', selected);
        button.setAttribute('aria-pressed', String(selected));
      });
      highlight.style.setProperty('--kv-highlight-angle', `${next * 90}deg`);
    }

    function setAngle(deg) {
      angle = ((deg % 360) + 360) % 360;
      orbit.style.setProperty('--kv-angle', `${angle.toFixed(2)}deg`);
      setTheme(Math.floor((angle + 45) / 90) % 4);
    }

    function frame(time) {
      raf = null;
      if (!inView || reducedMotion.matches || document.hidden) { lastFrame = null; return; }
      if (lastFrame !== null && time >= holdUntil) {
        setAngle(angle + Math.min(time - lastFrame, 70) * 360 / cycleMs);
      }
      lastFrame = time;
      raf = window.requestAnimationFrame(frame);
    }

    function restart() {
      if (!inView || reducedMotion.matches || document.hidden || raf !== null) return;
      lastFrame = null;
      raf = window.requestAnimationFrame(frame);
    }

    function stop() {
      if (raf !== null) window.cancelAnimationFrame(raf);
      raf = null;
      lastFrame = null;
    }

    wheelButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        setAngle(index * 90);
        holdUntil = performance.now() + 8000;
        restart();
      });
    });

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        inView = entries[0].isIntersecting;
        if (inView) restart(); else stop();
      }, { threshold: 0.12 });
      observer.observe(wheel);
    } else {
      inView = true;
    }
    document.addEventListener('visibilitychange', () => document.hidden ? stop() : restart());
    reducedMotion.addEventListener?.('change', () => reducedMotion.matches ? stop() : restart());
    setAngle(0);
    restart();
  }

  // Publication folio: an understated reading marker follows the visible records.
  // No publication is hidden and the reserved figure frames stay empty.
  const records = Array.from(home.querySelectorAll('[data-kv-pub]'));
  if (records.length) {
    if ('IntersectionObserver' in window) {
      const activeRecords = new IntersectionObserver(entries => {
        entries.forEach(entry => entry.target.classList.toggle('kv-pubs-visible', entry.isIntersecting));
      }, { rootMargin: '-12% 0px -16% 0px', threshold: 0.12 });
      records.forEach(record => activeRecords.observe(record));
    } else {
      records.forEach(record => record.classList.add('kv-pubs-visible'));
    }
  }

  // The vintage notice-board filters retain the existing homepage behavior.
  const filters = [...home.querySelectorAll('[data-news-filter]')];
  const notes = [...home.querySelectorAll('[data-news-topic]')];
  const count = home.querySelector('[data-news-count]');
  filters.forEach(button => button.addEventListener('click', () => {
    const category = button.dataset.newsFilter;
    filters.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    let visible = 0;
    notes.forEach(note => {
      note.hidden = category !== 'all' && note.dataset.newsTopic !== category;
      if (!note.hidden) visible += 1;
    });
    if (count) count.textContent = `Showing ${visible} ${visible === 1 ? 'note' : 'notes'}`;
  }));
})();
