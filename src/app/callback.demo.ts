var x = 10;
var y = 200;
function callVinith(data1,data2,data3)
{
    console.log(data1);
    console.log(data2);
    console.log(data3);
}

function add2(a,b,cb)
{
    var result = 'Result is : '+(a+b);
    console.log('Line 1');
    console.log('Line 2');
    if( a > 100)
    {
        cb(a,b,result);
    }
    
    console.log('Line 3');
}
add2(x,y,callVinith);


//Named Function

function add(a, b)
{
    console.log(a+b);
}

add(10,20);

var add3 = function(a,b)
{
    console.log(a+b);
}

add3(10,20);

//Arrow Function
var add4 = (a,b) => {console.log(a+b);}
add4(10,20);
add4(1,2);
var add5 = () => {console.log('testing');}
add5();

var add6 = (z) => {console.log(z*z)};
add6(5);

var add7 = z => z*z;
console.log(add7(6));