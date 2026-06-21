import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import nrdicLayout from './src/eslint-rules/responsive-layout.js'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    // Mobile-first layout guardrail. Exempt the primitives and tokens,
    // since those files legitimately hold the literal class maps the rule
    // steers everything else toward.
    files: ['src/**/*.{ts,tsx}'],
    ignores: ['src/components/layout/**', 'src/theme/**'],
    plugins: { nrdic: nrdicLayout },
    rules: { 'nrdic/responsive-layout': 'error' },
  },
])
