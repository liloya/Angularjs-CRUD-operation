var myApp=angular.module("myApp",[]);

myApp.controller("myController",function($scope){
	console.log('in my controller.......');

    $scope.newUser={};
    $scope.clickedUser={};
    $scope.message="";

    $scope.saveUser=function(){
    	console.log($scope.newUser);//data display on console
    	$scope.users.push($scope.newUser);//attach data with table
    };

    $scope.selectUser=function(user){
    	console.log(user);
    	$scope.clickedUser=user;
    };

    $scope.updateUser=function(){

    };
    $scope.deleteUser=function(){
    	$scope.users.splice($scope.users.indexOf($scope.clickedUser),1);//splice method return removed item

    };

	$scope.users=[
	   {uname:"sabina",email:"cse.sabina@gmail.com"},
	   {uname:"sabina",email:"cse.sabina@gmail.com"}
	];

});