import { Options } from "$fresh/plugins/twind.ts";
import * as colors from "twind/colors";
export default {
  selfURL: import.meta.url,
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        slate: colors.coolGray,
      },
    },
  },
} as Options;
