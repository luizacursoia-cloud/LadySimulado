'use client';

import React, { useState } from 'react';
import { Calculator, Sparkles, CheckCircle2, AlertCircle, ArrowRight, Building, Award } from 'lucide-react';

interface SisuCourse {
  name: string;
  university: string;
  campus: string;
  cutoff: number;
  weights: {
    redacao: number;
    linguagens: number;
    matematica: number;
    cienciasNatureza: number;
    cienciasHumanas: number;
  };
}

const sisuCoursesList: SisuCourse[] = [
  {
    name: 'Medicina',
    university: 'USP (Bauru/Ribeirão/SP)',
    campus: 'Capital / Interior',
    cutoff: 815.4,
    weights: { redacao: 2, linguagens: 2, matematica: 3, cienciasNatureza: 4, cienciasHumanas: 2 },
  },
  {
    name: 'Medicina',
    university: 'UFRJ (Federal do Rio de Janeiro)',
    campus: 'Cidade Universitária',
    cutoff: 808.2,
    weights: { redacao: 3, linguagens: 2, matematica: 2, cienciasNatureza: 4, cienciasHumanas: 1 },
  },
  {
    name: 'Ciência da Computação',
    university: 'UFMG (Federal de Minas Gerais)',
    campus: 'Pampulha',
    cutoff: 778.6,
    weights: { redacao: 2, linguagens: 2, matematica: 4, cienciasNatureza: 2, cienciasHumanas: 1 },
  },
  {
    name: 'Direito',
    university: 'USP (Largo São Francisco)',
    campus: 'São Francisco',
    cutoff: 768.9,
    weights: { redacao: 3, linguagens: 3, matematica: 1, cienciasNatureza: 1, cienciasHumanas: 3 },
  },
  {
    name: 'Engenharia Mecatrônica',
    university: 'UNICAMP',
    campus: 'Barão Geraldo',
    cutoff: 752.3,
    weights: { redacao: 2, linguagens: 2, matematica: 4, cienciasNatureza: 3, cienciasHumanas: 1 },
  },
  {
    name: 'Psicologia',
    university: 'UNIFESP',
    campus: 'Baixada Santista',
    cutoff: 735.8,
    weights: { redacao: 2, linguagens: 3, matematica: 1, cienciasNatureza: 2, cienciasHumanas: 3 },
  },
  {
    name: 'Administração',
    university: 'UFPR (Federal do Paraná)',
    campus: 'Curitiba',
    cutoff: 698.4,
    weights: { redacao: 2, linguagens: 2, matematica: 2, cienciasNatureza: 1, cienciasHumanas: 2 },
  },
  {
    name: 'Enfermagem',
    university: 'UFC (Federal do Ceará)',
    campus: 'Fortaleza',
    cutoff: 712.1,
    weights: { redacao: 2, linguagens: 2, matematica: 1, cienciasNatureza: 3, cienciasHumanas: 1 },
  },
];

interface SisuCalculatorProps {
  onStartExam: (slug: string) => void;
}

