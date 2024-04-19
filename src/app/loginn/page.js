"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"


const hello=()=>{
    return(
        <div>
            <h1>this is loginn page.js</h1>
            <Link href="/">go to Home page</Link>
            <br/>
            <br/>
            <button className=" bg-blue-600 p-4 rounded-2xl mr-6 text-white" >go to Loginbtn</button>
            <button className=" bg-green-600 p-4 rounded-2xl">go to Logintecher</button>
        </div>
    )
}
export default hello();