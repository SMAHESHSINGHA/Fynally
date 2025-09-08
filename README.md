# Fynally.io — Frontend / Website Developer Internship Assignment

A responsive, modern website that illustrates the journey **Student → Learner → Intern → Employee** with pages for resources, learning, internships, and employment.

## ✨ Live Demo
Deployed on (add your link after deploying to **Vercel**/**Netlify**/**GitHub Pages**).

## 🚀 Tech Stack
- React + Vite
- TailwindCSS
- React Router
- Modern, responsive UI

## 🧭 Pages
- **Home** — brand hero, journey steps, CTA #<img width="1912" height="881" alt="image" src="https://github.com/user-attachments/assets/dfebc904-c094-4970-8ee6-3f5acd126fea" />

- **Student Resources**
- **Learning**
- **Internships** — filters & sample data
- **Employment** — tips & sample jobs

## 🛠️ Local Setup
```bash
# 1) Install Node.js (v18+ recommended)
# 2) Clone the repo
git clone <your-repo-url>.git
cd fynally-website

# 3) Install deps
npm install

# 4) Start dev server
npm run dev

# 5) Build production
npm run build

# 6) Preview build
npm run preview
```

## 📦 Deployment
- **Vercel**: Import the repo, framework = Vite, `npm run build`, output = `dist`.
- **Netlify**: Build command `npm run build`, publish directory `dist`.
- **GitHub Pages**: Use Netlify or `gh-pages` if you prefer.

## 📸 Screenshots
Add screenshots in `README` once you run locally:
- Home
- Student
- Learning
- Internships
- Employment

## 🧱 Project Structure
```
fynally-website/
  public/
  src/
    assets/
    components/
      Footer.jsx
      Navbar.jsx
      Section.jsx
      Stat.jsx
    pages/
      Employment.jsx
      Home.jsx
      Internships.jsx
      Learning.jsx
      Student.jsx
    App.jsx
    main.jsx
    index.css
  package.json
  tailwind.config.js
  postcss.config.js
  vite.config.js
  index.html
```

## ✅ Features Checklist
- [x] Smooth navigation & route transitions
- [x] Responsive design (mobile → desktop)
- [x] Clean, modern UI with Tailwind
- [x] Career pathway flow
- [x] Dummy data for internships/jobs

---

**Made for Fynally.io — guidance, growth, empowerment.**
