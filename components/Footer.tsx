'use client';

import React from 'react';
import { GraduationCap, Mail, MessageCircle, Heart } from 'lucide-react';

interface FooterProps {
  onSelectCategory: (cat: string) => void;
  onOpenInfo: (topic: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onOpenInfo }) => {
  return (
    <footer className="w-full bg-[#0f2027] text-white mt-16 border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand & bio */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#006398] flex items-center justify-center text-white">
                <GraduationCap className="w-5 h-5 text-[#5bb8fe]" />
              </div>
              <span className="font-display font-extrabold text-lg text-white">
                Lady<span className="text-[#5bb8fe]">Simulados</span>
              </span>
            </div>
            <p className="text-xs text-[#c4e7ff]/80 leading-relaxed mb-4">
              Plataforma educacional aberta para preparação de alta performance em exames vestibulares, ENEM, Provão Paulista e concursos públicos.
            </p>
            <div className="inline-flex items-center gap-1.5 text-[11px] text-[#7bd0ff] font-semibold bg-white/5 px-2.5 py-1 rounded-lg w-fit border border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Plataforma 100% Gratuita & Aberta
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="font-display font-bold text-sm text-white mb-3">
              Links Rápidos
            </h4>
            <ul className="flex flex-col gap-2 text-xs">
              <li>
                <button
                  onClick={() => onOpenInfo('sobre')}
                  className="text-[#c4e7ff]/80 hover:text-white transition-colors text-left"
                >
                  Sobre nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('enem')}
                  className="text-[#c4e7ff]/80 hover:text-white transition-colors text-left"
                >
                  Simulados ENEM
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('concursos')}
                  className="text-[#c4e7ff]/80 hover:text-white transition-colors text-left"
                >
                  Simulados Concursos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('fuvest')}
                  className="text-[#c4e7ff]/80 hover:text-white transition-colors text-left"
                >
                  Vestibulares Paulistas (FUVEST/UNICAMP)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenInfo('metodologia')}
                  className="text-[#c4e7ff]/80 hover:text-white transition-colors text-left"
                >
                  Metodologia Pedagógica
                </button>
              </li>
            </ul>
          </div>

          {/* Atendimento */}
          <div>
            <h4 className="font-display font-bold text-sm text-white mb-3">
              Atendimento
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              <li className="text-[#c4e7ff]/80 flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#5bb8fe] shrink-0" />
                <a
                  href="mailto:suporte@ladysimulados.com.br"
                  className="hover:text-white transition-colors"
                >
                  suporte@ladysimulados.com.br
                </a>
              </li>
              <li className="text-[#c4e7ff]/80 flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#5bb8fe] shrink-0" />
                <button
                  onClick={() => onOpenInfo('contato')}
                  className="hover:text-white transition-colors text-left"
                >
                  Canal de Dúvidas & Sugestões
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-bold text-sm text-white mb-3">
              Legal
            </h4>
            <ul className="flex flex-col gap-2 text-xs">
              <li>
                <button
                  onClick={() => onOpenInfo('termos')}
                  className="text-[#c4e7ff]/80 hover:text-white transition-colors text-left"
                >
                  Termos de Uso
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenInfo('privacidade')}
                  className="text-[#c4e7ff]/80 hover:text-white transition-colors text-left"
                >
                  Política de Privacidade
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenInfo('acessibilidade')}
                  className="text-[#c4e7ff]/80 hover:text-white transition-colors text-left"
                >
                  Compromisso de Acessibilidade
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#c4e7ff]/60">
          <p>© 2025 LadySimulados. Todos os direitos reservados.</p>
          <p className="text-[11px] uppercase tracking-wider text-[#7bd0ff] font-semibold">
            Excelência em Simulados e Avaliação Contínua
          </p>
        </div>
      </div>
    </footer>
  );
};
