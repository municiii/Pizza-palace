function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.orders = [];
  }
  
  function Order(type,si) {
    this.pizzaType = type;
    this.pizzaSize = size;
    this.pizzaCrust = crust;
    this.pizzaToppings=toppings;
  }
  Order.prototype.price = function(){
    let price =0;
    let Total =0;
    if (this.size === "Large"){
     price =1300;
     Total = price + 300;
     Total = Total * this.number;
    }
    else if (this.size === "Medium"){
        price = 900;
        Total = price + 300;
        Total =Total * this.number;
    }
    else if(this.size ==="small"){
        price=600
        Total = price + 300;
        Total = Total * this.number;
    }
    else alert("Enter your sizes ")
  }
  Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
  }
  
  Order.prototype.fullOrder = function() {
    return this.pizzaType + ", " + this.pizzaSize + ", " + this.pizzaCrust + "," + this.pizzaToppings;
  }
  
  function resetFields() {
      $("input#new-first-name").val("");
      $("input#new-last-name").val("");
      $("input#type").val("");
      $("input#size").val("");
      $("input#crust").val("");
      $("input#toppings").val("");
      $("input.new-number").val("");
  }
  
  // user interface logic
  $(document).ready(function() {
    
    $("#add-order").click(function() {
      $("#new-info").append('<div class="new-info">'+   
                              '<div class="form-group">'+
                                '<label for="new-type">Pizza Type</label>'+
                                '<select id="size">'+
                                    '<option value="Hawaiian">Hawaiian pizza</option>'+
                                    '<option value="Borewors">Borewors pizza</option>'+
                                    '<option value="deluxe">Meat-deluxe pizza</option>'+
                                    '<option value="periperi">Periperi pizza</option>'+
                                    '<option value="veggie-periperi">Veggie-periperi</option>'+
                                    '<option value="veggie-hawaiian">Veggie-hawaiian</option>'+
                                '</select>'+
                              '</div>'+
                              '<div class="form-group">'+
                                '<label for="new-size">Pizza Size</label>'+
                                '<select id="size">'+
                                    '<option value="small">Small  @ 600</option>'+
                                    '<option value="medium">Medium @800</option>'+
                                    '<option value="large">Large @1000</option>'+
                                '</select>'+
                              '</div>'+
                              '<div class="form-group">'+
                                '<label for="new-crust">Pizza crust</label>'+
                                '<select id="crust">'+
                                    '<option value="crispy">Crispy @ 200</option>'+
                                    '<option value="stuffed">Stuffed @200</option>'+
                                    '<option value="gluten">Gluten-free @200</option>'+
                                '</select>'+
                              '</div>'+
                              '<div class="form-group">'+
                                '<label for="new-toppings">Toppings</label>'+
                                '<select id="toppings">'+
                                    '<option value="mushrooms">mushrooms</option>'+
                                    '<option value="bacon">bacon</option>'+
                                    '<option value="cheese">extra-cheese</option>'+
                                '</select>'+
                              '</div>'+
                              '<h5>Pick the number of pizzas you would like:</h5>'+
                              '<input type="number" class="form-control number" min="1">'+
                            '</div>');
    });
  
    $("form#new-contact").submit(function(event) {
      event.preventDefault();
  
      var inputtedFirstName = $("input#new-first-name").val();
      var inputtedLastName = $("input#new-last-name").val();
      var newContact = new Contact(inputtedFirstName, inputtedLastName);
  
      $(".new-info").each(function() {
        var inputtedType = $(this).find("input.type").val();
        var inputtedSize = $(this).find("input.size").val();
        var inputtedCrust=$(this).find("input.crust").val();
        var inputtedToppings = $(this).find("input.Toppings").val();
        var newInfo = new Info(inputtedType, inputtedSize, inputtedCrust, inputtedToppings)
        newContact.orders.push(newInfo)
      });
  
      $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
  
      $(".contact").last().click(function() {
        $("#show-contact").show();
        $("#show-contact h2").text(newContact.fullName());
        $(".first-name").text(newContact.firstName);
        $(".last-name").text(newContact.lastName);
        $("ul#order").text("");
        newContact.orders.forEach(function(order) {
          $("ul#order").append("<li>" + order.fullOrder() + "</li>");
        });
      });
  
      resetFields();
  
    });
  });
  