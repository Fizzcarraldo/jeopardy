import { configure } from '@storybook/angular';
import '@storybook/addon-console';

// automatically import all files ending in *.stories.ts
configure(require.context('../src', true, /\.stories\.[tj]s$$/), module);
