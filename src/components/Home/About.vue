<script setup lang="ts">
import { useAboutSlides } from './js/about.ts';

const {
  slides,
  currentIndex,
  currentSlide,
  nextSlide,
  prevSlide,
  goTo,
} = useAboutSlides();

</script>

<template>
  <div class="about" id="features">
    <div class="examples">
      <div class="icon_wrapper">
        <component :is="currentSlide.icon" />
      </div>
      <transition name="fade" mode="out-in">
        <div class="text_content" :key="currentIndex">
          <div class="title">
            <h1>{{ currentSlide.title }}</h1>
            <p class="subtitle">{{ currentSlide.subtitle }}</p>
          </div>
          <div class="features">
            <div v-for="(feature, idx) in currentSlide.features" :key="idx" class="feature">
              <div class="feature_icon"><component :is="feature.icon"/></div>
              <div>
                <h2>{{ feature.heading }}</h2>
                <p>{{ feature.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </transition>
      <div class="features_dots">
        <div v-for="(_, dotIdx) in slides" :key="dotIdx" class="dot" :class="{ active: dotIdx === currentIndex }" @click="goTo(dotIdx)"></div>
      </div>
    </div>
  </div>
</template>
<style src="./styles/about.css"></style>
