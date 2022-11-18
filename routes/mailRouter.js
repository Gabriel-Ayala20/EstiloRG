const {Router} = require ('express');
const nodemailer = require ('nodemailer');
const router = Router();
require("dotenv").config();


router.post('/email' , async (req,res)=>{
     const{name, email,message,phone} = req.body;

  contentHTML = `<h1>User Information</h1>
     <ul> 
     <li>
     Username: ${name}
     </li>
     </li>
     <li>
     Email: ${email}
     </li>
     <li>
     Phone: ${phone}
     </li>
     </ul>
     <p>
     ${message}
     </p>
 `;

 const transporter= nodemailer.createTransport({
    service :'gmail',
    auth :{
        user :process.env.MAIL_USER,
        pass : process.env.MAIL_PASS
    }
 })
 
const info = await transporter.sendMail({
    from : 'gabrielayalagimenez18@gmail.com',
    to:'gabriel.ayalagimenez@gmail.com',
    subject: 'Contacto de la pagina web ',
    html : contentHTML,
})

transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

 res.redirect('/');
})

module.exports = router;
