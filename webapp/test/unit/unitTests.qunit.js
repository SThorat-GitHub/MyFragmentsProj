/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
<<<<<<< HEAD
		"demo/MyODPApp/test/unit/AllTests"
=======
		"SThorat/ST_Assignment1/test/unit/AllTests"
>>>>>>> refs/heads/master
	], function () {
		QUnit.start();
	});
});