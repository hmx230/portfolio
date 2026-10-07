const target = document.querySelector(".about-text");

if (target) {
  const originalText = target.innerHTML;

  fetch("./translation.html")
    .then(response => response.text())
    .then(translationText => {

      let isTranslated = false;

      const changeText = (text) => {
        target.classList.add('is-fading');

        const onTransitionEnd = () => {
          target.removeEventListener('transitionend', onTransitionEnd);
          target.innerHTML = text;
          target.classList.remove('is-fading');
        }

        target.addEventListener('transitionend', onTransitionEnd);
      }

      target.addEventListener('mouseenter', () => {
        if (!isTranslated) {
          isTranslated = true;
          changeText(translationText);
        }
      });

      target.addEventListener('mouseleave', () => {
        if (isTranslated) {
          isTranslated = false;
          changeText(originalText);
        }
      });

    })
    .catch(error => {
      console.error("翻訳文の読み込みに失敗しました:", error);
    });
}
