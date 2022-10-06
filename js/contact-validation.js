const $form = document.querySelector(".formSec")
$inputs = document.querySelectorAll(".formSec [required]")

$inputs.forEach(element => {
    const $span = document.createElement("span")
    $span.id = element.name;
    $span.textContent = element.title
    $span.classList.add("formSec-error", "none")
    element.insertAdjacentElement("afterend", $span)
});

document.addEventListener("keyup", e=>{
    if(e.target.matches(".formSec [required]")){
        let $input = e.target,
        //para validad el pattern de text area
        pattern = $input.pattern || $input.dataset.pattern;

        //Dos validaciones para los input requeridos que no tienen un patron
        if(pattern && $input.value != ''){
            //el input tiene patrón y tiene algo escrito
            let regex = new RegExp(pattern)
            return !regex.exec($input.value) 
            ? document.getElementById($input.name).classList.add('is-active') 
            : document.getElementById($input.name).classList.remove('is-active')
        }

        if(!pattern){
            //el input no tiene patron
            return $input.value === ''
            ? document.getElementById($input.name).classList.add('is-active') 
            : document.getElementById($input.name).classList.remove('is-active')
        }

    }
})

document.addEventListener("submit", e=>{
    // e.preventDefault();

    const $loader = document.querySelector(".loader"),
    $response = document.querySelector(".response")

    $loader.classList.remove('none')

    setTimeout(() => {
        $loader.classList.add("none")
        $response.classList.remove('none')
        $form.reset()
        setTimeout(()=>{
            $response.classList.add('none')
        },2000)
    },2000);
})