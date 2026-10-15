'use client';

import React from 'react';
import {
  Zap,
  Lightbulb,
  Timer,
  TrendingUp,
  CheckCircle2,
  BookOpen,
  Gauge,
  Sparkles,
} from 'lucide-react';

export const MethodologySection: React.FC = () => {
  return (
    <section className="w-full py-8 md:py-12 flex flex-col gap-6">
      {/* Header */}
      <div className="text-center max-w-[700px] mx-auto">
        <div className="inline-flex items-center gap-1 text-xs uppercase tracking-wider text-[#006398] font-bold mb-1.5">
          <Zap className="w-4 h-4 text-[#006398]" />
          <span>Metodologia de Alta Performance</span>
        </div>
        <h2 className="font-display text-2xl md:text-3xl font-extrabold text-[#141b2b] tracking-tight">
          Ferramentas feitas para acelerar seu aprendizado
        </h2>
        <p className="text-sm md:text-base text-slate-600 mt-1">
          Treinar por questões sem método gera estagnação. Nossa suíte pedagógica transforma erros em pontos de alavancagem.
        </p>
      </div>

      {/* 3 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        {/* Feature 1: Gabarito Comentado */}
        <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col justify-between group">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-[#cce5ff] flex items-center justify-center text-[#006398] mb-4 group-hover:bg-[#5bb8fe] group-hover:text-[#001d31] transition-colors">
              <Lightbulb className="w-7 h-7" />
            </div>
            <h3 className="font-display text-lg font-bold text-[#141b2b] mb-2">
              Gabarito Comentado
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Resoluções detalhadas passo a passo redigidas por professores especialistas. Entenda exatamente o raciocínio correto, fundamentações teóricas e alertas contra pegadinhas clássicas da banca examinadora.
            </p>

            {/* Micro visual: mock teacher comment snippet */}
            <div className="mt-4 p-3 rounded-xl bg-[#f1f3ff] border border-slate-200 flex flex-col gap-1 text-[#141b2b]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#006398]" />
                <span className="text-[11px] font-bold text-[#006398]">Dica do Professor</span>
              </div>
              <p className="text-slate-600 text-[12px] leading-snug italic">
                &ldquo;Atenção ao termo &apos;incondicionalmente&apos; no enunciado da alternativa C, erro recorrente em questões da FGV e VUNESP.&rdquo;
              </p>
            </div>
          </div>

          <div className="pt-4 mt-2 flex items-center gap-1.5 text-xs text-[#006398] font-bold border-t border-slate-100">
            <BookOpen className="w-4 h-4" />
            <span>Mais de 80 mil justificativas ativas</span>
          </div>
        </div>

        {/* Feature 2: Cronômetro de Prova */}
        <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col justify-between group">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-[#e1e8fd] flex items-center justify-center text-[#006398] mb-4 group-hover:bg-[#5bb8fe] group-hover:text-[#001d31] transition-colors">
              <Timer className="w-7 h-7" />
            </div>
            <h3 className="font-display text-lg font-bold text-[#141b2b] mb-2">
              Cronômetro de Prova
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Simulação fidedigna da pressão de tempo do dia do exame. Acompanhe seu tempo médio por questão, receba alertas de ritmo de prova e treine a resistência psicológica necessária para bater a meta horária.
            </p>

            {/* Micro visual: pacing gauge */}
            <div className="mt-4 p-3 rounded-xl bg-[#f1f3ff] border border-slate-200 flex flex-col gap-2">
              <div className="flex justify-between items-center text-xs font-semibold">
                <span className="text-slate-800">Ritmo Recomendado</span>
                <span className="text-[#006398] font-bold">3 min / questão</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-2 flex-1 rounded-full bg-[#006398]"></div>
                <div className="h-2 flex-1 rounded-full bg-[#5bb8fe]"></div>
                <div className="h-2 flex-1 rounded-full bg-slate-200"></div>
              </div>
              <span className="text-slate-500 text-[11px] font-medium">
                Seu ritmo atual: <strong className="text-emerald-700">2m 45s (Ritmo Ideal)</strong>
              </span>
            </div>
          </div>

          <div className="pt-4 mt-2 flex items-center gap-1.5 text-xs text-[#006398] font-bold border-t border-slate-100">
            <Gauge className="w-4 h-4" />
            <span>Regulação de ansiedade pré-exame</span>
          </div>
        </div>

        {/* Feature 3: Análise de Desempenho */}
        <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col justify-between group">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-[#cce5ff] flex items-center justify-center text-[#006398] mb-4 group-hover:bg-[#5bb8fe] group-hover:text-[#001d31] transition-colors">
              <TrendingUp className="w-7 h-7" />
            </div>
            <h3 className="font-display text-lg font-bold text-[#141b2b] mb-2">
              Análise de Desempenho
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Painel analítico completo mapeando seus acertos por matéria, competência e assunto. Descubra os pontos fracos que reduzem sua nota e receba cadernos de reforço automáticos para sanar defasagens.
            </p>

            {/* Micro visual: mini inline chart */}
            <div className="mt-4 p-3 rounded-xl bg-[#f1f3ff] border border-slate-200 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[11px] text-slate-500 font-medium">Evolução Mensal</span>
                <span className="font-display text-lg font-bold text-[#006398]">+22% de ganho</span>
              </div>
              <svg className="w-24 h-10 text-[#006398]" fill="none" viewBox="0 0 100 40">
                <path
                  d="M5 35 L 25 28 L 45 30 L 65 18 L 85 10 L 95 6"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                ></path>
                <circle cx="95" cy="6" fill="currentColor" r="3.5"></circle>
              </svg>
            </div>
          </div>

          <div className="pt-4 mt-2 flex items-center gap-1.5 text-xs text-[#006398] font-bold border-t border-slate-100">
            <Sparkles className="w-4 h-4" />
            <span>Diagnóstico inteligente de erros</span>
          </div>
        </div>
      </div>
    </section>
  );
};
