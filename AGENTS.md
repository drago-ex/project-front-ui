# Agent Guide

Use this file as package-specific guidance when working in this repository. Keep changes aligned with the existing public API, project conventions, and supported PHP range.

## Package Overview
- **Package**: `drago-ex/project-front-ui`
- **Type**: drago-tools-resource
- **Purpose**: Integration of a basic template for the website: the layout, the home page with the blog and the static pages in the menu.
- **PHP**: >=8.3 <9
- **Runtime dependencies**: drago-ex/translator (^4.0.1), drago-ex/application (^4.0), drago-ex/component (^3.0), drago-ex/form (^3.0), drago-ex/texy-toolbar (^1.1), drago-ex/permission (^2.0), drago-ex/project-front (^3.0), drago-ex/project-user (^1.0), drago-ex/project-auth (^2.0), drago-ex/project-account (^2.0), drago-ex/project-settings (^2.0), drago-ex/project-blog (^2.0), drago-ex/project-static-page (^2.0)
- **License**: MIT

## Repository Layout
- `resources/`: application resources contributed to the consuming Drago project.
- `.github/`: CI workflows; keep their PHP versions and commands consistent with Composer and the package scripts.
- `composer.json`: package metadata, dependency constraints, autoloading, and available Composer scripts.

## Key Parts
- The front counterpart of drago-ex/project-backend-ui (user, 2026-11-04: the whole website design moved here from project-preset): `resources/app` and `resources/assets` are installed by `replace` (`replace-once`, `replace-priority` 200), so they override the plain files that drago-ex/project-front copies first (`BasePresenter`, `BaseTemplate`, `Front/@layout.latte`, `Front/Home`, `assets/front.js`, `front.scss`). A `copy` section would be skipped for files that already exist.
- Layout (2026-10-24, moved from project-preset 2026-11-04): `Front/@layout.latte` (Bootstrap navbar in a `sticky-top` header, `bg-body-tertiary` like the footer (the user: Bootstrap light, theme-aware), without borders; the brand links home, then the blog, static pages of `PageMenu`, user dropdown (no language dropdown for now, the user removed it 2026-10-24; `/en/` routes still work) written by hand because `@dropdown.latte` translates its name and the user name is data; `$user` is `CurrentUser`, the administration item only with `Backend:Admin` + `default` via `DragoPermissionPrivilege::isAllowed()`), `Front/Home` (the latest seven articles of project-blog: `ArticleListFactory::create(limit: 7)` rendered by `Front/Blog/@article-list.latte`, the same list as the blog; no hero block). The front is on the body background without borders (the user likes blog.getbootstrap.com): article cards side by side with a soft background (`.blog-card`); `.content` makes the Texy text of articles and static pages larger and shows its images as a 21:9 cut like the article cover, `BasePresenter` (translator, `SettingsRequire`; `beforeRender()` sets `$menuPages` only for `Front:*` presenters (`#[Nette\DI\Attributes\Inject] PageMenu`), `Authorization` of drago-ex/permission), footer like getbootstrap.com (brand, "Built on Nette with Drago Extension.", copyright; columns Links (home, blog, menu pages), Projects (Netis, Drago Extension, Compostrap, Packagist), Built with (Nette, Latte, Dibi, Bootstrap, Texy, Naja, Vite); `.front-footer-link`), `assets/front.js` + `front.scss` (registers `CommentReply` of project-blog, `assets/naja/comment-reply.js`, which puts `#N Name` into `#comment-form textarea` on "Reply"; `.comment:target` highlight and scroll-margin under the sticky header; `import 'bootstrap'` for the navbar collapse: drago-application and drago-component import the full Bootstrap, so a `bootstrap/js/dist/collapse` import registered the click handler twice and the mobile menu did not open, dropdowns, theme switcher, toasts, TexyToolbar for comments, copy button), own texts in `Front/Translate/cs.neon` (`extra.drago-translator`).
- Styles of the website belong here, also those of the front templates of other packages (blog cards and pills, comments, `.content` of Texy text in articles and static pages; user, 2026-11-04): front-ui is the design each project adapts or replaces, so project-blog and project-static-page ship markup and behaviour (e.g. `CommentReply`) but no front styles of their own.
- It composes the website of the blog and the static pages, so it requires them (and auth, account, settings, user for the layout); it is released after them.

## Dependencies

Composer constraints describe the package contract. Before changing integration behavior, inspect the source and the actual call sites in this package; do not infer runtime usage solely from dependency declarations.
Development dependencies include phpstan/phpstan (^2.0), phpstan/phpstan-nette (^2.0), drago-ex/project-tools (^1.0).

## Essential Commands

```bash
composer phpstan                # phpstan analyse
```

## Installation Hooks

Composer install and update hooks run `drago-install --dev` (resources of the dependencies into `.dev-resource/` for phpstan) and `drago-clean`.

## Conventions & Rules

- Preserve backward compatibility unless the task explicitly permits a breaking change. Check callers and public signatures before changing behavior.
- Follow the existing PHP style: strict types, explicit parameter and return types, tabs for indentation, and single-quoted strings where practical. Match nearby code when a convention is unclear.
- Keep package-specific configuration, resources, and migrations in their established directories. Do not edit generated or consuming-project files without confirming they are part of this repository's intended output.
- Update README examples and Composer metadata when a public API or supported requirement changes.
- `package.json` (user, 2026-11-04): `name` + `dependencies` of the npm packages the copied assets import; npm-loader of drago-ex/project installs the package from vendor with them (no `file:vendor/...` entries here: they would point inside this package; drago-ex libraries come from npm-loader, bootstrap and naja from the project).