export const SisuCalculator: React.FC<SisuCalculatorProps> = ({ onStartExam }) => {
  const [redacao, setRedacao] = useState<number>(880);
  const [linguagens, setLinguagens] = useState<number>(670);
  const [matematica, setMatematica] = useState<number>(780);
  const [natureza, setNatureza] = useState<number>(710);
  const [humanas, setHumanas] = useState<number>(695);

  const calculateWeightedScore = (course: SisuCourse) => {
    const { weights } = course;
    const totalWeights =
      weights.redacao +
      weights.linguagens +
      weights.matematica +
      weights.cienciasNatureza +
      weights.cienciasHumanas;

    const weightedSum =
      redacao * weights.redacao +
      linguagens * weights.linguagens +
      matematica * weights.matematica +
      natureza * weights.cienciasNatureza +
      humanas * weights.cienciasHumanas;

    return Number((weightedSum / totalWeights).toFixed(2));
  };

  const simpleAverage = Number(
    ((redacao + linguagens + matematica + natureza + humanas) / 5).toFixed(2)
  );

  return (
    <div className="w-full max-w-[1240px] mx-auto py-8 flex flex-col gap-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="rounded-3xl bg-gradient-to-br from-[#0f2027] via-[#132c37] to-[#0284c7] text-white p-6 md:p-10 shadow-xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#5bb8fe] text-xs font-bold mb-3 border border-white/10">
            <Calculator className="w-4 h-4" />
            <span>Simulador de Notas de Corte SISU & Pesos</span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-white">
            Calcule sua Média Ponderada para as Federais
          </h2>
          <p className="text-xs md:text-sm text-[#c4e7ff]/80 mt-1 leading-relaxed">
            As universidades federais atribuem pesos diferentes para cada área do ENEM. Insira suas notas estimadas e descubra em quais cursos e faculdades sua pontuação alcança a nota de corte!
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 text-center shrink-0 w-full sm:w-auto">
          <span className="text-[11px] uppercase tracking-wider text-[#7bd0ff] font-bold block">
            Sua Média Simples ENEM
          </span>
          <span className="font-display text-3xl font-extrabold text-white mt-0.5 block">
            {simpleAverage}
          </span>
          <span className="text-[11px] text-[#c4e7ff]/70 mt-1 block">
            Base sem pesos específicos
          </span>
        </div>
      </div>

      {/* Grade Sliders Card */}
      <div className="rounded-3xl bg-white p-6 md:p-8 shadow-sm border border-slate-200/80 flex flex-col gap-6">
        <h3 className="font-display font-bold text-lg text-[#141b2b]">
          Ajuste suas notas nas 5 áreas do ENEM:
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Redação */}
          <div className="flex flex-col gap-2 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex justify-between items-center text-xs font-bold">
              <span className="text-[#006398]">Redação</span>
              <span className="font-mono text-base font-extrabold text-slate-900">{redacao}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1000"
              step="20"
              value={redacao}
              onChange={(e) => setRedacao(Number(e.target.value))}
              className="w-full accent-[#006398] cursor-pointer"
            />
            <span className="text-[10px] text-slate-500">Nota de 0 a 1000</span>
          </div>

          {/* Matemática */}
          <div className="flex flex-col gap-2 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex justify-between items-center text-xs font-bold">
              <span className="text-[#006398]">Matemática</span>
              <span className="font-mono text-base font-extrabold text-slate-900">{matematica}</span>
            </div>
            <input
              type="range"
              min="300"
              max="980"
              step="10"
              value={matematica}
              onChange={(e) => setMatematica(Number(e.target.value))}
              className="w-full accent-[#006398] cursor-pointer"
            />
            <span className="text-[10px] text-slate-500">Escala TRI aproximada</span>
          </div>

          {/* Ciências da Natureza */}
          <div className="flex flex-col gap-2 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex justify-between items-center text-xs font-bold">
              <span className="text-[#006398]">Ciências Natureza</span>
              <span className="font-mono text-base font-extrabold text-slate-900">{natureza}</span>
            </div>
            <input
              type="range"
              min="300"
              max="860"
              step="10"
              value={natureza}
              onChange={(e) => setNatureza(Number(e.target.value))}
              className="w-full accent-[#006398] cursor-pointer"
            />
            <span className="text-[10px] text-slate-500">Física, Química e Biologia</span>
          </div>

          {/* Ciências Humanas */}
          <div className="flex flex-col gap-2 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex justify-between items-center text-xs font-bold">
              <span className="text-[#006398]">Ciências Humanas</span>
              <span className="font-mono text-base font-extrabold text-slate-900">{humanas}</span>
            </div>
            <input
              type="range"
              min="300"
              max="840"
              step="10"
              value={humanas}
              onChange={(e) => setHumanas(Number(e.target.value))}
              className="w-full accent-[#006398] cursor-pointer"
            />
            <span className="text-[10px] text-slate-500">História, Geog. e Filo</span>
          </div>

          {/* Linguagens */}
          <div className="flex flex-col gap-2 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex justify-between items-center text-xs font-bold">
              <span className="text-[#006398]">Linguagens</span>
              <span className="font-mono text-base font-extrabold text-slate-900">{linguagens}</span>
            </div>
            <input
              type="range"
              min="300"
              max="820"
              step="10"
              value={linguagens}
              onChange={(e) => setLinguagens(Number(e.target.value))}
              className="w-full accent-[#006398] cursor-pointer"
            />
            <span className="text-[10px] text-slate-500">Português e Literatura</span>
          </div>
        </div>
      </div>

      {/* Results Comparison Grid */}
      <div className="flex flex-col gap-4">
        <h3 className="font-display font-bold text-xl text-[#141b2b]">
          Comparativo com as Notas de Corte Oficiais
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sisuCoursesList.map((course, idx) => {
            const studentScore = calculateWeightedScore(course);
            const diff = Number((studentScore - course.cutoff).toFixed(2));
            const isApproved = diff >= 0;

            return (
              <div
                key={idx}
                className={`p-5 rounded-2xl border bg-white shadow-xs flex flex-col justify-between gap-4 transition-all ${
                  isApproved ? 'border-emerald-200 hover:shadow-md' : 'border-slate-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display font-bold text-base text-slate-900">
                      {course.name}
                    </span>
                    <span
                      className={`text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 ${
                        isApproved
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {isApproved ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" /> Aprovado (+{diff})
                        </>
                      ) : (
                        <>
                          <AlertCircle className="w-3.5 h-3.5" /> Faltam {Math.abs(diff)} pts
                        </>
                      )}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                    <Building className="w-3.5 h-3.5 text-[#006398]" />
                    <span>{course.university} • {course.campus}</span>
                  </div>

                  {/* Weights Breakdown */}
                  <div className="flex flex-wrap gap-1.5 pt-3 text-[10px] text-slate-600">
                    <span className="bg-slate-100 px-2 py-0.5 rounded">
                      Red: x{course.weights.redacao}
                    </span>
                    <span className="bg-slate-100 px-2 py-0.5 rounded">
                      Mat: x{course.weights.matematica}
                    </span>
                    <span className="bg-slate-100 px-2 py-0.5 rounded">
                      Nat: x{course.weights.cienciasNatureza}
                    </span>
                    <span className="bg-slate-100 px-2 py-0.5 rounded">
                      Hum: x{course.weights.cienciasHumanas}
                    </span>
                    <span className="bg-slate-100 px-2 py-0.5 rounded">
                      Ling: x{course.weights.linguagens}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block">Sua nota ponderada</span>
                    <span className="font-mono text-lg font-extrabold text-[#006398]">
                      {studentScore}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block">Nota de Corte Real</span>
                    <span className="font-mono text-base font-bold text-slate-700">
                      {course.cutoff}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA to practice SISU Simulado */}
      <div className="p-6 rounded-3xl bg-[#e9edff] border border-[#006398]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-display font-bold text-base text-[#002130]">
            Quer testar seu conhecimento com o Simulado Diagnóstico SISU?
          </h4>
          <p className="text-xs text-slate-600 mt-0.5">
            20 questões selecionadas com metodologia TRI das quatro grandes áreas para calibrar sua pontuação real.
          </p>
        </div>
        <button
          onClick={() => onStartExam('sisu')}
          className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-[#006398] hover:bg-[#004b73] transition-all shadow-sm cursor-pointer whitespace-nowrap"
        >
          Iniciar Simulado SISU
        </button>
      </div>
    </div>
  );
};
