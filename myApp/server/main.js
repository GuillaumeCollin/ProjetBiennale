
Meteor.startup(() => {
  // code to run on server at startup
if (Auteurs.find().count() === 0) {
	Auteurs.insert(auteursJson)
  }

if (Piles.find().count() === 0) {
	Piles.insert(pilesJson)
  }

if (Planete.find().count() === 0) {
	Planete.insert(planeteJson)
  }
  
if (Galeries.find().count() === 0) {
  }

});
