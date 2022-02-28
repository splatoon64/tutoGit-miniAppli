<div class="col-auto" role="group">
    <form action="#" method="post" class="needs-validation" id="myForm" novalidate>
            <input type="hidden" name="id" id="id"/>
        <div class="input-group mb-3">
            <button type="button" class="btn btn-light btn-outline-dark col-sm-4"><label for="nom">Nom : </label></button>
            <input type="text" class="form-control text-center" id="nom" name="nom" placeholder="Votre nom ici" required>
        </div>
            <div class="row col-auto mb-3 mx-auto" id="repNom"></div>   
        <div class="input-group mb-3">
            <button type="button" class="btn btn-light btn-outline-dark col-sm-4"><label for="prenom">Prenom : </label></button>
            <input type="text" class="form-control text-center" id="prenom" name="prenom"  placeholder="Votre prenom ici" required>
        </div>
            <div class="row col-auto mb-3 mx-auto" id="repPrenom"></div>   
        <div class="input-group mb-3">
            <button type="button" class="btn btn-light btn-outline-dark col-sm-4"><label for="email">Email : </label></button>
            <input type="text" class="form-control text-center" id="email" name="email" placeholder="Votre email ici" required>
        </div>
            <div class="row col-auto mb-3 mx-auto" id="repEmail"></div>   
        <div class="input-group mb-3">
            <button type="button" class="btn btn-light btn-outline-dark col-sm-4"><label for="commentaires">Commentaire : </label></button>
            <input type="text" class="form-control text-center" id="commentaire" name="commentaire"  placeholder="Votre commentaire ici">
        </div>
    </form>
</div>
<div class="row col-sm-8 mr-3 mx-auto" id="reponse"></div>    