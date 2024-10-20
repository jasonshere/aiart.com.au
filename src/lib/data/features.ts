import type { Feature } from "$lib/utils/types";

export default [
  {
    name: 'Explaining Recommendation Fairness from a User/Item Perspective',
    description:
      'Recommender systems face challenges in ensuring fairness, and this work introduces Adding-based Counterfactual Fairness Reasoning (ACFR) to address fairness issues by preserving user-item relational structures, showing significant improvements over traditional methods in benchmark tests.',
    image: 'images/features/ACFR.png',
    link: 'https://dl.acm.org/doi/10.1145/3698877',
    tags: [{ label: 'TOIS', color: 'secondary' }, { label: 'Q1 Journal', color: 'secondary' }, { label: '2024' }, { label: 'Fairness in Machine Learning' }, { label: 'Recommender Systems' }]
  },
  {
    name: 'FairGAN: GANs-based Fairness-aware Learning for Recommendations with Implicit Feedback',
    description:
      'Ranking algorithms in recommender systems often prioritize utility, leading to fairness issues. To address this, we propose FairGAN, a GAN-based approach that dynamically generates fairness signals, balancing exposure fairness with user utility without treating unobserved interactions as negative.',
    image: 'images/features/FairGAN.png',
    link: 'https://dl.acm.org/doi/10.1145/3485447.3511958',
    tags: [{ label: 'The Web Conference', color: 'secondary' }, { label: 'A* Conference', color: 'secondary' }, { label: '2022' }, { label: 'GAN' }, { label: 'Fairness in Recommender Systems' }]
  },
  {
    name: 'The Footprint of Factorization Models and Their Applications in Collaborative Filtering',
    description:
      'Factorization models are vital for CF, but intermediate data from their training is often overlooked. We introduce Convergence Pattern to enhance prediction reliability and recommendation quality, showing effectiveness in benchmark experiments.',
    image: 'images/features/Footprint.png',
    link: 'https://dl.acm.org/doi/10.1145/3490475',
    tags: [{ label: 'TOIS', color: 'secondary' }, { label: 'Q1 Journal', color: 'secondary' }, { label: '2021' }, { label: 'Recommender Systems' }]
  },
  {
    name: 'CRUISE on Quantum Computing for Feature Selection in Recommender Systems',
    description:
      'This paper explores using Quantum Annealers for feature selection in recommendation algorithms, framing it as a QUBO problem. By integrating Counterfactual Analysis, we enhance the performance of the item-based KNN algorithm, with experiments showing promising results.',
    image: 'images/features/Quantum.png',
    link: 'https://arxiv.org/abs/2407.02839',
    tags: [{ label: 'Quantum Computing', color: 'secondary' }, { label: 'QUBO', color: 'secondary' }, { label: '2024' }]
  },
] as Feature[];