// let div_box = document.getElementById("box1");
// console.log("actual dom me div ka size",div_box)
// let btn = document.getElementById("btn");
// console.log(document.body)

// btn.addEventListener("click", () => {
//     console.log("clt")
//     let p = document.createElement("p");
//     p.textContent = "Newly created paragraph"
//     div_box.append(p);
// })


let age=22
function DesingPageByHemantInfo() {
    let div_box = document.getElementById("root");
    div_box.innerHTML =
        `
<p><b>Name: </b>Hemant Mapari</p>
<p><b>Id: </b> C2115</p>
<p><b>Age: </b>${age}</p>
<button 
onclick="increaseAge()">increase age</button>
`

}

DesingPageByHemantInfo();


function increaseAge(){
    console.log("hey")
    age=age+5;
    DesingPageByHemantInfo();
}