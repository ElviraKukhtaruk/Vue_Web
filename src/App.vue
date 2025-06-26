<script setup lang="ts">
import Background from '@/components/Home/Background.vue';
import BackgroundVariable from '@/components/Home/BackgroundVariable.vue';
import Header from '@/components/Home/Header.vue';
import Menu from '@/components/Layout/Menu.vue';
import About from '@/components/Home/About.vue';
import Start from '@/components/Home/Start.vue';
import Contact from '@/components/Home/Contact.vue';
import Pricing from '@/components/Home/Pricing.vue';
import Footer from '@/components/Layout/Footer.vue';
import Layout from '@/components/Layout/Layout.vue';

// ✅ Import images correctly
import bg2 from '@/assets/images/bg2.jpg';
import bg3 from '@/assets/images/bg3.jpg';
import bg4 from '@/assets/images/bg4.jpg';
</script>

<template>
  <Layout>
    <template #content>
      <Background>
        <Menu />
        <Header />
      </Background>
      <BackgroundVariable :image="bg2">
        <About />
      </BackgroundVariable>
      <BackgroundVariable :image="bg3">
        <Start />
      </BackgroundVariable>
      <BackgroundVariable :image="bg4">
        <Contact />
      </BackgroundVariable>
      <BackgroundVariable>
        <Pricing />
      </BackgroundVariable>
    </template>
    <template #footer>
      <Footer />
    </template>
  </Layout>
</template>
