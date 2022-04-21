define(function() {
    var internals = {
        elements: {},
        handlers: {}
    };
    var externals = {}

    internals.sayWelcome = function() {
        return '<h2>Welcome to StarDex</h2>'
    }

    internals.renderButton = function() {
        return '<div class="button-div"><button class="search-characters-btn">Search Characters</button></div>'
    }

    internals.renderWelcome = function() {
        internals.elements.welcome = $(internals.sayWelcome())
        internals.elements.button = $(internals.renderButton())
        internals.elements.button.click(function() {window.location.hash = '#characters'})
        $('.app-content').append(internals.elements.welcome)
        $('.app-content').append(internals.elements.button)
    } 

    externals.render = function() {
        $('.app-content').empty()
        internals.renderWelcome()
    }

    return externals
})