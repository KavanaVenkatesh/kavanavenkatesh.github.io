---
title: "CASPIAN: Online Detection and Attribution of Cascade Attacks in LLM Multi-Agent Systems via Cross-Channel Causal Monitoring"
teaser: "/images/caspian-image.png"
authors:
  - name: "Kavana Venkatesh"
    website: "https://kavanavenkatesh.github.io/"
  - name: "Jafar Isbarov"
    website: "https://ceferisbarov.github.io/"
  - name: "Saad Amin"
    website: "https://www.linkedin.com/in/saad-amin-72403a31b/"
  - name: "Murat Kantarcioglu"
    website: "https://www.kantarcioglu.net/"
  - name: "Jiaming Cui"
    website: "https://scholar.google.com/citations?user=hgmPwyUAAAAJ&hl=en"
venue: ""
venue_short: "arXiv"
paperurl: "https://arxiv.org/abs/2605.19240"
websiteurl: "https://arxiv.org/abs/2605.19240"
arxivurl: "https://arxiv.org/pdf/2605.19240.pdf"
year: 2026
abstract: >
  Cascade attacks in LLM multi-agent systems (MAS) arise when adversarial influence propagates across agents and leads to escalated system-level failures through complex agent interactions. Detecting such cascades is challenging, as their signals are distributed, tightly coupled across interaction channels, and often appear plausibly benign locally but may unfold quickly either within a single turn or gradually across multiple turns. Existing defenses, being largely local and text-centric, fail to capture such cross-channel, temporally coordinated dynamics of cascade propagation. Therefore, we propose CASPIAN, the first framework that provides a unified, cross-channel causal analysis of cascade behavior in LLM-MAS through online monitoring of dynamic influence propagation across agents. CASPIAN models multiagent interactions using a unified, dynamic causal influence matrix across channels, estimated efficiently via a late-interaction conditional transfer entropy (LI-CTE) formulation, thereby enabling the detection of cascade onset from emergent system-level structure rather than isolated anomalies. It further performs online causal attribution, identifying the origin, bridge, and amplifier agents driving the cascade and reconstructing its principal propagation pathways, capabilities not supported by existing methods. Across diverse multi-agent frameworks and benchmarks, CASPIAN consistently outperforms semantic guardrails, LLM-based judges, and graph-based anomaly detectors in both detection accuracy and early cascade identification while operating with sub-1% relative overhead latency. These results demonstrate that unified cross-channel causal modeling is essential for reliably detecting and understanding cascade failures in LLM multi-agent systems.
description: "We propose the first online framework for detection and attribution of cascade attacks in LLM multi-agent systems."
bibtex: |
  @article{venkatesh2026caspian,
    title={CASPIAN: Online Detection and Attribution of Cascade Attacks in LLM Multi-Agent Systems via Cross-Channel Causal Monitoring},
    author={Venkatesh, Kavana and Isbarov, Jafar and Amin, Saad and Kantarcioglu, Murat and Cui, Jiaming},
    journal={arXiv preprint arXiv:2605.19240},
    year={2026}
  }
---
