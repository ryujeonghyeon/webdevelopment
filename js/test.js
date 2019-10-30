$(window).scroll(function () {
    var scroll = $(window).scrollTop();
        if(scroll>=0 && scroll<10){
            $('.header').css('display','flex');
            $('.header').css('background','none');
            $('.header').css('color','black');
            console.log("display flex");
        }else if (scroll>=10 && scroll<700) {
            $('.header').css('display','none')
            console.log("display none");
        }else if (scroll>= 700) {
            $('.header').css('display','flex');
            $('.header').css('background','black');
            $('.header').css('color','white');
            console.log("display flex");
        } 
	}
); 