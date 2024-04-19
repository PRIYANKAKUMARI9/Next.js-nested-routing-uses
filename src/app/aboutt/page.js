import Link from "next/link"

const aboutt=()=>{
    return(
        <div>
            <h1>this is aboutt page</h1>
            <Link href="/">go to home page</Link>

            <br/>
            <br/>

            <Link href="/aboutt/aboutstudent">Go to aboutstudent</Link><br/><br/>
            <Link href="/aboutt/aboutCollege">go to aboutCollege</Link>

        </div>
    )
}

export default aboutt