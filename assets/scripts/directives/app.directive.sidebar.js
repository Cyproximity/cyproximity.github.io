(function () {
  'use strict';

  angular
    .module('app.sidebar', [])
    .directive('sidebarNavigation', SidebarNavigation);

    function SidebarNavigation(){
      var directive = {
        restrict: 'E',
        transclude: true,
        templateUrl: 'assets/views/templates/tmpl.drv.sidebar.html',

        link: linkfn,

        controller: SidebarController,
        controllerAs: 'sidebar',
        bindToController: true,

      };

      return directive;
    }
    function SidebarController(){

      var sidebar = this;

      sidebar.toggle = true;
    }

    function linkfn(scope, element, attr){
      var togglerbtn = $('#sidebartoggler'),
          mainsidebar = $('.main-sidebar'),
          coresidebar = $('.coresidebar'),
          dimmer = $('.dimmed-passive'),
          state = scope.sidebar.toggle;

      var toggleSidebar = function (){
       state = !state;
        if(state && typeof state === 'boolean'){
          // burger-open burger-close
          togglerbtn.removeClass('burger-open').addClass('burger-close');
          coresidebar.removeClass('cs-close').addClass('cs-open');
          mainsidebar.removeClass('slideOff').addClass('slideOn');
          // console.log(state);
        }else{
          togglerbtn.removeClass('burger-close').addClass('burger-open');
          coresidebar.removeClass('cs-open').addClass('cs-close');
          mainsidebar.removeClass('slideOn').addClass('slideOff');
          // console.log(state);
        }
      };

      togglerbtn.on('click', toggleSidebar);

    }

})();
