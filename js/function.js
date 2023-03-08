const boton=document.getElementById('boton');
const texto=document.getElementById('hideText');

boton.addEventListener('click',esconder);

function esconder()
{
    texto.classList.toggle('show');
    if(texto.classList.contains('show'))
    {
        boton.innerHTML="Leer Menos";
    }
    else 
    {
        boton.innerHTML="Leer Mas";
    }
}