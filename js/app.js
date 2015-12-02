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
   .controller('titlebar', function ($scope) {
       if (angular.version.full != "") {
           //document.getElementById("AngularJS-small").style.visibility="visible" ;
           $scope.showlogo=true;
           console.log("In resumeApp angular.version.full: " + angular.version.full);
       }   	
   	})
   .controller('candidatePersonCtrl', function ($scope) {
      // Manage input from the candidatePerson form
      $scope.personname = {
          preferredsalutationcode : "",
      };
   });