console.log ("Задача 3");
function isPalindrom(word){
    if(word.split("").reverse().join("")==word){
        k=1;
    }else{
        k=0;
    }
    if(k==1){
        console.log(`Слово "${word}" является палиндромом`);
    }else{
        console.log(`Слово "${word}" не является палиндромом`);
    }

}
isPalindrom("довод");
isPalindrom("кружка");
