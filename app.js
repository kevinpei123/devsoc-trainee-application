const SECTION_CONTENT = {
  home: {
    title: "Home",
    text: `Hi, My name is Kevin Ming Hao Pei and this is my application page for devsoc training program as a trainee. This page is a personal profile hub with a Sun/Moon theme toggle that is inspired by 
- lord of the mysteries characters evernight and eternal blazing sun.
- a TFT-style bottom section bar 
- markdown editors

To use this application, toggle the sun vs moon to set the side, click the bottom dock to switch sections
`,
  },
  about: {
    title: "About",
    text: `- Name: Kevin Ming Hao Pei
- Degree/Year: 3rd year, Advanced CS 
skills
- Security - CTF challenge design/solving (web/crypto/pwn/rev/forensics/OSINT)
- Machine Learning - logistic/GB-tree style win-probability models, calibration, walk-forward evaluation,
- Programming - Python, JavaScript/TypeScript, SQLite, PostgreSQL,`,
  },
  projects: {
    title: "Projects",
    text: `- COMP6841 Cybersecurity CTF Project, building CTFs as a teaching method.
- Machine Learning Prediction Projects, building models for prediction tasks.
- I'm actively expanding this portfolio and would love mentorship through DevSoc.`,
  },
  interests: {
    title: "Interests",
    text: `- Teamfight Tactics (TFT)
- Webnovels: Lord of the Mysteries, Shadow Slave, Omniscient Reader's Viewpoint, and more
- for fun gambling`,
  },
  funfacts: {
    title: "Fun Facts",
    text: `- Hardstuck Emerald 4 in TFT 
- uses vertical tabs for basically everything
- unfun fact: used to play an excessive number of gacha games`,
  },
};

const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const panelTitle = document.getElementById("panelTitle");
const panelText = document.getElementById("panelText");
const dockButtons = Array.from(document.querySelectorAll(".slotCard[data-section]"));

// Theme - sun and moon
function applyTheme(theme) {
  let nextTheme = "sun";

  if (theme === "moon") {
    nextTheme = "moon";
  } else {
    nextTheme = "sun";
  }

  body.setAttribute("data-theme", nextTheme);
  themeToggle.checked = nextTheme === "moon";
}


function applySection(sectionKey) {
  let nextSection = "home";

  if (SECTION_CONTENT[sectionKey]) {
    nextSection = sectionKey;
  } else {
    nextSection = "home";
  }

  const content = SECTION_CONTENT[nextSection];

  panelTitle.textContent = content.title;
  panelText.textContent = content.text;

  dockButtons.forEach((btn) => {
    const isActive = btn.dataset.section === nextSection;

    if (isActive) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}




themeToggle.addEventListener("change", () => {
  if (themeToggle.checked) {
    applyTheme("moon");
  } else {
    applyTheme("sun");
  }
});

dockButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    applySection(btn.dataset.section);
  });
});

applyTheme("sun");
applySection("home");
