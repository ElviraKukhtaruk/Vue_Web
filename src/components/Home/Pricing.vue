<script setup lang="ts">
  import IconCheck from './icons/IconCheck.vue';
  import { pricingPlans } from './js/pricing.ts';
</script>

<template>
    <div class="pricing" id="pricing">

        <div class="pricing_text">
            <h1>Plans & Pricing</h1>
            <p>Startup Framework is free forever — you only pay for custom domain hosting or to export your site.</p>
        </div>
        <div class="table">
          <div class="price" v-for="(plan, index) in pricingPlans" :key="index">
            <div class="text">
              <h2>{{ plan.title }}</h2>
              <div>
                <h1>{{ plan.price }}</h1>
                <p>$</p>
              </div>
            </div>
            <div class="includes">
              <div class="item" v-for="(item, idx) in plan.includes" :key="idx">
                <div class="check" :style="{ opacity: item.check ? '1' : '0' }">
                  <IconCheck />
                </div>
                <p :style="{ color: item.check ? '#fff' : '#b8b8b8' }">{{ item.text }}</p>
              </div>
            </div>
            <div class="control">
              <button :class="{ 'main_solution': plan.active }">Get Started</button>
            </div>
          </div>
        </div>


    </div>
</template>

<style src="./styles/pricing.css"></style>
