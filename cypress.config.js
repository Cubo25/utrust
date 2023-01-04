const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "https://merchants.sandbox-utrust.com/",
    viewportWidth: 1920,
    viewportHeight: 1080,
    user_name: "j.vitek25@gmail.com",
    user_password: "Bjy3!9tSCCgzVa!",
  },
});
