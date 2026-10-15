'use client';

import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  BookOpen,
  Timer,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Award,
  Zap,
} from 'lucide-react';
import { Exam } from '@/types/quiz';

interface HeroSectionProps {
  onStartSimulado: (examSlug: string) => void;
  onExploreCatalog: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartSimulado,
  onExploreCatalog,
}) => {
  // Live ticking countdown for the preview card
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(4 * 3600 + 12 * 60 + 28);
  const [selectedPreviewOption, setSelectedPreviewOption] = useState<'A' | 'B'>('B');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeftSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (totalSeconds: number) => {
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const secs = String(totalSeconds % 60).padStart(2, '0');
    return `${hours}:${mins}:${secs}`;
  };

  return (
    <section className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-[#0f2027] via-[#132c37] to-[#000508] text-white py-10 md:py-14 px-5 md:px-10 shadow-2xl mb-12 border border-white/5">
      {/* Ambient background lighting glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#5bb8fe]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#006398]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(123,208,255,0.08),transparent_70%)] pointer-events-none"></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-[1240px] mx-auto">
        {/* Left Column: Copy & Call-to-Actions */}
        <div className="lg:col-span-7 flex flex-col items-start gap-4">
          {/* Live badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#c4e7ff] border border-white/10 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-[#5bb8fe] animate-pulse"></span>
            <span className="text-[11px] uppercase tracking-wider font-bold">
              Plataforma Inteligente de Questões & Simulação 2025
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-3xl sm:text-4xl lg:text-[42px] text-white tracking-tight font-extrabold leading-[1.15] max-w-[620px]">
            Sua preparação para exames nacionais, vestibulares e concursos públicos
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#c4e7ff]/90 max-w-[560px] leading-relaxed font-light">
            Pratique com milhares de questões atualizadas, simule o tempo real das provas oficiais e turbine sua aprovação com análises de desempenho detalhadas.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
            <button
              onClick={() => onStartSimulado('enem')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-[#001d31] bg-[#5bb8fe] hover:bg-[#7bd0ff] hover:-translate-y-0.5 transition-all shadow-[0_12px_24px_-8px_rgba(91,184,254,0.45)] cursor-pointer group"
            >
              <span>Iniciar Simulado Grátis</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExploreCatalog}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 transition-all cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-[#5bb8fe]" />
              <span>Explorar Catálogo</span>
            </button>
          </div>

          {/* Social Proof Metrics */}
          <div className="grid grid-cols-3 gap-4 pt-6 w-full max-w-[540px] border-t border-white/10 mt-2">
            <div className="flex flex-col">
              <span className="font-display text-2xl sm:text-3xl font-bold text-[#5bb8fe] leading-none">
                +150.000
              </span>
              <span className="text-xs sm:text-sm text-[#c4e7ff]/80 mt-1">
                estudantes ativos
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl sm:text-3xl font-bold text-[#5bb8fe] leading-none">
                +80.000
              </span>
              <span className="text-xs sm:text-sm text-[#c4e7ff]/80 mt-1">
                questões comentadas
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl sm:text-3xl font-bold text-[#5bb8fe] leading-none">
                94%
              </span>
              <span className="text-xs sm:text-sm text-[#c4e7ff]/80 mt-1">
                taxa de aprovação
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Simulator Card Mockup */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-[430px] rounded-2xl bg-white text-[#141b2b] shadow-2xl p-5 flex flex-col gap-3.5 relative overflow-hidden border border-slate-100">
            {/* Mockup Status Bar */}
            <div className="flex items-center justify-between pb-1">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0284c7] animate-pulse"></span>
                <span className="text-[11px] uppercase tracking-wider text-[#006398] font-bold">
                  Simulado Ativo • TRI 2024
                </span>
              </div>
              <div className="inline-flex items-center gap-1 text-[11px] font-bold bg-[#f1f3ff] px-2.5 py-0.5 rounded-full text-[#43474a]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#006398]" /> Oficial
              </div>
            </div>

            {/* Exam Title & Live Countdown */}
            <div className="bg-[#0f2027] text-white rounded-xl p-3.5 flex items-center justify-between shadow-md">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#5bb8fe] font-bold">
                  ENEM 2024 • 1º DIA
                </p>
                <h4 className="font-display text-base font-bold text-white">
                  Linguagens e Códigos
                </h4>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-[#c4e7ff] flex items-center justify-end gap-1">
                  <Timer className="w-3 h-3 text-[#5bb8fe]" /> Restante
                </span>
                <span className="font-mono text-base font-bold text-[#5bb8fe] tracking-wider">
                  {formatTimer(timeLeftSeconds)}
                </span>
              </div>
            </div>

            {/* Question Progress & Gauge */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center text-xs font-semibold">
                <span className="text-slate-800">Questão 1 de 20</span>
                <span className="text-[#006398] font-bold">5% Concluído</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[#e9edff] overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#006398] to-[#5bb8fe] w-[46%] rounded-full transition-all duration-500"></div>
              </div>
            </div>

            {/* Tags & Context */}
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2.5 py-0.5 rounded-full bg-[#f1f3ff] text-[#006398] text-[11px] font-semibold">
                Ciências Humanas
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#f1f3ff] text-[#006398] text-[11px] font-semibold">
                Filosofia Moderna
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[11px]">
                Dificuldade Média
              </span>
            </div>

            {/* Question Snippet Box */}
            <div className="rounded-xl bg-[#f8fafc] border border-slate-200/80 p-3 flex flex-col gap-2">
              <p className="text-xs text-[#141b2b] leading-relaxed line-clamp-3 font-medium">
                “A dúvida metódica apresentada por René Descartes estabelece um critério de certeza fundamental para o pensamento ocidental moderno...”
              </p>
              <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                <button
                  type="button"
                  onClick={() => setSelectedPreviewOption('A')}
                  className={`p-2 rounded-lg text-left flex items-center gap-2 transition-all cursor-pointer ${
                    selectedPreviewOption === 'A'
                      ? 'bg-[#cce5ff] text-[#001d31] font-bold ring-2 ring-[#006398]'
                      : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${
                      selectedPreviewOption === 'A'
                        ? 'bg-[#006398] text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    A
                  </span>
                  <span className="truncate text-[11px]">Empirismo radical</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedPreviewOption('B')}
                  className={`p-2 rounded-lg text-left flex items-center gap-2 transition-all cursor-pointer ${
                    selectedPreviewOption === 'B'
                      ? 'bg-[#cce5ff] text-[#001d31] font-bold ring-2 ring-[#006398]'
                      : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${
                      selectedPreviewOption === 'B'
                        ? 'bg-[#006398] text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    B
                  </span>
                  <span className="truncate text-[11px]">Racionalismo crítico</span>
                </button>
              </div>
            </div>

            {/* Interactive Analytics Footer Card */}
            <div className="flex items-center justify-between pt-1 text-xs">
              <div className="flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-[#006398]" />
                <span className="text-slate-700 font-semibold">
                  Acertos acumulados: <strong className="text-[#006398] font-bold">81.4%</strong>
                </span>
              </div>
              <button
                type="button"
                onClick={() => onStartSimulado('enem')}
                className="px-3 py-1.5 rounded-lg bg-[#0f2027] text-white font-bold text-xs hover:bg-[#006398] transition-colors cursor-pointer flex items-center gap-1"
              >
                <span>Fazer Agora »</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
