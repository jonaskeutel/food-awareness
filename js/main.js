$(document).ready(function(){
  let options = {
    hover: true,
    coverTrigger: false
  };
  $('.dropdown-trigger').dropdown(options);
  $('.tabs').tabs();
  $('#challenge-button').click(() => {window.location.href = "newChallenge.html";})
 });
