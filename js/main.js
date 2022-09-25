let shrtButton = document.querySelector(".shorten");
let urlInput = document.querySelector("#url-input");
let errorText = document.getElementById("error-text")

shrtButton.addEventListener('click', () => {
    if(urlInput.value == ""){
        urlInput.classList.add('error');
        errorText.style.display = "block";
    }
});