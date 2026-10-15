'use client';

import React from 'react';
import { UserSimuladoAttempt } from '@/types/quiz';
import { History, Trophy, TrendingUp, Calendar, ArrowRight, Trash2, BookOpen, Clock } from 'lucide-react';

interface PerformanceHistoryProps {
  attempts: UserSimuladoAttempt[];
  onClearHistory: () => void;
  onRetakeExam: (examSlug: string) => void;
}

export const PerformanceHistory: React.FC<PerformanceHistoryProps> = ({
  attempts,
  onClearHistory,
  onRetakeExam,
}) => {
  const totalAttempts = attempts.length;
  const totalQuestions = attempts.reduce((acc, a) => acc + a.totalQuestions, 0);
  const totalCorrect = attempts.reduce((acc, a) => acc + a.correctAnswers, 0);
  const averagePercentage =
    totalAttempts > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins}m ${String(secs).padStart(2, '0')}s`;
  };

  return (
    <div className="w-full max-w-[1240px] mx-auto py-8 flex flex-col gap-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#006398] font-bold mb-1">
            <History className="w-4 h-4" />
            <span>Histórico Local Sem Cadastro</span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-[#141b2b]">
            Meu Desempenho & Simulados Salvos
          </h2>
          <p className="text-xs md:text-sm text-slate-600 mt-0.5">
            Seus simulados ficam salvos diretamente na memória do seu navegador. Não solicitamos e-mail nem login.
          </p>
        </div>

        {totalAttempts > 0 && (
          <button
            onClick={onClearHistory}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 transition-colors border border-rose-200 cursor-pointer self-start sm:self-auto"
          >
            <Trash2 className="w-4 h-4" />
            <span>Limpar Histórico</span>
          </button>
        )}
      </div>

      {/* Summary Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-500 font-semibold block">Simulados Realizados</span>
            <span className="font-display text-3xl font-extrabold text-[#006398] mt-1 block">
              {totalAttempts}
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-[#cce5ff] text-[#006398] flex items-center justify-center">
            <BookOpen className="w-6 h-6" />
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-500 font-semibold block">Questões Respondidas</span>
            <span className="font-display text-3xl font-extrabold text-[#141b2b] mt-1 block">
              {totalQuestions}
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-[#e9edff] text-[#006398] flex items-center justify-center">
            <Trophy className="w-6 h-6" />
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-500 font-semibold block">Aproveitamento Médio</span>
            <span className="font-display text-3xl font-extrabold text-emerald-700 mt-1 block">
              {averagePercentage}%
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <TrendingUp className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Attempt List */}
      <div className="flex flex-col gap-4">
        <h3 className="font-display font-bold text-lg text-[#141b2b]">
          Histórico de Tentativas Recentes
        </h3>

        {attempts.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-white border border-dashed border-slate-300 flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-[#e9edff] text-[#006398] flex items-center justify-center">
              <History className="w-7 h-7" />
            </div>
            <h4 className="font-display font-bold text-base text-slate-800">
              Nenhum simulado finalizado ainda
            </h4>
            <p className="text-xs text-slate-500 max-w-sm">
              Escolha uma prova no catálogo (ENEM, Provão Paulista, FUVEST, OBMEP) e pratique agora mesmo para ver seus relatórios salvos aqui.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {attempts.map((attempt) => (
              <div
                key={attempt.id}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:shadow-sm transition-all"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-[#006398] uppercase">
                      {attempt.category}
                    </span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {attempt.date}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-base text-slate-900">
                    {attempt.examTitle}
                  </h4>
                  <div className="flex items-center gap-3 mt-1 text-xs text-slate-500">
                    <span>
                      Acertos: <strong className="text-slate-800">{attempt.correctAnswers}</strong> de {attempt.totalQuestions}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {formatTime(attempt.timeSpentSeconds)}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 self-end sm:self-auto">
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block font-semibold">Nota Final</span>
                    <span
                      className={`font-display text-2xl font-extrabold ${
                        attempt.percentage >= 70 ? 'text-emerald-700' : 'text-slate-800'
                      }`}
                    >
                      {attempt.percentage}%
                    </span>
                  </div>

                  <button
                    onClick={() => onRetakeExam(attempt.category)}
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-[#cce5ff] text-slate-700 hover:text-[#001d31] transition-colors cursor-pointer"
                    title="Fazer novamente este simulado"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
