# Agent Guide

`drago-ex/project-front-ui` (type drago-tools-resource, PHP >=8.3 <9): the website design, the front counterpart
of project-backend-ui. The workspace rules are in `../AGENTS.md`; dependencies are in `composer.json`.

## Layout
- `resources/app/Presentation/BasePresenter.php` + `BaseTemplate.php`, `Front/@layout.latte`, `Front/Home`,
  `Front/Translate/cs.neon` (`extra.drago-translator`).
- `resources/assets/front.js` + `front.scss`.
- `package.json` (with `name`): the npm dependencies, installed by `npm-loader.js` of drago-ex/project.

## How it works
- `resources/app` and `resources/assets` are installed by `replace` (`replace-once`, priority 200), so they
  override the plain files of project-front once. A `copy` would be skipped for files that already exist.
- It composes the website of the blog and the static pages, so it requires them (and auth, account, settings,
  user for the layout) and is released after them.
- `BasePresenter`: translator, `SettingsRequire`, `Authorization`; `beforeRender()` sets `$menuPages` only for
  `Front:*` presenters (`#[Inject] PageMenu`).
- Layout: a `sticky-top` navbar with `bg-body-tertiary` like the footer, no borders; brand, blog, menu pages, the
  user dropdown written by hand (the user name is data, `@dropdown.latte` would translate it; `$user` is
  `CurrentUser`), the administration item only with `Backend:Admin` + `default` by
  `Drago\Permission\Privilege::isAllowed()`. No language dropdown; the `/en/` routes still work. The footer has the
  columns Links, Projects, Built with (`.front-footer-link`).
- `Front/Home`: `ArticleListFactory::create(limit: 7)` rendered by `Front/Blog/@article-list.latte` of
  project-blog; no hero block.
- Styles of the website live here, also those of the front templates of other packages (`.blog-card`,
  `.blog-pill`, comments, `.content` for Texy text, images as a 21:9 cut): front-ui is the design each project
  adapts, so project-blog and project-static-page ship markup and behaviour (e.g. `CommentReply`) but no front
  styles.
- `front.js` imports the full `bootstrap` for the navbar collapse: drago-application and drago-component import
  the full Bootstrap too, and a separate `bootstrap/js/dist/collapse` import registered the click handler twice,
  so the mobile menu did not open. It registers `CommentReply` of project-blog, dropdowns, the theme switcher,
  toasts, TexyToolbar for comments and the copy button; `.comment:target` has a highlight and a scroll margin
  under the sticky header.

## Commands
```bash
composer phpstan
```
