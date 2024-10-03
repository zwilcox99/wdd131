// Get the current year
const currentYear = new Date().getFullYear();

// Output the current year to the element with id "currentyear"
document.getElementById('currentyear').textContent = currentYear;

// Get the last modified date of the document
const lastModified = document.lastModified;

// Output the last modified date to the element with id "lastModified"
document.getElementById('lastModified').textContent = lastModified;