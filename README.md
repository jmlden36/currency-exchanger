# Currency Exchanger

#### Currency Exchanger is an interactive webpage where a user can convert US dollars into other currency.

#### By Matt Luker

## Technologies Used

* _JavaScript_
* _CSS_
* _HTML_
* _webpack_
* _npm_
* _jest_
* _babel_
* _Markdown_
* _eslint_
* _Git_
* _dotenv-webpack_
* _ExchangeRate-API_

## Description

* Currency Exchanger is an interactive webpage that calls on the ExchangeRate API for daily exchange rates world wide and allows a user to pick from 5 different currencies to find the US dollar exchange rate for that currency.  The user must also pick an amount of money to convert into the chosen currency and then the page will display the conversion rate and the converted money amount.  

## Setup/Installation Requirements

*  Note: The {} symbols are to indicate what code needs to be written.  Do not use the {} symbol in your code
* _Open your terminal and use the code {cd ~/Desktop} to navigate to your computer's desktop._
* _In your terminal type the code {git clone https://github.com/jmlden36/currency-exchanger.git} to clone the Currency Exchanger repository onto your desktop._
* _Open currency-exchanger in your code editor of choice._
* _In your terminal navigate to the root directory of currency-exchanger by typing {cd currency-exchanger}._
* _Create a .env file in the root directory of currency-exchanger by typing {touch .env}._
* _Now open your web browser and go to [https://www.exchangerate-api.com/](https://www.exchangerate-api.com/), enter your email address and click "Get Free Key!" to generate a free key for the ExchangeRate-API._
* _You'll be prompted to create an account with your email, first name and a password. Agree to the terms of use and click "Get Started!"_
* _At this point, you'll be able to access a dashboard that includes your API key as well as your remaining API calls for the month._
* _Copy your new api key and paste it into your .env file and preface it with_ {API_KEY=}_.  Your .env file should contain something that looks like this_ {API_KEY=yOurAPiKeyHeRE}_._
* _Make sure to save the .env file._
* _In your terminal type {npm install}._
* _Next type {npm run build}._
* _Next type {npm run start} to see the page in your browser._
* _Choose a currency type and enter in a number for the dollar amount to be converted then click "Get Current Conversion" to see the exchange rate and converted dollar amount._
* _Choose a different currency and different amount to see other exchange rates and converted dollar amounts._


## Known Bugs

* _There are no known issues with Currency Exchanger_
* _If you have any issues or notice any bugs please email [jamesmattluker@gmail.com](mailto:jamesmattluker@gmail.com)._

## License

_[MIT](LICENSE.txt)_

## Contact Information

* _For any questions or comments please email Matt Luker [jamesmattluker@gmail.com](mailto:jamesmattluker@gmail.com)._

Copyright (c) _2021_ _James Matt Luker_