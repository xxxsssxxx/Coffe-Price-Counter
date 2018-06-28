 var app = new Vue({
     el: '#app',
     data: {
         title: ' Count Your Coffe Price ',
      	 totalPrice: 0,
         items: [{
                 name: "Espresso",
                 types: [{
                     name: 'small',
                     quantity: 0,
                     price: 1.50
                 }]
             },
             {
                 name: "Latte",
                 types: [{ name: 'small', quantity: 0,price: 1.99 },
                     { name: 'medium', quantity: 0,price: 2.99 },
                     { name: 'large', quantity: 0,price: 3.99 }
                 ]
             },
             {
                 name: "Cappucino",
                 types: [{ name: 'small', quantity: 0,  price: 1.75},
                     { name: 'medium', quantity: 0,  price: 2.75},
                     { name: 'large', quantity: 0 , price: 3.75 }
                 ]
             }
         ]
     },
     methods: {
         countTotalAdd(par, par2){
         	let unroundedPrice =  this.totalPrice + this.items[par].types[par2].price
         	this.totalPrice = (+unroundedPrice.toFixed(10))

         },
         addCoffe(par, par2) {
            this.items[par].types[par2].quantity++
            this.countTotalAdd(par,par2)
         },
         countTotalDel(par, par2){
         	let unroundedPrice =  this.totalPrice - this.items[par].types[par2].price
         	this.totalPrice = (+unroundedPrice.toFixed(10))

         },
         deleteCoffe(par, par2){
         	this.items[par].types[par2].quantity--
         	this.countTotalDel(par,par2)
         },
         addByInput(par, par2){
         	let unroundedPrice = this.totalPrice + (this.items[par].types[par2].quantity * this.items[par].types[par2].price)
         	this.totalPrice = (+unroundedPrice.toFixed(10))
         }

     }
 })