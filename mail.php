<?php
if(isset($_POST['message']) && isset($_POST['email'])){
       $retour = mail('', 'Formulaire de Contact', $_POST['message'], 'From: ' . $_POST['email']); //adresse mail de l'agence à saisir dans le premier champ
             if($retour)
                echo '<p>Votre message a été envoyé.</p>';
             }
             else
             echo "Erreur de l'envoi";


 ?>
