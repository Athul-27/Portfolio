export const projects = [
  {
    id: 'deepfake',
    title: 'Cross-Lingual Audio Deepfake Detection',
    subtitle: 'Using Vision Transformers',
    accent: 'comic-red',
    blurb:
      'An audio deepfake detection system that turns sound into Mel-spectrogram images and classifies them with Vision Transformers.',
    bullets: [
      'Converted audio into Mel-spectrogram images for vision-based classification.',
      'Trained on 126K+ multilingual audio samples.',
      'Built on Vision Transformers for cross-lingual generalization.',
    ],
    tech: ['Python', 'PyTorch', 'HuggingFace Transformers', 'Torchaudio', 'Librosa'],
    repo: '',
    demo: '',
  },
  {
    id: 'fairness',
    title: 'Adaptive Fairness for Skin Cancer Diagnosis',
    subtitle: 'Real-Time Fairness in Federated Learning',
    accent: 'comic-blue',
    blurb:
      'A federated learning framework for fair skin cancer diagnosis across diverse skin tones, with privacy-preserving distributed training.',
    bullets: [
      'Implemented EfficientNet-B0 with the Flower federated framework.',
      'Focused on fairness across diverse skin tones.',
      'Privacy-preserving distributed training across clients.',
    ],
    tech: ['Python', 'PyTorch', 'EfficientNet-B0', 'Flower'],
    repo: '',
    demo: '',
  },
  {
    id: 'iot',
    title: 'Network Anomaly Detection in IoT',
    subtitle: 'Knowledge-Distilled Temporal Convolutional Networks',
    accent: 'comic-yellow',
    blurb:
      'A lightweight IoT intrusion detection system that shrinks the model with knowledge distillation while keeping strong accuracy.',
    bullets: [
      'Built on the IoT-23 intrusion detection dataset.',
      'Reduced model size from 2.0 MB to 0.5 MB via knowledge distillation.',
      'Achieved 87.54% detection accuracy.',
    ],
    tech: ['Python', 'TensorFlow', 'TCN'],
    repo: '',
    demo: '',
  },
  {
    id: 'hrms',
    title: 'Full-Stack HR Management System',
    subtitle: 'Role-based Human Resource Platform',
    accent: 'comic-green',
    blurb:
      'A role-based HR application covering the employee lifecycle, from attendance and payroll to recruitment and reporting.',
    bullets: [
      'Employee, attendance, and leave management modules.',
      'Payroll processing with automated payslip generation.',
      'Recruitment and reporting modules behind JWT auth.',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    repo: '',
    demo: '',
  },
]
