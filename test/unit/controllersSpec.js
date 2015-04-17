
/* jasmine specs for controllers go here */

describe('controllers', function(){
    var
        $scope,
        myCtrl1;

    beforeEach(function(){
        // Loads the tested module
        module('myApp.controllers');

        inject(function($rootScope, $controller){
            $scope = $rootScope.$new();
            myCtrl1 = $controller('EditController', {
              $scope: $scope,
              data: {
                content: ''
              }
            });
        });
    });


    it('should NOT show the send button when content is too short', function() {
        $scope.content = "short!";
        $scope.transpile();
        expect($scope.isSendVisible).toBe(false);
    });

    it('should show the send button when content length is more than n characters', function() {
        $scope.content = "This is a longer content that should be OK";
        $scope.transpile();
        expect($scope.isSendVisible).toBe(true);
    });

    it("Should clear the content clicking on the clear button", function(){
        $scope.content = "Some content";
        $scope.clear();
        expect($scope.content).toEqual("");
    });

});
