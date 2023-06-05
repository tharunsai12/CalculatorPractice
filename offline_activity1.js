//Global variables
var prevCalc = 0;
var calc = "";


//The following function displays a number in the textfield when a number is clicked.
//Note that it keeps concatenating numbers which are clicked. 
function showNum(value) {
    document.frmCalc.txtNumber.value += value;
}

//The following function decreases the value of displayed number by 1.
//isNaN method checks whether the value passed to the method is a number or not.     
function decrement() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num--;
            document.frmCalc.txtNumber.value = num;
            calc="decrement";
        }
}
function increment() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num++;
            document.frmCalc.txtNumber.value = num;
            calc="increment";
        }
}
function power() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num= num * num;
            document.frmCalc.txtNumber.value = prevCalc;
            calc="power";
        }
}
function power2() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num= num ** 2;
            document.frmCalc.txtNumber.value = num;
            calc="power";
        }
}
function sqrt() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num = Math.sqrt(num);
            document.frmCalc.txtNumber.value = num;
        }
}
function floor() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num = Math.floor(num);
            document.frmCalc.txtNumber.value = num;
        }
}
function round() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
        num = Math.round(num);
            document.frmCalc.txtNumber.value = num;
        }
}

//The following function is called when "Add" button is clicked. 
//Note that it also changes the values of the global variables.       
function add() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "add";
        }
}

function subtract() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "subtract";
        }
}
function multiplication() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value ="";
            calc="multiplication";
        }
}

function division() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "division";
        }
}

//The following function is called when "Calculate" button is clicked.
//Note that this function is dependent on the value of global variable.        
function calculate() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            if (calc == "add"){
                var total = prevCalc + num;
                document.frmCalc.txtNumber.value = total;
            }
            else if (calc == "subtract"){
                var total = prevCalc - num;
                document.frmCalc.txtNumber.value = total;
            }
            else if (calc == "multiplication"){
                var total = prevCalc * num;
                document.frmCalc.txtNumber.value = total;
            }
            else if (calc == "division"){
                var total = prevCalc / num;
                document.frmCalc.txtNumber.value = total;
            }
}}

function clear() {
	document.frmCalc.txtNumber.value = "";
	prevCalc = 0;
	calc = "";
}