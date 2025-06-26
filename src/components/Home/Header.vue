<script setup lang="ts">
  import Icon from './icons/IconArrow.vue';
  import { useHeaderSlides } from './js/header.js';

  const {
    slides,
    currentIndex,
    currentSlide,
    nextSlide,
    prevSlide,
    goToSlide,
  } = useHeaderSlides();
</script>

<template>
  <div class="header" id="home">
    <button @click="prevSlide" class="nav-button">
      <Icon :name="'left'"/>
    </button>

    <div class="content">
      <transition name="slide-fade" mode="out-in">
        <div :key="currentIndex" class="text">
          <h2>{{ currentSlide.title }}</h2>
          <h1>{{ currentSlide.header }}</h1>
          <div class="subtitle">{{ currentSlide.subText }}</div>
        </div>
      </transition>

      <div class="dots-container">
        <button
          v-for="(slide, index) in slides"
          :key="index"
          @click="goToSlide(index)"
          :class="['dot', { 'active': index === currentIndex }]"
        ></button>
      </div>

      <div class="account">
          <button>Create an Account</button>
      </div>
    </div>

    <button @click="nextSlide" class="nav-button">
      <Icon :name="'right'"/>
    </button>
  </div>
</template>

<style src="./styles/header.css"></style>
