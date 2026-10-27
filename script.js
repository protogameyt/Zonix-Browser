const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");
const languageToggle = document.querySelector("#language-toggle");
let currentLanguage = "fr";

const translations = {
  fr: {
    pageTitle: "Zonix Browser — Le web, à votre façon",
    pageDescription: "Zonix Browser, un navigateur pensé pour une expérience du web plus simple, plus claire et à votre image.",
    mainNavigation: "Navigation principale",
    homeLink: "Zonix Browser, accueil",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    navBenefits: "Avantages",
    navExperience: "L’expérience",
    navAbout: "À propos",
    discoverZonix: "Découvrir Zonix",
    heroEyebrow: "Une nouvelle façon de naviguer",
    heroTitle: "Le web,",
    heroTitleAccent: "à votre façon.",
    heroDescription: "Faites de chaque nouvel onglet un espace qui vous ressemble. Zonix Browser vous invite à explorer le web avec plus de simplicité et de sérénité.",
    exploreBenefits: "Explorer les avantages",
    heroNote: "Un espace web qui va à l’essentiel.",
    heroArtLabel: "Aperçu de la page d’accueil Zonix Browser",
    browserAddress: "Rechercher ou saisir une adresse",
    browserGreeting: "VOTRE ESPACE, À VOTRE RYTHME",
    browserTitle: "Le web,",
    browserTitleAccent: "à votre façon.",
    browserSubtitle: "Une nouvelle fenêtre sur vos idées.",
    browserSearch: "Où voulez-vous aller ?",
    enter: "Entrée ↵",
    quickAccess: "ACCÈS RAPIDES",
    yourStyle: "À votre image",
    yourSpace: "Votre espace, vos repères",
    scroll: "Faites défiler",
    benefitsEyebrow: "Le plaisir de naviguer",
    benefitsTitle: "Moins de distractions.",
    benefitsTitleAccent: "Plus de possibilités.",
    benefitsIntro: "Un navigateur devrait rendre le web plus agréable. Zonix met vos essentiels à portée de clic et laisse la place à ce qui compte.",
    featureOneTitle: "Un espace apaisant",
    featureOneText: "Une interface épurée et une palette inspirée de la nature pour commencer votre navigation du bon pied.",
    featureTwoTitle: "Tout à portée de clic",
    featureTwoText: "Accédez rapidement à vos sites préférés et trouvez votre chemin sur le web en toute simplicité.",
    featureThreeTitle: "À votre rythme",
    featureThreeText: "Un accueil clair, pensé pour vous laisser vous concentrer sur vos découvertes et vos idées.",
    yourSpaceLabel: "Votre espace",
    newTab: "Nouvel onglet",
    favorites: "VOS FAVORIS",
    personalProfile: "Profil personnel",
    simplyZonix: "Simplement Zonix",
    experienceEyebrow: "L’essentiel, simplement",
    experienceTitle: "Un accueil qui",
    experienceTitleSecond: "vous ",
    experienceTitleAccent: "ressemble.",
    experienceIntro: "Ouvrez un nouvel onglet et retrouvez une page claire, prête à vous accompagner. Vos recherches et vos sites favoris ne sont jamais loin.",
    benefitOne: "Une page d’accueil lumineuse et lisible",
    benefitTwo: "Une recherche accessible en un instant",
    benefitThree: "Des raccourcis vers vos sites préférés",
    learnMore: "En savoir plus sur Zonix",
    approachEyebrow: "Notre approche",
    approachTitle: "Le web est vaste.",
    approachTitleAccent: "Gardons-le simple.",
    aboutTextOne: "Zonix Browser est imaginé autour d’une idée toute simple : votre navigateur doit vous aider à explorer, sans vous compliquer la vie.",
    aboutTextTwo: "Un design doux, des accès directs et une expérience sans détour. Le web, à votre façon.",
    readyEyebrow: "Prêt à explorer ?",
    readyTitle: "Votre prochaine fenêtre",
    readyTitleAccent: "commence ici.",
    readyDescription: "Zonix Browser, un nouvel espace pour vos découvertes.",
    backToTop: "Revenir en haut",
    footerTagline: "Le web, à votre façon.",
    footerNote: "Imaginé pour explorer le web autrement.",
  },
  en: {
    pageTitle: "Zonix Browser — The web, your way",
    pageDescription: "Zonix Browser is designed to make your web experience simpler, clearer, and more personal.",
    mainNavigation: "Main navigation",
    homeLink: "Zonix Browser, home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    navBenefits: "Benefits",
    navExperience: "The experience",
    navAbout: "About",
    discoverZonix: "Discover Zonix",
    heroEyebrow: "A new way to browse",
    heroTitle: "The web,",
    heroTitleAccent: "your way.",
    heroDescription: "Make every new tab a space that feels like yours. Zonix Browser invites you to explore the web with greater simplicity and peace of mind.",
    exploreBenefits: "Explore the benefits",
    heroNote: "A web experience focused on what matters.",
    heroArtLabel: "Preview of the Zonix Browser home page",
    browserAddress: "Search or enter an address",
    browserGreeting: "YOUR SPACE, AT YOUR OWN PACE",
    browserTitle: "The web,",
    browserTitleAccent: "your way.",
    browserSubtitle: "A new window for your ideas.",
    browserSearch: "Where would you like to go?",
    enter: "Enter ↵",
    quickAccess: "QUICK LINKS",
    yourStyle: "Made for you",
    yourSpace: "Your space, your shortcuts",
    scroll: "Scroll to explore",
    benefitsEyebrow: "Enjoy the journey",
    benefitsTitle: "Less distraction.",
    benefitsTitleAccent: "More possibility.",
    benefitsIntro: "A browser should make the web more enjoyable. Zonix puts your essentials a click away and leaves room for what matters.",
    featureOneTitle: "A calmer space",
    featureOneText: "A clean interface and nature-inspired palette to help you start browsing on the right note.",
    featureTwoTitle: "One click away",
    featureTwoText: "Get to your favorite sites quickly and find your way around the web with ease.",
    featureThreeTitle: "At your own pace",
    featureThreeText: "A clear home page designed to help you focus on your discoveries and ideas.",
    yourSpaceLabel: "Your space",
    newTab: "New tab",
    favorites: "YOUR FAVORITES",
    personalProfile: "Personal profile",
    simplyZonix: "Simply Zonix",
    experienceEyebrow: "The essentials, made simple",
    experienceTitle: "A welcome page",
    experienceTitleSecond: "that ",
    experienceTitleAccent: "feels like you.",
    experienceIntro: "Open a new tab to find a clear home page, ready to help you explore. Search and favorite sites are always close at hand.",
    benefitOne: "A bright, easy-to-read home page",
    benefitTwo: "Search just a moment away",
    benefitThree: "Shortcuts to your favorite sites",
    learnMore: "Learn more about Zonix",
    approachEyebrow: "Our approach",
    approachTitle: "The web is vast.",
    approachTitleAccent: "Let's keep it simple.",
    aboutTextOne: "Zonix Browser is built around a simple idea: your browser should help you explore without making life more complicated.",
    aboutTextTwo: "A gentle design, direct access, and a straightforward experience. The web, your way.",
    readyEyebrow: "Ready to explore?",
    readyTitle: "Your next window",
    readyTitleAccent: "starts here.",
    readyDescription: "Zonix Browser, a new space for your discoveries.",
    backToTop: "Back to top",
    footerTagline: "The web, your way.",
    footerNote: "Made for a different kind of web journey.",
  },
};

