<script setup>
import { RouterView } from 'vue-router';
import Header from '@/widgets/header';
import './styles/main.scss';
</script>

<template>
  <div class="wrapper">
    <Header />
    <div class="container">
      <main class="page">
        <RouterView />
      </main>
    </div>
  </div>
</template>
