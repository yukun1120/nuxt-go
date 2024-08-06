<template>
    <v-app>
      <v-app-bar app>
        <!-- ECサイト用のヘッダー内容 -->
      </v-app-bar>

      <v-main>
        <v-container>
          <slot />
        </v-container>
      </v-main>

      <v-footer app>
        <!-- ECサイト用のフッター内容 -->
      </v-footer>
    </v-app>
  </template>

  <script setup lang="ts">
  // ECサイト用の計測タグ
  // EC用の計測タグスクリプト
  </script>