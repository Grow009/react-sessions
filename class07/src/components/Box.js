
import Card from "./Card"
function Content() {
     console.log("3rd Box ")
//       setTimeout(()=>{
//     console.log("3rd Box ")
//   },3000)
    return (
        <section className="content">
            <h1>Welcome to My Website</h1>
            <p>This is a simple one-page website with a navbar and footer.</p>
            <Card/>
        </section>
    )
}

export default Content