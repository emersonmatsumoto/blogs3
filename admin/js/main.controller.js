angular
    .module('app')
    .controller('MainController', MainController);
        
MainController.$inject = ['pageTitle'];        
function MainController(pageTitle) {
    var vm = this;
    vm.teste = "hahah";
    pageTitle.setTitle('Main');
}
