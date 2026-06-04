const directions = [
  {
    id: "english",
    title: "Английский язык",
    icon: "languages",
    color: "green",
    description:
      "Курсы для развития speaking, writing, reading и listening. Практика, проверка заданий, прогресс по навыкам и кейсы для создания языкового портфолио.",
  },
  {
    id: "blender",
    title: "Blender и 3D-дизайн",
    icon: "box",
    color: "cyan",
    description:
      "Курсы по моделированию, материалам, свету, рендеру и анимации. После курса — готовые 3D-проекты для портфолио.",
  },
  {
    id: "ai",
    title: "AI / NLP / Python",
    icon: "brain-circuit",
    color: "violet",
    description:
      "Курсы по Python, анализу текстов, нейросетям и AI-инструментам. После курса — GitHub-портфолио, мини-проекты и кейсы для резюме.",
  },
];

const courses = [
  {
    id: "english-zero",
    title: "Английский с нуля",
    direction: "English",
    filter: "English",
    level: "Beginner",
    duration: "8 недель",
    summary: "База грамматики, произношения, чтения и простых диалогов через ежедневную практику.",
    result: "Прогресс по языковым навыкам, проверенные задания и сертификат.",
    audience: "Новичкам, которые хотят уверенно стартовать без перегруза теорией.",
    learn: ["строить базовые фразы", "понимать короткие тексты и аудио", "вести простые диалоги", "сдавать письменные задания на проверку"],
    modules: ["Start Pack", "Everyday Grammar", "Listening Lab", "Speaking Practice"],
    teacher: "Елена Морозова, преподаватель английского и методист EdTech",
  },
  {
    id: "english-it",
    title: "Английский для IT",
    direction: "English",
    filter: "English",
    level: "Intermediate",
    duration: "6 недель",
    summary: "Лексика разработки, митингов, документации и технических интервью.",
    result: "Проверенные письменные задания, результаты тестов и сертификат.",
    audience: "Разработчикам, аналитикам, дизайнерам и начинающим IT-специалистам.",
    learn: ["объяснять технические задачи", "читать документацию", "писать рабочие сообщения", "готовиться к интервью"],
    modules: ["Tech Vocabulary", "Meetings", "Documentation", "Interview Sprint"],
    teacher: "Антон Ли, English for Tech mentor",
  },
  {
    id: "spoken-english",
    title: "Разговорный английский",
    direction: "English",
    filter: "English",
    level: "Pre-Intermediate",
    duration: "7 недель",
    summary: "Практика речи, диалоги, сценарии общения и трекинг прогресса по навыкам.",
    result: "Прогресс по языковым навыкам, проверенные задания и сертификат.",
    audience: "Тем, кто знает базу, но хочет говорить увереннее.",
    learn: ["поддерживать разговор", "формулировать мнение", "понимать речь на слух", "получать обратную связь"],
    modules: ["Warm-up Dialogues", "Opinion Builder", "Real Scenarios", "Final Speaking Test"],
    teacher: "Елена Морозова, преподаватель английского и методист EdTech",
  },
  {
    id: "academic-writing",
    title: "Академическое письмо",
    direction: "English",
    filter: "English",
    level: "Upper-Intermediate",
    duration: "5 недель",
    summary: "Структура эссе, аргументация, источники, стиль и детальная проверка работ.",
    result: "Проверенные письменные задания, результаты тестов и сертификат.",
    audience: "Студентам, исследователям и тем, кто готовится к международным программам.",
    learn: ["строить аргументацию", "писать эссе", "оформлять источники", "улучшать академический стиль"],
    modules: ["Essay Structure", "Argumentation", "Sources", "Revision Studio"],
    teacher: "Мария Вонг, academic writing tutor",
  },
  {
    id: "blender-zero",
    title: "Blender с нуля",
    direction: "Blender",
    filter: "Blender",
    level: "Beginner",
    duration: "9 недель",
    summary: "Интерфейс, моделирование, материалы, свет и первый законченный 3D-проект.",
    result: "После курса вы создадите 3D-проект, который можно добавить в портфолио.",
    audience: "Новичкам в 3D, дизайнерам и креаторам, которым нужен практический старт.",
    learn: ["работать в Blender", "создавать модели", "настраивать материалы", "собирать финальный рендер"],
    modules: ["Interface Core", "Modeling Base", "Materials", "Portfolio Render"],
    teacher: "Кирилл Рэй, 3D artist и motion designer",
  },
  {
    id: "3d-modeling",
    title: "Основы 3D-моделирования",
    direction: "Blender",
    filter: "Blender",
    level: "Beginner+",
    duration: "6 недель",
    summary: "Геометрия, модификаторы, чистая сетка и практические модели для сцены.",
    result: "После курса вы создадите 3D-проект, который можно добавить в портфолио.",
    audience: "Тем, кто хочет системно прокачать моделирование.",
    learn: ["строить корректную сетку", "использовать модификаторы", "создавать props", "готовить модель к рендеру"],
    modules: ["Mesh Logic", "Modifiers", "Hard Surface", "Scene Assembly"],
    teacher: "Кирилл Рэй, 3D artist и motion designer",
  },
  {
    id: "render-light",
    title: "Материалы, свет и рендер",
    direction: "Blender",
    filter: "Blender",
    level: "Intermediate",
    duration: "5 недель",
    summary: "Шейдеры, композиция света, камера, Cycles/Eevee и финальная презентация проекта.",
    result: "После курса вы создадите 3D-проект, который можно добавить в портфолио.",
    audience: "3D-авторам, которые хотят улучшить визуальное качество работ.",
    learn: ["создавать материалы", "ставить свет", "работать с камерой", "рендерить презентационные кадры"],
    modules: ["Shader Lab", "Light Design", "Camera", "Final Render"],
    teacher: "Ника Сол, lighting artist",
  },
  {
    id: "blender-animation",
    title: "Анимация в Blender",
    direction: "Blender",
    filter: "Blender",
    level: "Intermediate",
    duration: "7 недель",
    summary: "Ключевые кадры, графы движения, простая риг-система и короткая анимация.",
    result: "После курса вы создадите 3D-проект, который можно добавить в портфолио.",
    audience: "Тем, кто хочет добавить движение в 3D-портфолио.",
    learn: ["анимировать объекты", "работать с таймлайном", "настраивать камеры", "собирать короткий ролик"],
    modules: ["Timing", "Graph Editor", "Rig Basics", "Motion Project"],
    teacher: "Ника Сол, lighting artist",
  },
  {
    id: "python-zero",
    title: "Python с нуля",
    direction: "AI / NLP",
    filter: "AI / NLP",
    level: "Beginner",
    duration: "8 недель",
    summary: "Синтаксис, функции, данные, notebooks и первые автоматизации.",
    result: "После курса у вас будут Colab-блокноты, мини-проекты и практические кейсы для резюме.",
    audience: "Новичкам в программировании и тем, кто хочет перейти к AI-практике.",
    learn: ["писать Python-код", "работать с данными", "использовать Colab", "создавать мини-проекты"],
    modules: ["Python Core", "Data Structures", "Notebook Practice", "Automation Case"],
    teacher: "Илья Ким, Python и NLP engineer",
  },
  {
    id: "nlp-basics",
    title: "Основы NLP",
    direction: "AI / NLP",
    filter: "AI / NLP",
    level: "Intermediate",
    duration: "6 недель",
    summary: "Токенизация, эмбеддинги, классификация текстов и практические NLP-пайплайны.",
    result: "После курса у вас будут Colab-блокноты, мини-проекты и практические кейсы для резюме.",
    audience: "Тем, кто знает базовый Python и хочет анализировать тексты.",
    learn: ["готовить текстовые данные", "строить классификаторы", "оценивать качество моделей", "оформлять проект в GitHub"],
    modules: ["Text Prep", "Embeddings", "Classification", "NLP Case"],
    teacher: "Илья Ким, Python и NLP engineer",
  },
  {
    id: "transformers-llm",
    title: "Transformers и LLM",
    direction: "AI / NLP",
    filter: "AI / NLP",
    level: "Advanced",
    duration: "7 недель",
    summary: "Архитектура transformers, prompt-подходы, RAG-идея и LLM-прототипы.",
    result: "После курса у вас будут Colab-блокноты, мини-проекты и практические кейсы для резюме.",
    audience: "Разработчикам, аналитикам и исследователям с базой Python/NLP.",
    learn: ["понимать transformers", "собирать LLM-прототипы", "проектировать prompts", "документировать кейсы"],
    modules: ["Transformer Core", "Prompt Systems", "RAG Intro", "LLM Prototype"],
    teacher: "Дина Назарова, AI product engineer",
  },
  {
    id: "ai-automation",
    title: "AI-сервисы для автоматизации задач",
    direction: "AI / NLP",
    filter: "AI / NLP",
    level: "Beginner+",
    duration: "4 недели",
    summary: "AI-инструменты, сценарии автоматизации, интеграции и финальный рабочий процесс.",
    result: "После курса у вас будут Colab-блокноты, мини-проекты и практические кейсы для резюме.",
    audience: "Специалистам, которым нужны прикладные AI-процессы без долгого входа.",
    learn: ["выбирать AI-инструменты", "создавать сценарии", "автоматизировать повторяющиеся задачи", "оценивать результат"],
    modules: ["AI Toolkit", "Workflow Design", "Integrations", "Automation Demo"],
    teacher: "Дина Назарова, AI product engineer",
  },
];

