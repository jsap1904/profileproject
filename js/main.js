//get users data
function getUserData() {
	//create var to display results to later
	var userPhone = document.getelementById('results)')

	//store values for user first and last name, email and phone
	var userFirst = document.getelementById('userFname').value
	var userLast = document.getelementById('userLname').value
	var userEmail = document.getelementById('userEmail').value
	var userPhone = document.getelementById('userPhone').value

	//store elements by class for radios and select
	var userGenderEls = document.getelementById('userGender')
	var userBeerEls = document.getelementById('userBeer')
	var userBirthEls = document.getelementById('userBirth')

	//create vars to store gender, color and birth later
	var userGender, userColor, userBirth

	/*
	FIRST NAME
	*/
	if (userFirst == "") {
			//add a class of failure to results if no user first name value
			results.className="failure"
			//update the text content of results
			results.textContent = "you forgot to add your first name"
			//stop function if no answer
			return
	}
/* 
LAST NAME
*/
if (userLast == "") {
	//add class of failure to results if no user last name value
	results.className="failure"
	//update the text content of results
	results.textContent = "you forgot to add your last name"
	//stop function if no answer
	return
}
/*
GENDER
*/
//loop through all elements with class="userGender"
for(var i=0;i < userGenderEls.length;i++) {
	//if the radio was selected by the user, do this
	if(userGenderels[i].checked) {
		//sets value of answer 3 to the vaue in the radio item
		userGender = userGenderEls[i].value
		console.log(userGender)
	}
}
//stop function if no data is there for gender
if (userGender == undefined) {
	//add a class of faulre to results if no user gender value
	results.className= "failure"
	//update the text content of results
	results.textContent = "you forgot to select a gender"
	// stop function if no answer
	return

}
/*
EMAIL
*/
if (userEmail == "") {
	//add a class of failure to the results if no user email value

results.className = "failure"
//update the text content of results
results.textContent= "you forgot to add your email"
//stop function if no answer
return

}
