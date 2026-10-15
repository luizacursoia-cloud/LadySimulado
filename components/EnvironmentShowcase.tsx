import React from 'react';
import Image from 'next/image';
import { Moon, FileEdit } from 'lucide-react';

export const EnvironmentShowcase: React.FC = () => {
  return (
    <section className="w-full py-8 md:py-12">
      <div className="rounded-3xl bg-[#f1f3ff] border border-slate-200/80 p-6 md:p-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 overflow-hidden relative shadow-sm">
        {/* Left copy */}
        <div className="flex-1 flex flex-col gap-4 z-10">
          <span className="text-xs uppercase tracking-widest text-[#006398] font-bold">
            Foco Total na Prática
          </span>
          <h3 className="font-display text-2xl md:text-3xl font-extrabold text-[#141b2b] tracking-tight leading-snug">
            Ambiente simulado idêntico aos cadernos de provas reais
          </h3>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
            Sem propagandas intrusivas, sem poluição visual. Cada elemento foi projetado para sustentar até 5 horas consecutivas de concentração absoluta, treinando o foco para o dia decisivo.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="flex items-start gap-3 bg-white/70 backdrop-blur-sm p-3.5 rounded-xl border border-slate-200/60">
              <div className="w-9 h-9 rounded-lg bg-[#cce5ff] flex items-center justify-center text-[#006398] shrink-0">
                <Moon className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-sm font-bold text-[#141b2b]">
                  Modo Noturno & Alto Contraste
                </h5>
                <p className="text-xs text-slate-500 mt-0.5">
                  Conforto visual para longas sessões noturnas.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/70 backdrop-blur-sm p-3.5 rounded-xl border border-slate-200/60">
              <div className="w-9 h-9 rounded-lg bg-[#cce5ff] flex items-center justify-center text-[#006398] shrink-0">
                <FileEdit className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-sm font-bold text-[#141b2b]">
                  Folha de Respostas Digital
                </h5>
                <p className="text-xs text-slate-500 mt-0.5">
                  Gabarito preenchível por clique rápido ou teclado.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Photo */}
        <div className="flex-1 w-full flex justify-center z-10">
          <div className="w-full max-w-[480px] h-[300px] md:h-[340px] rounded-2xl overflow-hidden shadow-xl bg-slate-200 relative border-4 border-white group">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAhDAhD6BgWSh4QOPxZjT32bMNJQyAo4YC28mZ1jTT-y6r9ouBmw3L9Or57Vhe9vMlLl28OXhAnkH6mlXYQitivneEWCTzwQ8FHXB77kzSfU5srvLhNOLcp865ewYhF13M6ymv45uld44JI0_4vHafeDzswRhggH_01FGC4fnwspA6mOkeGWFGrUieFaQQz7Gl9jYZtNhlixrb2nGso2mY8-ZsRgnNCYO6sX5NbMf1S7Nf3bUAqzj8oQ"
              alt="Estudante focada estudando com simulados no laptop em ambiente confortável"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
              sizes="(max-width: 768px) 100vw, 480px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2027]/90 via-[#0f2027]/20 to-transparent flex items-end p-5">
              <div className="text-white z-10">
                <span className="text-[11px] uppercase tracking-wider text-[#5bb8fe] font-bold">
                  Experiência Imersiva
                </span>
                <p className="font-display text-base font-bold text-white mt-0.5">
                  Treine sob condições de exame real
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
