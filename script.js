/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function clickDropdown() {
  document.getElementById("versionsMenu").classList.toggle("show");
  document.getElementById("languagesMenu").classList.toggle("show");
  document.getElementById("vColor").style.color = "#ffffff";
  document.getElementById("lColor").style.color = "#ffffff";
}

function openSideNav() {
  document.getElementById("rightSidenav").style.width = "400px";
  document.getElementById("overlay").style.display = "block";
}

function closeSideNav() {
  document.getElementById("rightSidenav").style.width = 0;
  document.getElementById("overlay").style.display = "none";
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.versions-btn')) {
    var dropdown = document.getElementsByClassName("versions-menu");
    var i;
    for (i = 0; i < dropdown.length; i++) {
      var openDropdown = dropdown[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
    document.getElementById("vColor").style.color = "#bfbfbf";
  }
  if (!event.target.matches('.languages-btn')) {
    var dropdown = document.getElementsByClassName("languages-menu");
    var i;
    for (i = 0; i < dropdown.length; i++) {
      var openDropdown = dropdown[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
    document.getElementById("lColor").style.color = "#bfbfbf";
  }
}
const bodyTag = document.querySelector('body');
const myHeader = document.querySelector('header');
const logo = document.getElementById('logo');
var navItem = document.querySelectorAll('nav ul li a');
var navButton = document.querySelectorAll('nav ul li button');
var i;
const vColor = document.getElementById('vColor');
const lColor = document.getElementById('lColor');
const nav1 = document.getElementById('nav1');
const nav2 = document.getElementById('nav2');
const nav3 = document.getElementById('nav3');
const nav4 = document.getElementById('nav4');
const nav5 = document.getElementById('nav5');
const hamburger = document.getElementById('hamburger');
var hamburgerBars = document.getElementById('hamburger').querySelectorAll('div');

window.onscroll = function() {scrollFunction()};
window.onresize = function() {resizeFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    myHeader.style.backgroundColor = "#ffffff";
    for(i = 0; i < navItem.length; i++) {
      navItem[i].style.color = "#303030";
    }
    for(i = 0; i < navButton.length; i++) {
      navButton[i].style.color = "#303030";
    }
    if(window.innerWidth > 767) {
      logo.style.backgroundImage = "url('assets/Kubernetes_Logo2.svg')";
    }/*else {
      logo.style.backgroundImage = "url('assets/favicon.png')";
    }*/
    
    /*Array alternative???*/
    vColor.onmouseover = function() {mouseOverScroll(vColor)};
    lColor.onmouseover = function() {mouseOverScroll(lColor)};
    nav1.onmouseover = function() {mouseOverScroll(nav1)};
    nav2.onmouseover = function() {mouseOverScroll(nav2)};
    nav3.onmouseover = function() {mouseOverScroll(nav3)};
    nav4.onmouseover = function() {mouseOverScroll(nav4)};
    nav5.onmouseover = function() {mouseOverScroll(nav5)};

    vColor.onmouseout = function() {mouseOutScroll(vColor)};
    lColor.onmouseout = function() {mouseOutScroll(lColor)};
    nav1.onmouseout = function() {mouseOutScroll(nav1)};
    nav2.onmouseout = function() {mouseOutScroll(nav2)};
    nav3.onmouseout = function() {mouseOutScroll(nav3)};
    nav4.onmouseout = function() {mouseOutScroll(nav4)};
    nav5.onmouseout = function() {mouseOutScroll(nav5)};

    
      hamburger.onmouseover = function() {mouseOverScrollHamb(hamburgerBars)};
      hamburger.onmouseout = function() {mouseOutScrollHamb(hamburgerBars)};
    

  } else {
    myHeader.style.backgroundColor = "#000000";
    for(i = 0; i < navItem.length; i++) {
      navItem[i].style.color = "#bfbfbf";
    }
    for(i = 0; i < navButton.length; i++) {
      navButton[i].style.color = "#bfbfbf";
    }
    if(window.innerWidth > 767) {
      logo.style.backgroundImage = "url('assets/Kubernetes_Logo.svg')";
    }/*else {
      logo.style.backgroundImage = "url('assets/favicon.png')";
    }*/

    /*Array alternative???*/
    vColor.onmouseover = function() {mouseOver(vColor)};
    lColor.onmouseover = function() {mouseOver(lColor)};
    nav1.onmouseover = function() {mouseOver(nav1)};
    nav2.onmouseover = function() {mouseOver(nav2)};
    nav3.onmouseover = function() {mouseOver(nav3)};
    nav4.onmouseover = function() {mouseOver(nav4)};
    nav5.onmouseover = function() {mouseOver(nav5)};

    vColor.onmouseout = function() {mouseOut(vColor)};
    lColor.onmouseout = function() {mouseOut(lColor)};
    nav1.onmouseout = function() {mouseOut(nav1)};
    nav2.onmouseout = function() {mouseOut(nav2)};
    nav3.onmouseout = function() {mouseOut(nav3)};
    nav4.onmouseout = function() {mouseOut(nav4)};
    nav5.onmouseout = function() {mouseOut(nav5)};
    
    hamburger.onmouseover = function() {mouseOverHamb(hamburgerBars)};
    hamburger.onmouseout = function() {mouseOutHamb(hamburgerBars)};    
  }
}

function resizeFunction() {
  if(window.innerWidth > 767) {
    closeSideNav();
  }
}

function mouseOver(component) {
  component.style.color = "#888";
}
function mouseOut(component) {
  component.style.color = "#bfbfbf";
}
function mouseOverScroll(component) {
  component.style.color = "#505050";
}
function mouseOutScroll(component) {
  component.style.color = "#303030";
}

function mouseOverHamb(component) {
  for(var i = 0; i < component.length; i++){
    component[i].style.backgroundColor = "#ffffff";
  }
}
function mouseOutHamb(component) {
  for(var i = 0; i < component.length; i++){
    component[i].style.backgroundColor = "#3371e3";
  }
}
function mouseOverScrollHamb(component) {
  for(var i = 0; i < component.length; i++){
    component[i].style.backgroundColor = "#000000";
  }
}
function mouseOutScrollHamb(component) {
  for(var i = 0; i < component.length; i++){
    component[i].style.backgroundColor = "#3371e3";
  }
}