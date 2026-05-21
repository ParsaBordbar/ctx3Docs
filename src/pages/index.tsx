import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import TerminalDemo from '../components/TerminalDemo';
import InstallBlock from '../components/InstallCommand';

const commands = [
  {
    cmd: "ctx3 context",
    output: [
      "📂 Project: .",
      "Files: 28, Dirs: 6",
      "",
      "Dependencies: -",
      "README Preview:",
      `<p align='center'>`,
      `   <img width="200" alt="ctx3" `,
      `       src="https://github.com/user-attachments/assets/ctx3" />`,
      `</p>`,
      "# Context Tree (ctx3)",
      "**Context Tree (ctx3)** is a free, open-source CLI tool written in Go",
      "that helps you (and your favorite LLM) understand a codebase be...",
    ],
  },
  {
    cmd: "ctx3 print",
    output: [
      "┌── 📂 Project structure:",
      "├── context.cmd.go",
      "├── help.cmd.go",
      "├── pack.cmd.go",
      "├── pack.cmd_test.go",
      "├── percentage.cmd.go",
      "├── print.cmd.go",
      "└── root.cmd.go",
    ],
  },
  {
    cmd: 'ctx3 percentage',
    output: [
      "┌── File Percentages:",
      "├── tsx          0.2% ",
      "├── png         38.1% ███████████████████",
      "├── json        22.4% ███████████",
      "├── css          0.1% ",
      "├── md           0.3% ",
      "├── ico         35.4% █████████████████",
      "├── svg          2.5% █",
      "├── js           0.4% ",
      "└── ts           0.2%",
    ],
  },
  {
    cmd: 'ctx3 flow . --mermaid -o flow.md',
    output: [
      "```mermaid",
      "flowchart LR",
      "    main_main([\"main.main\"])",
      "    cmd_Execute[\"cmd.Execute\"]",
      "    analyzer_AnalyzeProject[\"analyzer.AnalyzeProject\"]",
      "    pack_Pack[\"pack.Pack\"]",
      "    flow_AnalyzeFlow[\"flow.AnalyzeFlow\"]",
      "    main_main --> cmd_Execute",
      "    analyzer_AnalyzeProject --> pack_Pack",
      "    cmd_Execute --> flow_AnalyzeFlow",
      "```",
      "Flow written to flow.md",
    ],
  },
];

const features = [
  {
    icon: "🌲",
    title: "File Tree",
    description:
      "Print a beautiful, color-coded file hierarchy of your project with sizes and depth — perfect for understanding structure at a glance.",
    command: "ctx3 print .",
  },
  {
    icon: "🔍",
    title: "Project Context",
    description:
      "Collect rich metadata: file types, sizes, line counts, dependencies, entry points, and README preview — output as human text, JSON, or TOON.",
    command: "ctx3 context -j",
  },
  {
    icon: "📦",
    title: "Pack for LLMs",
    description:
      "Bundle your entire repo into a single XML artifact that any LLM can consume. Supports glob filters, binary handling, redaction, and size caps.",
    command: "ctx3 pack . --compact",
  },
  {
    icon: "📊",
    title: "Language Breakdown",
    description:
      "See which languages dominate your codebase with a visual bar chart — great for auditing tech-debt or documenting a project.",
    command: "ctx3 percentage",
  },
  {
    icon: "🔀",
    title: "Code Flow",
    description:
      "Trace call graphs across your Go packages. Export as a Mermaid flowchart to embed in docs or paste straight into an LLM conversation.",
    command: "ctx3 flow . --mermaid",
  },
  {
    icon: "📚",
    title: "Library Mode",
    description:
      "Every package — filetree, analyzer, pack, flow — is designed to be imported directly into your own Go projects.",
    command: 'go get github.com/parsabordbar/ctx3',
  },
];

const steps = [
  {
    number: "01",
    title: "Install",
    description: "One command via go install — no binaries to manage.",
    code: "go install github.com/parsabordbar/ctx3@latest",
  },
  {
    number: "02",
    title: "Navigate to your repo",
    description: "Works with any Go project out of the box.",
    code: "cd your-project",
  },
  {
    number: "03",
    title: "Run any command",
    description: "Start with context, pack for LLMs, or explore the flow.",
    code: "ctx3 context\nctx3 pack . -o context.xml\nctx3 flow . --mermaid",
  },
];

