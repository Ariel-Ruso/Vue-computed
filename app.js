const app= new Vue ({

    el: '#app',

    data: {
        mensaje: 'hola gente',
        contador: 0
    },

    computed: {
        mjeInvertido() {
            // convierto mje en array letras, invierto y uno
            return this.mensaje.split('').reverse().join('')
        },
        
        //cambio color d barra dependiendo contador
        color(){
            return {
                'bg-success': this.contador <= 10,
                'bg-warning':  this.contador > 10 && this.contador < 20,
                'bg-danger':  this.contador > 20,
            }
        }
    }
}
);