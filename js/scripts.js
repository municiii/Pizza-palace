$("document").ready(function(){
  function order(type,size,toppings,crust,number){
    this.type = type;
    this.size = size ;
    this.toppings =toppings;
    this.crust = crust;
    this.number =number;
  }
  order.prototype.price = function(){
    let price = 0;
    if (this.size === "large"){
      price = 1000;
      price = price + 200 ;
      price = price* this.number
    }
    else if (this.size === "small"){
      price = 500;
      price = price + 200;
      price= price*this.number;
    }
    else if (this.size === "medium"){
      price = 800;
      price = price + 200;
      price = price * this.number;
    }
    else alert("enter your sizes correctly")
    var delivery = prompt("Do you want it delivered yes or no")
    if (delivery === "yes"){
      alert("You'll have to add ksh 250 to your order");
      price = price+ 250;
      var locale = prompt("Please enter your Locale")
      alert("Your order will be delivered shortly at " +locale +" .")
    }
    else alert("Thank you for choosing Pizza Palace,We are expecting in 20-30 mins ")
  
    $("#order").text("Your order is a "+this.type+ " and you size is " +this.size + " your total price is "+ price)
  }
  $(".calc").click(function(){
  var type = $("#type").val();
  var size =$("#size").val() ;
  var toppings = $(".toppings").val();
  var crust = $(".crust").val();
  var number = $(".new-number").val() ;
  var myOrder = new order(type,size,toppings,crust,number)
  myOrder.price()
  $(".show-order").show()
  })
})
