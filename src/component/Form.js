import React from 'react'

 function Form() {

    const userObj={
        firstName:'',
        middleName:'',
        lastName:'',
        gender:'',
        phoneNo:'',
        address:'',
        email:'',
        courses:'',
        password:'',
        confirmPassword:''
    }
    const [user,setUser]=React.useState(userObj)

    const [registerForm,setRegisterForm]=React.useState([])

    const onChange=(event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }

    const saveData=(e)=>{
        e.preventDefault()
        setRegisterForm([...registerForm,user])
        setUser(userObj)
        
    }
    
    
    return (
        <div>
            <h2>RegisterForm</h2>
            <form onSubmit={saveData}>
                <label>FirstName :</label>
                <input type='text' name='firstName' value={user.firstName} onChange={onChange} required/>
                <br/>

                <label>MiddleName :</label>
                <input type='text' name='middleName' value={user.middleName} onChange={onChange} required/>
                <br/>
            
                <label>LastName : </label>
                <input type='text' name='lastName' value={user.lastName} onChange={onChange} required/>
                <br/>
                <div>
                <label>Gender</label>
                
                <input type='radio' name='gender' value={user.female} checked={true} onChange={onChange}/>
                <span>Female</span>
                 

                 <input type='radio' name='gender' value={user.male} checked={true} onChange={onChange}/>
                 <span>Male</span>
                   

                <input type='radio' name='gender' value={user.other} checked={true} onChange={onChange}/>
                <span>Other</span>
                </div>
                
                <br/>

                <label>PhoneNo:</label>
                <input type='number' name='phoneNo' value={user.phoneNo} onChange={onChange} required/>
                <br/>

                <label>Address: </label>
                <input type='text' name='address' value={user.address} onChange={onChange} required/>
                 <br/>

                 <label>Email:</label>
                <input type='email' name='email' value={user.email} onChange={onChange} required/>
                <br/>
                <label>
                    Select your Course:
                <select  value={user.courses} onChange={onChange}>
                 <option value="be">BE</option>
                 <option value="bca">BCA</option>
                 <option value="bba">BBA</option>
                 <option value="bcs">BCS</option>
                 </select>
                 </label>
                <br/>

                <label>Password</label>
                <input type='password' name='password' value={user.password} onChange={onChange} required/>
                <br/>

                <label>confirmPassword</label>
                <input type='password' name='confirmPassword' value={user.confirmPassword} onChange={onChange} required/>
                <br/>

                <input type='submit' value='Submit'/>


            </form>
            <br/>
            <br/>
            <RegisterForm registerForm={registerForm}/>
        </div>
    )
}
function RegisterForm({registerForm}){

    return(
    <div>
        <table border="1px">
            <tr>
                <th>FirstName</th>
                 <th>MiddleName</th>
                <th>LastName</th>
                <th>Gender</th>
                <th>phoneNo</th>
                <th>Address</th>
                <th>Email</th>
                <th>courses</th>
                <th>Password</th>
                <th>confirmPassword</th>
            </tr>
        
            {registerForm.map((item)=>(
                <tr>
                    <td>{item.firstName}</td>
                    <td>{item.middleName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.gender}</td>
                    <td>{item.phoneNo}</td>
                    <td>{item.address}</td>
                    <td>{item.email}</td>
                    <td>{item.courses}</td>
                    <td>{item.password}</td>
                    <td>{item.confirmPassword}</td>
                    </tr>
                ))}
        
        </table>
        </div>
    )
    
}

export default Form