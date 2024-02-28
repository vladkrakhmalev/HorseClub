class Slider {
  constructor({sliderClass, controllerClass, slidesToShow, responsive, boardType, infinitely, auto}) {

    this.slider = document.getElementById(sliderClass)
    this.controller = document.getElementById(controllerClass)
    this.prevBtn = this.controller.querySelector('.slider__arrow_left')
    this.nextBtn = this.controller.querySelector('.slider__arrow_right')
    this.board = this.controller.querySelector('.slider__info')
    this.container = this.slider.querySelector('.slider__container')
    this.slides = this.container.children
    this.boardType = boardType
    this.auto = auto
    this.infinitely = infinitely
    this.currentIndex = 0
    this.intervalId = null
    this.slideWidth = this.slides[0].clientWidth
    this.slidesToShow = !responsive ? slidesToShow : responsive.reduce((acc, params) =>
      acc = params.max > window.innerWidth && window.innerWidth > params.min
        ? params.slides
        : acc
    , 0)

    this.render()

    this.board.addEventListener('click', e => this.clickToDots(e))

    this.prevBtn.addEventListener('click', () => {
      if (this.auto) this.stopSlider()
      this.goToPrevSlide()
      if (this.auto) this.startSlider()
    })

    this.nextBtn.addEventListener('click', () => {
      if (this.auto) this.stopSlider()
      this.goToNextSlide()
      if (this.auto) this.startSlider()
    })

    if (this.auto) this.slider.addEventListener('mouseenter', () => this.stopSlider())
    if (this.auto) this.slider.addEventListener('mouseleave', () => this.startSlider())
  }



  initBoard() {
    if (this.boardType === 'nums') {
      this.board.innerHTML = `${this.currentIndex + 1} / ${this.slides.length}`
    }

    if (this.boardType === 'dots') {
      this.board.classList.add('slider__dots')

      for (let i = 0; i < this.slides.length; i++) {
        const dot = document.createElement('a')
        if (i === this.currentIndex) dot.classList.add('slider__dot', 'slider__dot_active')
        dot.classList.add('slider__dot')
        dot.setAttribute('link', i)
        this.board.appendChild(dot)
      }
    }
  }

  changeBoard() {
    if (this.boardType === 'nums') {
      this.board.innerHTML = `${this.currentIndex + 1} / ${this.slides.length}`
    }

    if (this.boardType === 'dots') {
      for (let i = 0; i < this.board.children.length; i++) {
        this.board.children[i].classList.remove('slider__dot_active')
        if (i === this.currentIndex) this.board.children[i].classList.add('slider__dot_active')
      }
    }
  }

  clickToDots(e) {
    e.preventDefault()
    const id = Number(e.target.getAttribute('link'))
    this.goToSlide(id)
  }

  colorBtn() {
    this.prevBtn.classList.remove('slider__arrow_disabled')
    this.nextBtn.classList.remove('slider__arrow_disabled')
    if (this.currentIndex === 0) this.prevBtn.classList.add('slider__arrow_disabled')
    if (this.currentIndex === this.slides.length-1) this.nextBtn.classList.add('slider__arrow_disabled')
  }

  goToSlide(index) {
    const offset = -index * this.slideWidth
    this.container.style.transform = `translateX(${offset}px)`
    this.currentIndex = index
    this.changeBoard()
    this.infinitely ? '' : this.colorBtn()
  }

  goToPrevSlide() {
    if (this.currentIndex !== 0) {
      this.goToSlide(this.currentIndex - 1)
    } else if (this.infinitely) {
      this.goToSlide(this.slides.length - this.slidesToShow)
    }
  }

  goToNextSlide() {
    if (this.currentIndex !== this.slides.length - this.slidesToShow) {
      this.goToSlide(this.currentIndex + 1)
    } else if (this.infinitely) {
      this.goToSlide(0)
    }
  }

  startSlider() {
    this.intervalId = setInterval(() => this.goToNextSlide(), 4000)
  }

  stopSlider() {
    clearInterval(this.intervalId)
  }

  render() {
    this.initBoard()
    if (!this.infinitely) this.colorBtn()
    if (this.auto) this.startSlider()
  }
}