const app = document.querySelector("#app");
const root = document.documentElement;

function getPreferredTheme() {
  const savedTheme = localStorage.getItem("edu-learning-theme");
  if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function setTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem("edu-learning-theme", theme);

  const toggle = document.querySelector("[data-theme-toggle]");
  if (!toggle) return;

  const nextTheme = theme === "dark" ? "светлую" : "тёмную";
  toggle.setAttribute("aria-label", `Включить ${nextTheme} тему`);
  toggle.innerHTML = `<i data-lucide="${theme === "dark" ? "sun" : "moon"}" data-theme-icon aria-hidden="true"></i>`;
}

function icon(name) {
  return `<i data-lucide="${name}" aria-hidden="true"></i>`;
}

function renderIcons() {
  if (window.lucide) {
    window.lucide.createIcons({ attrs: { width: 20, height: 20, "stroke-width": 2 } });
  }
}

function pageTitle(title, text) {
  return `<section class="page-title"><span class="eyebrow">${icon("sparkles")} Futuristic EdTech platform</span><h1>${title}</h1><p>${text}</p></section>`;
}

function directionCards() {
  return directions
    .map(
      (item) => `
        <article class="card">
          <span class="icon-chip">${icon(item.icon)}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `
    )
    .join("");
}

function courseCard(course) {
  return `
    <article class="card">
      <span class="tag green">${course.direction}</span>
      <h3>${course.title}</h3>
      <div class="tag-row">
        <span class="tag">${icon("signal")} ${course.level}</span>
        <span class="tag">${icon("clock")} ${course.duration}</span>
      </div>
      <p>${course.summary}</p>
      <div class="tag-row"><span class="tag green">${icon("target")} ${course.result}</span></div>
      <div class="course-card-footer">
        <span class="muted">${course.modules.length} модуля</span>
        <a class="btn btn-ghost" href="#/course/${course.id}">${icon("arrow-right")} Подробнее</a>
      </div>
    </article>
  `;
}

