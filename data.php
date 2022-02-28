<?php

//connexion avec la base
include './connectBDD.php';


    if ($db) {

        // requete d'ajout d'un utilisateur selon parametre ajax

        if (isset($_POST['nom']) && isset($_POST['prenom']) && isset($_POST['email']) && isset($_POST['ajout'])) {
            $sql = "INSERT INTO user VALUES (NULL, :nom, :prenom, :email, :commentaire)";
            $requete = $db->prepare($sql);
            $requete->bindParam(':nom', $_POST['nom']);
            $requete->bindParam(':prenom', $_POST['prenom']);
            $requete->bindParam(':email', $_POST['email']);
            $requete->bindParam(':commentaire', $_POST['commentaire']);
            $result = $requete->execute();
            $id = $db->lastInsertId();
            echo json_encode($id);

        };
        
        // requete de suppresion d'un utilisateur selon parametre ajax

        if (isset($_POST['id']) && $_POST['nom'] == 'supprimer') {
            $sql = "DELETE FROM user WHERE Id=:id";
            $requete = $db->prepare($sql);
            $requete->bindParam(':id', $_POST['id']);
            $resultat = $requete->execute();
            echo json_encode($resultat);
        };

        // requete de selection de l'utilisateur avant modifiaction selon parametre ajax

        if ($_POST['nom'] == 'modifier' && isset($_POST['id'])) {
            $sql = "SELECT * FROM user WHERE Id=:id";
            $requete = $db->prepare($sql);
            $requete->bindParam(':id', $_POST['id']);
            $result = $requete->execute();
            $resultat = $requete->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($resultat);

        };

        // requete de modification d'un utilisateur selon parametre ajax

        if (isset($_POST['nom']) && isset($_POST['prenom']) && isset($_POST['email']) && isset($_POST['id']) && isset($_POST['modif'])) {
            $sql = "UPDATE user SET nom = :nom, prenom = :prenom, email = :email, commentaire = :commentaire WHERE Id=:id";
            $requete = $db->prepare($sql);
            $requete->bindValue(':id', $_POST['id']);
            $requete->bindParam(':nom', $_POST['nom']);
            $requete->bindParam(':prenom', $_POST['prenom']);
            $requete->bindParam(':email', $_POST['email']);
            $requete->bindParam(':commentaire', $_POST['commentaire']);
            $result = $requete->execute();
            echo json_encode($result);

        };
    }





?>

