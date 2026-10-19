/* Research field-note visualizations. */
(()=>{
  const root=document.querySelector('[data-kr2]');if(!root || root.dataset.kr2Initialized==='true')return;root.dataset.kr2Initialized='true';
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)');
  const inView=new Set();
  const plates=[...root.querySelectorAll('[data-kr2-propagation],[data-kr2-evolution],[data-kr2-collective],[data-kr2-harness]')];
  const watch=new IntersectionObserver(entries=>entries.forEach(e=>{e.isIntersecting?inView.add(e.target):inView.delete(e.target)}),{threshold:.15});
  plates.forEach(el=>watch.observe(el));

  const pro=root.querySelector('[data-kr2-propagation]');
  const channels=[
    ['communication','COMMUNICATION','Messages become dependencies.','One agent passes an instruction or claim to another.'],
    ['memory','SHARED MEMORY','Context persists beyond one turn.','State shared across agents creates another pathway for influence.'],
    ['tools','TOOL-MEDIATED','Actions reach beyond the conversation.','Tool results and external environments can affect later decisions.']
  ];
  let ci=0;
  function setChannel(i){ci=i;const [key,label,head,body]=channels[i];pro.dataset.channel=key;pro.querySelector('[data-kr2-channel]').textContent=label;pro.querySelector('[data-kr2-prop-head]').textContent=head;pro.querySelector('[data-kr2-prop-body]').textContent=body}
  setChannel(0);

  const ev=root.querySelector('[data-kr2-evolution]');let ei=0;
  const risk=['Observe the current agent state','Reassess new memory and workflows','Adapt policy to changing tools and risks'];
  function setEvolution(i){ei=i;ev.querySelectorAll('[data-step]').forEach((el,n)=>el.classList.toggle('is-current',n===i));ev.querySelector('[data-kr2-risk-caption]').textContent=risk[i];ev.querySelector('.kr2-safety-progress i').style.width=((i+1)*100/3)+'%'}
  setEvolution(0);

  const net=root.querySelector('[data-kr2-collective]');const lines=net.querySelector('#kr2-net-lines');const nodes=net.querySelector('#kr2-net-nodes');
  const ns=[
    [72,62],[145,85],[205,49],[274,91],[348,61],[425,107],[492,57],
    [90,159],[165,163],[245,143],[321,172],[400,169],[483,193],
    [67,259],[151,228],[215,270],[290,232],[365,268],[453,251]
  ];
  const structured=ns.map(([x,y],i)=>{
    const cluster=i<10?0:1;
    const local=i<10?i: i-10;
    const ax=cluster===0?163:393, ay=cluster===0?142:170;
    const angle=(local*2.39996)%(2*Math.PI);
    const radius=(22+Math.sqrt(local+1)*21);
    return [ax+radius*Math.cos(angle),ay+radius*Math.sin(angle)];
  });
  const pairs=[];
  for(let i=0;i<ns.length;i++){let j=(i+2)%ns.length;pairs.push([i,j]);if(i%3===0)pairs.push([i,(i+6)%ns.length]);}
  function mk(name,attrs){const e=document.createElementNS('http://www.w3.org/2000/svg',name);for(const [k,v] of Object.entries(attrs))e.setAttribute(k,v);return e}
  const lineEls=pairs.map(([a,b])=>{const e=mk('line',{x1:ns[a][0],y1:ns[a][1],x2:ns[b][0],y2:ns[b][1]});lines.appendChild(e);return e});
  const nodeEls=ns.map(([x,y],i)=>{const e=mk('circle',{cx:x,cy:y,r:7,fill:i%4===0?'#e6afc8':'#cae8de'});nodes.appendChild(e);return e});
  let collectiveMode=false;
  function setNetwork(s){collectiveMode=s;net.querySelector('svg').classList.toggle('is-structured',s);net.querySelector('[data-kr2-network-label]').textContent=s?'EMERGING COMMUNITIES':'LOCAL INTERACTIONS';nodeEls.forEach((e,i)=>{e.setAttribute('cx',(s?structured:ns)[i][0]);e.setAttribute('cy',(s?structured:ns)[i][1]);e.setAttribute('r',s&&(i===0||i===10)?14:7);e.setAttribute('fill',s?(i<10?'#dcb9e8':'#9bd2c0'):(i%4===0?'#e6afc8':'#cae8de'))});lineEls.forEach((e,i)=>{const [a,b]=pairs[i];const p=s?structured:ns;e.setAttribute('x1',p[a][0]);e.setAttribute('y1',p[a][1]);e.setAttribute('x2',p[b][0]);e.setAttribute('y2',p[b][1]);e.style.opacity=s&&((a<10)===(b<10))?'.92':'.32'})}
  setNetwork(false);

  const harness=root.querySelector('[data-kr2-harness]');let hi=0;
  const captions=['Task & context','Agent / policy','Tools and memory','Trace and monitor','Verification & intervention'];
  function setHarness(i){hi=i;harness.querySelectorAll('[data-h-step]').forEach(el=>el.classList.toggle('is-current',Number(el.dataset.hStep)===i));harness.querySelector('[data-kr2-h-caption]').textContent=captions[i]}
  setHarness(0);
  function run(el,fn){if(!reduce.matches&&inView.has(el))fn()}
  let ticks=0;
  const timer=window.setInterval(()=>{
    ticks++;
    run(pro,()=>setChannel((ci+1)%channels.length));
    run(ev,()=>setEvolution((ei+1)%3));
    run(net,()=>setNetwork(!collectiveMode));
    run(harness,()=>setHarness((hi+1)%5));
  },3800);
  window.addEventListener('pagehide',()=>window.clearInterval(timer),{once:true});
})();
