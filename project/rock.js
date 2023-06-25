let countPeo = document.getElementById("count-people");
let saveDash = document.getElementById("save-element")




let count = 0

function increament(){
    count += 1
    countPeo.textContent = count ;

}


function save(){

    let countstr = count + " - "
    

    saveDash.textContent += countstr 
    countPeo.textContent = 0
    count = 0

    console.log(countstr)
    
}


let firstName = "owolabi"
let lastName = "kumuyi"
let fullName = firstName + " "+lastName

console.log(fullName)


let name = "Linda"
let greeting = " Hi there"

function king(){
    console.log(name +","+ greeting + "!")
}

king()

let myPoint=3

function addPoint(){
    myPoint += 3
   
}


function removePoint(){
    myPoint -= 1
   
   }
addPoint()
addPoint()
addPoint()
removePoint()
removePoint()




console.log(myPoint)

let purch = document.getElementById("error")




function something(){
    purch.innerHTML =("something went wrong")

}


let num1 = 8
let num2 = 2

let coun = document.getElementById("num1").textContent = num1
let cou = document.getElementById("num1").textContent = num2

let total = document.getElementById("sum")



function add(){

    let addUp = coun + cou
   
    total.textContent = "total" + " " + addUp
    
}

function subtract(){
   
    let addUp = coun - cou
   
    total.textContent = "total" + " " + addUp
    
}

function divide(){
   
    let addUp = coun / cou
   
    total.textContent = "total" + " " + addUp
    
}


function multiply(){
   
    let addUp = coun * cou
   
    total.textContent = "total" + " " + addUp
    
}

let num3 = 12
let num4 = 5
let number = 0



let game= document.getElementById("cals")
let addGame = document.getElementById("cal")


function addFix(){
 
    num3 = num3 + 1
    addGame.textContent = num3

    
}

function addFix1(){
 
    num3 = num3 + 2
    addGame.textContent = num3
    
}

function addFix2(){
 
    num3 = num3 + 3
    addGame.textContent = num3
    
}


function addFix4(){
 
    num4 +=1
    game.textContent = num4
    
}

function addFix5(){
 
    num4 +=2
    game.textContent = num4
    
    
}

function addFix6(){
 
    num4 +=3
    game.textContent = num4
    
    
}