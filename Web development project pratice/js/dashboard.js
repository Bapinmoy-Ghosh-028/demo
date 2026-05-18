const toggleBtn = document.getElementById("toggleBtn");
const sidebar = document.getElementById("sidebar");
const pageTitle = document.getElementById("pageTitle");
const contentArea = document.getElementById("contentArea");

// Sidebar toggle
toggleBtn.addEventListener("click", () => {
  if (window.innerWidth > 768) {
    sidebar.classList.toggle("collapsed"); // desktop collapse
  } else {
    sidebar.classList.toggle("active"); // mobile slide
  }
});

// Dynamic content loading
const pages = {
  dashboard: "<p>Welcome to your <b>Dashboard</b>. Here you see an overview.</p>",
  students: "<p>Here you can manage <b>Students</b>.</p>",
  teachers: "<p>Here you can manage <b>Teachers</b>.</p>",
  attendance: "<p>Here is the <b>Attendance</b> section.</p>",
  reports: "<p>Generate and view <b>Reports</b> here.</p>",
  settings: "<p>Adjust your <b>Settings</b> here.</p>",
};

// Sidebar navigation click
document.querySelectorAll(".sidebar nav ul li a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const page = link.getAttribute("data-page");
    if (page && pages[page]) {
      pageTitle.textContent = link.textContent;
      contentArea.innerHTML = pages[page];
    }
  });
});
