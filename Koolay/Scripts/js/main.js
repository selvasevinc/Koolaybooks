on('click', '.scrollto', function (e) {
  if (select(this.hash)) {
    //e.preventDefault()

    let navbar = select('#navbar')
    if (navbar.classList.contains('navbar-mobile')) {
      navbar.classList.remove('navbar-mobile')
      let navbarToggle = select('.mobile-nav-toggle')
      navbarToggle.classList.toggle('bi-list')
      navbarToggle.classList.toggle('bi-x')
    }
    scrollto(this.hash)
  }
}, true)     



//var x = window.innerWidth;
//if (x < 1000)
//    $("section").css("position", "inherit");