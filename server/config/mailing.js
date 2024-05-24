import nodemailer from 'nodemailer'

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'kanhaiyatripathi046@gmail.com', // Your email address
    pass: 'kkbssssvljxnyjcy' // Your password
  }
});
export default transporter;
