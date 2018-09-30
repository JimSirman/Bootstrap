<script>
    $(document).ready(function() {
        $('#mycarousel').carousel({ interval:4000 });
        $('#carouselButton').click(function() {
            if ($('#carouselButton').children('span').hasClass('fa fa-pause')) {
                $('#mycarousel').carousel('pause');
                $('#carouselButton').children('span').removeClass('fa-pause');
                $('#carouselButton').children('span').addClass('fa-play');
            }
            else if($('#carouselButton').children('span').hasClass('fa fa-play')) {
                  $('#mycarousel').carousel('cycle');
                  $('#carouselButton').children('span').removeClass('fa-play');
                  $('#carouselButton').children('span').addClass('fa-pause');
            }
        });
        $("#modalLogin").click(function(){
             $('#loginModal').modal('show'); 
        });
        $("#modalCancel").click(function(){
             $('#loginModal').modal('hide');
        });
        $("#xClose").click(function(){
             $('#loginModal').modal('hide');
        });
   
        $("#ReserveTableBtn").click(function(){
             $('#ReserveTable').modal('show'); 
        });

        $("#ReserveXclose").click(function(){
             $('#ReserveTable').modal('hide');
        });
        $("#ReserveCancel").click(function(){
             $('#ReserveTable').modal('hide');
        });
                
    });

  </script>