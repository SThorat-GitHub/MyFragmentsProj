/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
<<<<<<< HEAD
		"demo/MyODPApp/test/integration/AllJourneys"
=======
		"SThorat/ST_Assignment1/test/integration/AllJourneys"
>>>>>>> refs/heads/master
	], function () {
		QUnit.start();
	});
});