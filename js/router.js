define(function() {
    var internals = {};
    var externals = {};

    internals.routes = [
        {
            hash: '#home',
            controller: 'home-controller'
        },
        {
            hash: '#characters',
            controller: 'characters-controller'
        }
    ];

    internals.defaultHash = '#home';
    
    internals.handleHashChange = function() {
        window.location.hash = window.location.hash || internals.defaultHash
        var route = internals.routes.find(function (elem) {
            return elem.hash === window.location.hash
        })
        if (!route) {
            window.location.hash = internals.defaultHash;
            return;
        }

        require(['controllers/' + route.controller], function (controller) {
            controller.init();
        })



    }

    externals.start = function() {
        internals.handleHashChange()
        window.onhashchange =internals.handleHashChange
    }

    return externals
});