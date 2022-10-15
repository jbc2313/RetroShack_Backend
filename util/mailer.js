const nodemailer = require('nodemailer')

async function sendAccountCreatedEmail(email) {
    
    const testAccount = await nodemailer.createTestAccount()

    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass,
        }
    })

    const info = await transporter.sendMail({
        from: '"retroshack" <webmaster@retroshack.net>',
        to: email,
        subject: "Account successfully created",
        html: `
            Your Account was created with the email account ${email}
            <br/>
            <h1>Thank You for joining Retroshack!</h1>
        `
    })

    // console.log(`preview URL: ${nodemailer.getTestMessageUrl(info)}`)
    const testLink = nodemailer.getTestMessageUrl(info)

    return testLink

}

module.exports = {
    sendAccountCreatedEmail
}
