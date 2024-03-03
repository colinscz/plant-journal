import { de, en } from '@formkit/i18n';
import { genesisIcons } from '@formkit/icons'

// formkit.config.ts
import { rootClasses } from './formkit.theme';
import type { DefaultConfigOptions } from '@formkit/vue';

const formkitConfig: DefaultConfigOptions = {
    locales: { de, en },
    locale: 'en',
  icons: {
    ...genesisIcons,
  },
  config: {
    rootClasses
  },
}

export default formkitConfig;