const myApp = angular.module('myApp', []);
myApp.controller('myBlogList', function ($scope) {

    $scope.defaultPosts = defaultPosts;
    let posts = [];
    let i;
    let j;

    $scope.getItem = function () {
        posts = ['All'];
        for (i = 0; i < defaultPosts.length; i++) {
            for (j = 0; j < defaultPosts[i].category.length; j++) {
                if (posts.some(elem => elem == defaultPosts[i].category[j])) {
                } else {
                    posts.push(defaultPosts[i].category[j]);
                }
            }
        }
        return posts;
    }; 

    $scope.setPost = function (name) {
        $scope.defaultPosts = defaultPosts;
        if (name === 'all') {
            $scope.defaultPosts = defaultPosts;
        } else if (name === 'trip') {
            $scope.isvisible = true;
        } else {
            $scope.defaultPosts = $scope.defaultPosts.filter(elem => elem.category.some(elem => elem === name));
        }
    };


    $scope.addPost = function () {
        if ($scope.isVisible && (!$scope.titleName || !$scope.newCategory || !$scope.newDescript || !$scope.newImage)) {
            return;
        } else if ($scope.isVisible && $scope.titleName && $scope.newCategory && $scope.newDescript && $scope.newImage) {
            $scope.defaultPosts.push({
                title: $scope.titleName,
                description: $scope.newDescript,
                url: './assets/' + $scope.newImage,
                category: $scope.newCategory.split(','),
                id: ($scope.defaultPosts.length + 1),
                editItem: true
            });
        }
        $scope.isVisible = !$scope.isVisible;
    };

    $scope.editPost = function (object) {
        if (object.title == undefined || object.description == undefined) {
            return;
        };
        object.editItem = !object.editItem;
    };
    $scope.getTrip = function () {
        return posts.filter(elem => elem !== 'all' && elem !== 'trip');
    };
});