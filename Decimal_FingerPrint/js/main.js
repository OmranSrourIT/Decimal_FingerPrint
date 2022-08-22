  $(function(){
      $('#login').popover({
          placement: 'bottom',
          title: 'Sign In',
          html:true,
          content:  $('#myForm').html()
      }).on('click', function(){
        // had to put it within the on click action so it grabs the correct info on submit

    }),
    $('#language').popover({
          placement: 'bottom',
          title: 'Language',
          html:true,
          content:  $('#lang').html()
      }).on('click', function(){
        // had to put it within the on click action so it grabs the correct info on submit

    }),
     $('#search').popover({
      placement: 'left',
      title: 'Search',
      html:true,
      content:  $('#search_popap').html()
  }).on('click', function(){
    // had to put it within the on click action so it grabs the correct info on submit

	}),
                $("#demo3").bootstrapNews({
            newsPerPage: 4,
            autoplay: false,
            
            onToDo: function () {
                //console.log(this);
            }
        }); 
                        $(".demo1").bootstrapNews({
            newsPerPage: 4,
            autoplay: true,
      pauseOnHover:true,
            direction: 'up',
            newsTickerInterval: 4000,
            onToDo: function () {
                //console.log(this);
            }
        });

  });

  $(document).ready(function() {
		$('#myCarousel2').carousel({
			interval: 0
			})
		    $('#myCarousel2').on('slid.bs.carousel', function() {
		    	//alert("slid");

		    $(".dropdown").hover(
		        function() { $('.dropdown-menu', this).stop().fadeIn("fast");
		        },
		        function() { $('.dropdown-menu', this).stop().fadeOut("fast");
		    });


		});
 $('#myCarousel').carousel({
                interval: 5000
        });
 
        $('#carousel-text').html($('#slide-content-0').html());
 
        //Handles the carousel thumbnails
       $('[id^=carousel-selector-]').click( function(){
            var id = this.id.substr(this.id.lastIndexOf("-") + 1);
            var id = parseInt(id);
            $('#myCarousel').carousel(id);
        });
 
 
        // When the carousel slides, auto update the text
        $('#myCarousel').on('slid.bs.carousel', function (e) {
                 var id = $('#myCarousel .carousel-inner .item.active').data('slide-number');
                $('#carousel-text').html($('#slide-content-'+id).html());
        });
	

});
