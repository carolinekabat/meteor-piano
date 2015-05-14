Template.main.onCreated(function() {
  this.subscribe('tone');
});

Template.main.events({
  'click .key': function(event, instance) {
    event.preventDefault();
    console.log("Pressed key!");
    Tones.insert({
      sound: tone
    });
  }
});
