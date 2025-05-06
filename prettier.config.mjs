import baseConfig from '@repo/prettier-config';

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  ...baseConfig,
  plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
