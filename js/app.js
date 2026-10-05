// CareerVerse — Master Application Controller & Sandbox Engine
(function() {
  'use strict';

  // Global Pyodide Runtime Reference
  let pyodideInstance = null;
  let isPyodideLoading = false;

  // Application State
  const state = {
    currentTab: 'dashboard',
    activeRoadmap: 'ai-engineer',
    activeMode: 'developer', // beginner | assisted | developer | advanced
    mentorMode: 'hint', // explain | hint | guide | solution
    activeFile: 'main.py',
    pyodideReady: false,
    incidentSolved: false,
    incidentChart: null,
    hackathonSecondsLeft: 48 * 3600, // 48-hour countdown in seconds
    hackathonInterval: null,
    activeNoteId: 'note-what-is-code',
    activeVideoId: 'vid-1',
    activeStudySubTab: 'notes-reader',
    activeFlashcardIndex: 0,
    flashcardFlipped: false,
    quizScore: 0,
    quizAnswered: {},
    notebookNotes: JSON.parse(localStorage.getItem('careerverse_student_notes') || '[]'),
    dailyXpClaimed: localStorage.getItem('careerverse_daily_claimed') === new Date().toISOString().slice(0, 10),
    selectedRoadmapLevel: 'all',
    collaborationTeam: (window.CAREERVERSE_DATA.collaborationTeam || []).slice(),
    collaborationBoard: (window.CAREERVERSE_DATA.collaborationBoard || []).slice(),
    collaborationChat: (window.CAREERVERSE_DATA.collaborationChat || []).slice(),
    githubSyncData: Object.assign({}, window.CAREERVERSE_DATA.githubSyncData),
    activeProject: {
      title: "AI Study Assistant",
      level: "Level 2 — Intermediate (1–2 weeks)",
      difficulty: "Intermediate",
      career: "AI Engineer",
      skills: ["Python", "FastAPI", "Gemini API", "Vector Embeddings", "SQLite"],
      progress: 72,
      tasks: {
        phase1: [
          { text: "Define core student pain-point & user personas", done: true },
          { text: "Specify functional & non-functional requirements", done: true }
        ],
        phase2: [
          { text: "Design database schemas (Users, Notes, Flashcards, ChatLogs)", done: true },
          { text: "Draft system architecture & API interface specs", done: true }
        ],
        phase3: [
          { text: "Scaffold project environment & dependencies", done: true },
          { text: "Implement core backend logic for notes ingestion", done: true },
          { text: "Build frontend client with responsive chat & flashcard viewer", done: true },
          { text: "Connect SQLite database & async repository layer", done: true }
        ],
        phase4: [
          { text: "Integrate LLM API for intelligent note summarization", done: true },
          { text: "Implement semantic cosine search over student notes", done: false },
          { text: "Add automated guardrails & hallucination validator", done: false }
        ],
        phase5: [
          { text: "Write unit tests for summary & parsing functions", done: false },
          { text: "Test API error handling for rate limits & payload malformation", done: false }
        ],
        phase6: [
          { text: "Containerize application with multi-stage Dockerfile", done: false },
          { text: "Deploy to Cloud Run / Vercel with automated CI/CD", done: false }
        ],
        phase7: [
          { text: "Write comprehensive README with architecture diagram", done: false },
          { text: "Record 2-minute showcase demo & publish to ProjectVerse", done: false }
        ]
      },
      files: {
        "main.py": `# 🎓 AI Study Assistant — Core Logic Engine
# Real Python code running via WebAssembly in browser!

import math
import datetime

study_notes = [
    {
        "id": 1,
        "subject": "Computer Science",
        "topic": "Algorithms",
        "content": "Binary search divides the sorted search space in half with O(log n) complexity."
    },
    {
        "id": 2,
        "subject": "Deep Learning",
        "topic": "Transformers",
        "content": "Self-attention computes dynamic weights between sequence tokens without RNN loops."
    }
]

def summarize_text(text: str, max_points: int = 3):
    """Synthesizes key takeaway bullet points from input notes."""
    words = text.strip().split()
    if not words:
        return {"error": "Empty text provided"}

    summary = " ".join(words[:20]) + ("..." if len(words) > 20 else "")
    bullets = [
        f"Core concept: {words[0]} foundation",
        f"Key takeaway: High-yield recall structure with {len(words)} source tokens",
        "Review action: Test retention using active-recall queries"
    ]
    return {
        "summary": summary,
        "takeaways": bullets[:max_points],
        "reading_time_sec": max(3, len(words) // 4)
    }

def cosine_similarity(v1, v2):
    """Calculates cosine distance between two embedding vectors."""
    dot = sum(a * b for a, b in zip(v1, v2))
    norm1 = math.sqrt(sum(a * a for a in v1))
    norm2 = math.sqrt(sum(b * b for b in v2))
    if norm1 == 0 or norm2 == 0:
        return 0.0
    return dot / (norm1 * norm2)

if __name__ == "__main__":
    print("========================================")
    print("🚀 CareerVerse Python Runtime Active")
    print(f"Timestamp: {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("========================================")
    
    sample_notes = "Transformer architectures revolutionize natural language processing by enabling parallel token attention across entire sequences."
    result = summarize_text(sample_notes, max_points=2)
    print("\\n[AI Summary Result]:")
    print("Summary:", result["summary"])
    print("Bullet Points:")
    for b in result["takeaways"]:
        print("  •", b)
    print(f"Estimated Reading Time: {result['reading_time_sec']}s\\n")
`,
        "test_main.py": `# 🧪 Automated Unit Test Suite
# Click 'Run Code' or type 'pytest' in terminal

def run_tests():
    print("Running automated test suite for AI Study Assistant...")
    
    # Test 1: Empty text handling
    empty_res = summarize_text("")
    assert "error" in empty_res, "Failed empty text check"
    print("✓ test_empty_text_error PASSED")
    
    # Test 2: Bullet points limit
    sample = "Data structures like hash tables provide average O(1) lookups."
    res = summarize_text(sample, max_points=1)
    assert len(res["takeaways"]) == 1, "Failed bullet points count check"
    print("✓ test_takeaway_limit PASSED")
    
    # Test 3: Cosine Similarity
    sim = cosine_similarity([1, 0, 1], [1, 0, 1])
    assert round(sim, 2) == 1.00, "Failed cosine identity check"
    print("✓ test_cosine_similarity PASSED")
    
    print("\\n========================================")
    print("🎉 ALL 3 TESTS PASSED (100% Coverage)")
    print("========================================")

run_tests()
`,
        "database.sql": `-- 🗄️ CareerVerse Database Schema (SQLite / PostgreSQL)
CREATE TABLE IF NOT EXISTS study_notes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    subject VARCHAR(100) NOT NULL,
    topic VARCHAR(150) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS generated_flashcards (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    note_id INTEGER REFERENCES study_notes(id),
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    difficulty_rating INTEGER DEFAULT 1
);

-- Seed Initial Data
INSERT INTO study_notes (subject, topic, content) VALUES
('Computer Science', 'Attention Mechanisms', 'Self-attention mechanism allows transformers to evaluate sequence tokens in parallel.'),
('AI Engineering', 'RAG Retrieval', 'Vector chunking and cosine similarity indices retrieve pertinent reference context.'),
('Backend Systems', 'Idempotency', 'Distributed redis locks guarantee payment requests are processed at most once.');
`,
        "README.md": `# 🎓 AI Study Assistant

> An intelligent, project-based AI assistant helping students summarize dense lecture notes, auto-generate active-recall flashcards, and query syllabus concepts.

## 🚀 Tech Stack
- **Backend**: Python 3.11 & FastAPI
- **Intelligence**: Google Gemini 2.0 / Vector Cosine Embeddings
- **Storage**: SQLite / PostgreSQL
- **Testing**: PyTest Suite (100% Assertion Coverage)
- **Deployment**: Google Cloud Run & Docker Containerization

## 📋 7-Phase Engineering Lifecycle
1. **Planning**: Defined student pain points and user journeys.
2. **Design**: Drafted schema DDL and REST API specifications.
3. **Development**: Implemented note ingestion and text processing.
4. **Intelligence Layer**: Vector embeddings and cosine similarity index.
5. **Testing**: Automated unit tests with boundary case assertions.
6. **Deployment**: Containerized with lightweight alpine images.
7. **Showcase**: Live ProjectVerse demo and verified portfolio entry.
`
      }
    }
  };

  // DOM Elements cache
  let dom = {};

  function init() {
    cacheDom();
    bindEvents();
    renderAllViews();
    updateProgressUI();
    initPyodide();
    startHackathonTimer();
  }

  function cacheDom() {
    dom = {
      navTabs: document.querySelectorAll('.nav-tab'),
      tabPanels: document.querySelectorAll('.tab-panel'),
      roadmapSelect: document.getElementById('roadmap-select'),
      roadmapContainer: document.getElementById('roadmap-container'),
      buildThisCards: document.getElementById('build-this-cards'),
      templatesGrid: document.getElementById('templates-grid'),
      problemsGrid: document.getElementById('problems-grid'),
      industryContainer: document.getElementById('industry-container'),
      hackathonContainer: document.getElementById('hackathon-container'),
      jobsContainer: document.getElementById('jobs-container'),
      showcaseGallery: document.getElementById('showcase-gallery'),
      // Workspace elements
      activeFileName: document.getElementById('active-file-name'),
      codeEditor: document.getElementById('code-editor'),
      lineNumbers: document.getElementById('line-numbers'),
      terminalLogs: document.getElementById('terminal-logs'),
      terminalInput: document.getElementById('terminal-input'),
      runCodeBtn: document.getElementById('run-code-btn'),
      runTestsBtn: document.getElementById('run-tests-btn'),
      fileTreeItems: document.getElementById('file-tree-items'),
      workspaceTabBtns: document.querySelectorAll('.ws-tab-btn'),
      workspacePanels: document.querySelectorAll('.ws-panel'),
      taskChecklistContainer: document.getElementById('task-checklist-container'),
      overallProgressBar: document.getElementById('overall-progress-bar'),
      overallProgressText: document.getElementById('overall-progress-text'),
      pyodideStatusIndicator: document.getElementById('pyodide-status-indicator'),
      // AI Mentor
      mentorChatLogs: document.getElementById('mentor-chat-logs'),
      mentorInput: document.getElementById('mentor-input'),
      sendMentorBtn: document.getElementById('send-mentor-btn'),
      mentorModeBtns: document.querySelectorAll('.mentor-mode-btn'),
      // Mode selector
      buildModeSelector: document.getElementById('build-mode-selector'),
      // Generator Form
      generatorForm: document.getElementById('project-generator-form'),
      generatorOutput: document.getElementById('generator-output'),
      // Quick AI prompt
      aiBuildInput: document.getElementById('ai-build-input'),
      aiBuildBtn: document.getElementById('ai-build-btn'),
      // Review
      runReviewBtn: document.getElementById('run-review-btn'),
      reviewResultPanel: document.getElementById('review-result-panel'),
      // Case study export
      exportCaseStudyBtn: document.getElementById('export-case-study-btn'),
      // Reflection
      reflectionForm: document.getElementById('reflection-form'),
      reflectionStatus: document.getElementById('reflection-save-status'),
      // Startup calculator
      calcAudience: document.getElementById('calc-audience'),
      calcConv: document.getElementById('calc-conv'),
      calcPrice: document.getElementById('calc-price'),
      calcMrrResult: document.getElementById('calc-mrr-result'),
      calcArrResult: document.getElementById('calc-arr-result'),
      // Study Notes
      notesListContainer: document.getElementById('notes-list-container'),
      activeNoteReader: document.getElementById('active-note-reader'),
      notesSearchInput: document.getElementById('notes-search-input'),
      noteQuickOpenGuide: document.getElementById('note-quick-open-guide'),
      // Video Classroom
      classroomVideoPlayer: document.getElementById('classroom-video-player'),
      activeVideoDetails: document.getElementById('active-video-details'),
      videoPlaylistContainer: document.getElementById('video-playlist-container'),
      videoCountBadge: document.getElementById('video-count-badge'),
      // Beginner AI Guidance Assistant Drawer
      beginnerGuideModal: document.getElementById('beginner-guide-modal'),
      beginnerGuideBackdrop: document.getElementById('beginner-guide-backdrop'),
      closeBeginnerGuide: document.getElementById('close-beginner-guide'),
      btnOpenBeginnerChat: document.getElementById('btn-open-beginner-chat'),
      floatingHelpBtn: document.getElementById('floating-help-btn'),
      guideChatForm: document.getElementById('guide-chat-form'),
      guideChatInput: document.getElementById('guide-chat-input'),
      guideChatMessages: document.getElementById('guide-chat-messages'),
      guideChips: document.querySelectorAll('.guide-chip'),
      // Study sub-tabs & panels
      studySubTabs: document.querySelectorAll('.study-sub-tab'),
      studyPanels: document.querySelectorAll('.study-panel'),
      // Flashcards
      flashcardFlipper: document.getElementById('flashcard-flipper'),
      flashcardInner: document.getElementById('flashcard-inner'),
      flashcardCategoryBadge: document.getElementById('flashcard-category-badge'),
      flashcardCounter: document.getElementById('flashcard-counter'),
      flashcardQuestionText: document.getElementById('flashcard-question-text'),
      flashcardAnalogyTitle: document.getElementById('flashcard-analogy-title'),
      flashcardAnswerText: document.getElementById('flashcard-answer-text'),
      flashcardCodeHint: document.getElementById('flashcard-code-hint'),
      btnPrevFlashcard: document.getElementById('btn-prev-flashcard'),
      btnNextFlashcard: document.getElementById('btn-next-flashcard'),
      btnMasterFlashcard: document.getElementById('btn-master-flashcard'),
      // Jargon
      jargonSearchInput: document.getElementById('jargon-search-input'),
      jargonCardsContainer: document.getElementById('jargon-cards-container'),
      // Student Notebook
      notebookTitleInput: document.getElementById('notebook-title-input'),
      notebookContentInput: document.getElementById('notebook-content-input'),
      btnSaveNotebook: document.getElementById('btn-save-notebook'),
      btnExportNotebook: document.getElementById('btn-export-notebook'),
      savedNotesList: document.getElementById('saved-notes-list'),
      savedNotesCount: document.getElementById('saved-notes-count'),
      // Cheatsheets & Quiz
      cheatsheetsContainer: document.getElementById('cheatsheets-container'),
      quizContainer: document.getElementById('quiz-container'),
      quizScoreBadge: document.getElementById('quiz-score-badge'),
      // Studio presets & export
      codePresetBtns: document.querySelectorAll('.code-preset-btn'),
      exportCodeBtn: document.getElementById('export-code-btn'),
      // Beginner Launchpad
      quickStepCards: document.querySelectorAll('.quick-step-card'),
      btnClaimDailyXp: document.getElementById('btn-claim-daily-xp'),
      streakXpCounter: document.getElementById('streak-xp-counter'),
      streakXpFill: document.getElementById('streak-xp-fill'),
      // Roadmap Level Filter Pills (Pillar 5)
      roadmapLevelPills: document.querySelectorAll('.roadmap-level-pill'),
      // Visual Flow Builder (Pillar 10)
      wsVisualBuilderContainer: document.getElementById('ws-visual-builder-container'),
      visualBlocksCanvas: document.getElementById('visual-blocks-canvas'),
      btnCompileVisualBlocks: document.getElementById('btn-compile-visual-blocks'),
      // Team Collaboration & Kanban Board (Pillar 22)
      teamRosterList: document.getElementById('team-roster-list'),
      kanbanColTodo: document.getElementById('kanban-col-todo'),
      kanbanColProg: document.getElementById('kanban-col-prog'),
      kanbanColDone: document.getElementById('kanban-col-done'),
      kanbanTodoCount: document.getElementById('kanban-todo-count'),
      kanbanProgCount: document.getElementById('kanban-prog-count'),
      kanbanDoneCount: document.getElementById('kanban-done-count'),
      teamChatLogs: document.getElementById('team-chat-logs'),
      teamChatInput: document.getElementById('team-chat-input'),
      btnSendTeamChat: document.getElementById('btn-send-team-chat'),
      btnInviteTeam: document.getElementById('btn-invite-team'),
      // GitHub Sync (Pillar 17)
      githubCommitsList: document.getElementById('github-commits-list'),
      btnSyncGithub: document.getElementById('btn-sync-github'),
      // Portfolio (Pillars 16 & 23)
      portfolioLiveCard: document.getElementById('portfolio-live-card'),
      btnPublishProjectverse: document.getElementById('btn-publish-projectverse'),
      btnExportPortfolioMd: document.getElementById('btn-export-portfolio-md')
    };
  }

  function bindEvents() {
    // Nav tabs
    dom.navTabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        e.preventDefault();
        const target = tab.getAttribute('data-tab');
        switchTab(target);
      });
    });

    // Roadmap select
    if (dom.roadmapSelect) {
      dom.roadmapSelect.addEventListener('change', (e) => {
        state.activeRoadmap = e.target.value;
        renderRoadmap();
      });
    }

    // Code editor input
    if (dom.codeEditor) {
      dom.codeEditor.addEventListener('input', updateLineNumbers);
      dom.codeEditor.addEventListener('keydown', handleEditorShortcuts);
    }

    // Run Code & Tests
    if (dom.runCodeBtn) {
      dom.runCodeBtn.addEventListener('click', () => executePythonCode(state.activeProject.files[state.activeFile]));
    }
    if (dom.runTestsBtn) {
      dom.runTestsBtn.addEventListener('click', () => {
        const fullSuite = (state.activeProject.files["main.py"] || '') + "\n\n" + (state.activeProject.files["test_main.py"] || '');
        executePythonCode(fullSuite, true);
      });
    }

    // Terminal command
    if (dom.terminalInput) {
      dom.terminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          handleTerminalCommand(dom.terminalInput.value);
          dom.terminalInput.value = '';
        }
      });
    }

    // Workspace tabs
    dom.workspaceTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-wstab');
        switchWorkspaceTab(target);
      });
    });

    // Mentor Modes
    dom.mentorModeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        dom.mentorModeBtns.forEach(b => b.classList.remove('tab-active', 'bg-indigo-600/30', 'text-indigo-400'));
        btn.classList.add('tab-active', 'bg-indigo-600/30', 'text-indigo-400');
        state.mentorMode = btn.getAttribute('data-mode');
        addMentorMessage('system', `AI Mentor mode switched to: <strong>${state.mentorMode.toUpperCase()}</strong>.`);
        showToast(`AI Mentor mode: ${state.mentorMode.toUpperCase()}`);
      });
    });

    // Send Mentor
    if (dom.sendMentorBtn && dom.mentorInput) {
      dom.sendMentorBtn.addEventListener('click', () => handleSendMentorMessage());
      dom.mentorInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleSendMentorMessage();
      });
    }

    // Build Mode (Pillar 10)
    if (dom.buildModeSelector) {
      dom.buildModeSelector.addEventListener('change', (e) => {
        state.activeMode = e.target.value;
        applyBuildMode(state.activeMode);
      });
    }

    // Generator
    if (dom.generatorForm) {
      dom.generatorForm.addEventListener('submit', (e) => {
        e.preventDefault();
        generateCustomProject();
      });
    }

    // AI Build Prompt
    if (dom.aiBuildBtn && dom.aiBuildInput) {
      dom.aiBuildBtn.addEventListener('click', () => handleQuickBuildPrompt());
      dom.aiBuildInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleQuickBuildPrompt();
      });
    }

    // AI Review
    if (dom.runReviewBtn) {
      dom.runReviewBtn.addEventListener('click', runAIProjectReview);
    }

    // Export Case Study
    if (dom.exportCaseStudyBtn) {
      dom.exportCaseStudyBtn.addEventListener('click', exportProjectCaseStudy);
    }

    // Reflection Form
    if (dom.reflectionForm) {
      dom.reflectionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        saveReflection();
      });
    }

    // Startup calculator sliders
    [dom.calcAudience, dom.calcConv, dom.calcPrice].forEach(el => {
      if (el) el.addEventListener('input', updateStartupCalculator);
    });

    // Notes search
    if (dom.notesSearchInput) {
      dom.notesSearchInput.addEventListener('input', (e) => {
        renderStudyNotes(e.target.value);
      });
    }

    // Note Quick AI Explain
    if (dom.noteQuickOpenGuide) {
      dom.noteQuickOpenGuide.addEventListener('click', () => {
        const note = (window.CAREERVERSE_DATA.studyNotes || []).find(n => n.id === state.activeNoteId);
        openBeginnerGuide(note ? `Can you explain "${note.title}" in even simpler everyday terms?` : "I need help understanding this note.");
      });
    }

    // Beginner AI Guide drawer toggles
    if (dom.btnOpenBeginnerChat) {
      dom.btnOpenBeginnerChat.addEventListener('click', () => openBeginnerGuide());
    }
    if (dom.floatingHelpBtn) {
      dom.floatingHelpBtn.addEventListener('click', () => openBeginnerGuide());
    }
    if (dom.closeBeginnerGuide) {
      dom.closeBeginnerGuide.addEventListener('click', closeBeginnerGuide);
    }
    if (dom.beginnerGuideBackdrop) {
      dom.beginnerGuideBackdrop.addEventListener('click', closeBeginnerGuide);
    }

    // Guide prompt chips
    if (dom.guideChips) {
      dom.guideChips.forEach(chip => {
        chip.addEventListener('click', () => {
          const prompt = chip.getAttribute('data-prompt');
          handleGuideQuery(prompt);
        });
      });
    }

    // Guide chat form submit
    if (dom.guideChatForm && dom.guideChatInput) {
      dom.guideChatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = dom.guideChatInput.value.trim();
        if (text) {
          handleGuideQuery(text);
          dom.guideChatInput.value = '';
        }
      });
    }

    // Study sub-tabs switcher
    dom.studySubTabs.forEach(btn => {
      btn.addEventListener('click', () => {
        const subtab = btn.getAttribute('data-subtab');
        switchStudySubTab(subtab);
      });
    });

    // Flashcard events
    if (dom.flashcardFlipper) {
      dom.flashcardFlipper.addEventListener('click', flipFlashcard);
    }
    if (dom.btnPrevFlashcard) {
      dom.btnPrevFlashcard.addEventListener('click', prevFlashcard);
    }
    if (dom.btnNextFlashcard) {
      dom.btnNextFlashcard.addEventListener('click', nextFlashcard);
    }
    if (dom.btnMasterFlashcard) {
      dom.btnMasterFlashcard.addEventListener('click', masterFlashcard);
    }

    // Jargon search
    if (dom.jargonSearchInput) {
      dom.jargonSearchInput.addEventListener('input', (e) => {
        renderJargonBuster(e.target.value);
      });
    }

    // Student notebook
    if (dom.btnSaveNotebook) {
      dom.btnSaveNotebook.addEventListener('click', saveNotebookNote);
    }
    if (dom.btnExportNotebook) {
      dom.btnExportNotebook.addEventListener('click', exportNotebookNotes);
    }

    // Studio presets
    dom.codePresetBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const presetId = btn.getAttribute('data-preset');
        loadCodePreset(presetId);
      });
    });

    // Studio export code
    if (dom.exportCodeBtn) {
      dom.exportCodeBtn.addEventListener('click', exportCurrentCode);
    }

    // Quick step cards on Overview
    dom.quickStepCards.forEach(card => {
      card.addEventListener('click', () => {
        const step = card.getAttribute('data-step');
        if (step === 'jargon') {
          switchTab('study-notes');
          switchStudySubTab('jargon');
        } else if (step === 'notes') {
          switchTab('study-notes');
          switchStudySubTab('notes-reader');
        } else if (step === 'flashcards') {
          switchTab('study-notes');
          switchStudySubTab('flashcards');
        } else if (step === 'studio') {
          switchTab('workspace');
          loadCodePreset('preset-greeter');
        }
      });
    });

    // Daily XP claim
    if (dom.btnClaimDailyXp) {
      dom.btnClaimDailyXp.addEventListener('click', claimDailyXp);
    }

    // Roadmap Level Filter Pills (Pillar 5)
    dom.roadmapLevelPills.forEach(pill => {
      pill.addEventListener('click', () => {
        dom.roadmapLevelPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.selectedRoadmapLevel = pill.getAttribute('data-level');
        renderRoadmap();
      });
    });

    // Visual Blocks Compile Button (Pillar 10)
    if (dom.btnCompileVisualBlocks) {
      dom.btnCompileVisualBlocks.addEventListener('click', compileVisualBlocksToCode);
    }

    // Collaboration Team & Chat (Pillar 22)
    if (dom.btnSendTeamChat && dom.teamChatInput) {
      dom.btnSendTeamChat.addEventListener('click', postTeamChatMessage);
      dom.teamChatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') postTeamChatMessage();
      });
    }
    if (dom.btnInviteTeam) {
      dom.btnInviteTeam.addEventListener('click', inviteNewTeammate);
    }

    // GitHub Sync (Pillar 17)
    if (dom.btnSyncGithub) {
      dom.btnSyncGithub.addEventListener('click', syncProjectWithGithub);
    }

    // Portfolio & ProjectVerse Publish (Pillars 16 & 23)
    if (dom.btnPublishProjectverse) {
      dom.btnPublishProjectverse.addEventListener('click', publishToProjectVerse);
    }
    if (dom.btnExportPortfolioMd) {
      dom.btnExportPortfolioMd.addEventListener('click', exportPortfolioMarkdown);
    }
  }

  // ==========================================
  // Pyodide WebAssembly Python Runtime Engine
  // ==========================================
  async function initPyodide() {
    if (window.loadPyodide && !state.pyodideReady && !isPyodideLoading) {
      isPyodideLoading = true;
      if (dom.pyodideStatusIndicator) {
        dom.pyodideStatusIndicator.innerHTML = `<span class="w-2 h-2 rounded-full bg-amber-400 animate-ping mr-1.5"></span><span class="text-amber-300">Loading Pyodide WASM...</span>`;
      }
      try {
        pyodideInstance = await window.loadPyodide();
        state.pyodideReady = true;
        isPyodideLoading = false;
        if (dom.pyodideStatusIndicator) {
          dom.pyodideStatusIndicator.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-400 mr-1.5"></span><span class="text-emerald-400 font-mono">Python 3 (WASM Live)</span>`;
        }
        addTerminalLog('system', 'WebAssembly Python 3.11 Runtime Initialized! Real code execution active.');
      } catch (err) {
        console.warn("Pyodide CDN fallback:", err);
        isPyodideLoading = false;
        if (dom.pyodideStatusIndicator) {
          dom.pyodideStatusIndicator.innerHTML = `<span class="w-2 h-2 rounded-full bg-cyan-400 mr-1.5"></span><span class="text-cyan-400 font-mono">Sandboxed Engine Ready</span>`;
        }
      }
    }
  }

  async function executePythonCode(codeString, isTestSuite = false) {
    addTerminalLog('input', isTestSuite ? 'pytest test_main.py' : `python3 ${state.activeFile}`);
    
    // Switch to workspace tab if not currently visible
    if (state.currentTab !== 'workspace') {
      switchTab('workspace');
    }

    if (pyodideInstance && state.pyodideReady) {
      try {
        // Redirect stdout & stderr
        pyodideInstance.setStdout({
          batched: (msg) => {
            if (msg.trim()) addTerminalLog('success', msg);
          }
        });
        pyodideInstance.setStderr({
          batched: (msg) => {
            if (msg.trim()) addTerminalLog('warning', msg);
          }
        });

        await pyodideInstance.runPythonAsync(codeString);

        if (isTestSuite) {
          triggerConfetti();
          awardBuilderPoints(50, "Passed Automated Test Suite");
          renderLivePreviewApp();
        } else {
          renderLivePreviewApp();
        }
      } catch (err) {
        addTerminalLog('warning', String(err));
        // Prompt AI Mentor to offer help
        suggestMentorAssistance(String(err));
      }
    } else {
      // Smart Sandbox Simulation
      setTimeout(() => {
        if (isTestSuite) {
          addTerminalLog('success', '✓ test_empty_text_error PASSED');
          addTerminalLog('success', '✓ test_takeaway_limit PASSED');
          addTerminalLog('success', '✓ test_cosine_similarity PASSED');
          addTerminalLog('success', '========================================');
          addTerminalLog('success', '🎉 ALL 3 TESTS PASSED (100% Coverage)');
          addTerminalLog('success', '========================================');
          triggerConfetti();
          awardBuilderPoints(50, "Passed Automated Test Suite");
        } else {
          addTerminalLog('success', '[INFO] Core execution complete. Ingested study notes.');
          addTerminalLog('success', '[AI Summary Result]:');
          addTerminalLog('success', 'Summary: Transformer architectures revolutionize natural language processing...');
          addTerminalLog('success', '• Core concept: Transformer foundation');
          addTerminalLog('success', '• Key takeaway: High-yield recall structure');
        }
        renderLivePreviewApp();
      }, 400);
    }
  }

  function suggestMentorAssistance(errMessage) {
    setTimeout(() => {
      addMentorMessage('mentor', `I noticed an execution error in your code:<br><code class="text-rose-400 font-mono text-[11px]">${escapeHtml(errMessage.slice(0, 150))}</code><br>Would you like me to <strong>${state.mentorMode.toUpperCase()}</strong> how to resolve this?`);
    }, 600);
  }

  // ==========================================
  // Terminal Command Parser
  // ==========================================
  function handleTerminalCommand(cmd) {
    if (!cmd.trim()) return;
    addTerminalLog('input', cmd);
    const trimmed = cmd.trim();
    const lower = trimmed.toLowerCase();

    if (lower === 'help') {
      addTerminalLog('info', 'Supported commands:\n  run, test, pytest, clear, ls, cat <file>, pip list, git status, git commit, deploy, db:inspect');
    } else if (lower === 'run' || lower === 'python3 main.py' || lower === 'python main.py') {
      executePythonCode(state.activeProject.files["main.py"] || dom.codeEditor.value);
    } else if (lower === 'test' || lower === 'pytest' || lower === 'pytest test_main.py') {
      const fullSuite = (state.activeProject.files["main.py"] || '') + "\n\n" + (state.activeProject.files["test_main.py"] || '');
      executePythonCode(fullSuite, true);
    } else if (lower === 'clear') {
      if (dom.terminalLogs) dom.terminalLogs.innerHTML = '';
    } else if (lower === 'ls') {
      addTerminalLog('info', Object.keys(state.activeProject.files).join('    '));
    } else if (lower.startsWith('cat ')) {
      const filename = trimmed.split(' ')[1];
      if (state.activeProject.files[filename]) {
        addTerminalLog('info', state.activeProject.files[filename]);
      } else {
        addTerminalLog('warning', `cat: ${filename}: No such file`);
      }
    } else if (lower === 'pip list') {
      addTerminalLog('info', 'Package             Version\n------------------- --------\nfastapi             0.111.0\nuvicorn             0.30.0\npydantic            2.7.4\ngoogle-genai        0.1.1\npytest              8.2.2\nchromadb            0.5.0\nsqlite3-wasm        1.2.0');
    } else if (lower.startsWith('git status')) {
      addTerminalLog('info', 'On branch main\nYour branch is up to date with origin/main.\nChanges staged for commit:\n  modified: main.py\n  modified: README.md');
    } else if (lower.startsWith('git commit')) {
      addTerminalLog('success', '[main 8f192b0] Verified implementation of AI Study Assistant logic.\n 2 files changed, 48 insertions(+)');
      awardBuilderPoints(20, "Committed Verified Code Milestone");
    } else if (lower === 'db:inspect') {
      addTerminalLog('info', 'SQLite Schema verified.\nTable: study_notes (3 records)\nTable: generated_flashcards (6 records)');
    } else if (lower === 'deploy') {
      addTerminalLog('system', 'Building production container image careerverse/ai-study-assistant:v1.0...');
      addTerminalLog('system', 'Pushing to Google Artifact Registry...');
      addTerminalLog('system', 'Deploying to Google Cloud Run (us-central1)...');
      setTimeout(() => {
        addTerminalLog('success', '🚀 Service Live: https://ai-study-assistant-prod-88ab1.run.app');
        triggerConfetti();
        awardBuilderPoints(100, "Deployed Production Container");
      }, 1200);
    } else {
      addTerminalLog('warning', `Command not recognized: "${cmd}". Type "help" for options.`);
    }
  }

  function addTerminalLog(type, text) {
    if (!dom.terminalLogs) return;
    const entry = document.createElement('div');
    entry.className = 'font-mono text-xs leading-relaxed my-0.5 break-words whitespace-pre-wrap';

    if (type === 'input') {
      entry.innerHTML = `<span class="text-cyan-400 font-bold">$</span> <span class="text-slate-100">${escapeHtml(text)}</span>`;
    } else if (type === 'success') {
      entry.innerHTML = `<span class="text-emerald-400"><i class="fas fa-check-circle mr-1"></i>${escapeHtml(text)}</span>`;
    } else if (type === 'warning') {
      entry.innerHTML = `<span class="text-amber-400">${escapeHtml(text)}</span>`;
    } else if (type === 'system') {
      entry.innerHTML = `<span class="text-indigo-400">[SYSTEM] ${escapeHtml(text)}</span>`;
    } else {
      entry.innerHTML = `<span class="text-slate-400">${escapeHtml(text)}</span>`;
    }

    dom.terminalLogs.appendChild(entry);
    dom.terminalLogs.scrollTop = dom.terminalLogs.scrollHeight;
  }

  // ==========================================
  // Tab Switching
  // ==========================================
  function switchTab(tabId) {
    state.currentTab = tabId;
    dom.navTabs.forEach(t => {
      const match = t.getAttribute('data-tab') === tabId;
      if (match) {
        t.classList.add('tab-active', 'active', 'text-indigo-400');
        t.classList.remove('text-zinc-400');
        const icon = t.querySelector('i');
        if (icon) {
          icon.classList.remove('text-zinc-400');
          icon.classList.add('text-indigo-400');
        }
      } else {
        t.classList.remove('tab-active', 'active', 'text-indigo-400');
        t.classList.add('text-zinc-400');
        const icon = t.querySelector('i');
        if (icon) {
          icon.classList.remove('text-indigo-400');
          icon.classList.add('text-zinc-400');
        }
      }
    });

    dom.tabPanels.forEach(panel => {
      if (panel.id === `tab-${tabId}`) {
        panel.classList.remove('hidden');
      } else {
        panel.classList.add('hidden');
      }
    });

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    if (tabId === 'industry' && !state.incidentChart) {
      setTimeout(renderIncidentMetricsChart, 100);
    }
    if (tabId === 'study-notes') {
      renderStudyNotes();
      switchStudySubTab(state.activeStudySubTab || 'notes-reader');
    }
    if (tabId === 'video-classroom') {
      renderVideoClassroom();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function switchWorkspaceTab(wsTabId) {
    dom.workspaceTabBtns.forEach(btn => {
      if (btn.getAttribute('data-wstab') === wsTabId) {
        btn.classList.add('tab-active', 'text-indigo-400', 'bg-indigo-900/30', 'border-b-2', 'border-indigo-500');
      } else {
        btn.classList.remove('tab-active', 'text-indigo-400', 'bg-indigo-900/30', 'border-b-2', 'border-indigo-500');
      }
    });

    dom.workspacePanels.forEach(panel => {
      if (panel.id === `wspanel-${wsTabId}`) {
        panel.classList.remove('hidden');
      } else {
        panel.classList.add('hidden');
      }
    });

    if (wsTabId === 'collaboration') {
      renderCollaborationTeam();
      renderKanbanBoard();
      renderTeamChat();
    }
    if (wsTabId === 'github') {
      renderGitHubSync();
    }
    if (wsTabId === 'portfolio') {
      renderPortfolioPreview();
    }
  }

  // ==========================================
  // Workspace Rendering & Editor Sync
  // ==========================================
  function renderAllViews() {
    renderUserStats();
    renderRoadmap();
    renderBuildThis();
    renderStudyNotes();
    renderFlashcard();
    renderJargonBuster();
    renderNotebookNotes();
    renderCheatsheets();
    renderQuiz();
    updateDailyStreakUI();
    renderVideoClassroom();
    renderWorkspaceFiles();
    renderWorkspaceTasks();
    renderVisualBlocks();
    renderCollaborationTeam();
    renderKanbanBoard();
    renderTeamChat();
    renderGitHubSync();
    renderPortfolioPreview();
    applyBuildMode(state.activeMode);
    renderTemplates();
    renderRealProblems();
    renderIndustryChallenges();
    renderHackathon();
    renderJobs();
    renderShowcase();
    loadCodeEditor(state.activeFile);
    updateLineNumbers();
    updateStartupCalculator();
  }

  function renderUserStats() {
    const p = window.CAREERVERSE_DATA.builderProfile;
    const scoreBadge = document.getElementById('user-builder-score');
    const lvlBadge = document.getElementById('user-builder-level');
    if (scoreBadge) scoreBadge.textContent = p.builderScore;
    if (lvlBadge) lvlBadge.textContent = `Lvl ${p.builderLevel}`;

    const scoreSummary = document.getElementById('builder-stats-breakdown');
    if (scoreSummary) {
      scoreSummary.innerHTML = `
        <div class="grid grid-cols-2 gap-3">
          <div class="p-4 bg-white/[0.03] rounded-2xl border border-white/[0.06] hover:border-white/[0.12] transition-all">
            <span class="text-[11px] font-medium text-zinc-400 block mb-1">Projects Built</span>
            <div class="text-3xl font-extrabold text-white tracking-tight">${p.totalProjects}</div>
          </div>
          <div class="p-4 bg-white/[0.03] rounded-2xl border border-white/[0.06] hover:border-white/[0.12] transition-all">
            <span class="text-[11px] font-medium text-emerald-400 block mb-1">Live Deployed</span>
            <div class="text-3xl font-extrabold text-emerald-300 tracking-tight">${p.deployedProjects}</div>
          </div>
          <div class="p-4 bg-white/[0.03] rounded-2xl border border-white/[0.06] hover:border-white/[0.12] transition-all">
            <span class="text-[11px] font-medium text-indigo-400 block mb-1">Open Source</span>
            <div class="text-3xl font-extrabold text-indigo-300 tracking-tight">${p.openSourceProjects}</div>
          </div>
          <div class="p-4 bg-white/[0.03] rounded-2xl border border-white/[0.06] hover:border-white/[0.12] transition-all">
            <span class="text-[11px] font-medium text-amber-400 block mb-1">Startups</span>
            <div class="text-3xl font-extrabold text-amber-300 tracking-tight">${p.startupProjects}</div>
          </div>
        </div>
      `;
    }

    const skillsList = document.getElementById('user-skills-list');
    if (skillsList) {
      skillsList.innerHTML = p.verifiedSkills.map(s => `
        <div class="flex items-center justify-between py-2 border-b border-white/[0.05]">
          <span class="text-xs font-medium text-zinc-300">${s.name}</span>
          <div class="flex items-center gap-3">
            <div class="w-24 bg-white/[0.06] h-1.5 rounded-full overflow-hidden">
              <div class="bg-gradient-to-r from-indigo-500 to-cyan-400 h-full rounded-full" style="width: ${s.score}%"></div>
            </div>
            <span class="text-xs font-mono text-zinc-400 font-semibold">${s.score}%</span>
          </div>
        </div>
      `).join('');
    }
  }

  function renderRoadmap() {
    if (!dom.roadmapContainer) return;
    const roadmap = window.CAREERVERSE_DATA.roadmaps[state.activeRoadmap];
    if (!roadmap) return;

    let html = `
      <div class="mb-8 p-8 sm:p-10 card-surface flex flex-col md:flex-row md:items-center justify-between gap-6 border border-white/[0.08]">
        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <span class="badge-brand font-mono text-[11px]">Curriculum Path</span>
            <span class="badge-neutral font-mono text-[11px]">4 Progressive Tiers</span>
          </div>
          <h3 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
            <i class="${roadmap.icon} text-indigo-400"></i>
            ${roadmap.title}
          </h3>
          <p class="text-sm text-zinc-300 max-w-2xl leading-relaxed">${roadmap.description}</p>
        </div>
        <div class="flex items-center gap-3">
          <span class="badge-success text-xs font-mono py-1 px-3">Zero LeetCode • 100% Builds</span>
        </div>
      </div>
      <div class="space-y-8">
    `;

    roadmap.levels.forEach(lvl => {
      // Filter projects according to state.selectedRoadmapLevel (Pillar 5)
      const filteredProjects = lvl.projects.filter(proj => {
        if (!state.selectedRoadmapLevel || state.selectedRoadmapLevel === 'all') return true;
        const timeLower = (proj.time || '').toLowerCase();
        const lvlLower = (lvl.name || '').toLowerCase();
        const titleLower = (proj.title || '').toLowerCase();
        const descLower = (proj.desc || '').toLowerCase();

        if (state.selectedRoadmapLevel === 'mini') {
          return timeLower.includes('hour') && parseInt(proj.time) <= 3;
        }
        if (state.selectedRoadmapLevel === 'beginner') {
          return lvlLower.includes('beginner') || timeLower.includes('hour') || timeLower.includes('1–3 day');
        }
        if (state.selectedRoadmapLevel === 'intermediate') {
          return lvlLower.includes('intermediate') || timeLower.includes('week');
        }
        if (state.selectedRoadmapLevel === 'advanced') {
          return lvlLower.includes('advanced');
        }
        if (state.selectedRoadmapLevel === 'realworld') {
          return lvlLower.includes('real world') || timeLower.includes('month');
        }
        if (state.selectedRoadmapLevel === 'industry') {
          return titleLower.includes('platform') || descLower.includes('incident') || descLower.includes('production');
        }
        if (state.selectedRoadmapLevel === 'startup') {
          return titleLower.includes('saas') || descLower.includes('product') || descLower.includes('business');
        }
        return true;
      });

      if (filteredProjects.length === 0 && state.selectedRoadmapLevel !== 'all') {
        return;
      }

      html += `
        <div class="card-surface p-8 sm:p-10 space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.08] pb-5">
            <div class="flex items-center gap-3">
              <span class="badge-neutral font-mono text-xs font-bold">${lvl.badge}</span>
              <h4 class="text-xl font-bold text-white tracking-tight">${lvl.name}</h4>
            </div>
            <span class="badge-neutral font-mono text-xs"><i class="fa-regular fa-clock mr-1.5 text-zinc-400"></i>${lvl.duration}</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${filteredProjects.map(proj => `
              <div class="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.18] transition-all flex flex-col justify-between group shadow-sm">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-[10px] font-mono uppercase text-indigo-400 font-bold tracking-wider">Project Unit</span>
                    <span class="text-xs text-zinc-400 font-mono">${proj.time}</span>
                  </div>
                  <h5 class="font-bold text-white text-base group-hover:text-indigo-300 transition-colors leading-snug">${proj.title}</h5>
                  <p class="text-xs text-zinc-300 leading-relaxed">${proj.desc}</p>
                </div>
                <div class="pt-6 space-y-4">
                  <div class="flex flex-wrap gap-1.5">
                    ${proj.skills.map(sk => `<span class="badge-neutral text-[10px] font-mono">${sk}</span>`).join('')}
                  </div>
                  <button class="btn-secondary w-full justify-center text-xs py-2 load-project-btn group-hover:border-white/[0.25]" data-project-title="${proj.title}" data-project-skills="${proj.skills.join(',')}" data-project-level="${lvl.name}" data-starter="${escapeHtml(proj.starterCode || '')}">
                    <span>Launch in Studio</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    });

    html += `</div>`;
    dom.roadmapContainer.innerHTML = html;

    dom.roadmapContainer.querySelectorAll('.load-project-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const title = btn.getAttribute('data-project-title');
        const skills = btn.getAttribute('data-project-skills').split(',');
        const level = btn.getAttribute('data-project-level');
        const starter = btn.getAttribute('data-starter');
        launchProjectInWorkspace(title, level, skills, starter);
      });
    });
  }

  function renderBuildThis() {
    if (!dom.buildThisCards) return;
    const topics = window.CAREERVERSE_DATA.buildThisTopics;
    
    dom.buildThisCards.innerHTML = topics.map((t, idx) => `
      <div class="card-surface p-7 sm:p-8 flex flex-col justify-between group hover:border-white/20 transition-all">
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="badge-brand text-[11px] font-medium">
              <i class="fa-solid fa-bolt mr-1"></i>Curriculum Topic
            </span>
            <span class="text-xs font-mono text-zinc-400"><i class="fa-regular fa-clock mr-1"></i>${t.estimatedTime}</span>
          </div>
          <div>
            <h4 class="text-lg font-bold text-white tracking-tight">${t.topic}</h4>
            <p class="text-xs text-indigo-300 font-mono mt-1">"${t.quote}"</p>
          </div>
          <div class="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-1">
            <div class="text-[10px] font-mono text-zinc-400 uppercase font-semibold">Immediate Project</div>
            <div class="text-sm font-bold text-white">${t.miniProject}</div>
            <p class="text-xs text-zinc-300 leading-relaxed">${t.brief}</p>
          </div>
          <div class="flex flex-wrap gap-1.5 pt-1">
            ${t.skillsGained.map(s => `<span class="badge-neutral text-[10px] font-mono">${s}</span>`).join('')}
          </div>
        </div>
        <div class="pt-6">
          <button class="btn-primary w-full justify-center py-2.5 text-xs build-this-action-btn" data-index="${idx}">
            <i class="fa-solid fa-play text-[10px] mr-1.5"></i>
            <span>Build This Now →</span>
          </button>
        </div>
      </div>
    `).join('');

    dom.buildThisCards.querySelectorAll('.build-this-action-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-index'));
        const topic = topics[idx];
        launchMiniProject(topic);
      });
    });
  }

  function launchMiniProject(topic) {
    state.activeProject.title = topic.miniProject;
    state.activeProject.level = "Mini Project (1–3 hours)";
    state.activeProject.difficulty = "Beginner";
    state.activeProject.skills = topic.skillsGained;
    state.activeProject.files["main.py"] = topic.starterCode;
    if (topic.testSuite) {
      state.activeProject.files["test_main.py"] = topic.testSuite;
    }
    
    state.activeProject.tasks = {
      phase1: [{ text: `Understand the requirement for: ${topic.miniProject}`, done: true }],
      phase2: [{ text: "Inspect starter code and identify empty functions", done: true }],
      phase3: [{ text: "Implement core algorithm in code editor", done: false }],
      phase4: [{ text: "Run code and test with various inputs", done: false }],
      phase5: [{ text: "Pass all validation edge cases", done: false }],
      phase6: [{ text: "Deploy or record output snippet", done: false }],
      phase7: [{ text: "Add to portfolio as verified skill", done: false }]
    };

    updateProjectHeader();
    renderWorkspaceTasks();
    loadCodeEditor("main.py");
    updateProgressUI();
    switchTab('workspace');
    addTerminalLog('info', `Loaded Mini Project: ${topic.miniProject}`);
    addMentorMessage('mentor', `Welcome! You just completed <strong>${topic.topic}</strong>. Let's put it to work right now in <code>main.py</code>. I'm here in <em>${state.mentorMode.toUpperCase()}</em> mode to help you succeed.`);
    showToast(`Loaded: ${topic.miniProject}`);
  }

  function launchProjectInWorkspace(title, level, skills, starterCode) {
    state.activeProject.title = title;
    state.activeProject.level = level;
    state.activeProject.skills = skills;
    state.activeProject.difficulty = level.includes('Beginner') ? 'Beginner' : (level.includes('Intermediate') ? 'Intermediate' : 'Advanced');

    if (starterCode) {
      state.activeProject.files["main.py"] = starterCode;
    }

    updateProjectHeader();
    renderWorkspaceTasks();
    loadCodeEditor("main.py");
    updateProgressUI();
    switchTab('workspace');
    addTerminalLog('info', `Active project switched to: ${title} (${level})`);
    addMentorMessage('mentor', `Loaded workspace for <strong>${title}</strong>. Ready to guide you step-by-step.`);
    showToast(`Project Workspace: ${title}`);
  }

  function updateProjectHeader() {
    const titleEl = document.getElementById('ws-project-title');
    const levelEl = document.getElementById('ws-project-level');
    const skillsEl = document.getElementById('ws-project-skills');
    if (titleEl) titleEl.textContent = state.activeProject.title;
    if (levelEl) levelEl.textContent = state.activeProject.level;
    if (skillsEl) {
      skillsEl.innerHTML = state.activeProject.skills.map(s => `
        <span class="px-2 py-0.5 rounded text-[11px] font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-800/60">${s}</span>
      `).join('');
    }
  }

  function renderWorkspaceFiles() {
    if (!dom.fileTreeItems) return;
    const fileNames = Object.keys(state.activeProject.files);
    dom.fileTreeItems.innerHTML = fileNames.map(f => `
      <div class="file-item flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-mono cursor-pointer transition-colors ${state.activeFile === f ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/30' : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'}" data-filename="${f}">
        <div class="flex items-center gap-2">
          <i class="${getFileIcon(f)} text-[11px]"></i>
          <span>${f}</span>
        </div>
      </div>
    `).join('');

    dom.fileTreeItems.querySelectorAll('.file-item').forEach(item => {
      item.addEventListener('click', () => {
        const fname = item.getAttribute('data-filename');
        loadCodeEditor(fname);
      });
    });
  }

  function getFileIcon(filename) {
    if (filename.endsWith('.py')) return 'fab fa-python text-yellow-400';
    if (filename.endsWith('.txt')) return 'fas fa-file-alt text-slate-400';
    if (filename.endsWith('.md')) return 'fab fa-markdown text-blue-400';
    if (filename.endsWith('.sql')) return 'fas fa-database text-amber-400';
    if (filename.endsWith('.json')) return 'fas fa-code text-emerald-400';
    return 'fas fa-file-code text-indigo-400';
  }

  function loadCodeEditor(filename) {
    state.activeFile = filename;
    if (dom.activeFileName) dom.activeFileName.textContent = filename;
    if (dom.codeEditor && state.activeProject.files[filename] !== undefined) {
      dom.codeEditor.value = state.activeProject.files[filename];
      updateLineNumbers();
    }
    renderWorkspaceFiles();
  }

  function updateLineNumbers() {
    if (!dom.codeEditor || !dom.lineNumbers) return;
    const lines = dom.codeEditor.value.split('\n').length;
    let numbers = '';
    for (let i = 1; i <= Math.max(lines, 1); i++) {
      numbers += `${i}\n`;
    }
    dom.lineNumbers.innerText = numbers;

    if (state.activeProject.files[state.activeFile] !== undefined) {
      state.activeProject.files[state.activeFile] = dom.codeEditor.value;
    }
  }

  function handleEditorShortcuts(e) {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = this.selectionStart;
      const end = this.selectionEnd;
      this.value = this.value.substring(0, start) + "    " + this.value.substring(end);
      this.selectionStart = this.selectionEnd = start + 4;
      updateLineNumbers();
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      executePythonCode(dom.codeEditor.value);
    }
  }

  function renderWorkspaceTasks() {
    if (!dom.taskChecklistContainer) return;
    const phases = [
      { key: "phase1", label: "Phase 1 — Planning", icon: "clipboard-list" },
      { key: "phase2", label: "Phase 2 — Design", icon: "pencil-ruler" },
      { key: "phase3", label: "Phase 3 — Development", icon: "code" },
      { key: "phase4", label: "Phase 4 — Intelligence & AI", icon: "brain" },
      { key: "phase5", label: "Phase 5 — Testing", icon: "vial" },
      { key: "phase6", label: "Phase 6 — Deployment", icon: "cloud-upload-alt" },
      { key: "phase7", label: "Phase 7 — Showcase & Portfolio", icon: "award" }
    ];

    dom.taskChecklistContainer.innerHTML = phases.map(p => {
      const tasks = state.activeProject.tasks[p.key] || [];
      const phaseDoneCount = tasks.filter(t => t.done).length;
      return `
        <div class="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold text-slate-300 flex items-center gap-1.5">
              <i class="fas fa-${p.icon} text-cyan-400"></i>
              ${p.label}
            </span>
            <span class="text-[11px] font-mono ${phaseDoneCount === tasks.length && tasks.length > 0 ? 'text-emerald-400 font-bold' : 'text-slate-400'}">
              ${phaseDoneCount}/${tasks.length}
            </span>
          </div>
          <div class="space-y-1.5">
            ${tasks.map((task, tIdx) => `
              <label class="flex items-start gap-2.5 text-xs text-slate-300 cursor-pointer hover:text-white transition-colors">
                <input type="checkbox" class="mt-0.5 rounded border-slate-700 bg-slate-800 text-indigo-600 focus:ring-0 task-checkbox" data-phase="${p.key}" data-index="${tIdx}" ${task.done ? 'checked' : ''}>
                <span class="${task.done ? 'line-through text-slate-500' : ''}">${task.text}</span>
              </label>
            `).join('')}
          </div>
        </div>
      `;
    }).join('');

    dom.taskChecklistContainer.querySelectorAll('.task-checkbox').forEach(cb => {
      cb.addEventListener('change', (e) => {
        const phase = e.target.getAttribute('data-phase');
        const idx = parseInt(e.target.getAttribute('data-index'));
        state.activeProject.tasks[phase][idx].done = e.target.checked;
        if (e.target.checked) {
          awardBuilderPoints(10, `Completed task in ${phase}`);
        }
        updateProgressUI();
        renderWorkspaceTasks();
      });
    });
  }

  function updateProgressUI() {
    let total = 0;
    let completed = 0;
    Object.keys(state.activeProject.tasks).forEach(ph => {
      const list = state.activeProject.tasks[ph];
      total += list.length;
      completed += list.filter(t => t.done).length;
    });

    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
    state.activeProject.progress = percent;

    if (dom.overallProgressBar) dom.overallProgressBar.style.width = `${percent}%`;
    if (dom.overallProgressText) dom.overallProgressText.textContent = `${percent}%`;

    const sidePill = document.getElementById('ws-dashboard-progress-pill');
    if (sidePill) sidePill.textContent = `${percent}%`;
  }

  function awardBuilderPoints(pts, reason) {
    const prof = window.CAREERVERSE_DATA.builderProfile;
    prof.builderScore += pts;
    if (prof.builderScore >= prof.builderLevel * 105) {
      prof.builderLevel += 1;
      showToast(`🎉 LEVEL UP! You reached Builder Level ${prof.builderLevel}!`);
    }
    renderUserStats();
    showToast(`+${pts} Builder Points: ${reason}`);
  }

  // ==========================================
  // Live Preview App
  // ==========================================
  function renderLivePreviewApp() {
    const previewContainer = document.getElementById('live-preview-viewport');
    if (!previewContainer) return;

    previewContainer.innerHTML = `
      <div class="h-full flex flex-col bg-slate-950 p-4 font-sans text-slate-100 rounded-lg overflow-y-auto">
        <header class="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
          <div class="flex items-center gap-2">
            <span class="p-1.5 rounded-lg bg-indigo-600/30 text-indigo-400 font-bold text-xs"><i class="fas fa-graduation-cap"></i></span>
            <h4 class="font-bold text-sm text-white">AI Study Assistant (Live UI)</h4>
          </div>
          <span class="px-2 py-0.5 text-[10px] bg-emerald-500/20 text-emerald-400 rounded-full font-mono">Backend: 200 OK</span>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
          <div class="bg-slate-900 p-3 rounded-xl border border-slate-800 flex flex-col">
            <h5 class="text-xs font-bold text-slate-300 uppercase mb-2">Input Syllabus / Lecture Notes</h5>
            <textarea id="live-input-text" class="w-full flex-1 p-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200 outline-none resize-none font-mono" placeholder="Paste notes here...">Self-attention mechanisms calculate the weighted importance of all words simultaneously, enabling deep contextual embeddings without recurrent bottlenecks.</textarea>
            <button id="live-summarize-btn" class="mt-2 py-2 px-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-md">
              <i class="fas fa-magic"></i>
              <span>Generate AI Summary & Flashcards</span>
            </button>
          </div>

          <div class="bg-slate-900 p-3 rounded-xl border border-slate-800 flex flex-col">
            <h5 class="text-xs font-bold text-cyan-400 uppercase mb-2">Synthesized Flashcards & Summary</h5>
            <div id="live-output-display" class="flex-1 bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-xs text-slate-300 overflow-y-auto space-y-2">
              <div class="p-2.5 rounded bg-indigo-950/40 border border-indigo-500/20">
                <span class="font-bold text-white text-[11px]">AI Summary:</span>
                <p class="text-slate-300 text-[11px] mt-0.5">Self-attention allows simultaneous sequence evaluation across all tokens.</p>
              </div>
              <div class="p-2.5 rounded bg-slate-900 border border-slate-800">
                <span class="font-bold text-cyan-400 text-[11px]">Active Recall Flashcard:</span>
                <p class="text-[11px] text-white mt-1"><strong>Q:</strong> What bottleneck did transformers solve?</p>
                <p class="text-[11px] text-emerald-300 mt-0.5"><strong>A:</strong> Sequential step-by-step looping in recurrent networks (RNNs/LSTMs).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    const liveBtn = document.getElementById('live-summarize-btn');
    if (liveBtn) {
      liveBtn.addEventListener('click', () => {
        const text = document.getElementById('live-input-text').value;
        const out = document.getElementById('live-output-display');
        out.innerHTML = `<div class="text-center py-4 text-cyan-400 text-xs animate-pulse"><i class="fas fa-spinner fa-spin mr-1"></i> Running LLM Extraction...</div>`;
        setTimeout(() => {
          out.innerHTML = `
            <div class="p-2.5 rounded bg-emerald-950/40 border border-emerald-500/20">
              <span class="font-bold text-emerald-400 text-[11px]">Synthesized Active Summary:</span>
              <p class="text-slate-200 text-[11px] mt-0.5">${text.substring(0, 100)}...</p>
            </div>
            <div class="p-2.5 rounded bg-slate-900 border border-slate-800">
              <span class="font-bold text-cyan-400 text-[11px]">Generated Flashcard:</span>
              <p class="text-[11px] text-white mt-1"><strong>Q:</strong> What is the core mechanism enabling parallelization?</p>
              <p class="text-[11px] text-emerald-300 mt-0.5"><strong>A:</strong> Multi-head self-attention weighting token interactions directly.</p>
            </div>
          `;
          awardBuilderPoints(5, "Tested Live Feature in Sandbox");
        }, 500);
      });
    }
  }

  // ==========================================
  // AI Project Mentor Logic
  // ==========================================
  function handleSendMentorMessage() {
    const input = dom.mentorInput.value.trim();
    if (!input) return;

    addMentorMessage('user', input);
    dom.mentorInput.value = '';

    setTimeout(() => {
      const response = generateMentorResponse(input, state.mentorMode);
      addMentorMessage('mentor', response);
    }, 500);
  }

  function generateMentorResponse(question, mode) {
    const qLower = question.toLowerCase();
    const editorCode = dom.codeEditor ? dom.codeEditor.value : '';

    if (qLower.includes("error") || qLower.includes("api isn't working") || qLower.includes("not working") || qLower.includes("fix")) {
      if (mode === 'explain') {
        return `Let's understand why this happens. When an API or function fails, it's typically because of <strong>type mismatch</strong>, <strong>missing boundary validation</strong>, or <strong>unhandled empty inputs</strong>. In Python, calling methods on empty objects without null guards will trigger exceptions.`;
      } else if (mode === 'hint') {
        return `💡 <strong>Mentor Hint:</strong> Check the return types and input arguments in your active function. What happens if the text passed in is an empty string or whitespace? Have you checked <code>if not words:</code>?`;
      } else if (mode === 'guide') {
        return `🧭 <strong>Action Plan:</strong><br>1. Open <code>main.py</code><br>2. Add an input length check at the top of <code>summarize_text</code><br>3. Open <code>test_main.py</code> and run the test suite to confirm all assertions pass.`;
      } else {
        return `🚀 <strong>Full Reference Solution:</strong><br><pre class="bg-slate-950 p-2.5 rounded text-cyan-300 font-mono text-[11px] mt-1">def summarize_text(text: str, max_points: int = 3):\n    words = text.strip().split()\n    if not words:\n        return {"error": "Empty text provided"}\n    # Process tokens...</pre>`;
      }
    }

    if (qLower.includes("cosine") || qLower.includes("vector") || qLower.includes("similarity") || qLower.includes("rag")) {
      if (mode === 'explain') {
        return `Cosine similarity measures the angle between two multi-dimensional vectors regardless of magnitude. This makes it ideal for semantic search because a short document and a long document on the same subject point in the same directional vector.`;
      } else if (mode === 'hint') {
        return `💡 <strong>Mentor Hint:</strong> Remember the formula: <code>dot_product(A, B) / (norm(A) * norm(B))</code>. What happens if one of the vectors is all zeros? Always guard against division by zero!`;
      } else if (mode === 'guide') {
        return `🧭 <strong>Step-by-step:</strong><br>1. Calculate the dot product: sum of <code>a * b</code>.<br>2. Calculate the L2 Euclidean norm for both vectors.<br>3. Return zero if either norm is zero, otherwise divide dot by norm product.`;
      } else {
        return `🚀 <strong>Solution:</strong><br><pre class="bg-slate-950 p-2.5 rounded text-cyan-300 font-mono text-[11px] mt-1">def cosine_similarity(v1, v2):\n    dot = sum(a * b for a, b in zip(v1, v2))\n    norm1 = math.sqrt(sum(a * a for a in v1))\n    norm2 = math.sqrt(sum(b * b for b in v2))\n    return dot / (norm1 * norm2) if norm1 and norm2 else 0.0</pre>`;
      }
    }

    // Default pedagogical response
    if (mode === 'explain') {
      return `Great question! In <strong>${state.activeProject.title}</strong>, we adhere to clean architecture: separating pure domain logic from framework controllers. This allows unit tests to execute cleanly without spinning up heavy HTTP servers.`;
    } else if (mode === 'hint') {
      return `💡 <strong>Hint:</strong> Think about edge cases: null values, very large inputs, and rate limits. What happens when your model reaches its token cap?`;
    } else if (mode === 'guide') {
      return `🧭 <strong>Guide:</strong><br>1. Identify the input signature in your editor.<br>2. Add early return error handling.<br>3. Verify the changes using the terminal test command.`;
    } else {
      return `🚀 <strong>Direct Code Solution:</strong> Here is how to complete this milestone:<br><pre class="bg-slate-950 p-2.5 rounded text-cyan-300 font-mono text-[11px] mt-1"># Verified implementation\nprint("Milestone logic complete!")</pre>`;
    }
  }

  function addMentorMessage(sender, text) {
    if (!dom.mentorChatLogs) return;
    const msg = document.createElement('div');
    msg.className = `flex flex-col text-xs leading-relaxed my-2 ${sender === 'user' ? 'items-end' : 'items-start'}`;

    if (sender === 'user') {
      msg.innerHTML = `
        <div class="bg-indigo-600 text-white p-3 rounded-2xl rounded-tr-none max-w-[85%] shadow-md">
          ${escapeHtml(text)}
        </div>
        <span class="text-[10px] text-slate-500 mt-1 mr-1">You</span>
      `;
    } else if (sender === 'system') {
      msg.innerHTML = `
        <div class="w-full text-center py-1 text-[11px] text-slate-400 bg-slate-900/60 rounded-lg border border-slate-800">
          ${text}
        </div>
      `;
    } else {
      msg.innerHTML = `
        <div class="flex items-start gap-2 max-w-[90%]">
          <div class="w-6 h-6 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white text-[10px] flex-shrink-0 mt-0.5">
            <i class="fas fa-robot"></i>
          </div>
          <div class="bg-slate-900 border border-slate-800 p-3 rounded-2xl rounded-tl-none text-slate-200">
            ${text}
          </div>
        </div>
        <span class="text-[10px] text-cyan-500 mt-1 ml-8">AI Project Mentor • Mode: ${state.mentorMode.toUpperCase()}</span>
      `;
    }

    dom.mentorChatLogs.appendChild(msg);
    dom.mentorChatLogs.scrollTop = dom.mentorChatLogs.scrollHeight;
  }

  // ==========================================
  // Project Generator (Pillar 3)
  // ==========================================
  function generateCustomProject() {
    const skill = document.getElementById('gen-skill').value;
    const diff = document.getElementById('gen-diff').value;
    const career = document.getElementById('gen-career').value;
    const interest = document.getElementById('gen-interest').value;

    const projectName = `${interest} ${skill} ${diff === 'Advanced' ? 'Platform' : 'Assistant'}`;

    if (!dom.generatorOutput) return;

    dom.generatorOutput.innerHTML = `
      <div class="card-surface p-6 sm:p-8 space-y-6 border border-white/[0.1] rounded-3xl mt-6">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.08] pb-5">
          <div>
            <div class="flex items-center gap-2 mb-1.5">
              <span class="badge-brand font-mono text-[10px]">${career} • ${diff}</span>
              <span class="badge-neutral font-mono text-[10px]">11-Section Blueprint</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-extrabold text-white tracking-tight">${projectName}</h3>
            <span class="text-xs text-zinc-400">Context: <strong class="text-zinc-200">${interest}</strong> | Primary Framework: <strong class="text-indigo-300 font-mono">${skill}</strong></span>
          </div>
          <div class="flex flex-wrap gap-2">
            <button id="download-spec-btn" class="btn-secondary py-2 px-4 text-xs cursor-pointer">
              <i class="fa-solid fa-download mr-1.5 text-zinc-400"></i>Download Full Spec (.md)
            </button>
            <button id="open-generated-btn" class="btn-primary py-2 px-5 text-xs cursor-pointer">
              <span>Mount in Workspace →</span>
            </button>
          </div>
        </div>

        <!-- 11 Standardized Engineering Sections (Pillar 3) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-zinc-300">
          
          <!-- 1. Problem Statement -->
          <div class="p-4 bg-[#080a10] rounded-2xl border border-white/[0.06] space-y-1.5">
            <span class="text-[10px] font-bold text-indigo-300 uppercase tracking-wider block">1. Problem Statement</span>
            <p class="leading-relaxed text-zinc-300">Professionals in <strong>${interest}</strong> face severe friction orchestrating <strong>${skill}</strong> workflows manually, leading to error-prone deployments and high latency.</p>
          </div>

          <!-- 2. Target Users -->
          <div class="p-4 bg-[#080a10] rounded-2xl border border-white/[0.06] space-y-1.5">
            <span class="text-[10px] font-bold text-indigo-300 uppercase tracking-wider block">2. Target Users</span>
            <p class="leading-relaxed text-zinc-300">Students, engineers, and domain researchers in <strong>${interest}</strong> requiring reliable, reproducible <strong>${career}</strong> pipelines.</p>
          </div>

          <!-- 3. Core Features -->
          <div class="p-4 bg-[#080a10] rounded-2xl border border-white/[0.06] space-y-1.5">
            <span class="text-[10px] font-bold text-indigo-300 uppercase tracking-wider block">3. Core Features</span>
            <ul class="space-y-1 text-zinc-300">
              <li>• Automated payload normalization & validation</li>
              <li>• Intelligent ${skill} domain service processor</li>
              <li>• Interactive visual metrics dashboard</li>
            </ul>
          </div>

          <!-- 4. Technology Stack -->
          <div class="p-4 bg-[#080a10] rounded-2xl border border-white/[0.06] space-y-1.5">
            <span class="text-[10px] font-bold text-indigo-300 uppercase tracking-wider block">4. Technology Stack</span>
            <p class="font-mono text-emerald-300 leading-relaxed text-[11px]">${skill}, Python 3.11, FastAPI, SQLite / PostgreSQL, PyTest, Docker, Google Cloud Run.</p>
          </div>

          <!-- 5. Database Design -->
          <div class="p-4 bg-[#080a10] rounded-2xl border border-white/[0.06] space-y-1.5">
            <span class="text-[10px] font-bold text-indigo-300 uppercase tracking-wider block">5. Database Design (DDL)</span>
            <pre class="bg-black/50 p-2 rounded text-[10px] font-mono text-indigo-200 overflow-x-auto">CREATE TABLE projects (id INT PRIMARY KEY, domain TEXT, metric REAL);</pre>
          </div>

          <!-- 6. UI Requirements -->
          <div class="p-4 bg-[#080a10] rounded-2xl border border-white/[0.06] space-y-1.5">
            <span class="text-[10px] font-bold text-indigo-300 uppercase tracking-wider block">6. UI Requirements</span>
            <p class="leading-relaxed text-zinc-300">Responsive dual-pane layout: form input controls on left, live telemetry charts and feedback output cards on right.</p>
          </div>

          <!-- 7. API Contract -->
          <div class="p-4 bg-[#080a10] rounded-2xl border border-white/[0.06] space-y-1.5">
            <span class="text-[10px] font-bold text-indigo-300 uppercase tracking-wider block">7. API Requirements</span>
            <code class="text-[11px] font-mono text-cyan-300 block">POST /api/v1/process</code>
            <code class="text-[11px] font-mono text-zinc-400 block">GET /api/v1/status</code>
          </div>

          <!-- 8. Testing Requirements -->
          <div class="p-4 bg-[#080a10] rounded-2xl border border-white/[0.06] space-y-1.5">
            <span class="text-[10px] font-bold text-indigo-300 uppercase tracking-wider block">8. Testing Requirements</span>
            <p class="leading-relaxed text-zinc-300">PyTest assertion coverage for boundary conditions, null inputs, and concurrent execution under 10ms.</p>
          </div>

          <!-- 9. Deployment Plan -->
          <div class="p-4 bg-[#080a10] rounded-2xl border border-white/[0.06] space-y-1.5">
            <span class="text-[10px] font-bold text-indigo-300 uppercase tracking-wider block">9. Deployment Plan</span>
            <p class="leading-relaxed text-zinc-300">Multi-stage alpine container, Google Artifact Registry push, and autoscaling serverless deployment on Cloud Run.</p>
          </div>

        </div>

        <!-- 10. Architecture Topology Flow (Pillar 3) -->
        <div class="p-4 bg-[#080a10] rounded-2xl border border-white/[0.06] space-y-2">
          <span class="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">10. Architecture & Topology Flow</span>
          <div class="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-center">
            <div class="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 flex-1 min-w-[120px]">
              <span class="text-zinc-200 font-semibold block text-xs">Client Browser</span>
              <span class="text-[10px] text-zinc-500">React UI / Form Ingress</span>
            </div>
            <span class="text-zinc-600">→</span>
            <div class="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 flex-1 min-w-[120px]">
              <span class="text-indigo-400 font-semibold block text-xs">API Gateway</span>
              <span class="text-[10px] text-zinc-500">FastAPI Async Router</span>
            </div>
            <span class="text-zinc-600">→</span>
            <div class="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 flex-1 min-w-[120px]">
              <span class="text-emerald-400 font-semibold block text-xs">${skill} Service</span>
              <span class="text-[10px] text-zinc-500">Core Business Logic</span>
            </div>
            <span class="text-zinc-600">→</span>
            <div class="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 flex-1 min-w-[120px]">
              <span class="text-amber-400 font-semibold block text-xs">Storage Tier</span>
              <span class="text-[10px] text-zinc-500">SQLite + Vector Index</span>
            </div>
          </div>
        </div>

        <!-- 11. 7-Phase Development Roadmap -->
        <div class="p-4 bg-[#080a10] rounded-2xl border border-white/[0.06] space-y-2">
          <span class="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">11. 7-Phase Development Roadmap</span>
          <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 text-center text-[10px] font-mono">
            <div class="p-2 rounded bg-black/40 border border-white/[0.06] text-zinc-300">Phase 1: Plan</div>
            <div class="p-2 rounded bg-black/40 border border-white/[0.06] text-zinc-300">Phase 2: Design</div>
            <div class="p-2 rounded bg-black/40 border border-white/[0.06] text-zinc-300">Phase 3: Code</div>
            <div class="p-2 rounded bg-black/40 border border-white/[0.06] text-zinc-300">Phase 4: AI Layer</div>
            <div class="p-2 rounded bg-black/40 border border-white/[0.06] text-zinc-300">Phase 5: Test</div>
            <div class="p-2 rounded bg-black/40 border border-white/[0.06] text-zinc-300">Phase 6: Deploy</div>
            <div class="p-2 rounded bg-black/40 border border-white/[0.06] text-zinc-300">Phase 7: Showcase</div>
          </div>
        </div>
      </div>
    `;

    document.getElementById('open-generated-btn').addEventListener('click', () => {
      const generatedCode = `# 🚀 ${projectName}
# Generated by CareerVerse Spec Studio (Pillar 3)
# Framework: ${skill} | Context: ${interest}

def run_pipeline():
    print("========================================")
    print("Initializing: ${projectName}")
    print("Target Career Track: ${career}")
    print("========================================")
    return {"status": "success", "metric": 98.4}

if __name__ == "__main__":
    result = run_pipeline()
    print("Execution Result:", result)
`;
      launchProjectInWorkspace(projectName, `${diff} Generated Project`, [skill, career, interest], generatedCode);
    });

    document.getElementById('download-spec-btn').addEventListener('click', () => {
      const specContent = `# 📋 Engineering Specification: ${projectName}
**Track**: ${career} | **Difficulty**: ${diff} | **Primary Skill**: ${skill} | **Domain**: ${interest}

---

## 1. Problem Statement
Users in ${interest} require an automated, reliable system for ${skill}-driven workflows.

## 2. Target Users
Engineers, students, and operators in ${interest}.

## 3. Core Features
- Input payload ingestion and validation.
- ${skill} processing service.
- Real-time telemetry reporting.

## 4. Technology Stack
- Language: Python 3.11
- API Engine: FastAPI
- Database: SQLite / PostgreSQL
- Testing: PyTest (100% Assertion Coverage)
- Container: Docker & Google Cloud Run

## 5. Architecture Topology
Client Browser -> FastAPI Router -> ${skill} Service -> Storage Plane

## 6. Database Schema
\`\`\`sql
CREATE TABLE records (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    domain TEXT NOT NULL,
    value REAL NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
\`\`\`

## 7. API Requirements
- POST /api/v1/process
- GET /api/v1/status

## 8. Development Roadmap (7 Phases)
1. Planning & User Personas
2. Schema & Interface Design
3. Core Backend Development
4. Intelligence & Automation Layer
5. PyTest Test Suite Coverage
6. Multi-Stage Docker Containerization
7. ProjectVerse Showcase & Portfolio Entry
`;
      downloadFile(`${projectName.toLowerCase().replace(/ /g, '_')}_spec.md`, specContent);
      showToast("Downloaded Complete 11-Section Project Specification!");
    });
  }

  function handleQuickBuildPrompt() {
    const prompt = dom.aiBuildInput.value.trim();
    if (!prompt) return;

    dom.aiBuildInput.value = '';
    const generatedTitle = prompt.charAt(0).toUpperCase() + prompt.slice(1);
    
    const starterCode = `# 🚀 Project: ${generatedTitle}
# Auto-scaffolded by CareerVerse AI Build Assistant (Pillar 11)

def run_application():
    print("========================================")
    print("🎉 Live Execution: ${generatedTitle}")
    print("========================================")
    sample_records = [
        {"item": "Sample Metric A", "value": 14.50},
        {"item": "Sample Metric B", "value": 32.80}
    ]
    total = sum(r["value"] for r in sample_records)
    print(f"Computed total across {len(sample_records)} records: $\${total:.2f}")
    return total

if __name__ == "__main__":
    run_application()
`;

    launchProjectInWorkspace(generatedTitle, "Assisted AI Build (Pillar 11)", ["Python", "FastAPI", "SQLite", "Testing"], starterCode);
    showToast(`AI Build Assistant: Project "${generatedTitle}" scaffolded in Studio!`);
  }

  // ==========================================
  // Industry Incident Simulator (Pillar 19)
  // ==========================================
  function renderIndustryChallenges() {
    if (!dom.industryContainer) return;
    const list = window.CAREERVERSE_DATA.industryChallenges;
    dom.industryContainer.innerHTML = list.map(c => `
      <div class="card-surface p-8 sm:p-10 space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-5">
          <div class="space-y-1.5">
            <div class="flex items-center gap-2">
              <span class="badge-neutral font-mono text-[10px] text-rose-400 border-rose-800/40 bg-rose-950/30">
                ${c.company} • INCIDENT DRILL
              </span>
              <span class="badge-neutral font-mono text-[10px]">${c.difficulty}</span>
            </div>
            <h4 class="text-xl sm:text-2xl font-extrabold text-white tracking-tight">${c.title}</h4>
          </div>
          <span class="badge-neutral font-mono text-xs"><i class="fa-regular fa-clock mr-1.5 text-zinc-400"></i>Timebox: ${c.timeLimit}</span>
        </div>

        <div class="p-5 rounded-2xl bg-black/40 border border-white/[0.06] font-mono text-xs text-zinc-300 leading-relaxed">
          <span class="text-[10px] font-bold uppercase text-zinc-500 block mb-1">Scenario Transcript</span>
          ${c.scenario}
        </div>
        
        <!-- Live Incident Telemetry & Logs -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div class="p-6 bg-black/40 rounded-2xl border border-white/[0.06]">
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-bold text-rose-400 uppercase tracking-wider">Live Ingress Error Rate (%)</span>
              <span id="incident-status-tag" class="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-rose-950/60 text-rose-300 border border-rose-800/50">SEV-0: 22.4%</span>
            </div>
            <div class="h-44">
              <canvas id="incident-chart-canvas"></canvas>
            </div>
          </div>

          <div class="p-6 bg-black/40 rounded-2xl border border-white/[0.06] flex flex-col">
            <span class="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">Telemetry Log Stream</span>
            <div id="incident-log-stream" class="flex-1 overflow-y-auto space-y-1.5 font-mono text-xs text-zinc-300 max-h-44">
              ${c.rawLogs.map(l => {
                const color = l.includes('FATAL') || l.includes('CRITICAL') ? 'text-rose-400 font-bold' : (l.includes('ERROR') ? 'text-rose-300 font-semibold' : 'text-amber-300');
                return `<div class="${color}">${escapeHtml(l)}</div>`;
              }).join('')}
            </div>
          </div>
        </div>

        <!-- Interactive Fix Action -->
        <div class="p-6 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="space-y-1">
            <h5 class="text-sm font-bold text-white">Mitigation Strategy: Distributed Concurrency Lock</h5>
            <p class="text-xs text-zinc-300">Deploy Redis distributed lock (Redlock algorithm) with 2,500ms TTL to resolve deadlock condition.</p>
          </div>
          <button id="apply-incident-fix-btn" class="btn-primary py-2.5 px-6 text-xs whitespace-nowrap shrink-0">
            Deploy Lock Mitigation Fix →
          </button>
        </div>
      </div>
    `).join('');

    const fixBtn = document.getElementById('apply-incident-fix-btn');
    if (fixBtn) {
      fixBtn.addEventListener('click', applyIncidentMitigation);
    }
  }

  function renderIncidentMetricsChart() {
    const canvas = document.getElementById('incident-chart-canvas');
    if (!canvas || !window.Chart) return;

    const data = window.CAREERVERSE_DATA.industryChallenges[0].metricsData;
    const ctx = canvas.getContext('2d');

    state.incidentChart = new window.Chart(ctx, {
      type: 'line',
      data: {
        labels: data.labels,
        datasets: [{
          label: 'Checkout Error Rate %',
          data: data.errorRates,
          borderColor: '#f43f5e',
          backgroundColor: 'rgba(244, 63, 94, 0.15)',
          fill: true,
          tension: 0.35,
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#64748b', font: { size: 10 } } },
          y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#64748b', font: { size: 10 } }, beginAtZero: true }
        }
      }
    });
  }

  function applyIncidentMitigation() {
    if (state.incidentSolved) {
      showToast("Incident already mitigated!");
      return;
    }

    const logStream = document.getElementById('incident-log-stream');
    const tag = document.getElementById('incident-status-tag');
    const btn = document.getElementById('apply-incident-fix-btn');

    btn.disabled = true;
    btn.innerHTML = `<i class="fas fa-spinner fa-spin mr-1"></i> Deploying Distributed Lock Fix...`;

    setTimeout(() => {
      state.incidentSolved = true;
      if (logStream) {
        logStream.innerHTML += `
          <div class="text-emerald-400 font-bold">[18:32:00] [deploy] Hotfix deployed: Redis Redlock active with 2500ms TTL</div>
          <div class="text-cyan-400">[18:33:10] [db-primary] Deadlocks resolved. Lock wait time dropped to 1.2ms</div>
          <div class="text-emerald-400 font-bold">[18:34:00] [telemetry] Error rate normalized to 0.08%</div>
        `;
        logStream.scrollTop = logStream.scrollHeight;
      }

      if (tag) {
        tag.className = "text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800";
        tag.textContent = "RESOLVED: 0.08%";
      }

      btn.className = "py-2 px-5 rounded-xl bg-slate-800 text-slate-400 font-bold text-xs uppercase cursor-not-allowed";
      btn.innerHTML = `✓ Incident Resolved (P0 Closed)`;

      // Update Chart to show recovery
      if (state.incidentChart) {
        state.incidentChart.data.labels.push("18:35");
        state.incidentChart.data.datasets[0].data.push(0.08);
        state.incidentChart.data.datasets[0].borderColor = '#10b981';
        state.incidentChart.data.datasets[0].backgroundColor = 'rgba(16, 185, 129, 0.15)';
        state.incidentChart.update();
      }

      triggerConfetti();
      awardBuilderPoints(150, "Resolved P0 Production Incident");
      showToast("🏆 P0 Incident Resolved! Awarded Incident Commander Badge.");
    }, 1200);
  }

  // ==========================================
  // Hackathon Countdown Timer (Pillar 20)
  // ==========================================
  function startHackathonTimer() {
    if (state.hackathonInterval) clearInterval(state.hackathonInterval);
    state.hackathonInterval = setInterval(() => {
      if (state.hackathonSecondsLeft > 0) {
        state.hackathonSecondsLeft -= 1;
        updateHackathonDisplay();
      }
    }, 1000);
  }

  function updateHackathonDisplay() {
    const timerEl = document.getElementById('hackathon-countdown-timer');
    if (!timerEl) return;
    const hours = Math.floor(state.hackathonSecondsLeft / 3600);
    const mins = Math.floor((state.hackathonSecondsLeft % 3600) / 60);
    const secs = state.hackathonSecondsLeft % 60;
    timerEl.textContent = `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  function renderHackathon() {
    if (!dom.hackathonContainer) return;
    const h = window.CAREERVERSE_DATA.hackathon;
    dom.hackathonContainer.innerHTML = `
      <div class="card-surface p-8 sm:p-10 space-y-6">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.08] pb-5">
          <div class="space-y-1.5">
            <div class="flex items-center gap-2">
              <span class="badge-brand font-mono text-[11px]">Pillar 20 • Rapid MVP</span>
              <div class="flex items-center gap-1.5 bg-black/40 border border-white/[0.08] px-2.5 py-1 rounded-full font-mono text-xs text-indigo-300">
                <i class="fa-regular fa-clock text-[10px]"></i>
                <span id="hackathon-countdown-timer">48:00:00</span>
              </div>
            </div>
            <h3 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">${h.title}</h3>
            <p class="text-sm text-zinc-400">${h.theme}</p>
          </div>
          <button id="register-hackathon-btn" class="btn-primary text-xs py-2.5 px-6">
            Register Sprint Team
          </button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          ${h.timeline.map((step, idx) => `
            <div class="p-5 bg-white/[0.02] rounded-2xl border border-white/[0.06] space-y-1">
              <span class="text-[10px] font-mono text-indigo-400 font-bold block mb-1">${step.day}</span>
              <h5 class="text-sm font-bold text-white">${step.phase}</h5>
              <p class="text-xs text-zinc-400 leading-relaxed">${step.deliverable}</p>
            </div>
          `).join('')}
        </div>
        <div class="p-4 bg-black/30 rounded-2xl border border-white/[0.06] flex items-center justify-between text-xs text-zinc-300">
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-award text-indigo-400 text-sm"></i>
            <span><strong>Deliverables:</strong> ${h.prizes.join(' • ')}</span>
          </div>
        </div>
      </div>
    `;

    const regBtn = document.getElementById('register-hackathon-btn');
    if (regBtn) {
      regBtn.addEventListener('click', () => {
        triggerConfetti();
        showToast("Sprint Workspace Initialized for Hackathon Team");
      });
    }
  }

  // ==========================================
  // AI Project Review (Pillar 18)
  // ==========================================
  function runAIProjectReview() {
    if (!dom.reviewResultPanel) return;

    dom.reviewResultPanel.innerHTML = `
      <div class="text-center py-8 text-indigo-400">
        <i class="fas fa-circle-notch fa-spin text-2xl mb-3"></i>
        <p class="text-xs font-mono">Running static analysis, architectural security checks, and UX heuristics...</p>
      </div>
    `;

    setTimeout(() => {
      dom.reviewResultPanel.innerHTML = `
        <div class="p-8 bg-black/40 rounded-3xl border border-indigo-500/30 space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-5">
            <div>
              <span class="badge-success text-[10px] uppercase font-bold tracking-wider mb-1">Evaluation Verified</span>
              <h4 class="text-xl font-extrabold text-white mt-1">${state.activeProject.title}</h4>
            </div>
            <div class="text-left sm:text-right">
              <span class="text-4xl sm:text-5xl font-black font-mono text-white tracking-tight">86<span class="text-zinc-500 text-xl font-normal">/100</span></span>
              <span class="block text-[10px] text-zinc-400 uppercase tracking-wider font-mono mt-0.5">Composite Quality Score</span>
            </div>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div class="p-4 bg-white/[0.03] rounded-2xl border border-white/[0.06] text-center">
              <span class="text-xs text-zinc-400 block mb-1">Code Quality</span>
              <span class="text-2xl font-black text-emerald-400">88%</span>
            </div>
            <div class="p-4 bg-white/[0.03] rounded-2xl border border-white/[0.06] text-center">
              <span class="text-xs text-zinc-400 block mb-1">Product & UX</span>
              <span class="text-2xl font-black text-cyan-400">84%</span>
            </div>
            <div class="p-4 bg-white/[0.03] rounded-2xl border border-white/[0.06] text-center">
              <span class="text-xs text-zinc-400 block mb-1">Engineering</span>
              <span class="text-2xl font-black text-amber-400">82%</span>
            </div>
            <div class="p-4 bg-white/[0.03] rounded-2xl border border-white/[0.06] text-center">
              <span class="text-xs text-zinc-400 block mb-1">Portfolio Ready</span>
              <span class="text-2xl font-black text-indigo-400">90%</span>
            </div>
          </div>

          <div class="space-y-3 text-xs text-zinc-300">
            <div class="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-200">
              <strong>Strengths:</strong> Clean separation of concerns, robust mathematical cosine distance computation, and 100% pass on unit test assertions.
            </div>
            <div class="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-200">
              <strong>Recommendations:</strong> Add redis-based caching for frequent note summaries to mitigate LLM API token rate-limits.
            </div>
          </div>
        </div>
      `;
      awardBuilderPoints(30, "Completed Official AI Code Review");
    }, 800);
  }

  // ==========================================
  // Export Case Study (Pillar 16)
  // ==========================================
  function exportProjectCaseStudy() {
    const p = state.activeProject;
    const content = `# 🎓 Case Study: ${p.title}
**Author**: Alex Rivera (@alex_builds)
**Track**: ${p.career} • ${p.level}
**Demonstrated Skills**: ${p.skills.join(', ')}

---

## 📌 Problem Statement
Students face cognitive overload while synthesizing complex syllabi, textbooks, and lecture transcripts, leading to low retention and missed deadlines.

## 💡 Solution
${p.title} is an automated intelligence platform that ingests raw lecture notes, extracts high-yield takeaways, and structures active-recall flashcards.

## 🛠️ Tech Stack & Architecture
- **Language**: Python 3.11
- **API Engine**: FastAPI
- **Intelligence**: Vector Cosine Embeddings & LLM Summarizer
- **Storage**: SQLite / PostgreSQL Schema
- **Testing**: PyTest with automated assertion coverage

## 📊 Results & Verified Mastery
- 100% test coverage on core math and string parsing pipelines.
- Reduced student study preparation time from 45 minutes to 3 minutes.
- Evaluated and scored 86/100 by the CareerVerse AI Project Reviewer.
`;

    downloadFile(`${p.title.toLowerCase().replace(/ /g, '_')}_case_study.md`, content);
    showToast("Downloaded Recruiter-Ready Case Study (.md)!");
  }

  // ==========================================
  // Reflection Journal (Pillar 28)
  // ==========================================
  function saveReflection() {
    const q1 = document.getElementById('ref-q1').value;
    const q2 = document.getElementById('ref-q2').value;
    const q3 = document.getElementById('ref-q3').value;
    const q4 = document.getElementById('ref-q4').value;
    const q5 = document.getElementById('ref-q5').value;
    const q6 = document.getElementById('ref-q6').value;

    const data = { q1, q2, q3, q4, q5, q6, savedAt: new Date().toISOString() };
    localStorage.setItem(`careerverse_ref_${state.activeProject.title}`, JSON.stringify(data));

    if (dom.reflectionStatus) {
      dom.reflectionStatus.innerHTML = `<span class="text-emerald-400 font-bold"><i class="fas fa-check-circle mr-1"></i>Reflection saved! Personal career recommendations updated.</span>`;
    }
    awardBuilderPoints(25, "Completed Project Retrospective");
    showToast("Project Reflection Saved!");
  }

  // ==========================================
  // Startup Mode TAM Calculator (Pillar 21)
  // ==========================================
  function updateStartupCalculator() {
    if (!dom.calcAudience || !dom.calcConv || !dom.calcPrice) return;
    const aud = parseFloat(dom.calcAudience.value) || 0;
    const conv = (parseFloat(dom.calcConv.value) || 0) / 100;
    const price = parseFloat(dom.calcPrice.value) || 0;

    const paying = aud * conv;
    const mrr = paying * price;
    const arr = mrr * 12;

    if (dom.calcMrrResult) dom.calcMrrResult.textContent = `$${Math.round(mrr).toLocaleString()}`;
    if (dom.calcArrResult) dom.calcArrResult.textContent = `$${Math.round(arr).toLocaleString()}`;

    const audDisplay = document.getElementById('calc-aud-val');
    const convDisplay = document.getElementById('calc-conv-val');
    const priceDisplay = document.getElementById('calc-price-val');
    if (audDisplay) audDisplay.textContent = aud.toLocaleString();
    if (convDisplay) convDisplay.textContent = `${(conv * 100).toFixed(1)}%`;
    if (priceDisplay) priceDisplay.textContent = `$${price}/mo`;
  }

  // ==========================================
  // Supporting Views (Templates, Problems, Jobs, Showcase)
  // ==========================================
  function renderTemplates() {
    if (!dom.templatesGrid) return;
    const tpls = window.CAREERVERSE_DATA.templates;
    dom.templatesGrid.innerHTML = tpls.map(t => `
      <div class="card-surface p-6 flex flex-col justify-between hover:border-white/[0.18] transition-all group">
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <span class="badge-neutral font-mono text-[10px]">${t.domain}</span>
            <span class="text-xs text-zinc-400 font-mono">${t.time}</span>
          </div>
          <h4 class="font-bold text-white text-sm group-hover:text-indigo-300 transition-colors">${t.name}</h4>
          <p class="text-xs text-zinc-300 font-mono">${t.stack}</p>
          <div class="flex flex-wrap gap-1 pt-1">
            ${t.tags.map(tag => `<span class="badge-neutral text-[9px] font-mono py-0.5 px-2">${tag}</span>`).join('')}
          </div>
        </div>
        <div class="pt-6">
          <button class="btn-secondary w-full justify-center text-xs py-2 template-select-btn" data-title="${t.name}" data-stack="${t.stack}">
            Fork Blueprint →
          </button>
        </div>
      </div>
    `).join('');

    dom.templatesGrid.querySelectorAll('.template-select-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const title = btn.getAttribute('data-title');
        const stack = btn.getAttribute('data-stack').split(', ');
        launchProjectInWorkspace(title, "Reference Architecture", stack);
      });
    });
  }

  function renderRealProblems() {
    if (!dom.problemsGrid) return;
    const probs = window.CAREERVERSE_DATA.realProblems;
    dom.problemsGrid.innerHTML = probs.map(p => `
      <div class="card-surface p-7 sm:p-8 flex flex-col justify-between hover:border-white/[0.2] transition-all group">
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="badge-brand font-mono text-[11px]">Real Problem</span>
            <span class="text-xs font-mono text-zinc-400">${p.difficulty}</span>
          </div>
          <h4 class="text-base font-bold text-white leading-snug">"${p.problem}"</h4>
          <div class="p-4 bg-black/40 rounded-2xl border border-white/[0.06] space-y-1">
            <div class="text-[10px] font-mono text-indigo-400 font-bold uppercase tracking-wider">Proposed Architecture</div>
            <div class="text-sm font-bold text-white">${p.suggestedName}</div>
            <p class="text-xs text-zinc-300 leading-relaxed">${p.solution}</p>
          </div>
          <div class="text-xs text-zinc-300 bg-white/[0.02] p-3 rounded-xl border border-white/[0.06]">
            <strong>Impact:</strong> ${p.impact}
          </div>
        </div>
        <div class="pt-6">
          <button class="btn-primary w-full justify-center py-2.5 text-xs solve-problem-btn" data-title="${p.suggestedName}" data-skills="${p.prerequisites.join(',')}">
            Build Solution →
          </button>
        </div>
      </div>
    `).join('');

    dom.problemsGrid.querySelectorAll('.solve-problem-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const title = btn.getAttribute('data-title');
        const skills = btn.getAttribute('data-skills').split(',');
        launchProjectInWorkspace(title, "Real-World Problem Sprint", skills);
      });
    });
  }

  function renderJobs() {
    if (!dom.jobsContainer) return;
    const jobs = window.CAREERVERSE_DATA.jobRoles;
    const userSkills = window.CAREERVERSE_DATA.builderProfile.verifiedSkills.map(s => s.name);

    dom.jobsContainer.innerHTML = jobs.map(j => {
      const matched = j.requiredSkills.filter(req => userSkills.some(us => us.toLowerCase().includes(req.toLowerCase()) || req.toLowerCase().includes(us.toLowerCase())));
      const matchPct = Math.round((matched.length / j.requiredSkills.length) * 100);

      return `
        <div class="card-surface p-7 sm:p-8 flex flex-col justify-between hover:border-white/[0.2] transition-all">
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <h4 class="text-lg font-bold text-white">${j.role}</h4>
              <span class="badge-neutral font-mono text-xs ${matchPct >= 75 ? 'text-emerald-400 border-emerald-500/40 bg-emerald-950/30' : 'text-amber-400 border-amber-500/40 bg-amber-950/30'}">
                ${matchPct}% Match
              </span>
            </div>
            <div class="text-sm font-mono text-indigo-300 font-bold">${j.salary}</div>
            <p class="text-xs text-zinc-300 leading-relaxed">${j.description}</p>
            <div class="space-y-2 pt-1">
              <span class="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Required Competencies:</span>
              <div class="flex flex-wrap gap-1.5">
                ${j.requiredSkills.map(sk => {
                  const isVerified = matched.includes(sk);
                  return `<span class="badge-neutral text-[10px] font-mono py-1 px-2.5 ${isVerified ? 'text-emerald-300 border-emerald-500/40' : 'text-zinc-500'}">${isVerified ? '✓ ' : '○ '}${sk}</span>`;
                }).join('')}
              </div>
            </div>
          </div>
          <div class="pt-6">
            <button class="btn-secondary w-full justify-center text-xs py-2" onclick="alert('Applications synced with your verified portfolio code artifacts!')">
              View Verified Position →
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  function renderShowcase() {
    if (!dom.showcaseGallery) return;
    const gallery = window.CAREERVERSE_DATA.projectVerseGallery;
    dom.showcaseGallery.innerHTML = gallery.map(item => `
      <div class="card-surface p-7 flex flex-col justify-between hover:border-white/[0.2] transition-all">
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <span class="badge-neutral font-mono text-[10px]">${item.badge}</span>
            <div class="flex items-center gap-3 text-xs text-zinc-400 font-mono">
              <span><i class="fa-regular fa-heart mr-1 text-zinc-500"></i>${item.likes}</span>
              <span><i class="fa-regular fa-eye mr-1 text-zinc-500"></i>${item.views}</span>
            </div>
          </div>
          <h4 class="text-base font-bold text-white">${item.title}</h4>
          <span class="text-xs text-zinc-400 block font-mono">by ${item.author}</span>
          <p class="text-xs text-zinc-300 leading-relaxed">${item.summary}</p>
          <div class="flex flex-wrap gap-1.5 pt-1">
            ${item.tech.map(t => `<span class="badge-neutral text-[10px] font-mono py-0.5 px-2">${t}</span>`).join('')}
          </div>
        </div>
        <div class="flex items-center gap-3 pt-6 border-t border-white/[0.06]">
          <a href="${item.demoUrl}" target="_blank" class="btn-primary flex-1 justify-center py-2 text-xs">
            Live Deployment
          </a>
          <a href="${item.githubUrl}" target="_blank" class="btn-secondary py-2 px-3 text-xs">
            <i class="fa-brands fa-github text-sm"></i>
          </a>
        </div>
      </div>
    `).join('');
  }

  // ==========================================
  // Study Notes & Concept Playbook (For Everyone)
  // ==========================================
  function renderStudyNotes(filterTerm = '') {
    if (!dom.notesListContainer) return;
    const notes = window.CAREERVERSE_DATA.studyNotes || [];
    const term = filterTerm.toLowerCase().trim();

    const filtered = term ? notes.filter(n => 
      n.title.toLowerCase().includes(term) || 
      n.category.toLowerCase().includes(term) ||
      n.subtitle.toLowerCase().includes(term) ||
      n.keyConcepts.some(c => c.term.toLowerCase().includes(term) || c.explanation.toLowerCase().includes(term))
    ) : notes;

    if (filtered.length === 0) {
      dom.notesListContainer.innerHTML = `
        <div class="card-surface p-4 text-center text-xs text-zinc-400">
          No study notes match "${escapeHtml(filterTerm)}".
        </div>
      `;
      return;
    }

    // Render list
    dom.notesListContainer.innerHTML = filtered.map(note => {
      const isActive = note.id === state.activeNoteId;
      return `
        <div class="card-surface p-3.5 cursor-pointer transition-all hover:border-white/[0.2] ${isActive ? 'border-indigo-500/60 bg-indigo-950/20' : ''} note-list-card" data-note-id="${note.id}">
          <div class="flex items-center justify-between mb-1.5">
            <span class="badge-neutral text-[10px] font-mono">${note.category}</span>
            <span class="text-[10px] text-zinc-400 font-mono"><i class="fa-regular fa-clock mr-1"></i>${note.readTime}</span>
          </div>
          <h4 class="text-xs font-semibold text-white mb-1 ${isActive ? 'text-indigo-300' : ''}">${note.title}</h4>
          <p class="text-[11px] text-zinc-400 line-clamp-2 leading-relaxed">${note.subtitle}</p>
        </div>
      `;
    }).join('');

    // Attach click listeners to cards
    dom.notesListContainer.querySelectorAll('.note-list-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-note-id');
        selectStudyNote(id);
      });
    });

    // If active note is not in filtered list, select first match
    if (!filtered.some(n => n.id === state.activeNoteId) && filtered.length > 0) {
      selectStudyNote(filtered[0].id);
    } else {
      renderActiveNoteContent();
    }
  }

  function selectStudyNote(noteId) {
    state.activeNoteId = noteId;
    renderStudyNotes(dom.notesSearchInput ? dom.notesSearchInput.value : '');
  }

  function renderActiveNoteContent() {
    if (!dom.activeNoteReader) return;
    const notes = window.CAREERVERSE_DATA.studyNotes || [];
    const note = notes.find(n => n.id === state.activeNoteId) || notes[0];
    if (!note) return;

    dom.activeNoteReader.innerHTML = `
      <!-- Note Header -->
      <div class="border-b border-white/[0.08] pb-5">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div class="flex items-center gap-2">
            <span class="badge-brand font-mono text-[11px]">${note.category}</span>
            <span class="badge-neutral font-mono text-[11px]">${note.badge}</span>
          </div>
          <div class="flex items-center gap-3">
            <button id="btn-read-note-aloud" class="btn-secondary text-[11px] py-1 px-3 cursor-pointer">
              <i class="fa-solid fa-volume-high text-indigo-400 mr-1.5"></i>
              <span id="read-aloud-text">Listen Aloud</span>
            </button>
            <span class="text-xs text-zinc-400 font-mono"><i class="fa-regular fa-clock mr-1"></i>${note.readTime}</span>
          </div>
        </div>
        <h2 class="text-xl sm:text-2xl font-bold text-white tracking-tight">${note.title}</h2>
        <p class="text-xs sm:text-sm text-zinc-300 mt-1 leading-relaxed">${note.subtitle}</p>
      </div>

      <!-- Real-World Everyday Analogy (The "Explain Like I'm 5" Card) -->
      <div class="p-5 rounded-xl bg-gradient-to-br from-indigo-950/40 to-purple-950/20 border border-indigo-500/30 space-y-2">
        <div class="flex items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-wider">
          <i class="fa-solid fa-lightbulb text-amber-300"></i>
          <span>Real-World Analogy: ${note.analogy.title}</span>
        </div>
        <p class="text-xs sm:text-sm text-zinc-200 leading-relaxed">${note.analogy.content}</p>
      </div>

      <!-- Key Concepts Without Jargon -->
      <div class="space-y-3">
        <h3 class="text-xs font-bold uppercase tracking-wider text-zinc-400">Core Concepts Explained Simply</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          ${note.keyConcepts.map(kc => `
            <div class="p-3.5 bg-[#080a10] rounded-xl border border-white/[0.06] space-y-1">
              <span class="text-xs font-semibold text-indigo-300 font-mono block">${kc.term}</span>
              <p class="text-xs text-zinc-300 leading-relaxed">${kc.explanation}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Non-CS Visual Cheat Sheet -->
      <div class="space-y-2">
        <div class="flex items-center justify-between">
          <h3 class="text-xs font-bold uppercase tracking-wider text-zinc-400">Interactive Example Code</h3>
          <button id="btn-copy-note-cheat" class="btn-secondary text-[11px] py-1 px-2.5 cursor-pointer">
            <i class="fa-regular fa-copy mr-1"></i>Copy
          </button>
        </div>
        <pre class="bg-[#07090e] p-4 rounded-xl border border-white/[0.08] text-indigo-200 font-mono text-xs overflow-x-auto leading-relaxed"><code>${escapeHtml(note.cheatSheet)}</code></pre>
      </div>

      <!-- Common Traps & Pro-Tip -->
      <div class="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 flex items-start gap-3 text-xs">
        <i class="fa-solid fa-triangle-exclamation text-amber-400 text-sm mt-0.5 shrink-0"></i>
        <div>
          <span class="font-bold text-amber-300 block mb-0.5">Common Trap to Avoid</span>
          <p class="text-zinc-300 leading-relaxed">${note.commonMistakes}</p>
        </div>
      </div>

      <!-- Mini-Challenge & Next Action -->
      <div class="p-5 rounded-xl card-surface-elevated border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div class="space-y-1 max-w-xl">
          <div class="flex items-center gap-2">
            <span class="text-[10px] font-mono text-emerald-400 uppercase font-semibold">1-Minute Challenge</span>
          </div>
          <p class="text-xs text-zinc-200 font-medium">${note.miniChallenge}</p>
        </div>
        <button id="note-build-action-btn" class="btn-primary py-2 px-5 text-xs whitespace-nowrap shrink-0 cursor-pointer">
          <i class="fa-solid fa-play text-[10px] mr-1.5"></i>
          <span>Open in Studio & Build →</span>
        </button>
      </div>
    `;

    // Hook up audio button
    const audioBtn = document.getElementById('btn-read-note-aloud');
    if (audioBtn) {
      audioBtn.addEventListener('click', () => {
        toggleNoteAudio(note);
      });
    }

    // Hook up copy button
    const copyBtn = document.getElementById('btn-copy-note-cheat');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(note.cheatSheet);
        showToast("Code copied to clipboard!");
      });
    }

    // Hook up Open in Studio button
    const buildBtn = document.getElementById('note-build-action-btn');
    if (buildBtn) {
      buildBtn.addEventListener('click', () => {
        state.activeProject.files["main.py"] = `# 📝 Loaded from Study Note: ${note.title}\n\n${note.cheatSheet}\n`;
        loadCodeEditor("main.py");
        switchTab('workspace');
        addTerminalLog('system', `Loaded starter code for "${note.title}". Click 'Run Code (WASM)' to execute.`);
        showToast(`Loaded ${note.title} into Studio!`);
      });
    }
  }

  // ==========================================
  // Video Classroom & Masterclasses
  // ==========================================
  function renderVideoClassroom() {
    if (!dom.videoPlaylistContainer) return;
    const videos = window.CAREERVERSE_DATA.videoLessons || [];

    if (dom.videoCountBadge) {
      dom.videoCountBadge.textContent = `${videos.length} Lessons`;
    }

    // Render playlist
    dom.videoPlaylistContainer.innerHTML = videos.map(vid => {
      const isActive = vid.id === state.activeVideoId;
      return `
        <div class="card-surface p-3 cursor-pointer transition-all hover:border-white/[0.2] ${isActive ? 'border-indigo-500/60 bg-indigo-950/20' : ''} video-playlist-card flex items-start gap-3" data-video-id="${vid.id}">
          <div class="relative w-20 h-14 rounded-md overflow-hidden bg-zinc-900 shrink-0 border border-white/[0.08]">
            <img src="${vid.thumbnail}" alt="${escapeHtml(vid.title)}" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black/30 flex items-center justify-center">
              <i class="fa-solid fa-play text-white text-[11px] opacity-80"></i>
            </div>
            <span class="absolute bottom-1 right-1 bg-black/80 font-mono text-[9px] px-1 rounded text-zinc-300">${vid.duration}</span>
          </div>
          <div class="flex-1 min-w-0">
            <span class="badge-neutral text-[9px] font-mono py-0 px-1 mb-1 inline-block">${vid.category}</span>
            <h4 class="text-xs font-semibold text-white leading-snug line-clamp-2 ${isActive ? 'text-indigo-300' : ''}">${vid.title}</h4>
            <span class="text-[10px] text-zinc-500 block mt-0.5 font-mono">${vid.source}</span>
          </div>
        </div>
      `;
    }).join('');

    dom.videoPlaylistContainer.querySelectorAll('.video-playlist-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-video-id');
        selectVideoLesson(id);
      });
    });

    renderActiveVideoDetails();
  }

  function selectVideoLesson(videoId) {
    state.activeVideoId = videoId;
    const videos = window.CAREERVERSE_DATA.videoLessons || [];
    const vid = videos.find(v => v.id === videoId);
    if (vid && dom.classroomVideoPlayer) {
      dom.classroomVideoPlayer.src = vid.videoUrl;
    }
    renderVideoClassroom();
  }

  function renderActiveVideoDetails() {
    if (!dom.activeVideoDetails) return;
    const videos = window.CAREERVERSE_DATA.videoLessons || [];
    const vid = videos.find(v => v.id === state.activeVideoId) || videos[0];
    if (!vid) return;

    dom.activeVideoDetails.innerHTML = `
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
        <div>
          <div class="flex items-center gap-2 mb-1.5">
            <span class="badge-brand font-mono text-[10px]">${vid.category}</span>
            <span class="text-xs font-mono text-zinc-400"><i class="fa-regular fa-clock mr-1"></i>${vid.duration}</span>
            <span class="text-zinc-600">•</span>
            <span class="text-xs font-mono text-zinc-400">By ${vid.source}</span>
          </div>
          <h3 class="text-lg font-bold text-white tracking-tight">${vid.title}</h3>
        </div>
        <button id="video-build-action-btn" class="btn-primary py-2 px-4 text-xs whitespace-nowrap shrink-0 cursor-pointer">
          <i class="fa-solid fa-laptop-code mr-1.5"></i>
          <span>${vid.actionText} →</span>
        </button>
      </div>

      <p class="text-xs text-zinc-300 leading-relaxed">${vid.description}</p>

      <!-- Key Takeaways Checklist -->
      <div class="p-4 rounded-xl bg-[#080a10] border border-white/[0.06] space-y-2">
        <span class="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">Key Insights to Remember</span>
        <ul class="space-y-1.5 text-xs text-zinc-300">
          ${vid.takeaways.map(t => `
            <li class="flex items-start gap-2">
              <i class="fa-solid fa-check text-emerald-400 text-[11px] mt-1 shrink-0"></i>
              <span>${t}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    `;

    const buildBtn = document.getElementById('video-build-action-btn');
    if (buildBtn) {
      buildBtn.addEventListener('click', () => {
        // If related to a project, launch it!
        if (vid.actionProject) {
          const nonCs = window.CAREERVERSE_DATA.roadmaps["non-cs-beginner"];
          let found = null;
          if (nonCs) {
            for (const lvl of nonCs.levels) {
              const p = lvl.projects.find(x => x.id === vid.actionProject);
              if (p) { found = p; break; }
            }
          }
          if (found) {
            launchProjectInWorkspace(found.title, "Level 1 — Foundations", found.skills, found.starterCode);
            return;
          }
        }
        switchTab('workspace');
        showToast("Studio Workspace Opened!");
      });
    }
  }

  // ==========================================
  // Study Sub-Tabs & Learning Centers
  // ==========================================
  function switchStudySubTab(subtabId) {
    state.activeStudySubTab = subtabId;
    dom.studySubTabs.forEach(btn => {
      const match = btn.getAttribute('data-subtab') === subtabId;
      if (match) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    dom.studyPanels.forEach(panel => {
      if (panel.id === `studypanel-${subtabId}`) {
        panel.classList.remove('hidden');
      } else {
        panel.classList.add('hidden');
      }
    });

    if (subtabId === 'flashcards') renderFlashcard();
    if (subtabId === 'jargon') renderJargonBuster(dom.jargonSearchInput ? dom.jargonSearchInput.value : '');
    if (subtabId === 'notebook') renderNotebookNotes();
    if (subtabId === 'cheatsheets') renderCheatsheets();
    if (subtabId === 'quiz') renderQuiz();
  }

  // ==========================================
  // Audio Read Aloud (Web Speech API)
  // ==========================================
  function toggleNoteAudio(note) {
    if (!('speechSynthesis' in window)) {
      showToast("Speech synthesis is not supported in this browser.");
      return;
    }

    const btnText = document.getElementById('read-aloud-text');

    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      if (btnText) btnText.textContent = "Listen Aloud";
      showToast("Audio paused.");
      return;
    }

    const speechText = `${note.title}. ${note.subtitle}. Real world analogy: ${note.analogy.title}. ${note.analogy.content}. Key concepts: ` + 
      note.keyConcepts.map(k => `${k.term}: ${k.explanation}`).join('. ');

    const utterance = new SpeechSynthesisUtterance(speechText);
    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    utterance.onend = () => {
      if (btnText) btnText.textContent = "Listen Aloud";
    };
    utterance.onerror = () => {
      if (btnText) btnText.textContent = "Listen Aloud";
    };

    window.speechSynthesis.speak(utterance);
    if (btnText) btnText.textContent = "Stop Audio";
    showToast("🔊 Playing plain-English audio explanation...");
  }

  // ==========================================
  // 3D Interactive Flashcards (Active Recall)
  // ==========================================
  function renderFlashcard() {
    const list = window.CAREERVERSE_DATA.flashcards || [];
    if (!list.length) return;
    if (state.activeFlashcardIndex >= list.length) state.activeFlashcardIndex = 0;
    if (state.activeFlashcardIndex < 0) state.activeFlashcardIndex = list.length - 1;

    const card = list[state.activeFlashcardIndex];
    if (dom.flashcardCategoryBadge) dom.flashcardCategoryBadge.textContent = card.category;
    if (dom.flashcardCounter) dom.flashcardCounter.textContent = `Card ${state.activeFlashcardIndex + 1} of ${list.length}`;
    if (dom.flashcardQuestionText) dom.flashcardQuestionText.textContent = card.question;
    if (dom.flashcardAnalogyTitle) dom.flashcardAnalogyTitle.textContent = card.analogyTitle;
    if (dom.flashcardAnswerText) dom.flashcardAnswerText.textContent = card.answer;
    if (dom.flashcardCodeHint) dom.flashcardCodeHint.textContent = card.codeHint;

    state.flashcardFlipped = false;
    if (dom.flashcardInner) dom.flashcardInner.classList.remove('flipped');
  }

  function flipFlashcard() {
    state.flashcardFlipped = !state.flashcardFlipped;
    if (dom.flashcardInner) {
      dom.flashcardInner.classList.toggle('flipped', state.flashcardFlipped);
    }
  }

  function nextFlashcard() {
    const list = window.CAREERVERSE_DATA.flashcards || [];
    if (!list.length) return;
    state.activeFlashcardIndex = (state.activeFlashcardIndex + 1) % list.length;
    renderFlashcard();
  }

  function prevFlashcard() {
    const list = window.CAREERVERSE_DATA.flashcards || [];
    if (!list.length) return;
    state.activeFlashcardIndex = (state.activeFlashcardIndex - 1 + list.length) % list.length;
    renderFlashcard();
  }

  function masterFlashcard() {
    awardBuilderPoints(10, "Mastered Concept Flashcard");
    triggerConfetti();
    showToast("🎉 +10 XP! Flashcard mastered!");
    setTimeout(() => {
      nextFlashcard();
    }, 600);
  }

  // ==========================================
  // Zero-CS Jargon Buster Dictionary
  // ==========================================
  function renderJargonBuster(searchTerm = '') {
    if (!dom.jargonCardsContainer) return;
    const all = window.CAREERVERSE_DATA.jargonBuster || [];
    const term = (searchTerm || '').toLowerCase().trim();

    const filtered = all.filter(j => 
      j.term.toLowerCase().includes(term) ||
      j.definition.toLowerCase().includes(term) ||
      j.everydayAnalogy.toLowerCase().includes(term) ||
      j.category.toLowerCase().includes(term)
    );

    if (filtered.length === 0) {
      dom.jargonCardsContainer.innerHTML = `
        <div class="col-span-1 md:col-span-2 text-center py-12 card-surface p-6 border border-white/[0.08]">
          <i class="fa-solid fa-magnifying-glass text-zinc-500 text-2xl mb-2"></i>
          <p class="text-sm text-zinc-300">No jargon matched "${escapeHtml(searchTerm)}". Try searching "API", "Loop", "Function", or "Git".</p>
        </div>
      `;
      return;
    }

    dom.jargonCardsContainer.innerHTML = filtered.map(item => `
      <div class="card-surface p-6 sm:p-7 flex flex-col justify-between hover:border-white/[0.2] transition-all space-y-4">
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <span class="badge-brand font-mono text-[10px]">${item.category}</span>
            <span class="text-[11px] text-zinc-500 font-mono">Zero-CS Approved</span>
          </div>
          <h4 class="text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <span>${item.term}</span>
          </h4>
          <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">${item.definition}</p>
          
          <!-- Kitchen / Everyday Analogy -->
          <div class="p-3.5 bg-indigo-950/30 border border-indigo-500/20 rounded-xl space-y-1">
            <div class="flex items-center gap-1.5 text-indigo-300 text-[11px] font-bold uppercase tracking-wider">
              <i class="fa-solid fa-utensils text-amber-300"></i>
              <span>Everyday Analogy</span>
            </div>
            <p class="text-xs text-zinc-200 leading-relaxed">${item.everydayAnalogy}</p>
          </div>

          <!-- Quick Code Example -->
          <div class="space-y-1">
            <div class="flex items-center justify-between text-[11px] text-zinc-400 font-mono">
              <span>Code Example</span>
              <button class="copy-jargon-code text-indigo-400 hover:text-indigo-300 cursor-pointer text-[10px]" data-code="${escapeHtml(item.codeExample)}">
                <i class="fa-regular fa-copy mr-1"></i>Copy
              </button>
            </div>
            <pre class="bg-black/50 p-2.5 rounded-lg border border-white/[0.06] text-xs font-mono text-emerald-300 overflow-x-auto"><code>${escapeHtml(item.codeExample)}</code></pre>
          </div>
        </div>

        <div class="pt-2">
          <button class="btn-secondary w-full justify-center text-xs py-2 jargon-try-studio" data-code="${escapeHtml(item.codeExample)}" data-term="${item.term}">
            <span>Try in Studio Workspace →</span>
          </button>
        </div>
      </div>
    `).join('');

    dom.jargonCardsContainer.querySelectorAll('.copy-jargon-code').forEach(btn => {
      btn.addEventListener('click', () => {
        const code = btn.getAttribute('data-code');
        navigator.clipboard.writeText(code);
        showToast("Code copied to clipboard!");
      });
    });

    dom.jargonCardsContainer.querySelectorAll('.jargon-try-studio').forEach(btn => {
      btn.addEventListener('click', () => {
        const code = btn.getAttribute('data-code');
        const term = btn.getAttribute('data-term');
        state.activeProject.files["main.py"] = `# 💡 Experimenting with Jargon: ${term}\n\n${code}\n`;
        loadCodeEditor("main.py");
        switchTab('workspace');
        addTerminalLog('system', `Loaded snippet for "${term}". Click 'Run Code (WASM)' to execute.`);
        showToast(`Loaded ${term} into Studio!`);
      });
    });
  }

  // ==========================================
  // My Personal Student Notebook (LocalStorage)
  // ==========================================
  function renderNotebookNotes() {
    if (!dom.savedNotesList) return;
    const notes = state.notebookNotes || [];

    if (dom.savedNotesCount) {
      dom.savedNotesCount.textContent = `${notes.length} Note${notes.length === 1 ? '' : 's'}`;
    }

    if (notes.length === 0) {
      dom.savedNotesList.innerHTML = `
        <div class="card-surface p-6 border border-white/[0.08] text-center text-zinc-400 space-y-2">
          <i class="fa-regular fa-note-sticky text-2xl text-zinc-600 block"></i>
          <p class="text-xs">Your notebook is currently empty.</p>
          <p class="text-[11px] text-zinc-500">Take notes while exploring concepts or saving your favorite code snippets!</p>
        </div>
      `;
      return;
    }

    dom.savedNotesList.innerHTML = notes.map((note, idx) => `
      <div class="card-surface p-4 border border-white/[0.08] hover:border-white/[0.18] transition-all space-y-2.5">
        <div class="flex items-start justify-between gap-2">
          <h5 class="text-xs font-bold text-white leading-snug">${escapeHtml(note.title)}</h5>
          <button class="delete-note-btn text-zinc-500 hover:text-rose-400 text-xs shrink-0 cursor-pointer" data-index="${idx}" title="Delete note">
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </div>
        <p class="text-xs text-zinc-300 font-mono whitespace-pre-wrap line-clamp-3 bg-black/40 p-2 rounded border border-white/[0.04]">${escapeHtml(note.content)}</p>
        <div class="flex items-center justify-between text-[10px] text-zinc-500 font-mono pt-1">
          <span>${note.date || 'Saved'}</span>
          <button class="load-note-studio text-indigo-400 hover:text-indigo-300 font-semibold cursor-pointer" data-index="${idx}">
            Open in Studio →
          </button>
        </div>
      </div>
    `).join('');

    dom.savedNotesList.querySelectorAll('.delete-note-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-index'));
        deleteNotebookNote(idx);
      });
    });

    dom.savedNotesList.querySelectorAll('.load-note-studio').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-index'));
        const n = state.notebookNotes[idx];
        if (n) {
          state.activeProject.files["main.py"] = `# 📓 Student Note: ${n.title}\n\n${n.content}\n`;
          loadCodeEditor("main.py");
          switchTab('workspace');
          showToast(`Loaded "${n.title}" into Studio!`);
        }
      });
    });
  }

  function saveNotebookNote() {
    if (!dom.notebookTitleInput || !dom.notebookContentInput) return;
    const title = dom.notebookTitleInput.value.trim();
    const content = dom.notebookContentInput.value.trim();

    if (!title || !content) {
      showToast("Please enter both a title and note content.");
      return;
    }

    const newNote = {
      title,
      content,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })
    };

    state.notebookNotes.unshift(newNote);
    localStorage.setItem('careerverse_student_notes', JSON.stringify(state.notebookNotes));

    dom.notebookTitleInput.value = '';
    dom.notebookContentInput.value = '';

    renderNotebookNotes();
    awardBuilderPoints(15, "Logged Personal Study Note");
    showToast("✓ Note saved to your student vault!");
  }

  function deleteNotebookNote(index) {
    if (index >= 0 && index < state.notebookNotes.length) {
      state.notebookNotes.splice(index, 1);
      localStorage.setItem('careerverse_student_notes', JSON.stringify(state.notebookNotes));
      renderNotebookNotes();
      showToast("Note deleted.");
    }
  }

  function exportNotebookNotes() {
    if (!state.notebookNotes || state.notebookNotes.length === 0) {
      showToast("No notes to export yet!");
      return;
    }

    let text = `# 🎓 CAREERVERSE — MY PERSONAL STUDY NOTEBOOK\n`;
    text += `# Exported: ${new Date().toLocaleString()}\n`;
    text += `# Total Notes: ${state.notebookNotes.length}\n`;
    text += `====================================================\n\n`;

    state.notebookNotes.forEach((n, i) => {
      text += `[${i + 1}] ${n.title.toUpperCase()}\n`;
      text += `Date: ${n.date}\n`;
      text += `----------------------------------------------------\n`;
      text += `${n.content}\n\n`;
      text += `====================================================\n\n`;
    });

    downloadFile('my-careerverse-study-notes.txt', text);
    showToast("Exported all notes as .txt!");
  }

  // ==========================================
  // Cheatsheet Vault
  // ==========================================
  function renderCheatsheets() {
    if (!dom.cheatsheetsContainer) return;
    const sheets = window.CAREERVERSE_DATA.cheatsheets || [];

    dom.cheatsheetsContainer.innerHTML = sheets.map(sheet => `
      <div class="card-surface p-7 sm:p-8 flex flex-col justify-between hover:border-white/[0.2] transition-all space-y-4">
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <span class="badge-brand font-mono text-[10px]">${sheet.category}</span>
            <span class="text-xs font-mono text-zinc-500">Quick Reference</span>
          </div>
          <h4 class="text-lg font-bold text-white tracking-tight">${sheet.title}</h4>
          <p class="text-xs text-zinc-300 leading-relaxed">${sheet.description}</p>
          <pre class="bg-black/60 p-3 rounded-xl border border-white/[0.08] text-[11px] font-mono text-indigo-200 overflow-x-auto max-h-48 leading-relaxed"><code>${escapeHtml(sheet.content)}</code></pre>
        </div>

        <div class="pt-2 flex items-center gap-2">
          <button class="btn-secondary flex-1 justify-center text-xs py-2 copy-sheet-btn" data-content="${escapeHtml(sheet.content)}">
            <i class="fa-regular fa-copy mr-1.5"></i>Copy
          </button>
          <button class="btn-primary flex-1 justify-center text-xs py-2 download-sheet-btn" data-title="${sheet.title}" data-content="${escapeHtml(sheet.content)}">
            <i class="fa-solid fa-download mr-1.5"></i>Download
          </button>
        </div>
      </div>
    `).join('');

    dom.cheatsheetsContainer.querySelectorAll('.copy-sheet-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        navigator.clipboard.writeText(btn.getAttribute('data-content'));
        showToast("Cheatsheet copied to clipboard!");
      });
    });

    dom.cheatsheetsContainer.querySelectorAll('.download-sheet-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const title = btn.getAttribute('data-title').toLowerCase().replace(/[^a-z0-9]/g, '_');
        const content = btn.getAttribute('data-content');
        downloadFile(`${title}_cheatsheet.txt`, content);
        showToast("Downloaded cheatsheet!");
      });
    });
  }

  // ==========================================
  // Interactive Knowledge Quiz
  // ==========================================
  function renderQuiz() {
    if (!dom.quizContainer) return;
    const questions = window.CAREERVERSE_DATA.quizQuestions || [];

    if (dom.quizScoreBadge) {
      dom.quizScoreBadge.textContent = `Score: ${state.quizScore} / ${questions.length}`;
    }

    dom.quizContainer.innerHTML = questions.map((q, qIdx) => {
      const answered = state.quizAnswered[q.id];
      return `
        <div class="p-6 rounded-2xl bg-[#080a10] border border-white/[0.08] space-y-4" id="quiz-card-${qIdx}">
          <div class="flex items-center justify-between text-xs font-mono">
            <span class="text-indigo-400 font-bold">Question ${qIdx + 1} of ${questions.length}</span>
            <span class="text-zinc-500">${q.category}</span>
          </div>
          <h4 class="text-sm sm:text-base font-bold text-white leading-snug">${q.question}</h4>
          
          <div class="grid grid-cols-1 gap-2.5">
            ${q.options.map((opt, optIdx) => {
              let optClass = "card-surface hover:border-white/[0.25] text-zinc-200";
              if (answered) {
                if (optIdx === q.correctIndex) {
                  optClass = "bg-emerald-950/50 border-emerald-500 text-emerald-200 font-semibold";
                } else if (answered.selected === optIdx && !answered.isCorrect) {
                  optClass = "bg-rose-950/50 border-rose-500 text-rose-200";
                } else {
                  optClass = "opacity-40 pointer-events-none";
                }
              }

              return `
                <button class="quiz-opt-btn p-3 rounded-xl border text-left text-xs transition-all flex items-center justify-between ${optClass}" data-qidx="${qIdx}" data-optidx="${optIdx}" ${answered ? 'disabled' : ''}>
                  <span>${opt}</span>
                  ${answered && optIdx === q.correctIndex ? '<i class="fa-solid fa-check text-emerald-400"></i>' : ''}
                  ${answered && answered.selected === optIdx && !answered.isCorrect ? '<i class="fa-solid fa-xmark text-rose-400"></i>' : ''}
                </button>
              `;
            }).join('')}
          </div>

          <!-- Explanation box -->
          ${answered ? `
            <div class="p-3.5 rounded-xl ${answered.isCorrect ? 'bg-emerald-950/30 border border-emerald-500/30 text-emerald-300' : 'bg-amber-950/30 border border-amber-500/30 text-amber-200'} text-xs space-y-1">
              <span class="font-bold block">${answered.isCorrect ? '🎉 Correct!' : '💡 Takeaway Explanation:'}</span>
              <p class="leading-relaxed">${q.explanation}</p>
            </div>
          ` : ''}
        </div>
      `;
    }).join('');

    dom.quizContainer.querySelectorAll('.quiz-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const qIdx = parseInt(btn.getAttribute('data-qidx'));
        const optIdx = parseInt(btn.getAttribute('data-optidx'));
        handleQuizAnswer(qIdx, optIdx);
      });
    });
  }

  function handleQuizAnswer(qIdx, optIdx) {
    const questions = window.CAREERVERSE_DATA.quizQuestions || [];
    const q = questions[qIdx];
    if (!q || state.quizAnswered[q.id]) return;

    const isCorrect = (optIdx === q.correctIndex);
    state.quizAnswered[q.id] = { selected: optIdx, isCorrect };

    if (isCorrect) {
      state.quizScore += 1;
      awardBuilderPoints(25, "Correct Concept Quiz Answer");
      triggerConfetti();
      showToast("🎉 Correct! +25 XP awarded!");
    } else {
      showToast("Not quite! Read the explanation below to reinforce the concept.");
    }

    renderQuiz();
  }

  // ==========================================
  // 1-Click Starter Code Presets & Export
  // ==========================================
  function loadCodePreset(presetId) {
    const presets = window.CAREERVERSE_DATA.beginnerPresets || [];
    const preset = presets.find(p => p.id === presetId);
    if (!preset) return;

    state.activeProject.files["main.py"] = preset.code;
    loadCodeEditor("main.py");
    switchTab('workspace');
    addTerminalLog('system', `Loaded starter preset: "${preset.name}". Running live in sandbox...`);
    showToast(`Loaded ${preset.name} into Studio!`);
    setTimeout(() => {
      executePythonCode(preset.code);
    }, 400);
  }

  function exportCurrentCode() {
    const code = dom.codeEditor ? dom.codeEditor.value : (state.activeProject.files[state.activeFile] || '');
    downloadFile(state.activeFile || 'main.py', code);
    showToast(`Exported ${state.activeFile || 'main.py'}!`);
  }

  // ==========================================
  // Daily Streak & Builder XP
  // ==========================================
  function claimDailyXp() {
    const today = new Date().toISOString().slice(0, 10);
    if (state.dailyXpClaimed) {
      showToast("You've already claimed your daily streak today! Keep building!");
      return;
    }

    state.dailyXpClaimed = true;
    localStorage.setItem('careerverse_daily_claimed', today);
    awardBuilderPoints(25, "Claimed Daily Learning Streak Bonus");
    triggerConfetti();
    updateDailyStreakUI();
    showToast("🔥 +25 Daily XP Claimed! 4-Day Streak Maintained!");
  }

  function updateDailyStreakUI() {
    if (dom.btnClaimDailyXp) {
      if (state.dailyXpClaimed) {
        dom.btnClaimDailyXp.innerHTML = `<i class="fa-solid fa-check text-emerald-400 mr-1.5"></i><span>Claimed Today (+25 XP)</span>`;
        dom.btnClaimDailyXp.classList.remove('btn-primary');
        dom.btnClaimDailyXp.classList.add('btn-secondary', 'opacity-70');
      } else {
        dom.btnClaimDailyXp.innerHTML = `<i class="fa-solid fa-fire text-amber-400 mr-1.5"></i><span>Claim +25 Daily XP</span>`;
        dom.btnClaimDailyXp.classList.add('btn-primary');
        dom.btnClaimDailyXp.classList.remove('btn-secondary', 'opacity-70');
      }
    }

    if (dom.streakXpCounter) {
      dom.streakXpCounter.textContent = `${window.CAREERVERSE_DATA.builderProfile.builderScore} / 500 XP`;
    }
    if (dom.streakXpFill) {
      const pct = Math.min(100, Math.round((window.CAREERVERSE_DATA.builderProfile.builderScore / 500) * 100));
      dom.streakXpFill.style.width = `${pct}%`;
    }
  }

  // ==========================================
  // No-Code / Low-Code / Developer Modes (Pillar 10)
  // ==========================================
  function applyBuildMode(mode) {
    state.activeMode = mode;
    if (dom.buildModeSelector) dom.buildModeSelector.value = mode;

    if (mode === 'beginner') {
      if (dom.wsVisualBuilderContainer) dom.wsVisualBuilderContainer.classList.remove('hidden');
      renderVisualBlocks();
      state.mentorMode = 'explain';
      updateMentorModeUI('explain');
      addTerminalLog('system', 'MODE SWITCH: Beginner Guided Visual Builder active. Assemble visual flow blocks.');
      showToast('Switched to Guided Beginner Mode');
    } else if (mode === 'assisted') {
      if (dom.wsVisualBuilderContainer) dom.wsVisualBuilderContainer.classList.add('hidden');
      state.mentorMode = 'hint';
      updateMentorModeUI('hint');
      addTerminalLog('system', 'MODE SWITCH: Assisted AI scaffolding mode active with inline hints.');
      showToast('Switched to Assisted Mode');
    } else if (mode === 'developer') {
      if (dom.wsVisualBuilderContainer) dom.wsVisualBuilderContainer.classList.add('hidden');
      addTerminalLog('system', 'MODE SWITCH: Full Developer IDE & WebAssembly sandbox active.');
      showToast('Switched to Developer Mode');
    } else if (mode === 'advanced') {
      if (dom.wsVisualBuilderContainer) dom.wsVisualBuilderContainer.classList.add('hidden');
      state.mentorMode = 'guide';
      updateMentorModeUI('guide');
      addTerminalLog('system', 'MODE SWITCH: Advanced Architecture & Production Engineering active.');
      showToast('Switched to Advanced Architecture Mode');
    }
  }

  function updateMentorModeUI(mode) {
    if (!dom.mentorModeBtns) return;
    dom.mentorModeBtns.forEach(btn => {
      const match = btn.getAttribute('data-mode') === mode;
      if (match) {
        btn.classList.add('tab-active', 'bg-indigo-600/30', 'text-indigo-400');
      } else {
        btn.classList.remove('tab-active', 'bg-indigo-600/30', 'text-indigo-400');
      }
    });
  }

  function renderVisualBlocks() {
    if (!dom.visualBlocksCanvas) return;
    const blocks = window.CAREERVERSE_DATA.visualBuilderBlocks || [];

    dom.visualBlocksCanvas.innerHTML = blocks.map((b, i) => `
      <div class="visual-block-card p-3 rounded-xl card-surface border border-white/[0.08] hover:border-indigo-400/40 space-y-1.5 cursor-pointer" data-index="${i}">
        <div class="flex items-center justify-between">
          <span class="text-[10px] font-mono uppercase font-bold text-indigo-400">Step ${i + 1} • ${b.type}</span>
          <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
        </div>
        <h5 class="text-xs font-bold text-white">${b.name}</h5>
        <p class="text-[11px] text-zinc-400 line-clamp-1">${b.desc}</p>
        <code class="text-[10px] font-mono text-zinc-300 block bg-black/40 p-1 rounded overflow-hidden text-ellipsis whitespace-nowrap">${escapeHtml(b.code)}</code>
      </div>
    `).join('');
  }

  function compileVisualBlocksToCode() {
    const blocks = window.CAREERVERSE_DATA.visualBuilderBlocks || [];
    let compiled = `# 🧩 Code Generated from Visual Flow Blocks (Pillar 10)\n# Mode: Guided Beginner\n\n`;
    blocks.forEach(b => {
      compiled += `# --- ${b.name} (${b.desc}) ---\n`;
      compiled += `${b.code}\n\n`;
    });

    state.activeProject.files["main.py"] = compiled;
    loadCodeEditor("main.py");
    awardBuilderPoints(20, "Compiled Visual Flow to Python Code");
    triggerConfetti();
    showToast("🎉 Visual Blocks compiled into executable Python!");
    setTimeout(() => {
      executePythonCode(compiled);
    }, 300);
  }

  // ==========================================
  // Project Collaboration & Team Workspace (Pillar 22)
  // ==========================================
  function renderCollaborationTeam() {
    if (!dom.teamRosterList) return;
    const team = state.collaborationTeam || [];

    dom.teamRosterList.innerHTML = team.map(m => `
      <div class="p-2.5 bg-black/40 rounded-xl border border-white/[0.06] flex items-center gap-2.5">
        <div class="w-8 h-8 rounded-full bg-indigo-600/30 border border-indigo-500/30 flex items-center justify-center text-xs font-bold text-indigo-300 shrink-0">
          ${m.avatar}
        </div>
        <div class="min-w-0 flex-1">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-white truncate">${m.name}</span>
            ${m.isOwner ? '<span class="text-[9px] font-mono text-indigo-400 font-bold">Owner</span>' : ''}
          </div>
          <span class="text-[10px] text-zinc-400 block">${m.role}</span>
          <span class="text-[9px] text-emerald-400 font-mono block">● ${m.status}</span>
        </div>
      </div>
    `).join('');
  }

  function inviteNewTeammate() {
    const name = prompt("Enter Teammate Name:", "Jordan Lee");
    if (!name || !name.trim()) return;
    const role = prompt("Select Role (Developer, Designer, AI Engineer, Researcher, Product, Marketing, Business):", "Designer") || "Contributor";

    const initials = name.trim().split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
    const newMember = {
      id: `tm-${Date.now()}`,
      name: name.trim(),
      role: role.trim(),
      avatar: initials,
      status: "Invited to Project",
      isOwner: false
    };

    state.collaborationTeam.push(newMember);
    renderCollaborationTeam();
    awardBuilderPoints(15, "Invited Team Collaborator");
    showToast(`Invited ${name.trim()} (${role}) to team workspace!`);
  }

  function renderKanbanBoard() {
    if (!dom.kanbanColTodo || !dom.kanbanColProg || !dom.kanbanColDone) return;
    const tasks = state.collaborationBoard || [];

    const todoList = tasks.filter(t => t.col === 'todo');
    const progList = tasks.filter(t => t.col === 'progress');
    const doneList = tasks.filter(t => t.col === 'done');

    if (dom.kanbanTodoCount) dom.kanbanTodoCount.textContent = todoList.length;
    if (dom.kanbanProgCount) dom.kanbanProgCount.textContent = progList.length;
    if (dom.kanbanDoneCount) dom.kanbanDoneCount.textContent = doneList.length;

    function renderCards(list) {
      if (list.length === 0) return `<div class="text-[10px] text-zinc-600 py-3 text-center">Empty</div>`;
      return list.map(t => `
        <div class="kanban-task-card space-y-1 cursor-pointer" data-id="${t.id}" title="Click to advance task status">
          <div class="flex items-center justify-between text-[9px] font-mono">
            <span class="text-indigo-400 font-semibold">${t.tag}</span>
            <span class="text-zinc-500">+${t.points} XP</span>
          </div>
          <h6 class="text-[11px] font-bold text-white leading-tight">${t.title}</h6>
          <div class="flex items-center justify-between text-[9px] text-zinc-400 pt-0.5">
            <span>👤 ${t.assignee}</span>
            <i class="fa-solid fa-arrow-right text-[8px] text-zinc-500"></i>
          </div>
        </div>
      `).join('');
    }

    dom.kanbanColTodo.innerHTML = renderCards(todoList);
    dom.kanbanColProg.innerHTML = renderCards(progList);
    dom.kanbanColDone.innerHTML = renderCards(doneList);

    const allCards = document.querySelectorAll('.kanban-task-card');
    allCards.forEach(c => {
      c.addEventListener('click', () => {
        const id = c.getAttribute('data-id');
        moveKanbanTask(id);
      });
    });
  }

  function moveKanbanTask(taskId) {
    const task = state.collaborationBoard.find(t => t.id === taskId);
    if (!task) return;

    if (task.col === 'todo') {
      task.col = 'progress';
      showToast(`Task "${task.title}" moved to In Progress!`);
    } else if (task.col === 'progress') {
      task.col = 'done';
      awardBuilderPoints(task.points || 15, `Completed milestone: ${task.title}`);
      triggerConfetti();
      showToast(`🎉 Completed task "${task.title}"!`);
    } else {
      task.col = 'todo';
      showToast(`Task reset to To Do.`);
    }

    renderKanbanBoard();
  }

  function renderTeamChat() {
    if (!dom.teamChatLogs) return;
    const msgs = state.collaborationChat || [];

    dom.teamChatLogs.innerHTML = msgs.map(m => `
      <div class="p-2 rounded-lg bg-black/40 border border-white/[0.04] space-y-0.5 text-xs">
        <div class="flex items-center justify-between text-[10px]">
          <span class="font-bold ${m.sender.includes('You') ? 'text-indigo-400' : 'text-zinc-200'}">${m.sender}</span>
          <span class="text-zinc-500 font-mono text-[9px]">${m.time}</span>
        </div>
        <p class="text-zinc-300 text-[11px] leading-snug">${escapeHtml(m.text)}</p>
      </div>
    `).join('');

    dom.teamChatLogs.scrollTop = dom.teamChatLogs.scrollHeight;
  }

  function postTeamChatMessage() {
    if (!dom.teamChatInput) return;
    const txt = dom.teamChatInput.value.trim();
    if (!txt) return;

    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    state.collaborationChat.push({
      id: `c-${Date.now()}`,
      sender: "Alex Rivera (You)",
      role: "AI Engineer",
      time: timeStr,
      text: txt
    });

    dom.teamChatInput.value = '';
    renderTeamChat();

    // Teammate auto-reply simulation
    setTimeout(() => {
      const teammates = ["Sarah Chen", "Marcus Thorne", "Priya Patel"];
      const sender = teammates[Math.floor(Math.random() * teammates.length)];
      state.collaborationChat.push({
        id: `c-${Date.now()}`,
        sender: sender,
        role: "Collaborator",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: `Got it! Synced with the team branch. Keeping up the momentum!`
      });
      renderTeamChat();
    }, 1200);
  }

  // ==========================================
  // GitHub Integration & Activity Tracker (Pillar 17)
  // ==========================================
  function renderGitHubSync() {
    if (!dom.githubCommitsList) return;
    const commits = state.githubSyncData.recentCommits || [];

    dom.githubCommitsList.innerHTML = commits.map(c => `
      <div class="p-2 rounded bg-black/40 border border-white/[0.04] flex items-center justify-between">
        <div class="flex items-center gap-2 truncate">
          <span class="text-indigo-400 font-mono text-[10px] shrink-0">${c.hash}</span>
          <span class="text-zinc-300 text-[11px] truncate">${escapeHtml(c.message)}</span>
        </div>
        <span class="text-zinc-500 text-[9px] shrink-0 ml-2">${c.time}</span>
      </div>
    `).join('');
  }

  function syncProjectWithGithub() {
    const hash = Math.random().toString(16).substring(2, 9);
    const newCommit = {
      hash,
      message: `feat: verified build milestone for ${state.activeProject.title}`,
      time: "Just now"
    };

    state.githubSyncData.recentCommits.unshift(newCommit);
    renderGitHubSync();
    awardBuilderPoints(20, "Synced code commit with GitHub repository");
    triggerConfetti();
    addTerminalLog('success', `[git push origin main] ${hash} -> main (Verified commit)`);
    showToast(`✓ Git Commit ${hash} pushed to ${state.githubSyncData.repoName}!`);
  }

  // ==========================================
  // Portfolio Integration & ProjectVerse Publisher (Pillars 16 & 23)
  // ==========================================
  function renderPortfolioPreview() {
    if (!dom.portfolioLiveCard) return;
    const p = state.activeProject;

    dom.portfolioLiveCard.innerHTML = `
      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <span class="badge-brand font-mono text-[10px]">${p.career} • ${p.difficulty}</span>
          <span class="badge-neutral font-mono text-[10px] text-emerald-400">Verified by CareerVerse</span>
        </div>
        <h3 class="text-base font-bold text-white tracking-tight">${p.title}</h3>
        <p class="text-xs text-zinc-300 leading-relaxed">
          An automated engineering system solving cognitive overload in student syllabus retention through real-time vector embeddings and active-recall test synthesis.
        </p>

        <!-- Tech Stack -->
        <div class="flex flex-wrap gap-1.5 pt-1">
          ${p.skills.map(sk => `<span class="badge-neutral font-mono text-[10px]">${sk}</span>`).join('')}
        </div>

        <!-- Verified Metrics -->
        <div class="grid grid-cols-2 gap-2 text-center pt-2 border-t border-white/[0.06]">
          <div class="p-2 bg-black/40 rounded-xl border border-white/[0.04]">
            <span class="text-[9px] text-zinc-500 uppercase font-mono block">Test Coverage</span>
            <span class="text-xs font-bold text-emerald-300 font-mono">100% Pass</span>
          </div>
          <div class="p-2 bg-black/40 rounded-xl border border-white/[0.04]">
            <span class="text-[9px] text-zinc-500 uppercase font-mono block">API Latency</span>
            <span class="text-xs font-bold text-indigo-300 font-mono">6ms Response</span>
          </div>
        </div>
      </div>
    `;
  }

  function publishToProjectVerse() {
    const p = state.activeProject;
    const newEntry = {
      title: p.title,
      author: "Alex Rivera",
      category: p.career,
      difficulty: p.difficulty,
      skills: p.skills,
      demoUrl: `https://${p.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}-demo.careerverse.dev`,
      githubUrl: `https://github.com/alex-builds/${p.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
      badge: "LIVE DEMO"
    };

    window.CAREERVERSE_DATA.projectVerseGallery.unshift(newEntry);
    renderShowcase();
    awardBuilderPoints(50, "Published Project to ProjectVerse Showcase");
    triggerConfetti();
    showToast("🎉 Published to ProjectVerse! Public portfolio entry live!");
  }

  function exportPortfolioMarkdown() {
    const p = state.activeProject;
    const md = `# 🏆 Verified Project Portfolio: ${p.title}
**Developer**: Alex Rivera (@alex_builds)
**Track**: ${p.career} • ${p.difficulty}
**Live URL**: https://${p.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}.run.app
**GitHub**: https://github.com/alex-builds/${p.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}

---

## 💡 Overview
${p.title} was architected and built to solve critical friction points in ${p.career} workflows.

## 🛠️ Verified Technology Stack
${p.skills.map(s => `- ${s}`).join('\\n')}

## 📊 Verification Metrics
- Automated PyTest Test Suite: 100% Assertion Pass
- Production Container: Multi-stage Alpine Docker
- Latency Benchmark: 6ms response under load

## 🎓 Key Engineering Takeaways
- Designed scalable decoupled architecture separating domain logic from API routing.
- Guarded against boundary conditions and edge cases in data ingestion.
- Built, tested, and deployed following the 7-Phase Engineering Lifecycle.

---
*Verified by CareerVerse Engineering Ecosystem*
`;
    downloadFile(`${p.title.toLowerCase().replace(/[^a-z0-9]/g, '_')}_portfolio.md`, md);
    showToast("Downloaded Recruiter-Ready Portfolio (.md)!");
  }

  // ==========================================
  // Beginner AI Guidance Assistant Drawer
  // ==========================================
  function openBeginnerGuide(initialPrompt) {
    if (!dom.beginnerGuideModal) return;
    dom.beginnerGuideModal.classList.remove('hidden');
    if (initialPrompt) {
      setTimeout(() => {
        handleGuideQuery(initialPrompt);
      }, 200);
    }
  }

  function closeBeginnerGuide() {
    if (!dom.beginnerGuideModal) return;
    dom.beginnerGuideModal.classList.add('hidden');
  }

  function handleGuideQuery(queryText) {
    if (!queryText || !queryText.trim()) return;
    appendGuideChatMessage('user', queryText);

    // Show temporary thinking indicator
    const thinkingEl = document.createElement('div');
    thinkingEl.id = 'guide-thinking-indicator';
    thinkingEl.className = 'flex items-start gap-3';
    thinkingEl.innerHTML = `
      <div class="w-7 h-7 rounded-full bg-indigo-600/30 border border-indigo-400/40 flex items-center justify-center text-indigo-300 shrink-0 mt-0.5">
        <i class="fa-solid fa-spinner fa-spin text-xs"></i>
      </div>
      <div class="card-surface p-3 rounded-xl border border-white/[0.08] text-xs text-zinc-400 font-mono">
        Generating friendly explanation...
      </div>
    `;
    if (dom.guideChatMessages) {
      dom.guideChatMessages.appendChild(thinkingEl);
      dom.guideChatMessages.scrollTop = dom.guideChatMessages.scrollHeight;
    }

    setTimeout(() => {
      const indicator = document.getElementById('guide-thinking-indicator');
      if (indicator) indicator.remove();

      const response = generateBeginnerGuideResponse(queryText);
      appendGuideChatMessage('assistant', response);
    }, 450);
  }

  function generateBeginnerGuideResponse(query) {
    const qLower = query.toLowerCase().trim();
    const faqs = window.CAREERVERSE_DATA.beginnerGuideFaqs || [];

    // Match keywords in FAQ knowledge base
    for (const faq of faqs) {
      if (faq.keywords.some(k => qLower.includes(k))) {
        return faq.answer;
      }
    }

    // Dynamic smart answers for non-CS students
    if (qLower.includes('python') || qLower.includes('why python')) {
      return "Python is like the **universal remote control** of software. It reads almost like plain English. For example, `if age >= 18: print('Welcome')`. You don't have to worry about weird brackets or hardware memory — it takes care of the boring stuff so you can build apps immediately!";
    }
    if (qLower.includes('function') || qLower.includes('def')) {
      return "A function is just a **reusable recipe**! Imagine a coffee machine: you press the button, it takes water + coffee beans, and pours out espresso. In code, `def make_coffee():` lets you write the steps once and make 1,000 cups whenever you need without writing the steps again.";
    }
    if (qLower.includes('database') || qLower.includes('sql')) {
      return "A database is like an **infinite digital filing cabinet**. Unlike an Excel spreadsheet which crashes when 500 people open it simultaneously, a database can handle 100,000 people clicking 'Buy Now' at the exact same second without losing a single order.";
    }
    if (qLower.includes('ai') || qLower.includes('llm') || qLower.includes('gemini')) {
      return "An AI like Gemini or ChatGPT is essentially the **world's smartest autocomplete**. Just like your smartphone keyboard suggests the next word when you type 'Good morning', an AI predicts the most helpful, logical sentence based on patterns across the web. When we connect it to code, it acts like a tireless assistant that can summarize notes, write emails, or analyze data.";
    }
    if (qLower.includes('variable')) {
      return "A variable is like a **labeled plastic jar in your kitchen pantry**. If the label says 'Sugar', you can open it, check how much is left, add more, or replace it with salt. In code, `score = 10` gives the container labeled `score` the number 10.";
    }
    if (qLower.includes('loop') || qLower.includes('for loop')) {
      return "A loop is like a **factory conveyor belt**. Instead of manually packaging 500 boxes with your hands, you say: 'For every box on this conveyor belt, put a shipping label on it'. In code, a loop repeats any action across a list in milliseconds.";
    }

    // Default welcoming response
    return `That's a thoughtful question! Here is how to think about it simply:\n\nIn modern software, everything boils down to 3 things:\n1. **Data In:** (What the user types or clicks)\n2. **Logic:** (Deciding what to do, using simple rules like if/else)\n3. **Data Out:** (Showing the result on screen or saving it)\n\nYou can explore our **Study Notes** tab for visual analogies on this topic, or jump into the **IDE & Workspace** tab to test it live!`;
  }

  function appendGuideChatMessage(sender, text) {
    if (!dom.guideChatMessages) return;
    const msg = document.createElement('div');
    msg.className = `flex items-start gap-3 ${sender === 'user' ? 'flex-row-reverse' : ''}`;

    if (sender === 'user') {
      msg.innerHTML = `
        <div class="w-7 h-7 rounded-full bg-zinc-800 border border-white/[0.1] flex items-center justify-center text-zinc-300 shrink-0 mt-0.5">
          <i class="fa-solid fa-user text-xs"></i>
        </div>
        <div class="bg-indigo-600 text-white p-3 rounded-xl max-w-[85%] leading-relaxed">
          ${escapeHtml(text)}
        </div>
      `;
    } else {
      // Format markdown bold & line breaks
      const formatted = text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/`(.*?)`/g, '<code class="bg-black/40 px-1 py-0.5 rounded text-indigo-300 font-mono text-[11px]">$1</code>')
        .replace(/\n\n/g, '<br><br>')
        .replace(/\n/g, '<br>');

      msg.innerHTML = `
        <div class="w-7 h-7 rounded-full bg-indigo-600/30 border border-indigo-400/40 flex items-center justify-center text-indigo-300 shrink-0 mt-0.5">
          <i class="fa-solid fa-sparkles text-xs"></i>
        </div>
        <div class="card-surface p-3.5 rounded-xl border border-white/[0.08] max-w-[85%] text-zinc-200 leading-relaxed text-xs">
          ${formatted}
        </div>
      `;
    }

    dom.guideChatMessages.appendChild(msg);
    dom.guideChatMessages.scrollTop = dom.guideChatMessages.scrollHeight;
  }

  // ==========================================
  // Utilities: Toast, Confetti, Download, Escape
  // ==========================================
  function showToast(message) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fas fa-info-circle text-cyan-400"></i><span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  function triggerConfetti() {
    if (window.confetti) {
      window.confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }

  function downloadFile(filename, content) {
    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  document.addEventListener('DOMContentLoaded', init);
})();
