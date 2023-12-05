const saludo = Vue.createApp({
    data(){
        return {
            message: "hello world!"
        }
    },
    methods: {
        write(text){
            this.message = event.target.value
        }
    }
})
saludo.mount("#message")

const frutas = Vue.createApp({
    data(){
        return{
            fruitsList: [
                {
                    name: "banana",
                    url: "https://banatropic.com.co/wp-content/uploads/2016/09/bananasA-600x434.jpg"
                },
                {
                    name: "manzana",
                    url: "https://www.recetasnestlecam.com/sites/default/files/2022-04/tipos-de-manzana-royal-gala.jpg"
                },
                {
                    name: "guanabana",
                    url: "https://www.mercadoscampesinos.gov.co/wp-content/uploads/2021/01/0164-GUANABANA.jpg"
                },
                {
                    name: "sadia",
                    url: "https://agrosemval.com/wp-content/uploads/2020/05/sandia-crimson-sweet-ipc-01.jpg"
                }
            ]
        }
    },
    methods: {
        removeFruit(pos){
            this.fruitsList.splice(pos, 1)
        }
    }
})
frutas.mount("#frutas")

const contador = Vue.createApp({
    data() {
        return {
            count: 0,
            countColor: '#333',
            animateCount: false,
        };
    },
    methods: {
        resetCountAnimation() {
            this.animateCount = false;
        },
    },
    watch: {
        count(newValue, oldValue) {
            this.animateCount = true;
            this.countColor = newValue > oldValue ? '#27ae60' : (newValue < oldValue ? '#e74c3c' : '#333');
        },
    },
})
contador.mount("#contador")