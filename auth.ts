import NextAuth from "next-auth"
import authconfig from '@/auth.config';
import { PrismaAdapter } from '@auth/prisma-adapter';
import db from '@/lib/db';

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapted: PrismaAdapter(db),
    session: { strategy: "jwt" },
    ...authconfig
})