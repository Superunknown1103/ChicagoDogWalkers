

 $("#loginSubmit").on("click", function send() {

  firstname = $("#firstName").val().trim();
  lastname = $("#lastName").val().trim();
  email = $('#loginEmail').val().trim();
  val = $('input[name=genderInput]:checked').val();


  let userInput = firstname + ' ' + lastname + ' ' + email + ' ' + val;
  let userName = firstname + ' ' + lastname;
  let justName = firstname;
  $("#nameBox").html('Currently logged in as' + ' ' + userName);
  $("#storedName").html(justName);

  console.log(userName);
  console.log(userInput);
  console.log(val);
  window.val = val;

 });

$("#yumbutton").on("click", function displayPicture() {

  console.log(val);
  if (val === 'Male'){
    displayPictureM();
  } else if
    (val === 'Female'){
  displayPictureW();  `1`
} else if (val === 'Both'){
  displayPictureMW();
};

});

function displayPictureW(){

$('#centerImage').remove();
$('#pictureView').empty();
  // var gender = $(this).attr('data-name');
  var queryURL = "https://api.shopstyle.com/api/v2/products?pid=uid3929-39772923-63&fts=women&offset=0&limit=99";

  $.ajax({url: queryURL, method: 'GET'}).done(function(response) {

    console.log(response);
    var results = response.products;

    for (var i = 0; i < results.length; i++) {
      var pictureDiv = $('<div class="pictureDiv">');
      var p = $("<div class='overlay'></div>");
      var nastybutton = $("<div  class='nastybutton buttonWrapper2'><div class=' button' id='nastybutton'><a href='#' onclick='return false;'> nasty </a></div></div>");
      var yumbutton = $("<div  class='yumbutton buttonWrapper'><div class=' button' id='yumbutton'><a href='#' onclick='return false;'> yum </a>");
          var Image = $("<img class='images'>");
          var Still = response.products[i].image.sizes.Original.url;
          var url = response.products[i].clickUrl;
          var id = response.products[i].id;
          var name = response.products[i].name;
          console.log(Still);


          Image.attr('data-still', Still);
          Image.attr('src', Still);
          yumbutton.attr('data-id', response.products[i].id);
          yumbutton.attr('data-url', response.products[i].clickUrl);
          yumbutton.attr('data-name', response.products[i].name);
          nastybutton.attr('data-id', response.products[i].id);
          nastybutton.attr('data-url', response.products[i].clickUrl);
          nastybutton.attr('data-name', response.products[i].name);


          pictureDiv.append(Image);
          pictureDiv.append(p);
          pictureDiv.append(yumbutton);
          pictureDiv.append(nastybutton);


        $('#pictureView').prepend(pictureDiv);
    };
        $('.yumbutton').on('click', function(event){
          var product= {
              productid: $(this).data('id'),
              url: $(this).data('url'),
              name: $(this).data('name'),
              liked: true
           }
        console.log($(this).data('id'));
            $.post('/api/products', product)
            .done(function(data){
             console.log(data);
      });
       });
        $('.nastybutton').on('click', function(event){
          var product= {
              productid: $(this).data('id'),
              url: $(this).data('url'),
              name: $(this).data('name'),
              liked: false
            }
        console.log(product);
            $.post('/api/products', product)
            .done(function(data){
             console.log(data);
        });
      });
        });
      };

