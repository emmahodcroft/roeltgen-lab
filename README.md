
# Röltgen Lab — Jekyll 4 Site

A Jekyll 4 website for an academic lab with People, Projects, Collaborations, and Blog. Distinct design; home page includes a lightweight photo slider. This package focuses on **local development**. You can add GitHub Actions deploy later.

## Local Setup (Ruby 3.2 + Bundler)

### Linux via micromamba (conda-forge only)
Create a micromamba environment with Ruby 3.2 and the neccessary compilers

```bash
micromamba create -n jekyll-vim -c conda-forge ruby=3.2 make gcc_linux-64 gxx_linux-64 pkg-config openssl libffi zlib jemalloc
```

Activate the environment:
```bash
micromamba activate jekyll-vim
```

Clone the repository:
```bash
git clone git@github.com:hodcroftlab/roeltgen-lab.git
cd roeltgen-lab
```

Install gems only locally in the directory
```bash
bundle config set path 'vendor/bundle'
```

Install bundler, and then the gems needed
```bash
gem install bundler
bundle install
```

Serve the website: (TODO: production site serving)
```bash
bundle exec jekyll serve
```

Open http://localhost:4000

## Structure
- Pages: `index.md`, `about.md`, `people.md`, `projects.md`, `collaborations.md`, `blog.md`
- Collections: `_people/`, `_projects/`, `_collaborations/`
- Blog: `_posts/`
- Layouts: `_layouts/` (`default`, `home`, `page`, `post`, `item`, `person`)
- Includes: `_includes/header.html`, `_includes/footer.html`
- Assets: `assets/css/style.css`, `assets/js/*.js`, images under `assets/img/`

## Customize
- `_config.yml` → site title/description and `branding:` colors/fonts
- `_data/nav.yml` → navigation
- `index.md` → home hero text and `photos:`
- `_data/socials.yml` → lab socials


# To do list
- [ ] Add the final logo file
- [ ] Add logo as icon too
- [ ] Do automatic rebuilds by Github
- [ ] Resize pictures in projects & collaborations
- [ ] Put real info in all people profiles