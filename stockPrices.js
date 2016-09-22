function maxVal( arr ){
  var value = 0;

  arr.forEach( function ( elem ){
    if( elem > value )
    {
      value = elem;
    }
  });

  return value;
}

function stockPrices( priceArr ){
  var profit = -1;

  priceArr.forEach( function ( price, index ){
    var highestPrice = maxVal( priceArr.slice( index + 1 ) );
    var potentialProfit = highestPrice - price;
    if( potentialProfit > 0 && potentialProfit > profit ){
      profit = potentialProfit;
    }
  });
  return profit;
}


console.log( stockPrices( [45, 24, 35, 31, 40, 38, 11] ) );