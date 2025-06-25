import { SignUp } from "@clerk/nextjs"

export default function SignUpPage(){
    return(
        <>
        <h1>This is the sign-up page. Please, give me your data!</h1>
        <SignUp/>
        </>
    )
}