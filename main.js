
let container = document.getElementById("mostrarPokemon");

let enviar = document.getElementById("enviar");
enviar.onclick = getPokemon; 

let borrar  = document.getElementById("delete");
borrar.onclick = deletContent;


function getPokemon(){
    
   //container.innerHTML = nombre;
   const nombre = document.getElementById("poke").value;
   const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`

    fetch(url)
    .then((response) => response.json())
    .then((data) =>{showPokemon(data)});
    

    

    /*
        switch(nombre){
            case 'pikachu':
                fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
                .then((response) => response.json())
                .then((data) =>{showPokemon(data) });
                break;
            case 'ditto': 
                fetch('https://pokeapi.co/api/v2/pokemon/ditto')
                .then((response) => response.json())
                .then((data) =>{showPokemon(data) });
                break;
            case 'bulbasaur':
                fetch('https://pokeapi.co/api/v2/pokemon/1')
                .then((response) => response.json())
                .then((data) =>{showPokemon(data)  });
                break;
            case 'snivy':
                fetch('https://pokeapi.co/api/v2/pokemon/snivy')
                .then((response) => response.json())
                .then((data) =>{showPokemon(data)  });
                break;
            case 'marshtomp':
                fetch('https://pokeapi.co/api/v2/pokemon/marshtomp')
                .then((response) => response.json())
                .then((data) =>{showPokemon(data)  });
                break;
            default: 
                container.innerHTML = 'no data'
                break;
        }  
        */
    }

   function showPokemon(pokemon){
    deletContent();
    let img = document.createElement('img');
    img.src = pokemon.sprites.front_shiny;

    let name = document.createElement('h3');
    name.textContent = pokemon.name;

    let num = document.createElement('p');
    num.textContent = pokemon.order;

    
    container.appendChild(img);
    container.appendChild(name);
    container.appendChild(num);
   
   }

   function deletContent(){
        container.innerHTML = "";
   }
