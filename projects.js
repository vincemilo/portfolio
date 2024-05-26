import Project from "./project.js";

export default function projects() {
  const form = new Project(
    "JavaScript - Form Validation",
    "images/form.png",
    "Form validation using Javascript and Constraint Validation API",
    "https://github.com/vincemilo/form-validation",
    "https://vincemilo.github.io/form-validation/"
  );
  const weather = new Project(
    "JavaScript - Weather App",
    "images/weatherApp.png",
    "API exercise using visual crossing weather API",
    "https://github.com/vincemilo/weatherApp",
    "https://vincemilo.github.io/weatherApp/"
  );
  const battleship = new Project(
    "JavaScript - Battleship",
    "images/battleship.png",
    "Battleship Game using test driven development (Jest)",
    "https://github.com/vincemilo/battleshipJS",
    "https://vincemilo.github.io/battleshipJS/"
  );
  const memCard = new Project(
    "React - Memory Card",
    "images/memCard.png",
    "Memory Card Game using React hooks and API fetching",
    "https://github.com/vincemilo/memoryCard",
    "https://vincemilomemcard.netlify.app"
  );
  const array = [form, weather, battleship, memCard];
  return array;
}
