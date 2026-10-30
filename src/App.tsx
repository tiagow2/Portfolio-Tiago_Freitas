import { useMemo, useState } from 'react';
import type { CSSProperties } from 'react';
import {
  profile,
  navLinks,
  skills,
  projects,
  activities,
  journey,
  categories,
} from './data';
import type { Skill, Project, Category } from './data';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('Todos');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'Todos') return projects;
    return projects.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);

  const groupedSkills = useMemo(() => {
    return skills.reduce<Record<Skill['group'], Skill[]>>(
      (acc, skill) => {
        acc[skill.group].push(skill);
        return acc;
      },
      {
        'Front-end': [],
        'Back-end': [],
        Dados: [],
        DevOps: [],
        Ferramentas: [],
      },
    );
  }, []);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <div className="app-shell cyberpunk-theme">
      <AnimatedBackground />
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} closeMenu={closeMenu} />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Stack groupedSkills={groupedSkills} />
        <Projects
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          filteredProjects={filteredProjects}
        />
        <Activity />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function AnimatedBackground() {
  return (
    <div className="background" aria-hidden="true">
      <span className="orb orb-cyber-yellow" />
      <span className="orb orb-cyber-pink" />
      <span className="orb orb-cyber-cyan" />
      <span className="grid-pattern" />
      <span className="scanlines" />
      <span className="noise" />
    </div>
  );
}

function Header({
  isMenuOpen,
  setIsMenuOpen,
  closeMenu,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  closeMenu: () => void;
}) {
  return (
    <header className="site-header cyberpunk-hud-header">
      <a href="#inicio" className="brand" onClick={closeMenu} aria-label="Ir para o início">
        <span className="brand-mark">
          <img src="/david-edgerunners.png" alt="Avatar David Martinez" className="brand-avatar-img" />
        </span>
        <span className="brand-info">
          <strong>{profile.name}</strong>
          <small>
            <span className="hud-status-dot" /> NETRUNNER // FULL STACK
          </small>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="Navegação principal">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            <span className="nav-prefix">//</span> {link.label}
          </a>
        ))}
      </nav>

      <button
        className="menu-button"
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
      >
        {isMenuOpen ? '[ FECHAR ]' : '[ MENU ]'}
      </button>

      {isMenuOpen && (
        <nav id="mobile-menu" className="mobile-nav" aria-label="Navegação mobile">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              <span className="nav-prefix">//</span> {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="hero section">
      <div className="hero-copy fade-up">
        <div className="eyebrow-container">
          <span className="eyebrow">
            <span className="badge-pulse" /> // DISPONÍVEL PARA ESTÁGIO & PROJETOS
          </span>
          <span className="hud-code-tag">NC_NET::2077</span>
        </div>

        <h1 className="glitch-header">
          FULL STACK EM FORMAÇÃO COM FOCO EM <span className="cyber-glow-yellow">SOLUÇÕES COMPLETAS</span> E <span className="cyber-glow-pink">BEM ESTRUTURADAS.</span>
        </h1>
        
        <p className="hero-summary">{profile.summary}</p>

        <div className="hero-actions">
          <a className="button primary cyber-button" href="#projetos">
            <span className="btn-glitch" />
            VER PROJETOS →
          </a>
          <a className="button secondary cyber-button" href={`mailto:${profile.email}`}>
            ENTRAR EM CONTATO
          </a>
          <a
            className="button ghost cyber-button"
            href="/Curriculo_Tiago_Freitas_Dev.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            BAIXAR CURRÍCULO [PDF]
          </a>
        </div>
      </div>

      <aside className="hero-panel fade-up delay-1" aria-label="Resumo do perfil">
        <div className="terminal-card cyber-terminal">
          <div className="terminal-top">
            <div className="terminal-lights">
              <span />
              <span />
              <span />
            </div>
            <span className="terminal-label">SANDEVISTAN_LINK // NEURAL_TERMINAL</span>
          </div>
          <code>
            <span className="muted">// INICIALIZANDO PROTOCOLO NETRUNNER</span>
            <br />
            <span className="cyan">const</span> <span className="yellow">netrunner</span> = {'{'}
            <br />
            &nbsp;&nbsp;agente: <strong className="white">'{profile.name}'</strong>,
            <br />
            &nbsp;&nbsp;formacao: <strong className="pink">'DSM - FATEC SJC'</strong>,
            <br />
            &nbsp;&nbsp;momento: <strong className="yellow">'5º semestre'</strong>,
            <br />
            &nbsp;&nbsp;especializacao: <strong className="cyan">'Full Stack'</strong>,
            <br />
            &nbsp;&nbsp;cyberware: [
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<strong className="cyan">'React'</strong>, <strong className="yellow">'TypeScript'</strong>, <strong className="green">'Node.js'</strong>, <strong className="pink">'SQL'</strong>
            <br />
            &nbsp;&nbsp;],
            <br />
            &nbsp;&nbsp;status: <strong className="green">'SISTEMA OPERACIONAL [PRONTO]'</strong>
            <br />
            {'}'};
          </code>
        </div>

        <div className="profile-card glass-card cyber-profile-card">
          <div className="profile-avatar cyber-avatar">
            <span>{profile.initials}</span>
            <span className="avatar-corner-tr" />
            <span className="avatar-corner-bl" />
          </div>
          <div className="profile-details">
            <span className="profile-id-tag">OPERATIVO // ID-TF2077</span>
            <p className="profile-role">{profile.role}</p>
            <p className="profile-location">
              <span className="map-pin">⌖</span> {profile.location}
            </p>
          </div>
        </div>

        <div className="tech-orbit cyber-orbit" aria-hidden="true">
          <span>REACT</span>
          <span>TS</span>
          <span>NODE</span>
          <span>SQL</span>
          <span>JAVA</span>
          <span>PYTHON</span>
        </div>
      </aside>
    </section>
  );
}

