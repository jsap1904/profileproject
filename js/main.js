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
