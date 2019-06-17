
function validacao(){

var decisao = document.form.CryptOrDecrypt.value
var insertPhrase = document.form.phrase.value
var cryptMessage = document.form.phrase.value
var key = document.form.key.value
var error = Number(0)

decisao = decisao.toLowerCase();
decisao = decisao.replace(/ /g,"")

if ( decisao == "" || decisao == " "){
	alert("O primeiro espaço precisa ser preenchido!!!")
	error++
}else if (decisao != "crypt" && decisao != "decrypt" ){
	alert("O valor *-" + decisao + "-* inserido no primeiro espaço é inválido!!!")
	error++
}

if (insertPhrase == "" || insertPhrase == " "){
	alert("Preencha o campo *-frase-* !!!")
	error++
}

if ( error != 0 ){
	return
}

if (decisao == "crypt"){

var vector = ["!","@","#","$","%","*","(",")","+","-",".",":","?","|","]","[","{"]
var phrase = insertPhrase.toLowerCase();
var sPhrase = ""
var key = Math.floor((Math.random() * 8 ) + 0)
var vectorWithoutValue = [")","+","-",".",":","?","|","]","[","}","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var vectorWithValue = ["!","@","#","$","%","&","*","(","{"]
var soma = Number(0)
var validsChars = ""
var random3 = Math.floor((Math.random() * 20) + 13)
var keyCrypting = ""

//----------------------------------

for ( X = 0; X < phrase.length ; X++ ){
    
    var sPhrase = sPhrase + phrase[X]
    
    if ( X < phrase.length - 1 ){
    var sPhrase = sPhrase + "-"
    }
    
}

//Encrypting
var sPhrase = sPhrase.replace(/a/g,"4")
var sPhrase = sPhrase.replace(/b/g,"1")
var sPhrase = sPhrase.replace(/c/g,"2")
var sPhrase = sPhrase.replace(/d/g,"3")
var sPhrase = sPhrase.replace(/e/g,"8")
var sPhrase = sPhrase.replace(/f/g,"5")
var sPhrase = sPhrase.replace(/g/g,"6")
var sPhrase = sPhrase.replace(/h/g,"7")
var sPhrase = sPhrase.replace(/i/g,"14")
var sPhrase = sPhrase.replace(/j/g,"9")
var sPhrase = sPhrase.replace(/k/g,"10")
var sPhrase = sPhrase.replace(/l/g,"11")
var sPhrase = sPhrase.replace(/m/g,"12")
var sPhrase = sPhrase.replace(/n/g,"13")
var sPhrase = sPhrase.replace(/o/g,"20")
var sPhrase = sPhrase.replace(/p/g,"15")
var sPhrase = sPhrase.replace(/q/g,"16")
var sPhrase = sPhrase.replace(/r/g,"17")
var sPhrase = sPhrase.replace(/s/g,"18")
var sPhrase = sPhrase.replace(/t/g,"19")
var sPhrase = sPhrase.replace(/u/g,"26")
var sPhrase = sPhrase.replace(/v/g,"21")
var sPhrase = sPhrase.replace(/w/g,"22")
var sPhrase = sPhrase.replace(/x/g,"23")
var sPhrase = sPhrase.replace(/y/g,"24")
var sPhrase = sPhrase.replace(/z/g,"25")
var sPhrase = sPhrase.replace(/ /g,"27")
//Encrypting

var key = Math.floor((Math.random() * 9) + 0)
var sPhrase1 = ""

for ( Y = 0 ; Y < phrase.length; Y++ ){
var list = sPhrase.split("-")

var n = Number(list[Y])

if ( n <= 18 ){
    sPhrase1 += (n + key) + "-"
}else{
    var random6 = Math.floor((Math.random () * 2) + 1)
    
    if ( random6 == 1 ){
        sPhrase1 += n + "}-"
    }else if ( random6 == 2 ){
        sPhrase1 += n + "&-"
    }
}
}

var sPhrase = sPhrase1.substr(sPhrase1.length - (sPhrase1.length),(sPhrase1.length - 1))

//Encrypting2
var sPhrase = sPhrase.replace(/1/g,"b")
var sPhrase = sPhrase.replace(/2/g,"c")
var sPhrase = sPhrase.replace(/3/g,"d")
var sPhrase = sPhrase.replace(/4/g,"a")
var sPhrase = sPhrase.replace(/5/g,"f")
var sPhrase = sPhrase.replace(/6/g,"g")
var sPhrase = sPhrase.replace(/7/g,"h")
var sPhrase = sPhrase.replace(/8/g,"e")
var sPhrase = sPhrase.replace(/9/g,"j")
//Encrypting2
for ( Z = 0 ; Z < phrase.length - 1 ; Z++ ){
    var random2 = Math.floor((Math.random() * 17) + 0)
    var sPhrase = sPhrase.replace(/-/,vector[random2])
}

//Generating the hash

for ( Xx = 0; Xx < random3 ; Xx++ ){

var random4 = Math.floor((Math.random() * 36) + 0)
keyCrypting = keyCrypting + vectorWithoutValue[random4]
}
for ( Yy = 0; Yy < random3 ; Yy++ ){

if ( key == 1 ){
    random5 = 1
    validsChars = validsChars + vectorWithValue[random5]
    break
}else{
var random5 = Math.floor((Math.random() * key) + 0)
soma += random5
if ( soma <= key ){
validsChars = validsChars + vectorWithValue[random5]
}
if ( soma == key ){ 
    break 
}else if ( soma > key ){
    var subtracao = soma - key
    soma = soma - subtracao
    random5 = random5 - subtracao
    validsChars = validsChars + vectorWithValue[random5]
    break
}
}
}


var vectorHashString = keyCrypting + validsChars
var vectorHash = vectorHashString.split("")
var arrayHashLength = vectorHash.length
 
while ( arrayHashLength !== 0 ) {
 
    var random6 = Math.floor((Math.random() * arrayHashLength) + 0 )
    arrayHashLength--
    var temporaryValue = vectorHash[arrayHashLength]
    vectorHash[arrayHashLength] = vectorHash[random6]
    vectorHash[random6] = temporaryValue
}

var finalVectorHash = ""
for ( Zz = 0 ; Zz < vectorHash.length ; Zz++ ){
    var finalVectorHash = finalVectorHash + vectorHash[Zz]
}

//Generating the hash

alert("Phrase:       " + insertPhrase + "\nDASSA1:       " + sPhrase + "\nKey:          " + finalVectorHash)
window.location.href = "http://pt.stackoverflow.com";
return;

}else if ( decisao == "decrypt")


var vector = ["!","@","#","$","%","*","(",")","+","-",".",":","?","|","]","[","{"]
var keyN = Number(0)
var string = ""
var string2 = ""

//Calculating the key value
for ( x = 0 ; x < key.length ; x++ ){
    
    var reading = key[x]
    
    if ( reading == "!" ){
        keyN += 0
    }else if ( reading == "@" ){
        keyN += 1
    }else if ( reading == "#" ){
        keyN += 2
    }else if ( reading == "$" ){
        keyN += 3
    }else if ( reading == "%" ){
        keyN += 4
    }else if ( reading == "&" ){
        keyN += 5
    }else if ( reading == "*" ){
        keyN += 6
    }else if ( reading == "(" ){
        keyN += 7
    }else if ( reading == "{" ){
        keyN += 8
    }
}
//Calculating the key value


//Puting hyphen
for ( y = 0 ; y < cryptMessage.length ; y++ ){

var reading2 = cryptMessage[y]

for ( z = 0 ; z < vector.length ; z++ ){
    
if ( reading2 == vector[z] ){
    cryptMessage = cryptMessage.replace(cryptMessage[y],"-")
}else{
    continue
}
}
}
//Puting hyphen


//Numbering the letters
var cryptMessage = cryptMessage.replace(/b/g,"1")
var cryptMessage = cryptMessage.replace(/c/g,"2")
var cryptMessage = cryptMessage.replace(/d/g,"3")
var cryptMessage = cryptMessage.replace(/a/g,"4")
var cryptMessage = cryptMessage.replace(/f/g,"5")
var cryptMessage = cryptMessage.replace(/g/g,"6")
var cryptMessage = cryptMessage.replace(/h/g,"7")
var cryptMessage = cryptMessage.replace(/e/g,"8")
var cryptMessage = cryptMessage.replace(/j/g,"9")
//Numbering the letters

//Applying the key
var vector2 = cryptMessage.split("-")

for ( Xx = 0 ; Xx < vector2.length ; Xx++ ){
    var recuperation = vector2[Xx]
    var number = Number(vector2[Xx])
    number2 = number - keyN
    if ( isNaN(number2) ){
        var splitN = recuperation.split("")
        var number2 = recuperation.substr(recuperation.length - (recuperation.length),(recuperation.length - 1))
    }
    vector2[Xx] = number2
    string = string + number2 + "-" 
}
//Applying the key

//Decrypting

var vector3 = string.split("-")

for ( Yy = 0 ; Yy < vector3.length ; Yy++ ){
    
    if (vector3[Yy] == "4" ){
        string2 = string2 + "a"
    }else if (vector3[Yy] == "1" ){
        string2 = string2 + "b"
    }else if (vector3[Yy] == "2" ){
        string2 = string2 + "c"
    }else if (vector3[Yy] == "3" ){
        string2 = string2 + "d"
    }else if (vector3[Yy] == "8" ){
        string2 = string2 + "e"
    }else if (vector3[Yy] == "5" ){
        string2 = string2 + "f"
    }else if (vector3[Yy] == "6" ){
        string2 = string2 + "g"
    }else if (vector3[Yy] == "7" ){
        string2 = string2 + "h"
    }else if (vector3[Yy] == "14" ){
        string2 = string2 + "i"
    }else if (vector3[Yy] == "9" ){
        string2 = string2 + "j"
    }else if (vector3[Yy] == "10" ){
        string2 = string2 + "k"
    }else if (vector3[Yy] == "11" ){
        string2 = string2 + "l"
    }else if (vector3[Yy] == "12" ){
        string2 = string2 + "m"
    }else if (vector3[Yy] == "13" ){
        string2 = string2 + "n"
    }else if (vector3[Yy] == "20" ){
        string2 = string2 + "o"
    }else if (vector3[Yy] == "15" ){
        string2 = string2 + "p"
    }else if (vector3[Yy] == "16" ){
        string2 = string2 + "q"
    }else if (vector3[Yy] == "17" ){
        string2 = string2 + "r"
    }else if (vector3[Yy] == "18" ){
        string2 = string2 + "s"
    }else if (vector3[Yy] == "19" ){
        string2 = string2 + "t"
    }else if (vector3[Yy] == "26" ){
        string2 = string2 + "u"
    }else if (vector3[Yy] == "21" ){
        string2 = string2 + "v"
    }else if (vector3[Yy] == "22" ){
        string2 = string2 + "w"
    }else if (vector3[Yy] == "23" ){
        string2 = string2 + "x"
    }else if (vector3[Yy] == "24" ){
        string2 = string2 + "y"
    }else if (vector3[Yy] == "25" ){
        string2 = string2 + "z"
    }else if (vector3[Yy] == "27" ){
        string2 = string2 + " "
    }else if (vector3[Yy] == "" ){
        break
    }
    
}
//Decrypting

alert("Frase descriptografada:\n\n" + string2)

}
