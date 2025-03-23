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
  const shoppingCart = new Project(
    "React - Shopping Cart",
    "images/shoppingCart.png",
    "Shopping cart simulation using React, React Router, and API fetch. Testing via Vitest and React Testing Library",
    "https://github.com/vincemilo/shoppingCartReact",
    "https://vincemiloshoppingcart.netlify.app/"
  );
  const wheresWaldo = new Project(
    "React + Rails - Where's Waldo",
    "images/wheresWaldo.png",
    "A photo tagging app using React frontend and Rails backend",
    "https://github.com/vincemilo/wheresWaldoReact",
    "https://vincemilowhereswaldo.netlify.app/"
  );
  const array = [weather, battleship, memCard, shoppingCart, wheresWaldo];
  return array;
}
