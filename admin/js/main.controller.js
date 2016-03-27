angular
    .module('app')
    .controller('MainController', MainController);
    
MainController.$inject = ['uploadS3'];
             
function MainController(uploadS3) {
    var vm = this;
    vm.teste = "hahah";
    uploadS3.json('a.json', vm.teste);
}
