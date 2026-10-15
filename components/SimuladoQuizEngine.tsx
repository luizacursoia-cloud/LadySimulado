'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Exam, Question, UserSimuladoAttempt } from '@/types/quiz';
import {
  Timer,
  Pause,
  Play,
  Flag,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  HelpCircle,
  AlertTriangle,
  RotateCcw,
  Eye,
  EyeOff,
  Strikethrough,
  Check,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Volume2,
  VolumeX,
} from 'lucide-react';

interface SimuladoQuizEngineProps {
  exam: Exam;
  onFinishSimulado: (attempt: UserSimuladoAttempt) => void;
  onExit: () => void;
}

export const SimuladoQuizEngine: React.FC<SimuladoQuizEngineProps> = ({
  exam,
  onFinishSimulado,
  onExit,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D' | 'E'>>({});
  const [markedForReview, setMarkedForReview] = useState<number[]>([]);
  const [eliminatedOptions, setEliminatedOptions] = useState<Record<number, string[]>>({});
  
  // Timer state
  const totalRecommendedSeconds = exam.recommendedMinutes * 60;
  const [secondsRemaining, setSecondsRemaining] = useState(totalRecommendedSeconds);
  const [timerRunning, setTimerRunning] = useState(true);
  const [timerEnabled, setTimerEnabled] = useState(true);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  // Modal confirm finish
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [fontSizeClass, setFontSizeClass] = useState<'text-sm' | 'text-base' | 'text-lg'>('text-base');

  const currentQuestion = exam.questions[currentQuestionIndex];
  const totalQuestions = exam.questions.length;
  const answeredCount = Object.keys(userAnswers).length;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);

  // Timer countdown effect
  useEffect(() => {
    if (!timerRunning || !timerEnabled) return;

    const interval = setInterval(() => {
      setSecondsRemaining((prev) => (prev > 0 ? prev - 1 : 0));
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timerRunning, timerEnabled]);

  // Format seconds to HH:MM:SS
  const formatTime = (totalSec: number) => {
    const hours = Math.floor(totalSec / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    if (hours > 0) {
      return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleSelectOption = useCallback((optionId: 'A' | 'B' | 'C' | 'D' | 'E') => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion.number]: optionId,
    }));
  }, [currentQuestion.number]);

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showConfirmModal) return;

      const key = e.key.toUpperCase();
      if (['A', 'B', 'C', 'D', 'E'].includes(key)) {
        // Select option if available
        const hasOption = currentQuestion.options.some((o) => o.id === key);
        if (hasOption) {
          handleSelectOption(key as 'A' | 'B' | 'C' | 'D' | 'E');
        }
      } else if (key === '1' || key === '2' || key === '3' || key === '4' || key === '5') {
        const index = parseInt(key, 10) - 1;
        if (currentQuestion.options[index]) {
          handleSelectOption(currentQuestion.options[index].id);
        }
      } else if (e.key === 'ArrowRight' && currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else if (e.key === 'ArrowLeft' && currentQuestionIndex > 0) {
        setCurrentQuestionIndex((prev) => prev - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentQuestionIndex, currentQuestion, showConfirmModal, totalQuestions, handleSelectOption]);

  const toggleReviewMark = () => {
    setMarkedForReview((prev) =>
      prev.includes(currentQuestion.number)
        ? prev.filter((n) => n !== currentQuestion.number)
        : [...prev, currentQuestion.number]
    );
  };

  const toggleEliminateOption = (optionId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setEliminatedOptions((prev) => {
      const currentList = prev[currentQuestion.number] || [];
      const updated = currentList.includes(optionId)
        ? currentList.filter((id) => id !== optionId)
        : [...currentList, optionId];
      return { ...prev, [currentQuestion.number]: updated };
    });
  };

  const handleConfirmFinish = () => {
    let correctCount = 0;
    exam.questions.forEach((q) => {
      if (userAnswers[q.number] === q.correctOption) {
        correctCount++;
      }
    });

    const attempt: UserSimuladoAttempt = {
      id: `attempt-${Date.now()}`,
      examId: exam.id,
      examTitle: exam.title,
      category: exam.category,
      date: new Date().toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      totalQuestions,
      correctAnswers: correctCount,
      percentage: Math.round((correctCount / totalQuestions) * 100),
      timeSpentSeconds: elapsedSeconds || 1,
      userAnswers,
      markedForReview,
    };

    onFinishSimulado(attempt);
  };

  const isCurrentMarked = markedForReview.includes(currentQuestion.number);
  const currentEliminated = eliminatedOptions[currentQuestion.number] || [];

  return (
    <div className="w-full max-w-[1240px] mx-auto py-4 md:py-6 flex flex-col gap-6 animate-in fade-in duration-300">
      {/* Top Bar: Navigation, Exam info & Timer */}
      <div className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Back button & Exam title */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button
            onClick={onExit}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            title="Voltar ao início"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full bg-[#e9edff] text-[#006398] font-bold text-[10px] uppercase tracking-wider">
                {exam.badge}
              </span>
              <span className="text-xs text-slate-500 hidden sm:inline">
                {exam.banca}
              </span>
            </div>
            <h2 className="font-display font-bold text-base md:text-lg text-[#141b2b] truncate max-w-[340px] md:max-w-md">
              {exam.title}
            </h2>
          </div>
        </div>

        {/* Center: Progress & Font Size Control */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-1 bg-slate-100 p-1 rounded-lg text-xs font-semibold text-slate-600">
            <button
              onClick={() => setFontSizeClass('text-sm')}
              className={`px-2 py-1 rounded ${fontSizeClass === 'text-sm' ? 'bg-white shadow-xs font-bold text-[#006398]' : ''}`}
              title="Tamanho de fonte menor"
            >
              A-
            </button>
            <button
              onClick={() => setFontSizeClass('text-base')}
              className={`px-2 py-1 rounded ${fontSizeClass === 'text-base' ? 'bg-white shadow-xs font-bold text-[#006398]' : ''}`}
              title="Tamanho de fonte normal"
            >
              A
            </button>
            <button
              onClick={() => setFontSizeClass('text-lg')}
              className={`px-2 py-1 rounded ${fontSizeClass === 'text-lg' ? 'bg-white shadow-xs font-bold text-[#006398]' : ''}`}
              title="Tamanho de fonte maior"
            >
              A+
            </button>
          </div>
        </div>

        {/* Right: Countdown timer & finish button */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
          {timerEnabled && (
            <div className="flex items-center gap-2 bg-[#0f2027] text-white px-3.5 py-1.5 rounded-xl shadow-xs">
              <Timer className="w-4 h-4 text-[#5bb8fe]" />
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-wider text-[#7bd0ff] font-bold leading-none">
                  Tempo Restante
                </span>
                <span className="font-mono text-sm font-bold text-[#5bb8fe]">
                  {formatTime(secondsRemaining)}
                </span>
              </div>
              <button
                onClick={() => setTimerRunning(!timerRunning)}
                className="p-1 rounded text-slate-400 hover:text-white transition-colors ml-1"
                title={timerRunning ? 'Pausar cronômetro' : 'Retomar cronômetro'}
              >
                {timerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
              </button>
            </div>
          )}

          <button
            onClick={() => setShowConfirmModal(true)}
            className="px-4 py-2 rounded-xl text-xs md:text-sm font-bold bg-[#006398] hover:bg-[#004b73] text-white transition-all shadow-sm cursor-pointer whitespace-nowrap"
          >
            Finalizar Simulado
          </button>
        </div>
      </div>

      {/* Progress Line */}
      <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
        <div
          className="bg-gradient-to-r from-[#006398] to-[#5bb8fe] h-full transition-all duration-300"
          style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
        ></div>
      </div>

      {/* Main Grid: Question Reader (Left) + Matrix Navigator (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Question Reader */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 flex flex-col gap-5">
            {/* Question Header Meta */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-lg md:text-xl text-[#0f2027]">
                  Questão {currentQuestion.number} de {totalQuestions}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#f1f3ff] text-[#006398] text-xs font-semibold">
                  {currentQuestion.subject}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs hidden sm:inline">
                  {currentQuestion.topic}
                </span>
              </div>

              {/* Mark for review toggle */}
              <button
                type="button"
                onClick={toggleReviewMark}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  isCurrentMarked
                    ? 'bg-amber-100 text-amber-800 border border-amber-300'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <Flag className={`w-3.5 h-3.5 ${isCurrentMarked ? 'fill-amber-600 text-amber-600' : ''}`} />
                <span>{isCurrentMarked ? 'Marcada para Revisão' : 'Marcar para Revisão'}</span>
              </button>
            </div>

            {/* Context Text / Enunciado base */}
            {currentQuestion.contextText && (
              <div className="p-4 rounded-xl bg-[#f8fafc] border-l-4 border-[#006398] text-slate-700 italic text-sm md:text-base leading-relaxed">
                {currentQuestion.contextText}
              </div>
            )}

            {/* Main Statement */}
            <div className={`font-semibold text-slate-900 leading-relaxed ${fontSizeClass}`}>
              {currentQuestion.statement}
            </div>

            {/* Answer Options */}
            <div className="flex flex-col gap-3 pt-2">
              <span className="text-xs text-slate-400 font-medium flex items-center justify-between">
                <span>Selecione a alternativa correta (ou tecle A, B, C, D, E):</span>
                <span className="hidden sm:inline text-[11px] text-slate-400">
                  Use o ícone <Strikethrough className="w-3 h-3 inline mx-0.5" /> para riscar alternativas descartadas
                </span>
              </span>

              {currentQuestion.options.map((option) => {
                const isSelected = userAnswers[currentQuestion.number] === option.id;
                const isEliminated = currentEliminated.includes(option.id);

                return (
                  <div
                    key={option.id}
                    onClick={() => handleSelectOption(option.id)}
                    className={`relative p-3.5 md:p-4 rounded-xl border-2 transition-all flex items-start gap-3.5 cursor-pointer group ${
                      isSelected
                        ? 'border-[#006398] bg-[#cce5ff]/30 shadow-sm'
                        : isEliminated
                        ? 'border-slate-200 bg-slate-50 opacity-40'
                        : 'border-slate-200/80 bg-white hover:border-[#5bb8fe] hover:bg-slate-50/50'
                    }`}
                  >
                    {/* Option letter badge */}
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center font-display font-bold text-xs shrink-0 transition-all ${
                        isSelected
                          ? 'bg-[#006398] text-white shadow-xs'
                          : isEliminated
                          ? 'bg-slate-200 text-slate-400 line-through'
                          : 'bg-slate-100 text-slate-700 group-hover:bg-[#cce5ff]'
                      }`}
                    >
                      {option.id}
                    </div>

                    {/* Option text */}
                    <div className="flex-1">
                      <span
                        className={`text-xs md:text-sm leading-relaxed ${
                          isSelected
                            ? 'font-bold text-[#001d31]'
                            : isEliminated
                            ? 'line-through text-slate-400'
                            : 'text-slate-800'
                        }`}
                      >
                        {option.text}
                      </span>
                    </div>

                    {/* Eliminate action toggle */}
                    <button
                      type="button"
                      onClick={(e) => toggleEliminateOption(option.id, e)}
                      className={`p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors shrink-0 ${
                        isEliminated ? 'text-rose-500 bg-rose-50' : ''
                      }`}
                      title={isEliminated ? 'Restaurar alternativa' : 'Riscar alternativa descartada'}
                    >
                      <Strikethrough className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Bottom Question Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-2">
              <button
                type="button"
                onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
                disabled={currentQuestionIndex === 0}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Anterior</span>
              </button>

              <div className="text-xs text-slate-500 font-medium">
                Respondidas: <strong className="text-[#006398]">{answeredCount}</strong> de {totalQuestions}
              </div>

              {currentQuestionIndex < totalQuestions - 1 ? (
                <button
                  type="button"
                  onClick={() => setCurrentQuestionIndex((prev) => Math.min(totalQuestions - 1, prev + 1))}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold text-white bg-[#006398] hover:bg-[#004b73] transition-all shadow-sm cursor-pointer"
                >
                  <span>Próxima</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowConfirmModal(true)}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-sm cursor-pointer"
                >
                  <Check className="w-4 h-4" />
                  <span>Concluir Simulado</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right: Question Matrix Navigator */}
        <div className="lg:col-span-4 flex flex-col gap-4 sticky top-20">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200/80 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="font-display font-bold text-sm text-[#141b2b]">
                Grade de Respostas
              </h3>
              <span className="text-xs font-bold text-[#006398]">
                {progressPercent}% completo
              </span>
            </div>

            {/* Quick stats mini bar */}
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-100">
                <span className="block font-bold text-sm">{answeredCount}</span>
                <span className="text-[10px] text-emerald-700">Preenchidas</span>
              </div>
              <div className="p-2 rounded-xl bg-amber-50 text-amber-800 border border-amber-100">
                <span className="block font-bold text-sm">{markedForReview.length}</span>
                <span className="text-[10px] text-amber-700">Revisar</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-50 text-slate-700 border border-slate-200">
                <span className="block font-bold text-sm">{totalQuestions - answeredCount}</span>
                <span className="text-[10px] text-slate-500">Em branco</span>
              </div>
            </div>

            {/* Matrix 1 to N buttons */}
            <div className="grid grid-cols-5 gap-2 pt-1">
              {exam.questions.map((q, idx) => {
                const isAnswered = userAnswers[q.number] !== undefined;
                const isCurrent = idx === currentQuestionIndex;
                const isMarked = markedForReview.includes(q.number);

                let btnStyles = 'bg-slate-100 text-slate-700 hover:bg-slate-200';
                if (isCurrent) {
                  btnStyles = 'ring-2 ring-[#006398] bg-[#cce5ff] text-[#001d31] font-bold shadow-xs';
                } else if (isMarked) {
                  btnStyles = 'bg-amber-100 text-amber-900 border border-amber-300 font-bold';
                } else if (isAnswered) {
                  btnStyles = 'bg-[#0f2027] text-white font-semibold';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentQuestionIndex(idx)}
                    className={`h-10 rounded-xl text-xs font-display flex flex-col items-center justify-center transition-all cursor-pointer relative ${btnStyles}`}
                  >
                    <span>{q.number}</span>
                    {isMarked && (
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 absolute top-1 right-1"></span>
                    )}
                    {isAnswered && !isCurrent && (
                      <span className="text-[9px] text-[#5bb8fe] leading-none">
                        {userAnswers[q.number]}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-1.5 text-[11px] text-slate-500">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded bg-[#0f2027]"></span>
                <span>Respondida</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded bg-[#cce5ff] ring-2 ring-[#006398]"></span>
                <span>Questão atual</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded bg-amber-100 border border-amber-300"></span>
                <span>Marcada para revisão</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded bg-slate-100"></span>
                <span>Não respondida</span>
              </div>
            </div>

            {/* Quick Finish Button */}
            <button
              onClick={() => setShowConfirmModal(true)}
              className="w-full py-3 rounded-xl text-xs font-bold bg-[#006398] hover:bg-[#004b73] text-white transition-all shadow-sm cursor-pointer mt-2"
            >
              Entregar Prova & Ver Gabarito
            </button>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <div className="text-center">
              <h3 className="font-display text-xl font-bold text-[#141b2b]">
                Deseja finalizar o simulado?
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Você terá acesso imediato à sua pontuação, estatísticas de tempo e gabarito comentado passo a passo.
              </p>
            </div>

            {/* Quick stats review */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 flex flex-col gap-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-600">Questões respondidas:</span>
                <span className="font-bold text-slate-900">
                  {answeredCount} de {totalQuestions}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Questões em branco:</span>
                <span className={`font-bold ${totalQuestions - answeredCount > 0 ? 'text-rose-600' : 'text-emerald-600'}`}>
                  {totalQuestions - answeredCount}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Marcadas para revisão:</span>
                <span className="font-bold text-amber-600">
                  {markedForReview.length}
                </span>
              </div>
              <div className="flex justify-between pt-1 border-t border-slate-200">
                <span className="text-slate-600">Tempo decorrido:</span>
                <span className="font-mono font-bold text-[#006398]">
                  {formatTime(elapsedSeconds)}
                </span>
              </div>
            </div>

            {totalQuestions - answeredCount > 0 && (
              <p className="text-[11px] text-amber-700 bg-amber-50 p-2.5 rounded-xl border border-amber-200 text-center">
                Atenção: Existem {totalQuestions - answeredCount} questão(ões) sem resposta que serão contabilizadas como erro.
              </p>
            )}

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowConfirmModal(false)}
                className="flex-1 py-3 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                Voltar à Prova
              </button>
              <button
                type="button"
                onClick={handleConfirmFinish}
                className="flex-1 py-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm"
              >
                Confirmar & Corrigir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