function Highlights() {
  const highlights = [
    { value: '5º', label: 'SEMESTRE EM DSM NA FATEC', tag: 'ACADÊMICO' },
    { value: '7+', label: 'PROJETOS COMPLETOS', tag: 'PORTFÓLIO' },
    { value: 'FULL', label: 'FRONT-END, BACK-END & DADOS', tag: 'STACK' },
    { value: 'SCRUM', label: 'SPRINTS, JIRA & ENTREGAS', tag: 'METODOLOGIA' },
  ];

  return (
    <section className="highlights" aria-label="Destaques profissionais">
      {highlights.map((item) => (
        <article className="highlight-card glass-card cyber-highlight" key={item.label}>
          <div className="highlight-top-tag">{item.tag}</div>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
          <span className="corner-accent" />
        </article>
      ))}
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="section split-section">
      <div className="section-title sticky-title">
        <span className="section-kicker">// 01. DIRETIVA DE PERFIL</span>
        <h2>Desenvolvedor em formação, com base técnica e prática em projetos reais.</h2>
      </div>
      <div className="copy-block glass-card cyber-block">
        <div className="cyber-corner-decor" />
        <p>
          Sou Técnico em Desenvolvimento de Sistemas e atualmente curso Desenvolvimento de Software Multiplataforma na
          FATEC São José dos Campos. Durante a graduação, venho desenvolvendo projetos práticos com foco em aplicações
          web, APIs, dashboards, banco de dados e integração entre front-end e back-end.
        </p>
        <p>
          Tenho experiência com construção de CRUDs, modelagem de banco de dados, SQL avançado, criação de interfaces
          responsivas e desenvolvimento de sistemas completos. Também já trabalhei com APIs de semestre, dashboards,
          aplicações mobile e projetos para empresas parceiras como Helpnei, GSW e Tecsus.
        </p>
        <p>
          Busco evoluir como desenvolvedor full stack, criando soluções eficientes, bem organizadas e úteis para o
          usuário final. Valorizo comunicação, colaboração, autonomia, documentação e melhoria contínua durante todo o
          processo de desenvolvimento.
        </p>
        <div className="about-list cyber-tags">
          <span>[ INTERFACES RESPONSIVAS ]</span>
          <span>[ APIS REST ]</span>
          <span>[ BANCO DE DADOS ]</span>
          <span>[ DOCUMENTAÇÃO ]</span>
          <span>[ SCRUM / KANBAN ]</span>
          <span>[ UI / UX DESIGN ]</span>
        </div>
      </div>
    </section>
  );
}

