<template>
  <div class="row">
    <div class="col">{{ text }}</div>
    <div class="col">
      <button @click="$emit('delete')" class="btn btn-close float-end"></button>
    </div>
    <div class="col">
      <input
        type="checkbox"
        :checked="done"
        @change="toggleDone($event)"
        class="form-check-input"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ text: string; done: boolean }>();

const emit = defineEmits<{
  (e: "toggleDone", value: boolean): void;
  (e: "delete"): void;
}>();

function toggleDone(event: any) {
  if (event) {
    emit("toggleDone", event.target.checked);
  }
}
</script>
