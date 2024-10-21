
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
function checkPalindrome()
  {
   let text=document.getElementById("n1").value;  //text = "malayalam"
   let rev=""; 
   for(let i=text.length-1;i>=0;i--)
     {
       rev+=text.charAt(i);
     }
   if(rev==text)
    {
      document.getElementById("result").innerHTML="The string is palindrome"
    }
   else
   {
      document.getElementById("result").innerHTML="The string is not palindrome"
   }
 }

function isPerfectNumber()
  {
   let num1=parseInt(document.getElementById("n1").value);
   let sum=1;
   for(let i=2;i<num1;i++)
     {
       if(num1%i==0)
         {
           sum+=i;
         }
     }
if(sum==num1)
{
  document.getElementById("result").innerHTML="The Number is perfect Number"
}
 else
{
   document.getElementById("result").innerHTML="The Number is not perfect Number"
}
  }

function checkSign()
 {
   let num1=parseInt(document.getElementById("n1").value);
   if(num1>0)
    {
      document.getElementById("result").innerHTML="The Number is a Positive Number";
    }
   else
    {
     document.getElementById("result").innerHTML="The Number is a Negative  Number";
    }
 }

function checkNotes()
 {
  const notes = [500,200,100,50,20,10,5];
  
  
  let num1=parseInt(document.getElementById("n1").value); //5555
  for(let i=0;i<notes.length;i++)
   {  
     if(num1/notes[i]>0)
       {
            document.getElementById("result").innerHTML+=notes[i]+"="+Math.floor(num1/notes[i])+"notes <br>";
            num1=num1%notes[i];
       }
   }
 }

function printEven()
  {
     let num1=parseInt(document.getElementById("n1").value);
     for(i=2;i<=num1;i++)
      {
        if(i%2==0)
         {
           document.getElementById("result").innerHTML+=i+"<br>"
         }
      }
  }
  function findSumAndAverage()
   {
     let num1=parseInt(document.getElementById("n1").value);
     let sum=(num1*(num1+1))/2;
     let avg = sum/num1;
    document.getElementById("result").innerHTML="Sum is "+sum+"and Average is"+avg;
   }

 function SumOfEven()
  {
     let num1=parseInt(document.getElementById("n1").value);
     let sum=0; 
     for(i=2;i<=num1;i++)
      {
         if(i%2==0)
         {
          sum+=i;
         }
      }
     document.getElementById("result").innerHTML="Sum of even number is "+sum;
  }

function SumOfOddAndEven()
 {
   let num1=parseInt(document.getElementById("n1").value);
   let sumOfOdd=0;
   let sumOfEven=0;
    for(i=1;i<=num1;i++)
      {
         if(i%2==0)
         {
          sumOfEven+=i;
         }
         else
          {
           sumOfOdd+=i;
          }
      }
    document.getElementById("result").innerHTML="Sum of Odd Numbers is "+sumOfOdd+"and Sum of even Numbers is "+sumOfEven;
}
 function findBillAmount()
  {
    let units=parseInt(document.getElementById("n1").value);
    let amount=0;
    if(units<=50)
     {
       amount+=2.60;
     }
     if(units<=100)
     {
       amount+=2.60;
       amount+=3.25;
     }
     if(units<=200)
      {
       amount+=2.60;
       amount+=3.25;
       amount+=5.65;
      }
     if(units>200)
      {
       amount+=2.60;
       amount+=3.25;
       amount+=5.65;
       amount+=7.25;
      }
      if(units>700)
       {
         amount+=2.60;
         amount+=3.25;
         amount+=5.65;
         amount+=7.25;
         amount+=(0.25/100)*amount;
       }
    document.getElementById("result").innerHTML="The Amount of Electricity Bill is "+amount;
  }

function calculateSalary()
 {
     let basic_salary=parseInt(document.getElementById("n1").value);
     let hra;
     let da;
     if(basic_salary<=10000)
       {
        hra= (8/100)*basic_salary;
        da = (10/100)*basic_salary;
       }
     else if(basic_salary<=20000)
      {
        hra= (16/100)*basic_salary;
        da = (20/100)*basic_salary;
      }
     else if(basic_salary>20000)
      {
         hra= (24/100)*basic_salary;
        da = (30/100)*basic_salary;
      }
   let grossSalary=basic_salary+hra+da;
     document.getElementById("result").innerHTML="The Gross salary is"+grossSalary;
 }

