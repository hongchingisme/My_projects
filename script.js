

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
          $("#amount-two").val((AmountOne * rate).toFixed(2));
          $('#rate').text(`1 ${CurrencyOne} = ${rate} ${CurrencyTwo}  `)
        }       
      })
    }

    updateprice ()
    
    $("#currency-two").change(function (e) { 
      updateprice ();
    });

    $("#amount-two").change(function (e) { 
      updateprice ();
    });

    $("#amount-one").change(function (e) { 
      updateprice ();
    });

    $("#currency-one").change(function (e) {
      updateprice ();
    })

    $('#swap').click(function (e) { 
      var temp =  $('#currency-one').val()
      $('#currency-one').val($('#currency-two').val())
      $('#currency-two').val(temp);
      updateprice ()
      
    });
    
    updateprice ()
