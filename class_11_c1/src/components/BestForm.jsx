import { useState } from "react"
import "./BestForm.css"

function BestForm() {

    const [userFormData, setUserFormData] = useState({
        fName: "",
        lName: "",
        email: "",
        password: "",
        dob: "",
        query: ""
    })

    const [hobby, setHobby] = useState([])


    function dataSetOfForm(event) {

        const { name, value } = event.target

        setUserFormData((prev) => {
            return { ...prev, [name]: value }
        })

        if (event.target.checked) {
            console.log(event)
            setHobby((prev) => {
                return [...prev, value]
            })
        }

        else {
            console.log(event)
            let hobbyRemaining = hobby.filter((item) => item !== value);
            setHobby(hobbyRemaining)
        }

    }

    function printValue(e) {
        e.preventDefault()
        console.log("FormData", userFormData)
        console.log("Hobby array", hobby)
        // setUserFormData({
        //     fName: "",
        //     lName: "",
        //     email: "",
        //     password: "",
        //     dob: "",
        //     query: ""
        // })
        e.target.reset()
    }


    return (
        <div>
            <b>Best form</b>
            <form className="form-container" onSubmit={(event) => {
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
                        required
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

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        id="password"
                        className="form-input"
                        value={userFormData?.password}
                        onChange={(event) => {
                            dataSetOfForm(event)

                        }}
                        name="password"
                    />
                </div>


                <div className="form-group">
                    <label htmlFor="dob">DOB</label>
                    <input
                        type="date"
                        id="dob"
                        className="form-input"
                        value={userFormData?.date}
                        onChange={(event) => {
                            dataSetOfForm(event)

                        }}
                        name="dob"
                    />
                </div>


                <div className="form-group">
                    <p>Intrust Area </p>
                    <label htmlFor="Cricket">Cricket </label>
                    <input
                        type="checkbox"
                        id="Cricket"
                        className="form-input"
                        value="Cricket"
                        onChange={(event) => {
                            dataSetOfForm(event)

                        }}
                        name="hobby"
                    />

                    <label htmlFor="Footbool">Footbool</label>
                    <input
                        type="checkbox"
                        id="Footbool"
                        className="form-input"
                        value="Footbool"
                        onChange={(event) => {
                            dataSetOfForm(event)

                        }}
                        name="hobby"
                    />
                    <label htmlFor="Chase">Chase</label>
                    <input
                        type="checkbox"
                        id="Chase"
                        className="form-input"
                        value="Chase"
                        onChange={(event) => {
                            dataSetOfForm(event)

                        }}
                        name="hobby"
                    />
                </div>
                <div className="form-group">
                    <textarea
                        className="form-input"
                        value={userFormData?.query}
                        onChange={(event) => {
                            dataSetOfForm(event)

                        }}
                        name="query"></textarea>
                </div>



                <button className="submit-btn">Submit</button>
            </form>
        </div>
    )
}

export default BestForm