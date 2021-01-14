new Vue({
    el: "#desafio",
    data: {
        nome: 'Arlon Scheidegger',
        idade: '23',
        src: 'https://www.clientresourcesinc.com/wp-content/uploads/2018/06/vuejs_logo.png'
    },
    methods: {
        idadeMult(){
            return this.idade * 3
        },
        randon(){
            return Math.random()
        },

    }
})