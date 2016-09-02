var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*",
  contentScriptFile: "./temer-golpista.js",
  contentScriptWhen: "ready"
});

