
const pokedex = document.getElementById("pokedex");
console.log(pokedex);


const fetchPokedex = () =>{

    const promise =[];

    for (let cont = 1; cont <=151 ;cont ++)
    {
       const url = `https://pokeapi.co/api/v2/pokemon/${cont}`;
       promise.push(fetch(url).then((res) => res.json()));
    }

    Promise.all(promise).then((results)=>{

            const datapoke = results.map((data) => ({  
                    Ident: data.id,
                    Nombre: data.name,
                    Altura: data.height,
                    Peso: data.weight,
                    Imagenfp: data.sprites['front_default'],
     //               Imagenbp: data.sprites['back_default'],
     //               ImagenfSh: data.sprites['front_shiny'],
     //               ImagenbSh: data.sprites['back_shiny'],
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

            <h2>${pokesource.Ident} </h2>

            <img src="${pokesource.Imagenfp}"/>
            <img src="${pokesource.Imagenbp}"/>
            <img src="${pokesource.ImagenfSh}"/>
            <img src="${pokesource.ImagenbSh}"/>
            <h2>${pokesource.Nombre} </h2>
            <p>Type: ${pokesource.type}</p>
            <p>Peso: ${pokesource.Peso}Kg</p>
            <p>Altura: ${pokesource.Altura}m</p>
        </li>
    `
        )
        .join('');
    pokedex.innerHTML = pokemonHTMLString;
};


fetchPokedex();

