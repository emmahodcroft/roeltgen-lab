
# Röltgen Lab — Jekyll 4 Site

A Jekyll 4 website for an academic lab with People, Projects, Collaborations, and Blog. Distinct design; home page includes a lightweight photo slider. 

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

Serve the website locally:
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

# How to edit:

At the moment, please just edit content - if you'd like to add a feature or change how something looks, please ask Emma!

## People information:
`_people/<name>.md` contains:

- Location of the photo that will appear on your page
- 'Role' ex: PhD student, MSc student
- 'Team' for future sorting on the `/people` page (ex: member, alumni, visitor)
- Social and academic links (Github, Google Scholar, ORCiD, Linkedin etc)
- Text that you write about yourself, as the main content (maybe your background, about you, projects)

To change your photo, the easiest thing to do is to just replace the photo of yourself `assets/img/people` with another photo of the same name. Ensure your photo is roughtly square (or it won't crop correctly) and isn't huge (will load slowly). Resize if you need!

_I'll add more fields soon_

## Changing Projects & Collaborations
To edit a project or a collaboration, just find the corresponding `.md` file in `_projects/` or `_collaborations/`. To change their photos, add the image to `assets/img/projects` or `assets/img/collabs` and modify the `image:` property in the .md file.

To add a project or collaboration, create a new `.md` file in the correct folder, following the format of existing files (don't forget an image!).

## Changing other pages
You can edit the 'About' page in the `about.md` file.

You can edit the main page (title, subtitle, and photos that scroll on the front page) via `index.md`.

To edit images, you can either replace the existing images (in folder `/assets/img/home/`) with another image with the same name (no editing of the `index.md` file needed), or you can add a new image file and link it in the `index.md` file. Do ensure these are a rectangle format, similar to the resolution shown on the main website! They will be cropped to fit, so if you upload a square, you'll only see the middle third!

# To do list
- [ ] Add the final logo file
- [ ] Add logo as icon too
- [ ] Do automatic rebuilds by Github
- [ ] Resize pictures in projects & collaborations
- [ ] Put real info in all people profiles
- [ ] Update links in bottom right (Github, Twitter)