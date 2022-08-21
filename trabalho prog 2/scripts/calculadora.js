function Calculadora(){
    this.display = document.querySelector('.display');
    this.historico = document.querySelector('.historico');
    this.contaHistorico;

    this.inicia = () => {
        this.clique();
        this.capturaEnter();
    }

    this.addNumDisplay = event => {
        //console.log('clicou');
        this.display.value += event.innerText;
        this.display.focus();
    }

    this.limpaDisplay = () => {
        this.display.value = '';
    }

    this.apagaUm = () => {
        this.display.value = this.display.value.slice(0, -1);
    }

    this.addHistorico = () => {
        let linha = this.criaLinha();
        let valor = this.contaHistorico;
        linha.innerText = this.display.value + ' = ' + this.contaHistorico;
        this.historico.appendChild(linha);
        console.log(linha.innerText);

    }

    this.criaLinha = () => {
        let l = document.createElement('li');
        return l;
    }

    this.realizaConta = () => {

        try {
            const conta = eval(this.display.value);
            this.contaHistorico = conta;

            if(!conta){
                alert('CONTA INVÁLIDA');
                this.limpaDisplay();
            }
            this.addHistorico();
            this.display.value = conta;
            
        }catch(e){
            alert('CONTA INVÁLIDA');
            this.limpaDisplay();
        }
    }

 

    this.clique = () => {
        document.addEventListener('click', event => {
            const elemento = event.target;
            //console.log(elemento);
            if(elemento.classList.contains('btn-num')){
                this.addNumDisplay(elemento);
            }

            else if(elemento.classList.contains('btn-clear')){
                this.limpaDisplay();
            }

            else if(elemento.classList.contains('btn-del')){
                this.apagaUm();
            }

            else if(elemento.classList.contains('btn-eq')){
                this.realizaConta();
            }
        });
    }

    this.capturaEnter = () => {
        document.addEventListener('keypress', event => {
            const el = event.target;

            this.realizaConta();
        });
    }
}

const calc = new Calculadora();
calc.inicia();