//Toggle Sidebar
const sidebarToggle = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("show");
});

const followButtons = document.querySelectorAll(".follow");

followButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.textContent = "Following";
    button.classList.remove("follow");
    button.classList.add("following");
  });
});

const viewButtons = document.querySelectorAll(".view");

viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("View button clicked!");
  });
});
