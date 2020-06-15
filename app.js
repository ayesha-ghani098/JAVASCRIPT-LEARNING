// Chapter 1 //



function greetalert() {
    alert("Hello to My Webpage!")
}

function invalidpass() {
    alert("Error! Please enter a valid password");
}

function jsland() {
    alert("Welcome to Js Land... \nHappy Coding!");
}


function sequence() {
    alert("Welcome to Js Land");
    alert("Happy Coding!");
}






// Chapter 2 //

var username;

var myName;
myName = "Ayesha Ghani";

var message;
message = "Hello World";

function helloworld() {
    alert(message);
}



var name = "Ayesha Ghani";
var age = 20;
var course = "Certified Mobile Application Development"

function biodata() {
    alert(name);
    alert(age);
    alert(course);

}


var z = "PIZZA";

function pizz() {
    alert(z.slice(0, 5) + "\n" + z.slice(0, 4) + "\n" + z.slice(0, 3) + "\n" + z.slice(0, 2) + "\n" + z.slice(0, 1));
}

var email = "ayeshaghanichi@gmail.com"

function mail() {
    alert("My Email Address is " + email);
}


var book = "A Smarter\n Way To Learn Javascript "

function bookalert() {
    alert("I'm trying to learn from the book " + book);
}




var l = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”"

function showalert() {
    alert(l);
}

function inbrowser() {
    document.write(a);
}

// Chapter 3 //

var age = 20;

function agealert() {
    alert("I am " + age + " years old.")
}

function aload() {
    var div = document.getElementById('p');
    div.innerHTML = div.innerHTML + "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
    var div = document.getElementById('q');
    div.innerHTML = div.innerHTML + "Yah! I can write Html content through Javascript.";
}


// Chapter 4 //

var name, age, course;

// var 4name, ?age, name age, NameOfStudent,   ;
var name, _name, $name, _123name, name_123;



function anothrload() {
    var div = document.getElementById('rule');
    div.innerHTML = div.innerHTML + "<h2>Rules for naming JS variables</h2> <br> Variable names can only contain number, $ and _. For example $my_1stVariable <br> Variables must begin with a letter, $ or _. For example $name, _name or name <br> Variable names are case sensitive <br> Variable names should not be JS keywords";
}

// Chapter 5 //

var a = 8;
var b = 9;
var sum = a + b;
var sub = a - b;
var pro = a * b;
var divi = a / b;
var mod = a % b;

