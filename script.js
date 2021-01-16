

function updateprice (){

var CurrencyOne = $('#currency-one').val();
var CurrencyTwo = $('#currency-two').val();
var AmountOne = $("#amount-one").val();





    $.ajax({
       
        url: `https://v6.exchangerate-api.com/v6/97f7cb6c49c8bfb9aceb3eda/latest/${CurrencyOne}`,
        method: "GET",
        dataType: "json",
        success: function(re) { 
          
          const rate = re.conversion_rates[CurrencyTwo];
          //console.log(rate);
          $('#rate').append(`1 ${CurrencyOne} = ${rate} ${CurrencyTwo}`);
          $("#amount-two").val((AmountOne * rate));


        }

    
        
      })

    }

    updateprice ()
    
    $("#currency-two").change(function (e) { 
      e.preventDefault();
      $("#rate").html("");
      updateprice ();
      
    });

    $("#amount-two").change(function (e) { 
      e.preventDefault();
      $("#rate").html("");
      updateprice ();
      
    });

    $("#amount-one").change(function (e) { 
      e.preventDefault();
      $("#rate").html("");
      updateprice ();
      
    });

    $("#currency-one").change(function (e) {
      e.preventDefault();
      $("#rate").html("");
      updateprice ();
    })


