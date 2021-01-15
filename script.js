var CurrencyOne = $("#currency-one");
var CurrencyTwo = $('#currency-two').val();
var AmountOne = $("#amount-one");
var AmountTwo = $("#amount-two");



    $.ajax({
       
        url: "https://v6.exchangerate-api.com/v6/97f7cb6c49c8bfb9aceb3eda/latest/USD",
        method: "GET",
        dataType: "json",
        success: function(re) {
            $("#rate").text(
                re.conversion_rates[CurrencyTwo]
                );
            
        }
      })

