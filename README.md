jquery.distinct
===============

$.distinct is a jQuery plugin that returns the unique values (string, number) of an array.

Example:
```javascript
var arrayWithRedundantValues = ['de', 'de', 'en', 'fr', 'en', 'es', 'it'];
$.distinct(arrayWithRedundantValues); // ['de', 'en', 'fr', 'es', 'it']
```
