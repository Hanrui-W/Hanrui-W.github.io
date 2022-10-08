# Project Github Page

Instructions for creating the github page.

## Building the website locally

I created these instructions by following [this guide from GitHub](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll).

## 1. Install Ruby. 
The easiest way to install Ruby is to use
a package manager. For Windows, use [Chocolatey](https://chocolatey.org/install#individual). For macOS, use [Homebrew](http://brew.sh/). For Linux, use your system's package manager. 

Ubuntu Linux:
```
sudo apt-get install ruby-full
```

macOS (using [Homebrew](http://brew.sh/))
```
brew install ruby
```

Windows (using [Chocolatey](https://chocolatey.org/install#individual))
```
choco install ruby
```

## 2. Install Bundler and webrick
```
gem install bundler 
```
```
gem install webrick
```

## 3. Download the Dependecies

Make sure you are in the `docs/` directory. Then run:
```
bundle install
```

## 4. Editing the Website.

The files below are all you need to know about to get started!

* `Gemfile`: all of the website's dependecies are listed here. If you want to add plugins to the website, add them here
* `_config.yml`: defines basic website behavior (title, description, website theme, plugins)
* `*.markdown`: these files define the content on the webpages. Notice the header of each `*.markdown` file includes the page
layout, the page title, and the page permalink.

## 5. Test locally

```
bundle exec jekyll serve
```

Go to http://127.0.0.1:4000/ in your web browser to view the webpage. You can actually edit `*.markdown` pages, and they will
update the website if you refresh the page!

## 6. Deploying on GitHub

Read [the GitHub documentation](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll) about GitHub pages, especially steps 18-23. 