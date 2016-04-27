(function () {

    angular.module('meuTodo', [])

        .controller('TodoController', function ($scope, $http) {

            $scope.lista = [];

            init();

            function init() {
                listar();
                $scope.todo = {};
            }

            function listar() {
                $http.get('/api/tarefas').then(function (response) {
                    $scope.lista = response.data._embedded.tarefas;
                });
            }

            $scope.adicionar = function () {
                $http.post('/api/tarefas', $scope.todo).then(function () {
                    init();
                });
            };

            $scope.arquivar = function (tarefa) {
                $http.put(tarefa._links.self.href, tarefa).then(function () {
                    listar();
                });
            };

            $scope.apagar = function () {
                $scope.lista.forEach(function (t) {
                    if (t.arquivada) {
                        $http.delete(t._links.self.href).then(function () {
                            listar();
                        });
                    }
                })

            };
        });

})();