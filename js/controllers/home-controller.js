define(['views/home-view'], function(homeView) {
    var internals = {};
    var externals = {};


    externals.init = function() {
        homeView.render()
    }

    return externals

});