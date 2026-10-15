'use client';

import React from 'react';
import { Sparkles, Rocket, CheckCircle2 } from 'lucide-react';

interface FastConversionBannerProps {
  onStartExam: () => void;
}

export const FastConversionBanner: React.FC<FastConversionBannerProps> = ({
  onStartExam,
}) => {
  return (
    <section className="w-full my-8 md:my-12">
      <div className="relative w-full rounded-3xl bg-[#0f2027] text-white overflow-hidden p-6 md:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/10">
        {/* Decorative light glows */}
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#006398]/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-60 h-60 bg-[#5bb8fe]/15 rounded-full blur-2xl pointer-events-none"></div>

        {/* Banner Text Block */}
        <div className="relative z-10 flex flex-col gap-2 max-w-[660px]">
          <div className="inline-flex items-center gap-1.5 text-[#5bb8fe] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Acesso Gratuito Disponível</span>
          </div>

          <h3 className="font-display text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Pronto para elevar sua pontuação no próximo exame?
          </h3>

          <p className="text-sm md:text-base text-[#c4e7ff]/90 leading-relaxed font-light">
            Tenha acesso instantâneo e 100% livre a dezenas de simulados com gabaritos detalhados passo a passo, cronômetro de ritmo e resolução comentada, sem precisar cadastrar cartão ou criar conta.
          </p>

          {/* Perks list */}
          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-semibold text-[#7bd0ff]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#5bb8fe]" /> 100% Gratuito para praticar
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#5bb8fe]" /> Sem necessidade de login
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#5bb8fe]" /> Acesso imediato no celular e PC
            </span>
          </div>
        </div>

        {/* Banner Conversion Action */}
        <div className="relative z-10 flex flex-col items-center sm:items-start lg:items-end w-full lg:w-auto shrink-0">
          <button
            onClick={onStartExam}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-[#001d31] bg-[#5bb8fe] hover:bg-[#7bd0ff] hover:-translate-y-0.5 transition-all shadow-[0_12px_24px_-6px_rgba(91,184,254,0.5)] cursor-pointer group"
          >
            <span>Começar Agora Mesmo</span>
            <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          <span className="text-[11px] text-[#c4e7ff]/70 mt-2 text-center lg:text-right font-medium">
            Acesso livre e imediato em 1 clique
          </span>
        </div>
      </div>
    </section>
  );
};
