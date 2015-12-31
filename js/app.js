/* Project:  xml-resume
   Filename: app.js
   Version:  V0.0.1-pre-alpha
   By:       Joe Devlin
   Company:  Vivid Ventures LLC
*/

/* Dependencies:
     Angular
     jQuery
     bootstrap
*/

angular.module('resumeApp', [])
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