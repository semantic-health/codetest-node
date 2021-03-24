const newman = require("newman");

newman.run(
  {
    collection: require("./tests/api_tests.json"),
    reporters: "cli",
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log("collection run complete!");
  }
);
