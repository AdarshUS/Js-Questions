function Add()
 {
   let num1=Number(document.getElementById("n1").value);
   let num2=Number(document.getElementById("n2").value);
   let result = num1 + num2;
   document.getElementById("result").innerHTML="the sum is"+result;
 }

function printhello()
 {
   document.getElementById("text").innerHTML="hello world";
 }

function Average()
 {
  let num1=Number(document.getElementById("n1").value);
  let num2=Number(document.getElementById("n2").value);
  let num3=Number(document.getElementById("n3").value);
  let sum = num1+num2+num3;

  let average= sum/3;
  
  document.getElementById("sum").innerHTML="the sum is"+sum;
  document.getElementById("average").innerHTML="the average is"+average;
 }

function simpleInterest()
  {
     let p=Number(document.getElementById("n1").value);
     let r=Number(document.getElementById("n2").value);
     let t=Number(document.getElementById("n3").value);
     let si= (p*r*t)/100;
     document.getElementById("result").innerHTML="the simpleInterest is"+si;
  }

 function calculateCI()
 {
    let p=Number(document.getElementById("pr").value);
    let r=Number(document.getElementById("r1").value);  
    let t=Number(document.getElementById("t1").value);

    let a = p*(1+(r/100))**t;
    let ci= a-p; 
   
     document.getElementById("result").innerHTML="the CompundInterest is"+ci;
 }

 function areaOfCircle()
  {
    let radius=Number(document.getElementById("r1").value);
    let area= 3.14*radius*radius;

    document.getElementById("result").innerHTML="the area is"+area;
  }

function add()
 {
   let num1=parseFloat(document.getElementById("n1").value);
   let num2=parseFloat(document.getElementById("n2").value);

   let sum= num1+num2;
    document.getElementById("result").innerHTML="the sum is"+sum;
  }

function sub()
 {
   let num1=parseFloat(document.getElementById("n1").value);
   let num2=parseFloat(document.getElementById("n2").value);

   let sub= num1-num2;
    document.getElementById("result").innerHTML="the subtraction is"+sub;
  }

function mul()
 {
   let num1=parseFloat(document.getElementById("n1").value);
   let num2=parseFloat(document.getElementById("n2").value);

   let mul= num1*num2;
    document.getElementById("result").innerHTML="the product is"+mul;
  }

function div()
 {
   let num1=parseFloat(document.getElementById("n1").value);
   let num2=parseFloat(document.getElementById("n2").value);

   let div= num1/num2;
    document.getElementById("result").innerHTML="the subtraction is"+div;
  }

 function cube()
  {
    let num1=parseInt(document.getElementById("n1").value);
    let cube= num1*num1*num1;
    document.getElementById("result").innerHTML="cube of the number is"+cube;
  }

function EvenOrOdd()
 {
  let num= parseInt(document.getElementById("n1").value);
  if(num%2==0)
   {
      document.getElementById("result").innerHTML="The Number is Even";
   }
   else
   {
      document.getElementById("result").innerHTML="The Number is Odd";
   }
 }

function isLeapYear()
{
  let num= parseInt(document.getElementById("n1").value);
  if(num%400==0 || (num%4==0 && num%100!=0))
    {
      document.getElementById("result").innerHTML="The year is leap year";
    }
   else
   {
    document.getElementById("result").innerHTML="The year is  not a  leap year";
   }
}

function swapnumbers()
 {
   let num1=parseInt(document.getElementById("n1").value);
   let num2=parseInt(document.getElementById("n2").value);
    document.getElementById("result1").innerHTML="Before swapping,a="+num1+"b="+num2;
   let temp;
   temp = num1;
   num1=num2;
   num2=num1;
   document.getElementById("result2").innerHTML="After swapping,a="+num1+"b="+num2;
 }

function findPower()
{
   let num1=parseInt(document.getElementById("n1").value);
   let b=parseInt(document.getElementById("n2").value);
   let answer= num1**b;
   document.getElementById("result").innerHTML="The power of a number is" +answer;
}

function findSumOfDigits()
 {
   let sum=0;
   let num1=parseInt(document.getElementById("n1").value);
   while(num1>0)
    {
       let lastDigit = num1%10;
       sum+=lastDigit;
       num1=Math.floor(num1/10);
    }
  
     document.getElementById("result").innerHTML="The sum of digits of a number is" +sum;
 }

function reverseNumber()
 {
  let num1=parseInt(document.getElementById("n1").value);
  
 }