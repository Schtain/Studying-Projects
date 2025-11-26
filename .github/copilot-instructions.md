<!-- Repository-specific Copilot instructions for AI coding agents -->
# Copilot instructions — Studying-Projects

Purpose: give an AI coding agent quick, practical knowledge to be productive in this repository.

- **Repo shape (big picture):** This repository is a collection of small, standalone static front-end projects (HTML/CSS/JS). Each project lives in its own folder under the repository root (for example `Lightbox Viewer/`, `calculator/`, `Story picker/`). There is no single build or server — most pages are opened in the browser or served by a simple static server.

- **Key directories / example files:**
  - `Lightbox Viewer/index.html` — example project using external `script.js` and `styles.css`.
  - `calculator/main.js` — JS-heavy example; check `index.html` for how the script is wired.
  - `Story picker/javascript.js` — another example of project-local naming and organisation.
  - `Music Collection/recordColletion.js` — single-file JS utilities exist across projects.
  - Root `README.md` — high-level description for the local collection.

- **Conventions & quirks to follow (observe, don't auto-change):**
  - Many folders include spaces and mixed capitalization (for example `Lightbox Viewer`, `Story picker`). Always use quoted paths when running shell commands and when writing file paths in patches: e.g. `"Lightbox Viewer/index.html"`.
  - Filenames for CSS/JS are inconsistent across projects (`styles.css`, `Styles.css`, `script.js`, `main.js`). Refer to the exact filename in each folder rather than assuming a canonical name.
  - This repo contains many near-duplicate projects (similar folders appear in both `Programming/` and `Studying-Projects/`). Prefer editing files under the repository root (the `Studying-Projects` folder) unless the user specifies otherwise. Do NOT automatically rename, remove, or consolidate duplicate folders without explicit instruction.

- **Build / run / debug workflows (explicit):**
  - There is no build system or package manifest. To preview a project, either open the `index.html` in a browser or run a simple static server from the project's folder.
    - Recommended (cross-platform):
      - Using Python 3 (PowerShell example):
        ```powershell
        cd "Studying-Projects/Lightbox Viewer"
        python -m http.server 8000
        ```
      - Using node (if Node available):
        ```powershell
        cd "Studying-Projects/Lightbox Viewer"
        npx serve .
        ```
  - Debugging: use browser DevTools console and network panel. Many projects rely on being served via `http://` (not `file://`), so run a local server when JS modules or fetch/XHR are present.

- **Testing & CI:**
  - There are no automated tests or CI configuration files. Do not add heavy test frameworks unless requested — prefer minimal, local verification steps for PRs (open pages, exercise UI flows).

- **When editing code:**
  - Make minimal, targeted changes. These are short projects used for study — large refactors or renames are high risk.
  - Preserve the project's naming, folder structure, and capitalization unless the user explicitly requests cleanup.
  - If introducing new files, place them inside the specific project folder and update only that project's `index.html` references.
  - Use relative paths in patches and examples. Wrap paths containing spaces in quotes.

- **Patterns to look for and examples to reference:**
  - Inline vs external scripts: some projects include inline JS in `index.html` and others use `script.js`/`main.js`. When fixing a bug, check both locations.
  - Styles: `styles.css` or `Styles.css` both appear; check `index.html` link tags for the exact filename.
  - Single-file utilities: e.g., `Music Collection/recordColletion.js` — these are often used by just a single page.

- **External dependencies & integrations:**
  - There are no package manifests (`package.json`) or dependency declarations. Assume no external build-time dependencies. If a change requires new dependencies, explain the need and provide exact install commands.

- **PR guidance for AI-generated changes:**
  - Keep PRs small and focused (one project / one bugfix or enhancement).
  - Include a short verification checklist in the PR description with steps to preview the change (example commands above).
  - Mention which folder was changed and why; do not touch other project folders.

- **When to ask the user:**
  - If a change would touch multiple duplicate copies of a project, ask which location to update.
  - If a requested change implies renaming folders or reformatting many files, ask for approval first.
  - If introducing a build or test framework is requested, ask whether they want it added across all projects or only for a single project.

If anything in this file is unclear or you want me to add examples from a specific project (for example a short PR template or a local debug checklist for `Lightbox Viewer`), tell me which project and I'll iterate.
