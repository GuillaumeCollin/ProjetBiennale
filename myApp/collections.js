Images = new Mongo.Collection("images");
Auteurs = new Mongo.Collection("auteurs");
Galeries =  new Mongo.Collection("galeries");



if (Meteor.isServer) {


  

  // Global API configuration
  var Api = new Restivus({
    useDefaultAuth: true,
    prettyJson: true
  });

  // Generates: GET, POST on /api/items and GET, PUT, PATCH, DELETE on
  // /api/items/:id for the Images collection
  Api.addCollection(Images,{excludedEndpoints: ['put', 'post', 'patch', 'delete'] });

  Api.addCollection(Auteurs);

  Api.addCollection(Galeries);




}