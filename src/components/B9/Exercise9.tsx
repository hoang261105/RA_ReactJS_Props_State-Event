import React, { useState } from "react"

export default function Exercise9() {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    return (
        <div>
            <form action="">
                <h2>Form</h2>
                <input type="text" placeholder="Nhập email" onChange={handleEmail} /> <br /> <br />
                <input type="text" placeholder="Nhập mật khẩu" onChange={handlePassword} /> <br /> <br />
                <button>Submit</button> <br />
                <span id="email">Email: {email}</span><br />
                <span id="password">Mật khẩu: {password}</span>
            </form>
        </div>
    )
}
