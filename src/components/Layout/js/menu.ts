import { ref, onMounted, onBeforeUnmount } from 'vue';

export function useMenuItems() {
  const currentHash = ref(window.location.hash);

  // Update the current hash on scroll or anchor click
  const updateHash = () => {
    currentHash.value = window.location.hash;
  };

  onMounted(() => {
    window.addEventListener('hashchange', updateHash);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('hashchange', updateHash);
  });

  const menuItems = [
    { to: { hash: '#home' }, label: 'Home' },
    { to: { hash: '#features' }, label: 'Features' },
    { to: { hash: '#pricing' }, label: 'Pricing' },
    { to: { hash: '#blog' }, label: 'Blog' },
    { href: 'https://dribbble.com/', icon: 'dribbble', external: true },
    { href: 'https://www.behance.net/', icon: 'behance', external: true },
  ];

  return {
    currentHash,
    menuItems,
  };
}
