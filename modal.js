const modalOverlay = document.querySelector('.modal-overlay');
const receitas = document.querySelectorAll('.receita');

for (let receita of receitas) {
  receita.addEventListener("click", function() {
      const contentId = receita.getAttribute("id")
      modalOverlay.classList.add('active')
      modalOverlay.querySelector("iframe").src = `${contentId}`
  })
}

document.querySelector('.close-modal').addEventListener("click", function() {
  modalOverlay.classList.remove('active');
})