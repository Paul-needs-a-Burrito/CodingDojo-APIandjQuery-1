$('div.all-pokemons').append(function() {
    for(let x = 1; x <= 151; x++) {
        $('div.all-pokemons').append('<img id='+ x +' src="http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/'+ x +'.png">');
    }
} );

$('div.all-pokemons img').click(function() {
    let poke_id = $(this).attr('id');

    $.get("https://pokeapi.co/api/v2/pokemon/"+ poke_id,
        function (res) {
            let pokemon = "";
            pokemon += "<h1>" + res.name + "</h1>";
            pokemon += "<img src=" + res.sprites.front_shiny + ">";
            pokemon += "<h4>Types</h4>";
            pokemon += "<ul>";

            for(let i = 0; i < res.types.length; i++) {
                pokemon += "<li>" + res.types[i].type.name + "</li>";
            }
            pokemon += "</ul>";
            pokemon += "<h4>Height</h4>";
            pokemon += "<p>" + res.height + "</p>";
            pokemon += "<h4>Weight</h4>";
            pokemon += "<p>" + res.weight + "</p>";
            $('div.selected-pokemon').html(pokemon);
        }, "json"
    );
} );
