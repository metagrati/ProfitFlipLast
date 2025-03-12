import { mergeConfig } from 'vite';

export default {
  framework: '@storybook/web-components-vite',
  stories: ['../stories/**/*.stories.js'],
  addons: [],
  docs: {
    autodocs: false
  },
  core: {
    builder: '@storybook/builder-vite'
  }
};
