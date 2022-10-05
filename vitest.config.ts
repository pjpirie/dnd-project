import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["src"],
    globals: true,
    environment: "jsdom",
    setupFiles: ["src/testSetup.ts"],
  },
});
