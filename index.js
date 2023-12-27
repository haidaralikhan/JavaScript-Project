let links = [
  {
    title: "Home",
    src: "/home.html",
  },
  { title: "Home", src: "/home.html" },
  { title: "About", src: "/home.html" },
  { title: "Contact", src: "/home.html" },
  { title: "Pricing", src: "/home.html" },
];

let navbar = document.getElementById("navbar");
let logo = document.createElement("img");
let linkDiv = document.createElement("div");

logo.src = "./asset/img.jpg";
logo.style.height = "100px";
logo.style.width = "120px";
logo.style.margin = "5px 2px";
logo.style.borderRadius = "50%";
logo.style.border = "1px solid black";

let btnDiv = document.createElement("div")


let login = document.createElement("button")
login.innerText='LOGIN'
let signUp = document.createElement("button")
signUp.innerText='SIGN UP'
login.addEventListener("click",function(){
  alert("Logged in successfully !!!")
})
signUp.addEventListener("click",function(){
  alert("User Register successfully")
})

btnDiv.append(login,signUp)

links.map(function (el) {
  let anchor = document.createElement("a");
  anchor.innerText = el.title;
  anchor.href = el.src;
  anchor.style.color = "blue";
  anchor.style.fontSize = "20px";
  anchor.style.textDecoration = "none";
 

  linkDiv.append(anchor);
});

let main = document.getElementById("main");
let banner = document.createElement("img");
main.style.background = "blue";
banner.src = "./asset/banner.jpg";
banner.style.width = "100%";
banner.style.height = "300px";
banner.style.overflow = "hidden";

let services = document.createElement("h1");
services.innerText = "Our Services";
services.style.textAlign = "center";
services.style.color = "#123443";

let itemDiv = document.createElement("div");
itemDiv.style.display = "grid";
itemDiv.style.gridTemplateColumns = "repeat(3,300px)";
itemDiv.style.border = "3px solid red";
itemDiv.style.gap = "30px";
itemDiv.style.alignItems = "center";
itemDiv.style.justifyContent = "space-around";
itemDiv.style.color = "white";

let servicesJSON = [
  {
    title: "Services 1",
    text: "Lorem ipsum dolor, sit ame Lorem ipsum dolor, sit ame Lorem ipsum dolor, sit ame Lorem ipsum dolor, sit ame Lorem ipsum dolor, sit ame Lorem ipsum dolor, sit ame ",
src:'./asset/img2.jpg'},
  {
    title: "Services 2",
    text: "Lorem ipsum dolor, sit ame Lorem ipsum dolor, sit ame Lorem ipsum dolor, sit ame Lorem ipsum dolor, sit ame Lorem ipsum dolor, sit ame Lorem ipsum dolor, sit ame ",
  src:'./asset/img2.jpg'},
  {
    title: "Services 3",
    text: "Lorem ipsum dolor, sit ame Lorem ipsum dolor, sit ame Lorem ipsum dolor, sit ame Lorem ipsum dolor, sit ame Lorem ipsum dolor, sit ame Lorem ipsum dolor, sit ame ",
  src:'./asset/img2.jpg'},
  {
    title: "Services 4",
    text: "Lorem ipsum dolor, sit ame Lorem ipsum dolor, sit ame Lorem ipsum dolor, sit ame Lorem ipsum dolor, sit ame Lorem ipsum dolor, sit ame Lorem ipsum dolor, sit ame ",
  src:'./asset/img2.jpg'},
  {
    title: "Services 5",
    text: "Lorem ipsum dolor, sit ame Lorem ipsum dolor, sit ame Lorem ipsum dolor, sit ame Lorem ipsum dolor, sit ame Lorem ipsum dolor, sit ame Lorem ipsum dolor, sit ame ",
  src:'./asset/img2.jpg'},
  {
    title: "Services 6",
    text: "Lorem ipsum dolor, sit ame Lorem ipsum dolor, sit ame Lorem ipsum dolor, sit ame Lorem ipsum dolor, sit ame Lorem ipsum dolor, sit ame Lorem ipsum dolor, sit ame ",
  src:'./asset/img2.jpg'},
];
servicesJSON.forEach(function (el) {
  let div = document.createElement("div");
   let img = document.createElement("img")
  div.style.borderRadius="30px"
  div.style.height='300px'
  div.style.overflowX="scroll"


    img.src = el.src
    img.style.height="150px"
    img.style.width="100%"
    img.style.borderTopRightRadius="20px"
    img.style.borderTopLeftRadius="20px"
    


  let serv_h = document.createElement("h2");
  serv_h.innerText = el.title;
  div.style.border = "1px solid black";
  div.style.borderRadius="30px"
  div.style.boxShadow ="box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
  serv_h.style.textAlign = "center";
  serv_h.style.fontFamily = "sans sarif";

  let para = document.createElement("p");
  para.innerHTML = el.text;
  para.style.textAlign = "center";
  para.style.borderRadius="20px"


  div.append(img,serv_h, para);

  itemDiv.append(div);
});

main.append(banner, services, itemDiv);

// SECTION

let stud = document.getElementById("students")
stud.style.display="flex"
stud.style.justifyContent="space-around"
fetch("./db.json")
.then(function(res){
  return res.json()
})
.then(function(data){ 
  console.log(data)
  showStudent(data)
})

function showStudent(data){
  data.map(function(el){
    let div = document.createElement("div")
    div.style.border="1px solid black"
    div.style.display="grid"
    div.style.justifyContent="center"
    div.style.width="150px"

    let img = document.createElement("img")
    img.src ="./asset/logo.jpg"

    img.style.borderRadius="100px"
    img.style.height= "100px"
    
    let name = document.createElement('h3')
    name.innerText= el.name
    let age= document.createElement('p')
    age.innerText= `Age : ${el.age}`
    let grad = document.createElement('p')
    grad.innerText=`Grade : ${el.grad} `

    let subject = document.createElement('p')
    let bag = "";
    for(let i = 0 ; i<el.subject.length;i++){
      bag = bag + el.subject[i] + " , "
    }
    subject.innerText = bag





    div.append(img,name,age,grad,subject)
    stud.append(div)


  })
}












navbar.append(logo, linkDiv,btnDiv);

// style part
// nabar
navbar.style.display = "flex";
navbar.style.justifyContent = "space-around";
navbar.style.gap = "30px";
navbar.style.background = "#1234";
navbar.style.borderRadius = "30px";
// linkdiv

linkDiv.style.display = "flex";
linkDiv.style.justifyContent = "space-between";
linkDiv.style.gap = "20px";
linkDiv.styl.alignItems = "center";

//MAIN container

// banner image multypal , serviec,
