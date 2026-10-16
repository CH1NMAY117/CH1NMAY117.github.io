# ch1nmay117.github.io

Personal site of **Chinmay Arora** — biomedical engineer and registered pharmacist working on
computational target discovery for immune-cell therapies.

Live at <https://ch1nmay117.github.io>.

## How it works

Plain HTML and CSS with no build step, framework or dependencies, served by GitHub Pages.

| Path | What it is |
| --- | --- |
| `index.html` | Home |
| `research.html` | Thesis, research experience and written outputs |
| `projects.html` | Open-source projects and the Arogyavitals prototype |
| `about.html` | Education, teaching, toolkit, awards and responsibilities |
| `design.html` | Design and media gallery |
| `cv.pdf` | The CV the site links to — see below |
| `style.css` | All styling, shared by every page |
| `img/`, `design/` | Images |
| `robots.txt`, `sitemap.xml`, `llms.txt` | Search and AI-crawler metadata |

To change the content, edit the HTML directly. To preview locally, run `python3 -m http.server`
in this folder and open <http://localhost:8000>.

## Updating the CV

Every "CV" link on the site points at `/cv.pdf`. To publish a new version, replace that one file —
the link never changes and the site needs no edits:

1. Open <https://github.com/CH1NMAY117/CH1NMAY117.github.io> in a browser.
2. Click `cv.pdf`, then the pencil or **Upload files**, and drop in the new PDF named `cv.pdf`.
3. Commit. GitHub Pages republishes within a minute.

If you would rather host the CV on Google Drive, upload it there, use **File → Manage versions**
to replace the file whenever it changes (which keeps the same link), and point the CV links at that
URL. They are the `href="cv.pdf"` attributes in the five HTML files.

## Licence

The code is released under the [MIT licence](LICENSE). The photographs, design work and written
content are © Chinmay Arora and are not covered by it.
