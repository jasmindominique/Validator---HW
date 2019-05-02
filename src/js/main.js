
console.log(`Hello Jasmin, input validation.`);


//'.class' is for class names. class= is an attribute
//'#id-name' is for id names    id= is an attribute // name= is an attribute
//'[name='inputName']' for specific input attributes (wrapped in '[square brackets in string]')
//inputName is the value of name attribute.

let userCode = {
	
	secretCode: 'tunes';
}

const isValid = new validator('.puppyForm', '[name=puppyName]', userCode );


