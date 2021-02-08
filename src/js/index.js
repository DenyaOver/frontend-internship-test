
document.addEventListener("DOMContentLoaded", function(){
    const form = document.querySelector('form'),
          close_form = form.querySelector('.close-button'),
          main = document.querySelector('.main'),
          show = document.querySelector('#show-popup-form'),
          message = document.createElement('div');


    show.addEventListener('click', ()=>{
        form.classList.remove("hide");
        form.classList.add("show");
        show.classList.add("hide");
        message.classList.add('btn-main');
        message.textContent = "Thank you!";
        main.append(message);
        message.classList.remove("hide");
        message.classList.add("show");
    });


    close_form.addEventListener('click', ()=>{
        form.classList.remove("show");
        form.classList.add("hide");
        show.classList.remove("hide");
        message.classList.remove ("show");
        message.classList.add("hide");
    });

    
    form.addEventListener('submit', (e) =>{
            e.preventDefault();
            form.reset();
            setTimeout(() => {
                form.classList.remove("show");
                form.classList.add("hide");
            }, 3000);
    });
       
});