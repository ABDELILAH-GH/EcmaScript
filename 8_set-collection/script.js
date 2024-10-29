const constries = ["maroc","usa","canada","maroc"]
console.log(constries)// la duplication de "maroc" [ 'maroc', 'usa', 'canada', 'maroc' ]


/*
set.add("hello") pour ajouter un element
set.has("france") retourne true si element exister et false si le contraire
set.size() a retourner le nombre des elements
set.delete("france") pour supprimer un element
set.clear() pour supprimer tous les elements
 */
let set = new Set()
set.add('maroc')
set.add('maroc')
set.add('egypte')
set.add('tunisie')
set.add('algerie')
set.add('france')
// console.log(set)// sans duplication Set(4) { 'maroc', 'egypte', 'tunisie', 'algerie' }
// console.log("size is :"+set.size)
// console.log("delete: "+set.delete("france"))
// console.log('clear: '+ set.clear)