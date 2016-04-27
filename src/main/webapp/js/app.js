(function () {

    var app = angular.module('meuTodo', []);

    app.controller('TodoController', function ($scope) {

        $scope.lista = [{ texto: 'Pagar contas', concluido: false }];

        $scope.todo = { texto: '', concluido: false };

        $scope.adicionar = function () {
            $scope.lista.push($scope.todo);
            $scope.todo = { texto: '', concluido: false };
        };

        $scope.apagar = function () {
            var listaTmp = $scope.lista;
            $scope.lista = [];
            angular.forEach(listaTmp, function (t) {
                if (!t.concluido) {
                    $scope.lista.push(t);
                }
            });
        };
    });

})();