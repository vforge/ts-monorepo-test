# TS monorepo test/PoC

Fandom's Winter 2019 Hackaton

Technologies used:

* `yarn` workspaces
* `lerna` monorepo scripts
* TypeScript
* React/styled-components
* Rollup

## Packages

Live in `/packages` subdirectory.

Two sample packages:

* `@vforge/tracking` - exports two functions.
* `@vforge/components` - exports two React/styled-components components.
  * It is using a function from `@vforge/tracking` package.

### Installation of packages' dependencies

```bash
$> yarn
```

### Building the packages

```bash
$> yarn build
```

## Applications

Live in `/apps` subdirectory.

Two sample applications:

* `apps/cli` - a CLI app that's using `@vforge/tracking`.
  * Rollup is used because setting it up was way easier than webpack.
* `apps/components` - a browser script[1] that's using `@vforge/components`' components inside React ecosystem.
  * Rollup + Babel/TS combo is used.

### Installation of app dependency

```bash
$> cd apps/<application name> && yarn
```

### Installation the app

```bash
$> cd apps/<application name> && yarn build
```

## Key findings

* Can be done (sic!)
* Works nicely, no duplication of `node_modules` inside the packages[2].
* Really nice way of rebulding the packages.
  * Sadly the packages still need to be updated inside individual apps. ([2] would solve it)
* A bit problematic/time-consuming setup for apps.
  * Can be solved by abstracting configuration (rollup/tsconfig/babel).
  * Took few hours.

## Additional Reading

* <https://blog.scottlogic.com/2018/02/23/javascript-monorepos.html>
* <https://github.com/lerna/lerna#readme>
* <https://blog.logrocket.com/setting-up-a-monorepo-with-lerna-for-a-typescript-project-b6a81fe8e4f8/>
* <https://dev.to/stereobooster/typescript-monorepo-for-react-project-3cpa>
* <https://github.com/stereobooster/typescript-monorepo>

## Notes

[1] - Actually does not executable in the browser because `react`, `react-dom`, and `styled-components` are not included. Including them would make the built file unreadable.
[2] - Probably it's possible to de-dupe the `node_modules` from apps, but it was not investigated.
