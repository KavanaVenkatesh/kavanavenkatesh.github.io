(()=>{
 const root=document.querySelector('[data-kcv]');if(!root||root.dataset.kcvInit)return;root.dataset.kcvInit='yes';
 const nav=[...root.querySelectorAll('[data-kcv-nav]')];
 const pages=[...root.querySelectorAll('.kcv-section')];
 const progress=root.querySelector('[data-kcv-progress]');
 const reduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 function update(){
  const rect=root.getBoundingClientRect(), total=Math.max(1,root.offsetHeight-innerHeight),done=Math.min(total,Math.max(0,-rect.top));
  if(progress)progress.style.width=(100*done/total).toFixed(2)+'%';
  let current=pages[0];for(const s of pages)if(s.getBoundingClientRect().top<innerHeight*.4)current=s;
  for(const a of nav){const on=current&&a.getAttribute('href')==='#'+current.id;a.classList.toggle('is-active',!!on);if(on)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');}
 }
 let busy=false;function requestUpdate(){if(busy)return;busy=true;requestAnimationFrame(()=>{busy=false;update()})}
 addEventListener('scroll',requestUpdate,{passive:true});addEventListener('resize',requestUpdate,{passive:true});update();
 // Native anchors remain functional without JavaScript.
 if(!reduced){for(const link of nav)link.addEventListener('click',e=>{const target=document.querySelector(link.getAttribute('href'));if(!target)return;e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'});history.replaceState(null,'',link.getAttribute('href'))})}
})();
