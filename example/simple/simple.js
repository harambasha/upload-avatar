if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Meteor.startup(function () {
    Meteor.loginWithPassword('test', '123456', function(err){console.log(err);});
  });
  Template.test.events({
    'click button.inc': function () {
      $('#editYourAvatarModal').modal();
    }
  });
}

