function dash(){
    let input = document.querySelector("#evenNum").value.trim();
    var see = document.querySelector("#answer");
    var num ="0244567";
    let newNum =" ";

 for(var i=0; i<input.length; i++){
    if(input[i] % 2 ===0){
        newNum += input[i]+"-";

    }
    else{
        newNum +=input[i];
    }
 }
 see.innerHTML= newNum;
 
}

function mostFrequent(){
    let display = document.querySelector("#answer1");
    let array = [1,2,1,1,3,5,6,7,"a","a","a","a","a",1,1,1,1];
    let rFrequency=0;
    let frequency = 0;
    let ele = " ";
    for(var i= 0; i<array.length; i++){
        for(var j=i; j<array.length; j++){

            if (array[i] == array[j]){
                frequency +=1;
                if(rFrequency < frequency){
                    rFrequency = frequency;
                    
                }
               ele = array[i];
                
            }

        }
            frequency =0;
    }
    display.innerHTML = ele+ "(" + rFrequency+"times"+")";
    
}

function letterSwap(){
    let words = document.querySelector("#swap").value.trim();
    let display = document.querySelector("#answer2");

    let arr = words.split('');
    let swap = [];
    for(var i=0; i<arr.length; i++){
        if(arr[i] == arr[i].toLowerCase()){
            swap.push(arr[i].toUpperCase());
           
        }
        else if(arr[i]=== arr[i].toUpperCase()){
            swap.push(arr[i].toLowerCase());
        }
        else{
            swap.push(arr[i]);
        }
    }
    let newString = swap.join('');

    display.innerHTML = newString;

    




}

function sort(){
    
}