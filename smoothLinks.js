document.addEventListener('DOMContentLoaded', function() {

    const anchorLinks = document.querySelectorAll('a[href^="#"]')

    anchorLinks.forEach(function(anchorLink) {

      anchorLink.addEventListener('click', function(e) {
        e.preventDefault()
        const targetId = this.getAttribute('href').substring(1)
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
          const targetOffset = targetElement.getBoundingClientRect().top + window.pageYOffset

          const scrollOptions = {
            top: targetOffset,
            behavior: 'smooth'
          }

          window.scrollTo(scrollOptions)
        }
      })
    })
  })