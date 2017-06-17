'use strict';
 
angular.module('Home')
 
.controller('HomeController',
    ['$scope',
    function ($scope) {

        $scope.allFiles = [
            {title: 'my doc', description: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi ' +
            'vitae est. Mauris placerat eleifend leo Donec eu libero sit amet quam egestas semper. Aenean ultricies ' +
            'mi vitae est. Mauris placerat eleifend leo', submitionDate: '12/12/12', fileName: 'purposalFYP.docx'},
            {title: 'my doc', description: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi ' +
            'vitae est. Mauris placerat eleifend leo Donec eu libero sit amet quam egestas semper. Aenean ultricies ' +
            'mi vitae est. Mauris placerat eleifend leo', submitionDate: '12/12/12', fileName: 'purposalFYP.docx'},
            {title: 'my doc', description: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi ' +
            'vitae est. Mauris placerat eleifend leo Donec eu libero sit amet quam egestas semper. Aenean ultricies ' +
            'mi vitae est. Mauris placerat eleifend leo', submitionDate: '12/12/12', fileName: 'abcx.docx'}
        ]
      
    }]);