function findSurfaceAreaVolume()
{
  let length=parseInt(document.getElementById("n1").value);
  let radius=parseInt(document.getElementById("r1").value);
  let surfacearea=(Math.PI*radius*length)+(Math.PI*radius*radius);
  let volume = (1/3)*Math.PI*radius*radius*length;

 document.getElementById("result").innerHTML="The surface area is "+surfacearea+"and volume is "+volume;
}

function findSurfaceAreaVolumeCube()
{
  let length = parseInt(document.getElementById("n1").value);
  let surfacearea = 6*length*length;
  let volume = length *length*length;
  let lsa = 4*length*length;

 document.getElementById("result").innerHTML="The surfacearea is:"+surfacearea+"<br> The lateral surface area is "+lsa+"<br> volume is"+volume
}

function findSurfaceAreaVolumeCuboid()
 {
   let length=parseInt(document.getElementById("n1").value);
   let breadth=parseInt(document.getElementById("b1").value);
   let height=parseInt(document.getElementById("h1").value);

   let tsa= (2*length*breadth)+(2*length*height)+(2*breadth*height);
   let volume = length*breadth*height;
   let lsa = 2*height*(length+breadth);

 document.getElementById("result").innerHTML="The surfacearea is:"+tsa+"<br> The lateral surface area is "+lsa+"<br> volume is"+volume
 }

function findSurfaceAreaVolumeCylinder()
 {
   let height=parseInt(document.getElementById("h1").value);
   let radius=parseInt(document.getElementById("r1").value);

   let tsa = (2*Math.PI*radius*radius)+(2*Math.PI*radius*height);
   let volume = Math.PI*radius*radius*height;
   let lsa= 2*Math.PI*radius*height;  
  
   document.getElementById("result").innerHTML="The surfacearea is:"+tsa+"<br> The lateral surface area is "+lsa+"<br> volume is"+volume
 }

function findSurfaceAreaVolumeSphere()
 {
  let r=parseInt(document.getElementById("r1").value);
   let tsa = 4*3.14*r*r;
   let volume = 4*3.14*r*r*r;

  document.getElementById("result").innerHTML="The surfacearea is:"+tsa+"<br>volume is"+volume
 }

function countDigits()
 {
  let num=parseInt(document.getElementById("n1").value);
  let length = num.toString().length

  document.getElementById("result").innerHTML="Number of digits is"+length;
 }

function printFibinocci()
 {
  let num=parseInt(document.getElementById("n1").value);
  first=0;
  second=1;
  
  if(num==1)
   {
     document.getElementById("result").innerHTML=first;
     return;
   }
      document.getElementById("result").innerHTML=first+" "+second;
     for(i=3;i<=num;i++)
      {
        let sum = first+second;
         document.getElementById("result").innerHTML+=" "+sum
        first=second;
         second= sum;
      }   
 }

function isPalindromeNumber()
 {
    let num=parseInt(document.getElementById("n1").value);
    let reverseNumber=0;
    let temp=num;
    while(num>0)
     {
      let lastDigit= num%10;
      reverseNumber=reverseNumber*10+lastDigit;
      num=Math.floor(num/10);
     }
    if(reverseNumber==temp)
     {
       document.getElementById("result").innerHTML="The Number is Palindrome"
     }
    else
    {
      document.getElementById("result").innerHTML="The Number is not Palindrome"
    }
 }

