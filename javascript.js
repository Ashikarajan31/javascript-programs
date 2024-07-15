//1st program
let a;
let i;
for(i=1;i<=100;i++)
    if(i%3==0 && i%5==0)
    {
        document.write("FizzBuzz");
        document.write("<br>");
    }
    else if(i%3==0){
        document.write("Fizz");
        document.write("<br>");

    }
    else if(i%5==0){
        document.write("Buzz")
        document.write("<br>")
    }
    else{
        document.write(i);
        document.write("<br>")
    }


    //2nd program
    function palindrome(str)
    {
        let str1="";
        let i;
        for (i=str.length-1;i>=0;i--){ 
            str1 += str[i];
        }
        if(str==str1){
            return "Palindrome";
        }
        else{
            return "Not Palindrome";
        }
    }
    console.log(palindrome("Everyone"));   



    //3rd program
    let arr=[2,4,6,8,10];
    let k;
    let max=arr[0];
    for(k=0;k<arr.length;k++){
        max=Math.max(max,arr[k]);
    }
    console.log(max);

   // 4th program
    function occ(p){
        let result={}
        for(let m=0;m<p.length;m++){
            let ch=p.charAt(m)
        
        if(!result[ch])
            result[ch]=1;
        else
            result[ch]+=1
        }
        return result;
    
    }
    console.log(occ("My brother is a Engineer"));


    //5th program
function longest(str){ 
    
    str = str.split(" ") 
    
    return str.sort((a, b) => b.length - a.length)[0] 
 } 

console.log(longest("Hii everyone"+ 
                        " welcome everyone")); 


    //6th program
   function factorial(a){
    let j;
    let fact=1;
    for(j=1;j<=a;j++)
    {
        fact=fact*j;
   }
   return (fact);
}
 console.log(factorial(5));


 //7th program
 function fahrenheit(celsius)
 {
    let f=((9/5)*celsius)+32;
    return f;
}
console.log(fahrenheit(125));


//8th program
let array=[0,1,2,3,8,6,5,4];
let x=array.length;//4
let sum1=0;
let w;
for(w=0;w<=x;w++){
    sum1=sum1+w;
}
let sum=0;
let q;
for(q=0;q<x;q++){
    sum=sum+array[q];
}
console.log(sum1-sum);




