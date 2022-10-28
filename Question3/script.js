let btnSubmit = document.getElementById("btnSubmit");
let btnReset = document.getElementById("btnReset");
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let address = document.getElementById("address");
let email = document.getElementById("email");
let radio_male = document.getElementById("radio_male");
let radio_female = document.getElementById("radio_female");
let number = document.getElementById("number");
let dropd = document.getElementById("dropD");



// Example of valid email id

// mysite@ourearth.com
// my.ownsite@ourearth.org
// mysite@you.me.net

//------------------------


// Example of invalid email id

// mysite.ourearth.com [@ is not present]
// mysite@.com.my [ tld (Top Level domain) can not start with dot "." ]
// @you.me.net [ No character before @ ]
// mysite123@gmail.b [ ".b" is not a valid tld ]
// mysite@.org.org [ tld can not start with dot "." ]
// .mysite@mysite.org [ an email should not be start with "." ]
// mysite()*@gmail.com [ here the regular expression only allows character, digit, underscore, and dash ]
// mysite..1234@yahoo.com [double dots are not allowed]

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return (true);
  }else{
    return (false);
  }
    
}



function isEmpty(text) {
    const REGEXP = /^$/;
    return REGEXP.test(text);
}



btnSubmit.addEventListener("click", (e)=> {
    e.preventDefault();
    try {
        if (isEmpty(firstname.value)) throw `Firstname is required`; 
        if (isEmpty(lastname.value)) throw `Lastname is required`;
        if (isEmpty(address.value)) throw `Address is required`;

        if (!(radio_female.checked == false & radio_male.checked == false) == 0) throw `Gender is required. Select One`;

        if (isEmpty(email.value)) throw `Email is required`;
        if (!ValidateEmail(email.value)) throw `Invalid Email format`;

        if (isEmpty(number.value)) throw `Mobile Number is required`;
        if (isEmpty(dropd.value)) throw `Location is required`;
    } catch (error) {
        alert(error);
    }
});

btnReset.addEventListener("click", e => {
    e.preventDefault()
    firstname.value = "";
    lastname.value = "";
    address.value = "";
    email.value = "";
    number.value = "";
    number.value = "";
    dropd.value = "";
    radio_female.checked = false;
    radio_male.checked = false;

});