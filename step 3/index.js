sap.ui.define([
	"sap/m/Text"
], 
 //функция которая создается диномично и выводит на экран.
    function (Text) {
	"use strict";

	new Text({
		text: "Hello World"
	}).placeAt("content");

});