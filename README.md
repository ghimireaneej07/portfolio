# Aneej Ghimire Portfolio

A responsive personal portfolio for Aneej Ghimire, a Software Engineering student and full-stack developer focused on MERN, Django, REST APIs, and production-ready web applications.

## Features

- Clean recruiter-focused homepage
- Responsive layout for mobile, tablet, and desktop
- Light and dark mode with saved user preference
- Resume-aligned experience, education, skills, projects, and certifications
- Semantic HTML for accessibility and SEO
- Lightweight CSS and JavaScript without unnecessary homepage libraries
- Netlify-ready contact form
- Optimized image loading with lazy loading and explicit dimensions

## Tech Stack

- HTML5
- CSS3
- JavaScript
- Bootstrap Icons
- Google Fonts: Josefin Sans
- Netlify for deployment

## Folder Structure

```text
portfolio/
|-- index.html
|-- script.js
|-- css/
|   |-- style.css
|-- images/
|   |-- profile.png
|   |-- scrapay_project.png
|   |-- webdev.jpg
|   |-- ...
|-- pages/
|   |-- thank-you.html
|-- resume1.pdf
|-- robots.txt
|-- sitemap.xml
|-- netlify.toml
|-- README.md
```

The repository root also contains a small redirect `index.html` that forwards visitors to `portfolio/index.html`.

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/ghimireaneej07/portfolio.git
```

2. Move into the project:

```bash
cd portfolio
```

3. Open the site locally:

```bash
cd portfolio
python -m http.server 5500
```

4. Visit:

```text
http://localhost:5500
```

## Deployment

This project is configured for Netlify.

1. Push changes to the existing GitHub repository.
2. In Netlify, connect the repository if it is not already connected.
3. Use these settings:

```text
Base directory: portfolio
Publish directory: .
Build command: leave empty
```

4. Deploy and verify:

- Homepage loads correctly
- Contact form appears in Netlify Forms
- Netlify form notifications are enabled for your email in the Netlify dashboard
- Mobile navigation works
- Dark mode persists after refresh
- `robots.txt` and `sitemap.xml` are accessible

## Screenshots

Add screenshots after deployment:

```text
docs/screenshots/home-desktop.png
docs/screenshots/home-mobile.png
docs/screenshots/projects.png
```

## Git Workflow

Use the existing repository. Do not run `git init` again.

1. Check the current changes:

```bash
git status
```

2. Review the diff:

```bash
git diff
```

3. Stage only the intended files:

```bash
git add -A portfolio
```

4. Commit with a clear message:

```bash
git commit -m "Refine portfolio layout and content"
```

5. Push to the current branch:

```bash
git push origin main
```

If your branch is not `main`, check it with:

```bash
git branch --show-current
```

Then push using that branch name:

```bash
git push origin your-branch-name
```

## Maintenance Notes

- Keep resume details and portfolio content in sync.
- Compress new project screenshots before committing.
- Use descriptive alt text for every meaningful image.
- Keep JavaScript small and focused on interactions that need it.
- Avoid adding libraries unless they solve a real problem.
