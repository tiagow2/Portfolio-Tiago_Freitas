export type Skill = {
  name: string;
  group: 'Front-end' | 'Back-end' | 'Dados' | 'DevOps' | 'Ferramentas';
  level: 'Autonomia' | 'Projetos' | 'Estudo';
};

export type Project = {
  id: string;
  title: string;
  category: 'Full Stack' | 'Back-end' | 'Front-end' | 'Mobile' | 'Dados' | 'IoT';
  period: string;
  status: 'Concluído' | 'Em desenvolvimento' | 'Acadêmico' | 'Em produção';
  description: string;
  problem: string;
  solution: string;
  role: string;
  impact: string;
  tech: string[];
  link?: string;
  publication?: string;
};

export type ActivityCard = {
  title: string;
  items: string[];
};

export type JourneyItem = {
  title: string;
  subtitle: string;
  text: string;
};

export const profile = {
  name: 'Tiago Freitas',
  initials: 'TF',
  role: 'Desenvolvedor de Software em Formação | Full Stack',
  location: 'São José dos Campos, SP — Brasil',
  email: 'tsfreitasw@gmail.com',
  github: 'https://github.com/tiagow2',
  linkedin: 'https://www.linkedin.com/in/tiago-freitas-74730b2a9',
  headline: 'Desenvolvo soluções web, mobile e APIs com foco em organização, dados e experiência do usuário.',
  summary:
    'Técnico em Desenvolvimento de Sistemas e estudante de Desenvolvimento de Software Multiplataforma na FATEC São José dos Campos. Tenho prática com projetos full stack, dashboards, APIs, bancos de dados e desenvolvimento em equipe com metodologias ágeis.',
};

export const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#stack', label: 'Stack' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#jornada', label: 'Jornada' },
  { href: '#contato', label: 'Contato' },
];

export const skills: Skill[] = [
  { name: 'React', group: 'Front-end', level: 'Autonomia' },
  { name: 'TypeScript', group: 'Front-end', level: 'Autonomia' },
  { name: 'JavaScript', group: 'Front-end', level: 'Autonomia' },
  { name: 'HTML5', group: 'Front-end', level: 'Autonomia' },
  { name: 'CSS3', group: 'Front-end', level: 'Autonomia' },
  { name: 'Tailwind CSS', group: 'Front-end', level: 'Projetos' },
  { name: 'Bootstrap', group: 'Front-end', level: 'Projetos' },
  { name: 'React Native', group: 'Front-end', level: 'Projetos' },
  { name: 'Expo', group: 'Front-end', level: 'Projetos' },
  { name: 'Next.js', group: 'Front-end', level: 'Estudo' },

  { name: 'Node.js', group: 'Back-end', level: 'Projetos' },
  { name: 'Express', group: 'Back-end', level: 'Projetos' },
  { name: 'Python', group: 'Back-end', level: 'Autonomia' },
  { name: 'Flask', group: 'Back-end', level: 'Autonomia' },
  { name: 'Java', group: 'Back-end', level: 'Projetos' },
  { name: 'Spring Boot', group: 'Back-end', level: 'Projetos' },
  { name: 'APIs REST', group: 'Back-end', level: 'Autonomia' },
  { name: 'JWT', group: 'Back-end', level: 'Projetos' },
  { name: 'MQTT', group: 'Back-end', level: 'Projetos' },
  { name: 'C/C++', group: 'Back-end', level: 'Projetos' },

  { name: 'MySQL', group: 'Dados', level: 'Autonomia' },
  { name: 'PostgreSQL', group: 'Dados', level: 'Projetos' },
  { name: 'MongoDB', group: 'Dados', level: 'Projetos' },
  { name: 'Redis', group: 'Dados', level: 'Projetos' },
  { name: 'SQL Avançado', group: 'Dados', level: 'Autonomia' },
  { name: 'JSONB', group: 'Dados', level: 'Projetos' },
  { name: 'TypeORM', group: 'Dados', level: 'Projetos' },

  { name: 'Git', group: 'DevOps', level: 'Autonomia' },
  { name: 'GitHub', group: 'DevOps', level: 'Autonomia' },
  { name: 'GitLab', group: 'DevOps', level: 'Projetos' },
  { name: 'GitLab CI/CD', group: 'DevOps', level: 'Projetos' },
  { name: 'Docker', group: 'DevOps', level: 'Projetos' },
  { name: 'AWS', group: 'DevOps', level: 'Estudo' },
  { name: 'Vercel', group: 'DevOps', level: 'Projetos' },
  { name: 'Railway', group: 'DevOps', level: 'Projetos' },

  { name: 'Figma', group: 'Ferramentas', level: 'Autonomia' },
  { name: 'Swagger', group: 'Ferramentas', level: 'Projetos' },
  { name: 'Jest', group: 'Ferramentas', level: 'Estudo' },
  { name: 'Postman', group: 'Ferramentas', level: 'Autonomia' },
  { name: 'Insomnia', group: 'Ferramentas', level: 'Autonomia' },
  { name: 'Jira', group: 'Ferramentas', level: 'Projetos' },
  { name: 'n8n', group: 'Ferramentas', level: 'Estudo' },
];

