document.getElementById("dropdownButton").addEventListener("mouseenter", function() {
    document.querySelector(".dropdown-content").style.display = "block";
});

document.getElementById("dropdownButton").addEventListener("mouseleave", function() {
    document.querySelector(".dropdown-content").style.display = "none";
});
