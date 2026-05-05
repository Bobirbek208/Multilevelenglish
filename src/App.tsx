import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { 
  Timer, 
  ChevronLeft, 
  ChevronRight, 
  Flag, 
  CheckCircle2, 
  AlertCircle, 
  User, 
  LogOut,
  BookOpen,
  Headphones,
  PenTool,
  BarChart3,
  Sparkles,
  Loader2
} from 'lucide-react';
import { EXAM_DATA } from './data';
import { Section, UserAnswers } from './types';
import { getAIAnalysis } from './services/geminiService';

export default function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [userName, setUserName] = useState('');
  const [section, setSection] = useState<Section>('listening');
  const [currentPartIdx, setCurrentPartIdx] = useState(0);
  const [answers, setAnswers] = useState<UserAnswers>({
    listening: {},
    reading: {},
    writing: { task1: '', task2: '' }
  });
  const [flags, setFlags] = useState<Record<string, boolean>>({});
  const [timeLeft, setTimeLeft] = useState(3600); // Default to 60 mins
  const [isFinished, setIsFinished] = useState(false);
  const [aiFeedback, setAiFeedback] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Reset timer when section changes
  useEffect(() => {
    if (section === 'reading') {
      setTimeLeft(3600); // 60 minutes for Reading
    } else if (section === 'writing') {
      setTimeLeft(3600); // 60 minutes for Writing
    }
  }, [section]);

  const handleAIAnalysis = async () => {
    setIsAnalyzing(true);
    try {
      const feedback = await getAIAnalysis(userName, answers);
      setAiFeedback(feedback);
    } catch (error) {
      console.error(error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Timer logic - only runs for Reading and Writing
  useEffect(() => {
    if (isStarted && !isFinished && timeLeft > 0 && section !== 'listening') {
      const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [isStarted, isFinished, timeLeft, section]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleAnswerChange = (sec: 'listening' | 'reading', qId: number, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [sec]: { ...prev[sec], [qId]: value }
    }));
  };

  const toggleFlag = (qId: number) => {
    const key = `${section}-${qId}`;
    setFlags(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const currentParts = section === 'listening' ? EXAM_DATA.listening : section === 'reading' ? EXAM_DATA.reading : [];
  const currentPart = currentParts[currentPartIdx];

  const calculateScore = () => {
    let score = 0;
    let total = 0;
    
    EXAM_DATA.listening.forEach(part => {
      part.questions.forEach(q => {
        total++;
        if (answers.listening[q.id]?.toLowerCase().trim() === q.correctAnswer.toLowerCase().trim()) {
          score++;
        }
      });
    });

    EXAM_DATA.reading.forEach(part => {
      part.questions.forEach(q => {
        total++;
        if (answers.reading[q.id]?.toLowerCase().trim() === q.correctAnswer.toLowerCase().trim()) {
          score++;
        }
      });
    });

    return { score, total };
  };

  if (!isStarted) {
    return (
      <div className="min-h-screen bg-[#0a2538] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white max-w-md w-full rounded-[40px] p-10 shadow-2xl text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-[#ffb347]/20 rounded-full flex items-center justify-center">
              <BookOpen className="w-10 h-10 text-[#0b2b44]" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-[#0b2b44] mb-2">
            multilevel<span className="text-[#ffb347] font-light">english</span>
          </h1>
          <p className="text-slate-500 mb-8">Official Computer-Delivered Mock Test</p>
          
          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Enter your full name" 
                className="w-full pl-12 pr-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-full focus:border-[#ffb347] outline-none transition-all"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <button 
              onClick={() => userName && setIsStarted(true)}
              disabled={!userName}
              className="w-full bg-[#0b2b44] text-white py-4 rounded-full font-bold text-lg hover:bg-[#153a5a] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              Start Examination <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <p className="mt-6 text-xs text-slate-400">By starting, you agree to the test regulations.</p>
        </motion.div>
      </div>
    );
  }

  if (isFinished) {
    const { score, total } = calculateScore();
    return (
      <div className="min-h-screen bg-[#f4faff] p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[40px] shadow-xl overflow-hidden">
            <div className="bg-[#0b2b44] p-10 text-white text-center">
              <CheckCircle2 className="w-16 h-16 text-[#ffb347] mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-2">Test Completed!</h2>
              <p className="opacity-70">Candidate: {userName}</p>
            </div>
            
            <div className="p-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-slate-50 p-6 rounded-3xl text-center border border-slate-100">
                  <BarChart3 className="w-8 h-8 text-[#0b2b44] mx-auto mb-2" />
                  <div className="text-3xl font-bold text-[#0b2b44]">{score}/{total}</div>
                  <div className="text-sm text-slate-500">Correct Answers</div>
                </div>
                <div className="bg-slate-50 p-6 rounded-3xl text-center border border-slate-100">
                  <Timer className="w-8 h-8 text-[#0b2b44] mx-auto mb-2" />
                  <div className="text-3xl font-bold text-[#0b2b44]">{formatTime(4200 - timeLeft)}</div>
                  <div className="text-sm text-slate-500">Time Taken</div>
                </div>
                <div className="bg-slate-50 p-6 rounded-3xl text-center border border-slate-100">
                  <AlertCircle className="w-8 h-8 text-[#0b2b44] mx-auto mb-2" />
                  <div className="text-3xl font-bold text-[#0b2b44]">{Math.round((score/total)*100)}%</div>
                  <div className="text-sm text-slate-500">Accuracy</div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold text-[#0b2b44] border-b pb-2">Detailed Analysis</h3>
                
                <div className="space-y-4">
                  <h4 className="font-bold text-slate-700 flex items-center gap-2">
                    <Headphones className="w-4 h-4" /> Listening Section
                  </h4>
                  <div className="grid grid-cols-7 gap-2">
                    {EXAM_DATA.listening.map(part => part.questions.map(q => {
                      const isCorrect = answers.listening[q.id]?.toLowerCase().trim() === q.correctAnswer.toLowerCase().trim();
                      return (
                        <div key={q.id} className={`p-2 rounded-lg text-center text-xs font-bold ${isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                          Q{q.id}
                        </div>
                      );
                    }))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-slate-700 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" /> Reading Section
                  </h4>
                  <div className="grid grid-cols-7 gap-2">
                    {EXAM_DATA.reading.map(part => part.questions.map(q => {
                      const isCorrect = answers.reading[q.id]?.toLowerCase().trim() === q.correctAnswer.toLowerCase().trim();
                      return (
                        <div key={q.id} className={`p-2 rounded-lg text-center text-xs font-bold ${isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                          Q{q.id}
                        </div>
                      );
                    }))}
                  </div>
                </div>
              </div>

              {/* AI Analysis Section */}
              <div className="mt-12 bg-[#f8fafc] rounded-[32px] p-8 border border-slate-200">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#0b2b44] rounded-2xl flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-[#ffb347]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0b2b44]">AI Tutor Analysis</h3>
                      <p className="text-sm text-slate-500">Get personalized feedback on your mistakes</p>
                    </div>
                  </div>
                  {!aiFeedback && !isAnalyzing && (
                    <button 
                      onClick={handleAIAnalysis}
                      className="bg-[#0b2b44] text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-[#153a5a] transition-all"
                    >
                      Analyze My Performance
                    </button>
                  )}
                </div>

                {isAnalyzing && (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <Loader2 className="w-10 h-10 text-[#0b2b44] animate-spin mb-4" />
                    <p className="font-bold text-[#0b2b44]">AI is analyzing your answers...</p>
                    <p className="text-sm text-slate-500">This may take a few seconds</p>
                  </div>
                )}

                {aiFeedback && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="prose prose-slate max-w-none bg-white p-8 rounded-3xl border border-slate-100 shadow-sm"
                  >
                    <ReactMarkdown>{aiFeedback}</ReactMarkdown>
                  </motion.div>
                )}
              </div>

              <button 
                onClick={() => window.location.reload()}
                className="mt-10 w-full py-4 bg-[#0b2b44] text-white rounded-full font-bold flex items-center justify-center gap-2"
              >
                <LogOut className="w-5 h-5" /> Exit to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-[#d9e6f2] overflow-hidden">
      {/* Header */}
      <header className="bg-[#0b2b44] text-white px-8 py-4 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-6">
          <div className="text-2xl font-bold tracking-tight">
            multilevel<span className="text-[#ffb347]">english</span>
          </div>
          <div className="h-8 w-px bg-white/20" />
          <div className="flex items-center gap-3 bg-[#1d405b] px-6 py-2 rounded-full">
            <SectionIcon type={section} />
            <span className="font-bold uppercase tracking-wider text-sm">{section}</span>
          </div>
        </div>

        <div className="flex items-center gap-8">
          {section !== 'listening' ? (
            <div className="flex items-center gap-3 bg-[#1d405b] px-6 py-2 rounded-full border border-white/10">
              <Timer className="w-5 h-5 text-[#ffb347]" />
              <span className="text-2xl font-mono font-bold">{formatTime(timeLeft)}</span>
            </div>
          ) : (
            <div className="flex items-center gap-3 bg-[#1d405b]/50 px-6 py-2 rounded-full border border-white/5 italic text-sm opacity-60">
              <Headphones className="w-4 h-4" />
              <span>Audio Controlled</span>
            </div>
          )}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-xs opacity-60">Candidate</div>
              <div className="font-bold text-sm">{userName}</div>
            </div>
            <div className="w-10 h-10 bg-[#ffb347] rounded-full flex items-center justify-center text-[#0b2b44] font-bold">
              {userName[0]}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex overflow-hidden p-4 gap-4">
        {section === 'writing' ? (
          <div className="flex-1 flex gap-4 overflow-hidden">
            <div className="flex-1 bg-white rounded-[32px] shadow-sm overflow-y-auto p-10 border border-slate-200">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-[#0b2b44] mb-6">Writing Task 1 & 2</h2>
                <div className="space-y-12">
                  <section>
                    <h3 className="text-lg font-bold text-[#0b2b44] mb-4">Task 1: Report Writing</h3>
                    <p className="text-slate-600 mb-4">The chart below shows the percentage of households in a certain country... (150 words minimum)</p>
                    <textarea 
                      className="w-full h-64 p-6 bg-slate-50 border-2 border-slate-100 rounded-3xl outline-none focus:border-[#ffb347] transition-all resize-none font-sans text-lg"
                      placeholder="Start typing Task 1 here..."
                      value={answers.writing.task1}
                      onChange={(e) => setAnswers(prev => ({ ...prev, writing: { ...prev.writing, task1: e.target.value } }))}
                    />
                  </section>
                  <section>
                    <h3 className="text-lg font-bold text-[#0b2b44] mb-4">Task 2: Essay Writing</h3>
                    <p className="text-slate-600 mb-4">Some people believe that technology has made our lives more complex... (250 words minimum)</p>
                    <textarea 
                      className="w-full h-96 p-6 bg-slate-50 border-2 border-slate-100 rounded-3xl outline-none focus:border-[#ffb347] transition-all resize-none font-sans text-lg"
                      placeholder="Start typing Task 2 here..."
                      value={answers.writing.task2}
                      onChange={(e) => setAnswers(prev => ({ ...prev, writing: { ...prev.writing, task2: e.target.value } }))}
                    />
                  </section>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Left Panel: Text/Instruction */}
            <div className="flex-1 bg-white rounded-[32px] shadow-sm overflow-y-auto p-10 border border-slate-200">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-[#0b2b44] mb-4">{currentPart.title}</h2>
                <div className="bg-[#f0f7ff] p-6 rounded-2xl border-l-4 border-[#ffb347] mb-8">
                  <p className="text-[#0b2b44] font-medium italic">{currentPart.instruction}</p>
                </div>

                {/* Audio Player for Listening Section */}
                {section === 'listening' && currentPart.audioUrl && currentPart.audioUrl.length > 10 && (
                  <div className="mb-8 bg-slate-50 p-6 rounded-3xl border border-slate-100 flex items-center gap-6">
                    <div className="w-12 h-12 bg-[#0b2b44] rounded-full flex items-center justify-center text-white shadow-lg">
                      <Headphones className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Listening Audio</div>
                      <audio 
                        autoPlay
                        className="w-full h-10"
                        src={currentPart.audioUrl}
                      >
                        Your browser does not support the audio element.
                      </audio>
                    </div>
                  </div>
                )}
                
                {currentPart.text && (
                  <div className="prose prose-slate max-w-none">
                    {currentPart.text.split('\n').map((line, i) => (
                      <p key={i} className="text-lg leading-relaxed text-slate-700 mb-4 whitespace-pre-wrap">
                        {line}
                      </p>
                    ))}
                  </div>
                )}

                {/* Map for Listening Part 4 */}
                {currentPart.hasMap && (
                  <div className="my-8 bg-[#ceddec] p-8 rounded-[40px] border-2 border-dashed border-[#0b2b44]/20 relative aspect-video flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                      <BookOpen className="w-64 h-64" />
                    </div>
                    <div className="grid grid-cols-4 grid-rows-3 gap-4 w-full h-full relative z-10">
                      <div className="bg-white/80 backdrop-blur rounded-2xl flex items-center justify-center font-bold text-[#0b2b44] shadow-sm">G</div>
                      <div className="col-span-2 bg-white/80 backdrop-blur rounded-2xl flex items-center justify-center font-bold text-[#0b2b44] shadow-sm">D</div>
                      <div className="bg-white/80 backdrop-blur rounded-2xl flex items-center justify-center font-bold text-[#0b2b44] shadow-sm">H</div>
                      <div className="row-span-2 bg-white/80 backdrop-blur rounded-full flex items-center justify-center font-bold text-[#0b2b44] shadow-sm border-4 border-[#ffb347]">B</div>
                      <div className="col-span-2 row-span-2 bg-[#0b2b44] text-white rounded-3xl flex items-center justify-center font-bold text-2xl shadow-xl">SCULPTURE</div>
                      <div className="bg-white/80 backdrop-blur rounded-2xl flex items-center justify-center font-bold text-[#0b2b44] shadow-sm">F</div>
                      <div className="bg-white/80 backdrop-blur rounded-2xl flex items-center justify-center font-bold text-[#0b2b44] shadow-sm">E</div>
                      <div className="bg-[#ffb347] text-[#0b2b44] rounded-2xl flex items-center justify-center font-bold shadow-sm text-xs text-center p-2">STUDY CENTRE</div>
                      <div className="bg-white/80 backdrop-blur rounded-2xl flex items-center justify-center font-bold text-[#0b2b44] shadow-sm">C</div>
                      <div className="flex flex-col items-center justify-center">
                        <div className="w-4 h-8 bg-[#0b2b44] rounded-t-full mb-1" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Entrance</span>
                      </div>
                      <div className="bg-white/80 backdrop-blur rounded-2xl flex items-center justify-center font-bold text-[#0b2b44] shadow-sm">A</div>
                    </div>
                  </div>
                )}
                {currentPart.questions.some(q => q.paragraph) && (
                  <div className="space-y-8 mt-8">
                    {currentPart.questions.map(q => q.paragraph && (
                      <div key={q.id} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative">
                        <div className="absolute -top-3 -left-3 bg-[#0b2b44] text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold shadow-lg">
                          {q.id}
                        </div>
                        <p className="text-lg text-slate-700 leading-relaxed">{q.paragraph}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Panel: Questions/Answers */}
            <div className="w-[450px] bg-[#e7f0fa] rounded-[32px] shadow-sm overflow-y-auto p-8 border border-slate-200">
              <h3 className="text-lg font-bold text-[#0b2b44] mb-6 flex items-center gap-2">
                <PenTool className="w-5 h-5" /> Answer Sheet
              </h3>
              
              <div className="space-y-4">
                {currentPart.questions.map(q => (
                  <div key={q.id} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 group transition-all hover:border-[#ffb347]">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center font-bold text-[#0b2b44]">
                          {q.id}
                        </span>
                        {q.text && <span className="text-sm font-medium text-slate-600">{q.text}</span>}
                      </div>
                      <button 
                        onClick={() => toggleFlag(q.id)}
                        className={`p-2 rounded-lg transition-colors ${flags[`${section}-${q.id}`] ? 'text-orange-500 bg-orange-50' : 'text-slate-300 hover:text-slate-400'}`}
                      >
                        <Flag className="w-4 h-4 fill-current" />
                      </button>
                    </div>

                    {q.type === 'multiple-choice' || q.type === 'tfni' ? (
                      <div className={`grid ${q.type === 'tfni' ? 'grid-cols-1' : 'grid-cols-2'} gap-2`}>
                        {q.options?.map(opt => (
                          <button
                            key={opt}
                            onClick={() => handleAnswerChange(section as 'listening' | 'reading', q.id, q.type === 'tfni' ? opt : opt[0])}
                            className={`py-2 px-4 rounded-xl text-sm font-bold transition-all border-2 text-left flex items-center gap-3 ${
                              (section === 'listening' ? answers.listening[q.id] : answers.reading[q.id]) === (q.type === 'tfni' ? opt : opt[0])
                                ? 'bg-[#0b2b44] text-white border-[#0b2b44]'
                                : 'bg-slate-50 text-slate-600 border-transparent hover:border-slate-200'
                            }`}
                          >
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] border ${
                              (section === 'listening' ? answers.listening[q.id] : answers.reading[q.id]) === (q.type === 'tfni' ? opt : opt[0])
                                ? 'bg-[#ffb347] border-[#ffb347] text-[#0b2b44]'
                                : 'bg-white border-slate-200 text-slate-400'
                            }`}>
                              {q.type === 'tfni' ? opt[0] : opt[0]}
                            </div>
                            {opt}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <input 
                        type="text"
                        placeholder="Type your answer..."
                        className="w-full px-4 py-3 bg-slate-50 border-2 border-transparent rounded-xl outline-none focus:border-[#ffb347] transition-all font-medium"
                        value={(section === 'listening' ? answers.listening[q.id] : answers.reading[q.id]) || ''}
                        onChange={(e) => handleAnswerChange(section as 'listening' | 'reading', q.id, e.target.value)}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </main>

      {/* Footer Navigation */}
      <footer className="bg-white border-top border-slate-200 px-8 py-4 flex items-center justify-between shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <div className="flex items-center gap-2">
          <button 
            disabled={currentPartIdx === 0 && section === 'listening'}
            onClick={() => {
              if (currentPartIdx > 0) setCurrentPartIdx(prev => prev - 1);
              else if (section === 'reading') { setSection('listening'); setCurrentPartIdx(EXAM_DATA.listening.length - 1); }
            }}
            className="p-3 rounded-full hover:bg-slate-100 disabled:opacity-30 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-[#0b2b44]" />
          </button>
          
          <div className="flex gap-1 overflow-x-auto max-w-[600px] px-4 py-2">
            {section !== 'writing' && currentParts.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setCurrentPartIdx(idx)}
                className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm transition-all ${
                  currentPartIdx === idx 
                    ? 'bg-[#0b2b44] text-white shadow-lg scale-110' 
                    : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
                }`}
              >
                P{p.id}
              </button>
            ))}
            {section === 'writing' && (
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-xl text-[#0b2b44] font-bold text-sm">
                <PenTool className="w-4 h-4" /> Writing Tasks
              </div>
            )}
          </div>

            {currentPartIdx < currentParts.length - 1 ? (
              <button 
                onClick={() => setCurrentPartIdx(prev => prev + 1)}
                className="p-3 rounded-full hover:bg-slate-100 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-[#0b2b44]" />
              </button>
            ) : (
              <button 
                onClick={() => {
                  if (section === 'listening') { 
                    setSection('reading'); 
                    setCurrentPartIdx(0); 
                  }
                  else if (section === 'reading') { 
                    if (window.confirm("Are you sure you want to move to the Writing section? You won't be able to return to Reading.")) {
                      setSection('writing'); 
                      setCurrentPartIdx(0); 
                    }
                  }
                  else setIsFinished(true);
                }}
                className="ml-4 bg-[#0b2b44] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#153a5a] transition-all"
              >
                {section === 'writing' ? 'Finish' : `Next Section: ${section === 'listening' ? 'Reading' : 'Writing'}`}
              </button>
            )}
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right mr-4">
            <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Progress</div>
            <div className="text-sm font-bold text-[#0b2b44]">
              {section === 'writing' 
                ? `${(answers.writing.task1 ? 1 : 0) + (answers.writing.task2 ? 1 : 0)} / 2 Tasks`
                : `${Object.keys(answers[section]).length} / ${currentParts.reduce((acc, p) => acc + p.questions.length, 0)} Questions`
              }
            </div>
          </div>
          <button 
            onClick={() => setIsFinished(true)}
            className="bg-[#c55f1a] text-white px-8 py-3 rounded-full font-bold hover:bg-[#d56f2a] transition-all shadow-lg flex items-center gap-2"
          >
            Finish Test <CheckCircle2 className="w-5 h-5" />
          </button>
        </div>
      </footer>
    </div>
  );
}

function SectionIcon({ type }: { type: Section }) {
  switch (type) {
    case 'listening': return <Headphones className="w-4 h-4 text-[#ffb347]" />;
    case 'reading': return <BookOpen className="w-4 h-4 text-[#ffb347]" />;
    case 'writing': return <PenTool className="w-4 h-4 text-[#ffb347]" />;
  }
}
