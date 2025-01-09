// toggle section active
const sectionNavigator = (name) => {
  let sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.classList.remove("active");
    if (section.classList.contains(name)) {
      section.classList.add("active");
    }
  });
};

// navigation to sections. toggle nav active

window.addEventListener("load", () => {
  const navlist = document.querySelectorAll(".nav-btn");
  navlist.forEach((nav) => {
    nav.addEventListener("click", function (e) {
      e.preventDefault();
      navlist.forEach((el) => {
        el.classList.remove("active");
      });
      this.classList.add("active");
      sectionNavigator(this.getAttribute("data-target"));
      screen.width < 768 && toggleMenu();
    });
  });
});
const menuButton = document.querySelector(".menu");
const nav = document.querySelector(".nav");
const navItems = document.querySelectorAll(".nav li");

// Add click event listener to toggle the menu visibility
menuButton.addEventListener("click", function () {
  nav.classList.toggle("show"); // Toggle the "show" class to display the nav
});

// Hide the menu when any nav item is clicked
navItems.forEach((item) => {
  item.addEventListener("click", function () {
    nav.classList.remove("show"); // Hide the menu when a link is clicked
  });
});
