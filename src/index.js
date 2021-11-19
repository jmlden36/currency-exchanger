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

function getElements(response) {
  if (response.conversion_rates) {
    console.log("how");
    $('.show-conversion-rate').text(`The conversion rate is ${response.conversion_rates.USD}`);    
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function () {
  $('#currency-conversion').submit(function (event) {
    event.preventDefault();
    console.log("what");
    // let countryCode = $('#country-code').val();
    clearFields();
    CurrencyService.getCurrency()
      .then(function(response) {
        console.log(response);
        getElements(response);
      });
  });
});


