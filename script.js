//Utilisation JQUERY

$(document).ready(function () {
    //affichage du formulaire
    $('#contenu').load('contenu.php #myForm');
    //gestion des evenements au click
    $("button[name='valider']").click(addUser);
    $("button[name='modif']").click(modifUserBDD);
    bouton();
});


        // function remise en "service" des boutons supprimer et modifier pour la dernière ligne ajoutée

function bouton() {
    $('button').click(function () {
        $(this).each(function (index,value) {
            id = value.id;
            nom = value.name
            switch (value.name) {
                case 'supprimer':
                    supUser(id,nom);
                    $('#modif').fadeOut(1000);
                    break;
                case 'modifier':
                    modifUser(id,nom);
                    break;
                default:
                    break;
            }
        });
    });
}

    // fonction d'ajout d'un utilisateur avec ajax

function addUser() {
    var commentaire = $('#commentaire').val();
    var nom = $('#nom').val();
    var prenom = $('#prenom').val();
    var email = $('#email').val();
    var ajout = 'ajout';
    if (nom == "" && prenom == "" && email == "") {
        $('#reponse').html("<div class='col-auto mx-auto alert-danger text-center mt-3' role='alert'>Veuillez remplir les champs</div>");
        $('#repNom').html("");
        $('#repPrenom').html("");
        $('#repEmail').html("");
    } else if (nom == "") {
        $('#repNom').html("<div class='col-auto mx-auto alert-danger text-center' role='alert'>Veuillez renseigner votre nom</div>");
        $('#reponse').html("");
        $('#repPrenom').html("");
        $('#repEmail').html("");
    } else if (prenom == "") {
        $('#repPrenom').html("<div class='col-auto mx-auto alert-danger text-center' role='alert'>Veuillez renseigner votre prenom</div>");
        $('#repNom').html("");
        $('#reponse').html("");
        $('#repEmail').html("");
    } else if (email == "") {
        $('#repEmail').html("<div class='col-auto mx-auto alert-danger text-center' role='alert'>Veuillez renseigner votre email</div>");
        $('#reponse').html("");
        $('#repNom').html("");
        $('#repPrenom').html("");
    } else if (nom != "" && prenom != "" && email !="") {
    $.ajax({
        type: "POST",
        url: "data.php",
        data: {nom, prenom, email, commentaire,ajout},
        dataType: "html",
        success: function (response) {
            $('#repNom').html("");
            $('#repEmail').html("");
            $('#repPrenom').html("");
            id = JSON.parse(response);
            var form ='<tr class="align-middle" name="'+id+'"><th scope="row"><input type="text" class="form-text text-muted form-control-plaintext nom" readonly name="nom" value="'+nom+'"></th><th scope="row"><input type="text" class="form-text text-muted form-control-plaintext prenom" readonly name="prenom"  value="'+prenom+'"></th><th scope="row"><input type="text" class="form-text text-muted form-control-plaintext email" readonly name="email" value="'+email+'"></th><th scope="row"><input type="text" class="form-text text-muted form-control-plaintext commentaire" readonly name="commentaire" value="'+commentaire+'"></th><th scope="row"><input type="text" class="form-text text-muted form-control-plaintext id" hidden name="id" value="'+id+'"></th><th scope="row"><button type="button" class="btn btn-light btn-sm &'+id+'" name="modifier" id="'+id+'" data-bs-toggle="tooltip" data-bs-placement="top" title="modifier"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg></button></th><th scope="row"><button type="button" class="btn btn-light btn-sm" name="supprimer" id="'+id+'" data-bs-toggle="tooltip" data-bs-placement="top" title="supprimer"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg></button></th></tr>';
            $('#reponse').hide();
            $('#reponse').html("<div class='col-auto mx-auto my-2 alert-success text-center' role='alert'> Utilisateurs ajoutés!</div>");
            $('#reponse').fadeIn(1000);
            $('#myForm input').val('');
            $('tbody').append(form);

                // remise en "service" des boutons supprimer et modifier pour la dernière ligne ajoutée

            bouton();

        },
        error : function (errorText) {
            $('#reponse').html("<div class='col-auto mx-auto my-2 alert-danger text-center' role='alert'> Un problème est survenu, veuillez réessayer!</div>");
        }
    })
    }
};

    // fonction de suppression d'un utilisateur avec ajax

