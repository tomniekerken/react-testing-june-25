/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/react-testing-june-25",
  plugins: [react(), tailwindcss()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    coverage: { provider: "v8" },
  },
});

// Schritt 1 - Base Setup mit TS
// Vitest https://vitest.dev/guide/
// npm install -D vitest
// package.json script "test": "vitest"

// Schritt 1.1 Vitest Globals
// INSIDE vite.config.ts
// Triple Slash Directive = /// <reference types="vitest" /> for vitest defineConfig types
// test: { globals: true } inside vite config

// Schritt 1.2 TypeScript Global Types
// TypeScript (tsconfig.app.json) Globals hinzufügen: "types": ["vitest/globals"]

// Schritt 2 - React Testing Library (Render, Screen)
// React Testing Library https://testing-library.com/docs/react-testing-library/intro
// npm install --save-dev @testing-library/react @testing-library/dom @types/react @types/react-dom
// import { render, screen } from "@testing-library/react";
// WE DON'T NEED CLEANUP ANYMORE - IT HAPPENS AUTOMATICALLY

// Schritt 2.1 - jsdom as a pure JS implementation of the DOM and browser APIs
// https://vitest.dev/config/#environment
// https://testing-library.com/docs/dom-testing-library/setup/#using-without-jest
// npm install --save-dev jsdom
// environment: "jsdom" -> inside vite config
// ALTERNATIVE: happy-dom (faster, but lacks some API)

// Schritt 2.2 - Jest-DOM companion library for assiertions with React Testing Library
// Jest-DOM https://testing-library.com/docs/ecosystem-jest-dom https://github.com/testing-library/jest-dom?tab=readme-ov-file#with-vitest
// npm install --save-dev @testing-library/jest-dom
// Add file vitest.setup.ts with import "@testing-library/jest-dom/vitest"; => Needed for DOM testing methods (.toBeInTheDocument ...)
// Add file path to the vite config to ensure jest-dom import will be loaded: setupFiles: ["./vitest.setup.ts"]
// TypeScript (tsconfig.app.json) Globals hinzufügen: "@testing-library/jest-dom"

// Schritt 3 - User Events
// https://testing-library.com/docs/user-event/intro#writing-tests-with-userevent
// npm install --save-dev @testing-library/user-event

// Schritt 4 - Coverage
// https://vitest.dev/guide/coverage
// vite config: coverage: { provider: "v8" }
// Script: "coverage": "vitest run --coverage"
// Ignore some code: /* v8 ignore next 3 */

// Schritt 5 - Mock Service Workers | API Request Interception
// https://mswjs.io/docs/getting-started
// npm i msw --save-dev
// Adjust vitest.setup.ts to start msw before tests

// Schritt 6 - Github Workflow & Pages
// GitHub Repository Settings -> Actions, General -> Workflow Permissions: Read and write permissions | Deploy rom GitHub Actions
// Make Repository Public
// Actions -> Node.js Continous Integration COPY & PASTE (.github/workflows/node.js.yml), Remove node-version below 22.x
// Push to repo, will run the workflow

// Add gh pages part to the yml file
// Explain actions from the marketplace: https://github.com/marketplace
// Setup all necessary steps inside node.js.yml

// Configure vite.config.ts
// configure base as repository name base: "/react-ghpages-februar"
// Configure package.json
// adjust repository name
// add "homepage": "<github>/<repository_name>/"
