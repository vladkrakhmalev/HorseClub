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

const buttons = document.querySelectorAll('.open-popup')
buttons.forEach(button => {
  button.addEventListener('click', e => {
    const link = e.target.getAttribute('link')
    const popup = document.getElementById(link)
    popup.classList.add('popup_visible')
  })
})

const popup = document.getElementById('popup')
popup.addEventListener('click', () => popup.classList.remove('popup_visible'))