function setLanguage(language) {
  currentLanguage = language;
  const copy = translations[language];
  document.documentElement.lang = language;
  document.title = copy.pageTitle;
  document.querySelector('meta[name="description"]').content = copy.pageDescription;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const translation = copy[element.dataset.i18n];
    if (translation === undefined) {
      throw new Error(`Missing ${language} translation: ${element.dataset.i18n}`);
    }
    element.textContent = translation;
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const translation = copy[element.dataset.i18nAria];
    if (translation === undefined) {
      throw new Error(`Missing ${language} accessibility translation: ${element.dataset.i18nAria}`);
    }
    element.setAttribute("aria-label", translation);
  });

  languageToggle.textContent = language === "fr" ? "EN" : "FR";
  languageToggle.lang = language === "fr" ? "en" : "fr";
  languageToggle.setAttribute("aria-label", language === "fr" ? "Switch language to English" : "Passer le site en français");
  menuToggle.setAttribute("aria-label", menuToggle.getAttribute("aria-expanded") === "true" ? copy.closeMenu : copy.openMenu);
}

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? translations[currentLanguage].openMenu : translations[currentLanguage].closeMenu);
  navLinks.classList.toggle("is-open", !isExpanded);
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", translations[currentLanguage].openMenu);
    navLinks.classList.remove("is-open");
  });
});

languageToggle.addEventListener("click", () => {
  setLanguage(currentLanguage === "fr" ? "en" : "fr");
});

document.querySelector("#year").textContent = new Date().getFullYear();
