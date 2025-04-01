import type { NextConfig } from 'next'
import createMDX from '@next/mdx'
import createBundleAnalyzer from '@next/bundle-analyzer'

const nextConfig: NextConfig = {
  output: 'export',
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // sass
  sassOptions: {
    // forced to do this by primereact-sass-theme to get rid of all the noise
    silenceDeprecations: ['legacy-js-api', 'color-functions', 'global-builtin', 'import'],
  },
  // next-image-export-optimizer
  images: {
    loader: 'custom',
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  transpilePackages: ['next-image-export-optimizer'],
  env: {
    nextImageExportOptimizer_imageFolderPath: 'public/images',
    nextImageExportOptimizer_exportFolderPath: 'out',
    nextImageExportOptimizer_quality: '75',
    nextImageExportOptimizer_storePicturesInWEBP: 'true',
    nextImageExportOptimizer_exportFolderName: 'optimized-images',
    nextImageExportOptimizer_generateAndUseBlurImages: 'true',
    nextImageExportOptimizer_remoteImageCacheTTL: '0',
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.webm/,
      type: 'asset/resource',
    })

    return config
  },
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

export default withBundleAnalyzer(withMDX(nextConfig))
