# Drago Project Front UI

The website design of Drago Project: a Bootstrap layout with the blog and the static pages in the menu, the user
menu, a light/dark theme, a footer and the home page with the latest articles.

[![PHP version](https://badge.fury.io/ph/drago-ex%2Fproject-front-ui.svg)](https://badge.fury.io/ph/drago-ex%2Fproject-front-ui)
[![Coding Style](https://github.com/drago-ex/project-front-ui/actions/workflows/coding-style.yml/badge.svg)](https://github.com/drago-ex/project-front-ui/actions/workflows/coding-style.yml)

## Requirements

- PHP >= 8.3, < 9
- [Drago Project](https://github.com/drago-ex/project)

## Installation

```bash
composer require drago-ex/project-front-ui
```

[Project Tools](https://github.com/drago-ex/project-tools) copies the files of the package into the project once,
replacing the plain files of [Project Front](https://github.com/drago-ex/project-front) (`BasePresenter`,
`BaseTemplate`, the front layout, the home page, `assets/front.js` and `front.scss`). Its npm dependencies (theme
switcher, Font Awesome) are installed by `npm install` of the project. It requires
[Blog](https://github.com/drago-ex/project-blog), [Static Pages](https://github.com/drago-ex/project-static-page),
[Settings](https://github.com/drago-ex/project-settings) and [Account](https://github.com/drago-ex/project-account).

## Layout

`Front/@layout.latte` has a navbar with the brand (the `website` setting), the blog, the static pages marked
"Show in the menu" and the menu of the signed-in user (account, administration, theme, sign out), or a sign-in
button. The administration item is shown only to users allowed `Backend:Admin`. The footer has the brand, the
links of the site and the tools the site is built with; edit them freely.

`Front/Home` shows the latest seven articles of the blog, the same list as the blog.

`BasePresenter` checks every presenter by the ACL, loads the settings and gives the layout the static pages of
the menu.

## Assets

`assets/front.js` registers the Naja extensions of the website: the spinner, the submit button, toasts,
dropdowns, the Texy toolbar of comments with the copy button of code blocks and the reply to a blog comment.
`assets/front.scss` has the styles of the layout, the blog cards, the comments and the Texy text of articles and
pages.
