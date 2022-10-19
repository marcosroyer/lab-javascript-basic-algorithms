// Iteration 1: Names and Input

let hacker1 = 'Jon'
console.log(`The driver's name is ${hacker1}.`)
let hacker2 = 'Jonnie'

console.log(`The navigator's name is ${hacker2}.`)


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let nome = ''
for(let i=0; i < hacker1.length; i++){
    nome += hacker1.toUpperCase()[i]
    if (i != hacker1.length -1){
        nome += ' '
    }
}
console.log(nome)

nome = ''
for(let i=hacker2.length -1 ; i >= 0; i--){
    nome += hacker2[i]
}
console.log(nome)

let menor = Math.min(hacker1.length, hacker2.length)
let diferentes = false
for (let i=0; i < menor; i++){
    if (hacker1[i] < hacker2[i]){
        console.log("The driver's name goes first.")
        break
    } else if (hacker1[i] > hacker2[i]){
        console.log("Yo, the navigator goes first definitely.")
        break
    } else if (i === (menor - 1)){
        if (hacker1.length === hacker2.length){
            console.log("What?! You both have the same name?")
        } else if (hacker1.length > menor){
            console.log("Yo, the navigator goes first definitely.")
        } else {
            console.log("The driver's name goes first.")
        }

    }    
}

//bonus1 - implementação naive, que considera que não há linhas entre os parágrafos, mas apenas um breakline.
const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae felis bibendum, sagittis neque sed, ultrices justo. Donec metus mauris, viverra porttitor massa at, laoreet aliquet magna. Pellentesque ac justo tortor. Quisque elementum velit ut arcu vulputate volutpat. Sed tincidunt in odio et porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam sit amet lectus porttitor, ultricies velit quis, lacinia tortor. Suspendisse a augue in felis ullamcorper maximus. Integer sed dolor fringilla, cursus libero at, mollis libero.
Fusce arcu nisi, convallis sit amet porta in, porta in risus. Maecenas eu orci mi. Nullam sollicitudin magna enim, at facilisis diam congue at. Quisque faucibus mauris id turpis iaculis pretium. Ut non accumsan nisi. Mauris purus felis, consectetur nec dolor semper, elementum hendrerit urna. Proin id velit quis sem rhoncus facilisis ut sed nibh.
Suspendisse in lacus est. Integer scelerisque vulputate turpis quis bibendum. Phasellus placerat ut enim eu gravida. Suspendisse non laoreet ante, a iaculis enim. Morbi imperdiet sapien diam. Maecenas nec urna aliquam, auctor eros sit amet, tempus ante. Nullam quis metus condimentum, blandit mi sed, laoreet mi. Maecenas tincidunt est dui, sit amet maximus leo hendrerit fringilla. Etiam mattis, sem a euismod dignissim, arcu lorem luctus velit, at viverra turpis eros a metus. Aenean eu ipsum aliquam, tincidunt mi non, imperdiet ipsum. Fusce eu fermentum nisi, non efficitur enim.
`
let contador = 0
for(let i=0; i < lorem.length; i++){
    if ((lorem[i] == ' ') || (lorem[i] == '\n')){
        contador++
    }
}
console.log(`Número de palavras é ${contador}`)

//implementacao naive que assume que a primeira palavra do texto inteiro nao comeca com ET
contador = 0
for(let i=3; i < lorem.length; i++){
    if (lorem[i] == ' '){ //terminou uma palavra
        if (lorem[i - 1].toUpperCase() == 'T'){
            if (lorem[i - 2].toUpperCase() == 'E'){
                if (lorem[i - 3] == ' '){
                    contador++
                } else{
                    continue
                }
            } else {
                continue
            }
        } else {
            continue
        }
    } else {
        continue
    }
}
console.log(`Número de palavras ET é ${contador}`)

//if (palindromo[i] == palindromo[texto.length - i - 1]){}

//bonus2 - feito sem função e sem arrays.
const phraseToCheck = 'A man, a plan, a canal, Panama!'
let newPhrase = ''

for(let i=0; i<phraseToCheck.length; i++){
    let letra = phraseToCheck.toUpperCase()[i]
    switch (letra){
        case 'A':
        case 'B':
        case 'C':
        case 'D':
        case 'E':
        case 'F':
        case 'G':
        case 'H':
        case 'I':
        case 'J':
        case 'K':
        case 'L':
        case 'M':
        case 'N':
        case 'O':
        case 'P':
        case 'Q':
        case 'R':
        case 'S':
        case 'T':
        case 'U':
        case 'V':
        case 'W':
        case 'X':
        case 'Y':
        case 'Z':
            newPhrase += letra
            break            
    }    
}

let palindromo = true
for(let i=0; i < newPhrase.length/2; i++){
    if (newPhrase[i] !== newPhrase[newPhrase.length - i - 1]){
        palindromo = false
    }
}

if (palindromo){
    console.log("É palíndromo!")
} else {
    console.log("Não é palíndromo.")
}

