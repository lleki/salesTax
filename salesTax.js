var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {



}

function taxRate(companyName, province){

let company = "";
let rate = {};

   for( let x = 0; x < companySalesData.length ; x++){
     company = companySalesData[x].name;
     prov = companySalesData[x].province;
        if( (companyName === "Telus") && ( province === "SK" ) ){
            rate[company] = salesTaxRates["SK"];
        }else{
            rate[company] = salesTaxRates[province];
        }
  }
  console.log("Rate of company is " + rate[company]);
}

taxRate("Telus", "BC");


function numberOfSales(companyName){

let sales = {};
//go through string to find all unique chars
for( let x = 0; x < companySalesData.length ; x++){

  let companyName = companySalesData[x].name;
    if(sales[companyName] === undefined){
      sales[companyName] = companySalesData[x].sales;
    }else{
      let subArray = companySalesData[x].sales;
      sales[companyName] = sales[companyName].concat(subArray);
    }
}
let salesArray = sales[companyName];
let reducer = (accu, currentValue) => accu + currentValue;

console.log(salesArray.reduce(reducer)); //returns an array of sales for the company
}


var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/







