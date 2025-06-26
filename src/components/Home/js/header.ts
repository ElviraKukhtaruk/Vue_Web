import { ref, computed } from 'vue';
import type { Ref } from 'vue';

export interface Slide {
  title: string;
  header: string;
  subText: string;
}

export function useHeaderSlides() {
  const slides: Ref<Slide[]> = ref([
    {
      title: 'Startup 3',
      header: 'Forget About Code',
      subText:
        "Startup Framework gives you complete freedom over your creative process — you don't have to think about any technical aspects. There are no limits and absolutely no coding.",
    },
    {
      title: 'Startup 3',
      header: 'Powerful Features',
      subText:
        "Startup Framework gives you complete freedom over your creative process — you don't have to think about any technical aspects. There are no limits and absolutely no coding.",
    },
    {
      title: 'Startup 3',
      header: 'Seamless Experience',
      subText:
        "Startup Framework gives you complete freedom over your creative process — you don't have to think about any technical aspects. There are no limits and absolutely no coding.",
    },
    {
      title: 'Startup 3',
      header: 'Join Our Community',
      subText:
        "Startup Framework gives you complete freedom over your creative process — you don't have to think about any technical aspects. There are no limits and absolutely no coding.",
    },
  ]);

  const currentIndex = ref(0);
  const currentSlide = computed(() => slides.value[currentIndex.value]);

  const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % slides.value.length;
  };

  const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length;
  };

  const goToSlide = (index: number) => {
    currentIndex.value = index;
  };

  return {
    slides,
    currentIndex,
    currentSlide,
    nextSlide,
    prevSlide,
    goToSlide,
  };
}
