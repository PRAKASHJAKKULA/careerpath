// CareerVerse Project & Build Ecosystem — Master Data Repository
window.CAREERVERSE_DATA = {
  // 1 & 2. Roadmaps across multiple disciplines
  roadmaps: {
    "ai-engineer": {
      id: "ai-engineer",
      title: "AI Engineer Roadmap",
      category: "Artificial Intelligence",
      icon: "fas fa-robot",
      description: "Master modern AI application development: from foundational Python logic to LangChain, RAG architectures, Autonomous Agents, and production Cloud MLOps.",
      levels: [
        {
          level: 1,
          name: "Level 1 — Beginner",
          badge: "🟢 Mini to Beginner",
          duration: "1–3 Weeks",
          projects: [
            {
              id: "ai-p1",
              title: "Smart Calculator & Unit Evaluator",
              desc: "Scientific math expression evaluator with history stack and unit conversion.",
              skills: ["Python", "Conditionals", "Functions", "Math"],
              time: "3 hours",
              starterCode: `# Smart Calculator — Beginner Milestone\ndef evaluate_expression(expr: str):\n    """Safely evaluates basic arithmetic expressions."""\n    allowed = set("0123456789+-*/(). ")\n    if not all(c in allowed for c in expr):\n        raise ValueError("Invalid mathematical characters detected")\n    return eval(expr)\n\nif __name__ == "__main__":\n    print("Result:", evaluate_expression("12 * (4 + 6)"))\n`
            },
            {
              id: "ai-p2",
              title: "AI Prompt-Powered To-Do Manager",
              desc: "CLI task manager with automatic priority heuristic and urgency categorization.",
              skills: ["Python", "Data Structures", "JSON", "CLI"],
              time: "4 hours",
              starterCode: `# Task Manager with Priority Heuristic\nimport json\n\ntasks = []\n\ndef add_task(title, urgency_level):\n    tasks.append({"title": title, "urgency": urgency_level, "done": False})\n    return len(tasks)\n\nprint("Task manager ready.")\n`
            },
            {
              id: "ai-p3",
              title: "Personal Expense Tracker",
              desc: "Track daily spending with category analytics, budget alerts, and CSV exports.",
              skills: ["Python", "File I/O", "Analytics", "Formatting"],
              time: "6 hours",
              starterCode: `# Expense Tracker\nexpenses = []\ndef log_expense(cat, amt):\n    expenses.append({"category": cat, "amount": amt})\n    return sum(e["amount"] for e in expenses)\n\nprint("Total:", log_expense("Food", 24.50))\n`
            },
            {
              id: "ai-p4",
              title: "Interactive AI Flashcard Quiz Engine",
              desc: "Flashcard quiz engine with timer, spaced-repetition logic, and score summaries.",
              skills: ["Python", "OOP", "Spaced Repetition", "Logic"],
              time: "5 hours",
              starterCode: `# Flashcard Quiz\ncards = [{"q": "What is attention in transformers?", "a": "A mechanism to dynamically weigh token dependencies."}]\nprint("Cards loaded:", len(cards))\n`
            },
            {
              id: "ai-p5",
              title: "Weather Intelligence & Trend Reporter",
              desc: "Meteorology fetcher with Open-Meteo REST API, trend parsing, and comfort indexing.",
              skills: ["Python", "HTTP Requests", "REST APIs", "JSON"],
              time: "6 hours",
              starterCode: `# Weather Reporter\nimport json\nprint("Weather reporter initialized. Ready to fetch atmospheric telemetry.")\n`
            }
          ]
        },
        {
          level: 2,
          name: "Level 2 — Intermediate",
          badge: "🟡 Intermediate",
          duration: "3–6 Weeks",
          projects: [
            {
              id: "ai-p6",
              title: "High-Throughput FastAPI REST Backend",
              desc: "Production CRUD API with Pydantic validation, JWT bearer tokens, and SQLite persistence.",
              skills: ["FastAPI", "Pydantic", "SQLite", "Auth"],
              time: "14 hours",
              starterCode: `from fastapi import FastAPI\napp = FastAPI(title="High-Throughput Backend")\n\n@app.get("/")\ndef read_root():\n    return {"message": "Service Online", "version": "2.0.0"}\n`
            },
            {
              id: "ai-p7",
              title: "Real-time Streaming Chat Assistant",
              desc: "WebSocket streaming chat engine with channel rooms and message buffer queues.",
              skills: ["WebSockets", "Asyncio", "FastAPI", "Streaming"],
              time: "16 hours",
              starterCode: `# WebSocket Chat Engine\nprint("Real-time streaming chat initialized.")\n`
            },
            {
              id: "ai-p8",
              title: "Content Recommendation Engine",
              desc: "Cosine similarity recommender for technical documentation and curriculum pathways.",
              skills: ["NumPy", "Vector Cosine", "Scikit-Learn", "Algorithms"],
              time: "14 hours",
              starterCode: `import math\ndef cosine(v1, v2):\n    dot = sum(a*b for a,b in zip(v1,v2))\n    m1 = math.sqrt(sum(a*a for a in v1))\n    m2 = math.sqrt(sum(b*b for b in v2))\n    return dot / (m1 * m2) if m1 and m2 else 0\nprint("Cosine sim:", cosine([1, 0, 1], [1, 1, 0]))\n`
            },
            {
              id: "ai-p9",
              title: "System Observability Telemetry Dashboard",
              desc: "System metrics parser tracking memory, API latency percentiles (p50/p95), and errors.",
              skills: ["Telemetry", "Percentiles", "Aggregations", "APIs"],
              time: "12 hours",
              starterCode: `# Telemetry Parser\nlatencies = [45, 62, 51, 120, 48, 55, 92, 210, 44]\nlatencies.sort()\np95 = latencies[int(len(latencies) * 0.95)]\nprint(f"p95 Latency: {p95}ms")\n`
            },
            {
              id: "ai-p10",
              title: "Autonomous Invoice & Report Automation Tool",
              desc: "Automate daily PDF transaction extraction, summary synthesis, and email digest dispatches.",
              skills: ["Automation", "Regex", "File Parsing", "Async"],
              time: "12 hours",
              starterCode: `# Automation Tool\nprint("Invoice automation tool active.")\n`
            }
          ]
        },
        {
          level: 3,
          name: "Level 3 — Advanced",
          badge: "🟠 Advanced",
          duration: "6–10 Weeks",
          projects: [
            {
              id: "ai-p11",
              title: "Production RAG Knowledge Assistant",
              desc: "Semantic search engine with vector database (Chroma/Pinecone), chunking, and citations.",
              skills: ["LangChain", "Vector DBs", "Embeddings", "RAG"],
              time: "30 hours",
              starterCode: `# RAG Architecture Blueprint\nprint("RAG Assistant: Vector Store Connected.")\n`
            },
            {
              id: "ai-p12",
              title: "Voice-Powered Multimodal Assistant",
              desc: "Real-time speech-to-text, reasoning loop, and fluid speech synthesis integration.",
              skills: ["Whisper", "Gemini Live", "WebAudio", "Streaming"],
              time: "25 hours",
              starterCode: `# Voice Multimodal loop\nprint("Voice pipeline initialized.")\n`
            },
            {
              id: "ai-p13",
              title: "Real-Time Computer Vision Pipeline",
              desc: "YOLOv8 object detection, facial feature extraction, and event trigger alerts.",
              skills: ["OpenCV", "YOLOv8", "Inference", "NumPy"],
              time: "28 hours",
              starterCode: `# Computer Vision System\nprint("CV model ready.")\n`
            },
            {
              id: "ai-p14",
              title: "Autonomous Web Research Agent",
              desc: "Goal-driven agent with tool-calling, autonomous loop, validation, and executive briefing.",
              skills: ["Agentic AI", "Function Calling", "Tool Use", "Evals"],
              time: "35 hours",
              starterCode: `# Autonomous Research Agent\nprint("Agent initialized with 4 tools.")\n`
            },
            {
              id: "ai-p15",
              title: "Multi-Agent Swarm Orchestration",
              desc: "Hierarchical agent network (Coder, Tester, Architect, Reviewer) collaborating on tasks.",
              skills: ["Multi-Agent", "State Machines", "AGY SDK", "Evals"],
              time: "40 hours",
              starterCode: `# Swarm Orchestrator\nprint("Swarm network online.")\n`
            }
          ]
        },
        {
          level: 4,
          name: "Level 4 — Real World",
          badge: "🔴 Real-World & Industry",
          duration: "8–16 Weeks",
          projects: [
            {
              id: "ai-p16",
              title: "Production AI SaaS Platform",
              desc: "Multi-tenant AI SaaS with Stripe billing, token rate limiting, and Docker Cloud Run CI/CD.",
              skills: ["Next.js", "Docker", "Postgres", "Stripe", "CI/CD"],
              time: "60 hours",
              starterCode: `# Production AI SaaS Engine\nprint("SaaS Multi-tenant platform configured.")\n`
            },
            {
              id: "ai-p17",
              title: "Autonomous Scientific Literature Agent",
              desc: "Auto-ingests arXiv & PubMed research, runs synthesis, and formats hypothesis dossiers.",
              skills: ["Research APIs", "Vector Indexing", "Cloud Run", "Evals"],
              time: "50 hours",
              starterCode: `# Scientific Research Agent\nprint("Ingesting scientific repositories.")\n`
            },
            {
              id: "ai-p18",
              title: "Adaptive Intelligent Education Engine",
              desc: "Personalized learning graph dynamically adjusting question difficulty to student error patterns.",
              skills: ["Knowledge Graphs", "Fine-Tuning", "State Machines"],
              time: "55 hours",
              starterCode: `# Adaptive Engine\nprint("Student Mastery Graph instantiated.")\n`
            },
            {
              id: "ai-p19",
              title: "Autonomous Business Automation Suite",
              desc: "Enterprise lead triage, meeting negotiator, contract drafting, and fulfillment pipeline.",
              skills: ["Multi-Agent Swarm", "OAuth2", "Security Auditing"],
              time: "70 hours",
              starterCode: `# Business Automation Suite\nprint("Enterprise connectors ready.")\n`
            }
          ]
        }
      ]
    },
    "fullstack-developer": {
      id: "fullstack-developer",
      title: "Full-Stack Web Architect",
      category: "Software Engineering",
      icon: "fas fa-layer-group",
      description: "Modern web architecture, scalable backends, real-time client state, and cloud deployments.",
      levels: [
        {
          level: 1,
          name: "Level 1 — Beginner",
          badge: "🟢 Mini to Beginner",
          duration: "1–2 Weeks",
          projects: [
            { id: "fs-1", title: "Modern Portfolio with Theme Engine", desc: "Responsive showcase with CSS Grid and localStorage persistence.", skills: ["HTML5", "CSS3", "JavaScript"], time: "4 hours" },
            { id: "fs-2", title: "Interactive Drag-and-Drop Kanban", desc: "Task board with drag-and-drop HTML5 API and state serialization.", skills: ["DOM", "Drag & Drop", "JSON"], time: "6 hours" }
          ]
        },
        {
          level: 2,
          name: "Level 2 — Intermediate",
          badge: "🟡 Intermediate",
          duration: "3–5 Weeks",
          projects: [
            { id: "fs-3", title: "Full-Stack E-Commerce Storefront", desc: "Cart state, product filters, checkout flow, and serverless payment webhooks.", skills: ["React", "Node.js", "Express", "Stripe"], time: "18 hours" },
            { id: "fs-4", title: "Collaborative Real-Time Document Editor", desc: "Multi-cursor live text synchronization with Operational Transformation.", skills: ["WebSockets", "Node.js", "Quill.js"], time: "22 hours" }
          ]
        },
        {
          level: 3,
          name: "Level 3 — Advanced",
          badge: "🟠 Advanced",
          duration: "6–8 Weeks",
          projects: [
            { id: "fs-5", title: "Cloud Microservices API Gateway", desc: "Reverse proxy with rate limiting, circuit breakers, and JWT token rotation.", skills: ["Docker", "Redis", "Go/Node", "Nginx"], time: "30 hours" }
          ]
        },
        {
          level: 4,
          name: "Level 4 — Real World",
          badge: "🔴 Real-World & Industry",
          duration: "8–12 Weeks",
          projects: [
            { id: "fs-6", title: "B2B SaaS Multi-Tenant Workspace", desc: "Postgres RLS tenant isolation, RBAC permissions, audit logging, and billing.", skills: ["Next.js", "Postgres RLS", "AWS/GCP", "Docker"], time: "65 hours" }
          ]
        }
      ]
    },
    "cybersecurity-analyst": {
      id: "cybersecurity-analyst",
      title: "Cybersecurity & Defense",
      category: "Security Engineering",
      icon: "fas fa-shield-alt",
      description: "Threat detection, vulnerability auditing, zero-trust auth, and secure architecture.",
      levels: [
        {
          level: 1,
          name: "Level 1 — Beginner",
          badge: "🟢 Mini to Beginner",
          duration: "1–2 Weeks",
          projects: [
            { id: "cy-1", title: "Password Strength & Entropy Analyzer", desc: "Calculates brute-force resistance, dictionary attacks, and NIST compliance.", skills: ["Python", "Hashing", "RegEx"], time: "4 hours" }
          ]
        },
        {
          level: 2,
          name: "Level 2 — Intermediate",
          badge: "🟡 Intermediate",
          duration: "3–4 Weeks",
          projects: [
            { id: "cy-2", title: "Socket Network Scanner & Banner Grabber", desc: "TCP/UDP scanner with banner detection and service vulnerability mapping.", skills: ["Python", "Sockets", "Networking"], time: "14 hours" }
          ]
        },
        {
          level: 3,
          name: "Level 3 — Advanced",
          badge: "🟠 Advanced",
          duration: "5–8 Weeks",
          projects: [
            { id: "cy-3", title: "SIEM Log Parser & Anomaly Detection", desc: "Ingests Apache/Syslog streams and flags suspicious auth bursts in real-time.", skills: ["ELK Stack", "Python", "Anomaly Detection"], time: "26 hours" }
          ]
        },
        {
          level: 4,
          name: "Level 4 — Real World",
          badge: "🔴 Real-World & Industry",
          duration: "8–12 Weeks",
          projects: [
            { id: "cy-4", title: "Zero-Trust Enterprise IAM & Audit Shield", desc: "WebAuthn MFA, OAuth 2.1 PKCE, step-up authentication, and tamper-proof logs.", skills: ["WebAuthn", "Crypto Signing", "PostgreSQL", "Audit"], time: "50 hours" }
          ]
        }
      ]
    },
    "non-cs-beginner": {
      id: "non-cs-beginner",
      title: "From Non-Tech to Software Builder",
      category: "Zero Background & Career Switchers",
      icon: "fas fa-seedling",
      description: "Designed specifically for students from commerce, arts, business, biology, humanities, and non-engineering backgrounds. Everyday analogies, zero jargon, and immediate building.",
      levels: [
        {
          level: 1,
          name: "Level 1 — Foundations: Making Computers Obey You",
          badge: "🟢 Absolute Beginner",
          duration: "1–2 Weeks",
          projects: [
            {
              id: "nb-1",
              title: "Daily Habit & Streak Tracker",
              desc: "Build a friendly tracker to record daily study habits, calculate streaks, and generate motivational cheers.",
              skills: ["Variables", "Lists", "Conditionals", "Input/Output"],
              time: "2 hours",
              starterCode: `# 🌟 Daily Habit & Streak Tracker (Zero-Coding-Background Friendly)\n# In programming, a variable is like a labeled container holding information.\n\nhabits = ["Read 10 mins", "Drink 2L Water", "Walk 5000 Steps"]\ncompleted_today = []\n\ndef log_habit(habit_name):\n    """Record a completed habit."""\n    completed_today.append(habit_name)\n    percent = (len(completed_today) / len(habits)) * 100\n    return f"Great job! Progress today: {percent:.0f}% ({len(completed_today)}/{len(habits)})"\n\nprint("--- MY DAILY HABIT TRACKER ---")\nprint(log_habit("Read 10 mins"))\nprint(log_habit("Drink 2L Water"))\n`
            },
            {
              id: "nb-2",
              title: "Friendly Restaurant Bill & Tip Splitter",
              desc: "Solve a real weekend dilemma: split bills fairly among friends with custom tips and rounding.",
              skills: ["Math Logic", "Functions", "Formatting"],
              time: "3 hours",
              starterCode: `# 🧾 Friendly Bill & Tip Splitter\ndef split_bill(total_amount, num_friends, tip_percent=15):\n    tip_amount = total_amount * (tip_percent / 100)\n    grand_total = total_amount + tip_amount\n    per_person = grand_total / num_friends\n    return round(per_person, 2)\n\nprint("Each person pays: $", split_bill(120, 4, 18))\n`
            },
            {
              id: "nb-3",
              title: "Student Grade & GPA Evaluator",
              desc: "Input your course marks, compute semester GPA, and highlight which subject needs review.",
              skills: ["Functions", "Conditionals", "Dictionaries"],
              time: "3 hours",
              starterCode: `# 🎓 Student Grade & GPA Evaluator\nscores = {"Economics": 88, "Literature": 92, "History": 79}\ndef get_average(scores_dict):\n    return sum(scores_dict.values()) / len(scores_dict)\nprint("Semester GPA Average:", round(get_average(scores), 1))\n`
            }
          ]
        },
        {
          level: 2,
          name: "Level 2 — Practical Everyday Automations",
          badge: "🟡 Beginner Automator",
          duration: "2–4 Weeks",
          projects: [
            {
              id: "nb-4",
              title: "Personal Monthly Budget Categorizer",
              desc: "Automatically categorize transactions into Needs, Wants, and Savings using 50/30/20 rule.",
              skills: ["Dictionaries", "Data Grouping", "Analytics"],
              time: "6 hours",
              starterCode: `# 💰 50/30/20 Budget Analyzer\nsalary = 3200\nneeds = salary * 0.50\nwants = salary * 0.30\nsavings = salary * 0.20\nprint(f"Target Budget -> Needs: \${needs}, Wants: \${wants}, Savings: \${savings}")\n`
            },
            {
              id: "nb-5",
              title: "Event RSVP & Name Tag Generator",
              desc: "Batch generate customized attendance lists and digital badges for student clubs.",
              skills: ["String Templates", "Loops", "Batch Processing"],
              time: "6 hours",
              starterCode: `# 🎫 RSVP Badge Formatter\nattendees = ["Alex Rivera", "Sophia Martinez", "David Kim"]\nfor name in attendees:\n    print(f"========================\\n  WELCOME TO CAREERVERSE\\n  Guest: {name}\\n========================\\n")\n`
            }
          ]
        },
        {
          level: 3,
          name: "Level 3 — Interactive Web Tools",
          badge: "🟠 Web Builder",
          duration: "4–6 Weeks",
          projects: [
            {
              id: "nb-6",
              title: "Local Study Spots & Cafe Directory",
              desc: "Searchable directory of quiet study spots with Wi-Fi speeds, coffee ratings, and seat availability.",
              skills: ["HTML/CSS", "JavaScript", "Local Storage", "Filters"],
              time: "14 hours",
              starterCode: `# Study Spots Directory Schema\nspots = [\n    {"name": "Quiet Bean Cafe", "wifi": "Fast (120 Mbps)", "outlets": "Plenty", "noise": "Low"},\n    {"name": "Central Library Hall", "wifi": "Standard", "outlets": "Every desk", "noise": "Silent"}\n]\nfor s in spots:\n    print(f"{s['name']} -> Wi-Fi: {s['wifi']}, Noise: {s['noise']}")\n`
            }
          ]
        },
        {
          level: 4,
          name: "Level 4 — Real-World Problem Solvers",
          badge: "🔴 Product Builder",
          duration: "6–10 Weeks",
          projects: [
            {
              id: "nb-7",
              title: "Community Clinic Appointment Queue Assistant",
              desc: "Help elderly or busy patients check waiting times and book consultation slots without standing in line.",
              skills: ["FastAPI", "SQLite", "SMS/Webhooks", "Human UX"],
              time: "30 hours",
              starterCode: `# Clinic Queue Assistant\nqueue = ["Patient #101 (Consultation)", "Patient #102 (Blood Test)"]\ndef check_wait_time(pos):\n    return f"Estimated wait: {pos * 15} minutes"\nprint("First in line wait:", check_wait_time(1))\n`
            }
          ]
        }
      ]
    }
  },

  // 4. "BUILD THIS" Micro-Projects Mappings
  buildThisTopics: [
    {
      topic: "Python Functions & Logic",
      quote: "You learned functions. Let's use them.",
      miniProject: "Student Grade & GPA Calculator",
      estimatedTime: "45 minutes",
      skillsGained: ["Functions", "Return Values", "Unit Logic", "Math"],
      brief: "Write reusable functions to compute weighted averages, map scores to GPA letter grades, and format summary transcripts.",
      starterCode: `# 🎓 Student Grade & GPA Calculator\n\ndef calculate_weighted_average(grades, weights):\n    """Calculates weighted average from score and weight arrays."""\n    if not grades or not weights or len(grades) != len(weights):\n        raise ValueError("Grades and weights must have matching non-zero lengths")\n    return sum(g * w for g, w in zip(grades, weights)) / sum(weights)\n\ndef score_to_letter(score):\n    """Maps numeric score to letter grade."""\n    if score >= 90: return "A"\n    elif score >= 80: return "B"\n    elif score >= 70: return "C"\n    elif score >= 60: return "D"\n    else: return "F"\n\nif __name__ == "__main__":\n    scores = [88, 94, 76]\n    weights = [0.3, 0.4, 0.3]\n    avg = calculate_weighted_average(scores, weights)\n    print(f"Weighted Average: {avg:.2f}")\n    print(f"Final Grade: {score_to_letter(avg)}")\n`,
      testSuite: `def test_grade_calculator():\n    avg = calculate_weighted_average([90, 80], [0.5, 0.5])\n    assert avg == 85.0\n    assert score_to_letter(85) == "B"\n    assert score_to_letter(92) == "A"\n    print("ALL TESTS PASSED ✅")\ntest_grade_calculator()\n`
    },
    {
      topic: "REST APIs & JSON Serialization",
      quote: "You learned GET, POST, PUT, DELETE. Let's wire an API endpoint.",
      miniProject: "Book Review Micro-API",
      estimatedTime: "1 hour",
      skillsGained: ["REST API", "JSON Payloads", "Status Codes", "Validation"],
      brief: "Build a lightweight REST endpoint to submit book reviews, filter by rating, and enforce schema validation.",
      starterCode: `# 📚 Book Review Micro-API\nimport json\n\nreviews_db = [\n    {"id": 1, "title": "Clean Code", "rating": 5, "comment": "Essential software design principles."},\n    {"id": 2, "title": "Designing Data-Intensive Apps", "rating": 5, "comment": "Masterpiece on distributed storage."}\n]\n\ndef add_review(title, rating, comment):\n    if rating < 1 or rating > 5:\n        raise ValueError("Rating must be between 1 and 5")\n    new_id = len(reviews_db) + 1\n    entry = {"id": new_id, "title": title, "rating": rating, "comment": comment}\n    reviews_db.append(entry)\n    return entry\n\ndef get_reviews_by_min_rating(min_r):\n    return [r for r in reviews_db if r["rating"] >= min_r]\n\nprint("Current reviews:", len(reviews_db))\nprint("Adding test review...")\nadd_review("The Pragmatic Programmer", 5, "Career changing insights.")\nprint("Filtered reviews (5 stars):", len(get_reviews_by_min_rating(5)))\n`,
      testSuite: `def test_reviews():\n    assert len(reviews_db) >= 2\n    r = add_review("Unit Test Book", 4, "Good read")\n    assert r["rating"] == 4\n    print("ALL TESTS PASSED ✅")\ntest_reviews()\n`
    },
    {
      topic: "Embeddings & Vector Cosine Similarity",
      quote: "You learned vector embeddings. Let's build semantic search.",
      miniProject: "Semantic Documentation Search Engine",
      estimatedTime: "1.5 hours",
      skillsGained: ["Vector Cosine", "Embeddings", "Semantic Indexing"],
      brief: "Convert documents into vectors and match query embeddings using cosine distance to find concepts even without exact keywords.",
      starterCode: `# 🔍 Semantic Search Engine\nimport math\n\ndef cosine_similarity(v1, v2):\n    dot = sum(a * b for a, b in zip(v1, v2))\n    norm1 = math.sqrt(sum(a * a for a in v1))\n    norm2 = math.sqrt(sum(b * b for b in v2))\n    if norm1 == 0 or norm2 == 0: return 0.0\n    return dot / (norm1 * norm2)\n\n# Document corpus with 3D mock embeddings\ncorpus = {\n    "Python Functions & Lambdas": [0.88, 0.21, 0.42],\n    "CSS Flexbox & Responsive Layout": [0.05, 0.95, 0.28],\n    "Database Indexes & SQL Queries": [0.35, 0.40, 0.84]\n}\n\ndef search(query_vector):\n    scores = {}\n    for title, vec in corpus.items():\n        scores[title] = cosine_similarity(query_vector, vec)\n    return sorted(scores.items(), key=lambda x: x[1], reverse=True)\n\n# Query for programming functions\nquery = [0.85, 0.18, 0.49]\nresults = search(query)\nprint("Top semantic match:", results[0])\n`,
      testSuite: `def test_search():\n    v1 = [1, 0, 0]\n    v2 = [1, 0, 0]\n    assert round(cosine_similarity(v1, v2), 2) == 1.00\n    print("ALL TESTS PASSED ✅")\ntest_search()\n`
    },
    {
      topic: "Async Programming & Rate Limiting",
      quote: "You learned async/await. Let's build a token-bucket rate limiter.",
      miniProject: "API Token Bucket Rate Limiter",
      estimatedTime: "1 hour",
      skillsGained: ["Asyncio", "Rate Limiting", "Time Algorithms"],
      brief: "Implement an algorithmic token bucket to prevent DDoS bursts and enforce API quotas per client IP.",
      starterCode: `# ⏱️ Token Bucket Rate Limiter\nimport time\n\nclass TokenBucket:\n    def __init__(self, capacity: int, refill_rate: float):\n        self.capacity = capacity\n        self.refill_rate = refill_rate\n        self.tokens = capacity\n        self.last_refill = time.time()\n\n    def allow_request(self, tokens_needed=1) -> bool:\n        now = time.time()\n        elapsed = now - self.last_refill\n        self.tokens = min(self.capacity, self.tokens + elapsed * self.refill_rate)\n        self.last_refill = now\n        if self.tokens >= tokens_needed:\n            self.tokens -= tokens_needed\n            return True\n        return False\n\nbucket = TokenBucket(capacity=5, refill_rate=1.0)\nprint("Request 1:", bucket.allow_request())\nprint("Request 2:", bucket.allow_request())\n`,
      testSuite: `def test_rate_limiter():\n    tb = TokenBucket(3, 1.0)\n    assert tb.allow_request()\n    assert tb.allow_request()\n    assert tb.allow_request()\n    assert not tb.allow_request()\n    print("ALL TESTS PASSED ✅")\ntest_rate_limiter()\n`
    },
    {
      topic: "Dictionaries & JSON Data Structures",
      quote: "You learned key-value pairs. Let's build a real shopping cart engine.",
      miniProject: "E-Commerce Cart Checkout Calculator",
      estimatedTime: "45 minutes",
      skillsGained: ["Dictionaries", "Key-Value Stores", "Discount Logic", "Tax Calculation"],
      brief: "Write a modular shopping cart calculator that applies coupons, calculates state tax, and outputs itemized receipt dictionaries.",
      starterCode: `# 🛒 Shopping Cart & Tax Calculator\ndef compute_cart_total(cart_items, coupon_code=None, tax_rate=0.08):\n    subtotal = sum(item["price"] * item.get("qty", 1) for item in cart_items)\n    discount = 0.0\n    if coupon_code == "SAVE20":\n        discount = subtotal * 0.20\n    taxable = max(0.0, subtotal - discount)\n    tax = taxable * tax_rate\n    return {\n        "subtotal": round(subtotal, 2),\n        "discount": round(discount, 2),\n        "tax": round(tax, 2),\n        "grand_total": round(taxable + tax, 2)\n    }\n\nitems = [\n    {"name": "Mechanical Keyboard", "price": 95.0, "qty": 1},\n    {"name": "USB-C Cable", "price": 12.5, "qty": 2}\n]\nprint("Receipt:", compute_cart_total(items, "SAVE20"))\n`,
      testSuite: `def test_cart():\n    items = [{"name": "Book", "price": 50.0, "qty": 2}]\n    res = compute_cart_total(items, None, 0.10)\n    assert res["subtotal"] == 100.0\n    assert res["grand_total"] == 110.0\n    print("ALL TESTS PASSED ✅")\ntest_cart()\n`
    },
    {
      topic: "SQL & Persistence Logic",
      quote: "You learned CREATE and SELECT. Let's build a personal library registry.",
      miniProject: "Personal Media & Book Catalog Registry",
      estimatedTime: "1 hour",
      skillsGained: ["SQLite", "CRUD Operations", "Table Schemas", "Queries"],
      brief: "Initialize a local SQLite database, insert media items, and query them with ratings and read status.",
      starterCode: `# 📖 SQLite Media Catalog\nimport sqlite3\n\nconn = sqlite3.connect(":memory:")\ncursor = conn.cursor()\n\ncursor.execute("""\nCREATE TABLE books (\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\n    title TEXT NOT NULL,\n    author TEXT NOT NULL,\n    rating INTEGER,\n    read_status BOOLEAN\n)\n""")\n\ndef add_book(title, author, rating, read_status=True):\n    cursor.execute("INSERT INTO books (title, author, rating, read_status) VALUES (?, ?, ?, ?)", (title, author, rating, read_status))\n    conn.commit()\n    return cursor.lastrowid\n\nadd_book("Atomic Habits", "James Clear", 5, True)\nadd_book("Deep Work", "Cal Newport", 5, True)\n\ncursor.execute("SELECT title, author, rating FROM books WHERE rating >= 5")\nprint("Top 5-Star Books:", cursor.fetchall())\n`,
      testSuite: `def test_db():\n    cursor.execute("SELECT COUNT(*) FROM books")\n    assert cursor.fetchone()[0] == 2\n    print("ALL TESTS PASSED ✅")\ntest_db()\n`
    }
  ],

  // 12. Project Templates across 8 Domains
  templates: [
    { id: "tpl-web", domain: "Web", name: "Modern SaaS Dashboard", stack: "Next.js, Tailwind, Postgres, Prisma", time: "1-2 weeks", tags: ["SaaS", "Dashboard", "Auth"] },
    { id: "tpl-mobile", domain: "Mobile", name: "Productivity Habits App", stack: "Flutter, SQLite, Notifications", time: "1-2 weeks", tags: ["Mobile", "Health", "Habits"] },
    { id: "tpl-ai", domain: "AI", name: "Autonomous RAG Knowledge Bot", stack: "Python, FastAPI, Pinecone, Gemini API", time: "2-3 weeks", tags: ["RAG", "Agent", "Embeddings"] },
    { id: "tpl-cyber", domain: "Cybersecurity", name: "Zero-Trust Auth & Audit Lab", stack: "Node.js, WebAuthn, Redis, Docker", time: "1-2 weeks", tags: ["Security", "OAuth", "Zero-Trust"] },
    { id: "tpl-data", domain: "Data", name: "Real-Time Telemetry Pipeline", stack: "Python, Apache Kafka/PubSub, BigQuery, DuckDB", time: "2 weeks", tags: ["Pipelines", "Analytics", "Streaming"] },
    { id: "tpl-robotics", domain: "Robotics", name: "Visual Obstacle Avoidance Rover", stack: "Python, ROS2, OpenCV, YOLOv8", time: "3-4 weeks", tags: ["Robotics", "Vision", "Autonomy"] },
    { id: "tpl-iot", domain: "IoT", name: "Smart Campus Environmental Mesh", stack: "ESP32, MQTT, InfluxDB, Grafana", time: "2 weeks", tags: ["Hardware", "MQTT", "Telemetry"] },
    { id: "tpl-games", domain: "Games", name: "2D Physics Platformer Prototype", stack: "Phaser.js / Godot, WebGL, WebAudio", time: "1-2 weeks", tags: ["Gaming", "Physics", "Multiplayer"] }
  ],

  // 13. Real Problems
  realProblems: [
    {
      id: "prob-1",
      problem: "Students struggle to track cross-course assignments & deadlines.",
      solution: "Smart Assignment Manager with syllabus PDF parser & calendar sync.",
      impact: "Saves 4 hours/week, eliminates missed homework submissions.",
      prerequisites: ["Python", "FastAPI", "PDF Parsing", "Google Calendar API"],
      difficulty: "Intermediate",
      suggestedName: "CourseSync AI"
    },
    {
      id: "prob-2",
      problem: "Small local businesses spend hours replying to repetitive customer queries on WhatsApp & Instagram.",
      solution: "AI Customer Support Agent with live inventory sync & automated resolution.",
      impact: "Cuts response time from 3 hours to 10 seconds, recovers lost sales.",
      prerequisites: ["FastAPI", "Gemini API", "Vector Search", "Webhooks"],
      difficulty: "Advanced",
      suggestedName: "StorePilot AI"
    },
    {
      id: "prob-3",
      problem: "Independent community food pantries face 35% food spoilage due to lack of real-time inventory tracking.",
      solution: "FoodBridge: Barcode & expiry date predictive redistribution system.",
      impact: "Reduces food waste by 60% and alerts nearby soup kitchens automatically.",
      prerequisites: ["React", "PostgreSQL", "QR Code Reader", "Automated Notifications"],
      difficulty: "Intermediate",
      suggestedName: "FoodBridge Open Inventory"
    },
    {
      id: "prob-4",
      problem: "Community healthcare clinics suffer 28% appointment no-shows and chaotic waiting rooms with outdated phone lines.",
      solution: "MediQueue: Two-way SMS appointment confirmation & dynamic live queue wait-time tracker.",
      impact: "Reduces clinic no-shows to under 6% and saves 45 minutes of patient waiting room congestion.",
      prerequisites: ["FastAPI", "Twilio SMS", "WebSockets", "SQLite"],
      difficulty: "Intermediate",
      suggestedName: "MediQueue Live Patient Flow"
    },
    {
      id: "prob-5",
      problem: "Freelance creators & agencies spend 8+ hours monthly chasing overdue client invoices and reconciling milestone deliverables.",
      solution: "FreelanceGuard: Milestone-locked escrow invoicing with automated payment reminders and deliverable audit logs.",
      impact: "Eliminates ghosting on invoices and cuts accounts receivable turnaround from 42 days to 7 days.",
      prerequisites: ["Python", "Stripe API", "PostgreSQL", "Next.js"],
      difficulty: "Advanced",
      suggestedName: "FreelanceGuard Escrow Engine"
    }
  ],

  // 19. Industry Challenge Mode (Interactive Incident Data)
  industryChallenges: [
    {
      id: "ind-1",
      company: "Apex Commerce (Tier-1 E-commerce)",
      title: "P0 Incident: 20% Spike in Checkout Failures",
      scenario: "During flash sales, payment webhooks are timing out, leading to double charges and dropped orders.",
      metricsData: {
        labels: ["18:00", "18:05", "18:10", "18:15", "18:20", "18:25", "18:30"],
        errorRates: [0.2, 0.4, 1.2, 8.5, 19.8, 22.4, 21.9],
        latencies: [120, 130, 240, 850, 2100, 3400, 3100]
      },
      rawLogs: [
        "[18:15:02] [WARN] [worker-04] DB Connection Pool utilization exceeded 92%",
        "[18:18:11] [ERROR] [checkout-srv] Payment webhook timeout after 5000ms: order_id=98124",
        "[18:20:44] [FATAL] [db-primary] Deadlock detected on table 'inventory_locks' for sku_id='SKU-882'",
        "[18:22:15] [ERROR] [checkout-srv] HTTP 504 Gateway Timeout on POST /api/v1/checkout/charge",
        "[18:25:30] [ERROR] [checkout-srv] Duplicate webhook invocation: id_trans=txn_9921_dup"
      ],
      tasks: [
        "Analyze nginx and application logs to identify bottlenecks",
        "Diagnose race condition in database inventory locking",
        "Implement idempotent webhook handler with Redis distributed locks",
        "Deploy automated fallback circuit-breaker pattern",
        "Draft incident post-mortem and mitigation SLA document"
      ],
      skillsTested: ["Distributed Systems", "Redis Locking", "Idempotency", "Debugging"],
      timeLimit: "3 hours sprint",
      difficulty: "Staff / Senior Simulation"
    },
    {
      id: "ind-2",
      company: "HealthNova Cloud",
      title: "HIPAA Security Audit: Unencrypted Token Leakage in Edge Logs",
      scenario: "Security team flagged authorization Bearer tokens appearing in CDN access logs.",
      metricsData: {
        labels: ["10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30"],
        errorRates: [0, 0, 4.2, 12.8, 15.1, 14.8, 15.0],
        latencies: [90, 88, 92, 95, 94, 98, 95]
      },
      rawLogs: [
        "[10:30:11] [WARN] [edge-proxy] Request header 'Authorization' mirrored to access_log.ndjson",
        "[10:45:00] [ALERT] [siem-scanner] High Entropy String pattern detected in public CDN stream",
        "[11:00:22] [CRITICAL] [audit-bot] HIPAA compliance violation: 480 JWT tokens persisted in plain text"
      ],
      tasks: [
        "Audit reverse proxy headers and sanitization filter rules",
        "Implement cryptographic HMAC masking for bearer tokens at ingress",
        "Write regression unit tests preventing header leaking",
        "Produce compliance audit evidence report"
      ],
      skillsTested: ["Security Auditing", "Proxy Rules", "Cryptography", "Compliance"],
      timeLimit: "2 hours sprint",
      difficulty: "Security Specialist"
    },
    {
      id: "ind-3",
      company: "Synthetix AI Systems",
      title: "FinOps Emergency: 450% Runaway Vector DB Costs from Inefficient Query Chunks",
      scenario: "Production RAG microservice bills spiked by $8,400 in 48 hours due to unbatched redundant embeddings and quadratic re-indexing loops.",
      metricsData: {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
        errorRates: [0, 0.1, 0.2, 0.4, 1.8, 2.5, 3.1],
        latencies: [110, 115, 140, 480, 1250, 2400, 2900]
      },
      rawLogs: [
        "[Day 4 02:11:00] [BILLING] Vector DB index operations exceeded 10,000,000 read units/hour",
        "[Day 5 09:44:21] [WARN] [rag-worker-12] Repeated cosine query on identical hash 38,400 times without caching",
        "[Day 6 14:02:18] [ALERT] Cost threshold $5,000/day breached: active spending is $11,200/day"
      ],
      tasks: [
        "Audit embedding ingestion pipeline and deduplicate chunk fingerprints",
        "Implement Redis vector query cache with 24h TTL",
        "Batch upsert calls from 1-by-1 to 250-chunk micro-batches",
        "Introduce budget alerts and circuit-breaker quotas"
      ],
      skillsTested: ["FinOps", "Vector Databases", "Caching", "Architecture Optimization"],
      timeLimit: "2 hours sprint",
      difficulty: "Lead AI Architect"
    }
  ],

  // 20. Hackathon Mode
  hackathon: {
    title: "⚡ 48-Hour Global CareerVerse Sprint",
    theme: "Agents for Good — Building Real World Impact",
    timeline: [
      { day: "Hour 0–12", phase: "Research & Design", deliverable: "Problem validation, Wireframes, Architecture Blueprint" },
      { day: "Hour 12–24", phase: "MVP Build Sprint", deliverable: "Core API, database schema, functional prototype" },
      { day: "Hour 24–36", phase: "AI & Polish", deliverable: "Intelligence layer, edge-case handling, error boundaries" },
      { day: "Hour 36–48", phase: "Deploy & Demo", deliverable: "Live cloud URL, 2-minute Loom/YouTube demo, GitHub README" }
    ],
    prizes: ["Featured in ProjectVerse Top 10", "Direct Interview Fast-track with Partner Startups", "Official Builder NFT & Badge"]
  },

  // 24 & 25. Project-to-Job Matching Engine
  jobRoles: [
    {
      role: "AI Application Engineer",
      salary: "$125,000 - $165,000",
      requiredSkills: ["Python", "FastAPI", "LLMs", "RAG", "Vector databases", "Docker"],
      matchThreshold: 80,
      description: "Builds production AI wrappers, agents, and enterprise workflow integrations."
    },
    {
      role: "Backend Systems Engineer",
      salary: "$115,000 - $155,000",
      requiredSkills: ["FastAPI", "SQL", "PostgreSQL", "REST APIs", "Docker", "Authentication"],
      matchThreshold: 75,
      description: "Designs robust databases, high-concurrency APIs, and microservice infrastructure."
    },
    {
      role: "Full-Stack Software Engineer",
      salary: "$110,000 - $150,000",
      requiredSkills: ["React", "HTML5", "CSS3", "JavaScript", "REST APIs", "SQL"],
      matchThreshold: 70,
      description: "Develops customer-facing interactive applications and robust client-server pipelines."
    },
    {
      role: "Machine Learning / MLOps Engineer",
      salary: "$135,000 - $180,000",
      requiredSkills: ["Python", "NumPy", "Pandas", "Scikit-Learn", "Docker", "CI/CD"],
      matchThreshold: 85,
      description: "Trains, fine-tunes, benchmarks, and maintains resilient model inference servers."
    },
    {
      role: "Junior Software Developer (Apprenticeship)",
      salary: "$80,000 - $105,000",
      requiredSkills: ["Python", "Git", "REST APIs", "SQL"],
      matchThreshold: 65,
      description: "Ideal entry pathway for non-CS career changers and graduates building real-world features."
    },
    {
      role: "Autonomous AI Agent Developer",
      salary: "$130,000 - $175,000",
      requiredSkills: ["Python", "LLMs", "RAG", "Vector databases", "Agentic AI"],
      matchThreshold: 80,
      description: "Specializes in multi-agent orchestration, tool-calling loops, and autonomous workflows."
    }
  ],

  // 26. User Builder Profile (Pre-seeded with active demo state)
  builderProfile: {
    name: "Alex Rivera",
    handle: "@alex_builds",
    builderLevel: 18,
    builderScore: 1840,
    totalProjects: 12,
    miniProjects: 7,
    intermediateProjects: 3,
    advancedProjects: 2,
    deployedProjects: 8,
    openSourceProjects: 3,
    realWorldProjects: 2,
    startupProjects: 1,
    verifiedSkills: [
      { name: "Python", score: 94 },
      { name: "FastAPI", score: 88 },
      { name: "SQL", score: 85 },
      { name: "LLMs & Prompting", score: 92 },
      { name: "RAG & Vector DBs", score: 86 },
      { name: "Docker & Cloud Run", score: 79 },
      { name: "React / Modern UI", score: 76 }
    ]
  },

  // 23. ProjectVerse Showcase Gallery
  projectVerseGallery: [
    {
      id: "pv-1",
      title: "MedRAG: Clinical Protocol Assistant",
      author: "Elena Rostova",
      badge: "Real-World Project",
      likes: 342,
      views: 2190,
      demoUrl: "https://medrag.careerverse.dev",
      githubUrl: "https://github.com/elena/medrag",
      summary: "Evaluates rare drug-drug interactions with PubMed citations and certainty thresholds.",
      tech: ["Python", "LangChain", "Qdrant", "FastAPI", "React"],
      score: 96
    },
    {
      id: "pv-2",
      title: "AgentDesk: Autonomous SDR Assistant",
      author: "Kavita Rao",
      badge: "Startup Project",
      likes: 512,
      views: 3400,
      demoUrl: "https://agentdesk.dev",
      githubUrl: "https://github.com/kavita/agentdesk",
      summary: "Multi-agent research and customized email pipeline generating $1.2k MRR.",
      tech: ["Python", "CrewAI", "Next.js", "Supabase", "Stripe"],
      score: 98
    },
    {
      id: "pv-3",
      title: "PacketGuard: Real-Time Network IDS",
      author: "Marcus Chen",
      badge: "Advanced Project",
      likes: 289,
      views: 1840,
      demoUrl: "https://packetguard.io",
      githubUrl: "https://github.com/mchen/packetguard",
      summary: "Live packet inspection engine identifying port scans and brute force attempts in real-time.",
      tech: ["Go", "WebSockets", "Docker", "Vue 3"],
      score: 91
    }
  ],

  // 27. Study Notes & Plain-English Concept Guides (For Everyone, Zero CS Required)
  studyNotes: [
    {
      id: "note-what-is-code",
      title: "What is Code? Software for Human Beings",
      category: "Foundations",
      badge: "Zero Prerequisite",
      readTime: "4 min read",
      subtitle: "How computers actually think, and why programming is just writing precise instructions.",
      analogy: {
        title: "The Brilliant Chef with Zero Common Sense",
        content: "Imagine hiring a Michelin-star chef who possesses immense knife skills, but absolutely zero common sense. If you tell them 'make me a sandwich', they will just stand there. But if you say: '1. Take two slices of bread. 2. Spread peanut butter on one slice. 3. Press the two slices together' — they execute it at light speed without mistakes. A computer is that chef. Code is simply your step-by-step recipe."
      },
      keyConcepts: [
        {
          term: "Hardware vs. Software",
          explanation: "Hardware is the physical machine (chips, screen, keyboard). Software is the set of instructions telling that hardware what to do."
        },
        {
          term: "Programming Language",
          explanation: "A bridge language. Computers only understand 1s and 0s (electricity ON/OFF). Languages like Python let you write human-readable English words that get converted into machine instructions."
        },
        {
          term: "Syntax",
          explanation: "The grammar rules of the language. If you miss a colon or spell a word wrong, the computer gets confused and politely tells you where it got stuck (an error)."
        }
      ],
      cheatSheet: `# Python is designed to read like plain English:
name = "Alex"
print("Hello, " + name)

# If you can think in steps, you can write code:
# Step 1: Get data
# Step 2: Make decision
# Step 3: Show result`,
      commonMistakes: "Thinking you need to be a math genius. 95% of real-world software engineering is organizing information, naming things clearly, and breaking big problems into small steps.",
      miniChallenge: "Change the 'name' in the workspace code to your own name and run it to see your personal greeting.",
      relatedProject: "nb-1"
    },
    {
      id: "note-variables",
      title: "Variables: The Labeled Kitchen Jars",
      category: "Foundations",
      badge: "Zero Prerequisite",
      readTime: "5 min read",
      subtitle: "How computers remember things like usernames, prices, and high scores.",
      analogy: {
        title: "Tupperware in Your Pantry",
        content: "In your kitchen, you have glass jars with sticky labels: 'Sugar', 'Coffee Beans', 'Oats'. When you need sugar, you don't search the whole room — you look for the label 'Sugar'. A variable in programming is identical: it is a named storage container in computer memory where you save a piece of information so you can use or change it later."
      },
      keyConcepts: [
        {
          term: "Strings (Text)",
          explanation: "Words or letters wrapped in quotes: name = \"Taylor\". The quotes tell Python 'this is text, not a command'."
        },
        {
          term: "Integers & Floats (Numbers)",
          explanation: "Numbers without quotes: count = 5 or price = 19.99. You can add, subtract, multiply, and divide them instantly."
        },
        {
          term: "Booleans (Yes/No)",
          explanation: "True or False: is_logged_in = True. Used by apps to make decisions like 'should we unlock the door?'"
        },
        {
          term: "Lists (Shopping Lists)",
          explanation: "Multiple items grouped inside square brackets: cart = [\"Apples\", \"Milk\", \"Bread\"]."
        }
      ],
      cheatSheet: `# Defining variables (labeled containers):
user_name = "Maya"            # Text (String)
account_balance = 250.75      # Decimal Number (Float)
has_paid_dues = True          # Boolean (True/False)
favorite_books = ["1984", "Dune"]  # List of items

# Updating a container:
account_balance = account_balance - 50.00
print(f"{user_name} has \${account_balance} remaining.")`,
      commonMistakes: "Forgetting quotation marks around words. Writing user = Maya will confuse Python because it will look for a container named Maya instead of the word 'Maya'.",
      miniChallenge: "Create three variables: your favorite movie, the release year, and whether you recommend it (True/False).",
      relatedProject: "nb-1"
    },
    {
      id: "note-functions",
      title: "Functions: The Kitchen Blender & Recipe Card",
      category: "Core Logic",
      badge: "Beginner Friendly",
      readTime: "6 min read",
      subtitle: "Write logic once, and reuse it a million times with different ingredients.",
      analogy: {
        title: "The Smoothie Blender",
        content: "Imagine every morning you had to manually rebuild a blender from scratch just to make breakfast. That would be insane! Instead, the blender is already built. You drop fruit and yogurt inside (inputs), press the button (processing), and pour out a delicious smoothie (output). In code, a function is that blender. You define the recipe once, give it a name, and press it whenever you need it."
      },
      keyConcepts: [
        {
          term: "def (Define)",
          explanation: "The magic keyword telling Python: 'Hey, I am creating a new recipe right now'."
        },
        {
          term: "Parameters (Inputs)",
          explanation: "The ingredients you pass into the function, placed inside parentheses: def blend_smoothie(fruit, milk):"
        },
        {
          term: "return (The Output)",
          explanation: "What the function hands back to you when it finishes working."
        }
      ],
      cheatSheet: `# Define the reusable recipe:
def calculate_tax(price, tax_rate=0.08):
    tax_amount = price * tax_rate
    final_total = price + tax_amount
    return round(final_total, 2)

# Use the recipe 3 times with different numbers:
print(calculate_tax(100))   # Output: 108.0
print(calculate_tax(45.50)) # Output: 49.14
print(calculate_tax(12.00)) # Output: 12.96`,
      commonMistakes: "Confusing print() with return. print() only displays words on screen for humans to read; return actually hands the calculated value back to your program so other code can use it.",
      miniChallenge: "Write a function called celsius_to_fahrenheit(c) that multiplies c by 1.8 and adds 32.",
      relatedProject: "nb-2"
    },
    {
      id: "note-conditionals-loops",
      title: "Conditionals & Loops: Traffic Lights & Factory Belts",
      category: "Core Logic",
      badge: "Beginner Friendly",
      readTime: "5 min read",
      subtitle: "How software makes decisions and automates repetitive tasks in milliseconds.",
      analogy: {
        title: "The Traffic Cop & The Assembly Line",
        content: "A conditional (if/else) is like a traffic light: if green, drive; else if yellow, slow down; else, stop. A loop is an assembly line: instead of manually stamping 1,000 packages one by one, you tell the robot arm: 'For every package on this conveyor belt, stamp it with an approval label'."
      },
      keyConcepts: [
        {
          term: "if / elif / else",
          explanation: "Branching paths. Checks conditions in order and runs only the matching block of code."
        },
        {
          term: "for loop",
          explanation: "Visits each item in a collection one by one. Perfect for processing rows in a spreadsheet or list of users."
        },
        {
          term: "Indentation",
          explanation: "Python uses 4 spaces to know which commands belong inside the decision or loop."
        }
      ],
      cheatSheet: `# Decision making:
score = 85
if score >= 90:
    print("Grade: A - Outstanding!")
elif score >= 80:
    print("Grade: B - Very Good!")
else:
    print("Keep practicing!")

# Conveyor belt loop:
students = ["Zack", "Amina", "Chloe"]
for student in students:
    print(f"Sending welcome email to: {student}")`,
      commonMistakes: "Using = instead of == for comparison. A single = assigns a value into a container; a double == checks if two values are equal.",
      miniChallenge: "Write a loop that prints only the even numbers from a list of numbers [1, 2, 3, 4, 5, 6].",
      relatedProject: "nb-3"
    },
    {
      id: "note-apis",
      title: "What on Earth is an API? The Restaurant Waiter",
      category: "Connecting Systems",
      badge: "Crucial Industry Concept",
      readTime: "6 min read",
      subtitle: "How your phone talks to Uber, Spotify, Google Maps, and your bank.",
      analogy: {
        title: "The Restaurant Waiter",
        content: "You are sitting at a table in a restaurant. The kitchen is where the chefs prepare food and store ingredients (the server and database). You are not allowed to walk directly into the commercial kitchen and start flipping pans — that would be chaotic and unsafe. Instead, the waiter comes to your table. You place an order from the menu (API Request). The waiter walks into the kitchen, tells the chefs what you ordered, and brings you the finished plate (API Response). The waiter is the API!"
      },
      keyConcepts: [
        {
          term: "API (Application Programming Interface)",
          explanation: "A set of agreed-upon rules and URLs allowing two completely different software systems to talk to each other."
        },
        {
          term: "HTTP Methods",
          explanation: "GET (read info, like looking at menu), POST (create new data, like placing an order), PUT (update data, like changing toppings), DELETE (remove data, like cancelling an order)."
        },
        {
          term: "JSON (JavaScript Object Notation)",
          explanation: "The universal text format used to send data over the internet, formatted in clean key-value pairs."
        },
        {
          term: "Status Codes",
          explanation: "200 OK (Success!), 404 Not Found (Item does not exist), 500 Server Error (The kitchen broke down)."
        }
      ],
      cheatSheet: `# What JSON data looks like traveling across the internet:
{
  "user_id": 492,
  "status": "success",
  "data": {
    "city": "San Francisco",
    "temperature": 68,
    "condition": "Sunny"
  }
}

# In Python, fetching from an API is as simple as:
# response = requests.get("https://api.weather.com/v1/forecast")
# data = response.json()`,
      commonMistakes: "Thinking APIs are mysterious or proprietary. Every time you open Instagram or check flight prices on Google, your phone is quietly sending 20+ API requests in the background.",
      miniChallenge: "Look at the Book Review API in the Micro-Projects section and test adding a new review.",
      relatedProject: "ai-p6"
    },
    {
      id: "note-databases",
      title: "Databases: The Supersonic Digital Filing Cabinet",
      category: "Data & Storage",
      badge: "Core Engineering",
      readTime: "6 min read",
      subtitle: "Why Excel crashes with big data, and how databases keep information safe forever.",
      analogy: {
        title: "Spreadsheet vs. Bank Vault Filing Cabinet",
        content: "If you have 20 contacts, a sticky note or an Excel sheet works great. But imagine Amazon or Netflix trying to use Excel: when 50 million people click 'Buy Now' or 'Play Movie' at the exact same split-second, Excel freezes and corrupts your file. A database is an industrial-strength vault designed to handle millions of simultaneous reads and writes without ever losing a single byte of data."
      },
      keyConcepts: [
        {
          term: "Tables, Rows, and Columns",
          explanation: "A table is like a sheet. Columns define what type of info is stored (e.g. Email, SignupDate). Each row is one individual person or order."
        },
        {
          term: "SQL (Structured Query Language)",
          explanation: "The universal language for asking questions to databases: 'Show me all customers who joined this month'."
        },
        {
          term: "Primary Key",
          explanation: "A unique ID badge for every single row (like a passport number) so two people named 'John Smith' are never mixed up."
        }
      ],
      cheatSheet: `-- Standard SQL Queries read like plain sentences:

-- 1. Get all active users
SELECT name, email FROM users WHERE status = 'active';

-- 2. Add a new customer
INSERT INTO customers (name, city, balance) 
VALUES ('Sarah Connor', 'Los Angeles', 120.50);

-- 3. Update an account balance
UPDATE customers SET balance = 150.00 WHERE id = 42;`,
      commonMistakes: "Saving passwords in plain text or forgetting a WHERE clause when updating records (which would accidentally update every user in the entire database!).",
      miniChallenge: "Write a SQL query in your head to find all books in a library table where published_year > 2020.",
      relatedProject: "fs-6"
    },
    {
      id: "note-ai-llms",
      title: "AI & Large Language Models: The World's Most Well-Read Autocomplete",
      category: "Artificial Intelligence",
      badge: "Cutting-Edge",
      readTime: "7 min read",
      subtitle: "Demystifying ChatGPT, Gemini, embeddings, and how AI agents actually work.",
      analogy: {
        title: "Smartphone Autocomplete on Steroids",
        content: "When you type 'Happy' on your phone, your keyboard suggests 'Birthday'. It does not 'think' or 'feel' — it just knows from billions of text messages that 'Birthday' frequently follows 'Happy'. A Large Language Model (like Gemini) works on the exact same mathematical principle, but scaled up to billions of parameters trained on virtually all human knowledge. It predicts the most helpful, coherent next words."
      },
      keyConcepts: [
        {
          term: "Tokens",
          explanation: "The chunks of words AI reads. Roughly 4 characters or 0.75 words per token."
        },
        {
          term: "Hallucination",
          explanation: "When an AI confidently makes up facts because the generated sentence sounds linguistically plausible even if factually wrong."
        },
        {
          term: "RAG (Retrieval-Augmented Generation)",
          explanation: "The solution to hallucination: before answering, the AI looks up verified documents from a private database, and quotes them directly."
        },
        {
          term: "AI Agent",
          explanation: "An AI model equipped with tools (search, calculator, terminal, API calls) so it can take actions rather than just generating text."
        }
      ],
      cheatSheet: `# How modern AI apps call LLMs in Python:
# prompt = "Summarize this medical research paper for a patient"
# response = gemini.generate_content(prompt)
# print(response.text)

# The Golden Rule of Prompting:
# 1. Role: "Act as an expert career advisor"
# 2. Context: "I am a non-CS student from commerce"
# 3. Task: "Explain how to build my first portfolio project"
# 4. Constraints: "Use everyday analogies, no tech jargon"`,
      commonMistakes: "Treating AI like an omniscient crystal ball. AI is a reasoning engine and language synthesizer — treat it like a brilliant, eager intern who needs clear instructions and fact-checking.",
      miniChallenge: "Open the AI Studio in this app, select 'Explain' mode, and ask it how your grade calculator works.",
      relatedProject: "ai-p11"
    }
  ],

  // 28. Curated Video Classroom Lessons (Visual Walkthroughs)
  videoLessons: [
    {
      id: "vid-1",
      title: "What is Programming & How Do Computers Work?",
      category: "Foundations for Everyone",
      duration: "11 mins",
      source: "CS50 / Educational Foundation",
      thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&auto=format&fit=crop&q=80",
      videoUrl: "https://www.youtube.com/embed/zOjov-2OZ0E",
      description: "An incredibly approachable visual explanation of how computers process binary, how memory works, and how code instructs machines — designed for anyone with zero technical background.",
      takeaways: [
        "Computers are simply switches turning on and off millions of times per second.",
        "Code is the layer of translation between human logic and electrical transistors.",
        "You do not need prior math training to learn programming logic."
      ],
      relatedNoteId: "note-what-is-code",
      actionText: "Try Foundations in Studio",
      actionProject: "nb-1"
    },
    {
      id: "vid-2",
      title: "Python in 100 Seconds: Why Everyone Uses It",
      category: "Language Foundations",
      duration: "2 mins",
      source: "Fireship",
      thumbnail: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600&auto=format&fit=crop&q=80",
      videoUrl: "https://www.youtube.com/embed/x7X9w_GIm1s",
      description: "A lightning-fast overview of why Python has become the world's most popular programming language for beginners, data analysts, web developers, and AI researchers alike.",
      takeaways: [
        "Python prioritizes human readability over complex punctuation.",
        "Used everywhere from Instagram and Netflix to NASA and OpenAI.",
        "Massive community with open-source tools for every possible goal."
      ],
      relatedNoteId: "note-variables",
      actionText: "Run Python in Studio",
      actionProject: "nb-1"
    },
    {
      id: "vid-3",
      title: "APIs Explained with Pizza & Waiters: How Apps Talk",
      category: "Modern Web",
      duration: "8 mins",
      source: "Web Dev Illustrated",
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80",
      videoUrl: "https://www.youtube.com/embed/-MTSQjw5DrM",
      description: "Learn how the modern internet actually functions under the hood. Visualizes REST requests, JSON responses, and how client apps request data from servers.",
      takeaways: [
        "Client (browser/phone) sends Request -> Server returns Response.",
        "JSON is the common language spoken by every device on earth.",
        "Status codes (200, 404, 500) tell your app whether the request succeeded."
      ],
      relatedNoteId: "note-apis",
      actionText: "Build Micro-API",
      actionProject: "ai-p6"
    },
    {
      id: "vid-4",
      title: "How Relational Databases & SQL Store Your Data",
      category: "Data & Storage",
      duration: "9 mins",
      source: "ByteByteGo",
      thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&auto=format&fit=crop&q=80",
      videoUrl: "https://www.youtube.com/embed/cz3w571DhrE",
      description: "See why spreadsheets break at scale and how modern databases organize tables, establish relationships, and query millions of rows in single-digit milliseconds.",
      takeaways: [
        "Tables store entities: users, orders, products.",
        "Primary keys uniquely identify rows; foreign keys link related records.",
        "SQL queries allow you to filter and aggregate massive datasets instantly."
      ],
      relatedNoteId: "note-databases",
      actionText: "Inspect Database Studio",
      actionProject: "fs-6"
    },
    {
      id: "vid-5",
      title: "Large Language Models & AI Under the Hood",
      category: "Artificial Intelligence",
      duration: "14 mins",
      source: "3Blue1Brown / AI Essentials",
      thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&auto=format&fit=crop&q=80",
      videoUrl: "https://www.youtube.com/embed/wjZofJX0v4U",
      description: "Visual animation showing how transformer neural networks calculate probability distributions over words, what attention mechanisms do, and how prompts get answered.",
      takeaways: [
        "LLMs predict next tokens based on statistical context, not biological consciousness.",
        "Vector embeddings turn words into points in multi-dimensional space.",
        "RAG bridges the gap between general language understanding and your private facts."
      ],
      relatedNoteId: "note-ai-llms",
      actionText: "Build AI Knowledge Assistant",
      actionProject: "ai-p11"
    },
    {
      id: "vid-6",
      title: "From Complete Beginner to Your First Working App",
      category: "Hands-on Workshop",
      duration: "16 mins",
      source: "CareerVerse Masterclass",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=80",
      videoUrl: "https://www.youtube.com/embed/kqtD5dpn9C8",
      description: "Watch a student with zero coding background build a functional web application step by step: planning requirements, writing logic, testing, and deploying.",
      takeaways: [
        "Start small: build the core calculation logic before touching graphics.",
        "Break projects into bite-sized tasks rather than feeling overwhelmed.",
        "Always document what you learned so future employers can see your thinking."
      ],
      relatedNoteId: "note-what-is-code",
      actionText: "Start Building Now",
      actionProject: "nb-1"
    }
  ],

  // 29. Beginner Guidance Assistant Knowledge Base (For "Ask What To Do")
  beginnerGuideFaqs: [
    {
      keywords: ["start", "where to start", "zero background", "beginner", "no experience", "non cs", "first step"],
      question: "I have zero coding background. Where do I start?",
      answer: "Welcome! You are in the right place. Most successful developers today did not start with a CS degree.\n\nHere is your exact 3-step starting plan:\n1. **Step 1: Read the first Study Note** — Head to the 'Study Notes' tab and read 'What is Code? Software for Human Beings' (it takes 4 minutes and uses simple kitchen analogies).\n2. **Step 2: Watch Video #1** — In the 'Video Classroom' tab, watch 'What is Programming?' to visualize how computers think.\n3. **Step 3: Build your first Mini-Project** — In 'IDE & Workspace', choose the 'Daily Habit & Streak Tracker'. Click 'Run Code (WASM)' to see it run right inside your browser with zero software installation required!\n\nYou don't need to memorize anything. Just follow along and build!"
    },
    {
      keywords: ["what to do now", "what should i do", "next step", "lost", "confused", "now what"],
      question: "What should I do right now?",
      answer: "Take a deep breath! Depending on where you are:\n\n• **If you haven't written a line of code yet:** Click on the **'Study Notes'** tab in the top navigation, read **'Variables: The Labeled Kitchen Jars'**, and try the 1-line challenge.\n• **If you want to build right away:** Open **'Curriculum Roadmaps'**, select **'From Non-Tech to Software Builder'**, and click **'Build in Studio'** on the Habit Tracker.\n• **If you are stuck on an error in the IDE:** Switch the AI Mentor mode to **'Explain'** or **'Hint'** to get friendly debugging assistance without spoiling the answer."
    },
    {
      keywords: ["what is an api", "api meaning", "explain api", "how does api work"],
      question: "Can you explain what an API is in simple words?",
      answer: "Think of an API like a **waiter at a restaurant**!\n\n1. You are sitting at a table (that's your phone or web browser).\n2. The kitchen has the ingredients and the chefs (that's the server and database where information lives).\n3. You can't just barge into the kitchen and touch the stoves. Instead, you look at the menu, tell the waiter what you want (**API Request**).\n4. The waiter brings your order into the kitchen and returns with your warm food (**API Response**).\n\nWhenever your phone checks the weather, an API is just the waiter asking the weather satellite for today's temperature and bringing it to your screen!"
    },
    {
      keywords: ["career", "which career", "career switch", "commerce", "arts", "non-tech", "path"],
      question: "Which career track fits a non-CS student?",
      answer: "You have several fantastic high-growth options where domain experience (from commerce, marketing, healthcare, or business) is actually a superpower:\n\n1. **AI Application Engineer / AI Builder:** You don't need to invent neural network math — you use AI tools and APIs to build smart solutions for businesses.\n2. **Full-Stack Web Developer:** Focuses on human-friendly user interfaces, websites, and business applications.\n3. **Product Engineer / Growth Automator:** Automating repetitive business tasks, connecting spreadsheets with databases, and generating reports.\n\nStart with the **'From Non-Tech to Software Builder'** roadmap — it introduces code gently and prepares you for real software jobs!"
    },
    {
      keywords: ["error", "broke", "bug", "stuck", "red text", "syntax error"],
      question: "My code gave an error! What did I do wrong?",
      answer: "Do not panic! **Errors are completely normal.** Professional engineers see dozens of errors every single day — an error is just the computer telling you where it got confused.\n\nHere is how to fix it:\n1. Look at the last line of the error message: it usually tells you the line number.\n2. Did you forget closing quotes (like `\"hello`) or parentheses (like `(4 + 6)`)?\n3. Did you spell a variable name slightly differently (like `Habit` vs `habit`)?\n4. In the IDE tab, click the **AI Mentor 'Hint'** or **'Explain'** button — it will review your exact code and explain the fix in plain English!"
    }
  ],

  // 30. Jargon Buster: Plain-English Dictionary for Everyone (Zero-CS)
  jargonBuster: [
    {
      term: "Variable",
      category: "Foundations",
      simpleDef: "A labeled storage container that holds a piece of information.",
      analogy: "Like a labeled kitchen jar with 'Sugar' or 'Salt' written on masking tape. You can swap what's inside anytime.",
      example: "student_name = 'Sarah'\ntotal_score = 95"
    },
    {
      term: "Function",
      category: "Foundations",
      simpleDef: "A reusable recipe that takes ingredients, performs steps, and returns a dish.",
      analogy: "Like a smoothie blender. You drop in strawberries and yogurt (inputs), hit the blend button, and out pours a smoothie (output).",
      example: "def calculate_tax(amount):\n    return amount * 0.08"
    },
    {
      term: "API (Application Programming Interface)",
      category: "Web & Networking",
      simpleDef: "A standardized messenger that lets two different software programs talk to each other.",
      analogy: "Like a restaurant waiter. You order food from the menu, the waiter tells the kitchen, and brings back your meal.",
      example: "weather_data = fetch('https://api.weather.com/v1/temp')"
    },
    {
      term: "Database",
      category: "Data & Storage",
      simpleDef: "An organized, super-fast digital filing cabinet that keeps data safe even when power turns off.",
      analogy: "Like a massive Excel spreadsheet on steroids that millions of people can read and write to at the exact same millisecond.",
      example: "SELECT name, email FROM students WHERE active = 1;"
    },
    {
      term: "Frontend vs Backend",
      category: "Web Architecture",
      simpleDef: "Frontend is what you see and click; Backend is the machinery behind the walls.",
      analogy: "Frontend is the dining room, menus, and lighting of a restaurant. Backend is the stoves, dishwashers, and storage lockers in the back.",
      example: "Frontend: HTML/CSS buttons | Backend: Python FastAPI server"
    },
    {
      term: "Loop",
      category: "Foundations",
      simpleDef: "An instruction telling the computer to repeat an action until a condition is met.",
      analogy: "Like stamping 500 envelopes: 'Take next envelope, apply stamp, set aside, repeat until pile is empty.'",
      example: "for student in class_roster:\n    send_welcome_email(student)"
    },
    {
      term: "Bug / Debugging",
      category: "Engineering",
      simpleDef: "A mistake or typo in instructions that makes the computer behave unexpectedly.",
      analogy: "Like following a cake recipe that accidentally wrote 'add 2 cups of salt' instead of sugar. Debugging is tasting the batter and fixing the recipe.",
      example: "# Bug: total = price - discount (forgot parent tax)\n# Fix: total = (price - discount) * 1.08"
    },
    {
      term: "LLM (Large Language Model)",
      category: "Artificial Intelligence",
      simpleDef: "An AI system trained on vast human writing to predict the most helpful next words.",
      analogy: "Your smartphone's autocomplete feature amplified by 10 billion times, able to hold conversations and write essays.",
      example: "response = gemini.generate_content('Explain quantum physics to a 10 year old')"
    },
    {
      term: "Git & GitHub",
      category: "Developer Tools",
      simpleDef: "Time machine for code + a social cloud drive where developers share their projects.",
      analogy: "Like 'Track Changes' in Google Docs, but with the power to travel back to any version of your project from months ago.",
      example: "git commit -m 'Added discount calculator feature'"
    },
    {
      term: "Vector Embedding",
      category: "Artificial Intelligence",
      simpleDef: "Converting the meaning of words or documents into a list of coordinates in digital space.",
      analogy: "Like organizing a supermarket: apples, bananas, and oranges are in Aisle 1 (Fruit), while shampoo and soap are in Aisle 8 (Hygiene). Similar concepts sit close together.",
      example: "cosine_similarity(embed('dog'), embed('puppy')) == 0.94"
    }
  ],

  // 31. Interactive Concept Flashcards for Everyone
  flashcards: [
    {
      id: "fc-1",
      topic: "Foundations",
      question: "What is a Variable in computer programming?",
      analogy: "Kitchen Jar Analogy",
      answer: "A labeled container in computer memory that holds data. You give it a name (like `price`) and a value (like `25.50`), and you can change what is inside anytime!",
      codeHint: "user_score = 100"
    },
    {
      id: "fc-2",
      topic: "Functions",
      question: "Why do programmers create Functions instead of repeating code?",
      analogy: "Smoothie Blender Analogy",
      answer: "To avoid repeating the same 10 lines over and over! You write the logic once, name it, and call it whenever you need it with different ingredients.",
      codeHint: "def greet(name): return f'Welcome, {name}!'"
    },
    {
      id: "fc-3",
      topic: "Web & APIs",
      question: "What is the difference between a Client and a Server?",
      analogy: "Customer & Kitchen Analogy",
      answer: "The Client is the device you hold (your phone or browser). The Server is the powerful computer far away in a data center that stores databases and computes responses.",
      codeHint: "Client (Sends Request) ➔ Server (Sends Response)"
    },
    {
      id: "fc-4",
      topic: "Data",
      question: "What is a Primary Key in a Database table?",
      analogy: "National ID / Passport Analogy",
      answer: "A unique identifier for each row in a table. Just like two people might have the name 'John Smith', their passport number guarantees we never confuse them!",
      codeHint: "id = 101, name = 'John Smith'"
    },
    {
      id: "fc-5",
      topic: "AI & LLMs",
      question: "What is an AI Hallucination and how do developers fix it?",
      analogy: "Confidently Guessing Student",
      answer: "When an AI makes up false facts because they sound believable. Developers fix it with RAG (Retrieval-Augmented Generation) by feeding the AI verified documents to quote directly!",
      codeHint: "RAG = Search private database first ➔ feed to AI prompt"
    },
    {
      id: "fc-6",
      topic: "Logic",
      question: "What does an 'If-Else' statement do?",
      analogy: "Fork in the Road Analogy",
      answer: "It makes decisions based on conditions. IF it is raining, take an umbrella. ELSE, wear sunglasses.",
      codeHint: "if temperature > 30: wear_shorts() else: wear_coat()"
    }
  ],

  // 32. Interactive Quick Knowledge Check (Quiz)
  quizQuestions: [
    {
      id: "q-1",
      topic: "Core Concept",
      question: "If a computer program is like a recipe for baking cookies, what are the variables?",
      options: [
        "The oven heat and cooking timers",
        "The measuring cups holding flour, sugar, and butter",
        "The person eating the cookies",
        "The kitchen floor tiles"
      ],
      correctIndex: 1,
      explanation: "Variables are the containers that hold values — just like measuring cups hold specific amounts of sugar or flour!"
    },
    {
      id: "q-2",
      topic: "Web Concepts",
      question: "When you open an app and see current flight prices, how did your phone get the numbers?",
      options: [
        "Your phone guessed them using a random number generator",
        "The airline physically mailed microchips to your phone",
        "An API made a request to the airline server and returned the data",
        "The phone camera scanned the sky for airplanes"
      ],
      correctIndex: 2,
      explanation: "APIs allow client apps (your phone) to query remote servers and display fresh information instantly!"
    },
    {
      id: "q-3",
      topic: "AI Engineering",
      question: "What is the primary benefit of RAG (Retrieval-Augmented Generation)?",
      options: [
        "It makes the computer run 10x hotter",
        "It grounds the AI response in verified documents to prevent hallucinations",
        "It replaces human programmers with robots completely",
        "It turns text into video games automatically"
      ],
      correctIndex: 1,
      explanation: "RAG retrieves actual verified company/study documents and gives them to the AI so it cites real facts rather than inventing answers."
    }
  ],

  // 33. Beginner Ready-to-Run Studio Code Presets
  beginnerPresets: [
    {
      id: "preset-greeter",
      title: "1. Friendly Welcome & Age Calculator",
      level: "Zero Experience",
      code: `# 👋 Welcome to your first Python program!
# Click 'Run Python' above to see this run instantly.

student_name = "Alex"
birth_year = 2004
current_year = 2026

age = current_year - birth_year

print("=" * 45)
print(f"🎉 Hello {student_name}! Welcome to CareerVerse.")
print(f"📅 You are approximately {age} years old in {current_year}.")
print("✨ You just executed working Python in your browser!")
print("=" * 45)
`
    },
    {
      id: "preset-grade",
      title: "2. Student Grade & Scholarship Calculator",
      level: "Beginner",
      code: `# 🎓 Student Grade & Scholarship Evaluation
scores = [88, 92, 79, 95, 84]

def evaluate_student(scores_list):
    total = sum(scores_list)
    average = total / len(scores_list)
    
    if average >= 90:
        grade = "A+ (Honors)"
        scholarship = "$2,500 Merit Grant"
    elif average >= 80:
        grade = "A (Distinction)"
        scholarship = "$1,000 Academic Grant"
    elif average >= 70:
        grade = "B (Good Standing)"
        scholarship = "Standard Tuition"
    else:
        grade = "C (Needs Review)"
        scholarship = "Mentorship Support"
        
    return {
        "average": round(average, 1),
        "grade": grade,
        "scholarship": scholarship
    }

result = evaluate_student(scores)
print("📊 Evaluation Summary:")
print(f"• Average Score: {result['average']}%")
print(f"• Final Standing: {result['grade']}")
print(f"• Award Granted: {result['scholarship']}")
`
    },
    {
      id: "preset-pizza",
      title: "3. Restaurant Bill, Tax & Tip Splitter",
      level: "Beginner",
      code: `# 🍕 Restaurant Order & Bill Splitter
items = [
    {"name": "Margherita Pizza", "price": 14.50},
    {"name": "Pasta Carbonara", "price": 16.00},
    {"name": "Garlic Bread", "price": 5.50},
    {"name": "Iced Lemonade", "price": 4.00}
]

friends_count = 3
tax_rate = 0.08  # 8% sales tax
tip_rate = 0.15  # 15% hospitality tip

subtotal = sum(item["price"] for item in items)
tax = subtotal * tax_rate
tip = subtotal * tip_rate
grand_total = subtotal + tax + tip
per_person = grand_total / friends_count

print("🧾 DINER RECEIPT")
print("-" * 35)
for item in items:
    print(f"• {item['name']:<22} \${item['price']:.2f}")
print("-" * 35)
print(f"Subtotal:               \${subtotal:.2f}")
print(f"Tax (8%):               \${tax:.2f}")
print(f"Tip (15%):              \${tip:.2f}")
print(f"Grand Total:            \${grand_total:.2f}")
print("-" * 35)
print(f"👉 Each person pays:    \${per_person:.2f}")
`
    },
    {
      id: "preset-ai-sim",
      title: "4. Mini AI Flashcard Generator & Sentiment",
      level: "Intermediate",
      code: `# 🤖 Mini AI Knowledge Assistant Simulation
import math

lecture_notes = """
Photosynthesis is the process used by plants and other organisms
to convert light energy into chemical energy that can later be
released to fuel the organism's activities.
"""

def extract_key_terms(text):
    words = [w.strip('.,()') for w in text.split()]
    # Filter high-value academic vocabulary (>6 letters)
    key_terms = [w.capitalize() for w in set(words) if len(w) > 6]
    return sorted(key_terms)[:4]

def generate_flashcard(term):
    definitions = {
        "Photosynthesis": "Converts light energy into chemical energy.",
        "Chemical": "Relating to chemistry or the interaction of substances.",
        "Organisms": "Individual living entities like plants, animals, or bacteria.",
        "Activities": "Actions or functions performed to sustain life."
    }
    return definitions.get(term, "Essential biological vocabulary.")

terms = extract_key_terms(lecture_notes)
print("📚 LECTURE ANALYSIS COMPLETED")
print(f"Identified {len(terms)} High-Yield Study Flashcards:")
print("-" * 45)
for i, t in enumerate(terms, 1):
    print(f"Flashcard #{i}: {t}")
    print(f"Definition: {generate_flashcard(t)}")
    print()
`
    }
  ],

  // 34. Quick-Reference Cheatsheets (Printable / Copyable)
  cheatsheets: [
    {
      id: "cs-python",
      title: "Python Survival Cheatsheet (Beginner)",
      category: "Python",
      content: `// 🐍 Python Essentials for Non-CS Students

# 1. Variables (Storing Info)
name = "Alex"           # Text (String)
age = 21                # Whole number (Integer)
price = 19.99           # Decimal (Float)
is_student = True       # Yes/No (Boolean)

# 2. Lists (Collections)
tools = ["Python", "FastAPI", "SQLite"]
tools.append("Docker")  # Adds item to end

# 3. Decisions (If-Else)
if age >= 18:
    print("Eligible for internship")
else:
    print("Underage")

# 4. Functions (Reusable Recipes)
def calculate_discount(original, percent):
    return original * (1 - percent / 100)

final_price = calculate_discount(100, 20)  # Returns 80.0
`
    },
    {
      id: "cs-web",
      title: "Web & API Quick Reference",
      category: "Web & APIs",
      content: `// 🌐 Web & API Cheatsheet

# HTTP Status Codes (How the server responds):
• 200 OK: Request succeeded!
• 201 Created: New item successfully saved!
• 400 Bad Request: Missing info in user form.
• 401 Unauthorized: Please log in first.
• 404 Not Found: Page or item doesn't exist.
• 500 Server Error: Code crashed on the server.

# HTTP Methods (What you want to do):
• GET:    Retrieve data (view a profile or note)
• POST:   Submit new data (create an account)
• PUT:    Update existing data (change bio)
• DELETE: Remove data (delete a note)
`
    },
    {
      id: "cs-nontech",
      title: "Zero-CS Mindset & Debugging Guide",
      category: "Mindset",
      content: `// 🧠 The 5 Non-CS Engineering Mindsets

1. YOU DO NOT NEED GENIUS MATH:
   90% of real software development is organization, clear naming,
   and breaking big problems into 3 small steps.

2. ERRORS ARE CLUES, NOT FAILURES:
   A red error message is just the computer telling you:
   "Line 14: You forgot to close a quotation mark."
   Read the very last line of the error first!

3. NEVER MEMORIZE SYNTAX:
   Senior Google engineers Google syntax every 20 minutes.
   Memorize HOW to think, not every semicolon.

4. BUILD TO LEARN:
   You learn more in 2 hours of building a real grade calculator
   than in 20 hours of passively watching tutorials.
`
    }
  ],

  // 17. GitHub Integration Model (Pillar 17)
  githubSyncData: {
    connected: true,
    repoName: "alex-builds/ai-study-assistant",
    repoUrl: "https://github.com/alex-builds/ai-study-assistant",
    branch: "main",
    stars: 42,
    forks: 14,
    readmeScore: 94,
    readmeFeedback: [
      "✓ Clear problem & solution statement present",
      "✓ Architecture topology ASCII diagram included",
      "✓ Prerequisites and quickstart CLI instructions verified",
      "✓ 100% test coverage badge included",
      "○ Recommendation: Add an animated screen recording to increase recruiter interest"
    ],
    recentCommits: [
      { hash: "8f192b0", message: "feat: implement WebAssembly python execution sandbox", time: "25 mins ago" },
      { hash: "3c7a10d", message: "fix: guard against division by zero in cosine similarity", time: "2 hours ago" },
      { hash: "1e48f9a", message: "docs: add comprehensive system architecture & DDL schema", time: "Yesterday" },
      { hash: "9b231ff", message: "init: scaffold repository layout & requirements.txt", time: "2 days ago" }
    ]
  },

  // 22. Project Collaboration & Team Workspace (Pillar 22)
  collaborationTeam: [
    { id: "tm-1", name: "Alex Rivera (You)", role: "AI Engineer", avatar: "AR", status: "Active in Studio", isOwner: true },
    { id: "tm-2", name: "Sarah Chen", role: "Frontend Developer", avatar: "SC", status: "Reviewing UI", isOwner: false },
    { id: "tm-3", name: "Marcus Thorne", role: "Product Manager", avatar: "MT", status: "Refining Specs", isOwner: false },
    { id: "tm-4", name: "Priya Patel", role: "QA & Security", avatar: "PP", status: "Writing Tests", isOwner: false }
  ],

  collaborationBoard: [
    { id: "kb-1", col: "done", title: "Define Requirements & User Journey", assignee: "Marcus Thorne", tag: "Planning", points: 15 },
    { id: "kb-2", col: "done", title: "FastAPI Backend & Vector Ingestion", assignee: "Alex Rivera", tag: "Backend", points: 30 },
    { id: "kb-3", col: "progress", title: "Build Interactive Flashcard Client", assignee: "Sarah Chen", tag: "Frontend", points: 25 },
    { id: "kb-4", col: "progress", title: "Unit Test Assertions for Cosine Math", assignee: "Priya Patel", tag: "Testing", points: 20 },
    { id: "kb-5", col: "todo", title: "Multi-stage Dockerfile Optimization", assignee: "Alex Rivera", tag: "DevOps", points: 25 },
    { id: "kb-6", col: "todo", title: "Record 2-Min Demo for ProjectVerse", assignee: "Marcus Thorne", tag: "Showcase", points: 15 }
  ],

  collaborationChat: [
    { id: "c1", sender: "Marcus Thorne", role: "Product Manager", time: "10:14 AM", text: "Checked the API schema contract for `/api/v1/summarize` — looks super clean!" },
    { id: "c2", sender: "Sarah Chen", role: "Frontend Developer", time: "10:22 AM", text: "Added the 3D card flip physics. Tested on both mobile and desktop!" },
    { id: "c3", sender: "Priya Patel", role: "QA & Security", time: "10:35 AM", text: "Adding edge case test assertions for empty input strings and unicode handling." }
  ],

  // 10. Beginner Visual Builder Blocks (Pillar 10)
  visualBuilderBlocks: [
    { id: "blk-input", type: "input", name: "User Input Ingress", desc: "Accepts raw student notes or textbook text", color: "indigo", code: "notes_input = 'Transformers compute self-attention dynamically.'" },
    { id: "blk-clean", type: "logic", name: "Text Cleaner & Normalizer", desc: "Strips punctuation and standardizes lowercase tokens", color: "purple", code: "words = [w.strip() for w in notes_input.split() if len(w) > 2]" },
    { id: "blk-summary", type: "ai", name: "AI Summarizer Node", desc: "Extracts top 3 core high-yield takeaways", color: "cyan", code: "key_takeaways = ['1. Dynamic token weighting', '2. O(1) sequential bottleneck fix', '3. High recall memory']" },
    { id: "blk-db", type: "storage", name: "Database Storage (SQLite)", desc: "Saves generated flashcards with timestamps", color: "emerald", code: "db_record = {'subject': 'AI', 'topic': 'Transformers', 'points': len(key_takeaways)}" },
    { id: "blk-output", type: "display", name: "Client Display View", desc: "Renders active-recall flashcard on screen", color: "amber", code: "print(f'🎉 Generated {len(key_takeaways)} study flashcards successfully!')\nfor pt in key_takeaways:\n    print(f'  • {pt}')" }
  ]
};

