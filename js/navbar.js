$( document ).ready(function() {

  //init divs
  var fixedNavBar = $(".fixed-navbar");
  var sidenav = $("#sidenav-panel");
  var homepage = $(".home-page");

  //setup
  sidenav.html('<a class="close-nav">' +
    '<i class="fa fa-times"></i>' +
    '</a>' +
    '<a class="active home-navbar">Home</a>' +
    '<a class="school-navbar disabled">School</a>' +
    '<ul style="margin:0px">'+
    '<li><a class="term1Page">Term 1</a></li>'+
    '<li><a class="term2Page">Term 2</a></li>'+
    '<li><a class="term3Page disabled">Term 3</a></li>'+
    '<li><a class="term4Page disabled">Term 4</a></li>'+
    '</ul>'+
    '<a class="projects-navbar disabled">Projects</a>' +
    '<a class="learning-navbar disabled">Learning</a>');

  fixedNavBar.html('<a id="side-navbar-icon"> '+
    '<i class="fa fa-bars"></i>'+
    '</a>'+
    '<a style="flex-grow: 1" class="active home-navbar">Home</a>'+
    '<div style="flex-grow: 1" class="dropdown-menu-school">'+
    '<a class="school-navbar">School '+
    '<i class="fa fa-caret-down"></i>'+
    '</a>'+
    '<div class="dropdown-school-content" id="school-dropdown">'+
    '<a class="term1Page">Term 1</a>'+
    '<a class="term2Page">Term 2</a>'+
    '<a class="term3Page disabled">Term 3</a>'+
    '<a class="term4Page disabled">Term 4</a>'+
    '</div>'+
    '</div>'+
    // '<a style="flex-grow: 1" class="name-navbar"><span><img id="name-navbar-img" src="/images/Shuaib-Solker.png"></img></span></a>'+
    '<a style="flex-grow: 1" class="name-navbar">Shuaib Solker</a>'+
    '<a style="flex-grow: 1" class="projects-navbar disabled">Projects</a>'+
    '<a style="flex-grow: 1" class="learning-navbar disabled">Learning</a>');


  // init nav buttons
  var sideNavIcon = $("#side-navbar-icon");
  var homeNavButton = $(".home-navbar");
  var schoolNavButton = $(".dropdown-menu-school");
  var nameNavButton = $(".name-navbar");
  var projectsNavButton = $(".projects-navbar");
  var learningNavButton = $(".learning-navbar");
  var closeNavButton = $(".close-nav");
  var schoolDropdown = $("#school-dropdown");
  var term1Page = $(".term1Page");
  var term2Page = $(".term2Page");
  var term3Page = $(".term3Page");
  var term4Page = $(".term4Page");

  //events
  sideNavIcon.on("click", function(evt) {
    sidenav.css("width","200px");
    // homepage.css("margin-left", "200px");
  });
  closeNavButton.on("click", function(evt) {
    sidenav.css("width","0px");
    // homepage.css("margin-left", "0px");
  });

  homepage.on("click", function(evt) {
    //close side nav
    sidenav.css("width","0px");

    //close dropdown
    if (!evt.target.matches('.school-navbar')) {
        if (schoolDropdown.hasClass('show')) {
          schoolDropdown.removeClass('show');
        }
    }
  });

  schoolNavButton.on("click", function(evt) {
    schoolDropdown.toggleClass("show");
  });

  term1Page.on("click", function(evt) {
    window.location = "/html/school/term1/";
  });
  term2Page.on("click", function(evt) {
    window.location = "/html/school/term2/";
  });
  term3Page.on("click", function(evt) {
    // window.location = "/html/school/term3.html";
  });
  term4Page.on("click", function(evt) {
    // window.location = "/html/school/term4.html";
  });
  homeNavButton.on("click",function(evt) {
    window.location = "/";
  });
  nameNavButton.on("click",function(evt) {
    window.location = "/";
  });
});
