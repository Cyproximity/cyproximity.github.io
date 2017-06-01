(function () {
  'use strict';

  angular
    .module('CoreApplication')
    .factory('GetPage', GetPage );

    function GetPage(){
      var data = {};

      data.qoutes = ['home', 'about'];

      return data;
    }
})();
