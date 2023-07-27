import NextAuth from "next-auth";
import Googleprovider from "next-auth/providers/google";

import User from "@models/user";

import { connectToDB } from "@utils/database";



const handler = NextAuth({
  providers: [
    Googleprovider({
      clientId:process.env.GOOGLE_ID,
      clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    })
  ],

  async seesion ({ session }) {
    const sessionUser = await User.findOne({
      email: session.user.email
    })

    session.user.id = sessionUser._id.toString();
  },

  async signIn({ profile}) {
    try {
      await connectToDB();

      // check if user already exits
      const userExists = await User.findOne({
        email: profile.email,
      });

      //if not, create new user
    if(!userExists){
      await User.create({
        email: profile.email,
        username: profile.name.replace(" ", "").toLowerCase(),
        image: profile.picture
      })
    }

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
})

export {handler as GET, handler as POST};