import { useState } from "react"

export default function Exercise5() {
    const [showHide] = useState([
        { content: "Hiện", status: true },
        { content: "Ẩn", status: false },
    ])
    return (
        <div>
            {
                showHide.map(item => {
                    if (item.status === true) {

                        return (
                            <p>Khi trạng thái là true: <button>{item.content}</button></p>
                        )
                    } else if (item.status === false) {
                        return (
                            <p>Khi trạng thái là false: <button>{item.content}</button></p>
                        )
                    }
                })
            }
        </div>
    )
}
