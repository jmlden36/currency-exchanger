import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './services/currency-service';

function clearFields() {
  $('#country-code').val("");
  $('#usd-amount').val("");
  $('show-conversion-rate').val("");
  $('show-conversion-amount').val("");
}

function dollarConvert(userDollarInput, conversionRate) {
  let convertedDollar = userDollarInput * conversionRate;
  return convertedDollar;
}

function countryName(counCode) {
  if (counCode === "AED") {
    let countryName = "United Arab Emirates"
    return countryName;
  } else {
    console.log("what?");
  }
}

function getElements(response, countryCode, dollarAmount) {  
  let countryCodeInput = countryCode;
  let dollarAmountInput = dollarAmount;
  let conversionRate = response.conversion_rates[countryCodeInput];
  let convertedDollars = dollarConvert(dollarAmountInput, conversionRate);
  let countryNamePicked = countryName(countryCodeInput);
  console.log(countryNamePicked);
  if (response.conversion_rates) {     
    console.log("how");
    $('.show-conversion-rate').text(`The conversion rate is ${conversionRate}`); 
    $('.show-conversion-amount').text(`The converted dollar amount in ${countryNamePicked} is $${convertedDollars}`);   
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function () {
  $('#currency-conversion').submit(function (event) {
    let countryCodeInput = $("input:radio[name=countryChoice]:checked").val();           
    let dollarAmountInput = parseInt($('#usd-amount').val());
    console.log(countryCodeInput);
    event.preventDefault();    
    clearFields();
    CurrencyService.getCurrency()
      .then(function(response) {
        console.log(response);
        getElements(response, countryCodeInput, dollarAmountInput);
      });
  });
});


