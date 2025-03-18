const barsLogo = document.getElementById("bars-logo")
const pagesTxt = document.querySelector(".pages-txt")

barsLogo.addEventListener("click", () => {
  pagesTxt.style.display = pagesTxt.style.display === "flex" ? "none" : "flex"
})

