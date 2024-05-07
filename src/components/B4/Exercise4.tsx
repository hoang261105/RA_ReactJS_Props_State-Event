import { useState } from "react"

export default function Exercise4() {
    const [select, setSelect] = useState<string>("")
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelect(e.target.value)
    }
    return (
        <div>
            <label htmlFor="">Tỉnh/ Thành Phố: {select}</label> <br />
            <select name="" onChange={handleSelect}>
                <option value="">Chọn Tỉnh/ Thành Phố</option>
                <option value="Hà Nội">Hà Nội</option>
                <option value="Ninh Bình">Ninh Bình</option>
                <option value="Gia Lai">Gia Lai</option>
                <option value="Huế">Huế</option>
                <option value="Bắc Giang">Bắc Giang</option>
                <option value="Tp Hồ Chí Minh">Tp Hồ Chí Minh</option>
                <option value="Đà Nẵng">Đà Nẵng</option>
            </select>
        </div>
    )
}
