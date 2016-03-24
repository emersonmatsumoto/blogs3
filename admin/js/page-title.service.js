angular
    .module('app')
    .factory('pageTitle', pageTitle);    
    
function pageTitle() {
    var title = 'default';
    return {
        title: function() { return title; },
        setTitle: function(newTitle) { title = newTitle }
    };
}