// currently the MALE model is the working model, which I will then copy into all of the other genders.

    function displayPictureM(){

    $('#centerImage').remove();
    $('#pictureView').empty();
      // var gender = $(this).attr('data-name');
      var queryURL = "https://api.shopstyle.com/api/v2/products?pid=uid3929-39772923-63&fts=men&offset=0&limit=99";

      $.ajax({url: queryURL, method: 'GET'}).done(function(response) {

        console.log(response);
        var results = response.products;

        for (var i = 0; i < results.length; i++) {
          var pictureDiv = $('<div class="pictureDiv">');
          var p = $("<div class='overlay'></div>");
          var nastybutton = $("<div  class='nastybutton buttonWrapper2'><div class=' button' id='nastybutton'><a href='#' onclick='return false;'> nasty </a></div></div>");
          var yumbutton = $("<div  class='yumbutton buttonWrapper'><div class=' button' id='yumbutton'><a href='#' onclick='return false;'> yum </a>");
              var Image = $("<img class='images'>")
              var Still = response.products[i].image.sizes.Original.url;
              var url = response.products[i].clickUrl;
              var id = response.products[i].id;
              var name = response.products[i].name;
              var nastyimg = $('#nasty').attr("src");
              console.log(Still);


              // Image.attr('data-still', Still);
              Image.attr('src', Still);
              yumbutton.attr('data-id', response.products[i].id);
              yumbutton.attr('data-url', response.products[i].clickUrl);
              yumbutton.attr('data-name', response.products[i].name);
              yumbutton.attr('data-image', response.products[i].image.sizes.Original.url);
              nastybutton.attr('data-id', response.products[i].id);
              nastybutton.attr('data-url', response.products[i].clickUrl);
              nastybutton.attr('data-name', response.products[i].name);
              nastybutton.attr('data-image', response.products[i].image.sizes.Original.url);

              pictureDiv.append(Image);
              pictureDiv.append(p);
              pictureDiv.append(yumbutton);
              pictureDiv.append(nastybutton);


            $('#pictureView').prepend(pictureDiv);
        };
            $('.yumbutton').on('click', function(event){
              var product= {
                  productid: $(this).data('id'),
                  url: $(this).data('url'),
                  name: $(this).data('name'),
                  liked: true
               }
            console.log($(this).data('id'));
                $.post('/api/products', product)
                .done(function(data){
                 console.log(data);
          });
           });
            $('.nastybutton').on('click', function(event){
              var product= {
                  productid: $(this).data('id'),
                  url: $(this).data('url'),
                  name: $(this).data('name'),
                  liked: false
                }
                // console.log('siblings', $(this).siblings('img').first().img[0]);
            console.log(product);
                $.post('/api/products', product)
                .done(function(data){
                 console.log(data);
            });
          });
            });
          };


          function displayPictureMW(){

          $('#centerImage').remove();
          $('#pictureView').empty();
            // var gender = $(this).attr('data-name');
            var queryURL = "https://api.shopstyle.com/api/v2/products?pid=uid3929-39772923-63&fts=&offset=0&limit=99";

            $.ajax({url: queryURL, method: 'GET'}).done(function(response) {

              console.log(response);
              var results = response.products;

              for (var i = 0; i < results.length; i++) {
                var pictureDiv = $('<div class="pictureDiv">');
                var p = $("<div class='overlay'></div>");
                var nastybutton = $("<div  class='nastybutton buttonWrapper2'><div class=' button' id='nastybutton'><a href='#' onclick='return false;'> nasty </a></div></div>");
                var yumbutton = $("<div  class='yumbutton buttonWrapper'><div class=' button' id='yumbutton'><a href='#' onclick='return false;'> yum </a>");
                    var Image = $("<img class='images'>");
                    var Still = response.products[i].image.sizes.Original.url;
                    var url = response.products[i].clickUrl;
                    var id = response.products[i].id;
                    var name = response.products[i].name;
                    console.log(Still);


                    Image.attr('data-still', Still);
                    Image.attr('src', Still);
                    yumbutton.attr('data-id', response.products[i].id);
                    yumbutton.attr('data-url', response.products[i].clickUrl);
                    yumbutton.attr('data-name', response.products[i].name);
                    nastybutton.attr('data-id', response.products[i].id);
                    nastybutton.attr('data-url', response.products[i].clickUrl);
                    nastybutton.attr('data-name', response.products[i].name);


                    pictureDiv.append(Image);
                    pictureDiv.append(p);
                    pictureDiv.append(yumbutton);
                    pictureDiv.append(nastybutton);


                  $('#pictureView').prepend(pictureDiv);
              };
                  $('.yumbutton').on('click', function(event){
                    var product= {
                        productid: $(this).data('id'),
                        url: $(this).data('url'),
                        name: $(this).data('name'),
                        liked: true
                     }
                  console.log($(this).data('id'));
                      $.post('/api/products', product)
                      .done(function(data){
                       console.log(data);
                });
                 });
                  $('.nastybutton').on('click', function(event){
                    var product= {
                        productid: $(this).data('id'),
                        url: $(this).data('url'),
                        name: $(this).data('name'),
                        liked: false
                      }
                  console.log(product);
                      $.post('/api/products', product)
                      .done(function(data){
                       console.log(data);
                  });
                });
                  });
                };

  function clearPicture(){
    $('#pictureView').empty();
  }

  function history() {

        console.log("WORKING");

          $('#id02').show();

          $('#product').empty();


      $.get("/api/products", function(data) {
          for (var i = 0; i < data.length; i++) {
              var historyList = $('#product');
              var productNo = data[i].productid;
              var buyURL = data[i].url;
              var goBuy = "<a href='" + buyURL + "'>BUY</a>";
              var name = data[i].name;
              var want;

                    console.log('things are happening');
              if (data[i].liked) {
                  want = "YUM ;^D"
              }
              else {
                  want = "NASTY D^;"
              };

              // Append div-div-div break, move to next in loop
              historyList.append("<div class='histlist mH' 'historyBox' id='menu'+ i>" + name + "　｜｜　" + goBuy + "　｜｜　" + want
                   + "<div></br>");


          }
      });

      };

      $('#uhbtn').on('click', function(event){
        history();
      });

      var i=0;
      $('.mH').each(function(){
          i++;
          var newID='menu'+i;
          $(this).attr('id',newID);
          $(this).val(i);
      });


      function remove(link) {
        link.parentNode.parentNode.removeChild(link.parentNode);
    };

// API DUMP //