function load() {

    var div = document.getElementById('sum');
    div.innerHTML = div.innerHTML + "Sum of " + a + " and " + b + " is " + sum;
    var div = document.getElementById('subtract');
    div.innerHTML = div.innerHTML + "Difference of " + a + " and " + b + " is " + sub;
    var div = document.getElementById('product');
    div.innerHTML = div.innerHTML + "Product of " + a + " and " + b + " is " + pro;
    var div = document.getElementById('division');
    div.innerHTML = div.innerHTML + "Division of " + a + " and " + b + " is " + divi;
    var div = document.getElementById('modulus');
    div.innerHTML = div.innerHTML + "Modulus of " + a + " and " + b + " is " + mod;
    var s;

    var div = document.getElementById('a');
    div.innerHTML = div.innerHTML + "Value after variable declaration is:" + s;
    s = 5;
    var div = document.getElementById('a');
    div.innerHTML = div.innerHTML + "<br>Initial Value:" + s;
    s++;
    var div = document.getElementById('a');
    div.innerHTML = div.innerHTML + "<br>Value After Increment:" + s;
    s = s + 7;
    var div = document.getElementById('a');
    div.innerHTML = div.innerHTML + "<br>Value After Addition:" + s;
    s--;
    var div = document.getElementById('a');
    div.innerHTML = div.innerHTML + "<br>Value After Decrement:" + s;
    s = s / 3;
    var div = document.getElementById('a');
    div.innerHTML = div.innerHTML + "<br>The remainder is:" + s;
    var cost = 400;
    cost = cost * 5;
    var div = document.getElementById('b');
    div.innerHTML = div.innerHTML + "Total cost to buy 5 Tickets to a Movie is: " + cost + " Rs";

    var d = 1;
    const i = 7;
    var m;
    while (d <= 10) {
        m = d * i;
        var div = document.getElementById('c');
        div.innerHTML = div.innerHTML + i + " x " + d + " = " + m + "<br>";
        d++;
    }


    var C = 78;
    var F = 172.4;
    var ans1 = (78 * 9 / 5) + 32;
    var ans2 = (F - 32) * 5 / 9;
    var div = document.getElementById('d');
    div.innerHTML = div.innerHTML + C + " C is " + ans1 + " F" + "<br>";
    var div = document.getElementById('d');
    div.innerHTML = div.innerHTML + F + " F is " + ans2 + " C";


    var poi1 = 600;
    var poi2 = 700;
    var g = poi1 * 4;
    var h = poi2 * 6;
    var sum = g + h + 100;
    var div = document.getElementById('e');
    div.innerHTML = div.innerHTML + "<h1> Shopping Cart </h1> <br> Price of Item 1 is " + poi1 + "<br> Quantity of Item 1 is 4 <br> Price of Item 2 is " + poi2 + "<br> Quantity of Item 2 is 6 <br> Shipping Charges is 100 <br> <br> Total cost of your order is " + sum + " Rs ";


    var marks_obt = 890;
    var total_marks = 1100;
    var per = marks_obt / total_marks * 100;
    var div = document.getElementById('f');
    div.innerHTML = div.innerHTML + "<h1> Marks Sheet </h1> <br> Total Marks:  " + total_marks + "<br> Marks Obtained: " + marks_obt + " <br> Percentage: " + per;

    var dollar = 10;
    var riyal = 25;
    var rs = (dollar * 104.80) + (riyal * 28);
    var div = document.getElementById('g');
    div.innerHTML = div.innerHTML + "<h1> Currency In PKR </h1> <br> Total Currency In PKR: " + rs;

    var num = 4;
    num = ((num + 5) * 10) / 2;
    var div = document.getElementById('h');
    div.innerHTML = div.innerHTML + "var num = 4; <br>  num = ((num + 5) * 10) / 2;  <br> Answer:" + num;



    var currentyear = 2020;
    var birthyear = 2000;
    var age = currentyear - birthyear;
    var div = document.getElementById('i');
    div.innerHTML = div.innerHTML + "Current Year: " + currentyear + "<br>  Birth Year:  " + birthyear + "<br> Your age is: " + age;

    const pi = 3.142;
    var radius = 8.8;
    var area = pi * (radius * radius);
    var circumference = 2 * pi * radius;
    var div = document.getElementById('j');
    div.innerHTML = div.innerHTML + "<h1> The Geometrizer </h1> <br> Radius of a circle: " + radius + "<br>  The circumference is:  " + circumference + "<br> The area is: " + area;

    var fs = "Chillz";
    var ca = 20;
    var ma = 65;
    var pd = 2;
    var sc = (ma - ca) * pd;
    var div = document.getElementById('k');
    div.innerHTML = div.innerHTML + "<h1> The Lifetime Supply Calculator </h1> <br> Favourite Snack : " + fs + "<br>  Current age:  " + ca + "<br> Estimated Maximum Age: " + ma + "<br> Amount of snacks Per day: " + pd + "<br> You will need " + sc + " Chillz to last you until the ripe old age of 65 ";

}


// Chapter 6---9 //



