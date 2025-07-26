var year = new Date().getFullYear()
var lastModified = new Date(document.lastModified)

document.querySelector("#lastModified").innerHTML = `Last Modified: ${lastModified}`
document.querySelector("#copyright").innerHTML = `&#169;${year} Emilio Sosa - WDD 231`