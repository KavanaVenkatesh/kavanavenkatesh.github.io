---
permalink: /
title: "Kavana Venkatesh"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<style>
  /* Home page is fully custom below — hide the theme's duplicate page title */
  .page__title{ display:none; }
  #main{ font-family:"Inter",-apple-system,"Helvetica Neue",Arial,sans-serif; }

  .kv-home{ --paper:#FBFAF7; --ink:#1C1B19; --muted:#6B6862; --line:#E7E3DA;
    --accent:#7B2D3B; --accent2:#C6803B; --accent-soft:#f4e7e9;
    color:var(--ink); line-height:1.65; }
  .kv-home a{ color:var(--accent); text-decoration:none; }
  .kv-home a:hover{ text-decoration:underline; }
  .kv-home .kicker{ font-family:"JetBrains Mono",monospace; font-size:.72rem; letter-spacing:.16em;
    text-transform:uppercase; color:var(--accent2); display:block; margin:44px 0 2px; }

  /* Hero */
  .kv-home .hero{ position:relative; overflow:hidden; }
  .kv-home .netmotif{ position:absolute; top:-6px; right:-8px; width:220px; height:145px; opacity:.5; pointer-events:none; }
  .kv-home .lead{ font-family:"Fraunces",serif; font-style:italic; font-size:1.08rem; color:var(--muted); margin:0 0 4px; }
  .kv-home .hero-name{ font-family:"Fraunces",serif; font-weight:600; font-size:2.9rem; line-height:1.03;
    letter-spacing:-.02em; margin:0 0 12px; color:var(--ink); }
  .kv-home .motto{ font-family:"Fraunces",serif; font-style:italic; font-weight:500; font-size:1.2rem;
    color:var(--accent); border-left:2px solid var(--accent2); padding-left:16px; margin:0 0 20px; max-width:48ch; }
  .kv-home .intro{ font-size:1.02rem; color:#2c2a27; max-width:66ch; margin:0 0 16px; }
  .kv-home .callout{ display:flex; gap:12px; align-items:flex-start; margin:22px 0 18px;
    background:linear-gradient(90deg,#f6ede0,var(--accent-soft)); border-left:3px solid var(--accent2);
    padding:14px 18px; border-radius:9px; font-size:.98rem; }
  .kv-home .callout b{ color:var(--accent); }

  .kv-home .funs-label{ font-weight:600; margin:6px 0 8px; }
  .kv-home .funs{ list-style:none; padding:0; margin:0 0 16px; display:flex; flex-wrap:wrap; gap:9px; }
  .kv-home .funs li{ background:#fff; border:1px solid var(--line); border-radius:999px; padding:7px 14px;
    font-size:.92rem; color:#3a3733; }

  /* Section headings */
  .kv-home .sec-head{ font-family:"Fraunces",serif; font-weight:600; font-size:1.5rem; letter-spacing:-.01em;
    margin:2px 0 6px; display:flex; align-items:baseline; gap:12px; }
  .kv-home .sec-head::after{ content:""; flex:1; height:1px; background:var(--line); }

  /* Research cards */
  .kv-home .cards{ display:grid; grid-template-columns:1fr 1fr; gap:14px; margin:18px 0 0; }
  .kv-home .card{ background:#fff; border:1px solid var(--line); border-radius:12px; padding:16px 18px;
    transition:transform .15s, box-shadow .15s, border-color .15s; }
  .kv-home .card:hover{ transform:translateY(-2px); box-shadow:0 10px 26px rgba(0,0,0,.07); border-color:#e2cdd1; }
  .kv-home .card .n{ font-family:"JetBrains Mono",monospace; font-size:.72rem; color:var(--accent2); }
  .kv-home .card h4{ font-family:"Fraunces",serif; font-weight:600; font-size:1.03rem; margin:3px 0 4px; }
  .kv-home .card p{ margin:0; font-size:.9rem; color:var(--muted); line-height:1.5; }

  /* News timeline */
  .kv-home .news{ margin:18px 0 0; border-left:2px solid var(--line); padding-left:22px; }
  .kv-home .news .item{ position:relative; padding:0 0 16px; }
  .kv-home .news .item::before{ content:""; position:absolute; left:-29px; top:6px; width:11px; height:11px;
    border-radius:50%; background:#fff; border:2px solid var(--accent); }
  .kv-home .news .date{ font-family:"JetBrains Mono",monospace; font-weight:500; font-size:.78rem;
    letter-spacing:.03em; color:var(--accent); text-transform:uppercase; }
  .kv-home .news .body{ font-size:.96rem; margin-top:1px; }
  .kv-home details{ margin-top:6px; }
  .kv-home summary{ cursor:pointer; color:var(--accent); font-weight:600; font-size:.92rem; }

  @media (max-width:768px){
    .kv-home .cards{ grid-template-columns:1fr; }
    .kv-home .hero-name{ font-size:2.3rem; }
    .kv-home .netmotif{ width:150px; height:100px; opacity:.35; }
  }
</style>

<div class="kv-home" markdown="0">
  <section class="hero">
    <svg class="netmotif" viewBox="0 0 230 150" fill="none" aria-hidden="true">
      <g stroke="#7B2D3B" stroke-width="1.1" opacity="0.55">
        <path d="M40 30 L110 20 M110 20 L180 45 M40 30 L70 90 M70 90 L140 110 M110 20 L140 110 M180 45 L200 100 M140 110 L200 100 M70 90 L30 120"/>
      </g>
      <g fill="#7B2D3B"><circle cx="40" cy="30" r="4"/><circle cx="110" cy="20" r="5"/><circle cx="180" cy="45" r="4"/><circle cx="140" cy="110" r="5"/><circle cx="200" cy="100" r="3.5"/></g>
      <g fill="#C6803B"><circle cx="70" cy="90" r="6"/><circle cx="30" cy="120" r="3.5"/></g>
    </svg>
    <p class="lead">👋 Hi there — welcome to my corner of the internet!</p>
    <h1 class="hero-name">Kavana Venkatesh</h1>
    <p class="motto">Building self-evolving agentic systems — studying agent harnesses, multi-agent coordination, and the safety and interpretability of LLM agents.</p>
    <p class="intro">I am a PhD student at <a href="https://www.vt.edu/" target="_blank">Virginia Tech</a>, affiliated with the <a href="https://sanghani.cs.vt.edu/" target="_blank">Sanghani Center for Artificial Intelligence and Data Analytics</a>. I am fortunate to be advised by Dr. <a href="https://website.cs.vt.edu/people/faculty/jiaming-cui.html" target="_blank">Jiaming Cui</a>. Previously, I earned my master's degree in Data Science from <a href="https://www.northeastern.edu/" target="_blank">Northeastern University</a>, Boston. When I'm not busy exploring AI frontiers, you might find me geeking out over LLM agents, enjoying fun books, or perfecting my latest cup of coffee. ☕</p>
    <div class="callout">
      <span>🎉</span>
      <div>I will be joining <b>Apple</b> as a Research Intern in Summer 2026 at their Seattle office! I would love to connect with fellow interns — feel free to email me for a coffee chat!</div>
    </div>
    <p class="funs-label">A few fun things about me:</p>
    <ul class="funs">
      <li>🌍 I love traveling and capturing stories through photography.</li>
      <li>🐾 Obsessed with pets, especially dogs.</li>
      <li>📚 Passionate about storytelling and making AI more accessible to everyone.</li>
    </ul>
    <p class="intro">Feel free to explore my work, and reach out if you'd like to collaborate or just chat about AI and beyond! 😊</p>
  </section>

  <span class="kicker">Research</span>
  <h2 class="sec-head">🔬 What I work on</h2>
  <p class="intro">My research centers on <b>agentic AI</b> — designing agents that evolve, coordinate, and reason reliably. I aim to build interpretable and dependable agentic systems to enable safe consumption of AI at scale across diverse domains.</p>
  <div class="cards">
    <div class="card"><div class="n">01</div><h4>Self-Evolving Agents</h4><p>Agents that adapt, improve, and specialize over time.</p></div>
    <div class="card"><div class="n">02</div><h4>Agent Harnesses &amp; Tool Use</h4><p>Orchestration and reliable tool-augmented reasoning in LLM-based systems.</p></div>
    <div class="card"><div class="n">03</div><h4>Multi-Agent Systems</h4><p>Coordination and collective cognition across agent societies.</p></div>
    <div class="card"><div class="n">04</div><h4>Agent Safety &amp; Interpretability</h4><p>Monitoring, attribution, and cascade-attack detection for LLM agents.</p></div>
    <div class="card"><div class="n">05</div><h4>Evaluation &amp; Benchmarking</h4><p>Dependable evaluation frameworks for complex agentic systems.</p></div>
  </div>

  <span class="kicker">Updates</span>
  <h2 class="sec-head">📰 News</h2>
  <div class="news">
    <div class="item"><div class="date">Apr 2026</div><div class="body">📄 New preprint discovering <a href="https://arxiv.org/abs/2604.02674v1" target="_blank">Multi-Agent System Coordination Power Laws</a> available!</div></div>
    <div class="item"><div class="date">Feb 2026</div><div class="body">📄 New preprint <a href="https://arxiv.org/abs/2602.06030" target="_blank">PhysicsAgentABM</a> released!</div></div>
    <div class="item"><div class="date">Sep 2025</div><div class="body">🎉 Two papers got accepted to <a href="https://neurips.cc/" target="_blank">NeurIPS 2025</a>. See you in San Diego! 📍</div></div>
    <div class="item"><div class="date">Aug 2025</div><div class="body">💼 Completed Applied Scientist Internship at <a href="https://www.amazon.science/" target="_blank">Amazon!</a></div></div>
    <div class="item"><div class="date">Apr 2025</div><div class="body">📄 New preprint <a href="https://arxiv.org/abs/2504.05306" target="_blank">CREA</a> published on arXiv.</div></div>
    <div class="item"><div class="date">Mar 2025</div><div class="body">🎤 I presented my research at <a href="https://capwic.org/" target="_blank">CAPWIC 2025</a> in Washington, DC.</div></div>
    <div class="item"><div class="date">Feb 2025</div><div class="body">🎉 <a href="https://arxiv.org/abs/2412.09611" target="_blank">FluxSpace</a> got accepted to <a href="https://cvpr.thecvf.com/" target="_blank">CVPR 2025</a>.</div></div>
    <div class="item"><div class="date">Dec 2024</div><div class="body">📄 Two papers <a href="https://arxiv.org/abs/2412.09614" target="_blank">Context Canvas</a> and <a href="https://arxiv.org/abs/2412.09611" target="_blank">FluxSpace</a> uploaded to arXiv.</div></div>
    <div class="item"><div class="date">Aug 2024</div><div class="body">🧑‍🎓 I started my PhD in Computer Science at <a href="https://www.vt.edu/" target="_blank">Virginia Tech</a>.</div></div>
    <div class="item"><div class="date">Apr 2024</div><div class="body">🗣️ Hosted Two-Day GenAI Workshop at <a href="https://www.northeastern.edu/" target="_blank">NEU</a> as WiDS Ambassador.</div></div>
    <div class="item"><div class="date">Mar 2024</div><div class="body">🗣️ Invited talk at <a href="https://www.umass.edu/" target="_blank">UMass Amherst</a> on responsible AI.</div></div>
    <details>
      <summary>📜 View older news</summary>
      <div style="margin-top:12px;">
        <div class="item"><div class="date">Feb 2024</div><div class="body">🌟 Appointed <a href="https://www.widsworldwide.org/" target="_blank">WiDS Worldwide</a> Ambassador.</div></div>
        <div class="item"><div class="date">Oct 2023</div><div class="body">💻 Conducted webinar on LLMs at <a href="https://community.analyticsvidhya.com/c/datahour/harnessing-the-power-of-llms-a-deep-dive-into-practical-solutions/?utm_source=social" target="_blank">DataHour</a>.</div></div>
        <div class="item"><div class="date">Mar 2023</div><div class="body">🗣️ Invited talk at <a href="https://www.northeastern.edu/" target="_blank">Northeastern</a> on MLOps.</div></div>
        <div class="item"><div class="date">Feb 2022</div><div class="body">💼 Joined <a href="https://www.ilink-digital.com/" target="_blank">iLink Digital</a> as a GenAI Data Scientist.</div></div>
        <div class="item"><div class="date">Feb 2022</div><div class="body">💼 Joined <a href="https://www.fidelity.com/" target="_blank">Fidelity Investments</a> as a Data Scientist in NLP and Vision.</div></div>
        <div class="item"><div class="date">Dec 2021</div><div class="body">🎓 Graduated with M.S. in Data Science from <a href="https://www.northeastern.edu/" target="_blank">NEU</a>, Boston.</div></div>
      </div>
    </details>
  </div>
</div>
