/* eslint-disable */
const str = "the be of and a to in he have it that for they with as not on she at by this we you do but from or which one would all will there say who make when can more if no man out other so what time up go about than into could state only new year some take come these know see use get like then first any work now may such give over think most even find day also after way many must look before great back through long where much should well people down own just because good each those feel seem how high too place little world very still nation hand old life tell write become here show house both between need mean call develop under last right move thing general school never same another"
let lst = []
let temp = []
for(const letter of str){
    if(letter != ' '){
        temp.push(letter)
    }else{
        lst.push(temp)
        temp = []
    }
}
console.log(JSON.stringify(lst))