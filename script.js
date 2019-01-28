var todo = angular.module('todoApp', ['ngStorage']);

todo.controller('todoController', ['$scope', '$localStorage', function($scope, $localStorage) {
  if($localStorage.todoList) {
    $scope.tasks = $localStorage.todoList;
  } else {
    $scope.tasks = [];
  }
    
  $scope.saveTodo = function() {
    $localStorage.todoList = $scope.tasks;
    alert('The list is saved');
  };
  
  $scope.submitTask = function() {
   var d= new Date($scope.mydate);
    var c= dateFormat(d,'mediumDate');
    $scope.tasks.push({
      taskName: $scope.name,
      isDone: false,
      duedate:c,
      due2:d
    });
    $scope.name = ''; // clear the textbox
  };
    
  $scope.clearTask = function() {
    var newTaskList = _.remove($scope.tasks, ['isDone', false]);
    $scope.tasks = newTaskList;
  };
  
  window.onload=function alerts(){
    
    for(var i=0;i<$scope.tasks.length;i++)
      {
        var dateTod=new Date();
       var t=$scope.tasks[i].due2;
      var  c=dateTod-t;
          
            console.log(c);
          
      }
    
  }
  
  
}]); 

