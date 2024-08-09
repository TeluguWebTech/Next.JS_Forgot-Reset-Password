
"use server"

import DBconnection from "../utils/config/db"
import UserModel from "../utils/models/User"

export async function registerAction(registerDetails){
        console.log("server output detials",registerDetails)
        await DBconnection()

        await UserModel.create(registerDetails)
        return {success: true}
} 