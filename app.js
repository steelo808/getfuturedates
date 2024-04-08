console.log("javascript connected successfully")


// connecting to DOM



const getExpirationDates = (inputValue) =>{
    //convert input date string to Date object

    let expirationDateObj = new Date(inputValue);

    //Calculate future dates
    let formattedExpirationDates = {
        '3 days':new Date(expirationDateObj.getTime() + 3 * 24 * 60 * 60 * 1000),
        '4 days':new Date(expirationDateObj.getTime() + 4 * 24 * 60 * 60 * 1000),
        '7 days':new Date(expirationDateObj.getTime() + 7 * 24 * 60 * 60 * 1000),
        '30 days':new Date(expirationDateObj.getTime() + 30 * 24 * 60 * 60 * 1000)
    };

    for(const[key, value] of Object.entries(formattedExpirationDates)){
        formattedExpirationDates[key] = value.toLocaleDateString('en-us', {day: 'numeric', weekday:'long', month:'long', year:'numeric' });
    }

    return formattedExpirationDates;
};

const displayExpirationDates = () =>{ 
    let date = document.querySelector('#current-date');
    let selectedDateValue = date.value;
    try{
        const expirationDates = getExpirationDates(selectedDateValue);
        const outputDiv = document.querySelector('#expirationDateOutput');
        outputDiv.innerHTML = '';
        
        for (const [key, value] of Object.entries(expirationDates)) {
            outputDiv.innerHTML += `<h3> ${key}: ${value}</h3>`
        }

    }catch (error){
        alert(`This is whats going wrong: ${error}`)
    }

    document.querySelector("#submit-btn").addEventListener('click',displayExpirationDates)
    
    

   
}


displayExpirationDates()




//execution starts