function homePage() {
  return `
    <section class="hero">
      <div>
        <span class="eyebrow">${icon("radar")} Soft cyberpunk learning system</span>
        <h1>Edu Learning — Учись. Создавай. Исследуй.</h1>
        <p>Осваивайте иностранные языки, 3D-дизайн, программирование через практику, проекты и персональный прогресс.</p>
        <div class="actions">
          <a class="btn btn-primary" href="#/courses">${icon("layers")} Выбрать курс</a>
          <a class="btn btn-ghost" href="#/contacts">${icon("send")} Записаться</a>
        </div>
      </div>
      <div class="hero-console" aria-label="Интерфейс платформы">
        <div class="console-inner">
          <div class="status-row">
            <div class="metric"><span>направления</span><strong>3</strong></div>
            <div class="metric"><span>курсы</span><strong>12</strong></div>
            <div class="metric"><span>форматы</span><strong>4</strong></div>
          </div>
          <div class="course-radar">
            <div class="orbital"><div class="orbital-core">${icon("graduation-cap")}</div></div>
            <div class="stack-list">
              <div class="stack-item"><strong>English studio</strong><span>язык для жизни и работы</span></div>
              <div class="stack-item"><strong>Blender lab</strong><span>3D и портфолио</span></div>
              <div class="stack-item"><strong>AI workshop</strong><span>Python, NLP и инструменты</span></div>
              <div class="stack-item"><strong>Наставники</strong><span>практики индустрии</span></div>
            </div>
          </div>
          <div class="lesson-pill"><strong>Ближайший старт</strong><span>Новые группы открыты для записи</span></div>
        </div>
      </div>
    </section>

    <section class="section" id="directions">
      <div class="section-head">
        <h2>Направления</h2>
        <p>Три практических трека с понятным результатом: языковой прогресс, 3D-проекты и AI-кейсы.</p>
      </div>
      <div class="grid grid-3">${directionCards()}</div>
    </section>

    <section class="section">
      <div class="section-head">
        <h2>Почему выбирают Edu Learning</h2>
        <p>Обучение строится вокруг практики, понятного прогресса и работ, которые можно показать после курса.</p>
      </div>
      <div class="grid grid-3">
        <article class="card"><span class="icon-chip">${icon("scan-line")}</span><h3>Понятный рост</h3><p>Программа помогает последовательно развивать навыки и видеть результат на каждом этапе обучения.</p></article>
        <article class="card"><span class="icon-chip">${icon("folder-check")}</span><h3>Практические артефакты</h3><p>Colab-блокноты, GitHub-репозитории, 3D-рендеры и проверенные письменные задания.</p></article>
        <article class="card"><span class="icon-chip">${icon("messages-square")}</span><h3>Поддержка преподавателя</h3><p>Наставник помогает с практикой, отвечает на вопросы и даёт обратную связь по итоговым работам.</p></article>
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <h2>Как проходит обучение</h2>
        <p>Каждый курс сочетает понятную теорию, практику, обратную связь преподавателя и итоговый проект.</p>
      </div>
      <div class="grid grid-3">
        <article class="card"><h3>1. Выберите курс</h3><p>Фильтры по направлениям помогают быстро найти нужный трек и уровень.</p></article>
        <article class="card"><h3>2. Учитесь через практику</h3><p>Разбирайте материал вместе с преподавателем и закрепляйте знания на прикладных задачах.</p></article>
        <article class="card"><h3>3. Создайте итоговый проект</h3><p>Завершите курс готовой работой, кейсом или заметным прогрессом в выбранном направлении.</p></article>
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <h2>Примеры курсов</h2>
        <p>Моковые карточки показывают будущую структуру каталога и страниц курсов.</p>
      </div>
      <div class="grid grid-3">${courses.slice(0, 6).map(courseCard).join("")}</div>
    </section>

    <section class="section">
      <div class="split">
        <div class="card">
          <span class="icon-chip">${icon("users")}</span>
          <h2>Практики вместо лекторов</h2>
          <p class="muted">Занятия ведут специалисты, которые работают с языками, 3D и AI каждый день. Они помогают собрать понятный учебный маршрут и довести практику до результата.</p>
          <div class="actions"><a class="btn btn-ghost" href="#/teachers">${icon("arrow-right")} Познакомиться с командой</a></div>
        </div>
        <div class="card">
          <span class="icon-chip">${icon("message-square-text")}</span>
          <h2>Подберём курс под вашу цель</h2>
          <p class="muted">Расскажите, чему хотите научиться. Мы уточним уровень, формат и предложим подходящую программу.</p>
          <div class="actions"><a class="btn btn-primary" href="#/contacts">${icon("send")} Записаться</a></div>
        </div>
      </div>
    </section>
  `;
}

