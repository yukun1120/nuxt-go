<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  layout: 'mypage-layout'
})

const cardNumber = ref('')
const cardName = ref('')
const expiryMonth = ref('')
const expiryYear = ref('')
const securityCode = ref('')

const submitForm = () => {
  // フォーム送信のロジックをここに実装
  console.log('フォームが送信されました')
}
</script>

<template>
  <v-container>
    <h1 class="text-h4 mb-4">カード情報の入力をお願いいたします</h1>
    <v-form @submit.prevent="submitForm">
      <!-- <v-card class="mb-4 pa-4">
        <v-img
          src="/path/to/card-logos.png"
          alt="利用可能なカード"
          contain
          height="40"
        ></v-img>
        <div class="text-caption text-center">各カードをご利用いただけます</div>
      </v-card> -->

      <v-text-field
        v-model="cardNumber"
        label="カード番号"
        placeholder="0000111122223333"
        required
        :rules="[(v:number) => !!v || 'カード番号は必須です']"
      ></v-text-field>

      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="cardName"
            label="カード名義（姓）"
            placeholder="MUGEN"
            required
            :rules="[(v:string) => !!v || 'カード名義（姓）は必須です']"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="cardName"
            label="カード名義（名）"
            placeholder="TAROU"
            required
            :rules="[(v:string) => !!v || 'カード名義（名）は必須です']"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="expiryMonth"
            label="有効期限（月）"
            placeholder="00"
            required
            :rules="[(v:number) => !!v || '有効期限（月）は必須です']"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="expiryYear"
            label="有効期限（年）"
            placeholder="00"
            required
            :rules="[(v:number) => !!v || '有効期限（年）は必須です']"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-text-field
        v-model="securityCode"
        label="セキュリティコード"
        placeholder="111"
        required
        :rules="[(v:number) => !!v || 'セキュリティコードは必須です']"
        hint="カード裏面に記載されている3桁または4桁の番号です"
        persistent-hint
      ></v-text-field>

      <v-card class="mb-4 pa-4">
        <!-- <v-img
          src="/path/to/secure-seal.png"
          alt="セキュリティシール"
          contain
          height="40"
        ></v-img> -->
        <div class="text-caption text-center">
          当サイトではセキュリティ保護のため、SecureCore社の証明書を使用し、強度な暗号化通信を実現しています。
        </div>
      </v-card>

      <nuxt-link to="/ec/confirm" style="text-decoration: none;">
        <v-btn
            color="success"
            block
            x-large
            class="mt-4"
        >
            ご注文内容の確認に進む
        </v-btn>
      </nuxt-link>
    </v-form>

    <nuxt-link to="/ec/customer" style="text-decoration: none;">
        <v-btn
        text
        block
        class="mt-4"
        >
        お客様情報の入力に戻る
        </v-btn>
    </nuxt-link>
  </v-container>
</template>