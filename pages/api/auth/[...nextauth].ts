import NextAuth from 'next-auth'
import {NextApiRequest} from "next"
import CredentialsProvider from "next-auth/providers/credentials";
import {AuthService} from "../../../services/authService";

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
const callbacks = {
    // Getting the JWT token from API response with user attribute
    async jwt({token, user}: any) {
        if (user) {
            token.accessToken = user.token
            token.email = user.email
            token.userId = user.id
        }
        return token
    },

    async session({session, token}: any) {
        return {...session, ...token}
    }
}

const options: any = {
    providers,
    callbacks,
}

export default (req: NextApiRequest, res: any) => NextAuth(req, res, options)

