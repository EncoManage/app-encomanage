import{a as n}from"./chunk-BEAOGL5K.js";import{ba as s,ga as o}from"./chunk-E7TWR5JV.js";var c=(()=>{let e=class e{constructor(r){this.http=r,this.apiUrl="http://localhost:3000/orders",this.order={shipping_address:"",pickup_address:"",express_shipping:!1,tipo_encomienda:"",price:0,instrucciones:""},this.orders=[],this.randomValue=Math.floor(Math.random()*100)+1}setOrder(r){this.order=r,this.calculatePrice(r.express_shipping)}getOrder(){return this.order}setInstrucciones(r){this.order.instrucciones=r}getInstrucciones(){return this.order.instrucciones}setPrice(r){this.order.price=r}getPrice(){return this.order.price}calculatePrice(r){let t=0;return this.order.tipo_encomienda==="Mudanza"?t=500+this.randomValue:this.order.tipo_encomienda==="Encomienda de comida"?t=20+this.randomValue:this.order.tipo_encomienda==="Encomienda regular"&&(t=20+this.randomValue),r&&(t+=20),this.order.price=t,t}createOrder(r){return this.http.post(this.apiUrl,r)}addOrder(r){this.createOrder(r).subscribe(t=>{console.log("Order added:",t)})}getOrders(){return this.http.get(this.apiUrl)}getOrderss(){return[this.order]}addInstruccion(r){this.order.instrucciones=r}getOrderDetails(r){return this.http.get(`${this.apiUrl}/${r}`)}getAllOrders(){return this.http.get(this.apiUrl)}sendOrdersToApi(r){return this.http.post(this.apiUrl+"/update",r)}};e.\u0275fac=function(t){return new(t||e)(o(n))},e.\u0275prov=s({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();export{c as a};
