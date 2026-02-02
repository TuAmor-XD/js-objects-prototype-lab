const book = {
  title: "JavaScript: The Good Parts",
  author: "Douglas Crockford",
  year: 2008,
  isbn: "978-0596517748"
};

function displayProperty(obj, propertyName) {
  console.log(obj[propertyName]);
}

function updateProperty(obj, propertyName, newValue) {
  obj[propertyName] = newValue;
}

displayProperty(book, "title");
updateProperty(book, "year", 2024);
displayProperty(book, "year");
