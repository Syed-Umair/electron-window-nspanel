var BrowserWindow = require('electron').BrowserWindow;
var NativeExtension = require('bindings')('NativeExtension');

class FullScreenPanelWindow extends BrowserWindow {
  constructor(options) {
    super(options);
    NativeExtension.MakeFullScreenPanel(this.getNativeWindowHandle());
  }

  show() {
    super.showInactive();
    NativeExtension.MakeKeyWindow(this.getNativeWindowHandle());
  }
}

class PanelWindow extends BrowserWindow {
  constructor(options) {
    super(options);
    NativeExtension.MakeNormalPanel(this.getNativeWindowHandle());
  }

  show() {
    super.showInactive();
    NativeExtension.MakeKeyWindow(this.getNativeWindowHandle());
  }
}

module.exports = {
  FullScreenPanelWindow,
  PanelWindow,
}
