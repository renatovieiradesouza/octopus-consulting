export type NavItem = { label: string; href: string };

export type Stat = { value: string; label: string };

export type Service = {
  title: string;
  icon: string;
  description: string;
  bullets: string[];
};

export type Metric = { value: string; label: string };

export const site = {
  brand: {
    name: "OCTOPUS",
    subtitle: "SRE & DevOps",
    foundedYear: 2025,
    legalName: "RPE – Engenharia & Performance em Tecnologia",
  },
  contact: {
    email: "contato@rpe.tech",
    serviceArea: "Atendimento remoto — Brasil e Exterior",
  },
  nav: [
    { label: "Serviços", href: "#servicos" },
    { label: "Diferencial", href: "#diferencial" },
    { label: "Resultados", href: "#resultados" },
    { label: "Contato", href: "#contato" },
  ] satisfies NavItem[],
  hero: {
    title: {
      before: "Modernizando",
      highlight: "infraestrutura",
      after: ". Acelerando negócios.",
    },
    description:
      "Consultoria em Engenharia de Software, Cloud e DevOps. Performance técnica conectada a resultado real — com foco em eficiência, governança e escalabilidade sustentável.",
    primaryCta: { label: "Agende uma conversa", href: "#contato" },
    secondaryCta: { label: "Nossos serviços", href: "#servicos" },
    stats: [
      { value: "20–60%", label: "Redução de custos cloud" },
      { value: "R$ 300k+", label: "Economia gerada" },
      { value: "100%", label: "Operação remota" },
    ] satisfies Stat[],
  },
  services: {
    tag: "O que fazemos",
    title: "Serviços especializados",
    description:
      "Soluções completas em cloud, plataforma e engenharia para modernizar, operar e escalar com segurança e previsibilidade.",
    items: [
      {
        title: "Cloud & Infraestrutura",
        icon: "☁️",
        description:
          "Arquitetura cloud nativa, modernização e migração, com estratégia multi-cloud/híbrida e foco em custo e governança.",
        bullets: [
          "Desenho de arquitetura cloud nativa e orientada a eventos",
          "Migração on‑premise → cloud",
          "Modernização de monólitos para microsserviços",
          "Serverless e arquitetura resiliente",
        ],
      },
      {
        title: "FinOps & Otimização de Custos",
        icon: "💰",
        description:
          "Redução contínua de custos com análise por workload, rightsizing e estratégias de compra e escala.",
        bullets: [
          "Análise detalhada e eliminação de recursos ociosos",
          "Rightsizing e tuning (compute + storage)",
          "Reserved Instances / Savings Plans",
          "Otimização de Kubernetes nodes (EKS) e Spot vs On‑Demand",
        ],
      },
      {
        title: "DevOps & CI/CD",
        icon: "🚀",
        description:
          "Pipelines, automação e estratégias de deploy para acelerar entrega com qualidade e rollback seguro.",
        bullets: [
          "Pipelines (GitHub Actions, GitLab CI, Azure DevOps)",
          "Blue/Green, Canary e Feature Flags",
          "Deploy automatizado com rollback",
          "Estratégia Git (GitFlow / Trunk-Based) e releases",
        ],
      },
      {
        title: "Kubernetes & Plataforma",
        icon: "⚙️",
        description:
          "Clusters EKS/GKE/AKS, hardening, autoscaling e engenharia de plataforma (IDP) para autonomia dos times.",
        bullets: [
          "Hardening, RBAC e Network Policies",
          "Autoscaling com HPA/KEDA e Karpenter",
          "Gateway API e multi-cluster strategy",
          "Backstage (IDP), templates e catálogo de serviços",
        ],
      },
      {
        title: "Observabilidade & SRE",
        icon: "📊",
        description:
          "Monitoramento, logs e tracing com SLO/SLA/SLI e métricas DORA conectadas a resultados de negócio.",
        bullets: [
          "Prometheus, Grafana, Loki e Tempo",
          "OpenTelemetry e tracing distribuído",
          "SLO/SLI, Error Budget e incident management",
          "Dashboards executivos (DORA + negócio)",
        ],
      },
      {
        title: "Segurança, Compliance & Qualidade",
        icon: "🔒",
        description:
          "DevSecOps, hardening e qualidade contínua para reduzir risco, falhas e retrabalho.",
        bullets: [
          "SAST/SCA, scan de imagens e compliance automatizado",
          "IAM least privilege e auditoria/rastreabilidade",
          "SonarQube, quality gates e padronização de código",
          "Estratégia de testes (unit/integration/e2e/performance)",
        ],
      },
    ] satisfies Service[],
  },
  diferencial: {
    tag: "Por que Octopus",
    title: "Consultoria enxuta. Resultado rápido. Impacto real.",
    description:
      "Atuação com especialistas seniores focados em entregas objetivas e mensuráveis. Entramos com diagnóstico estruturado, executamos hands‑on e deixamos governança e conhecimento com o time.",
    bullets: [
      "Engenharia com visão de negócio",
      "Manutenabilidade e redução de custos contínua",
      "Automação como padrão, segurança desde o início",
      "Experiência em ambientes críticos e alta escala",
      "Métricas DORA conectadas a resultado financeiro",
      "Time sênior e altamente especializado",
    ],
    cards: [
      { value: "5", label: "Especialistas seniores" },
      { value: "2025", label: "Fundada" },
      { value: "100%", label: "Foco em resultado" },
    ] satisfies Stat[],
  },
  results: {
    tag: "Impacto mensurável",
    title: "Resultados que entregamos",
    description: "Compromisso com impacto técnico e financeiro, sem criar dependência operacional.",
    metrics: [
      { value: "20–60%", label: "Redução de custos cloud" },
      { value: "R$ 300k+", label: "Economia gerada" },
      { value: "2", label: "Clientes atendidos" },
      { value: "5", label: "Profissionais seniores" },
    ] satisfies Metric[],
  },
  cta: {
    title: "Pronto para transformar sua infraestrutura?",
    description:
      "Vamos conversar sobre como acelerar seu negócio com tecnologia eficiente, segura e escalável.",
    primary: { label: "Enviar e‑mail", href: "mailto:contato@rpe.tech" },
    secondary: { label: "Saiba mais", href: "#servicos" },
  },
  footer: {
    description:
      "Consultoria especializada em Cloud, DevOps, SRE e Engenharia de Plataforma. Modernizando infraestrutura, acelerando negócios.",
    columns: [
      {
        title: "Serviços",
        links: [
          { label: "Cloud & Infraestrutura", href: "#servicos" },
          { label: "DevOps & CI/CD", href: "#servicos" },
          { label: "Kubernetes & Plataforma", href: "#servicos" },
          { label: "Observabilidade & SRE", href: "#servicos" },
        ],
      },
      {
        title: "Empresa",
        links: [
          { label: "Diferencial", href: "#diferencial" },
          { label: "Resultados", href: "#resultados" },
          { label: "Contato", href: "#contato" },
        ],
      },
      {
        title: "Contato",
        links: [
          { label: "contato@rpe.tech", href: "mailto:contato@rpe.tech" },
          { label: "Atendimento remoto", href: "#contato" },
          { label: "Brasil & Internacional", href: "#contato" },
        ],
      },
    ],
  },
} as const;

