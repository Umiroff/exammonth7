import React, {useState} from 'react'
import { useCreateUserMutation } from '../../context/usersApi'
import { Container, TextField } from '@mui/material'
import { PatternFormat } from 'react-number-format';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [UserName, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("user")
    const [phones, setPhones] = useState([])
    const [tel, setTel] = useState("")
    console.log(phones);
    const [createUser, {data, error, isLoading}] = useCreateUserMutation()
    const navigate = useNavigate()

    if(error){
        alert(error.data.message)
    }

    if(data?.variant === "success"){
        navigate("/users")
    }

    console.log("data >>>", data);

    const handleAddTelNumber = ()=> {
        setPhones(p => [...p, tel])
        setTel("")
    }

    const handleSignUp = e =>{
        e.preventDefault()

        let user = {
            FirstName,
            LastName,
            phones,
            role,
            password,
            UserName,
            isActive: true
        }
        createUser(user)
    }

  return (
    <div>
        <Container maxWidth="xl">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp} className='form' action="">
                <br />
                <input value={FirstName} onChange={e => setFirstName(e.target.value)} type="text" />
                <input value={LastName} onChange={e => setLastName(e.target.value)} type="text" />
                <PatternFormat value={tel} onChange={e => setTel(e.target.value)} format="+998 ## ### ## ##" allowEmptyFormatting mask="_" />
                <button onClick={handleAddTelNumber} type='button'>add</button>
                <select value={role} onChange={e => setRole(e.target.value)} name="" id="">
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                    <option value="owner">Owner</option>
                </select>
                <input value={UserName} onChange={e => setUsername(e.target.value)} type="text" />
                <input value={password} onChange={e => setPassword(e.target.value)} type="text" />
                <button>Sign Up</button>
            </form>
        </Container>
    </div>
  )
}

export default SignUp