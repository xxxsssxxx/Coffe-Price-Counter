 var app = new Vue({
     el: '#app',
     data: {
         title: ' Count Your Coffe Price ',
      	price: 0,
         items: [{
                 name: "Espresso",
                 types: [{
                     name: 'small',
                     quantity: "0"
                 }]
             },
             {
                 name: "Latte",
                 types: [{ name: 'small', quantity: "0", },
                     { name: 'medium', quantity: "0", },
                     { name: 'large', quantity: "0", }
                 ]
             },
             {
                 name: "Cappucino",
                 types: [{ name: 'small', quantity: "0" },
                     { name: 'medium', quantity: "0" },
                     { name: 'large', quantity: "0" }
                 ]
             }
         ]
     },
     methods: {
         addCoffe(par, par2) {
            this.items[par].types[par2].quantity++
         },
         deleteCoffe(par, par2){
         	this.items[par].types[par2].quantity--
         }

     }
 })