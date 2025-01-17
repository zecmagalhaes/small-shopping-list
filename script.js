document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".new-item")
  const addButton = document.querySelector(".add-btn")
  const listItems = document.querySelector(".list-items")
  const notification = document.querySelector(".notification")
  const closeButton = document.querySelector(".close-btn")

  function removerItem(itemLi) {
    notification.style.display = "flex"
    itemLi.remove()

    setTimeout(() => {
      notification.style.display = "none"
    }, 2000)
  }

  function adicionarItem() {

    if (input.value.trim() === "") return

    const novoItemLi = document.createElement("li")
    novoItemLi.innerHTML = `
      <label for="item${listItems.children.length + 1}">
        <input type="checkbox" id="item${listItems.children.length + 1}" />
        <span class="custom-checkbox"></span>
        <span class="paragraph">${input.value}</span>
      </label>
      <button class="delete-btn">
        <img src="assets/icons/icon delete.svg" alt="Botão de lixeira" />
      </button>
    `

    listItems.appendChild(novoItemLi)

    input.value = ""

    novoItemLi.querySelector(".delete-btn").addEventListener("click", () => {
      removerItem(novoItemLi)
    })
  }

  addButton.addEventListener("click", adicionarItem)

  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      adicionarItem()
    }
  })

  closeButton.addEventListener("click", () => {
    notification.style.display = "none"
  })
})
