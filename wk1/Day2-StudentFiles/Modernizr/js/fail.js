console.log('I do not support the new date picker');

// Use the jQuery Date picker
$('input[type=date]').datepicker({
	dateFormat: 'mm/dd/yy'
});