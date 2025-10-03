
# Röltgen Lab — Jekyll 4 Site

A Jekyll 4 website for an academic lab with People, Projects, Collaborations, and Blog. Distinct design; home page includes a lightweight photo slider. 

# Where should I make changes? 
This repo is designed to automatically build the new website anytime you 'push' new changes. This is to keep things simple, and hopefully easy to edit. There are two ways you can make changes:
- Online via github (this is good for simple content edits)
- On your own computer locally (better for bigger edits where something may not work)

### Online via Github
This is an easy option to make quick, small edits, that are mainly in the text. You should not try to do big changes this way, because everything goes live immediately - if you break something, the real website will break also! However, for just editing text, this is fine.

To do this, have someone who's a little familiar with Github show you how to navigate to the file you want to change, then press `.` key - it will load up an editor where you can change the text. Then simply add the file, a commit message, and 'push' - the website will rebuild in a few minutes with the change. (Ask someone to show you how to do this, or Chat GPT if nobody's around.)

### On your computer locally
This is the most 'proper' option for developing the website. Certainly, you should do this if you are ever trying to change the layout or functionality, or add new sections or major changes. This is because you can run the code locally and ensure everything is working before you push it to the website - so you know it's not broken! And for big changes, it's rare to get them perfect first time!

This is also a good option if you are changing a lot of things - a lot of text pages, images, etc, as you can check all your changes at once and push them together.

It is possible to make changes locally without 'building' locally - just clone, change, add, commit, and push - but this doesn't allow you to check your work. It's a good option if you're familiar with git/github more than the online editor. 

To run a local copy where you can make edits, follow the instructions below!:

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

It should show a message something like:
```bash
Configuration file: /home/emma/git_stuff/roeltgen-lab/_config.yml
            Source: /home/emma/git_stuff/roeltgen-lab
       Destination: /home/emma/git_stuff/roeltgen-lab/_site
 Incremental build: disabled. Enable with --incremental
      Generating...
       Jekyll Feed: Generating feed for posts
                    done in 0.38 seconds.
 Auto-regeneration: enabled for '/home/emma/git_stuff/roeltgen-lab'
    Server address: http://127.0.0.1:4000/roeltgen-lab/
  Server running... press ctrl-c to stop.
```

Now open http://127.0.0.1:4000/roeltgen-lab/ in your browser and you'll see website you're 'running' locally! If you make changes to the files, you can refresh the local website, and you should see them. 

To stop 'running' the website, use `Ctrl+C` on Windows.

# How to edit:

At the moment, please just edit content - if you'd like to add a feature or change how something looks, please ask Emma!

## People information:
`_people/<name>.md` contains:

- Location of the photo that will appear on your page
- 'Role' ex: PhD student, MSc student
- 'Team' for future sorting on the `/people` page (ex: member, alumni, visitor)
- Social and academic links (Github, Google Scholar, ORCiD, Linkedin etc)
- Interests (add as many as you like)
- Text that you write about yourself, as the main content (maybe your background, about you, projects)

To change your photo, the easiest thing to do is to just replace the photo of yourself `assets/img/people` with another photo of the same name. Ensure your photo is roughtly square (or it won't crop correctly) and isn't huge (will load slowly). Resize if you need!

## Changing Projects & Collaborations
To edit a project or a collaboration, just find the corresponding `.md` file in `_projects/` or `_collaborations/`. To change their photos, add the image to `assets/img/projects` or `assets/img/collabs` and modify the `image:` property in the .md file.

To add a project or collaboration, create a new `.md` file in the correct folder, following the format of existing files (don't forget an image!).

## Changing other pages
You can edit the 'About' page in the `about.md` file.

You can edit the main page (title, subtitle, and photos that scroll on the front page) via `index.md`.

To edit images, you can either replace the existing images (in folder `/assets/img/home/`) with another image with the same name (no editing of the `index.md` file needed), or you can add a new image file and link it in the `index.md` file. Do ensure these are a rectangle format, similar to the resolution shown on the main website! They will be cropped to fit, so if you upload a square, you'll only see the middle third!

# To do list
- [x] Add the final logo file
- [x] Add logo as icon too
- [x] Do automatic rebuilds by Github
- [x] Resize pictures in projects & collaborations
- [ ] Put real info in all people profiles
- [ ] Update links in bottom right (Github, Twitter)
- [ ] Fill in all people pages
- [ ] Add more projects
- [ ] Add more collaborations
- [ ] Add a first blog post?



# How the site is organized (roughly):

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
