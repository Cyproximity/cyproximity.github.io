(function () {
  'use strict';

  angular
    .module('CoreApplication')
    .factory('GetPage', GetPage );

    function GetPage(){
      var data = {};

      data.page = ['home', 'about','articles', 'contact'];

      return data;
    }
})();
