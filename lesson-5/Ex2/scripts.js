const textArea = document.getElementById('text');
const value = localStorage.getItem("area");

textArea.addEventListener('input', function(event) {
   let value= textArea.value;
   localStorage.setItem("area",value);
});

textArea.innerHTML= value;