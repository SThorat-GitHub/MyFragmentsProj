/*global QUnit*/

sap.ui.define([
	"SThorat/ST_Assignment1/controller/ST_View1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ST_View1 Controller");

	QUnit.test("I should test the ST_View1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});