function Stack({ groupedSkills }: { groupedSkills: Record<Skill['group'], Skill[]> }) {
  return (
    <section id="stack" className="section">
      <div className="section-heading">
        <span className="section-kicker">// 02. CYBERWARE & HABILIDADES</span>
        <h2>Tecnologias e ferramentas</h2>
        <p>
          Conjunto de tecnologias utilizadas em projetos acadêmicos, pessoais e integradores, organizadas por área de
          atuação para facilitar a leitura do perfil técnico.
        </p>
      </div>

      <div className="stack-grid">
        {Object.entries(groupedSkills).map(([group, items]) => (
          <article className="stack-card glass-card cyber-stack-card" key={group}>
            <div className="stack-card-header">
              <h3>// {group.toUpperCase()}</h3>
              <span className="skill-count">{items.length} SKILLS</span>
            </div>
            <div className="skill-list">
              {items.map((skill) => (
                <span className={`skill-badge level-${skill.level.toLowerCase()}`} key={skill.name}>
                  {skill.name}
                  <small>{skill.level}</small>
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects({
  selectedCategory,
  setSelectedCategory,
  filteredProjects,
}: {
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
  filteredProjects: Project[];
}) {
  return (
    <section id="projetos" className="section">
      <div className="section-heading projects-heading">
        <div>
          <span className="section-kicker">// 03. REGISTRO DE MISSÕES</span>
          <h2>Projetos com problema, solução e contribuição</h2>
          <p>
            Seleção de projetos que mostram evolução técnica, trabalho em equipe, integração entre tecnologias e
            capacidade de transformar requisitos em produtos funcionais.
          </p>
        </div>
        <div className="filter-tabs cyber-tabs" aria-label="Filtrar projetos por categoria">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={selectedCategory === category ? 'active' : ''}
              aria-pressed={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            >
              [ {category.toUpperCase()} ]
            </button>
          ))}
        </div>
      </div>

      <div className="project-grid">
        {filteredProjects.map((project, index) => (
          <article
            className="project-card glass-card cyber-project-card"
            key={project.id}
            style={{ '--delay': `${index * 80}ms` } as CSSProperties}
          >
            <div className="project-top-line" />
            <div className="project-meta">
              <span className="project-period">// {project.period.toUpperCase()}</span>
              <strong className={`status-tag status-${project.status.toLowerCase().replace(/\s+/g, '-')}`}>
                {project.status === 'Em produção' && <span className="status-live-dot" />}
                [ {project.status.toUpperCase()} ]
              </strong>
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>

            <div className="project-detail">
              <strong className="detail-label">// PROBLEMA</strong>
              <span>{project.problem}</span>
            </div>

            <div className="project-detail">
              <strong className="detail-label">// SOLUÇÃO</strong>
              <span>{project.solution}</span>
            </div>

            <div className="project-detail">
              <strong className="detail-label">// MINHA ATUAÇÃO</strong>
              <span>{project.role}</span>
            </div>

            <div className="project-detail">
              <strong className="detail-label">// IMPACTO</strong>
              <span>{project.impact}</span>
            </div>

            {project.publication && (
              <div className="project-detail project-publication cyber-publication">
                <strong className="detail-label-pub">◆ PUBLICAÇÃO CIENTÍFICA</strong>
                <span>{project.publication}</span>
              </div>
            )}

            <div className="project-tech">
              {project.tech.map((tech) => (
                <span key={tech} className="cyber-tech-chip">
                  {tech}
                </span>
              ))}
            </div>

            {project.link ? (
              <a className="project-link cyber-link" href={project.link} target="_blank" rel="noreferrer">
                <span>VER PROJETO</span> <span className="link-arrow">→</span>
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

function Activity() {
  return (
    <section className="section activity-section">
      <div className="section-heading compact">
        <span className="section-kicker">// 04. EXECUÇÃO EM TEMPO REAL</span>
        <h2>Foco atual e evolução profissional</h2>
      </div>
      <div className="activity-grid">
        {activities.map((card) => (
          <article className="activity-card glass-card cyber-activity-card" key={card.title}>
            <h3>// {card.title.toUpperCase()}</h3>
            <ul>
              {card.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="jornada" className="section split-section journey-section">
      <div className="section-title sticky-title">
        <span className="section-kicker">// 05. TRILHA DE PROGRESSÃO</span>
        <h2>Formação, prática e evolução em projetos.</h2>
      </div>
      <div className="journey-list">
        {journey.map((item, index) => (
          <article className="journey-card glass-card cyber-journey-card" key={item.title}>
            <span className="journey-index">0{index + 1}</span>
            <div>
              <h3>{item.title}</h3>
              <strong className="journey-subtitle">{item.subtitle}</strong>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="section contact-section">
      <div className="contact-card glass-card cyber-contact-card">
        <span className="section-kicker">// 06. UPLINK // TRANSMISSÃO DIRETA</span>
        <h2>Vamos conversar sobre uma oportunidade?</h2>
        <p>
          Estou aberto a estágio, projetos e oportunidades onde eu possa contribuir com desenvolvimento de software,
          aprender com a equipe e gerar impacto real em produtos de tecnologia.
        </p>
        <div className="contact-actions">
          <a className="button primary cyber-button" href={`mailto:${profile.email}`}>
            ENVIAR E-MAIL
          </a>
          <a className="button secondary cyber-button" href={profile.linkedin} target="_blank" rel="noreferrer">
            LINKEDIN ↗
          </a>
          <a className="button secondary cyber-button" href={profile.github} target="_blank" rel="noreferrer">
            GITHUB ↗
          </a>
          <a
            className="button ghost cyber-button"
            href="/Curriculo_Tiago_Freitas_Dev.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            BAIXAR CURRÍCULO [PDF]
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer cyber-footer">
      <span>
        [TF] © {new Date().getFullYear()} {profile.name} // NIGHT CITY EDITION
      </span>
      <span>DESENVOLVEDOR FULL STACK EM FORMAÇÃO — SÃO JOSÉ DOS CAMPOS, SP</span>
    </footer>
  );
}

export default App;
