

var todoApp = angular.module('todoApp', ['ngStorage','ui.bootstrap']);

todoApp.controller('todoController', ['$scope', '$localStorage', function($scope, $localStorage) {
  
   $scope.filteredTodos = []
  ,$scope.currentPage = 1
  ,$scope.numPerPage = 10
  ,$scope.maxSize = 5;
    
    
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
   var d= $scope.mydate;
      var e =$scope.mydate;
    var c= dateFormat(d,'mediumDate');
    $scope.tasks.push({
      taskName: $scope.name,
      isDone: false,
      duedate:c,
      due2:d
    });
    $scope.name = ''; 
  };  
  $scope.clearTask = function() {
    var newTaskList = _.remove($scope.tasks, ['isDone', false]);
    $scope.tasks = newTaskList;
    $scope.$watch('currentPage + numPerPage', function() {
    var begin = (($scope.currentPage - 1) * $scope.numPerPage)
    , end = begin + $scope.numPerPage;
    if($scope.tasks.length>$scope.numPerPage){
    $scope.filteredTodos = $scope.tasks.slice(begin, end);
    }
           else
               {
                   $scope.filteredTodos=$scope.tasks;
               }
  });  
  };
    
       $scope.$watch('currentPage + numPerPage', function() {
    var begin = (($scope.currentPage - 1) * $scope.numPerPage)
    , end = begin + $scope.numPerPage;
    if($scope.tasks.length>$scope.numPerPage){
    $scope.filteredTodos = $scope.tasks.slice(begin, end);
    }
           else
               {
                   $scope.filteredTodos=$scope.tasks;
               }
  });
  
  window.onload=function alerts(){
      var countb=0;
          var countt=0;
          var countf=0;
    for(var i=0;i<$scope.tasks.length;i++)
      {
        var dateTod=new Date();
       var t=$scope.tasks[i].due2;
          console.log(t);
     var a=moment(dateTod);
          var b=moment(t);
    var c=b.diff(a,'days');

          if(c<0)   
    {
        
    countb++;
          
      }
    if (c==0)
  {
      countt++;
  }
  if(c>0)
      {
          countf++;
      }
      }
  alert("You have "+ countb +" Tasks to be done before today." + countt + " tasks to be done by today and " + countf +" tasks to be done in the future");

  };

}]); 

