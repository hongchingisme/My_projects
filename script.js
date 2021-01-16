function updateprice (){

var CurrencyOne = $("#currency-one").val();
var CurrencyTwo = $('#currency-two').val();
var AmountOne = $("#amount-one").val();
var AmountTwo = $("#amount-two").val();
var rateText = $('#rate') 



    $.ajax({
       
        url: "https://v6.exchangerate-api.com/v6/97f7cb6c49c8bfb9aceb3eda/latest/USD",
        method: "GET",
        dataType: "json",
        success: function(re) { 
          
          var price = rateText.text(re.conversion_rates[CurrencyTwo]); 
          price = AmountOne * price ;
          AmountTwo = price ;
        }
        
      })

    }

    updateprice ()
    
    $("#currency-two").change(function (e) { 
      e.preventDefault();

      updateprice ();
      
    });