import * as nodemailer from "nodemailer";
import { transport } from "winston";
import Mailer, { AnyTransport } from "feathers-mailer";
import app from "../../app";

export async function defaultMailer() {
    const account = await nodemailer.createTestAccount(); // internet required

    const transporter : AnyTransport = {
        host: "smtp.freesmtpservers.com",
        port: 25,
    };
    const defaultMailer = Mailer(transporter, { from: account.user });
    return defaultMailer;
}