import { createContext } from "react"
// step-1 done context creation done
export const mycontext = createContext();


function InfoContext({ children }) {

    const Grade = 'A'
    let donName = "Kalu Lal"


    //  data ko identify kar leaya hai
    const ob1 = {
        Grade,
        donName,
    }


    // data ko wrap karke provide kar denge
    return (
        <>
            <mycontext.Provider value={ob1}>

                {children}

            </mycontext.Provider>

        </>
    )
}

export default InfoContext