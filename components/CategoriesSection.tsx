'use client';

import React from 'react';
import {
  GraduationCap,
  Backpack,
  School,
  Landmark,
  Scale,
  Sparkles,
  ArrowRight,
  PlayCircle,
  Trophy,
  FileCheck2,
  ChevronRight,
  CheckCircle,
} from 'lucide-react';

interface CategoriesSectionProps {
  onSelectCategory: (category: string) => void;
  onSelectExam: (examSlug: string) => void;
  onViewAll: () => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  onSelectCategory,
  onSelectExam,
  onViewAll,
}) => {
  return (
    <section className="w-full py-8 md:py-12 flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#006398] font-bold mb-1">
            <School className="w-4 h-4" />
            <span>Segmentação por Nível</span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-[#141b2b] tracking-tight">
            Escolha seu objetivo de estudo
          </h2>
          <p className="text-sm md:text-base text-slate-600 mt-1 max-w-[680px]">
            Conteúdos segmentados com questões catalogadas para cada etapa da sua jornada acadêmica e profissional.
          </p>
        </div>

        <button
          onClick={onViewAll}
          className="inline-flex items-center gap-1 text-sm font-bold text-[#006398] hover:text-[#00476e] transition-colors cursor-pointer group"
        >
          <span>Ver grade completa</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1: Ensino Fundamental & SARESP / OBMEP */}
        <div className="rounded-2xl bg-white p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-200/80 group">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-[#e9edff] flex items-center justify-center text-[#006398] group-hover:bg-[#cce5ff] transition-colors">
                <Backpack className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full bg-[#f1f3ff] text-xs font-semibold text-slate-600">
                6º ao 9º Ano
              </span>
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-[#141b2b] group-hover:text-[#006398] transition-colors">
                Ensino Fundamental
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Consolidação de bases essenciais em Matemática e Língua Portuguesa com foco em Olimpíadas (OBMEP) e SARESP.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                SARESP
              </span>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                OBMEP
              </span>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                Bases BNCC
              </span>
            </div>
          </div>

          <div className="pt-6 mt-2">
            <button
              onClick={() => onSelectExam('saresp')}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs md:text-sm font-semibold bg-[#e9edff] hover:bg-[#cce5ff] text-[#141b2b] transition-all cursor-pointer"
            >
              <span>Ver Simulados</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Card 2: ENEM & Médio (Highlighted / Most Popular) */}
        <div className="rounded-2xl bg-white p-6 flex flex-col justify-between shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative border-2 border-[#006398]/30 group">
          <div className="absolute -top-3 right-4 bg-[#006398] text-white px-3 py-0.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#5bb8fe]" /> Mais Popular
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-[#cce5ff] flex items-center justify-center text-[#006398] group-hover:bg-[#006398] group-hover:text-white transition-colors">
                <School className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full bg-[#cce5ff] text-xs font-bold text-[#001d31]">
                Metodologia TRI
              </span>
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-[#141b2b] group-hover:text-[#006398] transition-colors">
                Ensino Médio & ENEM
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Simulação idêntica à prova real com Teoria de Resposta ao Item (TRI), Provão Paulista e Simulador SISU integrado.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#cce5ff] text-[#004b73]">
                ENEM Completo
              </span>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                Provão Paulista
              </span>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                SISU Pesos
              </span>
            </div>
          </div>

          <div className="pt-6 mt-2">
            <button
              onClick={() => onStartSimuladoClick('enem')}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs md:text-sm font-bold bg-[#006398] hover:bg-[#004b73] text-white transition-all shadow-sm cursor-pointer"
            >
              <span>Praticar ENEM</span>
              <PlayCircle className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Card 3: Grandes Vestibulares (FUVEST, UNICAMP, UNESP) */}
        <div className="rounded-2xl bg-white p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-200/80 group">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-[#e9edff] flex items-center justify-center text-[#006398] group-hover:bg-[#cce5ff] transition-colors">
                <Landmark className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full bg-[#f1f3ff] text-xs font-semibold text-slate-600">
                1ª & 2ª Fase
              </span>
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-[#141b2b] group-hover:text-[#006398] transition-colors">
                Grandes Vestibulares
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Foco direto nas bancas paulistas e federais: FUVEST (USP), UNICAMP, UNESP e vestibulares de Medicina pelo país.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                FUVEST (USP)
              </span>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                UNICAMP
              </span>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                UNESP
              </span>
            </div>
          </div>

          <div className="pt-6 mt-2">
            <button
              onClick={() => onSelectExam('fuvest')}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs md:text-sm font-semibold bg-[#e9edff] hover:bg-[#cce5ff] text-[#141b2b] transition-all cursor-pointer"
            >
              <span>Explorar Vestibulares</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Card 4: Concursos Públicos */}
        <div className="rounded-2xl bg-white p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-200/80 group">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-[#e9edff] flex items-center justify-center text-[#006398] group-hover:bg-[#cce5ff] transition-colors">
                <Scale className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full bg-[#f1f3ff] text-xs font-semibold text-slate-600">
                Bancas Oficiais
              </span>
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-[#141b2b] group-hover:text-[#006398] transition-colors">
                Concursos Públicos
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Preparatórios para Carreiras Policiais, Fiscais, Administrativas e Tribunais. Filtre por Cebraspe, FGV, FCC e Vunesp.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                FGV
              </span>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                Cebraspe
              </span>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                Tribunais
              </span>
            </div>
          </div>

          <div className="pt-6 mt-2">
            <button
              onClick={() => onSelectExam('concursos')}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs md:text-sm font-semibold bg-[#e9edff] hover:bg-[#cce5ff] text-[#141b2b] transition-all cursor-pointer"
            >
              <span>Acessar Concursos</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Row 2: Secondary categories (Olimpíadas OBA/OBMEP and Encceja) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        <div className="rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/70 p-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-slate-900 text-base">
                Olimpíadas Científicas (OBMEP & OBA)
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Desafios lógicos e astronômicos para conquistar medalhas nacionais e bolsas de Iniciação Científica (PIC).
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => onSelectExam('obmep')}
              className="px-3 py-1.5 text-xs font-bold bg-white text-slate-800 rounded-lg border border-amber-300 hover:bg-amber-100 transition-colors"
            >
              OBMEP
            </button>
            <button
              onClick={() => onSelectExam('oba')}
              className="px-3 py-1.5 text-xs font-bold bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors shadow-sm"
            >
              OBA
            </button>
          </div>
        </div>

        <div className="rounded-2xl bg-gradient-to-r from-sky-50 to-indigo-50 border border-sky-200/70 p-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-slate-900 text-base">
                Certificação Oficial ENCCEJA
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Simulado completo para obtenção do diploma do Ensino Médio ou Fundamental pelo INEP / MEC.
              </p>
            </div>
          </div>
          <button
            onClick={() => onSelectExam('encceja')}
            className="px-4 py-2 text-xs font-bold bg-[#006398] text-white rounded-xl hover:bg-[#004b73] transition-colors shrink-0 shadow-sm"
          >
            Fazer ENCCEJA
          </button>
        </div>
      </div>
    </section>
  );

  function onStartSimuladoClick(slug: string) {
    onSelectExam(slug);
  }
};
