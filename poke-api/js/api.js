

const fetchPokedex = () =>{
       const url = `https://pokeapi.co/api/v2/pokemon/1`;
       fetch(url)
            .then(res =>{
                return res.json();
            })
             .then(data =>{ console.log(data);

               const datapoke ={

                    Nombre: data.name,
                    Orden: data.order,
                    Peso: data.weight,
                    Imagen: data.sprites['front_shiny'],
                    type: data.types.map((type)=> type.type.name).join(',')
               };

                 console.log(datapoke);            

            })


}

fetchPokedex();

