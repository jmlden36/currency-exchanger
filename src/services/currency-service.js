export default class CurrencyService {
  static getCurrency()  {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
      .then(function(response)  { 
        if(!response.ok && response.statusText === "") {    
          return response.json(); 
        } else if (response.ok) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }        
      })
      .catch(function(error) {      
        return error;
      });
  }
}