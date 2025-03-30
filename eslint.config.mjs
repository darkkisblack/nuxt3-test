// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import globals from 'globals'

export default withNuxt({
  files: ['**/*.{js,ts,vue}'],
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
    },
  },
  
  // ts
  rules: {
    'semi': ['error', 'always'],
    'indent': ['warn', 2],
    'vue/html-indent': ['warn', 2],
    'vue/script-indent': [
      'warn',
      2,
      {
        baseIndent: 0,
        switchCase: 0,
        ignores: []
      }
    ] ,
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/no-explicit-any': ['warn'],
    '@typescript-eslint/ban-types': 'off',

    // Vue
    'vue/html-self-closing': 'off',
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/attribute-hyphenation': ['error', 'never'],
    'vue/custom-event-name-casing': ['error', 'camelCase'],
    'vue/v-on-event-hyphenation': ['error', 'never', {
      autofix: false,
      ignore: [],
    }],
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
        ignores: ['pre', 'textarea', 'div'],
      },
    ],
    'vue/max-attributes-per-line': ['warn', {
      singleline: 1,
      multiline: 1
    }],
    'vue/html-closing-bracket-newline': ['warn', {
      singleline: 'never',
      multiline: 'always'
    }]
  },
})
