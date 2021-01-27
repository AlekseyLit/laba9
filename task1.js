console.log ("Задача 1");
let student = {
group: 201,
last_name: "Иванов",
first_name: "Иван",
};
let result=" "
for ( let key in student){
    result= result+key+", ";
}
console.log("Список свойств:", result)
console.log ("Студент ",student.first_name, " ",student.last_name, " учится в ", student.group, "группе.")
