const Application = require('spectron').Application
const assert = require('assert')
const electronPath = require('electron') // Require Electron from the binaries included in node_modules.
const path = require('path')

describe('PanelWindow', function () {
  this.timeout(10000)

  beforeEach(function () {
    this.app = new Application({
      path: electronPath,
      args: [path.join(__dirname, 'app')]
    })
    return this.app.start()
  })

  afterEach(function () {
    if (this.app && this.app.isRunning()) {
      return this.app.stop()
    }
  })

  it ('shows NSPanel Windows without crashing', function () {
    return this.app.client.waitUntilWindowLoaded()
    .then(this.app.client.getWindowCount)
    .then(count => { assert.equal(count, 2) })
    .then(this.app.browserWindow.isVisible)
    .then(visible => { assert.equal(visible, true) })
  });
})
