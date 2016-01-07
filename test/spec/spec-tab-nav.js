// Test the tab navigation controller
console.log('In file: spec-tab-nav.js');

describe("Angularjs revision check", function() {
  it("should return a value (not null)", function() {
    expect(angular.version.full).not.toBe("");
  });
});


//Ref:  https://docs.angularjs.org/guide/unit-testing
beforeEach(angular.mock.module('resumeApp'));//get the angular app

var $controller;
beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around
    // the parameter names when matching
    $controller = _$controller_;
}));


describe("The navigation bar", function() {
    it("should have nine tabs defined in app.js by tabViewCtrl.", function(){
       var $scope = {};
       var tabViewCtrl = $controller('tabViewCtrl', { $scope: $scope });
       expect($scope.tabs.length).toBe(9);
	  });
});