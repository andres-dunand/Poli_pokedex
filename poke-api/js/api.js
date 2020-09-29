
const pokedex = document.getElementById("pokedex");
console.log(pokedex);


const fetchPokedex = () =>{

    const promise =[];

    for (let cont = 1; cont <=10 ;cont ++)
    {
       const url = `https://pokeapi.co/api/v2/pokemon/${cont}`;
       promise.push(fetch(url).then((res) => res.json()));
    }

    Promise.all(promise).then((results)=>{

            const datapoke = results.map((data) => ({          
                    Nombre: data.name,
                    Orden: data.order,
                    Peso: data.weight,
                    Imagen: data.sprites['front_shiny'],
                    type: data.types.map((type)=> type.type.name).join(',')
            }));

        displayPokedex(datapoke);     

            });
    };

    const displayPokedex = (datapoke) => {
        console.log(datapoke); 
        const pokemonHTMLString = datapoke
            .map( 
                (pokesource) => `


            <img src="${pokesource.Imagen}"/>
            <h2>${pokesource.Orden}. ${pokesource.Nombre} </h2>
            <p>Type: ${pokesource.type}</p>
        </li>
    `
        )
        .join('');
    pokedex.innerHTML = pokemonHTMLString;
};


fetchPokedex();

