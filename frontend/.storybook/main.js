import { mergeConfig } from 'vite';

export default {
  framework: "@storybook/web-components-vite",
  stories: ["../src/**/*.stories.js"],
  addons: [],
  docs: {
    autodocs: false
  },
  core: {
    builder: '@storybook/builder-vite'
  }
};
