
Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.items.helpers({
  counter() {
    return Template.instance().counter.get();
  },


  items() {
  	return Items.find()
  }
});

Template.images.helpers({

  images()  {
    return Images.find()
  }

});

Template.images.events({
  'submit': function(event, template){
    event.preventDefault();
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      _.each(template.find('#test').files, function(file) {
        if(file.size > 1){
          var reader = new FileReader();
          reader.onload = function(e) {
            Images.insert({
              name: file.name,
              type: file.type,
              dataUrl: reader.result
            });
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
    }
});

Template.items.events({
  'click .delete'(event, instance) {
 	console.log(this)
 	Items.remove(this._id)
  },
  'click #AjoutItem'(event, instance) {
  	event.preventDefault();
  	console.log("ca fonctionne")
  	var text=$("#ok").val();
  	if (text!="")
  	{
  		Items.insert({name:text})
  		//$("#ok").val("")
  	}
  	console.log(text)
  }
});
