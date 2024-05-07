import { useState } from "react"

export default function Exercise10() {
    const genders = ["Nam", "Nữ", "Khác"]
    const [gender, setGender] = useState<string>(genders[1])

    const randomGender = () => {
        const randomIndex = Math.floor(Math.random() * genders.length)
        const genderValue = genders[randomIndex]
        setGender(genderValue)
    }
    return (
        <div>
            <span>Gender: {gender}</span> <br />
            <button onClick={randomGender}>Random gender</button>
        </div>
    )
}
