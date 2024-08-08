<script setup lang="ts">
definePageMeta({
  layout: 'mypage-layout'
})
</script>

<template>
  <v-container>
    <h1 class="text-h4 mb-4">サンクスページ</h1>
    <nuxt-link to="/" style="text-decoration: none;">
      <v-btn color="success" block x-large class="mb-4">
        トップへ戻る
      </v-btn>
    </nuxt-link>
  </v-container>
</template>