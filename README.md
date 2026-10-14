## What this is
A personal portfolio website for Sanad Naser Rahahleh that presents his identity (Full Stack .NET Developer), experience, skills and project case studies. It is a static, client-side site with interactive UI behavior implemented in plain JavaScript.

### Stack
- **Language(s):** HTML, CSS, JavaScript (vanilla)
- **Framework / runtime:** Static web site (no frontend framework)
- **Notable libraries / assets:** Google Fonts (Inter, Outfit, JetBrains Mono). No bundled JavaScript frameworks or build tools present in the repository.

## How it's organized
```text
.
├── index.html          # Main site markup (hero, navigation, sections, project overlays)
├── style.css           # Visual styling and responsive layout
├── script.js           # All client-side behavior and accessibility interactions
├── assets/             # Images and downloadable CV used by the site
└── README.md           # (this file)
```

How it fits together:
- index.html contains the page structure and navigation sections (Home, About, Experience, Skills, Telecom, Projects, Approach, Contact) and a set of project overlays referenced by hash routes.
- script.js implements interactive behavior: mobile menu toggle, scroll spy/active nav highlighting, sticky header styling, project overlay routing (hash-based), copy-email-to-clipboard with toast notification, hero visual node hover interactions, layer/button activations for the "Where Software Meets Telecom" section, and scroll-reveal animations.
- style.css contains the design system, responsive rules, and visual styling used by the HTML.

## How to run it
Open the site in a modern browser. Because it is static, no build or server is required; however using a local static server is recommended for consistent behavior.

Quick options:

- Open directly
  - Double-click `index.html` in your browser.

- Run a simple local server (recommended):

```bash
# Python 3
python -m http.server 8080
# then open http://localhost:8080/index.html

# or using npm http-server
npm install -g http-server
http-server -p 8080
```

Notes:
- The repository does not include a backend or package.json. All interactions run in the browser.
- The site uses ARIA attributes and focus management patterns (see script.js) to improve accessibility where applicable.

## Try asking
- "Which project overlays exist and where are they defined?" — Look for hash targets in `script.js`: `#project-booking`, `#project-eduscope`, `#project-ecommerce`, `#project-goldtracker` and their corresponding elements in `index.html`.
- "Where is the copy-email functionality implemented?" — See `script.js` (search for `btn-copy-email` and the toast element with id `toast`).
- "How does the navigation highlight the active section?" — Inspect `script.js` scrollSpy function and the `varOffset()` calculation used to determine active nav links.

---

Note on scope: this README was produced by reading the repository files (index.html, script.js, style.css and the assets folder) and describes only behavior and files that are present in the code. It does not add or assume features that are not implemented in the repo.