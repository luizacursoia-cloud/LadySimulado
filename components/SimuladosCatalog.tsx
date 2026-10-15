'use client';

import React, { useState } from 'react';
import { Exam } from '@/types/quiz';
import {
  BookOpen,
  Timer,
  Award,
  ArrowRight,
  Filter,
  CheckCircle2,
  Sparkles,
  HelpCircle,
} from 'lucide-react';

interface SimuladosCatalogProps {
  exams: Exam[];
  onSelectExam: (examSlug: string) => void;
  initialFilter?: string;
}

export const SimuladosCatalog: React.FC<SimuladosCatalogProps> = ({
  exams,
  onSelectExam,
  initialFilter = 'todos',
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>(initialFilter);
  const [searchFilter, setSearchFilter] = useState('');

  const filterCategories = [
    { id: 'todos', label: 'Todos os Exames' },
    { id: 'enem', label: 'ENEM & Provão Paulista' },
    { id: 'vestibulares', label: 'Grandes Vestibulares' },
    { id: 'fundamental', label: 'Ensino Fundamental & SARESP' },
    { id: 'olimpiadas', label: 'Olimpíadas (OBMEP & OBA)' },
    { id: 'concursos', label: 'Concursos Públicos' },
    { id: 'certificacoes', label: 'Certificação ENCCEJA' },
  ];

  const filteredExams = exams.filter((exam) => {
    // Category / level filter
    let matchesCategory = true;
    if (selectedFilter === 'enem') {
      matchesCategory = exam.category === 'enem' || exam.category === 'provao-paulista' || exam.category === 'sisu';
    } else if (selectedFilter === 'vestibulares') {
      matchesCategory = exam.level === 'Grandes Vestibulares' || exam.category === 'fuvest' || exam.category === 'unicamp' || exam.category === 'unesp';
    } else if (selectedFilter === 'fundamental') {
      matchesCategory = exam.level === 'Ensino Fundamental' || exam.category === 'saresp';
    } else if (selectedFilter === 'olimpiadas') {
      matchesCategory = exam.level === 'Olimpíadas' || exam.category === 'obmep' || exam.category === 'oba';
    } else if (selectedFilter === 'concursos') {
      matchesCategory = exam.level === 'Concursos Públicos' || exam.category === 'concursos';
    } else if (selectedFilter === 'certificacoes') {
      matchesCategory = exam.category === 'encceja';
    }

    // Search query filter
    const matchesSearch =
      exam.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
      exam.description.toLowerCase().includes(searchFilter.toLowerCase()) ||
      exam.tags.some((t) => t.toLowerCase().includes(searchFilter.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full max-w-[1240px] mx-auto py-8 flex flex-col gap-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#006398] font-bold">
          <BookOpen className="w-4 h-4" />
          <span>Catálogo Geral de Simulados</span>
        </div>
        <h2 className="font-display text-2xl md:text-3xl font-extrabold text-[#141b2b]">
          Simulados Oficiais Disponíveis
        </h2>
        <p className="text-xs md:text-sm text-slate-600 max-w-2xl leading-relaxed">
          Todos os simulados contam com <strong>no mínimo 20 questões completas</strong>, cronômetro de ritmo, resolução comentada e acesso direto sem necessidade de cadastro.
        </p>
      </div>

      {/* Filter Chips Bar */}
      <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-slate-200">
        {filterCategories.map((f) => (
          <button
            key={f.id}
            onClick={() => setSelectedFilter(f.id)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              selectedFilter === f.id
                ? 'bg-[#006398] text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid of Exams */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExams.map((exam) => (
          <div
            key={exam.id}
            className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="flex flex-col gap-3">
              {/* Top badge & Question Count */}
              <div className="flex items-center justify-between gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#e9edff] text-[#006398] font-bold text-[10px] uppercase tracking-wider">
                  {exam.badge}
                </span>
                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                  {exam.questionCount} Questões Comentadas
                </span>
              </div>

              {/* Title & subtitle */}
              <div>
                <h3 className="font-display font-bold text-lg text-[#141b2b] group-hover:text-[#006398] transition-colors leading-tight">
                  {exam.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  {exam.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                {exam.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 pt-1">
                {exam.tags.slice(0, 3).map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom info & CTA button */}
            <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <Timer className="w-3.5 h-3.5 text-[#006398]" />
                <span>{exam.recommendedMinutes} min sugeridos</span>
              </div>

              <button
                onClick={() => onSelectExam(exam.slug)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#006398] hover:bg-[#004b73] transition-all shadow-sm cursor-pointer group-hover:shadow"
              >
                <span>Fazer Simulado</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
