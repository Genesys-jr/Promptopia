import NextAuth from "next-auth";
import Googleprovider from "next-auth/providers/google";

console.log({
  clientId:process.env.GOOGLE_ID,
  clientSecret:process.env.GOOGLE_CLIENT_SECRET,
})

const handler = NextAuth({
  providers: [
    Googleprovider({
      clientId:process.env.GOOGLE_ID,
      clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    })
  ],

  async seesion ({ session }) {

  },

  async signIn({ profile}) {

  },
})

export {handler as GET, handler as POST};