var app = require("electron").app;
var { PanelWindow, FullScreenPanelWindow } = require("../../");

var mainWindow1 = null;
var mainWindow2 = null;

app.on("ready", function () {
	mainWindow1 = new PanelWindow({
		center: true,
		width: 1400,
		height: 900,
		minHeight: 100,
        minWidth: 100,
	});
	mainWindow1.loadURL("file://" + __dirname + "/index.html");
	mainWindow1.on("ready-to-show", function () {
		mainWindow1.show();
	});
	mainWindow2 = new FullScreenPanelWindow({
		center: true,
		width: 1400,
		height: 900,
		minHeight: 100,
        minWidth: 100,
    });
	mainWindow2.loadURL("file://" + __dirname + "/index.html");
	mainWindow2.on("closed", function () {
		mainWindow2 = null;
	});
	mainWindow2.on("ready-to-show", function () {
		mainWindow2.show();
	});
});
