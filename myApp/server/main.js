if (Meteor.isServer) {



  Meteor.startup(function() {

    return Meteor.methods({

      removeAllGaleries: function() {

        return Galeries.remove({});

      }

    });

  });

};




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
	 
	for (i = 0, len = JsonGalerie.data.length; i < len; i++) { 

   Galeries.insert(JsonGalerie.data[i])
}
  }

});
