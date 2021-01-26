const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navBar');
    const navItems = document.querySelectorAll('.navItem');

    console.log(navItems);

    burger.addEventListener('click', ()=>{
        
        nav.classList.toggle('navBarActive');

        navItems.forEach((item, index)=>{
            if(item.style.animation){
                item.style.animation = '';
            }else{
                item.style.animation = `navItemFade 0.5s ease forwards ${(index / 5) + 0.05}s`;
            }
        });

        burger.classList.toggle('cross');

    })
}

navSlide();