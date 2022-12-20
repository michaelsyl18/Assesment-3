console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log(alert("Form has been submitted sucessfully!"))
	
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const element = document.querySelector('img')
element.addEventListener('mouseover', function(){ window.alert('Stunningly perfect!') })