function coursesPage(activeFilter = "Все") {
  const visible = activeFilter === "Все" ? courses : courses.filter((course) => course.filter === activeFilter);
  return `
    ${pageTitle("Каталог курсов", "Выберите направление и курс. Все карточки сейчас работают на моковых данных, но структура готова под API и базу данных.")}
    <div class="filters">
      ${["Все", "English", "Blender", "AI / NLP"]
        .map((filter) => `<button class="filter-btn ${filter === activeFilter ? "active" : ""}" data-filter="${filter}">${filter}</button>`)
        .join("")}
    </div>
    <section class="grid grid-3">${visible.map(courseCard).join("")}</section>
  `;
}

function coursePage(id) {
  const course = courses.find((item) => item.id === id) || courses[0];
  return `
    ${pageTitle(course.title, course.summary)}
    <section class="split">
      <div class="grid">
        <article class="card">
          <h2>Кому подходит</h2>
          <p>${course.audience}</p>
        </article>
        <article class="card">
          <h2>Чему научитесь</h2>
          <ul class="clean-list">${course.learn.map((item) => `<li>${icon("check")} ${item}</li>`).join("")}</ul>
        </article>
        <article class="card">
          <h2>Программа по модулям</h2>
          ${course.modules.map((item, index) => `<div class="module"><span class="module-index">${index + 1}</span><div><h3>${item}</h3><p>Практический модуль с уроками, материалами, заданием и контрольной точкой прогресса.</p></div></div>`).join("")}
        </article>
        <article class="card">
          <h2>Формат обучения</h2>
          <p>Занятия с преподавателем, видео или презентации, практические материалы, обратная связь и итоговый проект.</p>
        </article>
        <article class="card">
          <h2>Итоговый результат</h2>
          <p>${course.result}</p>
        </article>
      </div>
      <aside class="card">
        <span class="icon-chip">${icon("book-open")}</span>
        <h3>${course.title}</h3>
        <ul class="meta-list">
          <li>${icon("folder")} Направление: ${course.direction}</li>
          <li>${icon("signal")} Уровень: ${course.level}</li>
          <li>${icon("clock")} Длительность: ${course.duration}</li>
          <li>${icon("user-round")} Преподаватель: ${course.teacher}</li>
        </ul>
        <div class="actions"><a class="btn btn-primary" href="#/contacts">${icon("send")} Записаться на курс</a></div>
      </aside>
    </section>
  `;
}

