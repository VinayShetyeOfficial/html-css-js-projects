# Cryptocurrency Website HomePage Design

![image](https://github.com/VinayShetyeOfficial/Html_Css_JS_Projects/assets/100470361/d3356155-17b6-4e6a-b472-17bbbbaa189b)

### Links
Live Site URL: [Preview](https://664feca64d7a5fb22babace2--ornate-cascaron-b6fa79.netlify.app/)

## Description
The `Cryptocurrency Website Design` is a sleek and modern homepage design that dynamically displays live cryptocurrency prices. Utilizing an API call to CoinGecko, it fetches and presents real-time price information for popular cryptocurrencies like Bitcoin, Ethereum, and Dogecoin.

## Features
- **Live Price Updates**: Connects to the CoinGecko API to display updated prices of cryptocurrencies in USD.
- **Simple and Clean Design**: Focuses on user experience with an intuitive layout.
- **Responsive Layout**: Ensures a seamless experience across various devices and screen sizes.
- **API Integration**: Demonstrates how to integrate third-party APIs into a web project.

## Installation
To set up the website on your local machine:
1. Clone or download this repository.
2. Navigate to the project directory.
3. Open the `index.html` file in a web browser to view the website.

## Usage
To fetch the live prices of cryptocurrencies, make an API call to:
```javascript
fetch('https://api.coingecko.com/api/v3/simple/price?ids=Bitcoin%2CEthereum%2CDogecoin&vs_currencies=usd'){
  .then(response => response.json())
  .then(data => console.log(data));
}
```


## Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

## License
This project is open-source and available for anyone to explore, learn from, and contribute to.
Feel free to customize the content and structure according to your preferences. <br><br> Happy coding! 😊
