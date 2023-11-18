import { de, en } from '@formkit/i18n';
import { DefaultConfigOptions } from '@formkit/vue';

import { generateClasses } from '@formkit/themes'
import { genesisIcons } from '@formkit/icons'
import myTailwindTheme from './tailwind-theme.js'


const config: DefaultConfigOptions = {
    locales: { de, en },
    locale: 'en',
    icons: {
        ...genesisIcons,
      },
      config: {
        classes: generateClasses(myTailwindTheme),
      },
};

export default config;