export const projects: Project[] = [
  {
    id: 'motus-sports',
    title: 'MOTUS Sports',
    category: 'Back-end',
    period: 'Experiência Profissional',
    status: 'Em produção',
    description:
      'Sporttech focada em saúde, performance e prevenção de lesões por meio de dados, tecnologia e Inteligência Artificial.',
    problem:
      'Clubes, atletas e equipes técnicas lidam com informações importantes de forma descentralizada, dificultando o acompanhamento de lesões, avaliações, treinos, cargas, recuperação e tomada de decisão.',
    solution:
      'A MOTUS centraliza dados esportivos em uma plataforma voltada para gestão de clubes e instituições esportivas, oferecendo recursos para organização de atletas, equipes, avaliações, treinos, partidas, alertas e prevenção de lesões com apoio de dados e IA.',
    role:
      'Co-fundador, com atuação na codificação e estruturação da plataforma (back-end, modelagem de dados e autenticação), documentação técnica, levantamento de requisitos e regras de negócio, além de participação no programa de aceleração Sebrae Supernova.',
    impact:
      'Construção de arquitetura de APIs, modelagem de dados relacional, autenticação segura e evolução de uma solução inovadora voltada ao ecossistema esportivo.',
    publication:
      'Coautor do artigo "Impacto da Plataforma Motus no Monitoramento Multidimensional para Prevenção de Lesões e Otimização da Performance de Atletas de Futebol", aprovado para apresentação no 3º Congresso Científico Tecnológico, vinculado ao 4º Science & Business Connection (19 e 20/05/2026, São José dos Campos).',
    tech: [
      'Node.js',
      'TypeScript',
      'TypeORM',
      'PostgreSQL',
      'JWT',
      'Swagger',
      'APIs REST',
      'Inteligência Artificial',
      'Gestão Esportiva',
      'Sportstech',
    ],
    link: 'https://motussports.com.br',
  },
  {
    id: 'tecsus-api-4',
    title: 'Tecsus — Sistema de Coleta de Dados Meteorológicos',
    category: 'IoT',
    period: 'API FATEC | 4º Semestre',
    status: 'Concluído',
    description:
      'Sistema IoT para coleta, processamento e visualização de dados de estações meteorológicas de baixo custo, com foco em ONGs e associações de bairro.',
    problem:
      'Comunidades remotas precisam acompanhar microclimas, chuva, vento e temperatura com uma solução acessível, estável e de fácil manutenção.',
    solution:
      'A plataforma une datalogger, comunicação MQTT, serviços backend, banco de dados híbrido e dashboards para monitoramento, relatórios e alertas climáticos.',
    role:
      'Dev Team, com atuação em desenvolvimento, documentação, rastreabilidade de tarefas e integração do fluxo de trabalho com GitLab/Jira.',
    impact:
      'Contribuição em um ecossistema ponta a ponta que conecta hardware, dados, APIs, dashboards e práticas de CI/CD.',
    tech: [
      'React',
      'TypeScript',
      'Node.js',
      'MQTT',
      'PostgreSQL',
      'MongoDB',
      'C/C++',
      'Docker',
      'AWS',
      'GitLab CI/CD',
      'Jira',
    ],
    link: 'https://gitlab.com/the-devs6675810/api-4-sem-tecsus',
  },
  {
    id: 'cofre-digital',
    title: 'Cofre Digital',
    category: 'Mobile',
    period: 'Projeto acadêmico',
    status: 'Acadêmico',
    description:
      'Aplicativo de finanças pessoais desenvolvido para apresentação acadêmica, com controle de saldo, despesas, cartões, faturas e porcentagem de limite utilizado.',
    problem:
      'Usuários precisam registrar gastos com clareza, separando movimentações reais de saldo das despesas feitas no cartão.',
    solution:
      'O app organiza lançamentos por usuário, exibe extrato, cartões, fatura atual e limite usado, mantendo uma experiência simples e visual.',
    role: 'Desenvolvedor mobile/full stack',
    impact:
      'Melhoria da usabilidade, organização das rotas, visual mais limpo e regra financeira correta para despesas de cartão.',
    tech: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'PostgreSQL', 'UX/UI'],
    link: profile.github,
  },
  {
    id: 'gsw-task-manager',
    title: 'GSW — Gerenciador de Tarefas',
    category: 'Full Stack',
    period: 'API FATEC | 3º Semestre',
    status: 'Concluído',
    description:
      'Plataforma web para centralizar tarefas internas, responsáveis, prazos, anexos e atualizações em tempo real.',
    problem:
      'A empresa enfrentava falhas de comunicação e atrasos por depender de mensagens, planilhas e controles espalhados.',
    solution:
      'A equipe desenvolveu um sistema de gestão de tarefas com CRUD, atribuição de usuários, anexos e arquitetura baseada em microserviços.',
    role: 'Scrum Master e colaborador técnico',
    impact:
      'Facilitei cerimônias Scrum, apoiei a remoção de impedimentos e colaborei na integração entre front-end, back-end e microserviços.',
    tech: ['React', 'TypeScript', 'Java', 'Spring Boot', 'MongoDB', 'Git', 'Jira'],
    link: 'https://github.com/the-devs-department/GSW-2025.2-3Sem',
  },
  {
    id: 'helpnei-dashboard',
    title: 'Helpnei — Dashboard Estratégico',
    category: 'Front-end',
    period: 'API FATEC | 2º Semestre',
    status: 'Concluído',
    description:
      'Dashboard interativo para empresas parceiras acompanharem lojas criadas, usuários impactados, cidades alcançadas e patrocinados.',
    problem:
      'As métricas da plataforma estavam dispersas, dificultando análise de crescimento, acompanhamento de impacto e decisões estratégicas.',
    solution:
      'Foram criados cards, gráficos, mapa interativo e telas informativas para transformar dados em uma visualização clara e objetiva.',
    role: 'Desenvolvedor front-end',
    impact:
      'Construí componentes em React/TypeScript, ajudei no mapa interativo e trabalhei na integração das telas com as rotas da aplicação.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'HTML5', 'Git'],
    link: 'https://github.com/the-devs-department/HELPNEI-2025.1-2Sem',
  },
  {
    id: 'vereadores-sjc',
    title: 'Transparência Legislativa SJC',
    category: 'Dados',
    period: 'API FATEC | 1º Semestre',
    status: 'Concluído',
    description:
      'Plataforma web para consulta de indicadores sobre vereadores de São José dos Campos, incluindo presença, votações e atuação em comissões.',
    problem:
      'As informações legislativas estavam distribuídas em documentos e portais difíceis de navegar, reduzindo a transparência para os cidadãos.',
    solution:
      'A equipe criou uma interface web com dados organizados e raspagem automática para manter as informações atualizadas.',
    role: 'Dev Team com foco em front-end, scraping e integração de dados',
    impact:
      'Estruturei páginas responsivas, desenvolvi coleta automatizada de dados e auxiliei na integração com Flask e MySQL.',
    tech: ['HTML5', 'CSS3', 'Python', 'Flask', 'MySQL', 'Web Scraping'],
    link: 'https://github.com/nicolygz/the-devs-department',
  },
  {
    id: 'petlovers',
    title: 'PetLovers',
    category: 'Full Stack',
    period: 'Projeto acadêmico',
    status: 'Acadêmico',
    description:
      'Sistema para pet shops e clínicas veterinárias com gerenciamento de clientes, pets, produtos, serviços e relatórios.',
    problem:
      'Pet shops precisam controlar clientes, animais, consumo e serviços de forma organizada para melhorar a gestão interna.',
    solution:
      'O sistema trabalha CRUDs, formulários, rotas, listagens e relatórios para apoiar o controle das operações.',
    role: 'Desenvolvedor de interface e lógica de negócio',
    impact:
      'Prática de componentização, rotas, formulários, consumo de API e separação das responsabilidades do sistema.',
    tech: ['React', 'TypeScript', 'Bootstrap', 'Java', 'REST API'],
    // Preencha com o link do repositório específico quando disponível. O botão "Ver projeto" só aparece quando houver link.
  },
];

