import React from 'react'
import { useGetUsersQuery } from '../../context/usersApi'

const Users = () => {
    const {data, error} = useGetUsersQuery()

    if(error){
        alert(error.message)
    }
    let users = data?.data?.map(user => <div key={user.id}>
        <strong>{user.FirstName}</strong>
        <p>{user.LastName}</p>
        <hr />
        <br />
    </div>)
  return (
    <div>
        <h2>Users</h2>
        {users}
    </div>
  )
}

export default Users