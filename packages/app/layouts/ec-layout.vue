<template>
    <v-app>
        <v-app-bar app>
            <v-app-bar-title>ギガプリモ</v-app-bar-title>
        </v-app-bar>

        <v-main>
            <v-container style="background-color: #f0eef2;">
                <slot />
            </v-container>
        </v-main>

        <v-footer app>
        <!-- ECサイト用のフッター内容 -->
        </v-footer>
    </v-app>
</template>

<script setup lang="ts">

 </script>