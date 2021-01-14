new Vue({
	el: '#desafio',
	data: {
		initEfeito:'a',
		classe: ''
	},

	methods: {
		iniciarEfeito() {
			initEfeito= true
			setInterval(()=>{
				
				this.initEfeito = !this.initEfeito
				console.log(this.initEfeito=='')
			},1000)
		},
		iniciarProgresso() {

		},
	}
		
})
