<template>
  <div class="not-found-container page">
    <div class="content">
      <h1 class="error-code">404</h1>

      <div class="divider"></div>

      <h2 class="error-title">Упс! Страница затерялась.</h2>
      <p class="error-message">
        Похоже, адрес, который вы ввели, больше не существует, или его никогда не было. Не
        волнуйтесь, мы поможем вам вернуться.
      </p>

      <router-link :to="{ name: 'Home' }" class="home-button"> Вернуться на главную </router-link>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.not-found-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 80px);
  background-color: #f9fafb;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 20px;
}

.content {
  text-align: center;
  max-width: 500px;
  padding: 40px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
}

.error-code {
  font-size: 120px;
  font-weight: 800;
  margin: 0;
  color: #4f46e5;
  line-height: 1;
  letter-spacing: -5px;
}

.divider {
  height: 4px;
  width: 60px;
  background-color: #e5e7eb;
  margin: 20px auto;
  border-radius: 2px;
}

.error-title {
  font-size: 28px;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 15px 0;
}

.error-message {
  font-size: 16px;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 30px;
}

.home-button {
  display: inline-block;
  padding: 12px 30px;
  background-color: #4f46e5;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition:
    background-color 0.2s ease,
    transform 0.1s ease;
}

.home-button:hover {
  background-color: #4338ca;
}

.home-button:active {
  transform: translateY(1px);
}

@media (max-width: 640px) {
  .error-code {
    font-size: 80px;
  }
  .error-title {
    font-size: 22px;
  }
  .content {
    padding: 30px 20px;
  }
}
</style>
