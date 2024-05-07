import { useState } from "react";

export default function Exercise8() {
    const [count, setCount] = useState(0)
    const countClick = () => {
        setCount(count + 1)
        console.log(count);
    }
    return (
        <div>
            <button onClick={countClick}>Click {count} lần</button>
        </div>
    )
}
