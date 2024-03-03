// .eslintrc.js
module.exports = {
  root: true, // 指定 ESLint 是否應該停止在此處尋找 .eslintrc 文件
  env: {
    node: true, // 指定環境，此處為 Node.js 環境
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier'], // 指定所使用的 ESLint 插件
  extends: ['plugin:@typescript-eslint/recommended', 'prettier', "plugin:prettier/recommended"],
  overrides: [
    {
      files: ['**/*.ts'], // 對所有 .ts 文件進行覆蓋設置
      parser: '@typescript-eslint/parser', // 指定解析器
      parserOptions: {
        project: 'tsconfig.json', // 指定 TypeScript 項目的 tsconfig 文件
        sourceType: 'module', // 指定模塊類型
      },
      rules: {
        '@typescript-eslint/interface-name-prefix': 'off', // 關閉介面名稱必須以 I 開頭的規則
        '@typescript-eslint/explicit-function-return-type': 'off', // 關閉必須顯式聲明函數返回類型的規則
        '@typescript-eslint/no-explicit-any': 'off', // 關閉不允許使用 any 類型的規則
        '@typescript-eslint/explicit-module-boundary-types': 'off', // 關閉必須顯式聲明模塊返回類型的規則
        '@typescript-eslint/no-unused-vars': 'off', // 關閉不允許定義但未使用的變量的規則
        '@typescript-eslint/ban-types': 'off', // 關閉禁止使用特定類型的規則
        '@typescript-eslint/no-array-constructor': 'off', // 關閉禁止使用數組構造函數的規則
      },
    },
    {
      files: ['**/*.spec.ts', 'integration/**/*.ts'], // 對所有測試文件進行覆蓋設置
      parser: '@typescript-eslint/parser', // 指定解析器
      parserOptions: {
        project: 'tsconfig.spec.json', // 指定 TypeScript 測試項目的 tsconfig 文件
        sourceType: 'module', // 指定模塊類型
      },
      rules: {
        '@typescript-eslint/interface-name-prefix': 'off', // 關閉介面名稱必須以 I 開頭的規則
        '@typescript-eslint/explicit-function-return-type': 'off', // 關閉必須顯式聲明函數返回類型的規則
        '@typescript-eslint/no-explicit-any': 'off', // 關閉不允許使用 any 類型的規則
        '@typescript-eslint/explicit-module-boundary-types': 'off', // 關閉必須顯式聲明模塊返回類型的規則
        '@typescript-eslint/no-unused-vars': 'off', // 關閉不允許定義但未使用的變量的規則
        '@typescript-eslint/ban-types': 'off', // 關閉禁止使用特定類型的規則
        '@typescript-eslint/no-empty-function': 'off', // 關閉不允許定義空函數的規則
      },
    },
  ],
};