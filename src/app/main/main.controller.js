(function() {
  'use strict';

  angular
    .module('myapp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1439649721184;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }

})();

angular.module('myapp').controller('CarouselBeatsCtrl', function ($scope) {
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
    $scope.slides = [
    {
    src: 'slide1.png',
    desc: 'Наслаждайся музыкой<br/><span>по-настоящему</span> в наших наушниках <br/> <span>BEATS BY DR.DRE!</span>'
    },
    {
      src: 'slide2.jpg',
    desc: 'pic2'
    },
    {
      src: 'slide3.png',
    desc: 'pic3'
    }
    ];

});

angular.module('myapp').controller('TabsBeatsCtrl', function ($scope, $window) {
 
});

angular.module('myapp').controller("myCtrl", function($scope, $timeout) {
    $scope.mapOption = {
         center: {
             latitude: 45.4,
             longitude: -71.9
         },
         zoom: 11
    };
    $scope.visible = false;
    $scope.mapViewPosition = {};
    $scope.$watch("visible", function(newvalue) {
        $timeout(function() {
             var map = $scope.myGoogleMap.refresh();
        }, 0);
    });
});
