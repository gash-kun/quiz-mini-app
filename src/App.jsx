import React, { useState, useEffect } from 'react';

const SAMPLE_QUESTIONS = [
  // --- CODING & REACT ---
  {
    id: 1,
    category: "Coding",
    question: "Which hook is used to handle side effects in React?",
    options: ["useState", "useEffect", "useContext", "useReducer"],
    correctIndex: 1
  },
  {
    id: 2,
    category: "Coding",
    question: "Which keyword declares a block-scoped variable in JavaScript?",
    options: ["var", "let", "def", "global"],
    correctIndex: 1
  },
  {
    id: 3,
    category: "Coding",
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Hyper Transfer Main Language",
      "Home Tool Markup Language"
    ],
    correctIndex: 0
  },
  {
    id: 4,
    category: "Coding",
    question: "Which CSS property is used to change text color?",
    options: ["font-style", "text-color", "color", "background-color"],
    correctIndex: 2
  },
  {
    id: 5,
    category: "Coding",
    question: "Which method adds one or more elements to the end of an array in JavaScript?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correctIndex: 0
  },
  {
    id: 6,
    category: "Coding",
    question: "What is the primary build tool used by Vite?",
    options: ["Webpack", "esbuild", "Babel", "Parcel"],
    correctIndex: 1
  },
  {
    id: 7,
    category: "Coding",
    question: "Which operator checks both value and type equality in JavaScript?",
    options: ["==", "=", "===", "!=="],
    correctIndex: 2
  },

  // --- ENGLISH GRAMMAR & VOCABULARY ---
  {
    id: 8,
    category: "English",
    question: "What is the synonym of 'Abundant'?",
    options: ["Scarce", "Plentiful", "Small", "Rare"],
    correctIndex: 1
  },
  {
    id: 9,
    category: "English",
    question: "Select the correctly spelled word:",
    options: ["Receieve", "Receive", "Recieve", "Receev"],
    correctIndex: 1
  },
  {
    id: 10,
    category: "English",
    question: "She ____ to the store yesterday.",
    options: ["go", "goes", "went", "gone"],
    correctIndex: 2
  },
  {
    id: 11,
    category: "English",
    question: "What is the antonym of 'Meticulous'?",
    options: ["Careful", "Careless", "Thorough", "Detailed"],
    correctIndex: 1
  },
  {
    id: 12,
    category: "English",
    question: "Choose the correct sentence:",
    options: [
      "Their going to the market.",
      "There going to the market.",
      "They're going to the market.",
      "They going to the market."
    ],
    correctIndex: 2
  },
  {
    id: 13,
    category: "English",
    question: "What part of speech is the word 'Quickly'?",
    options: ["Noun", "Verb", "Adjective", "Adverb"],
    correctIndex: 3
  },

  // --- GENERAL KNOWLEDGE & TRIVIA ---
  {
    id: 14,
    category: "General",
    question: "What is the capital city of Ethiopia?",
    options: ["Dire Dawa", "Addis Ababa", "Hawassa", "Gondar"],
    correctIndex: 1
  },
  {
    id: 15,
    category: "General",
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Jupiter", "Mars", "Saturn"],
    correctIndex: 2
  },
  {
    id: 16,
    category: "General",
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Quartz"],
    correctIndex: 2
  },
  {
    id: 17,
    category: "General",
    question: "Which African lake is the source of the White Nile?",
    options: ["Lake Victoria", "Lake Tana", "Lake Chad", "Lake Tanganyika"],
    correctIndex: 0
  },
  {
    id: 18,
    category: "General",
    question: "How many bones are in the human adult body?",
    options: ["206", "214", "198", "250"],
    correctIndex: 0
  },
  {
    id: 19,
    category: "General",
    question: "Which language has the most native speakers worldwide?",
    options: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
    correctIndex: 2
  },
  {
    id: 20,
    category: "General",
    question: "What element does the chemical symbol 'O' represent?",
    options: ["Gold", "Osmium", "Oxygen", "Opal"],
    correctIndex: 2
  },

  // --- WEB DEVELOPMENT & COMPUTER SCIENCE ---
  {
    id: 21,
    category: "Coding",
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Computer Style Syntax",
      "Creative Styling System",
      "Colorful Style Sheets"
    ],
    correctIndex: 0
  },
  {
    id: 22,
    category: "Coding",
    question: "Which Git command is used to download a repository from a remote origin?",
    options: ["git push", "git commit", "git clone", "git init"],
    correctIndex: 2
  },
  {
    id: 23,
    category: "Coding",
    question: "In React, what is used to pass data from a parent component down to a child component?",
    options: ["State", "Props", "Redux", "Effects"],
    correctIndex: 1
  },
  {
    id: 24,
    category: "Coding",
    question: "Which HTTP status code means 'Not Found'?",
    options: ["200", "301", "404", "500"],
    correctIndex: 2
  },
  {
    id: 25,
    category: "Coding",
    question: "Which protocol is commonly used to securely transmit web pages over the internet?",
    options: ["HTTP", "FTP", "HTTPS", "SMTP"],
    correctIndex: 2
  },
  {
    id: 26,
    category: "Coding",
    question: "What is the result of `typeof null` in JavaScript?",
    options: ["'null'", "'undefined'", "'object'", "'boolean'"],
    correctIndex: 2
  },
  {
    id: 27,
    category: "Coding",
    question: "Which tag is used to define an unordered list in HTML?",
    options: ["<ol>", "<ul>", "<li>", "<list>"],
    correctIndex: 1
  },
  {
    id: 28,
    category: "Coding",
    question: "Which data structure operates on a Last-In, First-Out (LIFO) principle?",
    options: ["Queue", "Stack", "Array", "Tree"],
    correctIndex: 1
  },
  {
    id: 29,
    category: "Coding",
    question: "What does SQL stand for?",
    options: [
      "Structured Query Language",
      "Simple Question Language",
      "System Quality Link",
      "Sequential Query Logic"
    ],
    correctIndex: 0
  },
  {
    id: 30,
    category: "Coding",
    question: "Which JavaScript array method creates a new array with all elements that pass a test?",
    options: ["map()", "filter()", "reduce()", "forEach()"],
    correctIndex: 1
  }
];

