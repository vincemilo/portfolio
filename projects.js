import Project from "./project.js";

export default function projects() {
  const form = new Project(
    "Javascript - Form Validation",
    "images/form.png",
    "Form validation using Javascript and Constraint Validation API",
    "https://github.com/vincemilo/form-validation",
    "https://vincemilo.github.io/form-validation/"
  );
  const weather = new Project(
    "Javascript - Weather App",
    "images/weatherApp.png",
    "API exercise using visual crossing weather API",
    "https://github.com/vincemilo/weatherApp",
    "https://vincemilo.github.io/weatherApp/"
  );
  const array = [form, weather];
  return array;
}
