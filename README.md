# React Personal Setup

My personal setup for React to be used as template when starting a new project.

## Details

### Pre-commit hooks
- [x] [Husky](https://github.com/typicode/husky) - to run commands or scripts before committing or pushing
- [x] [Prettier](https://prettier.io/docs/en/precommit.html) - to format code
- [x] [ESLint](https://eslint.org/docs/user-guide/getting-started) - to find and fix problems in code
- [x] [lint-staged](https://github.com/okonet/lint-staged) - to run multiple linters (e.g. Prettier and ESLint) against staged git files

1) Add `devDependencies`: 
```
yarn add --dev eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks husky lint-staged prettier
```

2) Add scripts in `package.json`
```
"husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
},
"lint-staged": {
    "src/**/*.{js,jsx,json,css}": [
      "prettier --write",
      "eslint --fix"
    ]
}
```
3) Create a `.eslintrc` file in root folder
```
{
  "extends": [ "airbnb","plugin:prettier/recommended", "prettier/react"],
  "parser": "babel-eslint",
  "parserOptions": { "sourceType": "module" },
  "rules": {
    "prettier/prettier": ["error", { "singleQuote": true }],
    "quotes": [2, "single", { "avoidEscape": true }]
  }
}
```
4) Create a .prettierrc file in root folder
```
{
  "singleQuote": true
}
```

### UI Framework
- [ ] [Material UI](https://material-ui.com/)

### State management
- [ ] [Redux](https://redux.js.org/)
- [ ] [React Hooks](https://reactjs.org/docs/hooks-overview.html)

### Other dependencies
- [ ] [React Router](https://reactrouter.com/web/guides/quick-start)
- [ ] [React Drag and Drop](https://react-dnd.github.io/react-dnd/examples/tutorial)
