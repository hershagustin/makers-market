var btn = document.querySelector("#toggle-button")

btn.addEventListener("click", function() {
    document.querySelector('nav').classList.toggle('hidden');
})