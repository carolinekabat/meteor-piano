Template.piano.onCreated(function() {
  //this.subscribe('tones');
});

Template.piano.events({
  'click .key': function(event, instance) {
    console.log("Inserting sound "+$(event.target).data("tone"));

    Tones.insert({
      sound: $(event.target).data("tone"),
      unixtime: +new Date
    });
  }
});
