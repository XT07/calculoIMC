function meuEscopo() {
    const form = document.querySelector("#form");
    const result = document.querySelector("#resultado");
    const resultCalc = document.querySelector("#calculo");

    function criarP() {
        const p = document.createElement("p");
        return p;
    }

    function recebeEventoForm(evento) {
        evento.preventDefault();

        let peso = form.querySelector("#peso").value;
        let altura = form.querySelector("#altura").value;
        const calculo = peso/(altura ** 2);

        if(peso == "" || altura == ""){
            result.innerHTML = "";
            const err = criarP()
            err.classList.add("cor-r")
            err.innerHTML = (`Preencha todos os campos.`);
            result.appendChild(err)
            return result
        } else if(calculo.toFixed(1) < 18.5){
            result.innerHTML = "";
            resultCalc.innerHTML = "";
            const calcResult = criarP();
            calcResult.classList.add("calculo-baixo")
            calcResult.innerHTML = (`Seu IMC foi de ${calculo.toFixed(1)}<br>Você está abaixo do peso.`);
            resultCalc.appendChild(calcResult)
            return resultCalc
        }
        else if(calculo.toFixed(1) > 18.5 && calculo.toFixed(1) < 24.9){
            result.innerHTML = "";
            resultCalc.innerHTML = "";
            const calcResult = criarP();
            calcResult.classList.add("calculo-medio")
            calcResult.innerHTML = (`Seu IMC foi de ${calculo.toFixed(1)}<br>Você está no peso ideal.`);
            resultCalc.appendChild(calcResult)
            return resultCalc
        }
        else if(calculo.toFixed(1) > 25 && calculo.toFixed(1) < 29.9){
            result.innerHTML = "";
            resultCalc.innerHTML = "";
            const calcResult = criarP();
            calcResult.classList.add("calculo-acima")
            calcResult.innerHTML = (`Seu IMC foi de ${calculo.toFixed(1)}<br>Você está acima do peso.`);
            resultCalc.appendChild(calcResult)
            return resultCalc
        }
        else if(calculo.toFixed(1) > 30 && calculo.toFixed(1) < 34.9){
            result.innerHTML = "";
            resultCalc.innerHTML = "";
            const calcResult = criarP();
            calcResult.classList.add("calculo-grau1")
            calcResult.innerHTML = (`Seu IMC foi de ${calculo.toFixed(1)}<br>Você está com obesidade de grau 1.`);
            resultCalc.appendChild(calcResult)
            return resultCalc
        }
        else if(calculo.toFixed(1) > 35 && calculo.toFixed(1) < 39.9){
            result.innerHTML = "";
            resultCalc.innerHTML = "";
            const calcResult = criarP();
            calcResult.classList.add("calculo-grau2")
            calcResult.innerHTML = (`Seu IMC foi de ${calculo.toFixed(1)}<br>Você está com obesidade de grau 2.`);
            resultCalc.appendChild(calcResult)
            return resultCalc
        }
        else if(calculo.toFixed(1) > 40){
            result.innerHTML = "";
            resultCalc.innerHTML = "";
            const calcResult = criarP();
            calcResult.classList.add("calculo-grau3")
            calcResult.innerHTML = (`Seu IMC foi de ${calculo.toFixed(1)}<br>Você está com obesidade de grau 3.`);
            resultCalc.appendChild(calcResult)
            return resultCalc
        }
    }

    form.addEventListener("submit", recebeEventoForm)
}

meuEscopo()