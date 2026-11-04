# Drago Project Front UI

Integration of a basic template for the website: a Bootstrap layout with the blog and the static pages in the menu,
the user menu and the home page with the latest articles.

[![PHP version](https://badge.fury.io/ph/drago-ex%2Fproject-front-ui.svg)](https://badge.fury.io/ph/drago-ex%2Fproject-front-ui)
[![Coding Style](https://github.com/drago-ex/project-front-ui/actions/workflows/coding-style.yml/badge.svg)](https://github.com/drago-ex/project-front-ui/actions/workflows/coding-style.yml)

## Requirements

- PHP >= 8.3, < 9
- [Drago Project](https://github.com/drago-ex/project)

## Installation

```bash
composer require drago-ex/project-front-ui
```

## npm Installation

```bash
npm install theme-switcher-compostrap @fortawesome/fontawesome-free
```

## Files copied into the project

The files are copied into the project by [drago-ex/project-tools](https://github.com/drago-ex/project-tools),
as set in `extra.drago-tools` of this package's `composer.json`. They replace the plain files of
[drago-ex/project-front](https://github.com/drago-ex/project-front) (`BasePresenter`, `BaseTemplate`, the front layout,
the home page, `assets/front.js` and `front.scss`). They are replaced once; a later update keeps your changes.

## Layout

`app/Presentation/Front/@layout.latte` has a navbar with the brand (it leads to the home page), the blog, the static
pages marked "Show in the menu" and the menu of the signed-in user (account, administration, theme, sign out), or a
sign-in button. The administration item is shown only to users allowed `Backend:Admin`. The footer has the brand,
the links of the site and the tools the site is built with; edit them freely.

The brand is `app/Presentation/Accessory/Widget/@brand.latte` (the `website` setting of
[drago-ex/project-settings](https://github.com/drago-ex/project-settings)), the description of a page (e.g. a static page)
is printed as `<meta name="description">`.

## Home Page

`app/Presentation/Front/Home` shows the latest seven articles of [drago-ex/project-blog](https://github.com/drago-ex/project-blog),
the same list as the blog.

## Base Presenter

`app/Presentation/BasePresenter.php` checks every presenter by the `Authorization` trait of
[drago-ex/permission](https://github.com/drago-ex/permission), loads the settings (`SettingsRequire`) and gives the
front layout the static pages of the menu (`PageMenu` of [drago-ex/project-static-page](https://github.com/drago-ex/project-static-page)).

## Assets

`assets/front.js` registers the Naja extensions of the website: the spinner, the submit button, toasts, dropdowns,
the Texy toolbar of comments with the copy button of code blocks and the reply to a blog comment. `assets/front.scss`
has the styles of the layout, the blog cards and the Texy text of articles and pages.
