# Drago Project Front UI

Základní šablona veřejné části webu: layout na Bootstrapu s blogem a statickými stránkami v menu, nabídkou
uživatele a úvodní stránkou s nejnovějšími články.

[![PHP version](https://badge.fury.io/ph/drago-ex%2Fproject-front-ui.svg)](https://badge.fury.io/ph/drago-ex%2Fproject-front-ui)
[![Coding Style](https://github.com/drago-ex/project-front-ui/actions/workflows/coding-style.yml/badge.svg)](https://github.com/drago-ex/project-front-ui/actions/workflows/coding-style.yml)

## Požadavky

- PHP >= 8.3, < 9
- [Drago Project](https://github.com/drago-ex/project)

## Instalace

```bash
composer require drago-ex/project-front-ui
```

## Instalace npm

```bash
npm install theme-switcher-compostrap @fortawesome/fontawesome-free
```

## Soubory kopírované do projektu

Soubory do projektu kopíruje [drago-ex/project-tools](https://github.com/drago-ex/project-tools)
podle nastavení v `extra.drago-tools` v `composer.json` tohoto balíčku. Nahradí jednoduché soubory
[drago-ex/project-front](https://github.com/drago-ex/project-front) (`BasePresenter`, `BaseTemplate`, layout veřejné části,
úvodní stránku, `assets/front.js` a `front.scss`). Nahradí je jen jednou; pozdější aktualizace vaše úpravy zachová.

## Layout

`app/Presentation/Front/@layout.latte` má navbar se značkou (vede na úvodní stránku), blogem, statickými stránkami
se zaškrtnutým „Zobrazit v menu“ a nabídkou přihlášeného uživatele (účet, administrace, motiv, odhlášení), případně
tlačítkem pro přihlášení. Položka administrace se zobrazí jen uživatelům, kterým je povolen `Backend:Admin`. Patička
má značku, odkazy webu a nástroje, na kterých web stojí; upravte je podle potřeby.

Značka je `app/Presentation/Accessory/Widget/@brand.latte` (nastavení `website` z
[drago-ex/project-settings](https://github.com/drago-ex/project-settings)), popis stránky (např. statické stránky)
se vypíše jako `<meta name="description">`.

## Úvodní stránka

`app/Presentation/Front/Home` zobrazí posledních sedm článků [drago-ex/project-blog](https://github.com/drago-ex/project-blog),
stejný seznam jako blog.

## Základní presenter

`app/Presentation/BasePresenter.php` kontroluje každý presenter traitem `Authorization` z
[drago-ex/permission](https://github.com/drago-ex/permission), načítá nastavení (`SettingsRequire`) a předává layoutu
veřejné části statické stránky menu (`PageMenu` z [drago-ex/project-static-page](https://github.com/drago-ex/project-static-page)).

## Assety

`assets/front.js` registruje rozšíření Naja veřejné části: spinner, tlačítko odeslání, toasty, rozbalovací nabídky,
lištu Texy u komentářů s tlačítkem kopírování bloků kódu a odpověď na komentář blogu. `assets/front.scss` obsahuje
styly layoutu, karet blogu a textu Texy článků a stránek.
