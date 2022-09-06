import React from "react"
import{useNavigate,Link} from 'react-router-dom'
import './dashboard.css'


function Dashboard (){


    const userObj= 
        {
            customerID:'',
            name:'',
            address:'',
            phoneNumber:'',
            email:'',
            summary:''

        }
    


    const[user,setUser]=React.useState(userObj)

    const[userList,setUserList]=React.useState([])

    const onChange=(event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }

    const saveData=(event)=>{
        event.preventDefault()
        setUserList([...userList,user])
        setUser(userObj)
    }


//    const[inputData,setInputData]=React.useState(personObj)

    // const handleChange=(event)=>{
    //     setInputData({...inputData,[event.target.name]:event.target.value})
    // }
    //  const handleClick=(event)=>{
    //      event.preventDefault();
    //      navigation('/table',{state:inputData});
    //  }

    //  const checkDashboard=()=>{
    //     axios.post('http://localhost:8080/saveUser',inputData)
    //     .then(responce=>responce.data)
    //       .then(res=>{
    //             console.log(res);
    //             setInputData(res)
    //             navigate('/table');
    //     })
    // }

    return(
    
        <div>
            <div class="topnav-right" >

                <Link to="/dashboard">
                <i class="fa fa-fw fa-users"></i>Customer</Link>
                
               
                <Link to="/">
                <i class="fa fa-sign-in"></i>Login</Link>
            
                <Link to="/registration">
                <i class="fa fa-fw fa-home"></i>Home</Link>

            </div>

        <div>
        <center><h2>Customer Details</h2></center>
        </div>

        <center>
        <form className="m-container" onSubmit={saveData} >
            
        <div> 
        <label for='customerID'></label>
        <input type='text' placeholder='Customer ID' name="customerID" value={user.customerID} onChange={onChange} />
        </div>
        <br/>

        <div >
            <label for='Name'></label>
            <input type='text' placeholder="Name" name="name" value={user.name}  onChange={onChange} />
        </div>
        <br/>

        <div>
            <label for='Address'></label>
            <input type='text' placeholder="Address" name="address" value={user.address} onChange={onChange} />
        </div>
        <br/>

        <div>
            <label for='phoneNumber'></label>
            <input type='text' placeholder=" PhoneNumber" name="phoneNumber"  value={user.phoneNumber} onChange={onChange} />
        </div>
        <br/>

        <div>
            <label for='email'></label>
            <input type='email' placeholder="Email" name="email" value={user.email} onChange={onChange} />
        </div>
        <br/>

        <div>
        <label for='summary'></label>
        <textarea id='summary' placeholder="Summary" name='summary' rows='4' col='50%' value={user.summary}  onChange={onChange} >
        </textarea>
        </div>
        <br/>

        <div >
        <button className='btnn' type="submit" value='Submit' >Submit</button>
        </div>

        </form>
        </center>

            <UserList userList={userList}/>
            
        </div>
       
    )
}

function UserList({userList}) {

    return(
        <center>
        <div>
            <h2>CUSTOMER INFORMATION </h2>

        <div>
            <table class= "table table-bordered">
                <tr>
                    <th>CustomerID</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>PhoneNumber</th>
                    <th>Email</th>
                    <th>Summary</th>
                </tr>

                {userList.map((item)=>(
                    <tr>
                        <td>{item.customerID}</td>
                        <td>{item.name}</td>
                        <td>{item.address}</td>
                        <td>{item.phoneNumber}</td>
                        <td>{item.email}</td>
                        <td>{item.summary}</td>
                    </tr>

                ))}
                

            </table>
        </div>
        </div>
        </center>
    )
}


export default Dashboard