/* Project:  xml-resume
   Filename: app.js
   Version:  V0.0.2-pre-alpha
   By:       Joe Devlin
   Company:  Vivid Ventures LLC
*/

/* Dependencies:
     Angular
     ui-bootstrap
*/

angular.module('resumeApp', ['ngAnimate', 'ui.bootstrap'])
   .controller('titlebarCtrl', function ($scope) {
       if (angular.version.full != "") {
           $scope.showlogo=true;
           console.log("In resumeApp angular.version.full: " + angular.version.full);
       }
   	})
  .controller('tabViewCtrl', function ($scope, $window) {
    $scope.tabs = [
      { title:'Form', content:'formView' },
      { title:'HTML', content:'htmlTemplateView'},
      { title:'Text', content:'textTemplateView'},
      { title:'Report', content:'reportView'},
      { title:'JSON', content:'jsonView'},
      { title:'XML', content:'xmlView'},
      { title:'DOCX', content:'docxView', disabled: true},
      { title:'PDF', content:'pdfView', disabled: true},
      { title:'Search', content:'searchView', disabled: true}
    ];

  $scope.alertMe = function() {
    setTimeout(function() {
      $window.alert('You\'ve selected the alert tab!');
    });
  };
});