// Code Keypad Component Here

function Keypad (){
    const handlePassChange =() => console.log('Entering password...');
    return (
        <div>
            <input type="password" onChange={handlePassChange}></input>
        </div>
    )
}

export default Keypad;