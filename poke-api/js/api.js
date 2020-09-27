

const fetchPokedex = () =>{
       const url = `https://pokeapi.co/api/v2/pokemon/1`;
       fetch(url)
            .then(res =>{
                return res.json();
            })
             .then(data =>{ console.log(data);
               const datapoke ={};
                    datapoke['Nombre']=data.name;
                    datapoke['Orden']=data.order;
                    datapoke['Peso']=data.weight;
                    datapoke['Imagen']=data.sprites['front_shiny'];
            
                console.log(datapoke);
            })


}

fetchPokedex();

