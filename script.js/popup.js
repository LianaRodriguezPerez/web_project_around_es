function initPopus() {
  const openProfile = document.querySelector(".content__profile-button");
  const windowProfile = document.querySelector(".popup");
  const closeProfile = document.querySelector(".popup__container-close");
  const closeSaveProfile = document.querySelector(".popup__container-save");

  const openImg = document.querySelector(".content__profile-editar");
  const windowImg = document.querySelector(".popup__add");
  const closeImg = document.querySelector(".popup__addCard-close");

  function openPopup(popup) {
    popup.classList.add("popup_opened");
  }
  function closePopup(popup) {
    popup.classList.remove("popup_opened");
  }

  openProfile.addEventListener("click", () => {
    openPopup(windowProfile);
  });

  closeProfile.addEventListener("click", () => {
    closePopup(windowProfile);
  });

  closeSaveProfile.addEventListener("click", () => {
    closePopup(windowProfile);
  });

  openImg.addEventListener("click", () => {
    openPopup(windowImg);
  });
  closeImg.addEventListener("click", () => {
    closePopup(windowImg);
  });

  windowProfile.addEventListener("click", (e) => {
    if (e.target === windowProfile) {
      closePopup(windowProfile);
    }
  });

  windowImg.addEventListener("click", (e) => {
    if (e.target === windowImg) {
      closePopup(windowImg);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closePopup(windowProfile);
      closePopup(windowImg);
    }
  });
}
export { initPopus };
