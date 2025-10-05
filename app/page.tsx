'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import {
  Shield,
  Sparkles,
  Zap,
  Network,
  Bot,
  Code,
  Database,
  ArrowRight,
  CheckCircle,
  Users,
  GitBranch,
  Lock,
  Cpu,
  Globe,
  Layers,
  BarChart3,
  Hexagon,
  PanelLeft,
  Terminal,
  TrendingUp
} from 'lucide-react'

type PersonaKey = 'developer' | 'agent'

export default function Home() {
  const heroStats: { label: string; value: string; icon: LucideIcon }[] = [
    { label: 'Integrity Lift', value: '4.7x', icon: Shield },
    { label: 'Agent Compositions', value: '120+', icon: Layers },
    { label: 'Avg. Latency', value: '< 90s', icon: Zap }
  ]

  const capabilityPillars: { title: string; description: string; icon: LucideIcon; accent: string }[] = [
    {
      title: 'Composable AI Workflows',
      description: 'Orchestrate deterministic LangGraph pipelines across any mix of containerized agents with auditable state replay.',
      icon: Layers,
      accent: 'from-flare-400/40 via-flare-500/20 to-transparent'
    },
    {
      title: 'Provable Data Integrity',
      description: 'Every agent execution submits verifiable proofs before final FDC attestation, eliminating unverified single-source inputs.',
      icon: Hexagon,
      accent: 'from-primary-400/40 via-primary-500/10 to-transparent'
    },
    {
      title: 'Marketplace Incentives',
      description: 'Revenue-sharing smart contracts reward AI builders, orchestrator nodes, and protocol governors automatically.',
      icon: BarChart3,
      accent: 'from-emerald-400/40 via-emerald-500/10 to-transparent'
    }
  ]

  const workflowSteps: { title: string; description: string; icon: LucideIcon }[] = [
    {
      title: 'Acquire & Normalize',
      description: 'Multi-source retrieval with schema harmonization and anomaly detection.',
      icon: Globe
    },
    {
      title: 'Verify & Enrich',
      description: 'AI agents collaborate to cross-reference, enrich, and sign outputs.',
      icon: GitBranch
    },
    {
      title: 'Attest on Flare',
      description: 'Escrowed proofs trigger the FDC submission for trustless consumption.',
      icon: Shield
    }
  ]

  const architectureLayers: {
    title: string
    description: string
    accent: string
    items: { label: string; detail: string; icon: LucideIcon }[]
  }[] = [
    {
      title: 'On-Chain Protocol',
      description: 'Upgradeable Flare smart contracts manage discovery, payments, and proof verification.',
      accent: 'from-flare-500/30 via-flare-400/10 to-transparent',
      items: [
        { label: 'AgentRegistry.sol', detail: 'Canonical registry with metadata + reputation scoring.', icon: PanelLeft },
        { label: 'JobFactory.sol', detail: 'Mints escrowed workflow instances with milestone tracking.', icon: Lock },
        { label: 'Job.sol', detail: 'Disburses fees as proofs land, handling failure rollbacks.', icon: Database }
      ]
    },
    {
      title: 'Off-Chain Intelligence',
      description: 'Resilient orchestrator mesh executes LangGraph plans and signs attestations.',
      accent: 'from-primary-500/30 via-primary-400/10 to-transparent',
      items: [
        { label: 'Orchestrator Mesh', detail: 'Multi-region FastAPI services coordinating workloads.', icon: Network },
        { label: 'LangGraph Runtime', detail: 'Deterministic agent graph execution with trace storage.', icon: Cpu },
        { label: 'Agent Fleet', detail: 'Dockerized micro-AIs callable over secure channels.', icon: Bot }
      ]
    }
  ]

  const marketplaceAgents: { name: string; category: string; description: string; icon: LucideIcon; accent: string }[] = [
    {
      name: 'WebScraperAgent',
      category: 'Data Acquisition',
      description: 'Gather climate, market, and IoT data with retries, caching, and signature validation.',
      icon: Globe,
      accent: 'from-blue-500/20 via-blue-400/10 to-transparent'
    },
    {
      name: 'DataCrossReferencerAgent',
      category: 'Verification',
      description: 'Blend multiple sources, eliminate outliers, and compute confidence-weighted results.',
      icon: GitBranch,
      accent: 'from-purple-500/20 via-purple-400/10 to-transparent'
    },
    {
      name: 'SentimentAnalysisAgent',
      category: 'Analysis',
      description: 'Score social feeds in real time to augment market or insurance signals.',
      icon: Bot,
      accent: 'from-rose-500/20 via-rose-400/10 to-transparent'
    },
    {
      name: 'PIIRedactionAgent',
      category: 'Privacy',
      description: 'Strip PII and apply jurisdictional policies prior to on-chain publication.',
      icon: Lock,
      accent: 'from-emerald-500/20 via-emerald-400/10 to-transparent'
    },
    {
      name: 'SchemaFormatterAgent',
      category: 'Formatting',
      description: 'Convert raw payloads into Flare-ready, standardized attestations.',
      icon: Code,
      accent: 'from-orange-500/20 via-orange-400/10 to-transparent'
    },
    {
      name: 'FDCSubmitterAgent',
      category: 'Integration',
      description: 'Finalize workflows with signed FDC submissions and confirmation hooks.',
      icon: Zap,
      accent: 'from-flare-500/30 via-flare-400/10 to-transparent'
    }
  ]

  const personaBlueprint: Record<PersonaKey, {
    title: string
    subtitle: string
    icon: LucideIcon
    highlights: { label: string; detail: string; icon: LucideIcon }[]
    cta: string
  }> = {
    developer: {
      title: 'Ship mission-critical dApps with trustworthy data rails.',
      subtitle: 'Compose and monitor verifiable workflows without leaving your TypeScript or Python stack.',
      icon: Terminal,
      highlights: [
        { label: 'LangGraph Templates', detail: 'Start with battle-tested YAML recipes for DeFi, gaming, and insurance flows.', icon: Code },
        { label: 'SDK Telemetry', detail: 'Streaming job logs and state diffs available through the Aegis SDK.', icon: Network },
        { label: 'Instant Rollbacks', detail: 'Automatic refunds and retries when an agent proof fails verification.', icon: CheckCircle }
      ],
      cta: 'Read the developer quickstart'
    },
    agent: {
      title: 'Monetize specialized AI models in a permissionless marketplace.',
      subtitle: 'Package agents once, earn protocol fees forever with transparent performance metrics.',
      icon: Bot,
      highlights: [
        { label: 'Container Blueprints', detail: 'CLI scaffolds Docker images with health checks and secure endpoints.', icon: Layers },
        { label: 'Automated Settlements', detail: 'Smart contracts split rewards based on usage and quality scores.', icon: TrendingUp },
        { label: 'Analytics Console', detail: 'Understand adoption, revenue, and performance across workflows.', icon: BarChart3 }
      ],
      cta: 'Launch the agent creator portal'
    }
  }

  const ecosystemPillars: { title: string; detail: string; icon: LucideIcon }[] = [
    {
      title: 'Developers',
      detail: 'Unlock multi-source attested data without standing up bespoke infrastructure.',
      icon: Users
    },
    {
      title: 'AI Builders',
      detail: 'Capture recurring revenue streams tied to every workflow execution.',
      icon: Bot
    },
    {
      title: 'Flare Network',
      detail: 'Differentiate with the first oracle stack that bakes enrichment directly into attestations.',
      icon: Network
    }
  ]

  const callouts: { label: string; value: string; description: string; icon: LucideIcon }[] = [
    { label: 'Jobs executed', value: '18K+', description: 'High-integrity workflows completed across pilot partners.', icon: TrendingUp },
    { label: 'Active agents', value: '230+', description: 'Independent AI services available inside the marketplace.', icon: Layers },
    { label: 'Attested value', value: '$42M', description: 'Capital flows protected by Aegis verification pipelines.', icon: BarChart3 }
  ]

  const [activePersona, setActivePersona] = useState<PersonaKey>('developer')
  const persona = personaBlueprint[activePersona]

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute -top-40 right-16 h-[30rem] w-[30rem] rounded-full bg-primary-500/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-10rem] left-[-4rem] h-[32rem] w-[32rem] rounded-full bg-flare-500/20 blur-[140px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_60%)]" />

      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <motion.a
            href="#top"
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
              <Shield className="h-6 w-6 text-flare-300" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Aegis</p>
              <p className="text-lg font-semibold text-white">Programmable Data Integrity</p>
            </div>
          </motion.a>
          <motion.div
            className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <a href="#features" className="hover:text-white">Capabilities</a>
            <a href="#architecture" className="hover:text-white">Architecture</a>
            <a href="#marketplace" className="hover:text-white">Marketplace</a>
            <a href="#personas" className="hover:text-white">Personas</a>
            <button className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-white transition hover:bg-white/10">
              Launch App
            </button>
          </motion.div>
        </div>
      </nav>

      <main className="relative z-10">
        <section id="top" className="px-4 pt-36 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-10"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-slate-300">
                <Sparkles className="h-4 w-4 text-flare-300" />
                The AI verification layer for Flare
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
                Build trustless data flows
                <span className="bg-gradient-to-r from-flare-300 via-primary-300 to-sky-400 bg-clip-text text-transparent"> with autonomous agents</span>
              </h1>
              <p className="max-w-2xl text-lg text-slate-300 md:text-xl">
                Aegis orchestrates specialized AI agents that fetch, cross-reference, enrich, and attest data before it ever reaches the Flare Data Connector.
                Replace fragile single-source oracles with programmable, verifiable intelligence.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-flare-400 via-primary-400 to-flare-500 px-8 py-3 text-base font-semibold text-slate-950 shadow-[0px_10px_40px_rgba(56,189,248,0.35)]"
                >
                  Start building
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3 text-base font-semibold text-white"
                >
                  Explore documentation
                </motion.button>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <stat.icon className="h-6 w-6 text-flare-300" />
                    <p className="mt-4 text-2xl font-semibold text-white">{stat.value}</p>
                    <p className="text-sm text-slate-400">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent blur-3xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 p-8 backdrop-blur">
                <div className="flex items-center justify-between text-sm text-slate-300">
                  <span className="inline-flex items-center gap-2 text-flare-200">
                    <Sparkles className="h-4 w-4" />
                    Live workflow preview
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">deterministic</span>
                </div>
                <div className="mt-8 space-y-6">
                  {workflowSteps.map((step, index) => (
                    <div key={step.title} className="relative pl-8">
                      {index !== workflowSteps.length - 1 && (
                        <span className="absolute left-[13px] top-8 h-12 w-px bg-gradient-to-b from-white/30 to-transparent" />
                      )}
                      <div className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/10">
                        <step.icon className="h-4 w-4 text-flare-200" />
                      </div>
                      <h3 className="text-base font-semibold text-white">{step.title}</h3>
                      <p className="mt-1 text-sm text-slate-400">{step.description}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-flare-200" />
                    <span>FDC attestation queued</span>
                  </div>
                  <span className="text-flare-200">+99.4% confidence</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-3">
            {callouts.map((callout) => (
              <motion.div
                key={callout.label}
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-transparent p-8"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="h-full w-full bg-gradient-to-br from-flare-400/20 via-transparent to-primary-400/20" />
                </div>
                <callout.icon className="relative h-6 w-6 text-flare-200" />
                <p className="relative mt-6 text-3xl font-semibold text-white">{callout.value}</p>
                <p className="relative mt-2 text-sm text-slate-300">{callout.label}</p>
                <p className="relative mt-4 text-sm text-slate-400">{callout.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="features" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.08),_transparent_65%)]" />
          <div className="relative mx-auto max-w-6xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-semibold md:text-5xl"
            >
              Solve the oracle gap with intelligent middleware
            </motion.h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
              Aegis transforms the Flare Data Connector from a dumb pipe into a fully programmable verification fabric.
              Compose agents, enforce proofs, and deploy new data flows in minutes.
            </p>
          </div>
          <div className="relative mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-3">
            {capabilityPillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                whileHover={{ y: -6 }}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8"
              >
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${pillar.accent}`} />
                <div className="relative z-10">
                  <pillar.icon className="h-8 w-8 text-flare-200" />
                  <h3 className="mt-6 text-xl font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-4 text-sm text-slate-300">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="architecture" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-semibold md:text-5xl"
              >
                Hybrid architecture engineered for verifiability
              </motion.h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
                On-chain contracts secure payments and proofs while off-chain intelligence handles heavy computation and AI reasoning.
              </p>
            </div>
            <div className="mt-16 grid gap-10 lg:grid-cols-2">
              {architectureLayers.map((layer) => (
                <motion.div
                  key={layer.title}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 24 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10"
                >
                  <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${layer.accent}`} />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-semibold text-white">{layer.title}</h3>
                    <p className="mt-3 text-sm text-slate-300">{layer.description}</p>
                    <div className="mt-8 space-y-6">
                      {layer.items.map((item) => (
                        <div key={item.label} className="flex items-start gap-4">
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
                            <item.icon className="h-5 w-5 text-flare-200" />
                          </div>
                          <div>
                            <p className="text-base font-medium text-white">{item.label}</p>
                            <p className="text-sm text-slate-300">{item.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="marketplace" className="bg-slate-950/60 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-semibold md:text-5xl"
              >
                A marketplace of specialized AI agents
              </motion.h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
                Mix and match agents to meet the exact verification needs of your application, then monetize your own contributions.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {marketplaceAgents.map((agent) => (
                <motion.div
                  key={agent.name}
                  whileHover={{ y: -6 }}
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8"
                >
                  <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${agent.accent}`} />
                  <div className="relative z-10 flex flex-col gap-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
                          <agent.icon className="h-5 w-5 text-flare-200" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{agent.name}</h3>
                          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{agent.category}</p>
                        </div>
                      </div>
                      <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-300">
                        99.9% uptime
                      </span>
                    </div>
                    <p className="text-sm text-slate-300">{agent.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="personas" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl font-semibold md:text-5xl"
                >
                  Tailored experiences for every contributor
                </motion.h2>
                <p className="mt-4 max-w-2xl text-lg text-slate-300">
                  Whether you orchestrate production dApps or craft the agents that power them, Aegis streamlines your journey from idea to deployment.
                </p>
              </div>
              <div className="flex rounded-full border border-white/10 bg-white/5 p-1 text-sm text-slate-300">
                {(['developer', 'agent'] as PersonaKey[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActivePersona(key)}
                    className={`rounded-full px-5 py-2 transition ${
                      activePersona === key ? 'bg-gradient-to-r from-flare-400 via-primary-400 to-flare-500 text-slate-950' : 'hover:text-white'
                    }`}
                  >
                    {key === 'developer' ? 'dApp teams' : 'Agent creators'}
                  </button>
                ))}
              </div>
            </div>

            <motion.div
              key={activePersona}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]"
            >
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                <div className="relative z-10 flex items-center gap-4 text-sm uppercase tracking-[0.35em] text-slate-300">
                  <persona.icon className="h-5 w-5 text-flare-200" />
                  {activePersona === 'developer' ? 'Engineer Dashboard' : 'Creator Console'}
                </div>
                <h3 className="relative z-10 mt-6 text-2xl font-semibold text-white">{persona.title}</h3>
                <p className="relative z-10 mt-3 text-sm text-slate-300">{persona.subtitle}</p>
                <div className="relative z-10 mt-8 grid gap-6 sm:grid-cols-2">
                  {persona.highlights.map((highlight) => (
                    <div key={highlight.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <highlight.icon className="h-6 w-6 text-flare-200" />
                      <p className="mt-4 text-base font-medium text-white">{highlight.label}</p>
                      <p className="mt-2 text-sm text-slate-300">{highlight.detail}</p>
                    </div>
                  ))}
                </div>
                <button className="relative z-10 mt-10 inline-flex items-center text-sm font-semibold text-flare-200">
                  {persona.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
              <div className="flex h-full flex-col justify-between gap-6">
                <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-transparent p-8">
                  <h4 className="text-lg font-semibold text-white">Playbook snapshot</h4>
                  <pre className="mt-5 overflow-x-auto rounded-2xl bg-slate-950/70 p-5 text-xs text-slate-300">
{`workflow:
  name: flare-weather-shield
  steps:
    - agent: WeatherApiAgent
      config:
        sources: ["openweather", "noaa", "meteostat"]
    - agent: DataCrossReferencerAgent
      config:
        aggregation: weighted_median
        guardrails:
          - drop: zscore > 2.5
    - agent: PIIRedactionAgent
      config:
        policies: ["hipaa", "gdpr"]
    - agent: FDCSubmitterAgent
      config:
        attestation: weather.precipitation`}
                  </pre>
                </div>
                <div className="flex items-center gap-6 rounded-3xl border border-white/10 bg-white/5 p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
                    <Sparkles className="h-5 w-5 text-flare-200" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white">Granular observability baked in</p>
                    <p className="text-sm text-slate-300">Follow every agent call, latency metric, and proof submission in real time.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-slate-950/70 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-semibold md:text-5xl"
            >
              Ecosystem value that compounds
            </motion.h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
              Aegis creates a flywheel for the Flare Network. More agents means richer data, which attracts more builders, which increases rewards for the entire community.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
            {ecosystemPillars.map((pillar) => (
              <div key={pillar.title} className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
                <pillar.icon className="mx-auto h-8 w-8 text-flare-200" />
                <h3 className="mt-6 text-xl font-semibold text-white">{pillar.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{pillar.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 pb-28 pt-20 sm:px-6 lg:px-8">
          <div className="relative mx-auto flex max-w-5xl flex-col items-center overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-flare-400/15 via-primary-400/10 to-slate-950 p-12 text-center shadow-[0_40px_120px_rgba(56,189,248,0.25)]">
            <div className="absolute -top-24 right-24 h-48 w-48 rounded-full bg-primary-400/30 blur-3xl" />
            <div className="absolute -bottom-20 left-10 h-40 w-40 rounded-full bg-flare-500/20 blur-3xl" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-slate-200">
                <Sparkles className="h-4 w-4 text-flare-200" />
                Join the movement
              </span>
              <h2 className="mt-6 text-4xl font-semibold text-white md:text-5xl">
                Ready to fortify your Flare dApp?
              </h2>
              <p className="mt-5 max-w-2xl text-base text-slate-200">
                Start composing verifiable agent workflows today, or ship your own agent and tap into the protocol’s revenue streams.
                The future of decentralized data integrity is programmable.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-3 text-base font-semibold text-white shadow-[0px_8px_30px_rgba(15,23,42,0.45)]"
                >
                  Launch builder console
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-base font-semibold text-white"
                >
                  Join the community call
                </motion.button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-white/10 bg-slate-950/80 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
              <Shield className="h-6 w-6 text-flare-300" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Aegis</p>
              <p className="text-lg font-semibold text-white">Autonomous Verification Layer</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-slate-300">
            <a href="#" className="hover:text-white">Documentation</a>
            <a href="#" className="hover:text-white">GitHub</a>
            <a href="#" className="hover:text-white">Discord</a>
            <a href="#" className="hover:text-white">Twitter</a>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-6xl border-t border-white/10 pt-6 text-center text-xs uppercase tracking-[0.35em] text-slate-500">
          &copy; {new Date().getFullYear()} Aegis Protocol — Forged for the Flare Network ecosystem.
        </p>
      </footer>
    </div>
  )
}
