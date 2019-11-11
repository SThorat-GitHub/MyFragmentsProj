sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("demo.MyODPApp.controller.View1", {
		onInit: function () {
			var that = this;
			var dataBar = "/ES5_ODP/odata/IWBEP/GWDEMO;v=1/";
			var data1 = new sap.ui.model.odata.ODataModel(dataBar, true, "", "");

			data1.read("/SalesOrderCollection", null, false, false, function (oData, oResponse) {


				var sampleDatajson1 = new sap.ui.model.json.JSONModel(oData);
				that.getView().setModel(sampleDatajson1);
				that.getView().byId("TabId").setModel(sampleDatajson1);
			}, function (oError) {});
		}
		
		
	});
});