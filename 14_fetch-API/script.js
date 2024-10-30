// en utilisons  fetch pour recuperer les donnes ,fecth basé sur Primise
// let api =fetch('https://fakestoreapi.com/products/1')
// .then((res)=>res.json())
// .then((json)=>console.log("the price"+json.price))
// pour verifier que fetch a basé sur les promises
// console.log(api)

// pour dire a fatch attend en utilise await mais pour utiliseer await
// du doit utilise async
let getProduct =  async function (id){
        let product = await  fetch('https://fakestoreapi.com/products/1'+id)
        .then((res)=> res.json())
        .then((product)=> console.log(product))
        // pour tester le role de await 
        console.log('loded')
        return  product //le resultat est : loded apres promise
        // si nous avons supprimer await le resultat est loded avant promise
}
console.log(getProduct(1).then((value)=> console.log(value)))

