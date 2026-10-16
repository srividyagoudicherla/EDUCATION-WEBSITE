function phoneacess() {
    document.querySelector(".nav-links").classList.toggle("active");
}

function searchWebsite() {
    let input = document.getElementById("searchInput").value.toLowerCase().trim();

    if (input === "") {
        alert("Please enter something to search");
    } else if (input === "home") {
        window.location.href = "./home.html#home";
    } else if (input === "about") {
        window.location.href = "./about.html";
    } else if (input === "timing") {
        window.location.href = "./timing.html";
    } else if (input === "course") {
        window.location.href = "./course.html";
    } else {
        alert("No matching page found. Try home, about, timing, or course.");
    }
}