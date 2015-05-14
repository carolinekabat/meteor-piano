
Tones = new Mongo.Collection('tones');

if(Meteor.isServer) {
  Meteor.startup(function() {
    Meteor.publish("tones", function() {
      return Tones.find({}, { limit: 1, sort: {_id: -1}});
    });
  });
}

if(Meteor.isClient) {
    Meteor.subscribe("tones");

    var tones = Tones.find();
    tones.observe({
      added: function(doc){
        if (doc) {
          console.log("Playing sound "+doc.sound);
          // play sound
        }

      }
    });
}
