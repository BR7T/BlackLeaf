
const telefoneCadastro = document.querySelector('#telefone-signIn')

telefoneCadastro.addEventListener('keypress' , function(e){
    if(e.keyCode > 47 && e.keyCode<58){
        
    }else{
        e.preventDefault()
    }
})


function mascaraTelefone(){
    let numero = telefoneCadastro.value
    let numeronovo;
         numeronovo = numero.replace(/(\d{2})?(\d{5})?(\d{4})/, '($1) $2-$3')
         telefoneCadastro.value = numeronovo
    
}
