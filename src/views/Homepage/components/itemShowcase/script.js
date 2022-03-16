
$(window).on('load', function() {
    if ($(window).width() > 768) {
        $('.portfolio_item').on("mouseover", function(){
            $(this).parent().find('.portfolio_item_info').addClass("portfolio_item_info_active");
        });
        
        $('.portfolio_item').on("mouseout", function(){
            $(this).parent().find('.portfolio_item_info').removeClass("portfolio_item_info_active");
        });
    } else {
        $('.portfolio_item').on("click", function(e){
            $('.portfolio_item').removeClass("portfolio_item_info_active");
            $(this).find('.portfolio_item_info').css("opacity", "100%");
            $(this).find('.portfolio_item_info').css("transform", "translateY(0)");
        });
    }
    
})