function bload() {
    var t = 10;
    var div = document.getElementById('ab');
    div.innerHTML = div.innerHTML + "Radius: <br> The value of t is: " + t + "<br>..................................<br> ";
    ++t;
    var div = document.getElementById('ab');
    div.innerHTML = div.innerHTML + " <br> <br> The value of ++t is: " + t + "<br> Now the value of t is: " + t;
    t++;
    var div = document.getElementById('ab');
    div.innerHTML = div.innerHTML + " <br><br> The value of t++ is: " + t + "<br> Now the value of t is: " + t;
    --t;
    var div = document.getElementById('ab');
    div.innerHTML = div.innerHTML + " <br><br> The value of --t is: " + t + "<br> Now the value of t is: " + t;
    t--;
    var div = document.getElementById('ab');
    div.innerHTML = div.innerHTML + " <br><br> The value of t-- is: " + t + "<br> Now the value of t is: " + t;

    var numb1 = 2;
    var numb2 = 1;
    var div = document.getElementById('cd');
    div.innerHTML = div.innerHTML + "a is: " + numb1 + "<br> b is: " + numb2;
    var result = --numb1 - --numb2 + ++numb2 + numb2--;
    var div = document.getElementById('cd');
    div.innerHTML = div.innerHTML + "<br> Result is: " + result;






}

function na() {
    var nam = document.getElementById('name').value;
    var div = document.getElementById('ef');
    div.innerHTML = div.innerHTML + "Hello! " + nam;
}

function table() {

    var nmb = document.getElementById('nmb').value;
    if (nmb >= 0) {
        var d = 1;
        const i = nmb;
        var m;
        while (d <= 10) {
            m = d * i;
            var div = document.getElementById('gh');
            div.innerHTML = div.innerHTML + i + " x " + d + " = " + m + "<br>";
            d++;
        }
    } else {

        var d = 1;
        const i = 5;
        var m;
        while (d <= 10) {
            m = d * i;
            var div = document.getElementById('gh');
            div.innerHTML = div.innerHTML + i + " x " + d + " = " + m + "<br>";
            d++;
        }
    }
}


function ms() {
    var subject_1 = document.getElementById('sub1').value;
    var s1 = parseInt(subject_1);
    var div = document.getElementById('sub11');
    div.innerHTML = div.innerHTML + s1;
    var div = document.getElementById('s1p');
    div.innerHTML = div.innerHTML + s1 + " %";
    var subject_2 = document.getElementById('sub2').value;
    var s2 = parseInt(subject_2);
    var div = document.getElementById('sub22');
    div.innerHTML = div.innerHTML + s2;
    var div = document.getElementById('s2p');
    div.innerHTML = div.innerHTML + s2 + " %";

    var subject_3 = document.getElementById('sub3').value;
    var s3 = parseInt(subject_3);
    var div = document.getElementById('sub33');
    div.innerHTML = div.innerHTML + s3;
    var div = document.getElementById('s3p');
    div.innerHTML = div.innerHTML + s3 + " %";
    var total = s1 + s2 + s3;
    var div = document.getElementById('totl');
    div.innerHTML = div.innerHTML + total;
    var tp = total / 300 * 100;
    var div = document.getElementById('tp');
    div.innerHTML = div.innerHTML + tp + " %";
}
// Chapter 9--11 //
function citygreet() {
    var city = document.getElementById('city').value;

    if (city == "Karachi" || city == "karachi") {
        var div = document.getElementById('cg');
        div.innerHTML = div.innerHTML + "Welcome to city of lights!<br>";
    } else {
        var div = document.getElementById('cg');
        div.innerHTML = div.innerHTML + "Sorry No Greetings!";
    }
}

function gendercheck() {
    var gender = document.getElementById('gender').value;

    if (gender == "male") {
        var div = document.getElementById('gc');
        div.innerHTML = div.innerHTML + "Good Morning Sir!<br>";
    } else if (gender == "female") {
        var div = document.getElementById('gc');
        div.innerHTML = div.innerHTML + "Good Morning Mam!<br>";
    } else {
        var div = document.getElementById('gc');
        div.innerHTML = div.innerHTML + "Good Morning Other Gender We respect your gender too!<br>";
    }
}

function signal() {
    var color = document.getElementById('color').value;

    if (color == "red") {
        var div = document.getElementById('red');
        div.innerHTML = div.innerHTML + "Must Stop<br>";
    } else if (color == "yellow") {
        var div = document.getElementById('yellow');
        div.innerHTML = div.innerHTML + "Ready to move<br>";
    } else {
        var div = document.getElementById('green');
        div.innerHTML = div.innerHTML + "Move now";
    }
}