function directionsPage() {
  return `
    ${pageTitle("Направления", "English, Blender и AI / NLP объединены общей логикой: практика, проверка, прогресс и результат для дальнейшего роста.")}
    <section class="grid grid-3">${directionCards()}</section>
  `;
}

function teachersPage() {
  const teachers = [
    { name: "Елена Морозова", role: "English и методика", icon: "languages", text: "Помогает студентам говорить увереннее, писать понятнее и видеть реальный прогресс по языковым навыкам." },
    { name: "Кирилл Рэй", role: "Blender и 3D-дизайн", icon: "box", text: "3D artist и motion designer. Ведёт от первого знакомства с Blender до законченного проекта для портфолио." },
    { name: "Илья Ким", role: "Python и NLP", icon: "brain-circuit", text: "NLP engineer. Объясняет программирование через практические notebooks, данные и мини-проекты." },
    { name: "Дина Назарова", role: "AI и автоматизация", icon: "workflow", text: "AI product engineer. Помогает собирать прикладные AI-сценарии и оформлять кейсы для резюме." },
    { name: "Ника Сол", role: "Свет, рендер и анимация", icon: "aperture", text: "Lighting artist. Учит презентации 3D-работ, композиции света и созданию выразительного финального рендера." },
    { name: "Антон Ли", role: "English for Tech", icon: "code-xml", text: "Готовит IT-специалистов к рабочим встречам, чтению документации и техническим интервью." },
  ];

  return `
    ${pageTitle("Преподаватели", "Команда практиков из языкового образования, 3D-индустрии и AI-разработки.")}
    <section class="grid grid-3">
      ${teachers.map((teacher) => `
        <article class="card teacher-card">
          <span class="icon-chip">${icon(teacher.icon)}</span>
          <span class="tag green">${teacher.role}</span>
          <h3>${teacher.name}</h3>
          <p>${teacher.text}</p>
        </article>
      `).join("")}
    </section>
    <section class="section">
      <div class="card contact-banner">
        <div><h2>Найдём преподавателя под вашу цель</h2><p>Оставьте заявку, и мы предложим курс, формат и специалиста для старта.</p></div>
        <a class="btn btn-primary" href="#/contacts">${icon("send")} Записаться</a>
      </div>
    </section>
  `;
}

