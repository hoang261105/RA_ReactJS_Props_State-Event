import { useState } from "react"

export default function AddElement() {
    const [array, setArray] = useState<number[]>([])

    const addElement = () => {
        setArray([...array, array.length + 1])

    }
    return (
        <div>
            <p>Mảng số: [{array.join(', ')}]</p>
            <button onClick={addElement}>Add Element</button>
        </div>
    )
}
