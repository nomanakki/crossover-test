(function(){
    'use strict';

    angular
        .module('application')
        .controller('HomeController', HomeController);

        function HomeController($http, sessionService) {
            var vm = this;
            vm.sessionObj = sessionService.getSession();
            $http.get('http://localhost:3009/videos?sessionId=' + vm.sessionObj.sessionId).then(function(res){
                vm.videosList = res.data.data;
                console.log(vm.videosList);
            });
        }
})();