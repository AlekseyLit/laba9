console.log ("Задача 4");
function scalarMultiplication(num, mass){
    for(let i=0;i<mass.length;i++){
        for(let j=0;j<mass[i].length;j++){
            mass[i][j]= mass[i][j]*num;
        }

    }
    for(i=0;i<mass.length;i++){
        line="";
        for(j=0;j<mass[i].length;j++){
            line=line+mass[i][j]+" ";
        }
        console.log(line);
    }
    
}
scalarMultiplication(3, [[1,2,3],[4,5,6],[7,8,9]]);