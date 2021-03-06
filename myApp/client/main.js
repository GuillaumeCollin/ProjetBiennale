
Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.galeries.helpers({
  counter() {
    return Template.instance().counter.get();
  },


  galeries() {
  	return Galeries.find()
  }

});

Template.images.helpers({

  images()  {
    return Images.find()
  }

});


Template.piles.helpers({

  piles()  {
    return Piles.find()
  }

});


Template.auteurs.helpers({

  auteurs() {
      return Auteurs.find()
    }
});


Template.images.events({
  'submit': function(event, template){
    event.preventDefault();
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      _.each(template.find('#test').files, function(file) {
        if(file.size > 1){
          var compteur = null;
          var reader = new FileReader();
          reader.onload = function(e) {
            Images.insert({
              _id : file.name,
              name: file.name,
              type: file.type,
              dataUrl: reader.result,
            })
          }
          reader.readAsDataURL(file);
        }
      });
    }
  },
  'click .sup'(event, instance) {
  console.log(this);
  Images.remove(this._id);
  },
  'click .show'(event, instance) {
    window.open(this.dataUrl);
    console.log(this);
    }
});

Template.galeries.events({
  'click .delete'(event, instance) {
 	console.log(this)
 	Galeries.remove(this._id)
  },
  'click #AjoutGaleries'(event, instance) {
  	event.preventDefault();
  	console.log("ca fonctionne")
  	var text=$("#ok").val();
  	if (text!="")
  	{
  		Galeries.insert({name:text})
  		//$("#ok").val("")
  	}
  	console.log(text)
  }
});

Template.piles.events({
  'click .delete'(event, instance) {
  console.log(this)
  Piles.remove(this._id)
  }
});


Template.auteurs.events({
  'click .delete'(event, instance) {
  console.log(this)
  Auteurs.remove(this._id)
  },
  'click #AjoutAuteurs'(event, instance) {
    event.preventDefault();
    console.log("ca fonctionne")
    var text=$("#oki").val();
    if (text!="")
    {
      Auteurs.insert({name:text})
      //$("#ok").val("")
    }
    console.log(text)
  }
});
