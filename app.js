let txt = document.querySelector('p');
let inpput = document.querySelector('input');

const input = document.querySelector('input').addEventListener("keyup", () => {


    
    if (inpput.value.toLowerCase() === ""){

        txt.innerHTML = "Enter a car brand name or the country";

    }
    else if (inpput.value.toLowerCase() === "bmw" || 
            inpput.value.toLowerCase() === "audi" ||
            inpput.value.toLowerCase() === "porsche" ||
            inpput.value.toLowerCase() === "volkswagen" ||
            inpput.value.toLowerCase() === "mercedez" ||
            inpput.value.toLowerCase() === "opel" ){

        txt.innerHTML = "Deutchland";}

        else if (inpput.value.toLowerCase() === "skoda" || 
            inpput.value.toLowerCase() === "renault" ||
            inpput.value.toLowerCase() === "peugeot" ||
            inpput.value.toLowerCase() === "citroen" ||
            inpput.value.toLowerCase() === "alpine" ||
            inpput.value.toLowerCase() === "bugatti" ){

        txt.innerHTML = "La France";}

        else if (inpput.value.toLowerCase() === "gta spano" || 
            inpput.value.toLowerCase() === "hurtan" ||
            inpput.value.toLowerCase() === "ifr aspid" ||
            inpput.value.toLowerCase() === "seat" ||
            inpput.value.toLowerCase() === "tramontana" ||
            inpput.value.toLowerCase() === "abadal" ){

        txt.innerHTML = "España";}

        else if (inpput.value.toLowerCase() === "ferrari" || 
            inpput.value.toLowerCase() === "lamborghini" ||
            inpput.value.toLowerCase() === "maseratti" ||
            inpput.value.toLowerCase() === "fiat" ||
            inpput.value.toLowerCase() === "alfa romeo" ||
            inpput.value.toLowerCase() === "pagani" ){

        txt.innerHTML = "Italia";}

        else if (inpput.value.toLowerCase() === "ferrari" || 
            inpput.value.toLowerCase() === "lamborghini" ||
            inpput.value.toLowerCase() === "maseratti" ||
            inpput.value.toLowerCase() === "fiat" ||
            inpput.value.toLowerCase() === "alfa romeo" ||
            inpput.value.toLowerCase() === "pagani" ){

        txt.innerHTML = "Italia";}

        else if (inpput.value.toLowerCase() === "toyota" || 
            inpput.value.toLowerCase() === "honda" ||
            inpput.value.toLowerCase() === "nissan" ||
            inpput.value.toLowerCase() === "suzuki" ||
            inpput.value.toLowerCase() === "mazda" ||
            inpput.value.toLowerCase() === "subaru" ||
            inpput.value.toLowerCase() === "isuzu" ||
            inpput.value.toLowerCase() === "yamaha" ||
            inpput.value.toLowerCase() === "hyundai" ||
            inpput.value.toLowerCase() === "mitsubushi" ){

        txt.innerHTML = "日本";}

        else if (inpput.value.toLowerCase() === "ford" || 
            inpput.value.toLowerCase() === "tesla" ||
            inpput.value.toLowerCase() === "mustang" ||
            inpput.value.toLowerCase() === "dodge" ||
            inpput.value.toLowerCase() === "cadillac" ||
            inpput.value.toLowerCase() === "chrysler" ||
            inpput.value.toLowerCase() === "chevrolet" ||
            inpput.value.toLowerCase() === "gmc" ||
            inpput.value.toLowerCase() === "lincoln"){

        txt.innerHTML = "american";}

        else if (inpput.value.toLowerCase() === "nevs" || 
            inpput.value.toLowerCase() === "scania" ||
            inpput.value.toLowerCase() === "uniti" ||
            inpput.value.toLowerCase() === "volvo" ||
            inpput.value.toLowerCase() === "koenigsegg" ||
            inpput.value.toLowerCase() === "saab"){

        txt.innerHTML = "Köttbullar och dillsås :)";}

        else if (inpput.value.toLowerCase() === "germany"){

        txt.innerHTML = "opel<br>audi<br>bmw<br>porsche<br>mercedez<br>volkswagen<br>Frank-Walter Steinmeier";}

        else if (inpput.value.toLowerCase() === "france"){

            txt.innerHTML = "peugeot<br>skoda<br>fiat<br>renault<br>citroen<br>alpine<br>bugatti<br>Macron";}

     else if (inpput.value.toLowerCase() === "spain"){

                txt.innerHTML = "gta spano<br>hurtan<br>ifraspid<br>seat<br>tramontana<br>abadal<br>Pedro Sánchez";}
else if (inpput.value.toLowerCase() === "japan"){

         txt.innerHTML = "toyota<br>mazda<br>honda<br>nissan<br>suzuki<br>subaru<br>isuzu<br>yamaha<br>hyundai<br>mitsubishi<br>Fumio Kishida";}

  else if (inpput.value.toLowerCase() === "america"){

  txt.innerHTML = "ford<br>cadillac<br>tesla<br>mustang<br>dodge<br>chrysler<br>chevrolet<br>lincoln<br>gmc<br>trump";}         

  else if (inpput.value.toLowerCase() === "sweden")

  {txt.innerHTML = "nevs<br>scania<br>uniti<br>volvo<br>koenigsegg<br>saab<br>karl den 16 gustav"}
  //president arayinca butun arabalar ciksin
    else{

        txt.innerHTML = inpput.value.toLowerCase();

    }

    

});

