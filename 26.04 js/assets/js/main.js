// 1 eded verilir. 
// Eger o eded 50den kicikdirse o edede qeder 3-e bolunen, 
// 50-100 araligindadirsa o edede qeder 5e bolunen, 
// 100den boyukdurse o edede qeder 8 e bolunen ededlerin sayini ekrana cixardan bir alqoritm yazin.


function FindNumbers(number){

    var count = 0;

    if(number > 0 && number < 50){
        for(let i = 1; i < number; i++){
            if(i % 3 === 0){
                count++;
            }
        }
    }
    else if(number > 50 && number < 100){
        for(let i = 1; i < number; i++){
            if(i % 5 === 0){
                count++;
            }
        }
    }
    else {
        for(let i = 1; i < number; i++){
            if(i % 8 === 0){
                count++;
            }
        }
    }
    return count;
}


alert(FindNumbers(+prompt("Eded daxil edin ")));







// Toplama çıxma, toplama, vurma, bölməyə uyğun funksiya yaradirsiz 
// 2 eded ve 1 operator('+','-','*','/') qebul edir. 
// Qebul etdiyi operatora uygun a və b ədədləri üzərində hesablama aparib alinan deyeri qaytarır.
var num1 = Number(prompt("Birinci eded daxil edilir"));
var oper = prompt("Operator daxil edilir");
var num2 = Number(prompt("Ikinci eded daxil edilir"));



switch (oper) {
    case "+":
        alert(num1 + num2);
        break;
    case "-":
        alert(num1 - num2);
        break;
    case "/":
        alert(num1 / num2);
        break;
    case "*":
        alert(num1 * num2)
        break;
}

// Methodlar yaradirsiz. 
// Methoda ad gonderende adi ekrana cixardir(Sabir), ad ve soyad gonderende soyadi adi ekrana cixardir(Guliyev Sabir), 
// ad,soyad ve ata adı göndərildikdə adin baş hərfi nöqtə soyad ata adi ekrana cixardirsiz(S.Guliyev Mehti). Methodlarin adi eyni olmalıdır.


    var std={
        name:"Nermin",
        surname:"Haciyeva",
        farthername:"Akif"

    }
console.log(std.name);

var std1={
    name:"Nermin",
    surname:"Haciyeva",
    fathername:"Akif"



}
console.log(std1.surname +" "+ std1.name);
var std2={

    name:"Nermin",
    surname:"HAciyeva",
    fathername:"Akif"

}
console.log(std2.name[0]+ "."+std2.surname +" " + std2.fathername);