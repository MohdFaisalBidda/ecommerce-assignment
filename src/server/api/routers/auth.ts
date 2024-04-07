import { Prisma } from "@prisma/client";
import { z } from "zod";
import nodemailer from 'nodemailer';


import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";

const transporter = nodemailer.createTransport({
  host: 'smtp.freesmtpservers.com',
  port: 25,
});

async function sendOTP(email, otp) {
  const mailOptions = {
    from: "notify@example.com",
    to: email,
    subject: "Your OTP for Verification",
    text: `Your OTP is: ${otp}`,
  };
  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}

export const authRouter = createTRPCRouter({
  register: publicProcedure
    .input(z.object({ name: z.string(), email: z.string().email(), password: z.string().min(6) }))
    .mutation(async ({ input }) => {
      const existingUser = await db.user.findUnique({ where: { email: input.email } })
      if (existingUser) {
        throw new Error('User with this email already exists!')
      }

      await db.user.create<Prisma.UserCreateInput>({
        data: {
          name: input.name,
          email: input.email,
          password: input.password
        }
      })

      return { success: true }
    }),

  login: publicProcedure
    .input(z.object({ email: z.string(), password: z.string().min(6) }))
    .mutation(async ({ input }) => {
      const existingUser = await db.user.findUnique({ where: { email: input.email } })
      if (!existingUser || existingUser.password !== input.password) {
        throw new Error('Invalid email or password')
      }
      return { user: input }
    }),


  sendVerificationOTP: publicProcedure
    .input(z.object({ email: z.string().email() }))
    .mutation(async ({ input }) => {
      const otp = Math.floor(10000000 + Math.random() * 90000000);
      const success = await sendOTP(input.email, otp.toString());

      if (!success) {
        throw new Error("Failed to send OTP");
      }

      // You might want to store the OTP in the database or cache for verification later

      return { success: otp };
    }),

  verifyEmailWithOTP: publicProcedure
    .input(z.object({ email: z.string().email(), otp: z.string() }))
    .mutation(async ({ input }) => {
      //verify otp send to email

      return { success: true }
    }),

  getUserDetails: publicProcedure
    .query(async ({ ctx }) => {
      const user = ctx
      if (!user) {
        throw new Error('User not authenticated')
      }

      return {
        ctx
      };
    })
});
