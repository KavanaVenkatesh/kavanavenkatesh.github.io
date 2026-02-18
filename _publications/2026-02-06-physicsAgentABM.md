---
title: "PhysicsAgentABM: Physics-Guided Generative Agent-Based Modeling"
teaser: "/images/physicsagentabm.png"  
authors:
  - name: "<b style='color:#1a73e8;'>Kavana Venkatesh</b>"
    website: "https://kavanavenkatesh.github.io/"
  - name: "Yinhan He"
    website: "https://yinhanhe123.github.io/"
  - name: "Jundong Li"
    website: "https://jundongli.github.io/"
  - name: "Jiaming Cui"
    website: "https://scholar.google.com/citations?user=hgmPwyUAAAAJ&hl=en"
venue: "arXiv preprint 	arXiv:2602.06030"
venue_short: "arXiv"
paperurl: "https://arxiv.org/abs/2602.06030"
websiteurl: "https://arxiv.org/abs/2602.06030"
arxivurl: "https://arxiv.org/pdf/2602.06030"
year: 2026
abstract: >
  Large language model (LLM)-based multi-agent systems enable expressive agent reasoning but are expensive to scale and poorly calibrated for timestep-aligned state-transition simulation, while classical agent-based models (ABMs) offer interpretability but struggle to integrate rich individual-level signals and non-stationary behaviors. We propose PhysicsAgentABM, which shifts inference to behaviorally coherent agent clusters: state-specialized symbolic agents encode mechanistic transition priors, a multimodal neural transition model captures temporal and interaction dynamics, and uncertainty-aware epistemic fusion yields calibrated cluster-level transition distributions. Individual agents then stochastically realize transitions under local constraints, decoupling population inference from entity-level variability. We further introduce ANCHOR, an LLM agent-driven clustering strategy based on cross-contextual behavioral responses and a novel contrastive loss, reducing LLM calls by up to 6-8 times. Experiments across public health, finance, and social sciences show consistent gains in event-time accuracy and calibration over mechanistic, neural, and LLM baselines. By re-architecting generative ABM around population-level inference with uncertainty-aware neuro-symbolic fusion, PhysicsAgentABM establishes a new paradigm for scalable and calibrated simulation with LLMs.
description: "We propose a sophisticated hierarchical neuro-symbolic generative ABM framework along with a novel clustering algorithm, ANCHOR."
bibtex: |
  @misc{venkatesh2026physicsagentabm,
    title={PhysicsAgentABM: Physics-Guided Generative Agent-Based Modeling}, 
    author={Kavana Venkatesh and Yinhan He and Jundong Li and Jiaming Cui},
    year={2026},
    eprint={2602.06030},
    archivePrefix={arXiv},
    primaryClass={cs.CV},
    url={https://arxiv.org/abs/2602.06030} 
  }
---
