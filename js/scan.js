var video;
var runningStream;

$(document).ready(function(){
  $('.scan-button').click(() => {
    $('.scan-button').hide();
    $('.analyze-button').show('slow', 'linear');
    video = document.getElementById('video');
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
     navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
     runningStream = stream;
     video.src = window.URL.createObjectURL(stream);
     video.play();
     setTimeout(() => {
       $('#firstItem').show();
     },4000)
     });
    }
  });
  $('.analyze-button').click(() => {
    stopVideo();
    $('.progress').show();
    setTimeout(() => {
      $('.progress').hide();
      $('#footprint').show('slow', 'linear');
    }, 2000)
  });
  $('#simulate-scan-button').click(() => {
    stopVideo();
    $('.footprint ul li').show();
  })
 });

function stopVideo() {
  try {
    $('#video').hide();
    var track = runningStream.getTracks()[0];  // if only one media track
    track.stop();
  } catch (e) {
    console.log(e);
  }
}
