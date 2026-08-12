export const cvData = {
  name: "Sedjro Salomon Hotegni",
  title: "Machine Learning Engineer | Scientific ML & Research Software",
  shortIntro: "Final-year PhD candidate in Computer Science with 3+ years of experience designing and implementing deep learning models. Published at ICLR and ICML.",
  location: "Dortmund, Germany",
  phone: "+49 157 54299516",
  email: "salomonhotegni00@gmail.com",
  github: "https://github.com/salomonhotegni",
  linkedin: "https://linkedin.com/in/sedjro-salomon-hotegni",
  
  about: "Final-year PhD candidate in Computer Science and applied machine learning researcher with 3+ years of experience designing, implementing, and evaluating models in Python and PyTorch. Published at ICLR and ICML, with a track record of developing original algorithms, rigorous experimental benchmarks, and reusable research software. Experience spans generative modelling, representation learning, ranking and personalization, transformer-based text embeddings, and ML deployment. Interested in translating advanced deep learning methods into reliable solutions for complex datasets at the interface of computational and experimental research.",

  skills: {
    "Programming Languages": ["Python (advanced)", "NumPy", "pandas", "SciPy", "SQL", "R", "C/C++", "Java", "Git"],
    "Applied ML": ["PyTorch", "TensorFlow", "Deep Learning", "Diffusion Models", "Flow Matching", "Representation Learning", "Adversarial Robustness", "Multi-Objective Optimization", "Bayesian Optimization"],
    "Ranking & Personalization": ["Recommender Systems", "Implicit-Feedback Modelling", "Semantic Retrieval", "Cold-Start Strategies", "Diversity-Aware Reranking", "Recall@K", "NDCG@K", "MRR"],
    "ML Systems & Research Engineering": ["FAISS", "PostgreSQL/pgvector", "FastAPI", "Docker", "GitHub Actions", "pytest", "Linux", "Conda", "Slurm/HPC", "PyPI Packaging", "Artifact Versioning", "Latency Benchmarking", "Experimental Design", "Reproducible Workflows", "Technical Documentation"],
    "Languages": ["English (fluent)", "French (native)", "German (intermediate)"],
  },

  experience: [
    {
      company: "TU Dortmund University - Safe Autonomous Systems Group",
      title: "Research Scientist (Multi-Objective Machine Learning)",
      location: "Dortmund, Germany",
      startDate: "Oct. 2024",
      endDate: "Present",
      description: [
        "Designed and implemented SPREAD (ICLR 2026), a PyTorch/DDPM framework that learns and refines Pareto fronts for multi-objective optimization.",
        "Built evaluation workflows across 11 synthetic and real-world tasks; ranked 1st on 9/11 tasks for hypervolume and 8/11 for diversity in online settings, and achieved the best average ranking across offline benchmarks.",
        "Packaged the method as moospread and released it on PyPI for reusable research workflows.",
        "Developed and benchmarked MOREL (ICANN 2025), a PyTorch representation-learning framework that improved AutoAttack accuracy by up to 2 percentage points on CIFAR-100 and at least 1 point on Tiny-ImageNet; released advermorel on PyPI.",
      ],
    },
    {
      company: "Paderborn University - Data Science for Engineering Group",
      title: "Research Scientist (Multi-Objective Machine Learning)",
      location: "Paderborn, Germany",
      startDate: "Dec. 2022",
      endDate: "Sep. 2024",
      description: [
        "Designed a PyTorch training workflow to jointly optimize neural-network sparsity and predictive performance through the MDMTN multi-task architecture (IJCNN 2024), covering method development, implementation, and empirical evaluation.",
      ],
    },
    {
      company: "Fatima Fellowship",
      title: "Research Intern",
      location: "Remote",
      startDate: "May 2022",
      endDate: "Nov. 2022",
      description: [
        "Developed approximation algorithms for fair range clustering with group interval constraints; obtained constant-factor guarantees through structured linear-programming relaxations and rounding (ICML 2023).",
        "Collaborated remotely with an international research team and translated complex theoretical findings into clear technical arguments and reproducible results.",
      ],
    },
  ],

  projects: [
    {
      name: "SemanticCart: Hybrid Product Recommendation System",
      year: "2026",
      description: "End-to-end recommender system over 814,586 chronological Amazon interactions, combining implicit ALS, semantic embeddings, session intent, and diversity-aware reranking.",
      technologies: ["Python", "PyTorch", "OpenAI", "FAISS", "FastAPI", "PostgreSQL", "Docker"],
      achievements: [
        "Improved frozen-test Recall@10 by 7.2%, NDCG@10 by 9.0%, MRR@10 by 10.3%, and catalogue coverage by 25.4% over ALS",
        "Implemented cold-start and similar-item retrieval with FAISS HNSW (0.416 ms p95)",
        "Validated pgvector HNSW at 99.96% mean Top-10 overlap with FAISS",
        "Packaged a 331.77 MiB versioned model bundle with FastAPI and Docker; measured 49.783 ms end-to-end p95 over 500 sequential loopback requests",
        "Enforced quality with 248 tests and four CI gates",
      ],
    },
  ],

  education: [
    {
      school: "TU Dortmund University (previously Paderborn University, Dec. 2022 - Sep. 2024)",
      degree: "Ph.D. in Computer Science",
      field: "Multi-Objective Optimization for Efficient, Robust, and Scalable Machine Learning",
      location: "Dortmund, Germany",
      startDate: "2022",
      endDate: "Present (expected Nov. 2026)",
    },
    {
      school: "African Institute for Mathematical Sciences (AIMS)",
      degree: "M.Sc. in Mathematical Sciences",
      field: "Data Science stream",
      location: "Kigali, Rwanda",
      startDate: "2021",
      endDate: "2022",
      note: "Full scholarship, Distinction",
    },
    {
      school: "University of Abomey-Calavi (UAC)",
      degree: "B.Sc. in Mathematics and Applications",
      field: "Mathematics and Computing stream",
      location: "Abomey-Calavi, Benin",
      startDate: "2017",
      endDate: "2020",
      note: "Full scholarship",
    },
  ],

  publications: [
    {
      title: "SPREAD: Sampling-based Pareto Front Refinement via Efficient Adaptive Diffusion",
      authors: "S. S. Hotegni and S. Peitz",
      venue: "ICLR 2026",
    },
    {
      title: "Enhancing Adversarial Robustness Through Multi-Objective Representation Learning",
      authors: "S. S. Hotegni and S. Peitz",
      venue: "ICANN 2025",
    },
    {
      title: "Multi-Objective Optimization for Sparse Deep Multi-Task Learning",
      authors: "S. S. Hotegni, M. Berkemeier, and S. Peitz",
      venue: "IJCNN 2024",
    },
    {
      title: "Approximation Algorithms for Fair Range Clustering",
      authors: "S. S. Hotegni, S. Mahabadi, and A. Vakilian",
      venue: "ICML 2023",
    },
  ],

  openSource: [
    {
      name: "moospread",
      url: "https://pypi.org/project/moospread/",
      description: "Reusable PyTorch package implementing SPREAD for sampling-based Pareto front learning",
    },
    {
      name: "advermorel",
      url: "https://pypi.org/project/advermorel/",
      description: "PyTorch package for multi-objective representation learning and adversarial robustness",
    },
  ],

  achievements: [
    {
      title: "Teaching Assistant",
      organization: "TU Dortmund University",
      description: "Lead exercise sessions and assess assignments for Mathematics for Computer Science and Software Engineering",
      date: "Oct. 2025 - Present",
      location: "Dortmund, Germany",
    },
    {
      title: "Conference Talk",
      organization: "EURO 2025",
      description: "A Diffusion-Driven Generative Framework for Pareto Front Learning",
      date: "Jun. 2025",
      location: "Leeds, UK",
    },
    {
      title: "Research Poster",
      organization: "DALI 2025",
      description: "Enhancing Adversarial Robustness through Multi-Objective Representation Learning",
      date: "Apr. 2025",
      location: "Sorrento, Italy",
    },
    {
      title: "Conference Talk",
      organization: "EUCCO 2023",
      description: "Multi-Objective Optimization for Deep Neural Network Training",
      date: "Sep. 2023",
      location: "Heidelberg, Germany",
    },
  ],

  certifications: [
    {
      name: "Google Data Analytics Professional Certificate",
      issuer: "Google (Coursera)",
      year: "2021",
      description: "Data preparation, processing, analysis, and visualization",
    },
    {
      name: "Algorithmic Toolbox",
      issuer: "UC San Diego (Coursera)",
      year: "2026",
      description: "Algorithm design using divide-and-conquer, greedy methods, and dynamic programming",
    },
    {
      name: "3D Reconstruction - Multiple Viewpoints",
      issuer: "Columbia University (Coursera)",
      year: "2026",
      description: "Camera geometry, calibration, stereo vision, and multi-view reconstruction",
    },
  ],
}
