$mail = "someone@site.com";

# Íèæå íè÷åãî ìåíÿòü íå íóæíî
error_reporting (E_ALL);
  function go_exit ($message,$color) {
  echo "<html><head><meta http-equiv=\"content-language\" content=\"ru\">\r\n";
  echo "<meta http-equiv=\"content-type\" content=\"text/html; charset=windows-1251\">\r\n";
  echo "<title>Ïðîâåðêà ðàáîòîñïîñòîáíîñòè ñêðèïòà PHP SendMail</title>\r\n";
  echo "<style type=\"text/css\">{ }<!-- p { font-family: Verdana, Arial } --></style></head><body>\r\n";
  echo "<center><p><b><font color=\"#".$color."\">".$message."!</font></b></p></center></body></head></html>\r\n";
  exit();
  }
  if (function_exists("imap_binary")) {
  # Ïðåîáðàçóåì â ôîðìàò base64, à òàêæå äîáàâëÿåì ñëåøè ïåðåä ñèìâîëàìè " \ ( )
    function mail_convert($str) {
    $str = trim(imap_binary(addcslashes($str, "\"!@\\!@(!@)")));
    return $str;
    }
  $subject = "=?Windows-1251?B?".trim(imap_binary("Ïîçäðàâëÿåì!"))."?=";
  $headers  = "From: =?Windows-1251?B?".mail_convert("Ñêðèïò")."?= <postmaster@adultsingles.com>\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Transfer-Encoding: 8bit\r\n";
  $headers .= "Content-Type: text/plain; charset=\"Windows-1251\"\r\n";
  $headers .= "X-Mailer: PHP v.".phpversion();
  $message  = "Ïîçäðàâëÿåì!\n\nÅñëè âû âèäèòå òîëüêî ýòî ñîîáùåíèå, áåç îøèáîê è íåïîíÿòíûõ íàäïèñåé â òåëå ïèñüìà è";
  $message .= " çàãîëîâêàõ, òî ìîæåòå ïðèñòóïàòü ê íàñòðîéêå îñíîâíîãî ñêðèïòà.";
    if (mail("=?Windows-1251?B?".mail_convert("Âåáìàñòåðó")."?= <".$mail.">",$subject,$message,$headers)) {
    go_exit ("Òåñòîâîå ñîîáùåíèå óñïåøíî îòïðàâëåíî - ïðîâåðüòå e-mail ".$mail,"009900");
    }
    else {
    go_exit ("Îòêàç ôóíêöèè &quot;mail&quot; - ñïðîñèòå ó àäìèíèñòðàòîðà õîñòèíãà îá îñîáåííîñòÿõ åå ðàáîòû","CC0000");
    }
  }
  else {
  go_exit ("Íåäîñòóïíà ôóíêöèÿ &quot;imap_binary&quot; - îáðàòèòåñü ê àäìèíèñòðàòîðó õîñòèíãà","CC0000");
  }
?>

