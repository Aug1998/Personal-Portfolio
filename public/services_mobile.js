//Swipe
var startX, startY, endX, endY;
var servicesIndex = 1;
var section = $(".services_content");
var allItems = $(".service");

const servicesArray = [
    // html_element:    for div's effect
    // icon:            for icon effect
    // translateX:      for section transform
    {
        title: "WordPress",
        html_element: $(".services_content .service:nth-child(1)"),
        icon_active_class: "wordpress_active",
        translateX: "translateX(85vw)"
    },
    {
        title: "Desarrollo Web",
        html_element: $(".services_content .service:nth-child(2)"),
        icon_active_class: "webdev_active",
        translateX: "translateX(0vw)"
    },
    {
        title: "Arreglos",
        html_element: $(".services_content .service:nth-child(3)"),
        icon_active_class: "arreglos_active",
        translateX: "translateX(-85vw)"
    },
]

//configs the elements on load
window.onload = function(){
        $(".services").on('touchstart', function(event){
        startX = event.touches[0].clientX;
        startY = event.touches[0].clientY;
    })

        $(".services").on('touchend', function(event){
        endX = event.changedTouches[0].clientX;
        endY = event.changedTouches[0].clientY;
        
        swipeServices(startX, endX, startY, endY)
    })
}

//Swipe Handler
function swipeServices(startX, endX, startY, endY){
    //calculate the distance on x-axis and o y-axis.
    var xDist = endX - startX;
    var yDist = endY - startY;

    //check if the user intended to scroll vertically
    yDist = yDist > 0 ? yDist : -yDist;
    if (yDist > 30) {
        return
    }

    handleChange(section, servicesArray, xDist)
}

function handleChange(section, items_array, xDist) {
    if (xDist == 0 || servicesIndex == 0 && xDist > 0 || servicesIndex == 2 && xDist < 0) {
        return;
    }

    xDist > 0 ? servicesIndex-- : servicesIndex++;

    section.css("transform", items_array[servicesIndex].translateX);
    allItems.removeClass("mobile_service_active");
    allItems.removeClass("webdev_active wordpress_active arreglos_active");
    setTimeout(() => {
        items_array[servicesIndex].html_element.addClass("mobile_service_active");
        items_array[servicesIndex].html_element.addClass(items_array[servicesIndex].icon_active_class);
    }, 400);
}

