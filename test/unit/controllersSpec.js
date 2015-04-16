
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
            myCtrl1 = $controller('MessageController', {$scope: $scope});
        });
    });


    it('should NOT show the send button when message is too short', function() {
        $scope.message = "short!";
        $scope.checkMessage();
        expect($scope.isSendVisible).toBe(false);
    });

    it('should show the send button when message length is more than n characters', function() {
        $scope.message = "This is a longer message that should be OK";
        $scope.checkMessage();
        expect($scope.isSendVisible).toBe(true);
    });

    it("Should clear the message clicking on the clear button", function(){
        $scope.message = "Some message";
        $scope.clearMessage();
        expect($scope.message).toEqual("");
    });

});
