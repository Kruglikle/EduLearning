const directions = [
  {
    id: "english",
    title: "Английский язык",
    icon: "languages",
    color: "green",
    description:
      "Курсы для развития всех видов речевой деятельности: speaking, writing, reading и listening. Практика, проверка заданий, прогресс по навыкам и кейсы для создания языкового портфолио.",
  },
  {
    id: "blender",
    title: "Blender и 3D-дизайн",
    icon: "box",
    color: "cyan",
    description:
      "Курсы по моделированию, материалам, свету, рендеру и анимации. После прохождения курса — готовые 3D-проекты для портфолио.",
  },
  {
    id: "ai",
    title: "AI / NLP / Python",
    icon: "brain-circuit",
    color: "violet",
    description:
      "Курсы по Python, анализу текстов, нейросетям и AI-инструментам. После прохождения курса — GitHub-портфолио, мини-проекты и кейсы для резюме.",
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
    summary: "Базовый курс для тех, кто начинает изучать английский язык: чтение, разговорная речь, аудирование и грамматическая база.",
    result: "Уверенный разговорный английский, возможность развивать и совершенствовать язык дальше.",
    audience: "Новичкам, которые хотят уверенно стартовать без перегруза теорией.",
    learn: ["понимать короткие тексты и аудио", "вести простые диалоги", "писать короткие тексты"],
    modules: ["Start Pack", "Everyday Grammar", "Listening Lab", "Speaking Practice"],
    advantages: [
      "До 70% занятия коммуникация на английском языке",
      "Работа по методике Communicative Language Teaching (CLT) + Task-Based Learning (TBL)",
      "Разговорные клубы и специальный чат",
      "Индивидуальная настройка учебных материалов",
      "Гибкий график занятий и формат обучения",
    ],
    teacher: "Снежана Соловьева, преподаватель английского и методист EdTech",
  },
  {
    id: "english-it",
    title: "Английский для IT",
    direction: "English",
    filter: "English",
    level: "Intermediate",
    duration: "6 недель",
    summary: "Научитесь уверенно работать с технической документацией, обсуждать проекты на английском языке и проходить IT-интервью.",
    result: "Проверенные письменные задания, результаты тестов и сертификат.",
    audience: "Разработчикам, аналитикам, дизайнерам и начинающим IT-специалистам.",
    learn: ["объяснять технические задачи", "читать документацию", "писать рабочие сообщения", "готовиться к интервью"],
    modules: ["Tech Vocabulary", "Meetings", "Documentation", "Interview Sprint"],
    teacher: "Дарья Смирнова, English for Tech mentor",
  },
  {
    id: "spoken-english",
    title: "Разговорный английский",
    direction: "English",
    filter: "English",
    level: "Pre-Intermediate",
    duration: "7 недель",
    summary: "Больше говорения, меньше заучивания: обсуждение актуальных тем, работа с реальными ситуациями и регулярная разговорная практика.",
    result: "Прогресс по языковым навыкам, проверенные задания и сертификат EduLearning о прохождении курса.",
    audience: "Тем, кто знает базу, но хочет говорить увереннее.",
    learn: ["поддерживать разговор", "формулировать мнение", "спокойной понимать речь на слух"],
    modules: ["Warm-up Dialogues", "Opinion Builder", "Real Scenarios", "Final Speaking Test"],
    teacher: "Кристина Ефремова, преподаватель английского и методист EdTech",
  },
  {
    id: "academic-writing",
    title: "Академическое письмо",
    direction: "English",
    filter: "English",
    level: "Upper-Intermediate",
    duration: "5 недель",
    summary: "Структура эссе, аргументация, источники, стиль и деловая коммуникация.",
    result: "Умение вести деловую переписку, готовность к бизнес коммуникации.",
    audience: "Студентам, исследователям и тем, кто готовится к международным программам. А также тем, кто хочет профессию в сфере бизнес коммуникации.",
    learn: ["строить аргументацию", "писать эссе", "оформлять источники", "улучшать академический стиль"],
    modules: ["Essay Structure", "Argumentation", "Sources", "Revision Studio"],
    teacher: "Кристина Ефремова, преподаватель английского и методист EdTech",
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
    teacher: "Полина Крылова, 3D artist и motion designer",
  },
  {
    id: "3d-modeling",
    title: "Основы 3D-моделирования",
    direction: "Blender",
    filter: "Blender",
    level: "Beginner+",
    duration: "6 недель",
    summary: "Сделайте первые шаги в 3D-дизайне и создайте собственную модель, освоив базовые принципы моделирования и подготовки сцен.",
    result: "После курса вы создадите 3D-проект, который можно добавить в портфолио.",
    audience: "Тем, кто хочет системно прокачать моделирование.",
    learn: ["строить корректную сетку", "использовать модификаторы", "создавать props", "готовить модель к рендеру"],
    modules: ["Mesh Logic", "Modifiers", "Hard Surface", "Scene Assembly"],
    teacher: "Полина Крылова, 3D artist и motion designer",
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
    teacher: "Полина Крылова, 3D artist и motion designer",
  },
  {
    id: "python-zero",
    title: "Python с нуля",
    direction: "AI / NLP",
    filter: "AI / NLP",
    level: "Beginner",
    duration: "8 недель",
    summary: "Изучите базовый синтаксис Python и создайте свои первые программы, проекты и инструменты для решения практических задач.",
    result: "После курса у вас будут Colab-блокноты, мини-проекты и практические кейсы для резюме.",
    audience: "Новичкам в программировании и тем, кто хочет перейти к AI-практике.",
    learn: ["писать Python-код", "работать с данными", "использовать Colab", "создавать мини-проекты"],
    modules: ["Python Core", "Data Structures", "Notebook Practice", "Automation Case"],
    teacher: "Лена Кругликова, ML engineer",
  },
  {
    id: "nlp-basics",
    title: "Основы NLP",
    direction: "AI / NLP",
    filter: "AI / NLP",
    level: "Intermediate",
    duration: "6 недель",
    summary: "От предобработки текста до моделей машинного обучения: получите практический опыт решения реальных задач обработки естественного языка.",
    result: "После курса у вас будут Colab-блокноты, мини-проекты и практические кейсы для резюме.",
    audience: "Тем, кто знает базовый Python и хочет анализировать тексты.",
    learn: ["готовить текстовые данные", "строить классификаторы", "оценивать качество моделей", "оформлять проект в GitHub"],
    modules: ["Text Prep", "Embeddings", "Classification", "NLP Case"],
    teacher: "Лена Кругликова, ML engineer",
  },
];

