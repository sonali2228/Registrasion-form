document.addEventListener('DOMContentLoaded', reload)
function reload(e)
{   
    axios.get("https://crudcrud.com/api/63249559f9554d179385aae28cdf8f06/userDetails").
    then(displayData =>
        {
            for(let i=0; i<displayData.data.length; i++)
            {
                showOutput(displayData.data[i])
            }
        })
}
let getCallBtn = document.getElementById('clicked')
getCallBtn.addEventListener('click', postUserData)
function postUserData(event01)
{   
    event01.preventDefault()
    console.log('Button is working')
    let canName = document.getElementById('fname').value
    let canEmail = document.getElementById('email').value              
    let canPhone = document.getElementById('phone').value
    let canTime = document.getElementById('birthdaytime').value
    let userObj = {"Name": canName, "Email":canEmail,"Phone":canPhone,"Time":canTime}
    function addUserToCrudCrud()
    {
        axios.post("https://crudcrud.com/api/63249559f9554d179385aae28cdf8f06/userDetails", userObj)
    }
    addUserToCrudCrud()
    showOutput(userObj)
}
function showOutput(obj)
{

    let mainClass = document.getElementById('users')
    let childClass = document.createElement('li')
    childClass.textContent = `${obj.Name}  -  ${obj.Email}  -  ${obj.Phone}  -  ${obj.Time}`
    mainClass.append(childClass)
    let editBtn = document.createElement('button')
    editBtn.textContent = 'Edit'
    editBtn.style.backgroundColor = 'green'
    childClass.appendChild(editBtn)
    let delBtn = document.createElement('button')
    delBtn.textContent = 'Delete'
    delBtn.style.backgroundColor = 'red'
    childClass.appendChild(delBtn)
    delBtn.addEventListener('click', ()=>
    {
        if(confirm('Delete User Info?'))
            {
                axios.get('https://crudcrud.com/api/63249559f9554d179385aae28cdf8f06/userDetails')
                .then(deleteObj =>
                    {
                        let results = [];

                        let toSearch = obj.Email;

                        for(var i=0; i<deleteObj.data.length; i++) {
                        for(key in deleteObj.data[i]) {
                            if(deleteObj.data[i][key].indexOf(toSearch)!=-1) {
                            results.push(deleteObj.data[i]);
                            }
                        }
                        }
                        let delId = results[0]._id
                        console.log(delId)
                        let delUrl = `https://crudcrud.com/api/63249559f9554d179385aae28cdf8f06/userDetails/${delId}`
                        console.log(delUrl)
                        axios.delete(delUrl)

                    })


                mainClass.removeChild(childClass)


            }
             }
             )
    editBtn.addEventListener('click', ()=>
    {   


        let newName = prompt('Add Name')
        let newEmail = prompt('Add Email')
        let newPhone = prompt('Add Phone Number')
        let newTime = prompt('Add Meeting Time','YYYY-MM-DD HH:MM')
        childClass.textContent = `${newName}  -  ${newEmail}  -  ${newPhone}  -  ${newTime}`          
        let obj01 = {Name:newName,Email:newEmail,Phone:newPhone,Time:newTime}
        childClass.append(delBtn)
        childClass.appendChild(editBtn)
             })
         }