
var max = (a,b)=> {
    if(a>b) return a;
    return b;
}

var maxOfThree = (a,b,c)=>{
    // return Math.max(a,b,c);
    if(a>b && a>c) return a;
    else if(b>a && b>c) return b;
    else return c; 
}

var isVowel = (a)=>{
    if(a==='a' || a==='e' || a==='i' || a==='o' || a==='u') return true;
    return false;
}

var sum = (arr)=>{
    return arr.reduce((acc,val)=>acc+val,0);
}

var multiply = (arr)=>{
    return arr.reduce((acc,val)=>acc*val,1);
}

var reverse = (str) => {

    /**
     * 
     * using reduceRight property
     */
    return str.split("").reduceRight((acc, i) => acc + i, "");

    /**
     * using array reverse method. 
     */
    // return str.split('').reverse().join('');

    /**
     * brute force method
     */
    // let newStr = "";
    // for(let i=str.length-1;i>=0;i--){
    //     newStr+=str.charAt(i);
    // }

    // return newStr;
}

var findLongestWord = (arr)=>{
    // let max = arr[0].lnegth();
    // for(let i=1;i<arr.length;i++){
    //     if(arr[i].lnegth() > max){
    //         max = arr[i].lnegth();
    //     }
    // }
    // return max;

    return arr.reduce((acc,value)=>{
        if(value.length>acc) acc=value.length;
        return acc;
    },0);
}

var filterLongestWord = (arr,i)=>{
   return arr.filter(item=>item.length>i);
}


var myFunctionTest = (value,expected)=>{
    if(value===expected) return "TEST SUCCEEDED";
    else return "TEST FAILED";
}

var myFunctionArrayTest =(arr1,arr2)=>{
    if(arr1.length !==arr2.length) return "TEST FAILED";
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]!==arr2[i]) return "TEST FAILED";
    }
    return "TEST SUCCEEDED";
}

console.log("Expected output of max(20,10) is 20 "+ myFunctionTest(max(20,10),20));
console.log("Expected output of maxOfThree(10,50,100) is 100 "+ myFunctionTest(maxOfThree(10,50,100),100));
console.log("Expected output of maxOfThree(10,50,100) is 100 "+ myFunctionTest(maxOfThree(10,50,100),50)+" got 50");
console.log("Expected output of isVowel(\"a\") is true ",myFunctionTest(isVowel("a"),true));
console.log("Expected output of isVowel(\"b\") is false ",myFunctionTest(isVowel("b"),false));
console.log("Expected output of sum([1,5,10]) is 16 ",myFunctionTest(sum([1,5,10]),16));
console.log("Expected output of multiply([1,5,10]) is ",myFunctionTest(multiply([1,5,10]),50));
console.log("Expected output of reverse('sandesh is') is 'si hsednas' ",myFunctionTest(reverse("sandesh is"),"si hsednas"));
console.log("Expected output of findLongestWord(['sandesh','san']) is 'sandesh' ",myFunctionTest(findLongestWord(['sandesh','san']),7));
console.log("Expected output of filterLongestWord(['sandesh','san']) is ['sandesh'] ",myFunctionArrayTest(filterLongestWord(['sandesh','san'],4),['sandesh']));

/**
 * 
 * js fiddle solution
 */
 const a = [1,3,5,3,3]; 
 const b = a.map(function(elem, i, array) {
   return elem + 3;
 })
 document.writeln(b.toString() + "<br/>");
 const c = a.filter(function(elem, i, array){
   return elem !== 3;});
 document.writeln(c.toString() + "<br/>");
 const d = a.reduce(function(prevValue, elem, i, array){
   return prevValue + elem;
 });
 document.writeln(d+ "<br/>");
 
 const d2 = a.find(function(elem) {return elem > 1;}); //3
 const d3 = a.findIndex(function(elem) {return elem > 1;}); //1
 document.writeln(d2+ "<br/>");
 document.writeln(d3 + "<br/>");
 
 const mul = a.map(item=>item*10);
 document.writeln(mul + "<br/>");
 
 const three = a.filter(item=>item===3);
 document.writeln(three+ "<br/>")
 
 const product = a.reduce((acc,item)=>acc*item,1);
 document.writeln(product+"<br/>");