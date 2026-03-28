<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  modelValue: {
    type: [String, Number, null],
    default: null,
  },
  options: {
    type: Array,
    default: () => [],
  },
  label: {
    type: String,
    default: 'Select option',
  },
});

const emit = defineEmits(['update:modelValue']);

const isOpen = ref(false);
const selectRef = ref(null);

const currentLabel = computed(() => {
  const selectedOption = props.options.find((o) => o.value === props.modelValue);
  return selectedOption ? selectedOption.label : props.label;
});

const isPlaceholder = computed(() => props.modelValue === null || props.modelValue === '');

const toggle = () => (isOpen.value = !isOpen.value);

const selectOption = (opt) => {
  emit('update:modelValue', opt.value);
  isOpen.value = false;
};

const handleClickOutside = (e) => {
  if (selectRef.value && !selectRef.value.contains(e.target)) {
    isOpen.value = false;
  }
};

onMounted(() => document.addEventListener('click', handleClickOutside));
onUnmounted(() => document.removeEventListener('click', handleClickOutside));
</script>

<template>
  <div ref="selectRef" class="select" :class="{ 'is-open': isOpen }">
    <div class="select__field" @click="toggle" role="button" aria-haspopup="listbox">
      <span class="select__value" :class="{ 'is-placeholder': isPlaceholder }">
        {{ currentLabel }}
      </span>

      <svg class="select__icon" viewBox="0 0 20 20" width="20" height="20">
        <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" fill="none" stroke-width="1.5" />
      </svg>
    </div>

    <transition name="select-fade">
      <ul v-if="isOpen" class="select__list" role="listbox">
        <li
          v-for="opt in options"
          :key="opt.value"
          class="select__item"
          :class="{ 'is-active': opt.value === modelValue }"
          role="option"
          @click="selectOption(opt)"
        >
          {{ opt.label }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<style scoped lang="scss">
.select {
  position: relative;
  max-width: 200px;
  width: 100%;
  font-family: inherit;

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
    transition:
      border-color 0.2s,
      box-shadow 0.2s;

    &:hover {
      border-color: var(--color-orange, #f60);
    }

    .is-open & {
      border-color: var(--color-orange, #f60);
      box-shadow: 0 0 0 1px var(--color-orange, #f60);
    }
  }

  &__value {
    font-size: 16px;
    color: var(--color-dark, #181c29);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &.is-placeholder {
      color: #888;
    }
  }

  &__icon {
    flex-shrink: 0;
    transition:
      transform 0.3s,
      color 0.3s;
    color: #181c29;

    .is-open & {
      transform: rotate(180deg);
      color: var(--color-orange, #f60);
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
    margin: 0;
    list-style: none;
  }

  &__item {
    padding: 10px 16px;
    font-size: 15px;
    cursor: pointer;
    transition:
      background 0.2s,
      color 0.2s;

    &:hover {
      background: #f5f5f5;
    }

    &.is-active {
      background: #fff5f0;
      color: var(--color-orange, #f60);
      font-weight: 600;
    }
  }
}

.select-fade-enter-active,
.select-fade-leave-active {
  transition:
    opacity 0.2s,
    transform 0.2s;
}

.select-fade-enter-from,
.select-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
