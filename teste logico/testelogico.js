function criarArray(n, v){
    let array = []
    for(let i = 0; i<n; i++){
        array.push(v)
    }
    return array
}
console.log('Resolução 1: [',criarArray(3, 'a'),"];")

function inverterArray(v){
    let novoArray = []
    let ordem = 0
    for(let i = v.length-1; i >= 0; i--){
        novoArray[ordem] = v[i]
        ordem++
    }
    return novoArray
}
console.log('Resolução 2: [',inverterArray([1,2,3,4]),'];')

function limparArray(v){
    let novoArray = []
    v.forEach(e=>{
        if((typeof e === 'string' && e !== '') || typeof e === 'number'){
            novoArray.push(e)
        }
    })
    return novoArray
}
console.log('Resolução 3:',limparArray([1,2,'', undefined]),';')

function arrayParaObj(v){
    let novoObj = {}
    v.forEach(e=>{
        novoObj[e[0]] = e[1]
    })
    return novoObj
}
console.log('Resolução 4:',arrayParaObj([["c",2],["d",4]]),';')

function removerValor(v, ...n){
    let novoArray = []
    v.forEach(e=>{
        if(n.includes(e) === false){
            novoArray.push(e)
        }
    })
    return novoArray
}
console.log('Resolução 5:',removerValor([5,4,3,2,5], 5,3),';')

function tirarDuplicatas(v){
    let novoArray
    novoArray = [...new Set(v)]
    return novoArray
}
console.log('Resolução 6:',tirarDuplicatas([1,2,3,3,2,4,5,4,7,3]),';')

function arraysIguais(v, n){
    let checagemV
    let checagemN
    v.forEach(e=>{
        if(n.includes(e)){
            checagemV = true
        }})
    n.forEach(e=>{
        if(v.includes(e)){
            checagemN = true
        }})
    if(checagemN === checagemV && v.length === n.length)
        return true
    return false
}
console.log('Resolução 7:',arraysIguais([1,2,3,4],[1,2,3,4]),';')

function removerAninhamentos(v){
    let novoArray = []
    v.forEach(e=>{
        if(typeof e === 'number'){
            novoArray.push(e)
        }else{
            e.forEach(e=>novoArray.push(e))
        }
    })
    return novoArray
}
console.log('Resolução 8:',removerAninhamentos([1, 2, [3], [4, 5]]),';')

function valoresComuns(v, n){
    let novoArray = []
    v.forEach(e=>n.includes(e)?novoArray.push(e):undefined)
    return novoArray
}
console.log('Resolução 10:',valoresComuns([6, 8], [8, 9]),';')