module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}

// config for primereact
//
// const primereactPackages = ['megamenu', 'menuitem', 'button']
//
// module.exports = {
//   plugins: [
//     'postcss-flexbugs-fixes',
//     [
//       'postcss-preset-env',
//       {
//         autoprefixer: {
//           flexbox: 'no-2009',
//         },
//         stage: 3,
//         features: {
//           'custom-properties': false,
//         },
//       },
//     ],
//     [
//       '@fullhuman/postcss-purgecss',
//       {
//         content: [
//           './app/**/*.{js,jsx,ts,tsx}',
//           './components/**/*.{js,jsx,ts,tsx}',
//           './duties/**/*.{js,jsx,ts,tsx}',
//           ...primereactPackages.map((p) => `./node_modules/primereact/${p}/*.js`),
//         ],
//         defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
//         safelist: ['html', 'body'],
//       },
//     ],
//   ],
// }
