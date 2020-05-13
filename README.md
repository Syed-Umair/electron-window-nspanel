# electron-window-nspanel
create NSPanels like electron windows

## Install

```
npm i @syed_umair/electron-window-nspanel
```

## Usage

```
const { FullScreenPanelWindow, PanelWindow } = require('electron-window-nspanel');
const winRef1 = new FullScreenPanelWindow(<Electron BrowserWindow Options Object>); // To create fullscreen transparent window
const winRef2 = new PanelWindow(<Electron BrowserWindow Options Object>); // To create normal transparent window
// Show window without activating the dock icon
winRef1.show();
winRef2.show();
```
