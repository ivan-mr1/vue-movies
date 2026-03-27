<script setup>
import { RouterView } from 'vue-router';
import ScrollUpButton from '@/shared/ui/ScrollUpButton';
import './styles/main.scss';
</script>

<template>
  <div class="wrapper">
    <RouterView />
    <ScrollUpButton />
  </div>
</template>