function concatenateStrings()
 {
   let string1=document.getElementById("s1").value;
   let string2=document.getElementById("s2").value;
   result = string1 + string2;

   document.getElementById("result").innerHTML="The concatenated string is "+result;
 }

 function printAscii()
  {
    var character=document.getElementById("s1").value;
    let ascii= character.charCodeAt(0);

   document.getElementById("result").innerHTML="The ascii value is"+ascii;
  }

 function concatenateStringsfn()
  {
    let string1=document.getElementById("s1").value;
    let string2=document.getElementById("s2").value;
    result = string1.concat(string2);

   document.getElementById("result").innerHTML="The concatenated string is "+result;
  }

 function printFirstChar()
  {
    let string = document.getElementById("s1").value;
    let firstChar = string.charAt(0);

   document.getElementById("result").innerHTML="The first character is  "+firstChar;
  }

  function printLastChar()
   {
     let string = document.getElementById("s1").value;
     let lastChar = string.charAt(string.length-1);

     document.getElementById("result").innerHTML="The Last character is  "+lastChar;
   }

  function printMiddleChar()
   {
     let string = document.getElementById("s1").value;
      if(string.length%2==0)
        {
           document.getElementById("result").innerHTML="No Middle character";
        }
       else{
          let middlechar= string.charAt(Math.floor(string.length/2))
          document.getElementById("result").innerHTML="Middle character is "+middlechar;
        }
   }

 function printcharInString()
  {
    let string = document.getElementById("t1").value;

    for(i=0;i<string.length;i++)
      {
        document.getElementById("result").innerHTML+=string.charAt(i)+"<br>";
      }
  }

 function printStringLength()
  {
    let string = document.getElementById("t1").value;
    stringlenusingfn=string.length;
    count=0;
    Array.from(string).forEach(char=>count++)
   
    document.getElementById("result").innerHTML="length without using fn "+count+"<br>";
    document.getElementById("result").innerHTML+="length using fn "+stringlenusingfn;
  }

function printindexOfChar()
 {
    let string = document.getElementById("t1").value;
    let ch= document.getElementById("ch").value;

    let index= string.indexOf(ch);

    document.getElementById("result").innerHTML="The index of the character is"+index;
 }

function searchChar()
  {
      let string = document.getElementById("t1").value;
      let ch= document.getElementById("ch").value;
      
      if(string.indexOf(ch)>0)
        {
          document.getElementById("result").innerHTML="The character found"
        }
       else
        {
          document.getElementById("result").innerHTML="The character not found"
        }
  }

function checkPrefix()
 {
   let string = document.getElementById("n1").value;
    let prefix = document.getElementById("p1").value;

    if(string.startsWith(prefix))
      {
          document.getElementById("result").innerHTML="The prefix found";
      }
     else
     {
         document.getElementById("result").innerHTML="The prefix not found";
     }
 }

function replace()
 {
   let string = document.getElementById("n1").value;
    let oldstring = document.getElementById("p1").value;
    let newString = document.getElementById("p2").value;
    
  document.getElementById("result").innerHTML= string.replace(oldstring,newString);

 }

function changecase()
{
  let string = document.getElementById("n1").value;
  let newString = [...string].map(ch=>ch === ch.toLowerCase() ? ch.toUpperCase() : ch.toLowerCase()
).join('');
 document.getElementById("result").innerHTML= newString;
}

function reverseVowels()                 //adipurush  aiuu  uuia  udupirash
 {
   let string = document.getElementById("n1").value;
   let stringarr= [...string];
   const vowelArray=[];
   let k=0;
   for(i=0;i<stringarr.length;i++)

   {
     if(string.charAt(i)=='a'||string.charAt(i)=='e'||string.charAt(i)=='i'||string.charAt(i)=='o'||string.charAt(i)=='u')
      vowelArray.push(string.charAt(i));
   }   
   vowelArray.reverse();
   for(i=0;i<stringarr.length;i++)
    {
      if(string.charAt(i)=='a'||string.charAt(i)=='e'||string.charAt(i)=='i'||string.charAt(i)=='o'||string.charAt(i)=='u')
        {
          stringarr[i]=vowelArray[k];
          k++;
        }
    }
    document.getElementById("result").innerHTML=stringarr.join('');
 }

function getCount()
 {
   let string = document.getElementById("t1").value;
   let letterCount=0;
   let numberCount=0;
   let specialchar=0;
   for(i=0;i<string.length;i++)
    {
      if(/[a-zA-z]/.test(string.charAt(i)))
       {
         letterCount++;
       }
      else if(/[0-9]/.test(string.charAt(i)))
       {
         numberCount++;
       }
     else if(/[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/.test(string.charAt(i)))
      {
       specialchar++;
      }
    }
   document.getElementById("result").innerHTML="The No of Letters is "+letterCount+"<br>The No of Digits is "+numberCount+"<br>The No of specialchar is "+specialchar
 }

function getCountOfVowels()
 {
    let string = document.getElementById("t1").value;
    let vowels=0
    let consonants=0; 
    for(i=0;i<string.length;i++)
      {
        if(/[aeiou]/.test(string.charAt(i)))
          {
            vowels++;
          }
         else
          {
            consonants++;
          }
      }
    document.getElementById("result").innerHTML="The Number of Vowels is "+vowels+"<br> The Number of consonants is"+consonants;
 }