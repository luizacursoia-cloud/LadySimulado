export type ExamCategory =
  | 'enem'
  | 'provao-paulista'
  | 'saresp'
  | 'fuvest'
  | 'obmep'
  | 'oba'
  | 'sisu'
  | 'unicamp'
  | 'unesp'
  | 'concursos'
  | 'encceja';

export type ExamLevel =
  | 'Ensino Fundamental'
  | 'Ensino Médio'
  | 'Grandes Vestibulares'
  | 'Olimpíadas'
  | 'Concursos Públicos'
  | 'Certificações';

export interface QuestionOption {
  id: 'A' | 'B' | 'C' | 'D' | 'E';
  text: string;
}

export interface Question {
  id: string;
  number: number;
  subject: string;
  topic: string;
  difficulty?: 'Fácil' | 'Média' | 'Difícil';
  statement: string;
  contextText?: string;
  options: QuestionOption[];
  correctOption: 'A' | 'B' | 'C' | 'D' | 'E';
  explanation: string;
  teacherTip?: string;
  trapAlert?: string;
}

export interface Exam {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: ExamCategory;
  level: ExamLevel;
  questionCount: number;
  recommendedMinutes: number;
  banca: string;
  badge: string;
  highlight?: boolean;
  description: string;
  tags: string[];
  questions: Question[];
}

export interface UserSimuladoAttempt {
  id: string;
  examId: string;
  examTitle: string;
  category: ExamCategory;
  date: string;
  totalQuestions: number;
  correctAnswers: number;
  percentage: number;
  timeSpentSeconds: number;
  userAnswers: Record<number, 'A' | 'B' | 'C' | 'D' | 'E'>;
  markedForReview: number[];
}
