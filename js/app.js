const getElement = (selector) => {
  const element = document.querySelector(selector)

  if (element) return element
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  )
}

const links = getElement('.nav-links')
const navbtnDOM = getElement('.nav-btn')

navbtnDOM.addEventListener('click',()=>{
  links.classList.toggle('show-links')
})
