import { useState } from "react"
import "./Form.css"

function Form() {

    const [fName, setFName] = useState("")

    const [lName, setLName] = useState("")

    const [email, setEmail] = useState("")

    function printValue(e) {
        e.preventDefault()
        const ob1 = { fName, lName, email }
        // console.log(fName, lName, email)
        console.log(ob1)

        setFName("")
        setLName("")
        setEmail("")
        
    }

    return (
        <div>
            <form className="form-container" onSubmit={(event) => {
                // console.log("btn click me aae")
                printValue(event)
            }}>
                <div className="form-group">
                    <label htmlFor="fname">First Name</label>
                    <input
                        type="text"
                        placeholder="Enter your first name"
                        id="fname"
                        className="form-input"
                        value={fName}
                        onChange={(event) => {
                            // console.log(event)
                            // console.log(event.target)
                            // console.log(event.target.value)
                            setFName(event.target.value)
                        }}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="lname">Last Name</label>
                    <input
                        type="text"
                        placeholder="Enter your last name"
                        id="lname"
                        className="form-input"
                        value={lName}
                        onChange={(event) => {
                            // console.log(event)
                            setLName(event.target.value)
                        }}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        placeholder="Enter your email"
                        id="email"
                        className="form-input"
                        value={email}
                        onChange={(event) => {
                            // console.log(event)
                            setEmail(event.target.value)
                        }}
                    />
                </div>

                <button className="submit-btn">Submit</button>
            </form>
        </div>
    )
}

export default Form