const emails = document.querySelector('#submit');
const button = document.querySelector('.arrowLabel');
const box = document.querySelector('.error');
const boxOf = document.querySelector('.box3');
const message = document.querySelector('.errorMessage');

const validEmail = (email) =>{
    let formatEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return formatEmail.test(String(email).toLowerCase());
}


button.addEventListener('click', () => {
    let emailValues = emails.value;
    if(validEmail(emailValues)){
     
        
    }
    else{
        box.classList.remove('error');
        box.classList.add('errorActive');
        message.innerHTML= 'Please provid a valid email'
        boxOf.classList.remove('box3');
        boxOf.classList.add('boxX');
        
    }if(validEmail(emailValues)){
        box.classList.remove('errorActive');
        box.classList.add('error');
        boxOf.classList.add('box3');
        boxOf.classList.remove('boxX');
        message.innerHTML = '';
    }
});


