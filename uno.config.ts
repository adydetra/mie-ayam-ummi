import transformerDirectives from '@unocss/transformer-directives';
import { defineConfig, presetAttributify, presetIcons, presetWind3 } from 'unocss';

export default defineConfig({
  presets: [
    presetWind3(),
    presetIcons(),
    presetAttributify(),
  ],
  theme: {
    fontFamily: {
      sans: 'Outfit',
    },
  },
  shortcuts: {
    flexcenter: 'flex justify-center items-center',
    flexbetween: 'flex justify-between items-center',
  },
  transformers: [
    transformerDirectives(),
  ],
});
