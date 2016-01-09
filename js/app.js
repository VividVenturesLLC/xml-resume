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
   .controller('candidatePersonCtrl', function ($scope) {
      // Link model to the candidatePerson form
      // access the model file in ../model/candidatePerson.json
      //$scope.candidatePerson = {};
      $scope.personname = {
          preferredsalutationcode : "",
      };
   });



   
resumeApp
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/formView', {
        templateUrl: 'views/form_view.html',
        controller: 'formController'
      }).
      when('/htmlTemplateView', {
        templateUrl: 'views/templateChronological.html',
        controller: 'htmlController'
      }).
      otherwise({
        redirectTo: 'index.html'
      });
  }]);