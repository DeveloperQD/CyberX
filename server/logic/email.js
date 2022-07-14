module.exports = {
  sendEmail: function (from, to, subject, text, attachments) {
    var nodemailer = require('nodemailer');

    // var transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: '213@gmail.com',
    //     pass: 'Zaub'
    //   }
    // });
    var transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      requireTLS: true,
        auth: {
          user: '',
          pass: ''
        }
      });

    
    var mailOptions = {
      from,
      to,
      subject,
      text,
      attachments
    };

    transporter.sendMail(mailOptions, function (e, info) {
      if (e) {
        throw e;
      } 
      return info;
    });
  }
}


/*
var pdf="data:application/pdf;base64,JVBERi0xLjM..etc"

attachments: [  {  filename: 'archive.pdf',
                  contents: new Buffer(pdf.replace(/^data:application\/(pdf);base64,/,''), 'base64')
                 }   
             ]

             var img = 'data:image/jpeg;base64,/9j/4AAQ...etc'
attachments: [  
             {  
               filename: 'myImage.jpg',
               contents: new Buffer(img.replace(/^data:image\/(png|gif|jpeg);base64,/,''), 'base64')
               }   
             ]

             attachments: [  
             {  
               filename: 'Hello.txt',
               contents: 'hello world!'
               }   
             ]

*/ 