const app = document.querySelector("#app");
const root = document.documentElement;
const palettes = ["green", "orange", "blue"];
const activeCourseIds = ["english-zero", "spoken-english", "3d-modeling", "python-zero", "nlp-basics"];

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

function getPreferredPalette() {
  const savedPalette = localStorage.getItem("edu-learning-palette");
  return palettes.includes(savedPalette) ? savedPalette : "green";
}

function setPalette(palette) {
  const safePalette = palettes.includes(palette) ? palette : "green";
  root.dataset.palette = safePalette;
  localStorage.setItem("edu-learning-palette", safePalette);

  document.querySelectorAll("[data-palette-option]").forEach((button) => {
    const isActive = button.dataset.paletteOption === safePalette;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
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
  return `<section class="page-title"><h1>${title}</h1><p>${text}</p></section>`;
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

function orderedCourses(list = courses) {
  const activeIndex = new Map(activeCourseIds.map((id, index) => [id, index]));
  return [...list].sort((a, b) => {
    const aActive = activeIndex.has(a.id);
    const bActive = activeIndex.has(b.id);
    if (aActive && bActive) return activeIndex.get(a.id) - activeIndex.get(b.id);
    if (aActive) return -1;
    if (bActive) return 1;
    return courses.findIndex((course) => course.id === a.id) - courses.findIndex((course) => course.id === b.id);
  });
}

function courseCard(course, options = {}) {
  const isActive = activeCourseIds.includes(course.id);
  const signupLabel = isActive ? "Записаться" : "Предзапись";
  return `
    <article class="card">
      <div class="course-card-tags">
        <span class="tag green">${course.direction}</span>
        <span class="tag ${isActive ? "status-active" : "status-dev"}">${isActive ? "Идёт набор" : "В разработке"}</span>
      </div>
      <h3>${course.title}</h3>
      <div class="tag-row">
        <span class="tag">${icon("signal")} ${course.level}</span>
        <span class="tag">${icon("clock")} ${course.duration}</span>
      </div>
      <p>${course.summary}</p>
      ${options.development ? `<p class="course-note">Можно предварительно записаться прямо сейчас.</p>` : ""}
      <div class="tag-row"><span class="tag green">${icon("target")} ${course.result}</span></div>
      <div class="course-card-footer">
        <div class="course-actions">
          <a class="btn btn-ghost" href="#/course/${course.id}">${icon("arrow-right")} Подробнее</a>
          <a class="btn btn-primary" href="#/contacts">${icon("send")} ${signupLabel}</a>
        </div>
      </div>
    </article>
  `;
}

function heroArt(kind) {
  const art = {
    english: {
      title: "Language studio",
      icon: "Aa",
      left: "Speaking",
      right: "Listening",
      accent: "M120 440c150-50 250-40 370 0s210 45 330-20",
    },
    design: {
      title: "3D design lab",
      icon: "3D",
      left: "Modeling",
      right: "Render",
      accent: "M260 190 480 90 700 190 700 410 480 525 260 410z",
    },
    ai: {
      title: "AI workshop",
      icon: "AI",
      left: "Python",
      right: "NLP",
      accent: "M210 250 350 170 500 260 650 160 760 280M210 390 350 470 500 390 650 480 760 370",
    },
  }[kind];

  return `
    <div class="carousel-art">
      <svg viewBox="0 0 960 640" role="img" aria-label="${art.title}">
        <defs>
          <linearGradient id="art-${kind}" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="var(--green)" />
            <stop offset=".55" stop-color="var(--cyan)" />
            <stop offset="1" stop-color="var(--violet)" />
          </linearGradient>
          <filter id="blur-${kind}" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="22" />
          </filter>
        </defs>
        <rect width="960" height="640" rx="36" fill="#071019" />
        <circle cx="250" cy="170" r="132" fill="var(--green)" opacity=".16" filter="url(#blur-${kind})" />
        <circle cx="740" cy="150" r="118" fill="var(--cyan)" opacity=".18" filter="url(#blur-${kind})" />
        <g opacity=".26" stroke="var(--green)" stroke-width="1">
          <path d="M0 500h960M0 430h960M0 360h960M0 290h960M120 0v640M240 0v640M360 0v640M480 0v640M600 0v640M720 0v640M840 0v640" />
        </g>
        <rect x="105" y="88" width="750" height="430" rx="30" fill="var(--green)" opacity=".055" stroke="url(#art-${kind})" stroke-opacity=".5" />
        <rect x="150" y="145" width="230" height="138" rx="18" fill="#06120b" opacity=".78" stroke="var(--cyan)" stroke-opacity=".65" />
        <rect x="580" y="145" width="230" height="138" rx="18" fill="#06120b" opacity=".72" stroke="var(--green)" stroke-opacity=".65" />
        <path d="M185 195h130M185 230h85M615 195h130M615 230h95" stroke="url(#art-${kind})" stroke-width="11" stroke-linecap="round" opacity=".78" />
        <path d="${art.accent}" fill="none" stroke="url(#art-${kind})" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" opacity=".82" />
        <circle cx="480" cy="320" r="96" fill="#06120b" opacity=".88" stroke="url(#art-${kind})" stroke-width="8" />
        <text x="480" y="342" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="64" font-weight="800" fill="var(--green)">${art.icon}</text>
        <text x="265" y="350" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="800" fill="var(--cyan)">${art.left}</text>
        <text x="695" y="350" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="800" fill="var(--green)">${art.right}</text>
      </svg>
    </div>
  `;
}

function homePage() {
  return `
    <section class="hero">
      <div>
        <h1>Edu Learning</h1>
        <h2>Учись. Создавай. Исследуй.</h2>
        <p>Осваивайте иностранные языки, 3D-дизайн, программирование через практику, проекты и реальные кейсы.</p>
        <div class="actions">
          <a class="btn btn-primary" href="#/courses">${icon("layers")} Выбрать курс</a>
          <a class="btn btn-ghost" href="#/contacts">${icon("send")} Записаться</a>
        </div>
      </div>
      <div class="hero-console hero-gallery" aria-label="Карусель учебных направлений">
        <div class="carousel-track">
          <figure class="carousel-slide">
            ${heroArt("english")}
          </figure>
          <figure class="carousel-slide">
            ${heroArt("design")}
          </figure>
          <figure class="carousel-slide">
            ${heroArt("ai")}
          </figure>
          <figure class="carousel-slide" aria-hidden="true">
            ${heroArt("english")}
          </figure>
          <figure class="carousel-slide" aria-hidden="true">
            ${heroArt("design")}
          </figure>
          <figure class="carousel-slide" aria-hidden="true">
            ${heroArt("ai")}
          </figure>
        </div>
        <div class="carousel-dots" aria-hidden="true"><span></span><span></span><span></span></div>
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
        <h2>Почему выбирают нас?</h2>
        <p>Каждый курс ведёт к конкретному результату, овладению навыками по дисциплине и готовым проектам для портфолио.</p>
      </div>
      <div class="grid grid-3">
        <article class="card"><span class="icon-chip">${icon("scan-line")}</span><h3>Практика на каждом занятии</h3><p>На занятиях ученики сразу применяют полученные знания на практике: пишут тексты, делают проекты, работают с кодом, 3D-моделями или AI-инструментами.</p></article>
        <article class="card"><span class="icon-chip">${icon("folder-check")}</span><h3>Работы для портфолио</h3><p>После курса остаются реальные материалы: Colab-блокноты, GitHub-проекты, 3D-рендеры, тексты, презентации или другие выполненные задания.</p></article>
        <article class="card"><span class="icon-chip">${icon("messages-square")}</span><h3>Поддержка преподавателя</h3><p>Преподаватель помогает разобраться с заданиями, отвечает на вопросы и даёт обратную связь по работам.</p></article>
      </div>
    </section>

    <section class="section">
      <div class="section-title-block">
        <h2>Как проходит обучение?</h2>
        <p>Уроки проходят на платформе Контур.Толк с использованием цифровых платформ: английский язык — Miro, Quizlet; программирование — Google Colab, Hugging Face, Kaggle; дизайн — Blender.</p>
      </div>
      <div class="grid grid-3">
        <article class="card"><h3>1. Выберите направление</h3><p>Подберите программу по английскому языку, искусственному интеллекту или 3D-дизайну в зависимости от ваших целей и уровня подготовки.</p></article>
        <article class="card"><h3>2. Учитесь на практике</h3><p>На занятиях вы выполняете реальные задания, работаете с профессиональными инструментами и получаете обратную связь от преподавателя.</p></article>
        <article class="card"><h3>3. Создавайте собственные проекты</h3><p>По итогам обучения у вас остаются выполненные работы: проекты, 3D-модели, программный код, исследования или языковые задания, которые можно использовать в портфолио.</p></article>
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <h2>Примеры курсов</h2>
      </div>
      <div class="grid grid-3">${orderedCourses().slice(0, 6).map((course) => courseCard(course, { development: !activeCourseIds.includes(course.id) })).join("")}</div>
    </section>

    <section class="section">
      <div class="split">
        <div class="card">
          <span class="icon-chip">${icon("users")}</span>
          <h2>Сильная команда преподавателей</h2>
          <p class="muted">Занятия ведут специалисты, которые делятся реальным опытом, помогают разобраться в сложных темах и применить полученные знания на практике.</p>
          <div class="actions"><a class="btn btn-ghost" href="#/teachers">${icon("arrow-right")} Познакомиться с командой</a></div>
        </div>
        <div class="card">
          <span class="icon-chip">${icon("message-square-text")}</span>
          <h2>Подберём курс под вашу цель</h2>
          <p class="muted">Расскажите, чему хотите научиться. Мы уточним комфортный формат обучения и предложим подходящую программу.</p>
          <div class="actions"><a class="btn btn-primary" href="#/contacts">${icon("send")} Записаться</a></div>
        </div>
      </div>
    </section>
  `;
}

function coursesPage(activeFilter = "Все") {
  const visible = activeFilter === "Все" ? courses : courses.filter((course) => course.filter === activeFilter);
  const activeCourses = orderedCourses(visible.filter((course) => activeCourseIds.includes(course.id)));
  const developmentCourses = orderedCourses(visible.filter((course) => !activeCourseIds.includes(course.id)));
  return `
    ${pageTitle("Каталог курсов", "Выберите направление и курс.")}
    <div class="filters">
      ${["Все", "English", "Blender", "AI / NLP"]
        .map((filter) => `<button class="filter-btn ${filter === activeFilter ? "active" : ""}" data-filter="${filter}">${filter}</button>`)
        .join("")}
    </div>
    ${activeCourses.length ? `<section class="grid grid-3">${activeCourses.map(courseCard).join("")}</section>` : ""}
    ${developmentCourses.length ? `
      <section class="section course-development-section">
        <div class="section-head">
          <h2>Курсы на стадии разработки</h2>
          <p>Эти программы готовятся к запуску. Можно предварительно записаться прямо сейчас, и мы сообщим о старте набора.</p>
        </div>
        <div class="grid grid-3">${developmentCourses.map((course) => courseCard(course, { development: true })).join("")}</div>
      </section>
    ` : ""}
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
          <h2>${course.advantages ? "Наши преимущества" : "Программа по модулям"}</h2>
          ${course.advantages
            ? `<ul class="clean-list">${course.advantages.map((item) => `<li>${icon("check")} ${item}</li>`).join("")}</ul>`
            : course.modules.map((item, index) => `<div class="module"><span class="module-index">${index + 1}</span><div><h3>${item}</h3><p>Практический модуль с уроками, материалами, заданием и контрольной точкой прогресса.</p></div></div>`).join("")}
        </article>
        <article class="card">
          <h2>Формат обучения</h2>
          <p>Онлайн уроки, видео, презентации, материалы, домашние задания, проверка работ и зримый прогресс.</p>
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

function teachersPage() {
  const teachers = [
    { name: "Снежана Соловьева", role: "Преподаватель английского языка, методист", icon: "languages", text: "Помогает студентам начать говорить увереннее, писать понятнее и видеть реальный прогресс по языковым навыкам." },
    { name: "Дарья Смирнова", role: "Преподаватель английского языка", icon: "languages", text: "Помогает расширять словарный запас, совершенствовать языковые навыки и чувствовать себя увереннее в общении на английском языке." },
    { name: "Полина Крылова", role: "Дизайнер, аналитик", icon: "box", text: "Ведёт от первого знакомства с Blender до полноценного проекта для портфолио." },
    { name: "Лена Кругликова", role: "ML-инженер, методист EduLearning", icon: "brain-circuit", text: "Объясняет программирование через практические задачи, данные и мини-проекты." },
    { name: "Кристина Ефремова", role: "Преподаватель английского языка, переводчик", icon: "code-xml", text: "Помогает освоить разговорный английский для уверенного общения на иностранном языке." },
  ];

  return `
    ${pageTitle("Преподаватели", "Команда практиков из языкового образования, 3D-индустрии и AI-разработки.")}
    <section class="grid grid-3 teachers-grid">
      ${teachers.map((teacher) => `
        <article class="card teacher-card">
          <div class="teacher-heading">
            <span class="icon-chip teacher-icon">${icon(teacher.icon)}</span>
            <span class="tag green teacher-role">${teacher.role}</span>
          </div>
          <h3>${teacher.name}</h3>
          <p>${teacher.text}</p>
        </article>
      `).join("")}
    </section>
    <section class="section">
      <div class="card contact-banner">
        <div><h2>Найдем курс под вашу цель</h2><p>Оставьте заявку, и мы предложим курс, формат и специалиста для старта.</p></div>
        <a class="btn btn-primary" href="#/contacts">${icon("send")} Записаться</a>
      </div>
    </section>
  `;
}

function reviewsPage() {
  const reviews = [
    {
      name: "Алена",
      course: "Разговорный английский",
      result: "Начала увереннее говорить",
      text:
        "Мне очень нравятся занятия в EduLearning. Во-первых, это невероятно тёплая и дружелюбная атмосфера: нет страха строгого преподавателя и ощущения, что ошибаться нельзя. Это помогает говорить спокойно и свободно.\n\nВо-вторых, система смены преподавателей в разные дни - гениальна. Ты не привыкаешь к одному стилю, и каждый урок проходит в новом формате.\n\nИ главное: 70% времени мы говорим на английском, но это не просто разговоры. Мы прорабатываем грамматику и произношение не в вакууме, а через живые, интересные темы - например путешествия. Вот это действительно круто и то, зачем я сюда шла 💕",
    },
    {
      name: "Олег",
      course: "Разговорный английский",
      result: "Начал увереннее говорить",
      text:
        "Материал преподается на высшем уровне. Все преподаватели отзывчивые и всегда готовы помочь, подстраиваются под твой темп и не торопят если что-то не получается, а помогают разобраться и запомнить правило. Атмосфера на занятии всегда комфортная, нет неловких пауз и напряжения. Всегда есть домашнее, что тоже очень важно в изучении на мой взгляд. Очень много разговорной практики, а это как раз то, что я искал. Преподаватели профессионалы и это чувствуется еще с первого занятия. Хочется сказать спасибо за возможность так легко и интересно изучать Английский!",
    },
  ];

  return `
    ${pageTitle("Отзывы студентов", "Результаты и впечатления людей, которые учились в Edu Learning.")}
    <section class="section">
      <div class="grid grid-3">
        ${reviews.map((review) => {
          const text = review.text.trim();
          const isLong = text.length > 260;
          return `
          <article class="card review-card full-stars">
            <div class="review-top">
              <span class="review-avatar">${review.name[0]}</span>
              <div><h3>${review.name}</h3><span class="tag green">${review.course}</span></div>
            </div>
            <div class="review-stars" aria-label="5 из 5">${icon("star")} ${icon("star")} ${icon("star")} ${icon("star")} ${icon("star")}</div>
            <p class="review-text ${isLong ? "is-collapsed" : ""}">${text.replace(/\n/g, "<br />")}</p>
            <strong class="review-result">${icon("check-circle-2")} ${review.result}</strong>
            ${isLong ? `<button class="review-more" type="button" data-review-toggle>Читать далее</button>` : ""}
          </article>
        `}).join("")}
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
          <input type="hidden" name="_subject" value="Новая заявка с сайта Edu Learning" />
          <input type="hidden" name="_template" value="table" />
          <input class="form-honey" type="text" name="_honey" tabindex="-1" autocomplete="off" />
          <label>Имя<input class="input" type="text" name="Имя" placeholder="Как к вам обращаться" autocomplete="name" required /></label>
          <label>Контакт<input class="input" type="text" name="Контакт" placeholder="Telegram, email или телефон" required /></label>
          <label>Направление
            <select class="input" name="Направление">
              <option>English</option>
              <option>Blender и 3D-дизайн</option>
              <option>AI / NLP / Python</option>
              <option>Пока не определился</option>
            </select>
          </label>
          <label>Цель<textarea class="input" name="Цель" rows="4" placeholder="Чему хотите научиться"></textarea></label>
          <label class="consent-row"><input type="checkbox" required /> <span>Согласен на обработку данных для связи по заявке</span></label>
          <button class="btn btn-primary" type="submit">${icon("send")} Отправить заявку</button>
          <p class="form-status" data-form-status aria-live="polite"></p>
        </form>
      </article>
      <aside class="grid">
        <a class="card contact-card" href="https://t.me/solovyevasn" target="_blank" rel="noreferrer"><span class="icon-chip">${icon("send")}</span><h3>Telegram</h3><p>@solovyevasn</p></a>
        <a class="card contact-card" href="mailto:edulearning@yandex.ru"><span class="icon-chip">${icon("mail")}</span><h3>Email</h3><p>edulearning@yandex.ru</p></a>
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

  const paletteButton = event.target.closest("[data-palette-option]");
  if (paletteButton) {
    setPalette(paletteButton.dataset.paletteOption);
  }

  if (event.target.closest(".main-nav a")) {
    document.querySelector("[data-nav]").classList.remove("open");
  }

  const reviewToggle = event.target.closest("[data-review-toggle]");
  if (reviewToggle) {
    const card = reviewToggle.closest(".review-card");
    const text = card.querySelector(".review-text");
    const isExpanded = text.classList.toggle("is-expanded");
    text.classList.toggle("is-collapsed", !isExpanded);
    reviewToggle.textContent = isExpanded ? "Скрыть" : "Читать далее";
  }

});

document.addEventListener("submit", async (event) => {
  const contactForm = event.target.closest("[data-contact-form]");
  if (!contactForm) return;
  event.preventDefault();

  const status = contactForm.querySelector("[data-form-status]");
  const submitButton = contactForm.querySelector('button[type="submit"]');
  const formData = new FormData(contactForm);
  const payload = Object.fromEntries(formData.entries());

  submitButton.disabled = true;
  status.className = "form-status";
  status.textContent = "Отправляем заявку...";

  try {
    const response = await fetch("https://formsubmit.co/ajax/edulearning@yandex.ru", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error("Form submission failed");

    contactForm.reset();
    status.classList.add("success");
    status.textContent = "Заявка отправлена. Мы свяжемся с вами в ближайшее время.";
  } catch (error) {
    status.classList.add("error");
    status.textContent = "Не удалось отправить заявку. Напишите нам на edulearning@yandex.ru.";
  } finally {
    submitButton.disabled = false;
  }
});

window.addEventListener("hashchange", render);
setTheme(getPreferredTheme());
setPalette(getPreferredPalette());
render();
