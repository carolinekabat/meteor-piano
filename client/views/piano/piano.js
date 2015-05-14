Template.piano.onCreated(function() {
  this.subscribe('tones');
});

Template.piano.events({
  'click .key': function(event, instance) {
    console.log("Pressed key "+$(event.target).data("tone")+"!");

    // play sound

    Tones.insert({
      sound: $(event.target).data("tone")
    });
  }
});
