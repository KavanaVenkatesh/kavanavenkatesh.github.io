---
title: "RAVEL: Rare Concept Generation and Editing via Graph-driven Relational Guidance"
authors:
  - name: "<b style='color:#1a73e8;'>Kavana Venkatesh</b>"
    website: "https://kavanavenkatesh.github.io/"
  - name: "Yusuf Dalva"
    website: "https://yusufdalva.github.io/"
  - name: "Ismini Lourentzou"
    website: "https://isminoula.github.io/"
  - name: "Pinar Yanardag"
    website: "https://pinguar.org/"
venue: "arXiv preprint arXiv:2412.09614"
venue_short: "arXiv"
paperurl: "https://arxiv.org/abs/2412.09614"
websiteurl: "https://ravel-diffusion.github.io/"
arxivurl: "https://arxiv.org/pdf/2412.09614"
year: 2024
abstract: >
  Despite impressive visual fidelity, current text-to-image (T2I) diffusion models struggle to depict rare, complex, or culturally nuanced concepts due to training data limitations. We introduce RAVEL, a training-free framework that significantly improves rare concept generation, context-driven image editing, and self-correction by integrating graph-based retrieval-augmented generation (RAG) into diffusion pipelines. Unlike prior RAG and LLM-enhanced methods reliant on visual exemplars, static captions or pre-trained knowledge of models, RAVEL leverages structured knowledge graphs to retrieve compositional, symbolic, and relational context, enabling nuanced grounding even in the absence of visual priors. To further refine generation quality, we propose SRD, a novel self-correction module that iteratively updates prompts via multi-aspect alignment feedback, enhancing attribute accuracy, narrative coherence, and semantic fidelity. Our framework is model-agnostic and compatible with leading diffusion models including Stable Diffusion XL, Flux, and DALL-E 3. We conduct extensive evaluations across three newly proposed benchmarks - MythoBench, Rare-Concept-1K, and NovelBench. RAVEL also consistently outperforms SOTA methods across perceptual, alignment, and LLM-as-a-Judge metrics. These results position RAVEL as a robust paradigm for controllable and interpretable T2I generation in long-tail domains.
description: "We propose a framework that uses knowledge graphs for improving text-to-image diffusion models."
bibtex: |
  @misc{venkatesh2025ravelrareconceptgeneration,
      title={RAVEL: Rare Concept Generation and Editing via Graph-driven Relational Guidance}, 
      author={Kavana Venkatesh and Yusuf Dalva and Ismini Lourentzou and Pinar Yanardag},
      year={2025},
      eprint={2412.09614},
      archivePrefix={arXiv},
      primaryClass={cs.CV},
      url={https://arxiv.org/abs/2412.09614}, 
}
---
