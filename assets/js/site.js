(()=>{
  const menu=document.querySelector('.nav-toggle'),nav=document.querySelector('.site-nav');
  menu?.addEventListener('click',()=>{let isOpen=nav.dataset.open!=='true';nav.dataset.open=String(isOpen);menu.setAttribute('aria-expanded',String(isOpen));});
  document.querySelectorAll('[data-desk-tab]').forEach(tab=>{tab.addEventListener('click',()=>{
    let id=tab.dataset.deskTab;
    document.querySelectorAll('[data-desk-tab]').forEach(x=>{let a=x===tab;x.dataset.active=String(a);x.setAttribute('aria-selected',String(a));x.tabIndex=a?0:-1;});
    document.querySelectorAll('[data-desk-panel]').forEach(x=>{let a=x.dataset.deskPanel===id;x.dataset.active=String(a);x.hidden=!a;});
  });});
  document.querySelectorAll('[data-year]').forEach(btn=>btn.addEventListener('click',()=>{
    let value=btn.dataset.year;
    document.querySelectorAll('[data-year]').forEach(b=>b.setAttribute('aria-pressed',String(b===btn)));
    document.querySelectorAll('[data-pub-year]').forEach(item=>{item.hidden=!(value==='all'||item.dataset.pubYear===value);});
    const count=document.querySelector('[data-filter-count]');if(count){let visible=document.querySelectorAll('[data-pub-year]:not([hidden])').length;count.textContent=`${visible} papers in this view`;}
  }));
  // On desktop the scrapbook is rearrangeable, like loose papers on a desk.
  document.querySelectorAll('.scrap').forEach(note=>{
    let start=null,baseX=0,baseY=0;
    note.addEventListener('pointerdown',e=>{
      if(e.pointerType==='touch'||e.button!==0)return;
      start={x:e.clientX,y:e.clientY,ox:baseX,oy:baseY,drag:false};
      note.setPointerCapture(e.pointerId);
    });
    note.addEventListener('pointermove',e=>{
      if(!start)return;
      let dx=e.clientX-start.x,dy=e.clientY-start.y;
      if(Math.abs(dx)+Math.abs(dy)>8)start.drag=true;
      if(start.drag){
        note.dataset.dragging='true';
        baseX=Math.max(-120,Math.min(175,start.ox+dx));
        baseY=Math.max(-130,Math.min(135,start.oy+dy));
        note.style.translate=`${baseX}px ${baseY}px`;
      }
    });
    note.addEventListener('pointerup',()=>{
      if(!start)return;
      if(start.drag)note.dataset.justDragged='true';
      note.dataset.dragging='false';start=null;
    });
    note.addEventListener('pointercancel',()=>{note.dataset.dragging='false';start=null});
    note.addEventListener('click',e=>{
      if(note.dataset.justDragged==='true'){e.stopImmediatePropagation();note.dataset.justDragged='false';}
    },true);
  });
  const modal=document.querySelector('.lightbox'),title=modal?.querySelector('[data-modal-title]'),body=modal?.querySelector('[data-modal-body]'),close=modal?.querySelector('.lightbox-close');let opener=null;
  const contents={
    poetry:['Poetry, in print','I have published poetry books, and writing has been a part of my life beyond research. This archive will hold the actual titles, covers, publication details, and selected excerpts. I will add those only from my real books.'],
    hamsadhwani:['Hamsadhwani Editorial House','Before and alongside research, I worked as an editor and ran Hamsadhwani Editorial House in Chikmagalur, my hometown. A future archive will document the books, writers, and editorial projects behind it.'],
    reading:['Notes from the bookshelf','A place for the books and philosophical ideas I keep returning to: marginal notes, favorite passages, unresolved questions, and reading notes. Real titles and personal notes will be added here.'],
    photography:['Moments, on film','Photographs from travel, workshops, conferences, everyday life, and places that stay with me. These frames are intentionally waiting for my actual images and captions.']
  };
  document.querySelectorAll('[data-scrap]').forEach(el=>el.addEventListener('click',()=>{let data=contents[el.dataset.scrap];if(!modal||!data)return;opener=el;title.textContent=data[0];body.textContent=data[1];modal.dataset.open='true';close.focus();document.body.style.overflow='hidden';}));
  function closeModal(){if(!modal)return;modal.dataset.open='false';document.body.style.overflow='';opener?.focus();}
  close?.addEventListener('click',closeModal);modal?.addEventListener('click',e=>{if(e.target===modal)closeModal()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal?.dataset.open==='true')closeModal();});
  document.querySelector('.scroll-top')?.addEventListener('click',()=>window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'}));
})();
