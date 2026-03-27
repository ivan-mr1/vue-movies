<script setup>
import { RouterView } from 'vue-router';
import Header from '@/widgets/header';
import './styles/main.scss';
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <Header />
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss">
@use '@helpers' as *;
</style>
