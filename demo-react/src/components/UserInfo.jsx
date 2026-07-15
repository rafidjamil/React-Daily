import React from 'react'
import Main from './Main';
const userinfo = [
  {
    name: "Rafid",
    email: "rafidjamil010@gmail.com",
    location: "Pakistan",
  },
  {
    name: "Ali",
    email: "ali123@gmail.com",
    location: "Pakistan",
  },
  {
    name: "Ahmed",
    email: "ahmed.khan@gmail.com",
    location: "Pakistan",
  },
  {
    name: "Sara",
    email: "sara.ali@gmail.com",
    location: "Pakistan",
  }
];

const UserInfo = () => {
  return (
    <main>
        <hr />
    <h1>The Employee Details</h1>
    {userinfo.map(({name, location,email})=>(
        <ul key={Math.random()}>
            <li>
                {name}
            </li>
            <li>
                {location}
            </li>
            <li>
                {email}
            </li>
        </ul>

    ))}
    </main>
  )
}

export default UserInfo