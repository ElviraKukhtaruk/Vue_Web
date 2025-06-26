import { ref, computed } from 'vue';

import IconPages from '../icons/IconPages.vue';
import IconDiamond from '../icons/IconDiamond.vue';
import IconBuild from '../icons/IconBuild.vue';
import IconResponsive from '../icons/IconResponsive.vue';
import IconCustom from '../icons/IconCustom.vue';
import IconReady from '../icons/IconReady.vue';
import IconVersion from '../icons/IconVersion.vue';
import IconLibrary from '../icons/IconLibrary.vue';
import IconWave from '../icons/IconWave.vue';
import IconCross from '../icons/IconCross.vue';
import aImage from '@/assets/images/a.png';

export function useAboutSlides() {
  const slides = [
    {
      image: aImage,
      title: 'We Create Something New',
      subtitle: 'We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.',
      features: [
        {
          icon: IconPages,
          heading: '30 New feature pages',
          text: 'Startup Framework contains components and complex blocks which can easily.',
        },
        {
          icon: IconDiamond,
          heading: 'Useful Symbol Components',
          text: 'Samples will show you the feeling on how to play around using the components.',
        },
      ],
    },
    {
      image: aImage,
      title: 'Design with Confidence',
      subtitle: 'We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.',
      features: [
        {
          icon: IconBuild,
          heading: 'Pre-built Templates',
          text: 'Launch quickly using our rich template library designed for various industries.',
        },
        {
          icon: IconResponsive,
          heading: 'Responsive by Default',
          text: 'Mobile-first layouts make your product accessible anywhere, anytime.',
        },
      ],
    },
    {
      image: aImage,
      title: 'Speed up Development',
      subtitle: 'Leverage pre-built UI kits and elements for rapid development.',
      features: [
        { icon: IconCustom, heading: 'Customizable Blocks', text: 'Tweak and adapt elements to suit your project needs.' },
        { icon: IconReady, heading: 'Ready to Deploy', text: 'Quick deployment tools save time and reduce complexity.' },
      ],
    },
    {
      image: aImage,
      title: 'Streamlined Collaboration',
      subtitle: 'Tools built for cross-functional teams to work better together.',
      features: [
        { icon: IconVersion, heading: 'Version Control', text: 'Stay in sync with design iterations and feedback.' },
        { icon: IconLibrary, heading: 'Component Library', text: 'Shared components improve consistency across teams.' },
      ],
    },
    {
      image: aImage,
      title: 'Future-proof Design',
      subtitle: 'Stay ahead with modern trends and responsive design systems.',
      features: [
        { icon: IconWave, heading: 'Evergreen Aesthetics', text: 'Timeless styles that adapt to new design waves.' },
        { icon: IconCross, heading: 'Cross-platform', text: 'Design once, deploy everywhere with ease.' },
      ],
    },
  ];

  const currentIndex = ref(0);
  const currentSlide = computed(() => slides[currentIndex.value]);

  function nextSlide() {
    currentIndex.value = (currentIndex.value + 1) % slides.length;
  }

  function prevSlide() {
    currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length;
  }

  function goTo(idx: number) {
    currentIndex.value = idx;
  }

  return {
    slides,
    currentIndex,
    currentSlide,
    nextSlide,
    prevSlide,
    goTo,
  };
}
