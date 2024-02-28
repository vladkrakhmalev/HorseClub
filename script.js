new Slider({
  sliderClass: 'participant-slider',
  controllerClass: 'participant-controller',
  boardType: 'nums',
  responsive: [
    {min: 900, max: 10000, slides: 3},
    {min: 600, max: 900, slides: 2},
    {min: 0, max: 600, slides: 1},
  ],
  infinitely: true,
  auto: true
})

if (window.innerWidth < 600) {
  new Slider({
    sliderClass: 'stages-slider',
    controllerClass: 'stages-controller',
    boardType: 'dots',
    slidesToShow: 1,
    infinitely: false,
    auto: false
  })
}