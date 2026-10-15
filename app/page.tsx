'use client';

import React, { useState, useEffect } from 'react';
import { allExams, getExamBySlug } from '@/data/exams';
import { Exam, Question, UserSimuladoAttempt } from '@/types/quiz';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { CategoriesSection } from '@/components/CategoriesSection';
import { MethodologySection } from '@/components/MethodologySection';
import { EnvironmentShowcase } from '@/components/EnvironmentShowcase';
import { FastConversionBanner } from '@/components/FastConversionBanner';
import { Footer } from '@/components/Footer';
import { SimuladoQuizEngine } from '@/components/SimuladoQuizEngine';
import { SimuladoResultScreen } from '@/components/SimuladoResultScreen';
import { SimuladosCatalog } from '@/components/SimuladosCatalog';
import { SisuCalculator } from '@/components/SisuCalculator';
import { PerformanceHistory } from '@/components/PerformanceHistory';
import { InfoModal } from '@/components/InfoModal';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<string>('inicio');
  const [selectedExam, setSelectedExam] = useState<Exam | null>(null);
  const [currentAttempt, setCurrentAttempt] = useState<UserSimuladoAttempt | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [attempts, setAttempts] = useState<UserSimuladoAttempt[]>(() => {
    if (typeof window === 'undefined') return [];
    try {
      const saved = localStorage.getItem('ladysimulados_attempts');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed;
        }
      }
    } catch {
      // ignore
    }
    return [];
  });
  const [infoModalTopic, setInfoModalTopic] = useState<string | null>(null);
  const [catalogInitialCategory, setCatalogInitialCategory] = useState<string>('todos');

  // Save attempts to localStorage
  const saveAttempt = (newAttempt: UserSimuladoAttempt) => {
    setAttempts((prev) => {
      const updated = [newAttempt, ...prev];
      try {
        localStorage.setItem('ladysimulados_attempts', JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const handleClearHistory = () => {
    setAttempts([]);
    try {
      localStorage.removeItem('ladysimulados_attempts');
    } catch {
      // ignore
    }
  };

  const handleStartExam = (slug: string) => {
    const examFound = getExamBySlug(slug) || allExams[0];
    setSelectedExam(examFound);
    setCurrentAttempt(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFinishSimulado = (attempt: UserSimuladoAttempt) => {
    saveAttempt(attempt);
    setCurrentAttempt(attempt);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetakeExam = () => {
    if (!selectedExam) return;
    setCurrentAttempt(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetakeErrorsOnly = (errorQuestions: Question[]) => {
    if (!selectedExam) return;

    // Create a custom mini-exam with only the wrong questions
    const customExam: Exam = {
      ...selectedExam,
      id: `${selectedExam.id}-reforco-${Date.now()}`,
      title: `${selectedExam.title} (Caderno de Reforço de Erros)`,
      subtitle: `Treino focado nas ${errorQuestions.length} questões erradas`,
      questionCount: errorQuestions.length,
      recommendedMinutes: Math.max(10, Math.round(errorQuestions.length * 3)),
      questions: errorQuestions,
    };

    setSelectedExam(customExam);
    setCurrentAttempt(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExitQuiz = () => {
    setSelectedExam(null);
    setCurrentAttempt(null);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim().length > 0 && activeTab !== 'simulados') {
      setActiveTab('simulados');
    }
  };

  const handleSelectCategory = (cat: string) => {
    setCatalogInitialCategory(cat);
    setActiveTab('simulados');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If currently taking an exam and not yet finished:
  if (selectedExam && !currentAttempt) {
    return (
      <div className="min-h-screen bg-[#f9f9ff] flex flex-col justify-between pt-16">
        <Navbar
          activeTab={activeTab}
          setActiveTab={(tab) => {
            handleExitQuiz();
            setActiveTab(tab);
          }}
          onSearch={handleSearch}
          searchQuery={searchQuery}
        />
        <main className="w-full max-w-[1280px] mx-auto px-4 md:px-8 flex-1">
          <SimuladoQuizEngine
            exam={selectedExam}
            onFinishSimulado={handleFinishSimulado}
            onExit={handleExitQuiz}
          />
        </main>
        <Footer
          onSelectCategory={handleSelectCategory}
          onOpenInfo={(topic) => setInfoModalTopic(topic)}
        />
      </div>
    );
  }

  // If viewing immediate result:
  if (selectedExam && currentAttempt) {
    return (
      <div className="min-h-screen bg-[#f9f9ff] flex flex-col justify-between pt-16">
        <Navbar
          activeTab={activeTab}
          setActiveTab={(tab) => {
            handleExitQuiz();
            setActiveTab(tab);
          }}
          onSearch={handleSearch}
          searchQuery={searchQuery}
        />
        <main className="w-full max-w-[1280px] mx-auto px-4 md:px-8 flex-1">
          <SimuladoResultScreen
            exam={selectedExam}
            attempt={currentAttempt}
            onRetakeExam={handleRetakeExam}
            onRetakeErrorsOnly={handleRetakeErrorsOnly}
            onBackToCatalog={handleExitQuiz}
          />
        </main>
        <Footer
          onSelectCategory={handleSelectCategory}
          onOpenInfo={(topic) => setInfoModalTopic(topic)}
        />
      </div>
    );
  }

  // Default Portal views (Início, Simulados, Categorias, SISU, Desempenho)
  return (
    <div className="min-h-screen bg-[#f9f9ff] flex flex-col justify-between pt-16">
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onSearch={handleSearch}
        searchQuery={searchQuery}
      />

      <main className="w-full max-w-[1280px] mx-auto px-4 md:px-8 flex-1">
        {/* TAB 1: INÍCIO (Home matching screenshot) */}
        {activeTab === 'inicio' && (
          <div className="flex flex-col w-full">
            {/* Hero Section matching screenshot layout and live timer */}
            <HeroSection
              onStartSimulado={handleStartExam}
              onExploreCatalog={() => setActiveTab('simulados')}
            />

            {/* Categorias / Segmentação por Nível */}
            <CategoriesSection
              onSelectCategory={handleSelectCategory}
              onSelectExam={handleStartExam}
              onViewAll={() => setActiveTab('simulados')}
            />

            {/* Metodologia de Alta Performance (3 Features) */}
            <MethodologySection />

            {/* Ambiente Simulado Idêntico aos Cadernos de Prova Reais */}
            <EnvironmentShowcase />

            {/* Fast Conversion Banner */}
            <FastConversionBanner onStartExam={() => handleStartExam('enem')} />
          </div>
        )}

        {/* TAB 2: SIMULADOS CATALOG */}
        {activeTab === 'simulados' && (
          <SimuladosCatalog
            exams={allExams}
            onSelectExam={handleStartExam}
            initialFilter={catalogInitialCategory}
          />
        )}

        {/* TAB 3: CATEGORIAS */}
        {activeTab === 'categorias' && (
          <div className="py-4">
            <CategoriesSection
              onSelectCategory={handleSelectCategory}
              onSelectExam={handleStartExam}
              onViewAll={() => setActiveTab('simulados')}
            />
            <SimuladosCatalog
              exams={allExams}
              onSelectExam={handleStartExam}
              initialFilter="todos"
            />
          </div>
        )}

        {/* TAB 4: SIMULADOR DE NOTAS DE CORTE SISU */}
        {activeTab === 'sisu' && (
          <SisuCalculator onStartExam={handleStartExam} />
        )}

        {/* TAB 5: DESEMPENHO & HISTÓRICO LOCAL */}
        {activeTab === 'desempenho' && (
          <PerformanceHistory
            attempts={attempts}
            onClearHistory={handleClearHistory}
            onRetakeExam={handleStartExam}
          />
        )}
      </main>

      <Footer
        onSelectCategory={handleSelectCategory}
        onOpenInfo={(topic) => setInfoModalTopic(topic)}
      />

      {/* Info Modal */}
      {infoModalTopic && (
        <InfoModal
          topic={infoModalTopic}
          onClose={() => setInfoModalTopic(null)}
        />
      )}
    </div>
  );
}
