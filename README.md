# Carbon-Footprint-Calculator

A simple website that takes information from a user and calculates their carbon footprint.

🌱 **[View it and play around on its website here!](https://carbon-footprint-calculator-hazel-eight.vercel.app/)**

This calculator was originally built to be embedded inside of a website for a sustainability project when I was part of the **Believe Leadership Program**.

## About

The Carbon Footprint Calculator walks users through a short multi-step questionnaire about their lifestyle and carbon pollution factors, then estimates their monthly CO₂e (carbon dioxide equivalent) emissions in pounds. At the end, it also tells you how many trees it would take to offset that footprint — a fun way to put the numbers into serious perspective.

The "e" in CO₂e stands for "carbon dioxide equivalent," a standardized unit that scientists use to compare the warming impact of different greenhouse gases against CO₂.

## Features

- **Step-by-step slide interface:** guides the user through each question one at a time
- **Fuel type selection:** supports both gasoline and diesel vehicles
- **CO₂e calculation:** estimates monthly carbon emissions based on user inputs
- **Tree equivalent:** translates the result into a relatable number of trees 🌳
- **CO₂e explainer:** includes a brief in-app explanation of what CO₂e means and links to further reading
- **Responsive design:** built with Material Design Components (MDC Web) for a clean look on any screen size

## Tech Stack

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Material Design](https://img.shields.io/badge/Material_Design-757575?style=for-the-badge&logo=material-design&logoColor=white)
![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=for-the-badge&logo=google&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

- **HTML/CSS/JS** — no frameworks, no build step, just the classics
- **[Material Design Components (MDC Web)](https://github.com/material-components/material-components-web)** — UI component library loaded via CDN
- **[Google Fonts](https://fonts.google.com/)** — Bebas Neue & Roboto Mono for typography
- **[Vercel](https://vercel.com/)** — deployment and hosting

## Project Structure

```
Carbon-Footprint-Calculator/
├── index.html      # Main page and calculator UI
├── script.js       # Slide logic and CO₂e calculations
├── style.css       # Custom styles
└── resources       # Dev notes and reference links used during development
```

---

## Running Locally

Since this is a pure HTML/CSS/JS project with no build step, getting it running locally is as simple as it gets:

1. Clone the repository:
   ```bash
   git clone https://github.com/jyzeng77/Carbon-Footprint-Calculator.git
   ```
2. Open `index.html` in your browser — that's it!

All dependencies (MDC Web and Google Fonts) are loaded via CDN, so you'll need an internet connection for the full look.

## Future Plans

There are a few features I had in mind when originally building this that never quite made it in:

- Expanding inputs beyond vehicle fuel (e.g. flights, home energy, diet)
- Optimizing the site to work better as a fully standalone page, not just an embed
- Improving mobile responsiveness and accessibility
- Adding a shareable results card
