(function () {
  'use strict';

  angular
    .module('app.background', [])
    .directive('animateBackground', animateBackground);

    function animateBackground() {
      var directive = {
        restrict: 'A',
        link: linkfn
      }
      return directive;
    };

    function linkfn(scope, element, attr){
      var mouseStrength = 25;
      var height = mouseStrength / $(window).height();
      var width = mouseStrength / $(window).width();
      var bg = $('#bg-move');

      bg.on('mousemove', function (e) {

        var pageX = e.pageX - ($(window).width() / 2),
            pageY = e.pageY - ($(window).height() / 2);

        var newValX = width * pageX * - 1 -25 ,
            newValY = height * pageY * - 1 -50;
        bg.css('background-position', newValX+'px '+ newValY+'px');
      });
    }
})();