const useCases = [
  {
    emoji: "🤖",
    title: "LLM-ready context",
    body: "Use ctx3 pack to create a single file containing your entire codebase structure and content. Paste it into ChatGPT, Claude, or any LLM for instant project understanding.",
  },
  {
    emoji: "📋",
    title: "Code reviews",
    body: "Share ctx3 print and ctx3 percentage output in PR descriptions so reviewers instantly understand the scope and shape of your changes.",
  },
  {
    emoji: "🚀",
    title: "Onboarding",
    body: "New team member joining? Run ctx3 context and ctx3 flow and include the output in your project README — no more 'read the entire codebase' first days.",
  },
  {
    emoji: "📖",
    title: "Documentation",
    body: "Embed ctx3 flow --mermaid output in your docs to keep architecture diagrams in sync with the actual code — generated, not hand-drawn.",
  },
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title" />
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <TerminalDemo commands={commands} />
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            Get Started
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            style={{ marginLeft: '1rem' }}
            to="https://github.com/parsabordbar/ctx3"
          >
            GitHub →
          </Link>
        </div>
        <InstallBlock />
      </div>
    </header>
  );
}

function FeaturesSection() {
  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">Everything you need to understand a codebase</Heading>
          <p className={styles.sectionSubtitle}>
            Six focused commands. One tool. Built for humans and LLMs alike.
          </p>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((f) => (
            <div key={f.title} className={styles.featureCard}>
              <span className={styles.featureIcon}>{f.icon}</span>
              <Heading as="h3" className={styles.featureTitle}>
                {f.title}
              </Heading>
              <p className={styles.featureDesc}>{f.description}</p>
              <code className={styles.featureCommand}>{f.command}</code>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickStartSection() {
  return (
    <section className={styles.quickStartSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">Up and running in 60 seconds</Heading>
          <p className={styles.sectionSubtitle}>
            No configuration files. No setup. Just install and run.
          </p>
        </div>
        <div className={styles.stepsGrid}>
          {steps.map((step) => (
            <div key={step.number} className={styles.stepCard}>
              <span className={styles.stepNumber}>{step.number}</span>
              <Heading as="h3" className={styles.stepTitle}>
                {step.title}
              </Heading>
              <p className={styles.stepDesc}>{step.description}</p>
              <pre className={styles.stepCode}>
                <code>{step.code}</code>
              </pre>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  return (
    <section className={styles.useCasesSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">Built for real workflows</Heading>
          <p className={styles.sectionSubtitle}>
            ctx3 fits naturally into the moments that matter most.
          </p>
        </div>
        <div className={styles.useCasesGrid}>
          {useCases.map((u) => (
            <div key={u.title} className={styles.useCaseCard}>
              <span className={styles.useCaseEmoji}>{u.emoji}</span>
              <Heading as="h3" className={styles.useCaseTitle}>
                {u.title}
              </Heading>
              <p className={styles.useCaseBody}>{u.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaBox}>
          <Heading as="h2" className={styles.ctaTitle}>
            Open source. Forever free.
          </Heading>
          <p className={styles.ctaSubtitle}>
            ctx3 is MIT-licensed and welcomes contributions. Found a bug? Have a feature idea?
            Open an issue or a PR.
          </p>
          <div className={styles.ctaButtons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro"
            >
              Read the docs
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="https://github.com/parsabordbar/ctx3"
            >
              View on GitHub
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="https://github.com/parsabordbar/ctx3/issues/new"
            >
              Open an issue
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} — Codebase context for humans and LLMs`}
      description="ctx3 is a free CLI tool that gives you and your LLM structured context about any Go codebase — file trees, dependency graphs, code flow, and LLM-ready packs."
    >
      <HomepageHeader />
      <main>
        <FeaturesSection />
        <QuickStartSection />
        <UseCasesSection />
        <CtaSection />
      </main>
    </Layout>
  );
}