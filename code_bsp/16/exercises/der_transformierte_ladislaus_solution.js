let transformName = (firstNames, lastname) => 
	firstNames.map((name) => name.charAt(0) + '.')
	.join(' ') + ' ' + lastName;


console.log(transformName(['Ladislaus', 'Coolio', 'Barry'], 'Jones')););
