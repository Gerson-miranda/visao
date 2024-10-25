//dom
const alvo = document.querySelector('#alvo')
const btGojo = document.querySelector('#btGojo')
const btItadori = document.querySelector('#btItadori')
const btSukuna = document.querySelector('#btSukuna')
const btMegumi = document.querySelector('#btMegumi')
const btNobra = document.querySelector('#btNobra')
const btMaki = document.querySelector('#btMaki')
const btPanda = document.querySelector('#btPanda')
const btMahito = document.querySelector('#btMahito')
const btChoso = document.querySelector('#btChoso')
const btNanami_Kento = document.querySelector('#btNanami_Kento')

//eventos

btGojo.addEventListener('click',gojo)
btItadori.addEventListener('click',itadori)
btSukuna.addEventListener('click',sukuna)
btMegumi.addEventListener('click',megumi)
btNobra.addEventListener('click',nobra)
btMaki.addEventListener('click',maki)
btPanda.addEventListener('click',panda)
btMahito.addEventListener('click',mahito)
btChoso.addEventListener('click',choso)
btNanami_Kento.addEventListener('click',nanami_Kento)
alvo.addEventListener('click',volta)

//função

function gojo(){
    alvo.src ='imagem/Satoru-Gojo-capa-19-09-Jujutsu-kaisen.webp'
}
function itadori(){
    alvo.src ='imagem/Yuji-Itadori.webp'
}
function sukuna(){
    alvo.src ='imagem/sukuna.webp'
}
function megumi(){
    alvo.src ='imagem/megumi-jujutsu-kaisen.jpg'
}
function nobra(){
    alvo.src ='imagem/nobra.avif'
}
function maki(){
    alvo.src ='imagem/Maki.webp'
}
function panda(){
    alvo.src ='imagem/Jujutsu-Kaisen-Panda.avif'
}
function mahito(){
    alvo.src ='imagem/mahito-3.jpg'
}
function choso(){
    alvo.src ='imagem/choso.jpg'
}
function nanami_Kento(){
    alvo.src ='imagem/Nanami Kento.webp'
}
function volta(){
    alvo.src ='imagem/01-66.jpg'
}