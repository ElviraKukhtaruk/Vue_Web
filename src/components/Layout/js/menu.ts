import { computed } from 'vue';
import { useRoute } from 'vue-router';

export interface MenuItem {
  to?: { hash?: string; path?: string };
  label?: string;
  href?: string;
  icon?: string;
  external?: true;
}

export function useMenuItems() {
  const route = useRoute();
  const currentHash = computed(() => route.hash);

  const menuItems: MenuItem[] = [
    { to: { hash: '#home' }, label: 'Home' },
    { to: { hash: '#features' }, label: 'Features' },
    { to: { path: '#pricing', hash: '#pricing' }, label: 'Pricing' },
    { to: { path: '#', hash: '#blog' }, label: 'Blog' },
    { href: 'https://dribbble.com/', icon: 'dribbble', external: true as const },
    { href: 'https://www.behance.net/', icon: 'behance', external: true as const },
  ];

  return {
    currentHash,
    menuItems,
  };
}
