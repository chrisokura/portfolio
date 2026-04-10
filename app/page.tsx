import { ThemeToggle } from "@/components/ThemeToggle";

/* ─── DATA ─────────────────────────────────────────────────────────────── */

const projectSections = [
  {
    section: "Data Science",
    projects: [
      {
        num: "01",
        tag: "Hero Project",
        title: "AI Agent Evaluation Framework",
        company: "Meta · 2023–Present",
        description:
          "Production Python framework for evaluating AI agent performance across multi-step tasks. Combined LLM-as-a-Judge automated scoring with structured human-in-the-loop (HITL) review — rubric design, gold-standard dataset curation, and continuous scoring pipelines. Improved benchmark pass rates by 40% and became the team's source of truth for model quality decisions.",
        metric: "40% improvement in benchmark pass rates",
        tags: ["Python", "LLM-as-a-Judge", "HITL", "Benchmark Design", "PyTorch"],
        highlight: true,
        isNew: false,
      },
      {
        num: "02",
        tag: null,
        title: "A/B Experimentation Infrastructure",
        company: "Meta · 2023–Present",
        description:
          "Designed and led 20+ A/B experiments on Meta's internal data infrastructure. Built experimentation frameworks that measured both user-perceived and system-level performance with rigorous statistical controls. Delivered recommendations that reduced p90 latency by up to 56% and user-perceived latency by 32% across the platform.",
        metric: "p90 latency reduced up to 56%",
        tags: ["Python", "Causal Inference", "Statistical Testing", "SQL", "Tableau"],
        highlight: false,
        isNew: false,
      },
    ],
  },
  {
    section: "Finance",
    projects: [
      {
        num: "03",
        tag: null,
        title: "MTIA Custom Silicon Investment Modeling",
        company: "Meta · 2022–2023",
        description:
          "Led financial modeling to support Meta's multi-billion dollar decision to invest in MTIA — its custom AI training and inference accelerator chip. Built build-vs-buy frameworks comparing MTIA against commercial GPU alternatives (total cost of ownership, performance-per-watt, amortization across workloads). Modeled capex and opex scenarios across chip generations as Meta scaled from pilot to hundreds of thousands of chips deployed globally. Analysis directly informed infrastructure investment strategy and capital allocation decisions for one of the largest custom silicon programs in the industry.",
        metric: "Informed investment decision at $10B+ capex scale",
        tags: ["Financial Modeling", "Build vs. Buy", "TCO Analysis", "Capex Planning", "Excel", "Python"],
        highlight: false,
        isNew: false,
      },
      {
        num: "04",
        tag: null,
        title: "Infrastructure Forecasting & Optimization",
        company: "Meta · 2022–2024",
        description:
          "ML forecasting models for compute, storage, and network demand at Meta scale. Built predictive models for $10B+ annual infrastructure capex and $390M cloud spend allocation. Enabled data-driven infrastructure strategy decisions that reduced redundant spend and optimized resource allocation across global data centers.",
        metric: "~$140M annual Opex savings",
        tags: ["Python", "Time Series", "scikit-learn", "Financial Modeling", "SQL"],
        highlight: false,
        isNew: false,
      },
    ],
  },
  {
    section: "Personal",
    projects: [
      {
        num: "05",
        tag: null,
        title: "NFL 4th-Down Decision Evaluator",
        company: "Personal · nflfastR dataset",
        description:
          "LLM-as-a-Judge evaluation pipeline applied to NFL 4th-down decisions. Pulls play-by-play data from the public nflfastR dataset, generates structured game-context prompts, and uses chain-of-thought LLM scoring to rate go/punt/kick decisions against Expected Points Added (EPA) benchmarks. Built automated rubrics and calibration against historical win probability models.",
        metric: "78% agreement with EPA-optimal decisions",
        tags: ["Python", "LLM-as-a-Judge", "nflfastR", "EPA Modeling", "Pandas"],
        highlight: false,
        isNew: true,
      },
    ],
  },
];

const skills = [
  { category: "Languages", items: ["Python", "SQL", "R", "VBA"] },
  { category: "AI & Evaluation", items: ["LLM-as-a-Judge", "HITL Evaluation", "Benchmark Design", "NLP", "Generative AI"] },
  { category: "Machine Learning", items: ["PyTorch", "TensorFlow", "scikit-learn", "Random Forest", "SVM"] },
  { category: "Experimentation", items: ["A/B Testing", "Causal Inference", "Hypothesis Testing", "Simulation Modeling"] },
  { category: "Cloud & Data", items: ["AWS", "GCP", "Azure", "MongoDB"] },
  { category: "Visualization", items: ["Tableau", "Power BI", "Matplotlib"] },
];

const experience = [
  { company: "Meta", role: "Data Scientist, Data Infrastructure", period: "2023 – Present", location: "Seattle, WA" },
  { company: "Meta", role: "Business Operations, Infrastructure Finance", period: "2022 – 2023", location: "Seattle, WA" },
  { company: "Ashley Pacific Northwest", role: "Business Analyst", period: "2021 – 2022", location: "Pacific, WA" },
  { company: "Wilson Logistics", role: "Pricing Analyst", period: "2019 – 2021", location: "Pacific, WA" },
];

const stats = [
  { value: "40%", label: "Benchmark improvement" },
  { value: "20+", label: "A/B experiments shipped" },
  { value: "$140M", label: "Annual Opex savings" },
  { value: "5+", label: "Years at Meta-scale" },
];

