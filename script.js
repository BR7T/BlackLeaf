const items = document.querySelectorAll('.item')
const maxItems = items.length
const controls = document.querySelectorAll('.arrow-button')
const dots = document.querySelectorAll('.dots')

let CurrentItem = 0;

const cardsAll = document.querySelectorAll('.card-all')

controls.forEach(control => {
    control.addEventListener('click',() => {
        
        const isLeft = control.classList.contains('arrow-left')

        if(isLeft){
            CurrentItem = CurrentItem-1
            
            
        }
        else{
            CurrentItem = CurrentItem+1
            
        }

        if(CurrentItem<0){
            CurrentItem = maxItems -1
        }

        if(CurrentItem>=maxItems){
            CurrentItem=0
        }

        console.log(CurrentItem)

        
        dots.forEach(dot => dot.classList.remove('selected_dot'))
        items.forEach(item => item.classList.remove('centerimage'))
        cardsAll.forEach(card => card.classList.remove('card-selected'))
        


        items[CurrentItem].scrollIntoView({
            
            inline:'center',
            block:'nearest'
            
        })
        
        

        dots[CurrentItem].classList.add('selected_dot')
        items[CurrentItem].classList.add('centerimage')
        cardsAll[CurrentItem].classList.add('card-selected')
        
        
    })
    
    
    
})


let cells = document.querySelectorAll('.plans-cell')

cells.forEach(cell => {
    if(cell.classList.contains('no')){
        cell.innerHTML = '<ion-icon name="close-outline"></ion-icon>'
    }else{
        cell.innerHTML = '<ion-icon name="checkmark-circle-outline"></ion-icon>'
    }
})





const userArea = document.querySelector('#user-area')
const BotaoAccount = document.querySelector('#user-area ion-icon')
const nav = document.querySelector('.account')
const html = document.documentElement

const warning = document.createElement('div')
const warningDiv = document.createElement('div')
const LeftWarningDiv = document.createElement('div')
const RightWarningDiv = document.createElement('div')
const CloseWarning = document.createElement('button')


BotaoAccount.addEventListener('click', ()=>{
    userArea.classList.toggle('ok')
    if(userArea.classList.contains('ok')){
        nav.classList.add('down')
        nav.classList.remove('up')
    }else{
        nav.classList.add('up')
        nav.classList.remove('down')
    }
    
})


const botaoLogo = document.querySelector('.logo')

botaoLogo.addEventListener('click' , ()=>{
    window.open('./index.html')
})





document.addEventListener('DOMContentLoaded' , ()=>{
    document.body.appendChild(warning)
    warning.appendChild(warningDiv)
    warningDiv.appendChild(LeftWarningDiv)
    warningDiv.appendChild(RightWarningDiv)
    warningDiv.appendChild(CloseWarning)

    CloseWarning.innerHTML = '<ion-icon name="close-outline"></ion-icon>'
    LeftWarningDiv.innerHTML = '<ion-icon name="warning-outline"></ion-icon>'
    RightWarningDiv.innerHTML = 'Aviso! Essa página não contém conexão com o banco de dados, portanto não funcionará o login ou o cadastro'

    CloseWarning.classList.add('CloseWarning')
    RightWarningDiv.classList.add('rightwarning')
    LeftWarningDiv.classList.add('leftwarning')
    warningDiv.classList.add('warning-div')
    warning.classList.add('warning')

    CloseWarning.addEventListener('click' , () => {
        document.body.removeChild(warning)
    })
})

const SignInButton = document.getElementById('SignInButton')



SignInButton.addEventListener('click' , ()=>{
    window.open('./signIn.html')
})

const menuButton = document.querySelector('.menu')
const menuDown = document.querySelector('.menu-down')

menuButton.addEventListener('click' , ()=>{
    menuButton.classList.toggle('desce')
    if(menuButton.classList.contains('desce')){
        menuDown.classList.remove('menusobe')
        menuDown.classList.add('menudesce')
        document.querySelector('.menu-button').innerHTML = '<ion-icon name="close-outline"></ion-icon>'
    }
    else{
        document.querySelector('.menu-button').innerHTML = '<ion-icon name="menu-outline"></ion-icon>'
        menuDown.classList.remove('menudesce')
        menuDown.classList.add('menusobe')
    }
})



