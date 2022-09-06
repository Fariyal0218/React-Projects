import React,{useEffect} from 'react'
import axios from 'axios'

function MyForm(){

    const studentObj={
        "firstName":"",
        "lastName":"",
        "gender":"",
        "dob":"",
        "phonenumber":"",
        "email":"",
        "address":"",
        "password":"",
        "confirmpassword":""
    }

    const [student,setStudent]=React.useState(studentObj)
    const [users,setUsers]=React.useState([])

    const onValueChange=(event)=>{
         console.log(event.target);
         setStudent({...student,[event.target.name]:event.target.value})
    }

    const user={
        userId:1,
        title:"Demo Title",
        body:"Demo Content"
    }

    const displayData=(e)=>{
        e.preventDefault()

        console.log(student);
        
        document.getElementById("myform").reset()
        console.log(student);
    }
    const[value,setValue]=React.useState(0)

    const getData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(res=>{
            console.log(res);
            setUsers(res)
        })
}
const changeValue=()=>{
    setValue(value+1)
}

return(
    <div>
        <h2>Register Here</h2>
        <form onSubmit={displayData} id="myform">
            <div>
            <label> FirstName : </label>
            <input type="text" name="firstName" onChange={onValueChange} required/>

            </div>
            <br/>

            <div>
            <label> LastName : </label>
            <input type="text" name="lastName" onChange={onValueChange} required/>
            </div>
            <br/>

            <div>
                <label>Gender :</label>
                
                <input type='radio' name='gender' onChange={onValueChange}  required/>
                <span>Female</span>
                 

                 <input type='radio' name='gender' onChange={onValueChange} required/>
                 <span>Male</span>
                   

                <input type='radio' name='gender' onChange={onValueChange} required/>
                <span>Other</span>
              
            </div>
            <br/>

            <div>
                <label>DOB :</label>
                <input type='date' name='dob' onChange={onValueChange} required/>
            </div>
            <br/>

            <div>
                <label>Phone Number : </label>
                <input type='number' name='phonenumber' onChange={onValueChange} required/>
            </div>
            <br/>

            <div>
            <label> Email : </label>
            <input type="text" name="email" onChange={onValueChange} required/>
            </div>
            <br/>
            
            <div>
            <label> Address : </label>
            <input type="text" name="address" onChange={onValueChange} required/>
            </div>
            <br/>

            <div>
            <label>Password</label>
            <input type='password' name='password'  onChange={onValueChange} required/>
                
            </div>
            <br/>

            <div>
            <label>confirm Password</label>
            <input type='password' name='confirmPassword'  onChange={onValueChange} required/>
            </div>
            <br/>

            <div>
            <input type="submit" value="Submit" />
            </div>
            <br/>        
        </form>
       
        <button type="button" onClick={getData}>Get Data</button>
        <button type="button" onClick={changeValue}>Change Value</button>


        <ul>
            {users.map((user)=>(
                <li>{user.name}</li>
            ))}
        </ul>
      
    </div>
    
)
}

export default MyForm