/* ─── PAGE ──────────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">

      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-semibold text-sm text-slate-900 dark:text-white">
            Chris Okura
          </span>
          <div className="flex items-center gap-6">
            <nav className="hidden sm:flex items-center gap-5 text-sm text-slate-500 dark:text-slate-400">
              {["Projects", "Skills", "Experience", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-28 pb-24 space-y-28">

        {/* HERO */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-slate-500 dark:text-slate-400">
              Open to opportunities · Seattle, WA
            </span>
          </div>

          <h1 className="text-6xl sm:text-7xl font-bold tracking-tight mb-4 leading-none">
            <span className="gradient-text">Chris Okura</span>
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-slate-600 dark:text-slate-300 mb-5">
            Senior Data Scientist &amp; Finance Professional
          </p>

          <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl mb-8">
            5+ years building AI evaluation, experimentation, and forecasting systems at Meta-scale.
            Designed the frameworks that measure whether AI agents actually work — combining automated
            LLM scoring with human-in-the-loop review. Focused on the hardest measurement problems in AI.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 mb-16">
            <a
              href="https://linkedin.com/in/chrisokura"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-violet-500 hover:opacity-90 transition-opacity"
            >
              <LinkedInIcon /> LinkedIn
            </a>
            <a
              href="https://github.com/chrisokura"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <GitHubIcon /> GitHub
            </a>
            <a
              href="mailto:chris.okura8@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <MailIcon /> Email
            </a>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-4"
              >
                <div className="text-2xl font-bold gradient-text mb-1">{s.value}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <SectionLabel>Featured Projects</SectionLabel>
          <div className="space-y-12">
            {projectSections.map((section) => (
              <div key={section.section}>
                {/* Sub-section header */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {section.section}
                  </span>
                  <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
                </div>

                <div className="space-y-5">
                  {section.projects.map((p) => (
                    <div
                      key={p.title}
                      className={`rounded-2xl border p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg
                        ${p.highlight
                          ? "border-cyan-200 dark:border-cyan-900 bg-gradient-to-br from-slate-50 to-cyan-50/30 dark:from-slate-900 dark:to-cyan-950/20 hover:shadow-cyan-100/50 dark:hover:shadow-cyan-900/30"
                          : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-slate-100 dark:hover:shadow-slate-900"
                        }`}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono font-medium text-slate-400 dark:text-slate-500">
                            {p.num}
                          </span>
                          <span className="text-xs text-slate-500 dark:text-slate-400">{p.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {p.isNew && (
                            <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400 border border-violet-200 dark:border-violet-800">
                              Public Dataset
                            </span>
                          )}
                          {p.highlight && (
                            <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-cyan-100 dark:bg-cyan-900/40 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800">
                              Hero Project
                            </span>
                          )}
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">
                        {p.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 mb-4">
                        {p.description}
                      </p>

                      {/* Metric */}
                      <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg mb-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900">
                        <TrendingIcon />
                        <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                          {p.metric}
                        </span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {p.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-1 rounded-md font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <SectionLabel>Skills</SectionLabel>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((group) => (
              <div
                key={group.category}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5"
              >
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 rounded-md bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience">
          <SectionLabel>Experience</SectionLabel>
          <div className="relative pl-6 space-y-6">
            {/* Timeline line */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400 to-violet-500 opacity-40" />
            {experience.map((job, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-white dark:bg-slate-950 border-2 border-cyan-400" />
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-0.5">
                  <span className="font-semibold text-sm text-violet-600 dark:text-violet-400">
                    {job.company}
                  </span>
                  <span className="text-xs text-slate-400 dark:text-slate-500">{job.period}</span>
                </div>
                <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{job.role}</p>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">{job.location}</p>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
              Education
            </h3>
            <div className="space-y-3">
              {[
                { degree: "MS, Business Analytics", school: "Cal Poly San Luis Obispo", gpa: "GPA 3.8" },
                { degree: "BS, Economics", school: "University of Washington", gpa: "GPA 3.7" },
              ].map((edu) => (
                <div key={edu.degree} className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{edu.degree}</span>
                    <span className="text-xs text-violet-600 dark:text-violet-400">{edu.school}</span>
                  </div>
                  <span className="text-xs text-slate-400 dark:text-slate-500">{edu.gpa}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800/50 p-10 text-center">
          <h2 className="text-3xl font-bold mb-3">
            Let&apos;s{" "}
            <span className="gradient-text">work together</span>
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-7 max-w-md mx-auto leading-relaxed">
            Open to Senior/Staff DS, AI Evaluation, and Research Engineer roles at AI-native companies.
            Remote or Seattle-based.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="mailto:chris.okura8@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-violet-500 hover:opacity-90 transition-opacity"
            >
              Get in touch
            </a>
            <a
              href="https://linkedin.com/in/chrisokura"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border border-slate-300 dark:border-slate-600 hover:bg-white dark:hover:bg-slate-800 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-6">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 dark:text-slate-500">
          <span>© 2026 Chris Okura</span>
          <span>Built with Next.js &amp; Tailwind CSS</span>
        </div>
      </footer>

    </div>
  );
}

/* ─── SMALL COMPONENTS ──────────────────────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
      <span className="text-xs font-semibold uppercase tracking-widest text-cyan-500 dark:text-cyan-400">
        {children}
      </span>
      <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
    </div>
  );
}

function TrendingIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600 dark:text-emerald-400 flex-shrink-0">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
      <polyline points="16 7 22 7 22 13"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}
