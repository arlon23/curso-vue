new Vue({
    el:"#projeto",
    data:{
        jogador: {
            nome: 'Jogador',
            ataque: 10,
            ataqueEspecial: 15,
            curar: 14,
            vida: 100
        },
        monstro:{
            nome: 'Monstro',
            ataque: 13,
            vida: 100 
        },
        logs: [],
        partida: false,
        fim: false,
    },
    methods:{
        calcularAtaque(max){
            return Math.floor(Math.random() * (max - 5 + 1)) + 5
        },
        iniciarPartida(){
            this.partida = !this.partida
            this.jogador.vida = 100
            this.monstro.vida = 100
            this.fim = false
            this.logs = []
        },
        ataque(){
            ataqueMonstro = this.calcularAtaque(this.monstro.ataque)
            this.jogador.vida -= ataqueMonstro
            this.logs.unshift('MONSTRO ATINGIU JOGADOR COM '+ataqueMonstro)

            ataqueJogador = this.calcularAtaque(this.jogador.ataque)
            this.monstro.vida -= ataqueJogador
            this.logs.unshift('JOGADOR ATINGIU MONSTRO COM '+ataqueJogador)

            if(this.jogador.vida <= 0) {
                this.partida = !this.partida
                this.jogador.vida = 0
            }

            if(this.monstro.vida <= 0) {
                this.partida = !this.partida
                this.monstro.vida = 0
            }

        },
        ataqueEspecial(){
            ataqueMonstro = this.calcularAtaque(this.monstro.ataque)
            this.jogador.vida -= ataqueMonstro
            this.logs.unshift('MONSTRO ATINGIU JOGADOR COM '+ataqueMonstro)

            ataqueJogador = this.calcularAtaque(this.jogador.ataqueEspecial)
            this.monstro.vida -= ataqueJogador
            this.logs.unshift('JOGADOR ATINGIU MONSTRO COM '+ataqueJogador)

            if(this.jogador.vida <= 0) {
                this.partida = !this.partida
                this.jogador.vida = 0
            }

            if(this.monstro.vida <= 0) {
                this.partida = !this.partida
                this.monstro.vida = 0
            }
        },
        curarJogador(){
            ataqueMonstro = this.calcularAtaque(this.monstro.ataque)
            this.jogador.vida -= ataqueMonstro
            this.logs.unshift('MONSTRO ATINGIU JOGADOR COM '+ataqueMonstro)

            curaJogador = this.calcularAtaque(this.jogador.curar)
            this.jogador.vida += curaJogador
            this.logs.unshift('JOGADOR GANHOU FORCA DE '+curaJogador)

            if(this.jogador.vida <= 0) {
                this.partida = !this.partida
                this.jogador.vida = 0
            }

            if(this.monstro.vida <= 0) {
                this.partida = !this.partida
                this.monstro.vida = 0
            }
        },
        verificaPartida(){
            if(!this.partida && (this.monstro.vida <= 0 || this.jogador.vida <= 0)){ 
                this.fim= !this.fim
                return true
            } 
        },
        verificaVida(use){
            if(use<20){
                return true
            }else return false
        }
    }
})