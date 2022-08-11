var listItems = document.querySelector('.jl-portfolio-list');

var waypoint = new Waypoint({
    element: listItems.querySelector('.jl-slider-item'),
    handler: function () {
        console.log(listItems.querySelector('.jl-slider-item'));
    },
    offset: '80%'
})


