

function ChildComponent({ getData, setUser }) {
    console.log("hey")
    const user = { name: "Syam", city: "JBP", age: 12 }
    // getData(user)// directly call nhi kar sakte 
    return (
        <>
            <button onClick={() => {
                getData(user);
                setUser(user)
            }}> send Data</button>

        </>
    );
}
export default ChildComponent;