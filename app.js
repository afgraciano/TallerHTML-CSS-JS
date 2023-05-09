(function(){
    const listElements = document.querySelectorAll('.menu__item--show');
    const list = document.querySelector('.menu__links');
    const menu = document.querySelector('.menu__hamburguer');
    const addClick = ()=>{
        listElements.forEach(element =>{
            element.addEventListener('click', ()=>{
                
                /*Obtener a menú nesting */
                let subMenu = element.children[1];
                let height = 0;
                element.classList.toggle('menu__item--active'); /*Agregarle una clase */

                if(subMenu.clientHeight === 0){
                    height = subMenu.scrollHeight; /*Altura mínima para existir */
                }
                subMenu.style.height = `${height}px`;
            });
        });
    }
    const deleteStyleHeight = ()=>{
        listElements.forEach(element=>{
            if(element.children[1].getAttribute('style')){
                element.children[1].removeAttribute('style');
                element.classList.remove('menu__item--active');
            }
        });
    }

    /*Cuando se amplia la ventana */
    window.addEventListener('resize', ()=>{
        if(window.innerWidth > 800)
        {
            deleteStyleHeight();
            /*Para que no se muestre en el cambio de pantalla grande a pequeña*/
            if(list.classList.contains('menu__links--show'))
                list.classList.remove('menu__links--show');
        }
        else{addClick();}
    });

    if(window.innerWidth <= 800){addClick();}

    /*Se le agrega o quita una clase dependiendo si la tiene o no*/
    menu.addEventListener('click', ()=> list.classList.toggle('menu__links--show'));
    
})();

