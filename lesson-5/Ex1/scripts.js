const bodyTheme = document.getElementById("body");
const checkB = document.getElementById('check');

checkB.addEventListener('change', function(event) {
    if(event.target.checked){
        bodyTheme.classList.add('night');
        localStorage.setItem('theme','night')
    }
    else{
        bodyTheme.classList.remove('night');
        localStorage.setItem('theme','day')
    }
});

if (localStorage.getItem('theme') === 'night'){
    bodyTheme.classList.add('night');
    checkB.checked = true;
}
else{
    bodyTheme.classList.remove('night');
}