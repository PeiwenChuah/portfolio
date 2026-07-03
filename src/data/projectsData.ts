import { Project } from '../types';

export const projectsData: Project[] = [
  // --- DATA SCIENCE & AI PROJECTS ---
  {
    id: 'healthcare-dashboard-malaysia',
    title: 'Healthcare in Malaysia Interactive Dashboard',
    category: 'data_science',
    description: 'Interactive dashboard visualizing healthcare disparities across Malaysia\'s 16 states.',
    technologies: ['Vega-Lite', 'Vega', 'HTML', 'JavaScript'],
    highlights: [
      'Built an interactive data visualization dashboard analyzing Malaysia\'s healthcare system across infrastructure, workforce, disease burden, and finance using government open data sources.',
      'Analyzed healthcare indicators across all 16 Malaysian states, uncovering significant disparities in hospital capacity and workforce between East and West Malaysia.'
    ],
    link: 'https://peiwenchuah.github.io/FIT2179-A2-Code/',
    media: ['src/media/healthcare.jpeg']
  },
  {
    id: 'movies-dashboard-malaysia',
    title: 'Movies Industry Dashboard in Malaysia',
    category: 'data_science',
    description: 'Tableau dashboard uncovering 25+ years of trends in the Malaysian film industry.',
    technologies: ['Tableau', 'Python', 'Pandas'],
    highlights: [
      'Developed an interactive Tableau dashboard analyzing 25+ years of Malaysian movie data (IMDb & TMDb), including data cleaning, to uncover industry growth trends, seasonal demand, and genre shifts through exploratory data analysis.',
      'Identified and evaluated key factors influencing movie performance, explaining variations in ratings and revenue.'
    ],
    link: 'https://public.tableau.com/views/FIT2179Assignment1Updated/Dashboard6?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
    media: ['src/media/movie.png']
  },
  {
    id: 'multi-llm-orchestration',
    title: 'Multi-LLM Coding System',
    category: 'data_science',
    description: 'Full-stack app that ranks multi-LLM coding responses to return the best answer.',
    technologies: ['Python', 'TypeScript', 'React', 'Firebase', 'Hugging Face API'],
    highlights: [
      'Led backend development for a full-stack web app that orchestrates multiple LLMs (Gemma, Qwen, DeepSeek) to generate, rank, and return the best coding response via a pairwise ranking pipeline.',
      'Benchmarked 6 open-source LLMs on the HumanEval dataset and designed experiments across model-size combinations, discovering that pairing models of similar accuracy (rather than max size) boosted pass@1 by up to +6.39% over the best single model.',
      'Built an automated prompt-optimisation service (using Qwen2.5-Coder-3B) that tested 4 system-prompt variants, improving pass@1 by 2.13% over the unoptimised baseline.',
      'Integrated Firebase to persist chat sessions, model responses, and pairwise ranking metadata, supporting full response traceability and explainability.'
    ],
    media: ['src/media/FINAL DEMO.mp4',]
  },
  {
    id: 'pacman-rl',
    title: 'Pac-Man AI Agent',
    category: 'data_science',
    description: 'AI agent for Pac-Man combining search, adversarial play, and reinforcement learning.',
    technologies: ['Python'],
    highlights: [
      'Designed and implemented A* search with Manhattan-distance heuristic for optimal single-goal pathfinding, and a custom greedy best-first + beam search algorithm (with MST-approximation heuristic) to solve multi-dot collection problems under strict time constraints across 11+ maze layouts.',
      'Built an adversarial game-playing agent using minimax with alpha-beta pruning and a custom evaluation function (ghost/food/capsule distance weighting) plus anti-oscillation logic, improving game scores across 12 maze layouts.',
      'Implemented Value Iteration and Q-Learning (epsilon-greedy) reinforcement learning agents to solve stochastic Markov Decision Processes, tuning discount factor, learning rate, and exploration rate through systematic experimentation across small/medium/large maze environments.',
      'Engineered a multi-layer perceptron from scratch with Leaky ReLU, He/Xavier initialization, L2 regularization, and learning rate decay to predict optimal Pac-Man actions, achieving 97.75% test accuracy.'
    ],
    media: ['src/media/pacman1.mp4', 'src/media/pacman2.mp4']
  },
  {
    id: 'world-values-survey',
    title: 'World Values Survey: Cross-Country Confidence Analysis & Prediction',
    category: 'data_science',
    description: 'Cross-country survey analysis predicting institutional confidence across nations.',
    technologies: ['R', 'dplyr', 'ggplot2', 'glmnet', 'randomForest', 'adabag', 'neuralnet'],
    highlights: [
      'Analyzed 100,000 survey responses across 58 countries, using correlation analysis, t-tests, and LASSO regression to uncover key predictors of institutional confidence and how they diverge between a focus country and the rest of the world.',
      'Built and benchmarked 6 classification models on 20,000 respondents to predict confidence in social organizations, with Boosting emerging as the best overall performer (F1-score of 0.72, AUC of 0.64).'
    ],
    media: ['src/media/survey.png', 'src/media/confidence.png', 'src/media/correlation.png', 'src/media/meanresponse.png', 'src/media/r2.png', 'src/media/significance.png']
  },
  {
    id: 'text-analysis-engine',
    title: 'Text Corpus Analysis',
    category: 'data_science',
    description: 'Text-mining pipeline achieving 100% genre classification across a 21-document corpus.',
    technologies: ['R', 'tm', 'igraph', 'SentimentAnalysis', 'proxy', 'SnowballC', 'ggplot2'],
    highlights: [
      'Built and processed a 21-document text corpus spanning 3 genres (Food, Nature, AI) into a Document-Term Matrix, applying tokenization, stemming, stopword removal, and custom text cleaning to reduce ~3,744 raw terms to 25 discriminative tokens.',
      'Performed hierarchical clustering using cosine distance, achieving 100% genre classification accuracy validated against ground-truth labels.',
      'Conducted sentiment analysis using the QDAP lexicon across all documents and applied pairwise t-tests to identify statistically significant differences in sentiment/positivity across genres.',
      'Designed and built single-mode (document-document and word-word) and bipartite (document-token) network graphs using cosine similarity/shared-term adjacency matrices, applying 7 community detection algorithms (Louvain, Walktrap, Leading Eigenvector, etc.) to identify optimal genre clustering, achieving up to 95% clustering accuracy.'
    ],
    media: ['src/media/corpus_word.png','src/media/corpus_sen.png', 'src/media/corpus_hier.png', 'src/media/corpus_doc.png', 'src/media/corpus_w.png', 'src/media/corpus_bi.png']
  },
  {
    id: 'neural-network-image-text',
    title: 'Neural Network Applications Across Image And Text Data',
    category: 'data_science',
    description: 'Neural networks for text and image classification, reaching 97.5% and 87.4% accuracy.',
    technologies: ['PyTorch', 'Python', 'Matplotlib', 'Numpy', 'Pandas'],
    highlights: [
      'Developed RNNs (LSTM/GRU) and Transformer models (BERT) for text classification on a 5,500-question dataset with 6 main question categories, achieving 97.5% accuracy.',
      'Built DNN and CNN models with adversarial training for image classification on the FashionMNIST dataset (70,000 grayscale images, 28×28 pixels, 10 classes), optimizing performance through hyperparameter tuning, achieving 87.4% accuracy.',
      'Benchmarked the baseline CNN against One-vs-All (OVA) adversarial training, CutMix, and Mixup augmentation strategies, with all three techniques lifting validation accuracy well above the baseline.'
    ],
    media: ['src/media/dl2.png','src/media/dl3.png','src/media/dl4.png', 'src/media/dl1.png']
  },
  {
    id: 'bayesian-model',
    title: 'Pneumonia Diagnosis & Clinical Decision Support System',
    category: 'data_science',
    description: 'Bayesian Network supporting evidence-based pneumonia diagnosis and treatment decisions.',
    technologies: ['Netica', 'Bayesian Networks'],
    highlights: [
      'Designed a 7-node Bayesian Network to model bacterial, viral, and non-pneumonia diagnoses using 7 clinical variables and probabilistic reasoning.',
      'Parameterized conditional probabilities by integrating medical expert knowledge, published clinical literature, and evidence-based assumptions to improve diagnostic accuracy.',
      'Extended the model into a Bayesian Decision Network with 2 decision nodes and 3 utility nodes, enabling expected utility analysis for X-ray and antibiotic treatment decisions.',
      'Performed probabilistic inference and sensitivity analysis across multiple patient scenarios, supporting evidence-based clinical decision-making under uncertainty.'
    ],
    media: ['src/media/netica1.png', 'src/media/netica2.png']
  },
  {
    id: 'diabetes-risk-prediction',
    title: 'Diabetes Risk Prediction System',
    category: 'data_science',
    description: 'SAS Viya pipeline predicting diabetes risk with a 96.49% AUC for Gradient Boosting model.',
    technologies: ['SAS Viya', 'SAS Model Studio'],
    highlights: [
      'Developed a diabetes risk prediction pipeline using SAS Viya with six machine learning models.',
      'Applied feature engineering techniques including skewness correction, imputation, and categorical optimization.',
      'Built a champion Gradient Boosting model with 96.49% AUC, 90.00% sensitivity, and 81.33% KS for high-risk diabetes detection.'
    ],
    media: ['src/media/pipe1.png','src/media/pipe2.png','src/media/pipe3.png', 'src/media/pipe4.png', 'src/media/pipe5.png']
  },
  {
    id: 'run-monash-database',
    title: 'Run Monash Database Management System',
    category: 'data_science',
    description: 'Relational database system managing a running carnival\'s events and fundraising.',
    technologies: ['Oracle SQL', 'PL/SQL', 'MongoDB'],
    highlights: [
      'Developed a database management system for a running carnival, supporting competitor registration, event participation, team management, and charity fundraising.',
      'Designed and implemented a relational database with 7 tables, using constraints and PL/SQL procedures, functions, and triggers to enforce business rules and maintain data integrity.'
    ],
    media: [ 'src/media/database.png']
  },

  // --- COMPUTER SCIENCE PROJECTS ---
  {
    id: 'ai-personality-identification',
    title: 'Artificial Intelligence Personality Identification',
    category: 'computer_science',
    description: 'Fine-tuned GPT-4o system authenticating users via personality analysis.',
    technologies: ['PyTorch', 'Python', 'HuggingFace'],
    highlights: [
      'Developed an AI system that analyzes personality responses and behavioral patterns to enable secure login authentication.',
      'Fine-tuned a HuggingFace GPT-4o model with personality datasets, optimizing hyperparameters for improved sentiment analysis and personality mapping, achieving 90% testing accuracy.',
      'Selected as one of the Top 10 teams from 90+ competing teams at GODAMLAH Hackathon 2024.'
    ],
    media: ['src/media/godam1.png', 'src/media/godam2.png']
  },
  {
    id: 'markdown-parser',
    title: 'Markdown To HTML Parser',
    category: 'computer_science',
    description: 'Haskell-based parser converting Markdown syntax into clean HTML output.',
    technologies: ['Haskell', 'HTML', 'TypeScript', 'CSS', 'AJAX'],
    highlights: [
      'Parsed different types of Markdown syntax and generated its corresponding HTML output using Haskell.',
      'Used AJAX to handle communication between the Haskell backend and the webpage.',
      'Types of Markdown syntax parsed: Image, Footnote references, Free text with text modifiers, Headings, Blockquotes, Code, Ordered lists, Table.'
    ],
    media: ['src/media/haskell2.png','src/media/haskell1.png']
  },
  {
    id: 'guitar-hero',
    title: 'Guitar Hero Game',
    category: 'computer_science',
    description: 'Browser-based rhythm game built with Functional Reactive Programming in TypeScript.',
    technologies: ['TypeScript', 'HTML', 'CSS', 'RxJS'],
    highlights: [
      'Created a music game using Functional Reactive Programming (FRP) techniques in TypeScript.',
      'Used RxJS Observable streams to handle animation, user interaction, and other similar stream behaviours.'
    ],
    media: ['src/media/hero.png']
  },
  {
    id: 'mobile-app',
    title: 'NutriTrack',
    category: 'computer_science',
    description: 'Android app translating dietary scores into personalized nutrition insights.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Room (SQLite)', 'Gemini API', 'SharedPreferences', 'MVVM'],
    highlights: [
      'Built a clinical-grade nutrition Android app that translates HEIFA (Healthy Eating Index) dietary scores into personalized, patient-facing visualizations, following an MVVM architecture across 6+ screens (Login, Questionnaire, Home, Insights, NutriCoach, Clinician Dashboard).',
      'Implemented CSV-based patient authentication and score parsing, validating user ID and phone number against 100+ patient records with sex-specific HEIFA scoring logic.',
      'Designed an Insights dashboard with 12+ category-wise progress indicators (vegetables, fruits, grains, dairy, sodium, sugar, alcohol, etc.) visualizing a composite 0–100 food quality score.',
      'Integrated Google Gemini API to generate personalized, context-aware motivational messages and dietary tips based on each patient\'s individual HEIFA sub-scores, persisting AI-generated history via a Room database.',
      'Built a Clinician/Admin dashboard aggregating population-level statistics (e.g., average HEIFA scores by sex) and surfaced AI-detected data patterns across the patient dataset for healthcare professionals.',
      'Added dark/light theme support with persistent user preferences via SharedPreferences, and multi-screen navigation using Jetpack Compose Navigation with argument passing.'
    ],
    media: ['src/media/app1.png', 'src/media/app2.png', 'src/media/app3.png', 'src/media/app4.png']
  },
  {
    id: 'terminal-game',
    title: 'Static Factory',
    category: 'computer_science',
    description: 'Text-based Java roguelike game built around SOLID object-oriented design.',
    technologies: ['Java', 'Object-Oriented Design', 'UML'],
    highlights: [
      'Designed and implemented a multi-map, text-based roguelike game in Java with 12+ major feature requirements.',
      'Applied SOLID principles, DRY, and connascence-aware design to build extensible actor, item, and behavior hierarchies (e.g., polymorphic attack/consumable systems, growth-stage plant lifecycle, hostile creature AI) supporting easy addition of new entity types.',
      'Built core gameplay systems including inventory/scrap collection, resource trading economy (credit-based purchasing/selling with probabilistic pricing outcomes), combat mechanics (multiple weapons with variable accuracy/damage), and NPC behaviors (wandering, following, stealing, attacking).',
      'Implemented cross-map travel and teleportation mechanics, a subscription-based AI companion item, and a multi-stage plant growth system refactored to eliminate code duplication across tree lifecycle states.'
    ],
    media: ['src/media/2099.png']
  }
];