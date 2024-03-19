document.getElementById("firstScripts-time").innerHTML = "Date/Time : " + Date();

let first;
let last;
let mood1;
let companyName = "Ochsner Designs"
function firstName()
{
    first = document.getElementById("firstScripts-fName").value;
}
function lastName()
{
    last = document.getElementById("firstScripts-lName").value;
}
function mood()
{
    mood1 = document.getElementById("firstScripts-mood").value;
}
function greetMe() 
{
    document.getElementById("greeting").innerHTML = 
        `The ${companyName} welcomes you, ${first + " " + last} !
        We're glad you are doing ${mood1}!`
}


function toPolygon() 
{
    const polyText = document.getElementById("polyText");
    let number = document.getElementById("firstScripts-polygon").value;
    number = Math.abs(number);
    number = Math.round(number);
    if (number === 0)
    {
        polyText.innerHTML = "No Polygons with 0 sides"
        return;
    } else if (number > 10) 
    {
        polyText.innerHTML = "Choose a smaller number";
        return
    }
    let polyname;
    switch (number)
    {
        case 1:
            polyname = "monogon";
            break;
        case 2:
            polyname = "bigon";
            break;
        case 3:
            polyname = "triangle";
            break;
        case 4:
            polyname = "quadrilateral";
            break;
        case 5:
            polyname = "pentagon";
            break;
        case 6:
            polyname = "hexagon";
            break;
        case 7:
            polyname = "septagon";
            break;
        case 8:
            polyname = "octagon";
            break;
        case 9:
            polyname = "nonagon";
            break;
        case 10:
            polyname = "decagon";
            break;
        default:
            polyname = "how?!?!"
            break;
    }
    polyText.innerHTML = `The name of the polygon with ${number} sides is ${polyname}`;
}


function function1() 
{
    let text = document.getElementById("firstScripts-f1");
    let chairType = Math.floor(Math.random()*2);
    if (chairType === 1) {
        text.innerHTML = "Uncomfortable Chair"
    } else {
        text.innerHTML = "Painful Chair"
    }
}

function function2() 
{
    let text = document.getElementById("firstScripts-f2");
    let number = parseFloat(document.getElementById("firstScripts-f2Input").value);
    text.innerHTML = number * number + number + Math.floor(Math.random() * 20);
}

function function3() 
{
    let text = document.getElementById("firstScripts-f3");
    let number = parseFloat(document.getElementById("firstScripts-f3Input").value);
    text.innerHTML = Math.sin(number) * Math.cos(number) * number;
}

function function4() 
{
    document.getElementById("firstScripts-f4").innerHTML = 
        "We create chairs that are both painful and uncomfortable";
}

function function5() 
{
    let options = ["yes", "no", "absolutly not", "chairs should hurt", "meh"];
    document.getElementById("firstScripts-f5").innerHTML = options[Math.floor(Math.random() * options.length)];
}
