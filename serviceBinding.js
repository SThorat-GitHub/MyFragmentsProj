function initModel() {
	var sUrl = "/ES5_ODP/odata/IWBEP/GWDEMO;v&#x3D;1/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}