/*
-tipagem fraca e dinamica (inferencia de dados)
- Case sensitive (a != A)
- criação de variaveis
-- let -> "let it change" -> variavel que pode ter valor alterado
-- const -> "constant" -> variavel que não pode ter valor alterado
-- var -> "variable" ->  variavel que pode ou não ter valor alterado

DOM -> document-object Model
window.document.getElementById('nome')
window.document.getElementsByTagName(label)
*/

let nome = document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
   if(nome.value.length < 3){
    txtNome.innerHTML = 'Nome Inválido'
    txtNome.style.color = 'red'
   }else {
    txtNome.innerHTML = 'Nome Válido'
    txtNome.style.color = 'green'
    nomeOk = true
   }
       
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    }else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
        assuntoOk = false
    }else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso!')
    }else{
        alert ('preencha o formulário corretamente antes de enviar')
    }
}

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'

}

function mapaNormal(){
     mapa.style.width = '400px'
    mapa.style.height = '250px'

}
