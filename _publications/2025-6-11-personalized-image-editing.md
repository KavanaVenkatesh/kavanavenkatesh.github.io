---
title: "Personalized Image Editing in Text-to-Image Diffusion Models via Collaborative Direct Preference Optimization"
authors:
  - name: "Connor Dunlop"
    website: "https://www.linkedin.com/in/connor-dunlop-3a2880268/"
  - name: "Matthew Zheng*"
    website: "https://www.linkedin.com/in/matthew-zheng-b93973220/"
  - name: "Kavana Venkatesh*"
    website: "https://kavanavenkatesh.github.io/"
  - name: "Pinar Yanardag"
    website: "https://pinguar.org/"
venue: "In Proceedings of the Thirty-Ninth Annual Conference on Neural Information Processing Systems (NeurIPS 2025)"
venue_short: "NeurIPS"
arxivurl: "https://arxiv.org/abs/2511.05616"
websiteurl: "https://personalized-editing.github.io/"
paperurl: "https://arxiv.org/pdf/2511.05616"
year: 2025
abstract: >
  Text-to-image (T2I) diffusion models have made remarkable strides in generating and editing high-fidelity images from text. Yet, these models remain fundamentally generic, failing to adapt to the nuanced aesthetic preferences of individual users. In this work, we present the first framework for personalized image editing in diffusion models, introducing Collaborative Direct Preference Optimization (C-DPO), a novel method that aligns image edits with user-specific preferences while leveraging collaborative signals from like-minded individuals. Our approach encodes each user as a node in a dynamic preference graph and learns embeddings via a lightweight graph neural network, enabling information sharing across users with overlapping visual tastes. We enhance a diffusion model's editing capabilities by integrating these personalized embeddings into a novel DPO objective, which jointly optimizes for individual alignment and neighborhood coherence. Comprehensive experiments, including user studies and quantitative benchmarks, demonstrate that our method consistently outperforms baselines in generating edits that are aligned with user preferences.
bibtex: |
  @article{dunlop2025personalized,
  title={Personalized Image Editing in Text-to-Image Diffusion Models via Collaborative Direct Preference Optimization},
  author={Dunlop, Connor and Zheng, Matthew and Venkatesh, Kavana and Yanardag, Pinar},
  journal={arXiv preprint arXiv:2511.05616},
  year={2025}
}
---
