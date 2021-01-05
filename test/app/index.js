var app = require('electron').app;
var {PanelWindow, FullScreenPanelWindow} = require('../../');
var path = require('path')

var mainWindow1 = null;
var mainWindow2 = null;

app.on('ready', function () {
  mainWindow1 = new PanelWindow({
    center: true,
    width: 1400,
    height: 900,
    minHeight: 100,
    minWidth: 100,
    transparent: true,
    show: false
  });
  mainWindow1.loadURL('file://' + __dirname + '/index.html')
  mainWindow1.on('closed', function () { mainWindow1 = null })
  mainWindow1.on('ready-to-show',function() {
    mainWindow1.show();
  });
  mainWindow2 = new PanelWindow({
    center: true,
    width: 1400,
    height: 900,
    minHeight: 100,
    minWidth: 100,
    transparent: true,
    show: false
  });
  mainWindow2.loadURL('file://' + __dirname + '/index.html')
  mainWindow2.on('closed', function () { mainWindow2 = null })
  mainWindow2.on('ready-to-show',function() {
    mainWindow2.show();
  });
})
