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

function currencyName(counCode) {
  let currencyName = ""
  if (counCode === "AED") {
    currencyName = "UAE Dirhams"    
  } else if (counCode === "AFN") {
    currencyName = "Afghan Afghanis";    
  } else if (counCode === "ALL") {
    currencyName = "Albanian Leks";  
  } else if (counCode === "AMD") {
    currencyName = "Armenian Drams";    
  } else if (counCode === "ANG") {
    currencyName = "Netherlands Antillian Guilders";    
  }
  return currencyName;
}

function countryName(counCode) {
  let countryName = ""
  if (counCode === "AED") {
    countryName = "United Arab Emirates"    
  } else if (counCode === "AFN") {
    countryName = "Afghanistan";    
  } else if (counCode === "ALL") {
    countryName = "Albania";  
  } else if (counCode === "AMD") {
    countryName = "Armenia";    
  } else if (counCode === "ANG") {
    countryName = "Netherlands Antilles";    
  }
  return countryName
}

function getElements(response, countryCode, dollarAmount) {  
  let countryCodeInput = countryCode;
  let dollarAmountInput = dollarAmount;
  let conversionRate = response.conversion_rates[countryCodeInput];
  let convertedDollars = dollarConvert(dollarAmountInput, conversionRate);
  let countryNamePicked = countryName(countryCodeInput);
  let currencyNamePicked = currencyName(countryCodeInput);
  console.log(countryNamePicked);
  if (response.conversion_rates) {     
    console.log("how");
    $('.show-conversion-rate').text(`The conversion rate is $1 USD : $${conversionRate} ${currencyNamePicked}`); 
    $('.show-conversion-amount').text(`$${dollarAmount} USD in ${countryNamePicked} is $${convertedDollars} ${currencyNamePicked}`);   
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


