new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta(){
            alert("Chamaaaa!!")
        },
        exec2(e){
            this.valor = e.target.value
        }
    }
})