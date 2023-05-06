# ESLint
### Rules
- `eslint-config-airbnb-base`
- `eslint-config-airbnb-typescript`
### Parser
- `@typescript-eslint/parser`
### Plugins
- `@typescript-eslint`
### parserOptions
- **project**: `./tsconfig.eslint.json`

**Config**: `.eslintrc`

#### Use `yarn lint` to run linter


# TypeScript
## yarn build
Compile project with the given config:

`tsc --project tsconfig.eslint.json`

## yarn start
Run `yarn build` + start script with node:

`yarn build && node ./build/index.js`

## yarn dev
Watch changes in .ts files and run `yarn start` 

Check `nodemon.json`

`nodemon`

## Config
File: `tsconfig.eslint.json`

# TypeDoc
## `yarn docs` 

**Cmd**: `typedoc --tsconfig tsconfig.eslint.json && open file://$(pwd)/docs/index.html`

**Config**: `typedoc.json`

**Out dir**: `./docs`

Generate docs with th given config and open link

# Minify

## yarn minify

**Cmd**: `minify ./index.js > ./index.min && mv ./index.min ./index.js`

Minify index.js file, remove comments

TODO: minify all js files

Something like this, maybe:

``` shell
for file in $(find npm -type f -name '*.js');
do
  minify "./$file" > "./$file.min" && mv "./$file.min" "./$file";
done
```

# .gitignore
- node_modules
- .DS_Store
- **/.DS_Store
- *.js
- docs
- build

# .npmignore
- \*
- !*.d.ts
# License
MIT

# Github Actions
### piblish.yml

Will publish repo to npm when new release is created

`NPM_TOKEN` variable can be set in repo > Settings > Secrets and variables > Actions > New repository secret