<template>
    <v-app>
      <v-app-bar app>
        <!-- ヘッダーの内容 -->
      </v-app-bar>

      <v-main>
        <v-container>
          <slot />
        </v-container>
      </v-main>

      <v-footer app>
        <!-- フッターの内容 -->
      </v-footer>
    </v-app>
  </template>

  <script setup lang="ts">
  // 必要に応じてスクリプトを追加
  </script>