function reviewsPage() {
  const reviews = [
    { name: "Алина", course: "Английский для IT", result: "Перешла на рабочие встречи на английском", text: "Занятия были очень прикладными: разбирали митинги, переписку и мои реальные рабочие ситуации. Стало проще говорить и задавать вопросы команде." },
    { name: "Максим", course: "Blender с нуля", result: "Собрал первый 3D-проект для портфолио", text: "До курса Blender казался слишком сложным. Здесь всё было разбито на понятные этапы, а обратная связь помогла довести финальный рендер до хорошего уровня." },
    { name: "София", course: "Основы NLP", result: "Оформила NLP-кейс на GitHub", text: "Понравилось, что теория сразу переходила в notebooks и мини-проекты. В итоге появился проект, который можно показать на собеседовании." },
    { name: "Дмитрий", course: "Разговорный английский", result: "Начал увереннее говорить", text: "Много практики без ощущения школьного урока. Преподаватель объяснял ошибки спокойно и помогал формулировать мысли естественнее." },
    { name: "Мария", course: "Материалы, свет и рендер", result: "Обновила 3D-портфолио", text: "После курса мои работы стали выглядеть заметно профессиональнее. Особенно полезными были разборы света, камеры и презентации проекта." },
    { name: "Артём", course: "Python с нуля", result: "Сделал первую автоматизацию", text: "Не просто изучал синтаксис, а сразу применял его в небольших задачах. Теперь понимаю, как продолжать обучение и собирать свои проекты." },
  ];

  return `
    ${pageTitle("Отзывы студентов", "Результаты и впечатления людей, которые учились в Edu Learning.")}
    <section class="review-summary">
      <div class="result-stat"><strong>4.9</strong><span>средняя оценка</span></div>
      <div class="result-stat"><strong>92%</strong><span>доходят до итогового проекта</span></div>
      <div class="result-stat"><strong>3</strong><span>практических направления</span></div>
      <div class="result-stat"><strong>1:1</strong><span>обратная связь наставника</span></div>
    </section>
    <section class="section">
      <div class="grid grid-3">
        ${reviews.map((review) => `
          <article class="card review-card">
            <div class="review-top">
              <span class="review-avatar">${review.name[0]}</span>
              <div><h3>${review.name}</h3><span class="tag green">${review.course}</span></div>
            </div>
            <div class="review-stars" aria-label="5 из 5">${icon("star")} ${icon("star")} ${icon("star")} ${icon("star")} ${icon("star")}</div>
            <p>${review.text}</p>
            <strong class="review-result">${icon("check-circle-2")} ${review.result}</strong>
          </article>
        `).join("")}
      </div>
    </section>
    <section class="section">
      <div class="card contact-banner">
        <div><h2>Станьте следующим студентом</h2><p>Расскажите о своей цели, и мы подберём курс и формат обучения.</p></div>
        <a class="btn btn-primary" href="#/contacts">${icon("send")} Записаться</a>
      </div>
    </section>
  `;
}

