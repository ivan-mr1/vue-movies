<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps(['modelValue', 'options', 'label']);
const emit = defineEmits(['update:modelValue']);

const isOpen = ref(false);
const el = ref(null);

const toggle = () => (isOpen.value = !isOpen.value);
const select = (opt) => {
  emit('update:modelValue', opt.value);
  isOpen.value = false;
};

const close = (e) => {
  if (!el.value?.contains(e.target)) isOpen.value = false;
};
onMounted(() => document.addEventListener('click', close));
onUnmounted(() => document.removeEventListener('click', close));

const getLabel = () =>
  props.options.find((o) => o.value === props.modelValue)?.label || props.label;
</script>

<template>
  <div class="select" :class="{ 'is-open': isOpen }" ref="el">
    <div class="select__field" @click="toggle">
      <span class="select__value" :class="{ 'is-placeholder': !modelValue }">
        {{ getLabel() }}
      </span>
      <svg class="select__icon" viewBox="0 0 20 20">
        <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" fill="none" stroke-width="1.5" />
      </svg>
    </div>

    <ul v-if="isOpen" class="select__list">
      <li
        v-for="opt in options"
        :key="opt.value"
        @click="select(opt)"
        class="select__item"
        :class="{ 'is-active': opt.value === modelValue }"
      >
        {{ opt.label }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use '@helpers' as *;

.select {
  position: relative;
  max-width: 200px;
  width: 100%;

  &__field {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    border: 1px solid #c7c7c7;
    border-radius: 8px;
    background: #fff;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      border-color: var(--color-orange);
    }
  }

  &__value {
    font-size: 16px;
    color: var(--color-dark);

    &.is-placeholder {
      color: #888;
    }
  }

  &__icon {
    width: 18px;
    height: 18px;
    transition: 0.3s;
    color: #181c29;

    .is-open & {
      transform: rotate(180deg);
      color: var(--color-orange);
    }
  }

  &__list {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    width: 100%;
    background: #fff;
    border: 1px solid #eee;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    z-index: 50;
    max-height: 240px;
    overflow-y: auto;
    padding: 4px 0;
  }

  &__item {
    padding: 10px 16px;
    font-size: 15px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      background: #f5f5f5;
    }

    &.is-active {
      background: #fff5f0; // Легкий оттенок оранжевого
      color: var(--color-orange);
      font-weight: 600;
    }
  }
}
</style>
