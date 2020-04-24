sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast"
], function (Controller, MessageToast) {
   "use strict";
   return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
      onShowHello : function () {
         MessageToast.show("Hello World");//сообщение,всплывающее окно с информацией об успешных или информационных сообщениях, которое автоматически исчезает через несколько секунд или ожидание нажатие клавишу пользователя
      }
   });
});