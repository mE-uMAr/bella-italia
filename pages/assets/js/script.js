// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const barsLogo = document.getElementById("bars-logo")
  const pagesTxt = document.querySelector(".pages-txt")

  if (barsLogo) {
    barsLogo.addEventListener("click", () => {
      pagesTxt.classList.toggle("active")
    })
  }

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".pages") && pagesTxt.classList.contains("active")) {
      pagesTxt.classList.remove("active")
    }
  })

  // Sticky Header
  const header = document.getElementById("header")
  const backToTop = document.getElementById("backToTop")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("scrolled")
      if (backToTop) {
        backToTop.classList.add("visible")
      }
    } else {
      header.classList.remove("scrolled")
      if (backToTop) {
        backToTop.classList.remove("visible")
      }
    }
  })

  // Event Slider
  const prevBtn = document.getElementById("prevBtn")
  const nxtBtn = document.getElementById("nxtBtn")
  const eventContainer = document.querySelector(".event-container")

  if (prevBtn && nxtBtn && eventContainer) {
    let position = 0
    const step = 380 // Width of event card + gap

    nxtBtn.addEventListener("click", () => {
      const maxPosition = eventContainer.scrollWidth - eventContainer.clientWidth
      position = Math.min(position + step, maxPosition)
      eventContainer.style.transform = `translateX(-${position}px)`
    })

    prevBtn.addEventListener("click", () => {
      position = Math.max(position - step, 0)
      eventContainer.style.transform = `translateX(-${position}px)`
    })
  }

  // Menu Filter
  const filterBtns = document.querySelectorAll(".filter-btn")
  const foodItems = document.querySelectorAll(".food-item")

  if (filterBtns.length > 0 && foodItems.length > 0) {
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        // Remove active class from all buttons
        filterBtns.forEach((b) => b.classList.remove("active"))
        // Add active class to clicked button
        this.classList.add("active")

        const filter = this.getAttribute("data-filter")

        foodItems.forEach((item) => {
          if (filter === "all" || item.getAttribute("data-category") === filter) {
            item.style.display = "block"
          } else {
            item.style.display = "none"
          }
        })
      })
    })
  }

  // Testimonial Slider
  const testimonialDots = document.querySelectorAll(".testimonial-dots .dot")
  const testimonials = document.querySelectorAll(".testimonial")

  if (testimonialDots.length > 0 && testimonials.length > 0) {
    testimonialDots.forEach((dot, index) => {
      dot.addEventListener("click", function () {
        // Remove active class from all dots
        testimonialDots.forEach((d) => d.classList.remove("active"))
        // Add active class to clicked dot
        this.classList.add("active")

        // Hide all testimonials
        testimonials.forEach((t) => (t.style.display = "none"))
        // Show selected testimonial
        testimonials[index].style.display = "block"
      })
    })

    // Auto rotate testimonials
    let currentTestimonial = 0

    function rotateTestimonials() {
      testimonials.forEach((t) => (t.style.display = "none"))
      testimonialDots.forEach((d) => d.classList.remove("active"))

      currentTestimonial = (currentTestimonial + 1) % testimonials.length

      testimonials[currentTestimonial].style.display = "block"
      testimonialDots[currentTestimonial].classList.add("active")
    }

    // Start auto rotation
    setInterval(rotateTestimonials, 5000)
  }

  // Menu Tabs
  const menuTabs = document.querySelectorAll(".menu-tab")
  const menuSections = document.querySelectorAll(".menu-section")

  if (menuTabs.length > 0 && menuSections.length > 0) {
    menuTabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        // Remove active class from all tabs
        menuTabs.forEach((t) => t.classList.remove("active"))
        // Add active class to clicked tab
        this.classList.add("active")

        const tabId = this.getAttribute("data-tab")

        // Hide all sections
        menuSections.forEach((section) => section.classList.remove("active"))
        // Show selected section
        document.getElementById(tabId).classList.add("active")
      })
    })
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll(".faq-item")

  if (faqItems.length > 0) {
    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question")

      question.addEventListener("click", () => {
        // Toggle active class on clicked item
        item.classList.toggle("active")

        // Close other items
        faqItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove("active")
          }
        })
      })
    })
  }

  // Scroll Animation
  const scrollElements = document.querySelectorAll(".scroll-animate")

  function elementInView(el) {
    const elementTop = el.getBoundingClientRect().top
    return elementTop <= window.innerHeight * 0.8
  }

  function displayScrollElement(element) {
    element.classList.add("visible")
  }

  function hideScrollElement(element) {
    element.classList.remove("visible")
  }

  function handleScrollAnimation() {
    scrollElements.forEach((el) => {
      if (elementInView(el)) {
        displayScrollElement(el)
      } else {
        hideScrollElement(el)
      }
    })
  }

  // Initial check
  handleScrollAnimation()

  // Add scroll event listener
  window.addEventListener("scroll", handleScrollAnimation)
})