function fuel() {
    var fue = document.getElementById('fuel').value;
    var fuel = parseFloat(fue);
    if (fuel < 0.25) {
        var div = document.getElementById('fuelrefill');
        div.innerHTML = div.innerHTML + "Please refill the fuel in your car<br>";
    } else {
        var div = document.getElementById('fuelrefill');
        div.innerHTML = div.innerHTML + "Have a safe journey<br>";
    }
}


function marksh() {
    var subject1 = document.getElementById('subject1').value;
    var ss1 = parseInt(subject1);
    var subject2 = document.getElementById('subject2').value;
    var ss2 = parseInt(subject2);
    var subject3 = document.getElementById('subject3').value;
    var ss3 = parseInt(subject3);
    var ttotal = ss1 + ss2 + ss3;
    var tpp = ttotal / 300 * 100;
    if (tpp >= 80) {
        var div = document.getElementById('marks');
        div.innerHTML = div.innerHTML + "<h1>Marks Sheet</h1><br> Total Marks: 300;<br>Marks Obtained: " + ttotal + "<br> Percentage:" + tpp + "<br> Grade: A-One<br> Remarks: Excellent";
    } else if (tpp >= 70) {
        var div = document.getElementById('marks');
        div.innerHTML = div.innerHTML + "<h1>Marks Sheet</h1><br> Total Marks: 300;<br>Marks Obtained: " + ttotal + "<br> Percentage:" + tpp + "<br> Grade: A <br> Remarks: Good";
    } else if (tpp >= 60) {
        var div = document.getElementById('marks');
        div.innerHTML = div.innerHTML + "<h1>Marks Sheet</h1><br> Total Marks: 300;<br>Marks Obtained: " + ttotal + "<br> Percentage:" + tpp + "<br> Grade: B <br> Remarks: You need to improve";
    } else {
        var div = document.getElementById('marks');
        div.innerHTML = div.innerHTML + "<h1>Marks Sheet</h1><br> Total Marks: 300;<br>Marks Obtained: " + ttotal + "<br> Percentage:" + tpp + "<br> Grade: Fail<br> Remarks: Sorry";
    }

}


function ans_a() {
    var avar = 4;
    if (++avar === 5) {
        alert("given condition for variable a is true");
    }
}

function ans_b() {
    var varb = 82;
    if (varb++ === 83) {
        alert("given condition for variable b is true");
    }

}

function ans_c() {
    var varc = 12;
    if (varc++ === 13) {
        alert("condition 1 is true");
    }
    if (varc === 13) {
        alert("condition 2 is true");
    }
    if (++varc < 14) {
        alert("condition 3 is true");
    }
    if (varc === 14) {
        alert("condition 4 is true");
    }

}

function ans_d() {
    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost) {
        alert("The cost equals");
    }

}

function ans_e() {
    if (true) {
        alert("True");
    }

}

function ans_f() {
    if ("car" < "cat") {
        alert("car is smaller than cat");
    }

}


function guessgame() {
    var secretnmb = 8;
    var guessnmb = document.getElementById('guessnmb').value;
    var guessnm = parseInt(guessnmb);
    if (guessnm == secretnmb) {
        var div = document.getElementById('guesss');
        div.innerHTML = div.innerHTML + "Bingo! Correct Answer<br>";
    } else if (guessnmb - secretnmb == 1 || guessnmb - secretnmb == -1) {
        var div = document.getElementById('guesss');
        div.innerHTML = div.innerHTML + "Close Enough to Correct Answer<br>";
    } else {
        var div = document.getElementById('guesss');
        div.innerHTML = div.innerHTML + "Try Again<br>";
    }
}

function divisibleby3() {
    var nn = document.getElementById('nn').value;
    var nnn = parseInt(nn);
    if (nnn % 3 == 0) {
        var div = document.getElementById('nnbb');
        div.innerHTML = div.innerHTML + "Number is divisible by 3"
    } else {
        var div = document.getElementById('nnbb');
        div.innerHTML = div.innerHTML + "Number is not divisible by 3"
    }
}

