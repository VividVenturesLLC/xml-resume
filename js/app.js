/* Project:  xml-resume
   Filename: app.js
   Version:  V0.0.2-pre-alpha
   By:       Joe Devlin
   Company:  Vivid Ventures LLC
*/

/* Dependencies:
     Angular
     jQuery
     bootstrap
*/

var resumeApp = angular.module('resumeApp', ['ngRoute'])
   .controller('titlebarCtrl', function ($scope) {
       if (angular.version.full != "") {
           $scope.showlogo=true;
           console.log("In resumeApp angular.version.full: " + angular.version.full);
       }
   	})
   .controller('mainController', function($scope, $route, $routeParams, $location) {
      	// https://docs.angularjs.org/api/ngRoute/service/$route#!
       $scope.$route = $route;
       $scope.$location = $location;
       $scope.$routeParams = $routeParams;
       /*if CandidatePerson object does not exist on this scope then create it
       */
      console.log("$scope.CandidatePerson:");//debug only
      console.dir($scope.CandidatePerson);//debug only


       if ($scope.CandidatePerson === undefined) {
           $scope.CandidatePerson={};
           console.log('Created object $scope.CandidatePerson in mainController');//debug only
       }

      console.log("$scope in mainController:");//debug only
      console.dir($scope);//debug only
   })
    	
   .controller('cpFormCtrl', function ($scope, $routeParams) {
      // Link model to the candidatePerson form
      $scope.name = "cpFormCtrl";
      $scope.params = $routeParams;       
      
      console.log("$scope in cpFormCtrl:");//debug only
      console.dir($scope);//debug only
   })

   .controller('htmlController', function ($scope, $routeParams) {
      // Link model to the candidatePerson form
      $scope.name = "htmlController";
      $scope.params = $routeParams;

      console.log("$scope in htmlController:");//debug only
      console.dir($scope);//debug only
   });




resumeApp
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/formView', {
        templateUrl: 'views/form_view.html',
        controller: 'cpFormCtrl'
      }).
      when('/htmlTemplateView', {
        templateUrl: 'views/templateChronological.html',
        controller: 'htmlController'
      }).
      when('/jsonView', {
        templateUrl: 'model/CandidatePerson.json',
        controller: 'modelController'
      }).
      otherwise({
        redirectTo: 'views/form_view.html'
      });
  }]);