export default function App() {
  const [userName, setUserName] = useState('Player');
  const [currentStep, setCurrentStep] = useState('home');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(1);
  const [timeLeft, setTimeLeft] = useState(15);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Initialize Telegram Web App Data on Load
  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready(); // Inform Telegram that the mini app is fully loaded
      
      // Expand the mini app to full height
      if (tg.expand) {
        tg.expand();
      }

      // Grab user's first name if available from Telegram profile
      if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
        setUserName(tg.initDataUnsafe.user.first_name || 'Player');
      }
    }
  }, []);

  const currentQ = SAMPLE_QUESTIONS[questionIndex];

  useEffect(() => {
    if (currentStep !== 'quiz') return;
    
    if (timeLeft === 0) {
      handleWrongAnswer();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [currentStep, timeLeft]);

  const handleSelectAnswer = (index) => {
    setSelectedAnswer(index);
    
    setTimeout(() => {
      if (index === currentQ.correctIndex) {
        setScore((prev) => prev + 10);
        if (questionIndex + 1 < SAMPLE_QUESTIONS.length) {
          setQuestionIndex((prev) => prev + 1);
          setTimeLeft(15);
          setSelectedAnswer(null);
        } else {
          setCurrentStep('success');
        }
      } else {
        handleWrongAnswer();
      }
    }, 800);
  };

  const handleWrongAnswer = () => {
    if (lives > 1) {
      setLives((prev) => prev - 1);
      setTimeLeft(15);
      setSelectedAnswer(null);
    } else {
      setCurrentStep('gameover');
    }
  };

  const handleWatchAdToContinue = () => {
    alert("Simulating 15-second Video Ad (AdsGram Integration Point)...");
    setLives(1);
    setTimeLeft(15);
    setSelectedAnswer(null);
    setCurrentStep('quiz');
  };

  const handlePayStarsToRevive = () => {
    // In production, trigger Telegram Stars invoice here using tg.openInvoice()
    alert("Triggering Telegram Stars Payment (15 Stars)...");
    setLives(1);
    setTimeLeft(15);
    setSelectedAnswer(null);
    setCurrentStep('quiz');
  };

  const startNewQuiz = () => {
    setQuestionIndex(0);
    setScore(0);
    setLives(1);
    setTimeLeft(15);
    setSelectedAnswer(null);
    setCurrentStep('quiz');
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center p-4 font-sans">
      <header className="w-full max-w-md flex justify-between items-center py-4 border-b border-slate-800 mb-6">
        <h1 className="text-xl font-bold text-amber-400">🧠 EduTrivia</h1>
        <div className="flex gap-4 text-sm font-semibold">
          <span>🏆 Score: {score}</span>
          <span>❤️ Lives: {lives}</span>
        </div>
      </header>

      <main className="w-full max-w-md flex-1 flex flex-col justify-center">
        {currentStep === 'home' && (
          <div className="text-center bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl">
            <h2 className="text-2xl font-bold mb-2">Welcome, {userName}! 👋</h2>
            <p className="text-slate-400 text-sm mb-6">
              Answer questions correctly, climb the leaderboard, and maintain your streak!
            </p>
            <button
              onClick={startNewQuiz}
              className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3.5 rounded-xl transition-all shadow-lg active:scale-95 cursor-pointer"
            >
              Start Quiz
            </button>
          </div>
        )}

        {currentStep === 'quiz' && (
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-semibold px-3 py-1 bg-slate-700 rounded-full text-amber-400">
                {currentQ.category} • Q{questionIndex + 1}/{SAMPLE_QUESTIONS.length}
              </span>
              <span className={`text-sm font-mono font-bold px-2 py-1 rounded ${timeLeft <= 5 ? 'bg-red-500/20 text-red-400 animate-pulse' : 'bg-slate-700 text-slate-300'}`}>
                ⏱️ {timeLeft}s
              </span>
            </div>

            <h3 className="text-lg font-semibold mb-6">{currentQ.question}</h3>

            <div className="space-y-3">
              {currentQ.options.map((opt, i) => {
                let btnStyle = "bg-slate-700 hover:bg-slate-600 text-slate-200 border-slate-600";
                if (selectedAnswer !== null) {
                  if (i === currentQ.correctIndex) {
                    btnStyle = "bg-emerald-600 text-white border-emerald-500";
                  } else if (i === selectedAnswer) {
                    btnStyle = "bg-rose-600 text-white border-rose-500";
                  }
                }

                return (
                  <button
                    key={i}
                    disabled={selectedAnswer !== null}
                    onClick={() => handleSelectAnswer(i)}
                    className={`w-full text-left p-4 rounded-xl border font-medium transition-all flex justify-between items-center cursor-pointer ${btnStyle}`}
                  >
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {currentStep === 'gameover' && (
          <div className="text-center bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl">
            <div className="text-4xl mb-2">💥</div>
            <h2 className="text-xl font-bold mb-1">Out of Lives!</h2>
            <p className="text-slate-400 text-sm mb-6">Current Score: {score} pts</p>

            <div className="space-y-3">
              <button
                onClick={handleWatchAdToContinue}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
              >
                <span>📺 Watch Short Ad for 1 Life</span>
              </button>

              <button
                onClick={handlePayStarsToRevive}
                className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
              >
                <span>⭐ Use 15 Stars to Continue</span>
              </button>

              <button
                onClick={() => setCurrentStep('home')}
                className="w-full bg-transparent hover:bg-slate-700 text-slate-400 text-sm py-2 rounded-xl transition-all cursor-pointer"
              >
                End Quiz
              </button>
            </div>
          </div>
        )}

        {currentStep === 'success' && (
          <div className="text-center bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl">
            <div className="text-4xl mb-2">🎉</div>
            <h2 className="text-2xl font-bold mb-1">Quiz Completed!</h2>
            <p className="text-slate-400 text-sm mb-6">Great job, {userName}! You earned <span className="text-amber-400 font-bold">{score}</span> points!</p>
            <button
              onClick={() => setCurrentStep('home')}
              className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3.5 rounded-xl transition-all shadow-lg active:scale-95 cursor-pointer"
            >
              Back to Home
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
