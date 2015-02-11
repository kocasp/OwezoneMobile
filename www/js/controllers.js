angular.module('starter.controllers', [])

.controller('OverviewCtrl', function($scope, People) {
  $scope.people = People.all();

// TODO: check if works or/and remove:
  $scope.insert = function(firstname, lastname) {
      var query = "INSERT INTO people (firstname, lastname) VALUES (?,?)";
      $cordovaSQLite.execute(db, query, [firstname, lastname]).then(function(res) {
          console.log("INSERT ID -> " + res.insertId);
      }, function (err) {
          console.error(err);
      });
  }

  $scope.select = function(lastname) {
      var query = "SELECT firstname, lastname FROM people WHERE lastname = ?";
      $cordovaSQLite.execute(db, query, [lastname]).then(function(res) {
          if(res.rows.length > 0) {
              console.log("SELECTED -> " + res.rows.item(0).firstname + " " + res.rows.item(0).lastname);
          } else {
              console.log("No results found");
          }
      }, function (err) {
          console.error(err);
      });
  }
//////

})

.controller('PeopleCtrl', function($scope, People) {
  $scope.people = People.all();
  $scope.remove = function(person) {
    People.remove(person);
  }
})

.controller('PersonDetailCtrl', function($scope, $stateParams, People) {
  $scope.person = People.get($stateParams.personId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
