var butonText;

var operatorulTrecut = 0;
var operatorulCurent = 0;

var operatie;

window.onload = function()
{

    butonText = document.getElementById("butonText");
    butonText.style.gridArea = "text";

    let butonClear = document.getElementById("butonClear");
    butonClear.addEventListener("click", clear);
    butonClear.style.gridArea = "clear";


    let butonReset = document.getElementById("butonReset");
    butonReset.addEventListener("click", reset);
    butonReset.style.gridArea = "reset";


    let parinte = document.getElementById("Calculator");

    createButtons("0123456789", "number", adauga, "B")
    createButtons("+-/*", "operator", schimbareOperatie, "O")
    createButtons("=", "calcul", calcul, "c");

    function createButtons(sir, clasa, functie, caracterGrid)
    {
        let i;

        for(i = 0; i < sir.length; i++)
        {
            buton = document.createElement("button");

            parinte.appendChild(buton);

            buton.classList.add(clasa);
            buton.textContent = sir[i];
            buton.addEventListener("click", functie);
            buton.style.gridArea = caracterGrid + i;
        }
    }
}

function adauga()
{
    operatorulCurent = operatorulCurent * 10 + Number(this.textContent);
    schimbaTextul();
}

function schimbareOperatie()
{
    operatie = this.textContent;
    operatorulTrecut = operatorulCurent;
    operatorulCurent = 0;
    schimbaTextul();
}


function schimbaTextul()
{
    butonText.textContent = String(operatorulCurent);
}

function clear()
{
    operatorulCurent = 0;
    schimbaTextul();
}

function reset()
{
    termina();
    schimbaTextul();
}

function calcul()
{   
    switch(operatie)
    {
        case "+":
            operatorulCurent = operatorulTrecut + operatorulCurent;
            break;
        case "-":
            operatorulCurent = operatorulTrecut - operatorulCurent;
            break;
        case "/":
            if(operatorulCurent != 0) operatorulCurent = operatorulTrecut / operatorulCurent;
            else operatorulCurent = "Nu este posibila impartirea prin zero!";
            break;
        case "*":
            operatorulCurent = operatorulTrecut * operatorulCurent;
            break;
    }
    
    schimbaTextul()
    termina();
}

function termina()
{
    operatorulCurent = 0;
    operatorulTrecut = 0;
    operatie = "";
}