'use client';

import React from 'react';
import { X, GraduationCap, ShieldCheck, Heart, Sparkles, BookOpen } from 'lucide-react';

interface InfoModalProps {
  topic: string;
  onClose: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({ topic, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 flex flex-col gap-5 max-h-[85vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#006398] flex items-center justify-center text-white">
              <GraduationCap className="w-5 h-5 text-[#5bb8fe]" />
            </div>
            <span className="font-display font-bold text-lg text-[#141b2b]">
              LadySimulados
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {topic === 'sobre' && (
          <div className="flex flex-col gap-3 text-xs md:text-sm text-slate-600 leading-relaxed">
            <h3 className="font-display font-bold text-base text-slate-900">
              Sobre a Plataforma LadySimulados
            </h3>
            <p>
              A <strong>LadySimulados</strong> nasceu com um propósito claro: democratizar o acesso à preparação de excelência para os principais exames do Brasil — sem barreiras, sem mensalidades e sem a necessidade de criar contas ou preencher formulários de cadastro.
            </p>
            <p>
              Acreditamos que todo estudante brasileiro da rede pública ou privada deve poder sentar, abrir seu navegador ou celular e praticar diretamente com provas de alto nível (ENEM, Provão Paulista, SARESP, FUVEST, OBMEP, OBA, SISU e Concursos).
            </p>
            <div className="p-3.5 rounded-2xl bg-[#e9edff] text-[#00476e] text-xs font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#006398]" />
              Mais de 200 questões oficiais comentadas passo a passo por professores!
            </div>
          </div>
        )}

        {topic === 'metodologia' && (
          <div className="flex flex-col gap-3 text-xs md:text-sm text-slate-600 leading-relaxed">
            <h3 className="font-display font-bold text-base text-slate-900">
              Nossa Metodologia Pedagógica
            </h3>
            <p>
              Nosso sistema pedagógico apoia-se em três pilares fundamentais da neurociência da aprendizagem:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Prática Recuperativa Ativa:</strong> Resolver questões consolida sinapses de memória com muito mais retenção do que leituras passivas.</li>
              <li><strong>Feedback Imediato (Gabarito Comentado):</strong> O erro no simulado torna-se a maior oportunidade de aprendizado através de resoluções passo a passo e dicas de professores.</li>
              <li><strong>Calibragem de Ritmo de Prova:</strong> O cronômetro treina a gestão emocional e evita a perda de pontos por esgotamento de tempo.</li>
            </ul>
          </div>
        )}

        {topic === 'privacidade' && (
          <div className="flex flex-col gap-3 text-xs md:text-sm text-slate-600 leading-relaxed">
            <h3 className="font-display font-bold text-base text-slate-900">
              Política de Privacidade & LGPD
            </h3>
            <p>
              Como a LadySimulados não exige cadastro, <strong>não coletamos nem armazenamos senhas, CPFs ou cartões de crédito</strong>.
            </p>
            <p>
              O histórico de notas e simulados realizados é gravado exclusivamente na memória local do seu próprio navegador (LocalStorage), garantindo privacidade total.
            </p>
          </div>
        )}

        {topic === 'termos' && (
          <div className="flex flex-col gap-3 text-xs md:text-sm text-slate-600 leading-relaxed">
            <h3 className="font-display font-bold text-base text-slate-900">
              Termos de Uso
            </h3>
            <p>
              Todo o conteúdo disponível na LadySimulados destina-se exclusivamente a fins pedagógicos, de estudo e preparação para exames oficiais.
            </p>
            <p>
              O uso da plataforma é gratuito para estudantes, professores e escolas públicas ou particulares.
            </p>
          </div>
        )}

        {topic === 'contato' && (
          <div className="flex flex-col gap-3 text-xs md:text-sm text-slate-600 leading-relaxed">
            <h3 className="font-display font-bold text-base text-slate-900">
              Atendimento & Suporte
            </h3>
            <p>
              Tem dúvidas pedagógicas, sugestões de novas questões ou encontrou alguma incorreção em gabarito?
            </p>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-2">
              <div className="text-xs">
                <strong>E-mail:</strong> suporte@ladysimulados.com.br
              </div>
              <div className="text-xs">
                <strong>Horário:</strong> Segunda a Sexta, das 08h às 19h
              </div>
            </div>
          </div>
        )}

        <div className="pt-2">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-[#006398] hover:bg-[#004b73] transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
