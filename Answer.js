
      const Adduser = ()=>{

//getting the value from the input field
const email = document.getElementById("email").value
console.log(email);


// getting the name from the email 


const getName = email.split("@") // separate name and gmail.com by using split() property in the string

//splite is the property of the string is convert string to array 

console.log(getName)

const putName = getName[0].toLocaleUpperCase() //name is present in 0 index in the array 
//we have to convert in lowercase to uppercase




const user = document.getElementById("user")
user.innerHTML = `Hi ${putName}`


}
  