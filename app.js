
let arrys = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];
for(let i = 0; i<arrys.length; i++);
{
    for(let j = 0; j<arrys.length; j++)
    {
        console.log("Square of "+ fruits[i][j] +"is " +arrys[i][j]*arrys[i][j]);
    }
}

let num = [1,2,3,4,5,6,7,8,9];
let animals = ["Cow","Lion","Dog","Cat","Elephant","Deer"];
let displayitem = document.getElementById("display");
for(let i = 0; i<animals.length; i++)
{
    console.log(animals[i]);
    let items = document.createElement("p");
    items.textContent = animals[i];
    items.appendChild(animals);
}






let fruits = [
    ["Apple","Banana","Grapes"],
    ["Onion","Cucumber","Garlic"],
    ["Peanut","Almond","Pea"]
]
for(let i = 0; i<fruits.length; i++){
    for(let j = 0; j<fruits[i].length; j++)
    {
        if(fruits[i][j] == fruits[0][0]){
             console.log(fruits[i][j])
        }
       
    }
}



let numbers = [1,2,3,4,5,15,16,35,36,25,26];
for(let x = 0; x<numbers.length;  x++)
{
    if(numbers[x] == numbers[6])
    {
       break;
    }
    console.log(numbers[x]);
}