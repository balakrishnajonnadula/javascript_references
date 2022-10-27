window.addEventListener("load", onLoad);

function onLoad() {


    //data types
    /**
    
     2 types
     a) Premitive 
     b) Non premitive
    
    
    a) Premitive
    
    1. String
    2. Number
    3. Boolean
    
    b) Non premitive
    
    4. Array
    5. Object
    
    */

    //---------------------String---------------------------

    var str = "Hyderabad";

    var str1 = "is a city";

    //concatination

    //document.write(str+" "+str1);


    //String Methods

    // 1. Substring 

    var para = "Share suggestions,Google ask questions and connect with other users and top contributors in the Google Chrome help Google forum. Google Google Google"

    //console.log(para.substr(10,50));


    // 2. indexOf 

    // console.log(para.indexOf("Google"));

    // 2. lastIndexOf 

    //console.log(para.lastIndexOf("Google"));

    //3. split

    //console.log(para.split("Google"));


    var from = para.indexOf("Google Chrome");
    var to = (para.indexOf("forum.") - para.indexOf("Google Chrome")) + 6;

    //console.log(para.substr(from,to));


    var str = "hyderabad+secundrabad+sr nagar+ameerpet";

    // console.log(str.split("+").join(","));


    //---------------Numbers-----------------




    //Arthematic operators
    /**
    1. Addition (+)
    2. Substraction (-)
    3. Division (/)
    4. Multiplication (*)
    5. Modular division (%)
    */

    var num = 5;
    var num1 = "6";


    // ------------- Boolean -----------------

    var success = 0;

    var failure = 1;

    //console.log(Boolean(failure));


    // ------------ Array ---------------------

    //var arr = [1,"Hyderabd",true];


    // Array iteration
    /* for(var i=0;i<arr.length;i++){
         
         console.log(arr[i]);
         
     }*/


    //Array methods



    var arr = [1, 3];

    //Element Insert in the first place

    //@ Method name = unshift

    arr.unshift(0);

   // console.log(arr);


    //Element insert in the last place

    //@ Method name = push

    arr.push(4);

   // console.log(arr);

    //Element insert in between

    //@ Method name = splice

    arr.splice(2, 0, 2); // First -> Area of index, (insert (0), replace(1)) ,value

   // console.log(arr);



    //Deletions

    // Removing an element in the first place

    //@ method name = shift

    arr.shift();

   // console.info("Remove first element");
   // console.log(arr);


    // Removing an element in the last place

    //@ method name = pop

   // console.info("Remove last element");
    arr.pop();

   // console.log(arr);


    // Removing an element in the between place

    //@ method name = splice

   // console.info("Remove between element");
    arr.splice(1, 1);


    //-----------------object -----------------


    var obj = {
            name:"Hyderabad",
            pinCode:5320,
            city:true,
            areas:["ameerpet","balkampet"],
            getState:function(){
                return "Telangana";
            }
    };
/*
    for(var i in obj){
        
        console.log(i +"    :    "+ obj[i]);
        
    }
    */
    
    //Add an element to object
    
    
    
    obj.dNo = "123/117";
    
   // console.log(obj);
    
    //Remove and element from object
    
    delete obj.getState;
    
   // console.log(obj);

    
    
    
    
    // premitive 
    
    
    var a = "Hyderabad";
    
    var b = a;
    
    b = "Secundrabad";
    
    console.log(a);
    
    
    //Non -premitive
    
    var a = [1,2,3];
    
    var b = a;
    
    b.shift();
    
    console.log(a);
    
    
    
    

}