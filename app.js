import projects from "./projects.js";

const library = projects();

library.forEach((project) => {
  const mainProjects = document.querySelector(".main-projects");
  const projectsPanel = document.createElement("div");
  const projectsPanelText = document.createElement("div");
  const h4 = document.createElement("h4");
  const screenshot = document.createElement("img");
  const p = document.createElement("p");
  const projectIcon = document.createElement("div");
  const code = document.createElement("a");
  const codeIcon = document.createElement("img");
  const live = document.createElement("a");
  const liveIcon = document.createElement("img");
  projectsPanel.className = "main-projects-panel";
  projectsPanelText.className = "projects-panel-text";
  h4.innerText = project.name;
  screenshot.src = project.img;
  screenshot.className = "screenshot";
  p.class = "projects-p";
  p.innerText =
    "Form validation using Javascript and Constraint Validation API";
  projectsPanelText.appendChild(h4);
  projectsPanelText.appendChild(screenshot);
  projectsPanelText.appendChild(p);
  projectIcon.className = "project-icon";
  code.href = project.code;
  codeIcon.src = "images/github-mark.svg";
  code.target = "_blank";
  code.appendChild(codeIcon);
  live.href = project.live;
  liveIcon.src = "images/open-in-new.svg";
  live.target = "_blank";
  live.appendChild(liveIcon);
  projectIcon.appendChild(code);
  projectIcon.appendChild(live);
  projectsPanel.appendChild(projectsPanelText);
  projectsPanel.appendChild(projectIcon);
  mainProjects.prepend(projectsPanel);
});
