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
    const idNewItemLi = listItems.children.length + 1
    novoItemLi.innerHTML = `
      <label for="item${idNewItemLi}">
        <input type="checkbox" id="item${idNewItemLi}"/>
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
      const isChecked = novoItemLi.querySelector(`#item${idNewItemLi}`).checked

      if (isChecked) {
        removerItem(novoItemLi)
      } else {
        notification.textContent = "Marque o item para conseguir remover"

        notification.style.display = "flex"

        notification.style.backgroundColor = getComputedStyle(
          document.documentElement
        ).getPropertyValue("--content-secondary")

        notification.style.boxShadow = `0 0 5px var(--content-tertiary)`

        setTimeout(() => {
          notification.style.display = "none"
        }, 2000)
      }
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
