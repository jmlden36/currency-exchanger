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

function getElements(response, countryCode) {  
  let countryCodeInput = countryCode
  let conversionRate = response.conversion_rates[countryCodeInput];
  if (response.conversion_rates) {     
    console.log("how");
    $('.show-conversion-rate').text(`The conversion rate is ${conversionRate}`);    
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function () {
  $('#currency-conversion').submit(function (event) {
    let countryCodeInput = $('#country-code').val();
    console.log(countryCodeInput);
    event.preventDefault();    
    clearFields();
    CurrencyService.getCurrency()
      .then(function(response) {
        console.log(response);
        getElements(response, countryCodeInput);
      });
  });
});


