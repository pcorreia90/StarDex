define(['views/characters-view', 'services/characters-service'], function(view, service){
    var internals = {}
    var externals = {}

    internals.randomButtonHandler = function() {
        var charactersIndex = Math.ceil(Math.random() * 83)
        service.getCharacter(charactersIndex)
                .then(function(character){
                var characterArr = [];
                characterArr.push(character)
                view.render(characterArr)
                })
    }

    internals.searchButtonHandler = function(name) {
        service.getCharacterByName(name.target.value)
                .then(function(character){
                    var characters = [].slice.call(character)
                    view.render(characters)
                })
    }

    internals.getCharactersPage1 = function(){
        service.getAllCharacters(1)
                .then(function(characters){
                    var charactersArr = [].slice.call(characters)
                    console.log(charactersArr)
                    view.render(charactersArr)
                })  
    }

    internals.getCharactersPage2 = function(){
        service.getAllCharacters(2)
                .then(function(characters){
                    var charactersArr = [].slice.call(characters)
                    view.render(charactersArr)
                })  
    }

    internals.getCharactersPage3 = function() {
        service.getAllCharacters(3)
            .then(function(characters){
                var charactersArr = [].slice.call(characters)
                view.render(charactersArr)
            })
    }

    internals.getCharactersPage4 = function() {
        service.getAllCharacters(4)
        .then(function(characters){
            var charactersArr = [].slice.call(characters)
            view.render(charactersArr)
        })
    }

    internals.getCharactersPage5 = function() {
        service.getAllCharacters(5)
            .then(function(characters) {
                var charactersArr = [].slice.call(characters)
                view.render(charactersArr)
            })
    }

    internals.getCharactersPage6 = function() {
        service.getAllCharacters(6)
            .then(function(characters){
                var charactersArr = [].slice.call(characters)
                view.render(charactersArr)
            })
    }

    internals.getCharactersPage7 = function() {
        service.getAllCharacters(7)
            .then(function(characters){
                var charactersArr = [].slice.call(characters)
                view.render(charactersArr)
            })
    }

    internals.getCharactersPage8 = function() {
        service.getAllCharacters(8)
            .then(function(characters){
                var charactersArr = [].slice.call(characters)
                view.render(charactersArr)
            })
    }

    internals.getCharactersPage9 = function() {
        service.getAllCharacters(9)
            .then(function(characters){
                var charactersArr = [].slice.call(characters)
                view.render(charactersArr)
            })
    }
    
    externals.init = function() {
        
        view.bindHandlers('character', internals.randomButtonHandler)
        view.bindHandlers('search', internals.searchButtonHandler)
        view.bindHandlers('page1', internals.getCharactersPage1)
        view.bindHandlers('page2', internals.getCharactersPage2)
        view.bindHandlers('page3', internals.getCharactersPage3)
        view.bindHandlers('page4', internals.getCharactersPage4)
        view.bindHandlers('page5', internals.getCharactersPage5)
        view.bindHandlers('page6', internals.getCharactersPage6)
        view.bindHandlers('page7', internals.getCharactersPage7)
        view.bindHandlers('page8', internals.getCharactersPage8)
        view.bindHandlers('page9', internals.getCharactersPage9)

        internals.getCharactersPage1()
        view.render()
    }

    return externals
})  