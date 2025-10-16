// Smooth scrolling
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

// Mouse tracking for hero background effect
const heroSection = document.querySelector(".hero-section")
const heroBackground = document.querySelector(".hero-background")

if (heroSection && heroBackground) {
  heroSection.addEventListener("mousemove", (e) => {
    const x = e.clientX
    const y = e.clientY
    heroBackground.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(96, 165, 250, 0.15), transparent 50%)`
  })
}

// Add scroll reveal animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe all cards
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card")
  cards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(card)
  })
})
