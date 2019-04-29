var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/bdd_yami', function(err){
    if(err) {
        throw err;
    }
});



 
// Création du schéma pour mes utilisateurs
var mesUsers = new mongoose.Schema({
  nom : { type : String, match: /^[a-zA-Z0-9-_]+$/ },
  email : String,
  pwd : { String }
});
 
// Création du Model pour les users
var mesUsers = mongoose.model('users', mesUsers);
 
// Je crée une instance du Model
var monUser = new mesUsers({ nom : 'bodenan', email: 'jovialbanga@gmail.com', pwd: 123456 });

 
// Je le sauvegarde dans MongoDB !
monUser.save(function (err) {
  if (err) { throw err; }
  console.log('Utilisateur ajouté avec succès !');
  // On se déconnecte de MongoDB maintenant
  mongoose.connection.close();
});
