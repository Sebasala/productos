const formatAsPrice = num => "$" + num.toLocaleString("en", {style: 'decimal'});

export default formatAsPrice;