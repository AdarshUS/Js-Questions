
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
  let reversedNumber = 0;
  let num1=parseInt(document.getElementById("n1").value);
  while(num1>0)
   {
     let lastDigit = num1%10;
     reversedNumber = reversedNumber * 10 + lastDigit;
     num1= Math.floor(num1/10);
   }
   document.getElementById("result").innerHTML="The Reverse of the number is " +reversedNumber;
 }

function FindLargestSmallest()
 {
   let num1=parseInt(document.getElementById("n1").value);
   let num2=parseInt(document.getElementById("n2").value);
   let num3=parseInt(document.getElementById("n3").value);

   let largest=(num1>num2)?((num1>num3)?num1:num3):((num2>num3)?num2:num3);
   let smallest=(num1<num2)?((num1<num3)?num1:num3):((num2<num3)?num2:num3);
   document.getElementById("result").innerHTML="The largest is"+largest+"and smallest is"+smallest;
 }
function isPrime()
{
  let prime=true;
  let num1=parseInt(document.getElementById("n1").value);
  for(let i=2;i<=Math.sqrt(num1);i++)
    {  
      if(num1%i==0)
       {        
        prime = false;
        break;
       }
    }
    if(prime)
     {
       document.getElementById("result").innerHTML="The number is prime";
     }
     else
     {
       document.getElementById("result").innerHTML="The number is not prime";
     }    
}
function isEligible()
 {
   let maths=parseInt(document.getElementById("m1").value);
   let chemistry=parseInt(document.getElementById("m2").value);
   let physics=parseInt(document.getElementById("m3").value);
                                                   
   let total =maths+chemistry+physics;
   let mathsPhysicsTotal=maths+physics;
   if(maths>=65 && physics>=55 && chemistry>=50 && (total>=190 || mathsPhysicsTotal>=140))
     {
       document.getElementById("result").style.color="green";
       document.getElementById("result").innerHTML="You are Eligible";      
     }
    else
     {
       document.getElementById("result").style.color="red";
       document.getElementById("result").innerHTML="You are Not Eligible";      
     }
 }

function checkDayinWeek()
 {
    let num1=parseInt(document.getElementById("n1").value);
    switch(num1)
     {
       case 1:
       document.getElementById("result").innerHTML="Sunday";
       break;
        case 2:
       document.getElementById("result").innerHTML="Monday";
       break;
        case 3:
       document.getElementById("result").innerHTML="Tuesday";
       break;
        case 4:
       document.getElementById("result").innerHTML="Wednesday";
       break;
        case 5:
       document.getElementById("result").innerHTML="Thursday";
       break;
        case 6:
       document.getElementById("result").innerHTML="Friday";
       break;
        case 7:
       document.getElementById("result").innerHTML="Saturday";
       break;
     }
 }

function print(number)
 {
    if(number>100)
     {
       return;
     }
    document.write(number+"<br>");
   print(number+1);
 }

function printUsingLoop()
 {
    for(let i=0;i<100;i++)
     {
       document.write(i+1+"<br>")
     }
 }

function FindFactors()
 {    
 
  let num1=parseInt(document.getElementById("n1").value);
  for(let i=2;i<=num1;i++)
   {
     if(num1%i==0)
     {
      document.write(i+"<br>")
     }
   }
 }

function findFactorial()
 {
    let factorial=1;
    let num1=parseInt(document.getElementById("n1").value);
    for(let i=2;i<=num1;i++)
     {
       factorial=factorial*i;
     }
    document.getElementById("result").innerHTML="Factorial is"+factorial;      
 }

function findFirstLastDigit()
 {
    let num1=parseInt(document.getElementById("n1").value);
    let lastDigit= num1%10;
    while(num1>9)
    {
      num1=Math.floor(num1/10);
    }
   let FirstDigit = num1;

   document.getElementById("result").innerHTML="The first digit is "+FirstDigit+"and Last digit is"+lastDigit;      
 }
function printTable()
 {
   let num1=parseInt(document.getElementById("n1").value);
   for(let i=1;i<=10;i++)
    {
      document.write(num1+" * "+i+"="+(num1*i)+"<br>");
    }
 }

function PrintNatural()
 {
   let num1=parseInt(document.getElementById("n1").value);
   let n=1;
   while(n<=num1)
    {
        document.write(n+"<br>")
     n++;
    }
 }

function PrintNaturalrev()
 {
   let num1=parseInt(document.getElementById("n1").value);
   
   while(num1>=1)
    {
        document.write(num1+"<br>")
     num1--;
    }
 }

function PrintNumberDivisibleBy11()
 {
   let num1=parseInt(document.getElementById("n1").value);
   for(let i=55;i<=num1;i++)
     {
       if(i%5==0 && i%11==0)
         {
           document.getElementById("result").innerHTML+=i+"<br>"
         }
     }
 }

function printoddNumbers()
 {
      let num1=parseInt(document.getElementById("n1").value);
       
      for(let i=0;i<=num1;i++)
        {
console.log("inside loop")

          if(i%2!=0)
            {
             console.log("inside condition")
             document.getElementById("result").innerHTML+=i+"<br>"

            }
        }

 }

function findproductOfDigits()
 {
    let num1=parseInt(document.getElementById("n1").value);
    let product=1;
    while(num1>0)
     {
        let lastDigit=num1%10;
        product*=lastDigit;
        num1=Math.floor(num1/10);
     }
    document.getElementById("result").innerHTML=product

 }