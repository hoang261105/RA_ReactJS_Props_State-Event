
export default function Exercise1() {
    const handleClick = () => {
        console.log('Clicked')
    }
    return (
        <div>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}
