(function () {
  'use strict';

  angular
    .module('CoreApplication')
    .controller('coreController', coreController);

    coreController.$injector = ['CoreInformation', 'GetPage', '$log', '$state'];

    function coreController(CoreInformation, GetPage, $log, $state) {
      var core = this;

      core.info = CoreInformation;
      core.page = GetPage.page;
    }

})();
