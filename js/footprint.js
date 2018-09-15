const defaultImages = {
  top: 'images/foot_top_yellow.svg',
  middle: 'images/foot_middle_middle_orange.svg',
  bottom: 'images/foot_bottom_light_orange.svg'
}

$(document).ready(function(){
  // First Item
  $('#firstItem').hover(() => {
    itemOneValues();
  });

  $('#firstItem').mouseleave(() => {
    resetDefaultValues();
  });

  // Alternative 1
  $('#alternativeOne').hover(() => {
    alternativeOneValues();
  });

  $('#alternativeOne').mouseleave(() => {
    resetDefaultValues();
  });

  // Alternative 2
  $('#alternativeTwo').hover(() => {
    alternativeTwoValues();
  });

  $('#alternativeTwo').mouseleave(() => {
    resetDefaultValues();
  });

  // Alternative 1
  $('#alternativeThree').hover(() => {
    alternativeThreeValues();
  });

  $('#alternativeThree').mouseleave(() => {
    resetDefaultValues();
  });

  // Alternative 1
  $('#alternativeFour').hover(() => {
    alternativeFourValues();
  });

  $('#alternativeFour').mouseleave(() => {
    resetDefaultValues();
  });
 });


function resetDefaultValues() {
  $('#footpring-title').html("Your current footprint");
  $('#top').attr("src", defaultImages.top);
  $('#middle').attr("src", defaultImages.middle);
  $('#bottom').attr("src", defaultImages.bottom);
}

function itemOneValues() {
  $('#footpring-title').html("Coca Cola");
  $('#top').attr("src", 'images/foot_top_red.svg');
  $('#middle').attr("src", 'images/foot_middle_middle_orange.svg');
  $('#bottom').attr("src", 'images/foot_bottom_red.svg');
}

function alternativeOneValues() {
  $('#footpring-title').html("Water");
  $('#top').attr("src", 'images/foot_top_green.svg');
  $('#middle').attr("src", 'images/foot_middle_green.svg');
  $('#bottom').attr("src", 'images/foot_bottom_green.svg');
}

function alternativeTwoValues() {
  $('#footpring-title').html("Orange Juice");
  $('#top').attr("src", 'images/foot_top_yellow.svg');
  $('#middle').attr("src", 'images/foot_middle_yellow.svg');
  $('#bottom').attr("src", 'images/foot_bottom_middle_orange.svg');
}

function alternativeThreeValues() {
  $('#footpring-title').html("Local Lemonade");
  $('#top').attr("src", 'images/foot_top_green.svg');
  $('#middle').attr("src", 'images/foot_middle_yellow.svg');
  $('#bottom').attr("src", 'images/foot_bottom_yellow.svg');
}

function alternativeFourValues() {
  $('#footpring-title').html("Fanta");
  $('#top').attr("src", 'images/foot_top_red.svg');
  $('#middle').attr("src", 'images/foot_middle_middle_orange.svg');
  $('#bottom').attr("src", 'images/foot_bottom_red.svg');
}
