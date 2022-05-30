const validator = ()=>{
    let val = document.getElementById("text").value;
    let mes=document.getElementById("error");
    try{
        if (val === "") throw "Вы ничего не ввели"
        else if (isNaN(val)) throw "Вы ввели НЕ число"
        else if (val > 10) throw "Значение больше 10"
        else if (val < 5) throw "Значение меньше 5"
        else mes.innerHTML= "";
    }
    catch(error){
       mes.innerHTML="! " + error;
    }
};
const btn = document.getElementById('btn');
btn.addEventListener("click", validator); 

