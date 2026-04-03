<script setup></script>

<template>
  <div class="header__actions">
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/"
      class="header__action"
      aria-label="Open github"
      title="Open github"
    >
      <img
        src="/img/social/github.svg"
        alt="github"
        class="header__action-img"
        width="48"
        height="48"
      />
    </a>
  </div>
</template>

<style scoped lang="scss">
.header {
  &__actions {
    position: relative;
    z-index: 5;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
  }

  &__action {
    --size: #{rem(44)};

    @include square(var(--size));

    @include hover {
      transform: scale(1.09);
    }
  }
}
</style>
