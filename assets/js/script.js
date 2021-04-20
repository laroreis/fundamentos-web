/* 
JS é Case sensitive: Reconhece letras maiusculas e minusculas;

você pode referenciar/filtrar/ ACESSAR o DOM por
Tag: getElementByTagName();
Id: getElementById();
Nome: getElementsName();
Classe: getElementsByClassName();
Seletor: querySelector();   --Melhor pratica
*/


/* Declaração de Variavel */ 
let nome = window.document.getElementById('nome')
let email = document.querySelector("input#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')


/* Mexendo no Style (css) do site, tamanho da caixa interativa*/ 
nome.style.width = '100%'
email.style.width = '100%'

/* função de validação*/
function validaNome(){
    let txtNome = document.querySelector('#txtNome')

    if(nome.value.length < 3){
       txtNome.innerHTML = 'Nome Inválido'
       txtNome.style.color = 'red'
    } else{
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }

}


function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }

}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = 'texto é muito grande, digite até 100 caractere'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'

    }else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }

}


function enviar(){
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert ('Formulário enviado com sucesso!')
    } else{
        alert('Preencha o formulário corretamente antes de enviar!')
    }
}


/* Zoom do Mapa*/

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}


function mapaNormal(){
    mapa.style.width = "350px"
    mapa.style.height = "250px" 

}