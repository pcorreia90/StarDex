define(function () {
    var internals = {}
    var externals = {}

    var api = 'https://swapi.dev/api/people/'
    var api2 ='http://intergalacticdb.me/api/characters/'

    externals.getCharacter = function(index) {
        return fetch(api + index)
                .then(response => response.json())
            
    };

    externals.getCharacterByName = function(name) {
        return fetch(api2 + name)
            .then(response => response.json())
            .then(json => json.results)
    }

    externals.getAllCharacters = function(pageIndex) {
        return fetch(api + '?page=' + pageIndex)
            .then(response => response.json())
            .then(json => json.results)
    }

    return externals
})