import React from 'react'
const myName= "Rafid"
const multiply= (a,b)=> a*b
const classvariable = "anything"
const date = new Date()
const Footer = () => {
  return (
    <div>
        <p>
            @2026 My website
        </p>
        <p>2+2 = {2+2}</p>
        <p>{myName}</p>
        <p>My friend list: {["alex", "jordan", "john"]}</p>
        <p>2*2 = {multiply(2,2)}</p>
        <p className={classvariable}>any thing </p>
        <p>Date: {date.getDate()}</p>
    </div>
  )
}

export default Footer;