$(document).ready(function(){

  $(document).on("click", "#pet-search-button", function(event) {
        event.preventDefault();

@import petfinder
api = petfinder.PetFinderClient(api_key='290d0be5d1e98ffa6508e7da169dba99', api_secret='396697d01dfb437b275c0ee32cb45be9')
for pet in api.pet_find(location="#"):
    # This will be a pet record in the form of a dict.
    print(pet)

    $.ajax({
              type : 'GET',
              data : {Location},
              url : http:"api.petfinder.com/my.method?key=290d0be5d1e98ffa6508e7da169dba99&arg1=foo&token=67890&sig=396697d01dfb437b275c0ee32cb45be9" + Location?' ,
              dataType: 'json',
              success : function(data) {
                  // stores result
                  var result = '';

                  var petfinder = data.petfinder;
                  var infoHTML = '<ul>';
                  infoHTML += '<li>';
                  infoHTML += '<strong>Description</strong><br>';
                  infoHTML += petfinder.pet.description['$t'];
                  infoHTML += '</li>';

                  infoHTML += '</li>';

                  infoHTML += '</ul>';
                  return infoHTML;
                  $('#petfinderInfo').html(infoHTML);

                  // $('#petfinderInfo').html(petfinder.pet.description['$t']);
                  //
                  console.log(petfinder);
              },
              error : function(request,error)
              {
                  alert("Request: "+JSON.stringify(request));
              }
          });

// for pet in api.pet_find(location="#"):
//     print(pet)
//
//
//
//         petfinderAPI.init({
//                     key: '290d0be5d1e98ffa6508e7da169dba99', // Learn more: https://www.petfinder.com/developers/api-key
//
//                     callback: function () {
//                         petfinderSort.init(); // If you want to use the filtering plugin
//                     }
//                 });
//
//             })(window, document);
//
//
//
//         var petfinder = $("#pet-search-button").val();
//
//   var url = 'http://api.petfinder.com/pet.getRandom?key=290d0be5d1e98ffa6508e7da169dba99&output=full&format=json';
//
//       $.ajax({
//           type : 'GET',
//           data : {Location},
//           url : url+'&callback=?' ,
//           dataType: 'json',
//           success : function(data) {
//               // stores result
//               var result = '';
//
//               var petfinder = data.petfinder;
//               var infoHTML = '<ul>';
//               infoHTML += '<li>';
//               infoHTML += '<strong>Description</strong><br>';
//               infoHTML += petfinder.pet.description['$t'];
//               infoHTML += '</li>';
//
//               infoHTML += '</li>';
//
//               infoHTML += '</ul>';
//               return infoHTML;
//               $('#petfinderInfo').html(infoHTML);
//
//               // $('#petfinderInfo').html(petfinder.pet.description['$t']);
//               //
//               console.log(petfinder);
//           },
//           error : function(request,error)
//           {
//               alert("Request: "+JSON.stringify(request));
//           }
//       });
});