$(document).ready(function(){

  $(document).on("click", "#pet-search-button", function(event) {
    event.preventDefault();
    var url = 'http://api.petfinder.com/pet.find?format=json&key=290d0be5d1e98ffa6508e7da169dba99&animal=cat&location=94105';
    // var pet = $("#pet-search").val();

    $.ajax ({
      type : 'GET',
      data : {},
      url : url + '&callback=?',
      dataType: 'json',
      success : function(pet) {
        console.log(pet.petfinder.pets.pet[0].description.$t);

        HANDLE.renderTemplate ({
          templateSource: "#pet-template",
          data: pet.petfinder.pets.pet,
          where: "#pet-card-container",
          clearOriginal: true
        });
      },
      error : function(request,error)
      {
        alert("Request: " + JSON.stringify(request));


      }

    });



    $(".pet-card").show();
  });
});
