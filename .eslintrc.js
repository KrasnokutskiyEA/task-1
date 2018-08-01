module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    "no-var": ["error"],
    "semi": ["error", "never"],
    "eqeqeq": ["error", "allow-null"],
    "no-param-reassign": ["warn", { "props": true }],
    "no-underscore-dangle": ["Off"],
    "arrow-body-style": ["warn", "as-needed"],
    "newline-per-chained-call": ["error", { ignoreChainWithDepth: 4 }],
    "react/jsx-no-bind": ["warn", {
      "ignoreRefs": true,
      "allowArrowFunctions": true,
      "allowBind": false,
    }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/prop-types": ["warn", { "ignore": [], "customValidators": [] }]
  }
};