import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    coverage: false,
  },
  projectId: "n4t7q1",
  retries: {
    openMode: 0,
    runMode: 10,
  },
  video: false,
  viewportHeight: 550,
  viewportWidth: 700,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {},
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    experimentalSessionAndOrigin: true,
  },
});
