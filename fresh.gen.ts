// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/[area].tsx";
import * as $1 from "./routes/index.tsx";
import * as $$0 from "./islands/ListOfCountries.tsx";
import * as $$1 from "./islands/ToggleDisplayThemeButton.tsx";

const manifest = {
  routes: {
    "./routes/[area].tsx": $0,
    "./routes/index.tsx": $1,
  },
  islands: {
    "./islands/ListOfCountries.tsx": $$0,
    "./islands/ToggleDisplayThemeButton.tsx": $$1,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
