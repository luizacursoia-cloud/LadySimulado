import { Exam } from '@/types/quiz';
import { enemExam } from './enem';
import { provaoPaulistaExam } from './provao-paulista';
import { sarespExam } from './saresp';
import { fuvestExam } from './fuvest';
import { obmepExam } from './obmep';
import { obaExam } from './oba';
import { sisuExam } from './sisu';
import { unicampExam } from './unicamp';
import { unespExam } from './unesp';
import { concursosExam } from './concursos';
import { enccejaExam } from './encceja';

export const allExams: Exam[] = [
  enemExam,
  provaoPaulistaExam,
  sarespExam,
  fuvestExam,
  obmepExam,
  obaExam,
  sisuExam,
  unicampExam,
  unespExam,
  concursosExam,
  enccejaExam,
];

export function getExamBySlug(slug: string): Exam | undefined {
  return allExams.find((exam) => exam.slug === slug || exam.id === slug);
}

export function getExamsByCategory(category: string): Exam[] {
  if (category === 'todos') return allExams;
  return allExams.filter((exam) => exam.category === category || exam.level.toLowerCase().includes(category.toLowerCase()));
}
