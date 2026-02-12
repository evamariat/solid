import js from '@eslint/js';
import globals from 'globals';

export default [
  // ✅ IGNORES FIRST - critical for v10
  {
    ignores: [
      'myblog/**',           // Skip ALL React JSX
      'node_modules/**',
      'dist/**',
      '**/*.log'
    ]
  },
  // ✅ Backend linting rules
  js.configs.recommended,
  {
    languageOptions: {
      globals: globals.node  // require(), console, cors()
    }
  }
];