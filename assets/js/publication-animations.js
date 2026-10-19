/* Nonessential enhancement: conserve resources by pausing offscreen publication loops.
   Without JS, standard muted autoplay videos still play. */
(() => {
  const videos = Array.from(document.querySelectorAll('.kv-pubs-figure-mat--animated video'));
  if (!videos.length) return;
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) { videos.forEach(v => { v.pause(); v.removeAttribute('autoplay'); }); return; }
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      const video = entry.target;
      if (entry.isIntersecting && !document.hidden) {
        const attempt = video.play();
        if (attempt && typeof attempt.catch === 'function') attempt.catch(() => {});
      } else { video.pause(); }
    }
  }, { rootMargin: '180px 0px', threshold: 0.01 });
  videos.forEach(v => observer.observe(v));
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) videos.forEach(v => v.pause());
    else videos.forEach(v => { if (v.getBoundingClientRect().bottom > -180 && v.getBoundingClientRect().top < innerHeight + 180) { const p=v.play(); if(p && p.catch)p.catch(()=>{}); } });
  });
})();
