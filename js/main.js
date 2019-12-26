// $(window).on('resize', function() {
//   var win = $(this);
//   if (win.width() < 1075) {

//     $('#main-left').addClass('col-xs-12');

//   } else {
//     $('#main-left').removeClass('col-xs-6');
//   }
// });

// $(window).on('resize', function() {
//     var win = $(this);
//     if (win.width() > 1060) {
  
//       $('#main-left').addClass('col-xs-6');
  
//     } else {
//       $('#main-left').removeClass('col-xs-12');
//     }
//   });

$(window).resize(function(){
    console.log('resize called');

    var width = $(window).width();
    if(width >= 300 && width <= 1090){
        $('#main-left').removeClass('col-xs-6').addClass('col-xs-12');
        $('#main-right').removeClass('col-xs-offset-6 col-xs-6').addClass('col-xs-12');
    }
    else{
        $('#main-left').removeClass('col-xs-12').addClass('col-xs-6');
        $('#main-right').removeClass('col-xs-12').addClass('col-xs-offset-6 col-xs-6');
    }
 })
 .resize();//trigger the resize event on page load.