(function () {
  'use strict';

  angular
    .module('CoreApplication')
    .factory('CoreInformation', CoreInformation );

    function CoreInformation(){
      var data = {};

      data.name =  'Gerald Agustin';

      data.info = {
        age: 19,
        gender: 'Male'
      };

      data.contact = {
        git: 'https://github.com/Cyproximity',
        linkedin: 'https://www.linkedin.com/in/gerald-agustin-85a7b1111',
        mailto: 'gerald.agustin09@gmail.com'
      };

      data.social = {
        twitter: 'https://twitter.com/GraldAgstin',
        facebook: 'https://www.facebook.com/gerald.agustin3',
        soundcloud: 'https://soundcloud.com/geraldino-3"',
      };

      return data;
    }
})();
