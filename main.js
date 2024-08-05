// lower case
var personName = "hyderabad";
console.log("lowercase:", personName.toUpperCase());
// upper case
console.log("uppercase:", personName.toLocaleUpperCase());
// title case
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toLowerCase(); }));
