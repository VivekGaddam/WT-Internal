let number ='025468'
sol=number[0]
for (let i=1;i++;i<number.length){
    a=parseInt(number[i-1])
    b=parseInt(number[i-2])
    if (a%2==0 && b%2==0){
        sol+=('-'+number[i])
    }
    else{
        sol+=number[i]
    }
}
console.log(sol)