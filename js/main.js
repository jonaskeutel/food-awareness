$(document).ready(function(){
  let options = {
    hover: true,
    coverTrigger: false
  };
  $('.dropdown-trigger').dropdown(options);
  $('.tabs').tabs();
});

function invite() {
  $('#invite-friend').fadeIn('slow');
}
