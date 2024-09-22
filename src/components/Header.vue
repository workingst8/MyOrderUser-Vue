<template>
  <header>
    <div class="left">
      <span><router-link to="/">My Order</router-link></span>
      <span class="number_table">{{ tableNum }}번 테이블</span>
    </div>
  </header>
</template>
<script setup lang="ts">
defineProps<{
  tableNum: number;
}>();
</script>
