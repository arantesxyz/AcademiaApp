
using System.Net.Mail.MailMessage;
 public class Email{           
            public static void main(){
            System.Net.Mail.SmtpClient smtp = new System.Net.Mail.SmtpClient();
            //cria uma mensagem
            MailMessage mail = new MailMessage();

            //define os endereços
            mail.From = new MailAddress("webermarques9@gmail.com");
            mail.To.Add("webermarques9@gmail.com");

            //define o conteúdo
            mail.Subject = "Teste";
            mail.Body = "Teste";
            mail.Attachments.Add(new Attachment(@""));

            //envia a mensagem
            smtp.EnableSsl = true;
            //smtp.Host = ("smtp.gmail.com");
           

            smtp.Credentials = new System.Net.NetworkCredential("webermarques9@gmail.com", "******");
            smtp.Send(mail);
            Console.WriteLine("Teste");
            Console.ReadKey();
            }
 }