function evenodd() {
    var eeoo = document.getElementById('eeoo').value;
    var eo = parseInt(eeoo);
    if (eo % 2 == 0) {
        var div = document.getElementById('eoo');
        div.innerHTML = div.innerHTML + "Number is even"
    } else {
        var div = document.getElementById('eoo');
        div.innerHTML = div.innerHTML + "Number is odd"
    }
}

function temp() {
    var tmp = document.getElementById('tmp').value;
    var temper = parseInt(tmp);
    if (temper > 40) {
        var div = document.getElementById('temperature');
        div.innerHTML = div.innerHTML + "It is too hot outside"
    } else if (temper > 30) {
        var div = document.getElementById('temperature');
        div.innerHTML = div.innerHTML + "The weather today is Normal"
    } else if (temper > 20) {
        var div = document.getElementById('temperature');
        div.innerHTML = div.innerHTML + "Today's weather is Cool"
    } else {
        var div = document.getElementById('temperature');
        div.innerHTML = div.innerHTML + "OMG! Today's weather is so Cool."
    }
}

function calculator() {
    var numbb1 = document.getElementById('calnmb1').value;
    var numb1 = parseInt(numbb1);
    var numbb2 = document.getElementById('calnmb2').value;
    var numb2 = parseInt(numbb2);
    var operator = document.getElementById('operator').value;
    if (operator == "+") {

        var summ = numb1 + numb2;
        var div = document.getElementById('cal');
        div.innerHTML = div.innerHTML + "Sum of " + numb1 + " and " + numb2 + " is " + summ;
    } else if (operator == "-") {

        var suub = numb1 - numb2;
        var div = document.getElementById('cal');
        div.innerHTML = div.innerHTML + "Difference of " + numb1 + " and " + numb2 + " is " + suub;
    } else if (operator == "*") {

        var mull = numb1 * numb2;
        var div = document.getElementById('cal');
        div.innerHTML = div.innerHTML + "Product of " + numb1 + " and " + numb2 + " is " + mull;
    } else if (operator == "/") {

        var diviii = numb1 / numb2;
        var div = document.getElementById('cal');
        div.innerHTML = div.innerHTML + "Division of " + numb1 + " and " + numb2 + " is " + diviii;
    } else {

        var muood = numb1 % numb2;
        var div = document.getElementById('cal');
        div.innerHTML = div.innerHTML + "Mod of " + numb1 + " and " + numb2 + " is " + muood;
    }


}




// Chapter 12--13 //


function checkalphabet() {
    var ccheckalp = document.getElementById('checkalph').value;
    ccheckalph = ccheckalp.charCodeAt(0);


    if (ccheckalph >= 65 && ccheckalph <= 90) {
        var div = document.getElementById('cha');
        div.innerHTML = div.innerHTML + "Character is a capital letter<br>";
    } else if (ccheckalph >= 97 && ccheckalph <= 122) {
        var div = document.getElementById('cha');
        div.innerHTML = div.innerHTML + "Character is a small letter<br>";
    } else if (ccheckalph >= 48 && ccheckalph <= 57) {
        var div = document.getElementById('cha');
        div.innerHTML = div.innerHTML + "Character is a digit<br>";
    } else if ((ccheckalph > 0 && ccheckalph <= 47) || (ccheckalph >= 58 && ccheckalph <= 64) ||
        (ccheckalph >= 91 && ccheckalph <= 96) || (ccheckalph >= 123 && ccheckalph <= 127)) {
        var div = document.getElementById('cha');
        div.innerHTML = div.innerHTML + "Character is a special symbol<br>";
    }
}

