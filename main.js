const layer1 = document.querySelector('.container1');
const layer2 = document.querySelector('.container2');
const layer3 = document.querySelector('.container3');

function myFunction() {

    // document.getElementById("enter").innerText = "YOU CLICKED ME!";
    // alert("Hello WOrld");


    if (document.getElementById("lname").value == "5647382910") {
        document.body.classList.add("color-transition-green");
        layer2.classList.add("visible");
    } else {
        document.body.classList.add("color-transition-red");
        layer3.classList.add("visible");
    } 

    layer1.classList.add("transparent");

}

function reset() {
    layer2.classList.remove("visible");
    layer3.classList.remove("visible");
    layer1.classList.remove("transparent");
    document.body.classList.remove("color-transition-blue");
    document.body.classList.remove("color-transition-red");
    document.body.classList.remove("color-transition-green");
}