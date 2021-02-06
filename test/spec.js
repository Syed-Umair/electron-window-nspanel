const Application = require('spectron').Application
const assert = require('assert')
const electronPath = require('electron') // Require Electron from the binaries included in node_modules.
const path = require('path')

describe('PanelWindow', function () {
  this.timeout(10000)

  before(function () {
    this.app = new Application({
      path: electronPath,
      args: [path.join(__dirname, 'app')]
    })
    return this.app.start()
  });

  after(async function () {
    if (this.app && this.app.isRunning()) {
      await this.app.electron.remote.app.exit(0);
      process.exit(0);
    }
  });

  it ('shows NSPanel Windows without crashing', function () {
    return this.app.client.waitUntilWindowLoaded()
    .then(this.app.client.getWindowCount)
    .then(count => { assert.equal(count, 2) })
    .then(this.app.browserWindow.isVisible)
    .then(visible => { assert.equal(visible, true) })
  });
})
