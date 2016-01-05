describe("Angularjs revision check", function() {
  it("should return a value (not null)", function() {
    expect(angular.version.full).not.toBe("");
  });
});

/*
//Ref:  https://docs.angularjs.org/guide/unit-testing
beforeEach(angular.mock.module('resumeApp'));//get the angular app
var $controller;
beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
}));
*/


describe("The navigation bar", function() {
	 it("should have nine tabs defined in app.js by tabViewCtrl.", function(tabCount){
       //var $scope = {};
       //var controller = $controller('tabViewCtrl', { $scope: $scope });
  	   // something like:
	 	   //resumeApp.tabViewCtrl.tabs.length;
	 	   var tabs=[];
	 	   expect(tabs.length).toBe(9);
	 });
});

