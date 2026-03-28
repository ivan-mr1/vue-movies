<script setup>
defineProps({
  title: String,
  id: { type: String, required: true },
  type: { type: String, default: 'text' },
  onChangeSearchInput: Function,
});

defineEmits(['update:modelValue']);
</script>

<template>
  <div class="field">
    <label :for="id" class="field__label">{{ title }}</label>
    <input
      :id="id"
      :type="type"
      @input="onChangeSearchInput"
      class="field__input"
      placeholder=" "
      autocomplete="off"
    />
  </div>
</template>

<style scoped lang="scss">
@use '@helpers' as *;

.field {
  --field-color-label: #141216;
  --field-color-label-active: #2e2d2f;
  --field-color-border: #c7c7c7;
  --field-color-active: #2e2d2f;
  --field-color-focus-bcg: #f5f5f5;

  position: relative;

  &:has(.field__input:not(:placeholder-shown)) .field__label {
    // обращаемся к label только когда плейсхолдер не должен отображаться
    color: var(--field-color-label-active);
    scale: 0.7;
    translate: -30px -45px;
  }

  &__label {
    position: absolute;
    top: 50%;
    left: 17px;
    color: var(--field-color-label);
    translate: 0 -50%;
  }

  &__input {
    --field-input-padding-x: 16px;
    --field-search-input-icon-size: 16px;

    width: 100%;
    height: 50px;
    padding-inline: var(--field-input-padding-x);
    background-color: transparent;
    border: 1px solid var(--field-color-border);
    border-radius: 8px;

    &:hover,
    &:focus {
      color: var(--field-color-active);
    }

    &:focus {
      background-color: var(--field-color-focus-bcg);
      outline: none;
    }

    &[type='search'] {
      &:placeholder-shown {
        padding-right: calc(var(--field-input-padding-x) * 2 + var(--field-search-input-icon-size));
        background-image: url('./icon-search_black.svg');
        background-position: calc(100% - var(--field-input-padding-x)) 50%;
        background-size: var(--field-search-input-icon-size);
        background-repeat: no-repeat;
      }
    }
  }
}
</style>
