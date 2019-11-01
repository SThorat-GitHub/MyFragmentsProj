/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"SThorat/ST_Assignment1/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});