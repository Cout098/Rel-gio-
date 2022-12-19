function atualizarTempo(){
    var display = document.querySelector('.display')

    var agora = new Date()

    var horario = corrigirHorario(agora.getHours()) + ':' + corrigirHorario(agora.getMinutes()) + ':' + corrigirHorario(agora.getSeconds())

    display.textContent = horario
}

function corrigirHorario(numero){
    if (numero < 10) {
        numero = '0' + numero;
    }
    return numero
}


setInterval(atualizarTempo, 1)



const changeThemeToDark = () => {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("data-theme","dark");
}

const changeThemeToLight = () => {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("data-theme","light");
}

let theme = localStorage.getItem('data-theme');
if (theme == 'dark') changeThemeToDark();

const btnDark = document.getElementById('toggle-dark');

if (localStorage.getItem('data-theme') == 'dark') {
    btnDark.checked = true;
}

btnDark.addEventListener('change', () => {
    let theme = localStorage.getItem('data-theme')
    if (!btnDark.checked) {
        changeThemeToLight()
    }else{
        changeThemeToDark()
    }
})