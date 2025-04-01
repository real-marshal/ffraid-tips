# ffraid-tips

## todo
- optimize & preload navbar images

## features
- easy urls (esp useful for console players)
- brief & detailed versions

## maintenance
- update `gameData.ts` file when a new tier drops (currently at even patches) or a new expansion got released
- add guides to `duties` folder
- make sure images are optimized

## notes
- even though analyzer [shows 2 react-doms](https://github.com/vercel/next.js/discussions/51296), 2 resulting chunks are actually not used
- you have to add imported primereact packages to postcss config to prevent purging of their styles. the only alternative is to just not purge anything which is not good
- [clock positions raidplan](https://raidplan.io/plan/Dw9OddxYVFHSj7cO)
- be careful, there are hardcoded localhost proxies in yarn config file
