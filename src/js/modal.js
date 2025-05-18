(() => {
    const refs = {
      // Додати атрибут data-modal-open на кнопку відкриття 1й кнопки(10$)
      openModalBtn: document.querySelector("[data-modal-open]"),
      // Додати атрибут data-modal-close на кнопку закриття 1й кнопки(10$)
      closeModalBtn: document.querySelector("[data-modal-close]"),
      // Додати атрибут data-modal на бекдроп модалки
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
      refs.modal.classList.toggle("is-open");
    }
  })();
  
  (() => {
    const refs = {
      // Додати атрибут data-modal-open на кнопку відкриття 2й кнопки(65$)
      openModalBtn: document.querySelector("[data-target-open]"),
      // Додати атрибут data-modal-close на кнопку закриття 2й кнопки(65$)
      closeModalBtn: document.querySelector("[data-target-close]"),
      // Додати атрибут data-modal на бекдроп модалки
      modal: document.querySelector("[data-target]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
      refs.modal.classList.toggle("is-open");
    }
})();
(() => {
    const refs = {
      // Додати атрибут data-modal-open на кнопку відкриття 3й кнопки (80$)
      openModalBtn: document.querySelector("[data-backdrop-open]"),
      // Додати атрибут data-modal-close на кнопку закриття 3й кнопки (80$)
      closeModalBtn: document.querySelector("[data-backdrop-close]"),
      // Додати атрибут data-modal на бекдроп модалки
      modal: document.querySelector("[data-backdrop]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
      refs.modal.classList.toggle("is-open");
    }
  })();