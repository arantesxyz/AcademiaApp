using Syste.Net.Mail.MailMessage;
public class Email{

   public static void main(){
       string mydate;
            int i , j;
            mydate = DateTime.Now.ToString("dd.MM.yyyy");
            mydate.Replace("dd.MM.yyyy","yyyy.MM.dd");
            string[] aniv = new string[3] { "17.03.2017", "17.03.2017", "20.03.2017"};
            string[] email = new string[3] { "webermarques9@gmail.com","webermarques9@gmail.com","" };
            string[] msg = new string[3] { "Bom dia", "Bom dia2", "" };
            string[] anexo = new string[3] { @"C:\Users\pichau\Documents\Weber\Aimagens\att_obrigacao1.jpg", @"C:\Users\pichau\Documents\Weber\Aimagens\att_obrigacao1.jpg", "" };
            for ( i = 0; i < aniv.Length; i++)
            {              
                    if (mydate == aniv[i])
                    {
                        Console.WriteLine("Enviando email...");
                         // criar o smtp
                        System.Net.Mail.SmtpClient smtp = new System.Net.Mail.SmtpClient();
                        //cria uma mensagem
                        MailMessage mail = new MailMessage();

                        //define os endereços
                        mail.From = new MailAddress("webermarques9@gmail.com");
                        mail.To.Add(email[i]);

                        //define o conteúdo
                        mail.Subject = msg[i];
                        mail.Body = "Feliz aniversário parceiro";
                        mail.Attachments.Add(new Attachment(anexo[i]));

                        //envia a mensagem
                        smtp.EnableSsl = true;
                        smtp.Host = ("smtp.gmail.com");


                        smtp.Credentials = new System.Net.NetworkCredential("webermarques9@gmail.com", "*********");
                        smtp.Send(mail);
                        Console.WriteLine("Enviado");
                        
                    }
                
            }
            
            Console.WriteLine(mydate);
            Console.ReadKey();
   
   
   
   
   }




}