function larger() {
    var ln1 = document.getElementById('ln1').value;
    var lrn1 = parseInt(ln1);
    var ln2 = document.getElementById('ln2').value;
    var lrn2 = parseInt(ln2);
    if (lrn1 > lrn2 || lrn2 < lrn1) {
        var div = document.getElementById('large');
        div.innerHTML = div.innerHTML + lrn1 + " is larger<br>";
    } else if (lrn2 > lrn1 || lrn1 < lrn2) {
        var div = document.getElementById('large');
        div.innerHTML = div.innerHTML + lrn2 + " is larger<br>";
    } else if (lrn1 == lrn2) {
        var div = document.getElementById('large');
        div.innerHTML = div.innerHTML + "Equal<br>";
    }
}

function posineg() {
    var pn1 = document.getElementById('pnn').value;
    var pn = parseInt(pn1);

    if (pn > 0) {
        var div = document.getElementById('positive');
        div.innerHTML = div.innerHTML + "Number entered is positive<br>";
    } else if (pn < 0) {
        var div = document.getElementById('positive');
        div.innerHTML = div.innerHTML + "Number entered is negative<br>";
    } else {
        var div = document.getElementById('positive');
        div.innerHTML = div.innerHTML + "Number entered is zero<br>";
    }
}


function checkvowel() {
    var vvowel = document.getElementById('vo').value;
    if (vvowel == "a" || vvowel == "e" || vvowel == "i" || vvowel == "o" || vvowel == "u" || vvowel == "A" || vvowel == "E" || vvowel == "I" || vvowel == "O" || vvowel == "U") {
        var div = document.getElementById('vow');
        div.innerHTML = div.innerHTML + "Entered alphabet is vowel <br>";
    } else {
        var div = document.getElementById('vow');
        div.innerHTML = div.innerHTML + "Entered alphabet is not vowel <br>";
    }
}


function checkpassword() {
    var apass = "ayesha123";
    var password = document.getElementById('pass').value;
    if (password === apass) {
        var div = document.getElementById('passs');
        div.innerHTML = div.innerHTML + "Correct ! The password you entered matches the original one <br>";
    } else {
        var div = document.getElementById('passs');
        div.innerHTML = div.innerHTML + "Incorrect password <br>";
    }
}

function state() {
    var greeting;
    var hour = 13;
    if (hour < 18) {
        greeting = "Good day";
        var div = document.getElementById('statement');
        div.innerHTML = div.innerHTML + greeting;
    } else {
        greeting = "Good evening";
        var div = document.getElementById('statement');
        div.innerHTML = div.innerHTML + greeting;
    }
}


function time() {
    var nt = document.getElementById('ttime').value;
    if (nt >= 0000 && nt < 1200) {
        var div = document.getElementById('tttime');
        div.innerHTML = div.innerHTML + "Good Morning!<br>";
    } else if (nt >= 1200 && nt < 1700) {
        var div = document.getElementById('tttime');
        div.innerHTML = div.innerHTML + "Good Aftternoon!<br>";
    } else if (nt >= 1700 && nt <= 2100) {
        var div = document.getElementById('tttime');
        div.innerHTML = div.innerHTML + "Good Evening!<br>";
    } else if (nt >= 2100 && nt <= 2359) {
        var div = document.getElementById('tttime');
        div.innerHTML = div.innerHTML + "Good Night!<br>";
    }

}



// Chapter 14--16 //


var student_names = [];


let students_name = {};

var namess = ["Ayesha", "Faha", "Arshia"];

var numbers = [9, 9, 7, 8];


var boolarray = [true, false];

var mixedarray = ["ayesha", 20, true];

function q() {
    var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
    var d = 1;
    var i = 0;
    var div = document.getElementById('qualifications');
    div.innerHTML = div.innerHTML + "<h1>  Qualifications</h1><br> <br>";
    while (i < 8) {
        var div = document.getElementById('qualifications');
        div.innerHTML = div.innerHTML + d + ")" + qualifications[i] + "<br><br>";
        i++;
        d++;
    }
}


function score() {
    var names = ["Ayesha", "Faha", "Maha"];
    var i = 0;
    var scores = [500, 499, 498];
    while (i < scores.length) {

        var per = scores[i] / 500 * 100;
        var div = document.getElementById('sco');
        div.innerHTML = div.innerHTML + "Score of " + names[i] + " is " + scores[i] + ". Percentage is " + per + " %<br>";
        i++;
    }


}

