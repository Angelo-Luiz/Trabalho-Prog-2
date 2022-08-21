function JogoVelha() {
    this.nome1 = document.querySelector('.id-jog1');
    this.nome2 = document.querySelector('.id-jog2');
    this.comeco = document.querySelector('.cadastro-nome')
    this.img1 = document.querySelector('#imagem1');
    this.img2 = document.querySelector('#imagem2');
    this.campo = document.querySelector('.campo');
    this.rodada = 0;
    this.partidaIniciada = false;

    matriz = Array(3);
    matriz['a'] = Array(3);
    matriz['b'] = Array(3);
    matriz['c'] = Array(3);
    matriz['a'][0] = 0;
    matriz['a'][1] = 0;
    matriz['a'][2] = 0;
    matriz['b'][0] = 0;
    matriz['b'][1] = 0;
    matriz['b'][2] = 0;
    matriz['c'][0] = 0;
    matriz['c'][1] = 0;
    matriz['c'][2] = 0;


    this.inicia = () => {
        this.nome1.value = '';
        this.nome2.value = '';
        this.capturaCliques();
        
    }

    this.criaNome = () => {
        let name = document.createElement('h3');
        return name;
    }

    this.criaImagem = () => {
        let imgrodada = document.createElement('img');
        return imgrodada;
    }

    this.insereNome = () => {
        this.name1 = this.criaNome();
        this.name2 = this.criaNome();
        this.name1.innerText = this.nome1.value;
        this.name2.innerText = this.nome2.value;
        this.img1.appendChild(this.name1);
        this.img2.appendChild(this.name2);
    }


    this.jogando = () => {
        this.comeco.setAttribute('class', 'apaga');
        this.insereNome();
    }

    this.iniciarPartida = () => {
        if (this.nome1.value == '' || this.nome2.value == '') {
            alert('Digite o nome dos dois jogadores');
        }

        else {
            this.partidaIniciada = true;
            this.jogando();
        }

    }

    this.insereMarcacaoX = (elemento) => {
        let imgx = document.createElement('img');
        imgx.src = "./imagens/marcacao_1.png";
        imgx.setAttribute('class', 'campo');
        elemento.appendChild(imgx);
        
    }

    this.insereMarcacaoO = (elemento) => {
        let imgO = document.createElement('img');
        imgO.src = "./imagens/marcacao_2.png";
        imgO.setAttribute('class', 'campo');
        elemento.appendChild(imgO);
        
    }

    this.ganhador = (pontos) => {
        if(pontos == 3)
        {
            alert(this.nome1.value + ' Venceu!');
            this.limpaCampos();
            this.limpaMatriz();
            this.rodada = 0;
        }
        else if(pontos == -3){
            alert(this.nome2.value + ' Venceu');
            this.limpaCampos();
            this.limpaMatriz();
            this.rodada = 0;
        }
        else if(this.rodada == 9 && (pontos != 3 || pontos != -3)){
            this.limpaCampos();
            this.limpaMatriz();
            this.rodada = 0;
            alert('Partida empatada');
        }
    }

    this.verificaVencedor = () => {
        let pontos = 0;
        console.log(this.rodada)
        for (let i = 0; i<3; i++)
        {
            pontos += matriz['a'][i];
            this.ganhador(pontos);
            
        }
        pontos = 0;
        for (let i = 0; i<3; i++)
        {
            pontos += matriz['b'][i];
            this.ganhador(pontos);
            
        }
        pontos = 0;
        for (let i = 0; i<3; i++)
        {
            pontos += matriz['c'][i];
            this.ganhador(pontos);
            
        }

        for(let i = 0; i<3; i++)
        {
            pontos = 0;
            pontos += matriz['a'][i];
            pontos += matriz['b'][i];
            pontos += matriz['c'][i];
            this.ganhador(pontos);
        }
        //diagonal principal
        pontos = 0;
        pontos = pontos + matriz['a'][0] + matriz['b'][1] + matriz['c'][2];
        this.ganhador(pontos);

        // diagonal secundaria
        pontos = 0;
        pontos = pontos + matriz['a'][2] + matriz['b'][1] + matriz['c'][0];
        this.ganhador(pontos);


        // console.log(pontos);
    }

    this.limpaCampos = () => {
        document.querySelectorAll('.campo > img').forEach(e => e.remove());
        this.limpaMatriz();
        
    }

    this.limpaMatriz = () => {
        for(let j = 0; j<3; j++){
            matriz['a'][j] = 0;
        }
        for(let j = 0; j<3; j++){
            matriz['b'][j] = 0;
        }
        for(let j = 0; j<3; j++){
            matriz['c'][j] = 0;
        }
    }

    this.capturaCliques = () => {
        document.addEventListener('click', (event) => {
            const elemento = event.target;
            
            
            if (elemento.classList.contains('btn-iniciar')) {
                this.iniciarPartida();
            }

            else if (elemento.classList.contains('campo')) {
                
                if (this.partidaIniciada == false) {
                    alert('INFORME OS DOIS NOMES ANTES DE JOGAR');
                }
                else {
                    
                    this.rodada++;
                    //console.log(matriz)
                    if (this.rodada % 2 == 1) {
                        this.insereMarcacaoX(elemento);
                        let pontoX = elemento.id.split('-');
                        matriz[pontoX[0]][pontoX[1]] = 1;
                        this.verificaVencedor();
                        //console.log(pontoX);
                    }


                    else if (this.rodada % 2 == 0) {
                        this.insereMarcacaoO(elemento);
                        let pontoO = elemento.id.split('-');
                        matriz[pontoO[0]][pontoO[1]] = -1;
                        this.verificaVencedor();
                    }

                }
            }
        });
    }

}

const jogo = new JogoVelha();
jogo.inicia();
