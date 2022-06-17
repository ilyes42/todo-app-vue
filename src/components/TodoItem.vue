<template>
  <div class="row">
    <div class="col">{{ text }}</div>
    <div class="col">
      <button @click="$emit('delete')" class="btn btn-close float-end"></button>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ text: string }>();
</script>
