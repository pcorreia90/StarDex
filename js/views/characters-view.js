define(function() {
    var internals = {
        elements: {},
        handlers: {}
    }
    var externals = {}


    internals.renderTitle = function() {
        return '<h2>Search for Characters from the Star Wars Universe</h2>'
    }

    internals.renderSearchBar = function() {
        return '<input class="searchbar" type="search">'
    }

    internals.renderRandomButton = function() {
        return '<button class="random-btn">Random</button>'
    }

    internals.buildPage1Button = function() {
        return '<button>Page 1</button>'
    }

    internals.buildPage2Button = function() {
        return '<button>Page 2</button>'
    }

    internals.buildPage3Button = function() {
        return '<button>Page 3</button>'
    }

    internals.buildPage4Button = function() {
        return '<button>Page 4</button>'
    }

    internals.buildPage5Button = function() {
        return '<button>Page 5</button>'
    }

    internals.buildPage6Button = function() {
        return '<button>Page 6</button>'
    }

    internals.buildPage7Button = function() {
        return '<button>Page 7</button>'
    }

    internals.buildPage8Button = function() {
        return '<button>Page 8</button>'
    }

    internals.buildPage9Button = function() {
        return '<button>Page 9</button>'
    }

    internals.renderNavbar = function() {
        var htmlStr = '<div class="navbar">' +
                            '<div class="searchbar-div"></div>' +       
                            '<div class="buttons-div"' +
                                 '</div></div>'
        $('.app-content').append(htmlStr)                         
    }

    internals.renderCharacters = function(characters) {
        $('.app-content').append('<div class="character-div"></div>')
        characters.forEach(character => $('.character-div').append('<img src="resources/' + character.name +  '.png"/>'))
    }

    internals.renderElems = function() {
            internals.elements.title = $(internals.renderTitle())

            internals.elements.searchBar = $(internals.renderSearchBar())
            internals.elements.searchBar.change(internals.handlers.search)

            internals.elements.randomButton = $(internals.renderRandomButton())
            internals.elements.randomButton.click(internals.handlers.character)

            internals.elements.page1Button = $(internals.buildPage1Button())
            internals.elements.page1Button.click(internals.handlers.page1)
            
            internals.elements.page2Button =$(internals.buildPage2Button())
            internals.elements.page2Button.click(internals.handlers.page2)

            internals.elements.page3Button = $(internals.buildPage3Button())
            internals.elements.page3Button.click(internals.handlers.page3)

            internals.elements.page4Button = $(internals.buildPage4Button())
            internals.elements.page4Button.click(internals.handlers.page4)

            internals.elements.page5Button = $(internals.buildPage5Button())
            internals.elements.page5Button.click(internals.handlers.page5)

            internals.elements.page6Button = $(internals.buildPage6Button())
            internals.elements.page6Button.click(internals.handlers.page6)

            internals.elements.page7Button = $(internals.buildPage7Button())
            internals.elements.page7Button.click(internals.handlers.page7)
            
            internals.elements.page8Button = $(internals.buildPage8Button())
            internals.elements.page8Button.click(internals.handlers.page8)

            internals.elements.page9Button = $(internals.buildPage9Button())
            internals.elements.page9Button.click(internals.handlers.page9)
            

            
            $('.navbar').append(internals.elements.title)
            $('.searchbar-div').append(internals.elements.searchBar)
            $('.buttons-div').append(internals.elements.randomButton)
            $('.buttons-div').append(internals.elements.page1Button)
            $('.buttons-div').append(internals.elements.page2Button)
            $('.buttons-div').append(internals.elements.page3Button)
            $('.buttons-div').append(internals.elements.page4Button)
            $('.buttons-div').append(internals.elements.page5Button)
            $('.buttons-div').append(internals.elements.page6Button)
            $('.buttons-div').append(internals.elements.page7Button)
            $('.buttons-div').append(internals.elements.page8Button)
            $('.buttons-div').append(internals.elements.page9Button)
    }

    externals.bindHandlers = function(event, handler) {
        internals.handlers[event] = handler
    }

    externals.render = function(characters) {
        $('.app-content').empty();
        internals.renderNavbar  ();
        internals.renderElems();
        if (characters) {
            internals.renderCharacters(characters)
        }

    }

    return externals

})