const button = document.getElementsByClassName("do")[0];
let box = document.getElementsByClassName("box")[0];

console.log(button);


button.addEventListener("click", ()=>{
    fetch("https://www.nike.com/", {
    method:"GET",
    mode:"cors"
    })
    .then( data => {
        console.log(data);
        return data.text;
    })
    .then( (word) => {
        console.log(word);
        box.innerHTML = word;
    });
});
