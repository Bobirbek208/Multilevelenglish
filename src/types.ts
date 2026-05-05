export type Section = 'listening' | 'reading' | 'writing';

export interface Question {
  id: number;
  type: 'multiple-choice' | 'gap-fill' | 'matching' | 'map' | 'tfni';
  text?: string;
  options?: string[];
  correctAnswer: string;
  paragraph?: string; // For headings
}

export interface ExamPart {
  id: number;
  title: string;
  instruction: string;
  audioUrl?: string;
  text?: string;
  questions: Question[];
  hasMap?: boolean;
}

export interface ExamData {
  listening: ExamPart[];
  reading: ExamPart[];
}

export interface UserAnswers {
  listening: Record<number, string>;
  reading: Record<number, string>;
  writing: { task1: string; task2: string };
}
