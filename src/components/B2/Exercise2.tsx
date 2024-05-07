import { useState } from "react"


export default function Exercise2() {
    const [value, setValue] = useState<string>("")
    const inputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    return (
        <div>
            <label htmlFor="">Dữ liệu từ đăng nhập: {value}</label> <br />
            <input type="text" onChange={inputValue} />
        </div>
    )
}
