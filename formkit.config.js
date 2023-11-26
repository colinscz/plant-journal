/* import { de, en } from '@formkit/i18n';
import { generateClasses } from '@formkit/themes'
import { genesisIcons } from '@formkit/icons'
import myTailwindTheme from './tailwind-theme'
import type { DefaultConfigOptions } from '@formkit/vue'

const config: DefaultConfigOptions = {
    locales: { de, en },
    locale: 'en',
    icons: {
        ...genesisIcons,
    },
    config: {
        classes: generateClasses(myTailwindTheme),
    },
}

export default config
 */

// formkit.config.js
import { de, en } from '@formkit/i18n';
import { generateClasses } from '@formkit/themes'
import { genesisIcons } from '@formkit/icons'
import myTailwindTheme from './tailwind-theme.js' // change to your theme's path

export default {
    locales: { de, en },
    locale: 'en',
  icons: {
    ...genesisIcons,
  },
  config: {
    classes: generateClasses(myTailwindTheme),
  },
}