
let container = document.getElementById("mostrarPokemon");

let enviar = document.getElementById("enviar");
enviar.onclick = getPokemon; 

let borrar  = document.getElementById("delete");
borrar.onclick = deletContent;


function getPokemon(){
    
 
   const nombre = document.getElementById("poke").value;
   const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`

    fetch(url)
    .then((response) => response.json())
    .then((data) =>{showPokemon(data)});
    

    }

    //Caracteristicas a mostrar
   function showPokemon(pokemon){
    deletContent();

    let img = document.createElement('img');
    img.src = pokemon.sprites.front_shiny;

    let tituloName = document.createElement('h3');
    tituloName.textContent = 'Nombre: ';

    let name = document.createElement('h3');
    name.textContent = pokemon.name;

    let tituloID = document.createElement('h4');
    tituloID.textContent = 'Pokedex No.: ';

    let num = document.createElement('p');
    num.textContent = pokemon.order;
    
    let tituloAbilities = document.createElement('h4');
    tituloAbilities.textContent = 'Abilities: ';

    let ability1 = document.createElement('p');
    ability1.textContent = pokemon.abilities[0].ability.name;

    let ability2 = document.createElement('p');
    ability2.textContent = pokemon.abilities[1].ability.name; 

    let tituloTypes = document.createElement('h4');
    tituloTypes.textContent = 'Types: ';

    let type1 = document.createElement('p');
    type1.textContent = pokemon.types[0].type.name;
    

    /*
    let type2 = document.createElement('p');
    type2.textContent = pokemon.types[1].type.name;
    */
    
    img.classList.add('elementosAgregados');
    tituloName.classList.add('elementosAgregados');
    name.classList.add('elementosAgregados');
    tituloID.classList.add('elementosAgregados');
    num.classList.add('elementosAgregados');
    tituloAbilities.classList.add('elementosAgregados');
    ability1.classList.add('elementosAgregados');
    ability2.classList.add('elementosAgregados');
    tituloTypes.classList.add('elementosAgregados');
    type1.classList.add('elementosAgregados');
   // type2.classList.add('elementosAgregados');
    
    
    container.appendChild(img);
    container.appendChild(tituloName);
    container.appendChild(name);
    container.appendChild(tituloID)
    container.appendChild(num);
    container.appendChild(tituloAbilities)
    container.appendChild(ability1);
    container.appendChild(ability2);
    container.appendChild(tituloTypes)
    container.appendChild(type1);
    container.appendChild(type2);
    


   }

   function deletContent(){
        container.innerHTML = "";
   }
