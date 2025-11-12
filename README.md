# Modern React Portfolio

## Getting started

```bash
npm install
npm run dev   # starts Vite on http://localhost:5173
npm run build # optional production build
```

## Folder overview

```
src/
├── components/
│   ├── Navbar.tsx        # Sticky navigation + mobile drawer
│   ├── ProjectCard.tsx   # Card UI for the Projects grid
│   └── SectionHeader.tsx # Shared heading pattern (eyebrow/title/description)
├── data/
│   ├── contact.ts        # Social links + icon metadata
│   └── projects.ts       # Project objects (title, description, tech, links)
├── sections/
│   ├── Home.tsx          # Hero with name, intro, CTA buttons, and stats card
│   ├── About.tsx         # Short background paragraph + quick facts
│   ├── Projects.tsx      # Grid of project cards
│   └── Contact.tsx       # Simple contact form + GitHub/LinkedIn icons
├── types/
│   └── content.ts        # Shared TypeScript contracts (Project, ContactLink)
├── App.tsx               # Wires navbar + sections + footer
├── index.css             # Tailwind directives, font import, global styles
└── main.tsx              # React entry point that mounts <App />
```

- **Components** hold building blocks that can be reused in different sections.
- **Sections** keep the page organized—each file represents a block you see on screen.
- **Data** centralizes copy so you can edit text/links without touching JSX.
- **Assets**: drop images or icons inside `src/assets/` if you ever need them.

## Customizing tips

- **Branding** – Update the name, intro, and quick facts in `Home.tsx`; tweak colors/fonts in `tailwind.config.js`.
- **Projects** – Add/edit entries in `src/data/projects.ts`. Each card auto-renders tech chips + links.
- **Contact** – Hook the form submit handler in `Contact.tsx` to your backend/Formspree/etc. Social icons read from `src/data/contact.ts`.
- **Animations** – Components rely on Tailwind transitions and subtle background gradients; adjust classes or add libraries if you want more motion.

The code is heavily commented so you can quickly see what each section does and extend it with confidence.
