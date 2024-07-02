const nodemailer = require('nodemailer');
const env = require('dotenv');
env.config();

exports.sendMail = (req, res) => {
    let smtpTransport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        service: 'Gmail',
        port: 465,
        secure: true,
        auth: {
            user: process.env.USER,
            pass: process.env.PASSWORD
        },
        tls: { rejectUnauthorized: false }
    });

    const { email, otp } = req.body;

    const mailOptions = {
        from: process.env.USER,
        to: email,
        subject: 'Learning With Vishal',
        html: `<p>Dear User,</p>
               <p>${otp}.<br />We have attached Demo otp.</p>
               <p>Thanks & regards,<br/>Vishal</p>`
    };

    smtpTransport.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            res.status(200).send('Mail has been sent to your email with otp. Check your mail');
        }
    });
};
