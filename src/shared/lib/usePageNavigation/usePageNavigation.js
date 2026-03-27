import { onMounted, onUnmounted } from 'vue';

export function usePageNavigation() {
  const handleNavigation = (e) => {
    const menuLink = e.target.closest('[data-goto]');
    if (!menuLink) return;

    const selector = menuLink.dataset.goto;
    const targetBlock = document.querySelector(selector);

    if (targetBlock) {
      e.preventDefault();

      const html = document.documentElement;
      const targetPosition = targetBlock.getBoundingClientRect().top;

      if (targetPosition > 0) {
        html.classList.add('is-scrolling-down');
      } else {
        html.classList.remove('is-scrolling-down');
      }

      targetBlock.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      const onScrollEnd = () => {
        html.classList.remove('is-scrolling-down');
        window.removeEventListener('scrollend', onScrollEnd);
      };

      if ('onscrollend' in window) {
        window.addEventListener('scrollend', onScrollEnd);
      } else {
        setTimeout(onScrollEnd, 1000);
      }
    }
  };

  onMounted(() => {
    document.addEventListener('click', handleNavigation);
  });

  onUnmounted(() => {
    document.removeEventListener('click', handleNavigation);
  });
}
