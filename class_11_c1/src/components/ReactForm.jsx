import { useForm } from "react-hook-form"
function ReactForm() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",

        },
    })

    return (
        <div>
            <form onSubmit={handleSubmit(console.log)}>
                <input
                    {...register("firstName", { required: true })}
                    placeholder="First name"
                />
                {errors.firstName && <p style={{color:"red",fontWeight:"bold"}}>First name kuo nhi deaya hai</p>}

                <input
                    {...register("lastName", { minLength: 2 })}
                    placeholder="Last name"
                />
                <button>submit</button>
            </form>



        </div>
    )
}

export default ReactForm