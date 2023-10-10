import { Request, Response } from "express";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import nodeMailer from "nodemailer";
import { generateEmailPin } from "./pin.functions";

let messageSuccess: string;
let messageError: string;

interface INodeMailerOptions {
  from: string;
  to: string;
  subject: string;
  html: any;
}

const transporter: nodeMailer.Transporter<SMTPTransport.SentMessageInfo> =
  nodeMailer.createTransport({
    service: "",
    auth: {
      user: "",
      pass: "",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

transporter.verify((error, success) => {
  if (error) {
    messageError = error.toString();
  } else {
    messageSuccess = `Server is ready to take our messages: ${success}`;
  }
});

const renderHTML: (
  username: string,
  email: string,
  subject: string,
  pin: string
) => string = function (
  username: string,
  email: string,
  subject: string,
  pin: string
) {
  return ` 
  <div style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 18px; border-radius: 10px;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);">
      <h3 style="color: #333333; ">${subject}</h3>
      <p style="color: #666666; font-size: 13px">Hello ${username}</p>
      <p style="color: #666666; font-size: 13px">This is the pin we sent you from help connect so that we can verify your email, Please go back and enter the pin provided ${pin}</p>
      <p style="color: #666666; font-size: 13px">Warm regards</p>
      <p style="color: #666666; font-size: 13px">${email}</p>
  </div>
  </div>`;
};

async function HttpEmailPinGeneratorController(req: Request, res: Response) {
  try {
    const { username, email } = req.body;
    const pin: string = generateEmailPin();

    const mailOptions: INodeMailerOptions = {
      from: "", // sender address
      to: email, // list of receivers
      subject: "Verification code from help connect", // Subject line
      html: renderHTML(
        username,
        email,
        "Verification code from help connect",
        pin
      ),
    };

    const resFromEmail = await transporter.sendMail(mailOptions);

    if (messageSuccess && resFromEmail.response) {
      return res
        .status(200)
        .json({ message: "Verification code sent to your email address", pin });
    } else {
      return res.json({message: "Failed to sent email try again later"})
    }
  } catch (error) {
    res.status(500).json({ errorMessage: "Internal server error" });
  }
}

export { HttpEmailPinGeneratorController };
