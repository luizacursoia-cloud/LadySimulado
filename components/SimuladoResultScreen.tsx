'use client';

import React, { useState } from 'react';
import { Exam, Question, UserSimuladoAttempt } from '@/types/quiz';
import {
  Trophy,
  CheckCircle2,
  XCircle,
  Timer,
  Clock,
  Sparkles,
  BookOpen,
  ArrowRight,
  RotateCcw,
  Printer,
  Share2,
  Flag,
  Lightbulb,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Layers,
} from 'lucide-react';

interface SimuladoResultScreenProps {
  exam: Exam;
  attempt: UserSimuladoAttempt;
  onRetakeExam: () => void;
  onRetakeErrorsOnly: (errorQuestions: Question[]) => void;
  onBackToCatalog: () => void;
}

export const SimuladoResultScreen: React.FC<SimuladoResultScreenProps> = ({
  exam,
  attempt,
  onRetakeExam,
  onRetakeErrorsOnly,
  onBackToCatalog,
}) => {
  const [filter, setFilter] = useState<'all' | 'correct' | 'wrong' | 'review'>('all');
  const [expandedQuestions, setExpandedQuestions] = useState<Record<number, boolean>>({});

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins}m ${String(secs).padStart(2, '0')}s`;
  };

  const avgTimePerQuestion = Math.round(attempt.timeSpentSeconds / attempt.totalQuestions);

  // Performance classification
  const getPerformanceBadge = (pct: number) => {
    if (pct >= 85) {
      return {
        title: 'Excelente! Nível de Aprovação em Alta Concorrência',
        description: 'Sua pontuação está dentro do patamar de corte para Medicina (USP/Unicamp) e concursos de topo.',
        color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
        badge: 'Top 5% Performance',
      };
    }
    if (pct >= 70) {
      return {
        title: 'Muito Bom! Ótima Competitividade',
        description: 'Desempenho sólido e competitivo para ampla maioria das carreiras e federais.',
        color: 'text-blue-700 bg-blue-50 border-blue-200',
        badge: 'Competitivo',
      };
    }
    if (pct >= 50) {
      return {
        title: 'Bom Rendimento - Oportunidade de Lapidação',
        description: 'Você dominou os conceitos fundamentais; revise as dicas do gabarito para saltar acima dos 80%.',
        color: 'text-amber-700 bg-amber-50 border-amber-200',
        badge: 'Em Evolução',
      };
    }
    return {
      title: 'Diagnóstico Inicial - Foco no Reforço de Conteúdo',
      description: 'Use as resoluções comentadas abaixo para mapear os conteúdos que necessitam de estudo direcionado.',
      color: 'text-rose-700 bg-rose-50 border-rose-200',
      badge: 'Treino Recomendado',
    };
  };

  const performance = getPerformanceBadge(attempt.percentage);

  // Wrong questions list for retake
  const wrongQuestions = exam.questions.filter(
    (q) => attempt.userAnswers[q.number] !== q.correctOption
  );

  // Filtered list
  const filteredQuestions = exam.questions.filter((q) => {
    const isCorrect = attempt.userAnswers[q.number] === q.correctOption;
    const isMarked = attempt.markedForReview.includes(q.number);

    if (filter === 'correct') return isCorrect;
    if (filter === 'wrong') return !isCorrect;
    if (filter === 'review') return isMarked;
    return true;
  });

  const toggleExpand = (qNum: number) => {
    setExpandedQuestions((prev) => ({
      ...prev,
      [qNum]: !prev[qNum],
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full max-w-[1240px] mx-auto py-6 flex flex-col gap-8 animate-in fade-in duration-300">
      {/* Header Result Card */}
      <div className="rounded-3xl bg-white p-6 md:p-10 shadow-lg border border-slate-200/80 flex flex-col gap-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-3 py-0.5 rounded-full bg-[#e9edff] text-[#006398] text-xs font-bold uppercase tracking-wider">
                {exam.badge}
              </span>
              <span className="text-xs text-slate-500">{attempt.date}</span>
            </div>
            <h1 className="font-display text-2xl md:text-3xl font-extrabold text-[#141b2b]">
              Relatório de Desempenho: {exam.title}
            </h1>
          </div>

          <div className="flex items-center gap-2 self-end md:self-auto">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
              title="Imprimir ou salvar em PDF"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir Gabarito</span>
            </button>
            <button
              onClick={onBackToCatalog}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#0f2027] hover:bg-[#006398] transition-colors cursor-pointer"
            >
              <Layers className="w-4 h-4 text-[#5bb8fe]" />
              <span>Outros Simulados</span>
            </button>
          </div>
        </div>

        {/* Big Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Acertos */}
          <div className="rounded-2xl bg-[#f9f9ff] p-5 border border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-500 font-semibold block">Total de Acertos</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="font-display text-3xl font-extrabold text-[#006398]">
                  {attempt.correctAnswers}
                </span>
                <span className="text-sm text-slate-500 font-bold">/ {attempt.totalQuestions}</span>
              </div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#cce5ff] text-[#006398] flex items-center justify-center">
              <Trophy className="w-6 h-6" />
            </div>
          </div>

          {/* Card 2: Porcentagem */}
          <div className="rounded-2xl bg-[#f9f9ff] p-5 border border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-500 font-semibold block">Aproveitamento</span>
              <span className="font-display text-3xl font-extrabold text-[#141b2b] mt-1 block">
                {attempt.percentage}%
              </span>
            </div>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm ${
              attempt.percentage >= 70 ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
            }`}>
              <Sparkles className="w-6 h-6" />
            </div>
          </div>

          {/* Card 3: Tempo Total */}
          <div className="rounded-2xl bg-[#f9f9ff] p-5 border border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-500 font-semibold block">Tempo Total Gasto</span>
              <span className="font-mono text-2xl font-bold text-slate-800 mt-1 block">
                {formatTime(attempt.timeSpentSeconds)}
              </span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
              <Timer className="w-6 h-6" />
            </div>
          </div>

          {/* Card 4: Ritmo Médio */}
          <div className="rounded-2xl bg-[#f9f9ff] p-5 border border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-500 font-semibold block">Tempo por Questão</span>
              <span className="font-mono text-2xl font-bold text-slate-800 mt-1 block">
                {formatTime(avgTimePerQuestion)}
              </span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Pedagogical Diagnostic Banner */}
        <div className={`p-5 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${performance.color}`}>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/60">
                {performance.badge}
              </span>
              <h4 className="font-display font-bold text-base">{performance.title}</h4>
            </div>
            <p className="text-xs leading-relaxed opacity-90">{performance.description}</p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onRetakeExam}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-800 shadow-sm hover:bg-slate-50 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Refazer Simulado</span>
            </button>

            {wrongQuestions.length > 0 && (
              <button
                onClick={() => onRetakeErrorsOnly(wrongQuestions)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#006398] text-white shadow-sm hover:bg-[#004b73] transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Treinar Erros ({wrongQuestions.length})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Gabarito Comentado Section */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-xl md:text-2xl font-extrabold text-[#141b2b]">
              Gabarito Comentado Passo a Passo
            </h2>
            <p className="text-xs md:text-sm text-slate-600 mt-0.5">
              Confira a fundamentação teórica oficial, dicas práticas e alertas contra pegadinhas para cada questão.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filter === 'all' ? 'bg-white text-[#006398] font-bold shadow-xs' : 'text-slate-600'
              }`}
            >
              Todas ({exam.questions.length})
            </button>
            <button
              onClick={() => setFilter('correct')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 ${
                filter === 'correct' ? 'bg-white text-emerald-700 font-bold shadow-xs' : 'text-slate-600'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Acertos ({attempt.correctAnswers})
            </button>
            <button
              onClick={() => setFilter('wrong')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 ${
                filter === 'wrong' ? 'bg-white text-rose-700 font-bold shadow-xs' : 'text-slate-600'
              }`}
            >
              <XCircle className="w-3.5 h-3.5 text-rose-600" />
              Erros ({wrongQuestions.length})
            </button>
            {attempt.markedForReview.length > 0 && (
              <button
                onClick={() => setFilter('review')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 ${
                  filter === 'review' ? 'bg-white text-amber-700 font-bold shadow-xs' : 'text-slate-600'
                }`}
              >
                <Flag className="w-3.5 h-3.5 text-amber-600" />
                Revisão ({attempt.markedForReview.length})
              </button>
            )}
          </div>
        </div>

        {/* Questions Resolutions List */}
        <div className="flex flex-col gap-4">
          {filteredQuestions.map((q) => {
            const studentAnswer = attempt.userAnswers[q.number];
            const isCorrect = studentAnswer === q.correctOption;
            const isExpanded = expandedQuestions[q.number] !== false; // Expanded by default for clarity

            return (
              <div
                key={q.id}
                className={`rounded-2xl bg-white p-5 md:p-6 border shadow-xs transition-all ${
                  isCorrect
                    ? 'border-emerald-200/80 bg-white'
                    : 'border-rose-200/80 bg-rose-50/20'
                }`}
              >
                {/* Question header row */}
                <div
                  onClick={() => toggleExpand(q.number)}
                  className="flex items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${
                        isCorrect
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {isCorrect ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-display font-bold text-sm md:text-base text-slate-900">
                          Questão {q.number}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-medium">
                          {q.subject} • {q.topic}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-right text-xs">
                      <span className="text-slate-400 block text-[10px]">Sua resposta / Gabarito</span>
                      <span className="font-bold">
                        <span className={isCorrect ? 'text-emerald-700' : 'text-rose-600'}>
                          {studentAnswer || 'Em branco'}
                        </span>{' '}
                        / <span className="text-emerald-700">{q.correctOption}</span>
                      </span>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-4 text-xs md:text-sm animate-in fade-in duration-200">
                    {/* Context text if exists */}
                    {q.contextText && (
                      <div className="p-3.5 rounded-xl bg-slate-50 border-l-4 border-slate-300 text-slate-600 italic text-xs leading-relaxed">
                        {q.contextText}
                      </div>
                    )}

                    {/* Statement */}
                    <div className="font-semibold text-slate-900 leading-relaxed">
                      {q.statement}
                    </div>

                    {/* Options status */}
                    <div className="grid grid-cols-1 gap-2 pt-1">
                      {q.options.map((opt) => {
                        const isChosen = studentAnswer === opt.id;
                        const isGabarito = q.correctOption === opt.id;

                        let style = 'border-slate-200 bg-white text-slate-700';
                        if (isGabarito) {
                          style = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold ring-1 ring-emerald-500';
                        } else if (isChosen && !isGabarito) {
                          style = 'border-rose-400 bg-rose-50 text-rose-950 font-semibold';
                        }

                        return (
                          <div
                            key={opt.id}
                            className={`p-3 rounded-xl border flex items-start gap-2.5 ${style}`}
                          >
                            <span
                              className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs shrink-0 ${
                                isGabarito
                                  ? 'bg-emerald-600 text-white'
                                  : isChosen
                                  ? 'bg-rose-600 text-white'
                                  : 'bg-slate-100 text-slate-600'
                              }`}
                            >
                              {opt.id}
                            </span>
                            <span className="flex-1 text-xs md:text-sm">{opt.text}</span>
                            {isGabarito && (
                              <span className="text-[11px] font-bold text-emerald-700 shrink-0 self-center">
                                (Gabarito Correto)
                              </span>
                            )}
                            {isChosen && !isGabarito && (
                              <span className="text-[11px] font-bold text-rose-700 shrink-0 self-center">
                                (Sua Escolha)
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Comentário Pedagógico Oficial */}
                    <div className="mt-2 p-4 rounded-xl bg-[#e0f2fe]/40 border border-[#5bb8fe]/30 flex flex-col gap-1.5 text-[#002130]">
                      <div className="flex items-center gap-1.5 font-bold text-xs text-[#006398]">
                        <BookOpen className="w-4 h-4" />
                        <span>Resolução Comentada Oficial:</span>
                      </div>
                      <p className="text-xs md:text-sm text-slate-800 leading-relaxed font-normal">
                        {q.explanation}
                      </p>
                    </div>

                    {/* Teacher Tip & Trap Alert */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                      {q.teacherTip && (
                        <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-950 flex flex-col gap-1 text-xs">
                          <div className="flex items-center gap-1.5 font-bold text-amber-800">
                            <Lightbulb className="w-4 h-4 text-amber-600" />
                            <span>Dica do Professor</span>
                          </div>
                          <p className="leading-snug text-slate-800">{q.teacherTip}</p>
                        </div>
                      )}

                      {q.trapAlert && (
                        <div className="p-3 rounded-xl bg-rose-50 border border-rose-200/80 text-rose-950 flex flex-col gap-1 text-xs">
                          <div className="flex items-center gap-1.5 font-bold text-rose-800">
                            <AlertTriangle className="w-4 h-4 text-rose-600" />
                            <span>Alerta contra Pegadinha da Banca</span>
                          </div>
                          <p className="leading-snug text-slate-800">{q.trapAlert}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
