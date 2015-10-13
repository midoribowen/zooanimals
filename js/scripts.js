$(document).ready(function() {
var turtle = confirm("Do you want to learn about cute turtles?! Click OK for yes or Cancel for no.")

  if (turtle) {
    $("#change-title").hide();
    $("#turtle").show();
  } else if (confirm("Do you want to learn about cute snakes?! Click OK for yes or Cancel for no.")) {
    $("#change-title").hide();
    $("#snake").show();
  } else if (confirm("Do you want to learn about cute insects?! Click OK for yes or Cancel for no.")) {
    $("#change-title").hide();
    $("#insect").show();
  } else {
    $("#change-title").hide();
    $("#mean").show();
  }

});
