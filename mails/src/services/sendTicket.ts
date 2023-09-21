import nodemailer from "nodemailer";

export const sendTicket = async (
  email: string,
  subject: string,
  html: string
) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "youremail@gmail.com",
      pass: "yourpassword",
    },
  });
  var mailOptions = {
    from: "youremail@gmail.com",
    to: email,
    subject: subject,
    html: html,
  };
  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log("error", error);
        reject(error);
      } else {
        console.log("sended!!", info);
        resolve(true);
      }
    });
  }).catch((error) => {
    throw new Error(error);
  });
};