function add() {
    var color_names = [];
    var color = document.getElementById('ccolor').value;
    color_names.push(color);
    var div = document.getElementById('ccc');
    div.innerHTML = div.innerHTML + color_names;

}

function addatend() {
    var color_names = ["red", "green"];
    var color = document.getElementById('olor').value;
    color_names.push(color);
    var div = document.getElementById('ddd');
    div.innerHTML = div.innerHTML + color_names;

}

function addatbegin() {
    var color_names = ["red", "green"];
    var color = document.getElementById('lor').value;
    color_names.unshift(color);
    var div = document.getElementById('ee');
    div.innerHTML = div.innerHTML + color_names;

}

function deltatbegin() {
    var color_names = ["red", "green"];
    color_names.shift(0);
    var div = document.getElementById('db');
    div.innerHTML = div.innerHTML + color_names;

}

function deltatlast() {
    var color_names = ["red", "green", "purple", "yellow"];
    color_names.pop();
    var div = document.getElementById('dl');
    div.innerHTML = div.innerHTML + color_names;

}



function arraysort() {
    var arrays = [500, 900, 700, 678, 678];
    var div = document.getElementById('sort');
    div.innerHTML = div.innerHTML + arrays.sort();


}


function cities() {
    var cities = ["Karachi", "Islamabad", "Lahore", "Rawalpindi"];
    var selectedcities = [cities[0], cities[2]];
    var div = document.getElementById('citi');
    div.innerHTML = div.innerHTML + selectedcities;
}

function ajoin() {
    var cat = ["This", "is", "a", "Cat"];
    var div = document.getElementById('join');
    div.innerHTML = div.innerHTML + cat.join(" ");
}


function gadgets() {
    var gg = ["keyboard", "mouse", "printer", "monitor"];

    var i = 0;
    while (i < gg.length) {
        var div = document.getElementById('ggg');
        div.innerHTML = div.innerHTML + "Out: <br> ";
        var div = document.getElementById('ggg');
        div.innerHTML = div.innerHTML + gg[i] + "<br>";
        i++;
    }
}

function gadgets2() {
    var gg = ["keyboard", "mouse", "printer", "monitor"];
    var i = gg.length - 1;
    while (i >= 0) {
        var div = document.getElementById('ggg2');
        div.innerHTML = div.innerHTML + "Out: <br> ";
        var div = document.getElementById('ggg2');
        div.innerHTML = div.innerHTML + gg[i] + "<br>";
        i--;
    }
}



var select = document.getElementById("arr");
var elmts = ["Apple", "Motrolla", "Nokia", "Samsung", "Sony"];


// Main function 
function GFG_Fun() {
    for (var i = 0; i < elmts.length; i++) {
        var optn = elmts[i];
        var el = document.createElement("option");
        el.textContent = optn;
        el.value = optn;
        select.appendChild(el);
    }
    down.innerHTML = "Elements Added";
}



function biyr() {
    var bt = 2000;
    var div = document.getElementById('birthyr');
    div.innerHTML = div.innerHTML + "My birth year is " + bt + "<br> Data type of my declared variable is number";
}


function order() {
    var vn = "Ayesha";
    var pt = "Sweatshirts";
    var qu = 6;
    var div = document.getElementById('od');
    div.innerHTML = div.innerHTML + vn + " ordered " + qu + " " + pt + " on outfitters";
}




// Chapter 17--20 //


let multiarr = [
    [2, 4]
];

function multiarray() {
    let mltarray = [
        [0, 1, 2, 3],
        [1, 0, 1, 2],
        [2, 1, 0, 1]
    ];
    var div = document.getElementById('multi');
    div.innerHTML = div.innerHTML + mltarray[0].join(" ") + "<br>";
    var div = document.getElementById('multi');
    div.innerHTML = div.innerHTML + mltarray[1].join(" ") + "<br>";
    var div = document.getElementById('multi');
    div.innerHTML = div.innerHTML + mltarray[2].join(" ") + "<br>";
}



