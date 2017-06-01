(function () {
  'use strict';
  angular
    .module('CoreApplication')
    .directive('skillChart' , SkillChart);

    SkillChart.$injector = [];

    function SkillChart(){
      var directive = {
        restrict: 'EA',
        transclude: true,
        link: linkfn
      };

      return directive;

      function linkfn(scope, element, attrs){

        var options = {
          chart: {
            type: 'bar'
          },

          title: {
            text: ''
          },

          xAxis: {
            categories: ['HTML', 'CSS', 'JS', 'PHP', 'SQL']
          },
          yAxis: {
            min: 0,
            max: 10,
            title: {
              text: 'Skill range'
            }
          },
          series: [{
            name: 'My Coding Skills',
            data: [9.5, 9, 7.5, 8, 7]
          }]
        };


      //highchart instanciate
      Highcharts.chart(element[0],options);
      }
    }
})();
