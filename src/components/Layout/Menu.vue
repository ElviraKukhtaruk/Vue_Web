<script setup lang="ts">
import Icon from './icons/IconDribbble.vue';
import { useMenuItems } from './js/menu.js';

const { currentHash, menuItems } = useMenuItems();
</script>

<<template>
  <div class="menu">
    <div class="items">
      <div class="item" v-for="item in menuItems" :key="item.label || item.icon">
        <RouterLink  v-if="!item.external && item.to" :to="item.to" class="nav-link" :class="{ active: currentHash === item.to.hash }">
          {{ item.label }}
        </RouterLink>

        <a v-else-if="item.external && item.href" :href="item.href" class="nav-link" target="_blank" rel="noopener noreferrer">
            <Icon v-if="item.icon" :name="item.icon" />
        </a>
      </div>
    </div>
  </div>
</template>


<style src="./styles/menu.css"></style>