function counting() {
    var i = 1;
    while (i <= 10) {
        var div = document.getElementById('count');
        div.innerHTML = div.innerHTML + i + "<br>";
        i++;
    }
}


function tabel() {
    var sm1 = document.getElementById('snm1').value;
    var snm1 = parseInt(sm1)
    var sm2 = document.getElementById('snm2').value;
    var snm2 = parseInt(sm2)
    var d = 1;
    const i = snm1;
    var m;
    while (d <= snm2) {
        m = d * i;
        var div = document.getElementById('ttbl');
        div.innerHTML = div.innerHTML + i + " x " + d + " = " + m + "<br>";
        d++;
    }

}

function arrp() {
    var fruits = ["apple ", "mango ", "banana ", "orange ", "peach "]
    for (var o = 0; o < fruits.length; o++) {
        var div = document.getElementById('arp');
        div.innerHTML = div.innerHTML + "Element at index " + o + " is " + fruits[o] + "<br>";

    }
}


function counting2() {
    var i = 1;
    while (i <= 15) {
        var div = document.getElementById('id');
        div.innerHTML = div.innerHTML + i + " ";
        i++;
    }
    var div = document.getElementById('id');
    div.innerHTML = div.innerHTML + "<br> ";
}

function reverse() {
    var i = 10;
    while (i >= 1) {
        var div = document.getElementById('id');
        div.innerHTML = div.innerHTML + i + " ";
        i--;
    }
    var div = document.getElementById('id');
    div.innerHTML = div.innerHTML + "<br> ";
}

function evenn() {
    var i = 0;
    while (i <= 20) {
        if (i % 2 == 0) {
            var div = document.getElementById('id');
            div.innerHTML = div.innerHTML + i + " ";

        }
        i++;
    }
    var div = document.getElementById('id');
    div.innerHTML = div.innerHTML + "<br> ";
}

function oddd() {
    var i = 0;
    while (i <= 20) {
        if (i % 2 != 0) {
            var div = document.getElementById('id');
            div.innerHTML = div.innerHTML + i + " ";

        }
        i++;
    }
    var div = document.getElementById('id');
    div.innerHTML = div.innerHTML + "<br> ";
}

function series() {
    var i = 2;
    while (i <= 20) {
        var div = document.getElementById('id');
        div.innerHTML = div.innerHTML + i + "k ";
        i = i + 2;
    }
    var div = document.getElementById('id');
    div.innerHTML = div.innerHTML + "<br> ";
}


function multipleof5() {

    var mm = 5;
    while (mm <= 100) {

        var div = document.getElementById('mo5');
        div.innerHTML = div.innerHTML + mm + " ";
        mm = mm + 5;

    }
    var div = document.getElementById('mo5');
    div.innerHTML = div.innerHTML + "<br> ";
}

function largestnumb() {
    var arrays = [50, 90, 70, 68, 67, 24, 78, 69];
    var div = document.getElementById('lmmm');
    div.innerHTML = div.innerHTML + "Array is " + arrays + "<br>";
    var array = arrays.sort();

    var div = document.getElementById('lmmm');
    div.innerHTML = div.innerHTML + "Largest Number is " + array[array.length - 1];
}


function smallestnumb() {
    var arrays = [50, 90, 70, 68, 67, 24, 78, 69];
    var div = document.getElementById('smmm');
    div.innerHTML = div.innerHTML + "Array is " + arrays + "<br>";
    var array = arrays.sort();

    var div = document.getElementById('smmm');
    div.innerHTML = div.innerHTML + "Smallest Number is " + array[0];
}


function cookies() {
    var A = ["cake", "apple pie", "cookie", "chips", "patties"];
    var inp = document.getElementById('cookiess').value;
    i = 0;
    while (i < A.length - 1) {
        if (inp == A[i]) {
            var div = document.getElementById('ci');
            div.innerHTML = div.innerHTML + A[i] + " is available at index " + i + " in our bakery";
        }
        i++;

    }

}