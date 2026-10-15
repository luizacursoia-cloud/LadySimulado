'use client';

import React, { useState } from 'react';
import {
  GraduationCap,
  Search,
  BookOpen,
  Award,
  Layers,
  Sparkles,
  Menu,
  X,
  History,
  Calculator,
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onSearch: (query: string) => void;
  searchQuery: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onSearch,
  searchQuery,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  const handleNavClick = (tab: string) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#f9f9ff]/90 backdrop-blur-xl border-b border-[#0f2027]/5 shadow-[0_1px_12px_rgba(15,32,39,0.04)]">
      <div className="h-16 max-w-[1280px] mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <button
          onClick={() => handleNavClick('inicio')}
          className="flex items-center gap-2.5 text-left focus:outline-none group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0f2027] to-[#0284c7] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
            <GraduationCap className="w-6 h-6 text-[#5bb8fe]" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-xl tracking-tight text-[#0f2027] leading-none">
              Lady<span className="text-[#0284c7]">Simulados</span>
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#0284c7]/80 mt-0.5">
              100% Aberto & Gratuito
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#e9edff]/50 p-1 rounded-xl border border-[#0f2027]/5">
          <button
            onClick={() => handleNavClick('inicio')}
            className={`px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all ${
              activeTab === 'inicio'
                ? 'bg-white text-[#006398] shadow-sm'
                : 'text-[#43474a] hover:text-[#141b2b] hover:bg-white/50'
            }`}
          >
            Início
          </button>
          <button
            onClick={() => handleNavClick('simulados')}
            className={`px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === 'simulados'
                ? 'bg-white text-[#006398] shadow-sm'
                : 'text-[#43474a] hover:text-[#141b2b] hover:bg-white/50'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            Simulados
          </button>
          <button
            onClick={() => handleNavClick('categorias')}
            className={`px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === 'categorias'
                ? 'bg-white text-[#006398] shadow-sm'
                : 'text-[#43474a] hover:text-[#141b2b] hover:bg-white/50'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            Categorias
          </button>
          <button
            onClick={() => handleNavClick('sisu')}
            className={`px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === 'sisu'
                ? 'bg-white text-[#006398] shadow-sm'
                : 'text-[#43474a] hover:text-[#141b2b] hover:bg-white/50'
            }`}
          >
            <Calculator className="w-3.5 h-3.5 text-[#0284c7]" />
            Simulador SISU
          </button>
          <button
            onClick={() => handleNavClick('desempenho')}
            className={`px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === 'desempenho'
                ? 'bg-white text-[#006398] shadow-sm'
                : 'text-[#43474a] hover:text-[#141b2b] hover:bg-white/50'
            }`}
          >
            <History className="w-3.5 h-3.5" />
            Desempenho
          </button>
        </nav>

        {/* Right Search & Free Access Badge (No login required!) */}
        <div className="flex items-center gap-3">
          {/* Quick search input */}
          <div className="relative hidden md:block">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Buscar prova (ex: ENEM, FUVEST)..."
              className="w-56 lg:w-64 pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#38bdf8] focus:border-transparent transition-all"
            />
          </div>

          {/* 100% Free / Open Access Pill */}
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Acesso Livre • Sem Cadastro
          </div>

          {/* Quick Start Button */}
          <button
            onClick={() => handleNavClick('simulados')}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs md:text-sm font-bold text-white bg-gradient-to-r from-[#0f2027] via-[#132c37] to-[#0284c7] hover:opacity-95 shadow-sm hover:shadow transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#5bb8fe]" />
            <span>Fazer Prova</span>
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#141b2b] hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#f9f9ff] border-b border-slate-200 px-4 py-4 space-y-2 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="relative mb-3">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Buscar exame ou disciplina..."
              className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
            />
          </div>

          <button
            onClick={() => handleNavClick('inicio')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 ${
              activeTab === 'inicio' ? 'bg-[#006398] text-white' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            Início
          </button>
          <button
            onClick={() => handleNavClick('simulados')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 ${
              activeTab === 'simulados' ? 'bg-[#006398] text-white' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Simulados Disponíveis
          </button>
          <button
            onClick={() => handleNavClick('categorias')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 ${
              activeTab === 'categorias' ? 'bg-[#006398] text-white' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Layers className="w-4 h-4" />
            Categorias de Provas
          </button>
          <button
            onClick={() => handleNavClick('sisu')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 ${
              activeTab === 'sisu' ? 'bg-[#006398] text-white' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Calculator className="w-4 h-4" />
            Simulador de Corte SISU
          </button>
          <button
            onClick={() => handleNavClick('desempenho')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 ${
              activeTab === 'desempenho' ? 'bg-[#006398] text-white' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <History className="w-4 h-4" />
            Meu Desempenho (Histórico Local)
          </button>

          <div className="pt-2 border-t border-slate-200">
            <div className="p-3 rounded-xl bg-[#e0f2fe]/60 text-[#00476e] text-xs flex items-center gap-2 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Acesso 100% aberto. Não requer senha, e-mail ou cartão.
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
