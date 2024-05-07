import { useState } from "react"

export default function Exercise3() {
    const [date, setDate] = useState<string>("")
    const changeDays = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value)
    }
    return (
        <div>
            <label htmlFor="">Thòi gian: {date}</label> <br />
            <input type="date" onChange={changeDays} />
        </div>
    )
}
