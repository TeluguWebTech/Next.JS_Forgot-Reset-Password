
"use server"

import { signIn } from "../auth"



export async function loginAction(loginDetails){
        console.log("login details from form", loginDetails)
        try {
            await signIn("credentials", {
                email: loginDetails.email,
                password: loginDetails.password,
                redirectTo: "/"
            })
        } catch (error) {
            console.log(error)
        }
}