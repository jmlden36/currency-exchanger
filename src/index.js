import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './services/currency-service';

function notANum(userDollarInput) {  
  if (isNaN(userDollarInput)) {
    return true;
  } else {
    return false;
  }
}

function dollarConvert(userDollarInput, conversionRate) {
  let convertedDollar = userDollarInput * conversionRate;
  return convertedDollar;
}

function currencyName(counCode) {
  let currencyName = "";
  if (counCode === "AED") {
    currencyName = "UAE Dirhams";  
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
  let countryName = "";
  if (counCode === "AED") {
    countryName = "The United Arab Emirates";    
  } else if (counCode === "AFN") {
    countryName = "Afghanistan";    
  } else if (counCode === "ALL") {
    countryName = "Albania";  
  } else if (counCode === "AMD") {
    countryName = "Armenia";    
  } else if (counCode === "ANG") {
    countryName = "Netherlands Antilles";    
  }
  return countryName;
}

function notCurrency(counCode) {  
  if (counCode === "AED") {
    return true;
  } else if (counCode === "AFN") {
    return true;
  } else if (counCode === "ALL") {
    return true;
  } else if (counCode === "AMD") {
    return true;
  } else if (counCode === "ANG") {
    return true;
  } else {
    return false;
  }
}

function clearFields() {  
  $('#usd-amount').val("");
  $('show-conversion-rate').val("");
  $('show-conversion-amount').val("");
}



function getElements(response, countryCode, dollarAmount) {  
  let countryCodeInput = countryCode;
  let dollarAmountInput = dollarAmount;
  if (response.result === "success") {
    let conversionRate = response.conversion_rates[countryCodeInput];
    let convertedDollars = dollarConvert(dollarAmountInput, conversionRate);
    let countryNamePicked = countryName(countryCodeInput);
    let currencyNamePicked = currencyName(countryCodeInput);
    $('.show-conversion-rate').text(`The conversion rate is $1 USD : $${conversionRate} ${currencyNamePicked}`); 
    $('.show-conversion-amount').text(`$${dollarAmount} USD in ${countryNamePicked} is $${convertedDollars} ${currencyNamePicked}`);   
  } else if (response['error-type']) {
    $('.showErrors').text(`There was an error: ${response['error-type']}`);
  } else {
    $('.showErrors').text(`There was an error: Failed to fetch`);
  }
}

$(document).ready(function () {
  $('#currency-conversion').submit(function (event) {
    let countryCodeInput = $("input:radio[name=countryChoice]:checked").val();
    let dollarAmountInput = parseFloat($('#usd-amount').val());
    event.preventDefault();    
    clearFields();
    if (notCurrency(countryCodeInput) === false) {
      $('.show-conversion-rate').text(`That currency does not exist`);
    } else {     
      if (notANum(dollarAmountInput) === false) {
        CurrencyService.getCurrency()
          .then(function(response) {
            getElements(response, countryCodeInput, dollarAmountInput);
          });        
      } else {
        $('.show-conversion-rate').text(``);
        $('.show-conversion-amount').text(`Please input a number to receive a conversion`);
      } 
    }
  });
});