export const activities: ActivityCard[] = [
  {
    title: 'Atuação atual',
    items: [
      '5º semestre de Desenvolvimento de Software Multiplataforma',
      'Co-fundador na MOTUS Sports (estruturação da plataforma, back-end e aceleração Sebrae Supernova)',
      'Estudo constante em arquitetura full stack e boas práticas de entrega',
    ],
  },
  {
    title: 'Forma de trabalho',
    items: [
      'Organização de backlog, sprints e tarefas com Jira',
      'Versionamento com Git, GitHub, GitLab e padrões de commit',
      'Comunicação clara, colaboração e foco em evolução contínua',
    ],
  },
  {
    title: 'Interesses profissionais',
    items: [
      'Desenvolvimento front-end, back-end ou full stack',
      'APIs, dashboards, produtos digitais e integração de sistemas',
      'Estágio ou oportunidade inicial para crescer com projetos reais',
    ],
  },
];

export const journey: JourneyItem[] = [
  {
    title: 'FATEC São José dos Campos',
    subtitle: 'Desenvolvimento de Software Multiplataforma',
    text: 'Formação com foco em aplicações web, mobile, bancos de dados, engenharia de software, APIs e projetos integradores com clientes reais.',
  },
  {
    title: 'ETEC Profª Ilza Nascimento Pintus',
    subtitle: 'Técnico em Desenvolvimento de Sistemas',
    text: 'Base técnica em lógica de programação, desenvolvimento web, banco de dados, documentação, prototipação e entrega de sistemas.',
  },
  {
    title: 'Projetos integradores & Produção Científica',
    subtitle: 'APIs acadêmicas, Scrum, Git e publicação em congresso tecnológico',
    text: 'Experiência prática com sprints, divisão de tarefas, integração front-end/back-end, documentação técnica, apresentação de entregas e artigo científico aprovado.',
  },
];

export const categories = [
  'Todos',
  'Full Stack',
  'Back-end',
  'Front-end',
  'Mobile',
  'Dados',
  'IoT',
] as const;

export type Category = (typeof categories)[number];
