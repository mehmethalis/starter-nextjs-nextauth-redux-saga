import NextAuth from 'next-auth'
import {NextApiRequest} from "next"
import CredentialsProvider from "next-auth/providers/credentials";
import {AuthService} from "../../../services/authService";
import {JWT} from "next-auth/jwt";

const providers = [
    CredentialsProvider({
        name: "Credentials",
        credentials: {},
        async authorize(credentials: { password: string, email: string } | any, req) {
            const [err, response] = await AuthService.login({
                email: credentials.email,
                password: credentials.password
            }).toArray();

            if (err) {
                throw new Error(err.message)
            }
            if (response) {
                return {...response.data, email: credentials.email}
            } else {
                return null
            }
        }
    })
]

let accessToken: any, exp: any, iat: any, id: any

const callbacks = {
    // Getting the JWT token and overwrite from API response with user attribute
    async jwt({token, user}: any) {
        if (user) {
            accessToken = user.token
            exp = user.exp
            iat = user.iat
            id = user.id
        }
        if (token.jti) {
            token.accessToken = accessToken
            token.id = id
            token.exp = exp
            token.iat = iat
        }
        return token
    },

    async session({session, token}: any) {
        session.expires = await new Date(token.exp * 1000);
        return {...session, ...token}
    }
}

const options: any = {
    providers,
    callbacks,
}

export default (req: NextApiRequest, res: any) => NextAuth(req, res, options)

