console.log ("Задача 2");
let arr=[1,2,3];
console.log(arr);
function cutArray(mass){
    for (let i=-1;i>-mass.length-1;i=-1){
        if (i!=-mass.length){
            console.log(mass.pop()+" осталось "+mass);
        }
        else{
           console.log(mass.pop());
       }
    }
}
cutArray(arr);