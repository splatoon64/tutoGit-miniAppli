<!DOCTYPE html>
<html lang="fr">
<head>
    <meta  http-equiv =" Content-Type " content =" text/html" charset="utf-8 ">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <!-- jquery cdn -->
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <script src="script.js" defer></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
    <title>Apprentissage bootstrap/AJAX/GIT</title>
</head>
<body>
    <div class="container py-3">
        <header class="mb-3">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid d-flex flex-column">
                    <a class="navbar-brand" href="#">Bienvenue dans votre application</a>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="./index.php">Accueil</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
            <main id="main">
                <div class="row col-10 mx-auto text-center align-items-center" id="contenu"></div>
                    <div class="d-flex justify-content-center col-auto my-1 mx-auto">
                        <button class="btn btn-light btn-outline-dark mr-3 mx-auto" name="valider" type="button">Ajouter</button>
                        <button class="btn btn-light btn-outline-dark mr-3 mx-auto" style="display : none" id="modif" name="modif" type="button">Modifier</button>
                    </div>
                    <h2 class="text-center mb-0">Liste des Utilisateurs</h2>

                    <div class="row col-sm-4 mr-3 mx-auto" id="reponse"></div>   
                    <table class="table table-responsive table-striped table-hover" >
                    <thead>
                        <tr>
                            <th scope="col">Nom</th>
                            <th scope="col">Prenom</th>
                            <th scope="col">Email</th>
                            <th scope="col">Commentaire</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <form action="data.php" method="POST" class="needs-validation" name="myForm" novalidate>
                        <tbody id="user">
                            <?php  include 'display.php' ?>
                        </tbody>
                    </form>
                    </table>
            </main>
        <footer class="border-top py-1 mt-5 bg-light text-center">
            <p class="text-center"><i class="far fa-copyright" aria-hidden="true"> Copyright Application gestion utilisateur dev64 Ockler 2022</i></p>
            <a class="btn btn-transparent btn-outline-dark mx-auto" href="index.php" type="submit" name="sortir">Sortir</a>
        </footer>
    </div>
</body>
</html>                        