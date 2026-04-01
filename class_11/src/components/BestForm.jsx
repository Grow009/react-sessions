import { useState } from "react"
import "./Form.css"

function BestForm() {

    const [userFormData, setUserFormData] = useState({
        fName: "",
        lName: "",
        email: ""

    })

    function dataSetOfForm(event) {
        console.log(event);
        // console.log( event.target);
        // console.log( event.target.value);

      const {value, name}=event.target
        // setUserFormData(event.target.value);
        setUserFormData((prevState) => {
            return { ...prevState, [event.target.name]: event.target.value }

        })
    }

    function printValue(e) {
        e.preventDefault()

    }
    console.log("FormData", userFormData)

    return (
        <div>
            <b>Best form</b>
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
                        value={userFormData?.fName}
                        onChange={(event) => {
                            dataSetOfForm(event)
                        }}
                        name="fName"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="lname">Last Name</label>
                    <input
                        type="text"
                        placeholder="Enter your last name"
                        id="lname"
                        className="form-input"
                        value={userFormData?.lName}
                        onChange={(event) => {
                            dataSetOfForm(event)

                        }}
                        name="lName"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        placeholder="Enter your email"
                        id="email"
                        className="form-input"
                        value={userFormData?.email}
                        onChange={(event) => {
                            dataSetOfForm(event)

                        }}
                        name="email"
                    />
                </div>

                <button className="submit-btn">Submit</button>
            </form>
        </div>
    )
}

export default BestForm