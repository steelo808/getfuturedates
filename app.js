console.log("javascript connected successfully")


// connecting to DOM

const getExpirationDates = () =>{
    //convert input date string to Date object

    let expirationDateObj = new Date(inputValue);

    //Calculate future dates
    let formattedExpirationDates = {
        '3 days':new Date(expirationDateObj.getTime() + 3 * 24 * 60 * 60 * 1000),
        '4 days':new Date(expirationDateObj.getTime() + 4 * 24 * 60 * 60 * 1000),
        '7 days':new Date(expirationDateObj.getTime() + 7 * 24 * 60 * 60 * 1000),
        '30 days':new Date(expirationDateObj.getTime() + 30 * 24 * 60 * 60 * 1000)
    };

    for(const[key,value] of Object.entries(formattedExpirationDates)){
        formattedExpirationDates[key] = value.toLocaleDateString('en-us', {weekday:'long', month:'long', year:'numeric' });
    }

    return formattedExpirationDates;
};

const displayExpirationDates = (event) =>{
    event.preventDefault();
    
    try{
        const expirationDates = getExpirationDates(inputValue);
        const outputDiv = document.querySelector('#expirationDateOutput');
        outputDiv.innerHTML = '';
        
        for (const [key, value] of Object.entries(expirationDates)) {
            outputDiv.innerHTML += `<h3> ${key}: ${value}</h3>`
        }

    }catch (error){
        alert(`This is whats going wrong: ${error}`)
    }
}
const inputValue = document.querySelector("#current-date").value;
document.querySelector("#submit-btn").addEventListener('click', () =>{
    console.log(inputValue)
})






//execution starts


