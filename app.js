
var app = angular.module('movieApp', ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "./views/home.html",
      controller : "app"
    })
    .when("/form", {
      templateUrl : "./views/add.html",
      controller : "app"
    })
   
  });


app.controller('app', function($location,$scope) {
    
    $scope.movies= [
        {title: 'Movie 1', description: 'Description for Movie 1'},
        {title: 'Movie 2', description: 'Description for Movie 2'},
        {title: 'Movie 3', description: 'Description for Movie 3'}
    ];

   
    $scope.addMovie = function() {
      
        if ($scope.newName && $scope.newDescription) {
           
            $scope.movies=[...$scope.movies,{
                title: $scope.newName,
                description: $scope.newDescription,
            }];
            console.log( $scope.movies);
          $location.path("/")
          
        } else {
            alert("Please provide both title and description for the new movie.");
        }
    };
   

    $scope.resetMovies = function() {
        
        $scope.movies = [
            {title: 'Movie 1', description: 'Description for Movie 1'},
            {title: 'Movie 2', description: 'Description for Movie 2'},
            {title: 'Movie 3', description: 'Description for Movie 3'}
        ]
    };
});
