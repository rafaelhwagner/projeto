function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a img

  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar img light
    img.setAttribute("src", "./Assets/mosh.png")
  } else {
    img.setAttribute("src", "./Assets/avatarwig.png")
    //se tiver sem light mode, manter a img normal
  }
}
