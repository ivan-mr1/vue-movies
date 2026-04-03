import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue';
import { bodyLock, bodyUnlock } from '@/shared/lib/body-lock/bodyLock';

export function useHeaderLogic(props) {
  const isMenuOpen = ref(false);
  const isScrolled = ref(false);
  const isHidden = ref(false);
  const headerRef = ref(null);

  let lastScrollY = typeof window !== 'undefined' ? window.scrollY : 0;
  let ticking = false;
  let resizeObserver = null;

  const updateHeights = () => {
    if (!headerRef.value) return;

    const height = headerRef.value.offsetHeight;
    const isCurrentlyHidden = headerRef.value.classList.contains('is-hidden-translate');

    document.documentElement.style.setProperty('--header-height', `${height}px`);
    document.documentElement.style.setProperty(
      '--header-offset',
      isCurrentlyHidden ? '0px' : `${height}px`,
    );
  };

  const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value);
  const closeMenu = () => (isMenuOpen.value = false);

  const onMenuLinkClick = (e) => {
    if (e.target.closest('a')) closeMenu();
  };

  const processScroll = () => {
    const currentScrollY = Math.max(0, window.scrollY);
    isScrolled.value = currentScrollY > 0;

    if (props.isHiddenHeader && !isMenuOpen.value) {
      const isScrollingDown = currentScrollY > lastScrollY;
      const headerHeight = headerRef.value?.offsetHeight || 0;
      const shouldHide = isScrollingDown && currentScrollY > headerHeight;

      if (isHidden.value !== shouldHide) {
        isHidden.value = shouldHide;
        nextTick(updateHeights);
      }
    }
    lastScrollY = currentScrollY;
  };

  const handleScroll = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      processScroll();
      ticking = false;
    });
  };

  const onEscapePress = (e) => {
    if (e.key === 'Escape') closeMenu();
  };

  watch(isMenuOpen, (isOpen) => {
    isOpen ? bodyLock() : bodyUnlock();
    if (isOpen) {
      isHidden.value = false;
      nextTick(updateHeights);
      document.addEventListener('keydown', onEscapePress);
    } else {
      document.removeEventListener('keydown', onEscapePress);
    }
  });

  onMounted(() => {
    updateHeights();
    window.addEventListener('scroll', handleScroll, { passive: true });
    resizeObserver = new ResizeObserver(() => updateHeights());
    if (headerRef.value) resizeObserver.observe(headerRef.value);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
    document.removeEventListener('keydown', onEscapePress);
    if (resizeObserver) resizeObserver.disconnect();
    bodyUnlock();
  });

  // Возвращаем только то, что нужно шаблону
  return {
    headerRef,
    isMenuOpen,
    isScrolled,
    isHidden,
    toggleMenu,
    closeMenu,
    onMenuLinkClick,
  };
}
