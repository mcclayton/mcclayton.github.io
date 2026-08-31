# My Online Portfolio
[![Deploy to GitHub Pages](https://github.com/mcclayton/mcclayton.github.io/actions/workflows/deploy-pages.yml/badge.svg?branch=master)](https://github.com/mcclayton/mcclayton.github.io/actions/workflows/deploy-pages.yml)

![](src/images/mcc.svg)

## View Live Site
http://michaelcclayton.com

## Run Locally
- Requires Node 24.15+ and npm 10+ (`nvm install && nvm use`).
- Install dependencies: `npm install`
- Start the Vite dev server: `npm run dev`

## Run Tests
```
npm test
```

## Deploy Site
Pushes to `master` automatically test, build, and deploy the site through the
[GitHub Pages workflow](https://github.com/mcclayton/mcclayton.github.io/actions/workflows/deploy-pages.yml).
The workflow can also be started manually from the Actions tab.

The repository's Pages source must be configured as **GitHub Actions** under
**Settings → Pages → Build and deployment**.

## Code Style Guide
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

[Prettier](https://prettier.io/) is used to format this codebase and can be run with:
```
npm run format
```
