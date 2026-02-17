
export interface ParticipantStep {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'active' | 'completed';
}

export interface Dimension {
  id: string;
  title: string;
  description: string;
  icon: string;
  detailedInfo: string;
}

export interface FrameworkTab {
  id: string;
  label: string;
  content: string;
  example: string;
  visualType: 'game-theory' | 'behavioral' | 'decision' | 'systems';
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    type: 'Analytical' | 'Adaptive' | 'Reactive';
    points: number;
  }[];
}
