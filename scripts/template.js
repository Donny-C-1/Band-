if (document.querySelector('.animated-menu-button')) {
    document.querySelector('.animated-menu-button').addEventListener('click', function () {
        console.log('Button Clicked');
        this.classList.toggle('menu-open');
    })
}