function supUser(id,nom) {
    var $ligne = $('tr[name="'+id+'"]');

    $.ajax({
        type: "POST",
        url: "data.php",
        data: {id,nom},
        dataType: "html",
        success: function () {
            $('#repNom').html("");
            $('#repPrenom').html("");
            $('#repEmail').html("");
            $('#reponse').hide();
            $('#reponse').html("<div class='col-auto mx-auto my-2 alert-success text-center' role='alert'> Utilisateur : "+ id +" supprimé!</div>");
            $('#reponse').fadeIn(1000);
            $('#myForm input').val('');
            $($ligne).remove();
        },
        error : function () {
            $('#reponse').html("<div class='col-auto mx-auto my-2 alert-danger text-center' role='alert'> Un problème est survenu, veuillez réessayer!</div>");
        }
    });
}

    // fonction pour remplir les champs formulaire pour modification d'un utilisateur avec ajax

function modifUser(id,nom) {

    $.ajax({
        type: "POST",
        url: "data.php",
        data: {nom, id},
        dataType: "json",
        success: function (data) {

            $('#id').val(data[0].Id);
            $('#nom').val(data[0].Nom);
            $('#prenom').val(data[0].Prenom);
            $('#email').val(data[0].Email);
            $('#commentaire').val(data[0].Commentaire);
            $('#modif').fadeIn(1000);
        },
        error : function () {
            $('#reponse').html("<div class='col-auto mx-auto my-2 alert-danger text-center' role='alert'> Un problème est survenu, veuillez réessayer!</div>");
        }
    });
}


    // fonction de modification d'un utilisateur avec ajax

function modifUserBDD() {
    var commentaire = $('#commentaire').val();
    var id = $('#id').val();
    var nom = $('#nom').val();
    var prenom = $('#prenom').val();
    var email = $('#email').val();
    var modif = 'modif';
    if (nom == "" && prenom == "" && email == "") {
        $('#reponse').html("<div class='col-auto mx-auto alert-danger text-center mt-3' role='alert'>Veuillez remplir les champs</div>");
        $('#repNom').html("");
        $('#repPrenom').html("");
        $('#repEmail').html("");
    } else if (nom == "") {
        $('#repNom').html("<div class='col-auto mx-auto alert-danger text-center' role='alert'>Veuillez renseigner votre nom</div>");
        $('#reponse').html("");
        $('#repPrenom').html("");
        $('#repEmail').html("");
    } else if (prenom == "") {
        $('#repPrenom').html("<div class='col-auto mx-auto alert-danger text-center' role='alert'>Veuillez renseigner votre prenom</div>");
        $('#repNom').html("");
        $('#reponse').html("");
        $('#repEmail').html("");
    } else if (email == "") {
        $('#repEmail').html("<div class='col-auto mx-auto alert-danger text-center' role='alert'>Veuillez renseigner votre email</div>");
        $('#reponse').html("");
        $('#repNom').html("");
        $('#repPrenom').html("");
    } else if (nom != "" && prenom != "" && email !="") {
    var $ligne = $('tr[name="'+id+'"]');
    $.ajax({
        type: "POST",
        url: "data.php",
        data: {id,nom, prenom, email, commentaire,modif},
        dataType: "html",
        success: function () {
            $('#repNom').html("");
            $('#repEmail').html("");
            $('#repPrenom').html("");
            var form ='<tr class="align-middle" name="'+id+'"><th scope="row"><input type="text" class="form-text text-muted form-control-plaintext nom" readonly name="nom" value="'+nom+'"></th><th scope="row"><input type="text" class="form-text text-muted form-control-plaintext prenom" readonly name="prenom"  value="'+prenom+'"></th><th scope="row"><input type="text" class="form-text text-muted form-control-plaintext email" readonly name="email" value="'+email+'"></th><th scope="row"><input type="text" class="form-text text-muted form-control-plaintext commentaire" readonly name="commentaire" value="'+commentaire+'"></th><th scope="row"><input type="text" class="form-text text-muted form-control-plaintext id" hidden name="id" value="'+id+'"></th><th scope="row"><button type="button" class="btn btn-light btn-sm &'+id+'" name="modifier" id="'+id+'" data-bs-toggle="tooltip" data-bs-placement="top" title="modifier"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg></button></th><th scope="row"><button type="button" class="btn btn-light btn-sm" name="supprimer" id="'+id+'" data-bs-toggle="tooltip" data-bs-placement="top" title="supprimer"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg></button></th></tr>';
            $('#reponse').hide();
            $('#reponse').html("<div class='col-auto mx-auto my-2 alert-success text-center' role='alert'> Utilisateur modifié!</div>");
            $('#reponse').fadeIn(1000);
            $('#myForm input').val('');
            $($ligne).replaceWith(form);
            bouton();

            $('#modif').fadeOut(1000);
        },
        error : function () {
            $('#reponse').html("<div class='col-auto mx-auto my-2 alert-danger text-center' role='alert'> Un problème est survenu, veuillez réessayer!</div>");
        }
    })
    }
};