function contactsPage() {
  return `
    ${pageTitle("Записаться на обучение", "Оставьте контакты и расскажите о своей цели. Мы свяжемся с вами, уточним уровень и подберём программу.")}
    <section class="contact-layout">
      <article class="card">
        <span class="icon-chip">${icon("message-square-text")}</span>
        <h2>Заявка на консультацию</h2>
        <form class="contact-form" data-contact-form>
          <label>Имя<input class="input" type="text" placeholder="Как к вам обращаться" required /></label>
          <label>Контакт<input class="input" type="text" placeholder="Telegram, email или телефон" required /></label>
          <label>Направление
            <select class="input">
              <option>English</option>
              <option>Blender и 3D-дизайн</option>
              <option>AI / NLP / Python</option>
              <option>Пока не определился</option>
            </select>
          </label>
          <label>Цель<textarea class="input" rows="4" placeholder="Чему хотите научиться"></textarea></label>
          <button class="btn btn-primary" type="submit">${icon("send")} Отправить заявку</button>
          <p class="form-status" data-form-status></p>
        </form>
      </article>
      <aside class="grid">
        <article class="card"><span class="icon-chip">${icon("send")}</span><h3>Telegram</h3><p>@edulearning</p></article>
        <article class="card"><span class="icon-chip">${icon("mail")}</span><h3>Email</h3><p>hello@edulearning.ru</p></article>
        <article class="card"><span class="icon-chip">${icon("clock-3")}</span><h3>Время ответа</h3><p>Обычно отвечаем в течение рабочего дня.</p></article>
      </aside>
    </section>
  `;
}

function setActiveNav(route) {
  document.querySelectorAll(".main-nav a").forEach((link) => {
    const href = link.getAttribute("href");
    link.classList.toggle("active", href === `#/${route}` || (route === "" && href === "#/"));
  });
}

function render() {
  const hash = window.location.hash.replace(/^#\/?/, "");
  const [route, id] = hash.split("/");

  if (route === "courses") app.innerHTML = coursesPage();
  else if (route === "course") app.innerHTML = coursePage(id);
  else if (route === "directions") app.innerHTML = directionsPage();
  else if (route === "teachers") app.innerHTML = teachersPage();
  else if (route === "reviews") app.innerHTML = reviewsPage();
  else if (route === "contacts") app.innerHTML = contactsPage();
  else app.innerHTML = homePage();

  setActiveNav(route || "");
  renderIcons();
  window.scrollTo({ top: 0, behavior: "instant" });
}

document.addEventListener("click", (event) => {
  const filter = event.target.closest("[data-filter]");
  if (filter) {
    app.innerHTML = coursesPage(filter.dataset.filter);
    renderIcons();
  }

  const toggle = event.target.closest("[data-nav-toggle]");
  if (toggle) {
    document.querySelector("[data-nav]").classList.toggle("open");
  }

  const themeToggle = event.target.closest("[data-theme-toggle]");
  if (themeToggle) {
    setTheme(root.dataset.theme === "light" ? "dark" : "light");
    renderIcons();
  }

  if (event.target.closest(".main-nav a")) {
    document.querySelector("[data-nav]").classList.remove("open");
  }

});

document.addEventListener("submit", (event) => {
  const contactForm = event.target.closest("[data-contact-form]");
  if (!contactForm) return;
  event.preventDefault();
  contactForm.querySelector("[data-form-status]").textContent = "Заявка принята. Мы свяжемся с вами в ближайшее время.";
});

window.addEventListener("hashchange", render);
setTheme(getPreferredTheme());
render();
