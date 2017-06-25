'use strict';
 
angular.module('Home')
 
.controller('HomeController',
    ['$scope',
    function ($scope) {

        $scope.allFiles = [
            {title: 'Proposal', description: 'This file contains the proposal of the project submitted to FYPCED cabin at the beginning', submitionDate: '07/02/17', fileName: 'proposal.docx'},
            {title: 'Objects | Features', description: 'This file contains the Objects and features of the project', submitionDate: '07/04/17', fileName: 'objectAndFeatures.docx'},
            {title: 'SRS Report', description: 'This file contains the SRS(software requirements specification) Report of the project', submitionDate: '17/04/17', fileName: 'sRs.docx'},
            {title: 'Risk Factors', description: 'This file contains the Risk Factors Documentation of the project', submitionDate: '17/04/17', fileName: 'riskFactor.docx'},
            {title: 'ERD', description: 'This file contains the ERD(Entity Relation Diagram) of the project', submitionDate: '02/05/17', fileName: 'erd.docx'},
            {title: 'Flow Chart', description: 'This file contains the Flow Chart (algorithm, workflow or process) of the project', submitionDate: '02/05/17', fileName: 'flow.docx'},
            {title: 'Gantt Chart', description: 'This file contains the Complete Gantt Chart of the project', submitionDate: '02/05/17', fileName: 'gantt.docx'},
            {title: 'System Diagram', description: 'This file contains the Complete System Diagram of the project', submitionDate: '15/05/17', fileName: 'systemDiagram.docx'},
            {title: 'Use-Case Diagram', description: 'This file contains the Complete Use Case Diagram of the project', submitionDate: '15/05/17', fileName: 'useCase.docx'}
        ]
      
    }]);