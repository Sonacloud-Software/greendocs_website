'use client'

import { useState, type FormEvent, type ReactNode } from 'react'
import {
  ArrowRight,
  BellRing,
  Bot,
  ChevronDown,
  CircleCheck,
  Columns3,
  FileCheck2,
  Leaf,
  Menu,
  Search,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'

const features = [
  {
    icon: FileCheck2,
    title: 'Documentação viva',
    text: 'Um único espaço para guias, políticas e decisões que evoluem com o seu produto.',
  },
  {
    icon: BellRing,
    title: 'Prazos sob controle',
    text: 'Alertas inteligentes ajudam sua equipe a manter cada renovação e evidência em dia.',
  },
  {
    icon: ShieldCheck,
    title: 'Governança sem atrito',
    text: 'Permissões claras, histórico completo e tranquilidade para auditorias.',
  },
  {
    icon: Bot,
    title: 'Pesquisa com IA',
    text: 'Converse com um chatbot treinado no seu acervo para encontrar respostas, resumir documentos e descobrir conexões em segundos.',
  },
]

const steps = [
  ['01', 'Conecte seu workspace', 'Reúna as fontes importantes em um ambiente organizado.'],
  ['02', 'Defina responsáveis', 'Distribua ownership e prazos sem depender de planilhas.'],
  ['03', 'Acompanhe com clareza', 'Tenha visibilidade do que está atualizado, pendente ou em risco.'],
]

function Brand() {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="GreenDocs — início">
      <span className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground">
        <Leaf size={17} strokeWidth={2.5} />
      </span>
      <span className="text-[17px] font-semibold tracking-[-0.04em] text-foreground">
        Green<span className="text-primary">Docs</span>
      </span>
    </a>
  )
}

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
      <span className="h-px w-7 bg-primary/40" />
      {children}
    </p>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [contactSent, setContactSent] = useState(false)

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setContactSent(true)
  }

  return (
    <main id="top" className="min-h-screen overflow-hidden bg-background">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <Brand />

          <nav
            className="hidden items-center gap-8 text-sm text-muted-foreground md:flex"
            aria-label="Navegação principal"
          >
            <a className="transition-colors hover:text-foreground" href="#produto">
              Produto
            </a>
            <a className="transition-colors hover:text-foreground" href="#como-funciona">
              Como funciona
            </a>
            <a className="flex items-center gap-1 transition-colors hover:text-foreground" href="#recursos">
              Recursos <ChevronDown size={14} />
            </a>
            <a className="transition-colors hover:text-foreground" href="#pesquisa-ia">
              Pesquisa com IA
            </a>
            <a className="transition-colors hover:text-foreground" href="#kanban">
              Kanban
            </a>
            <a className="transition-colors hover:text-foreground" href="#contato">
              Contato
            </a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href="/vault" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground">
              Entrar
            </a>
            <a
              href="#contato"
              className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5"
            >
              Começar agora
            </a>
          </div>

          <button
            type="button"
            className="rounded-md p-2 text-foreground md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-border bg-background px-5 py-5 md:hidden" aria-label="Menu móvel">
            <div className="flex flex-col gap-5 text-sm">
              <a href="#produto" onClick={() => setMenuOpen(false)}>
                Produto
              </a>
              <a href="#como-funciona" onClick={() => setMenuOpen(false)}>
                Como funciona
              </a>
              <a href="#recursos" onClick={() => setMenuOpen(false)}>
                Recursos
              </a>
              <a href="#contato" onClick={() => setMenuOpen(false)}>
                Contato
              </a>
              <a href="/vault" onClick={() => setMenuOpen(false)}>
                Entrar
              </a>
              <a
                href="#contato"
                className="w-fit rounded-lg bg-primary px-4 py-2.5 font-semibold text-primary-foreground"
              >
                Começar agora
              </a>
            </div>
          </nav>
        )}
      </header>

      <section
        className="relative border-b border-border/60 bg-[linear-gradient(135deg,var(--background)_0%,var(--mint)_58%,var(--teal-soft)_100%)]"
        aria-labelledby="hero-title"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-16 md:pt-24 lg:grid-cols-[1.04fr_.96fr] lg:items-center lg:px-8 lg:pb-28">
          <div className="animate-rise">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/70 px-3 py-1.5 text-xs font-semibold text-primary">
              <Sparkles size={14} /> Documentação que faz a diferença
            </div>
            <h1
              id="hero-title"
              className="max-w-3xl text-balance text-5xl font-semibold leading-[1.03] tracking-[-0.065em] text-foreground sm:text-6xl lg:text-[76px]"
            >
              Organize o conhecimento.
              <br />
              <span className="text-primary">Cuide do futuro.</span>
            </h1>
            <p className="mt-7 max-w-xl text-pretty text-lg leading-8 text-muted-foreground">
              GreenDocs transforma documentação e governança em uma rotina simples, rastreável e preparada para
              crescer com seu negócio.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contato"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/15 transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                Conheça a GreenDocs{' '}
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#produto"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background/70 px-5 py-3.5 text-sm font-semibold text-foreground hover:bg-background"
              >
                <Search size={16} /> Ver como funciona
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <CircleCheck size={16} className="text-primary" /> Setup em minutos
              </span>
              <span className="flex items-center gap-2">
                <CircleCheck size={16} className="text-primary" /> Feito para times modernos
              </span>
            </div>
          </div>

          <div
            className="relative min-h-[360px] lg:min-h-[490px]"
            aria-label="Ilustração de uma documentação conectada à natureza"
          >
            <div className="absolute inset-x-8 top-10 bottom-0 rounded-[2rem] bg-primary/10 blur-2xl" />
            <div className="relative flex h-full min-h-[360px] items-end justify-center overflow-hidden rounded-[2rem] border border-primary/15 bg-[linear-gradient(160deg,#dff3e7_0%,#a9dcc2_58%,#4da27f_100%)] p-8 shadow-[0_24px_70px_-28px_rgba(20,105,70,.45)] lg:min-h-[490px]">
              <div className="absolute right-8 top-8 rounded-full border border-white/60 bg-white/60 px-3 py-1.5 text-xs font-semibold text-primary backdrop-blur">
                Workspace sustentável
              </div>
              <div className="absolute left-8 top-24 h-28 w-28 rounded-full border border-white/50 bg-white/20" />
              <div className="absolute bottom-0 left-0 right-0 h-[48%] bg-[linear-gradient(12deg,transparent_20%,rgba(255,255,255,.3)_21%,transparent_22%),linear-gradient(-12deg,transparent_30%,rgba(255,255,255,.22)_31%,transparent_32%)] opacity-70" />
              <div className="relative z-10 w-full max-w-[360px] rounded-2xl border border-white/70 bg-background/90 p-5 shadow-2xl backdrop-blur">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">Visão geral</p>
                    <p className="mt-1 font-semibold">Saúde da documentação</p>
                  </div>
                  <div className="grid size-10 place-items-center rounded-full bg-mint text-primary">
                    <Leaf size={20} />
                  </div>
                </div>
                <div className="mt-5 flex items-end gap-3">
                  <span className="text-4xl font-semibold tracking-tight text-primary">92%</span>
                  <span className="mb-1 text-xs font-medium text-primary">+12% este mês</span>
                </div>
                <div className="mt-5 h-2 overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-[92%] rounded-full bg-primary" />
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-muted/70 p-3">
                    <p className="text-[11px] text-muted-foreground">Atualizados</p>
                    <p className="mt-1 text-lg font-semibold">148</p>
                  </div>
                  <div className="rounded-lg bg-muted/70 p-3">
                    <p className="text-[11px] text-muted-foreground">Em revisão</p>
                    <p className="mt-1 text-lg font-semibold">06</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="produto" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <SectionEyebrow>Por que GreenDocs</SectionEyebrow>
            <h2 className="max-w-lg text-balance text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl">
              Menos ruído.
              <br />
              <span className="text-primary">Mais confiança.</span>
            </h2>
          </div>
          <p className="max-w-xl text-pretty text-lg leading-8 text-muted-foreground">
            Quando a informação certa está no lugar certo, as decisões ficam mais rápidas, os riscos diminuem e
            sua equipe pode focar no que realmente importa.
          </p>
        </div>
        <div
          id="recursos"
          className="mt-14 grid divide-y divide-border border-y border-border md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4"
        >
          {features.map(({ icon: Icon, title, text }) => (
            <article key={title} className="group py-8 md:px-8 md:first:pl-0 md:last:pr-0">
              <div className="mb-7 grid size-11 place-items-center rounded-xl bg-mint text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon size={21} />
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="como-funciona" className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <SectionEyebrow>Como funciona</SectionEyebrow>
            <h2 className="text-balance text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl">
              Uma base sólida para
              <br />
              <span className="text-mint-strong">um trabalho mais leve.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-ink-muted">
              A GreenDocs combina organização, responsabilidade e inteligência para que cada pessoa encontre o
              contexto necessário antes de tomar uma decisão.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map(([number, title, text]) => (
              <article key={number} className="border-t border-ink-line pt-6">
                <span className="font-mono text-sm text-mint-strong">{number}</span>
                <h3 className="mt-10 text-xl font-semibold">{title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-6 text-ink-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pesquisa-ia" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <SectionEyebrow>Conhecimento acessível</SectionEyebrow>
            <h2 className="max-w-xl text-balance text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl">
              Pesquise com IA.
              <br />
              <span className="text-primary">Decida com contexto.</span>
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground">
              Em vez de abrir dezenas de páginas, pergunte diretamente ao chatbot da GreenDocs. Ele pesquisa nas
              fontes autorizadas, sintetiza os pontos principais e mostra de onde veio cada resposta.
            </p>
            <ul className="mt-7 grid gap-3 text-sm text-foreground">
              <li className="flex items-start gap-3">
                <CircleCheck size={18} className="mt-0.5 shrink-0 text-primary" />
                Respostas baseadas nos documentos da sua organização
              </li>
              <li className="flex items-start gap-3">
                <CircleCheck size={18} className="mt-0.5 shrink-0 text-primary" />
                Referências para validar cada informação
              </li>
              <li className="flex items-start gap-3">
                <CircleCheck size={18} className="mt-0.5 shrink-0 text-primary" />
                Acesso respeitando permissões e níveis de confidencialidade
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-muted/50 p-4 shadow-sm sm:p-6">
            <div className="flex items-center gap-3 border-b border-border pb-4">
              <div className="grid size-10 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Bot size={21} />
              </div>
              <div>
                <p className="font-semibold">Assistente GreenDocs</p>
                <p className="text-xs text-muted-foreground">Pesquisa segura no seu workspace</p>
              </div>
              <span className="ml-auto size-2 rounded-full bg-primary" />
            </div>
            <div className="grid gap-4 py-5 text-sm">
              <div className="ml-auto max-w-[82%] rounded-2xl rounded-br-sm bg-primary px-4 py-3 text-primary-foreground">
                Quando vence a licença de operação da unidade Campinas?
              </div>
              <div className="max-w-[88%] rounded-2xl rounded-bl-sm border border-border bg-background px-4 py-3 leading-6 text-foreground">
                <p>
                  Encontrei 2 documentos relevantes. A LO da unidade Campinas vence em 14/09/2026. Para a
                  renovação, são exigidos o relatório de monitoramento trimestral e a ART do responsável
                  técnico ambiental.
                </p>
                <p className="mt-3 text-xs font-medium text-primary">
                  Fontes: Licença de Operação · Condicionantes Ambientais · Relatório de Monitoramento
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-xs text-muted-foreground">
              <Sparkles size={14} className="text-primary" />
              Pergunte sobre licenças, prazos ou condicionantes
            </div>
          </div>
        </div>
      </section>

      <section id="kanban" className="border-y border-border bg-muted/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:px-8 lg:py-28">
          <div>
            <SectionEyebrow>Próximo módulo</SectionEyebrow>
            <h2 className="max-w-xl text-balance text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl">
              Transforme conhecimento em ação com o{' '}
              <span className="text-primary">Kanban GreenDocs.</span>
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground">
              Em breve, sua equipe poderá transformar documentos, pendências e decisões em um fluxo visual de
              trabalho. Organize prioridades, acompanhe responsáveis e mantenha cada iniciativa avançando no ritmo
              certo.
            </p>
            <div className="mt-7 grid gap-3 text-sm">
              <div className="flex items-center gap-3">
                <CircleCheck size={18} className="text-primary" />
                Visualize todas as tarefas em um só lugar
              </div>
              <div className="flex items-center gap-3">
                <CircleCheck size={18} className="text-primary" />
                Conecte cards a documentos e políticas
              </div>
              <div className="flex items-center gap-3">
                <CircleCheck size={18} className="text-primary" />
                Acompanhe prazos, owners e próximos passos
              </div>
            </div>
            <a
              href="#contato"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/15 transition hover:-translate-y-0.5"
            >
              Quero acompanhar essa novidade <ArrowRight size={17} />
            </a>
          </div>
          <div className="rounded-2xl border border-border bg-background p-4 shadow-xl sm:p-6">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-xl bg-mint text-primary">
                  <Columns3 size={21} />
                </div>
                <div>
                  <p className="font-semibold">Roadmap de documentação</p>
                  <p className="text-xs text-muted-foreground">Atualizado agora · 8 itens</p>
                </div>
              </div>
              <span className="rounded-full bg-mint px-2.5 py-1 text-xs font-semibold text-primary">
                Em planejamento
              </span>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl bg-muted/60 p-3">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-xs font-semibold">A fazer</p>
                  <span className="text-xs text-muted-foreground">3</span>
                </div>
                <div className="grid gap-2">
                  <div className="rounded-lg border border-border bg-background p-3 text-xs font-medium shadow-sm">
                    Revisar política de acessos
                  </div>
                  <div className="rounded-lg border border-border bg-background p-3 text-xs font-medium shadow-sm">
                    Mapear fontes críticas
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-mint/60 p-3">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-xs font-semibold">Em andamento</p>
                  <span className="text-xs text-muted-foreground">2</span>
                </div>
                <div className="grid gap-2">
                  <div className="rounded-lg border border-primary/15 bg-background p-3 text-xs font-medium shadow-sm">
                    Atualizar onboarding
                  </div>
                  <div className="rounded-lg border border-primary/15 bg-background p-3 text-xs font-medium shadow-sm">
                    Validar checklist
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-primary/10 p-3">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-xs font-semibold">Concluído</p>
                  <span className="text-xs text-muted-foreground">3</span>
                </div>
                <div className="grid gap-2">
                  <div className="rounded-lg border border-primary/15 bg-background p-3 text-xs font-medium shadow-sm">
                    Guia de segurança
                  </div>
                  <div className="rounded-lg border border-primary/15 bg-background p-3 text-xs font-medium shadow-sm">
                    Matriz de riscos
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contato"
        className="bg-[linear-gradient(135deg,var(--primary),var(--teal))] text-primary-foreground"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-primary-foreground/70">
              Fale com a gente
            </p>
            <h2 className="max-w-xl text-balance text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl">
              Vamos dar mais clareza ao seu conhecimento.
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-primary-foreground/75">
              Conte um pouco sobre o seu time e descubra como a GreenDocs pode simplificar sua rotina.
            </p>
            <a
              href="mailto:hello@greendocs.com"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold underline decoration-primary-foreground/40 underline-offset-4 hover:decoration-primary-foreground"
            >
              hello@greendocs.com <ArrowRight size={16} />
            </a>
          </div>
          <form onSubmit={handleContactSubmit} className="rounded-2xl bg-background p-6 text-foreground shadow-2xl sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium">
                Nome
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Seu nome"
                  className="h-11 rounded-lg border border-border bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium">
                E-mail
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="voce@empresa.com"
                  className="h-11 rounded-lg border border-border bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </label>
            </div>
            <label className="mt-5 grid gap-2 text-sm font-medium">
              Como podemos ajudar?
              <textarea
                required
                name="message"
                rows={4}
                placeholder="Fale sobre seu desafio..."
                className="resize-none rounded-lg border border-border bg-background px-3 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </label>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-5 text-muted-foreground">Responderemos em até um dia útil.</p>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                {contactSent ? 'Mensagem enviada' : 'Enviar mensagem'} <ArrowRight size={16} />
              </button>
            </div>
            {contactSent && (
              <p role="status" className="mt-4 text-sm font-medium text-primary">
                Recebemos sua mensagem. Em breve entraremos em contato.
              </p>
            )}
          </form>
        </div>
      </section>

      <footer className="bg-background">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <Brand />
          <div className="flex flex-wrap gap-5">
            <a href="#produto" className="hover:text-foreground">
              Produto
            </a>
            <a href="#como-funciona" className="hover:text-foreground">
              Como funciona
            </a>
            <a href="mailto:hello@greendocs.com" className="hover:text-foreground">
              Contato
            </a>
          </div>
          <p>© 2026 GreenDocs · SonaCloud</p>
        </div>
      </footer>
    </main>
  )
}
