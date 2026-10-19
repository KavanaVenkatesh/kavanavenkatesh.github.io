(()=>{
 const root=document.querySelector('[data-kf6]'); if(!root||root.dataset.kf6Initialized)return;
 root.dataset.kf6Initialized='1';
 const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 const reading=root.querySelector('[data-kf6-reading]');
 let raf=0;
 function updateScroll(){raf=0;const rect=root.getBoundingClientRect(),total=Math.max(root.offsetHeight-innerHeight,1);const progress=Math.max(0,Math.min(100,-rect.top/total*100));if(reading)reading.style.width=progress+'%';const rail=root.querySelector('.kf6-events');const ink=root.querySelector('[data-kf6-event-progress]');if(rail&&ink){const pos=rail.getBoundingClientRect();const height=Math.max(0,Math.min(pos.height,innerHeight*.58-pos.top));ink.style.height=height+'px'}}
 window.addEventListener('scroll',()=>{if(!raf)raf=requestAnimationFrame(updateScroll)},{passive:true}); window.addEventListener('resize',updateScroll);updateScroll();
 const reveals=[...root.querySelectorAll('.kf6-reveal')];
 if(!reduceMotion&&'IntersectionObserver' in window){const io=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('kf6-in-view');io.unobserve(e.target)}})},{threshold:.08,rootMargin:'0px 0px 60px 0px'});reveals.forEach(e=>io.observe(e));root.classList.add('js-ready')}else reveals.forEach(e=>e.classList.add('kf6-in-view'));

 // Hand-drawn folio illustration: reveal only when seen, no motion for reduced-motion visitors.
 const art=root.querySelector('.kf8-art-entrance');
 if(art){
  if(reduceMotion||!('IntersectionObserver' in window)){art.classList.add('is-live')}
  else {const artObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){art.classList.add('is-live');artObserver.disconnect()}})},{threshold:.25});artObserver.observe(art)}
 }

 // Teaching register: native details, only one open to keep the page tidy.
 const courses=[...root.querySelectorAll('.kf6-course')];courses.forEach(c=>c.addEventListener('toggle',()=>{if(c.open)courses.forEach(other=>{if(other!==c&&other.open)other.open=false})}));
 // Dated invited sessions
 const events=[...root.querySelectorAll('[data-kf6-event]')],talkCount=root.querySelector('[data-kf6-talk-count]');
 const talkButtons=[...root.querySelectorAll('[data-kf6-talk-filter]')];
 talkButtons.forEach(btn=>btn.addEventListener('click',()=>{const selected=btn.dataset.kf6TalkFilter;talkButtons.forEach(b=>{const active=b===btn;b.classList.toggle('is-active',active);b.setAttribute('aria-pressed',String(active))});let visible=0;events.forEach(event=>{const kind=event.dataset.kf6Kind;const matches=selected==='all'||(selected==='talk'&&(kind.includes('talk')||kind.includes('webinar')))||(selected==='panel'&&kind.includes('panel'))||(selected==='workshop'&&kind.includes('workshop'));event.hidden=!matches;if(matches)visible++});talkCount.textContent=visible+' session'+(visible===1?'':'s');updateScroll()}));
 // Real scrapbook: every print remains visible until a filter is chosen.
 const photos=[...root.querySelectorAll('[data-kf6-photo]')];const filterButtons=[...root.querySelectorAll('[data-kf6-photo-filter]')];
 filterButtons.forEach(btn=>btn.addEventListener('click',()=>{const selected=btn.dataset.kf6PhotoFilter;filterButtons.forEach(b=>{let active=b===btn;b.classList.toggle('is-active',active);b.setAttribute('aria-pressed',String(active))});photos.forEach(p=>{p.hidden=selected!=='all'&&p.dataset.category!==selected});updateScroll()}));
 // Accessible fullscreen viewer with full-size, uncropped photos.
 const viewer=root.querySelector('[data-kf6-lightbox]'),viewerImg=root.querySelector('[data-kf6-lightbox-img]'),viewerCaption=root.querySelector('[data-kf6-lightbox-caption]'),viewerPlace=root.querySelector('[data-kf6-lightbox-place]'),viewerPosition=root.querySelector('[data-kf6-lightbox-position]');let active=0,opener=null;
 function available(){return photos.filter(p=>!p.hidden)}
 function show(index){const list=available();if(!list.length)return;active=(index+list.length)%list.length;const photo=list[active];const img=photo.querySelector('img');viewerImg.src=img.currentSrc||img.src;viewerImg.alt=img.alt;viewerCaption.textContent=photo.querySelector('figcaption p')?.textContent?.trim()||'';viewerPlace.textContent=photo.querySelector('.kf6-caption-date')?.textContent?.trim()||'';viewerPosition.textContent=String(active+1).padStart(2,'0')+' / '+String(list.length).padStart(2,'0')}
 function open(photo){opener=photo.querySelector('[data-kf6-open]');active=available().indexOf(photo);show(active);viewer.hidden=false;document.body.style.overflow='hidden';viewer.querySelector('[data-kf6-close]').focus()}
 function close(){viewer.hidden=true;document.body.style.overflow='';viewerImg.removeAttribute('src');opener?.focus()}
 photos.forEach(p=>p.querySelector('[data-kf6-open]')?.addEventListener('click',()=>open(p)));
 viewer.querySelector('[data-kf6-close]').addEventListener('click',close);viewer.querySelector('[data-kf6-prev]').addEventListener('click',()=>show(active-1));viewer.querySelector('[data-kf6-next]').addEventListener('click',()=>show(active+1));
 viewer.addEventListener('click',e=>{if(e.target===viewer)close()});
 document.addEventListener('keydown',e=>{if(viewer.hidden)return;if(e.key==='Escape'){e.preventDefault();close()}if(e.key==='ArrowLeft'){e.preventDefault();show(active-1)}if(e.key==='ArrowRight'){e.preventDefault();show(active+1)}});

})();
