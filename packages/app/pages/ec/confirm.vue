<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  layout: 'mypage-layout'
})

const customerInfo = ref({
  name: 'テストテスト',
  kana: 'テテ',
  email: 'test@test.com',
  phone: '09000000000',
  homePhone: '',
  postalCode: '2220000',
  address: '神奈川県横浜市港北区',
  deliveryAddress: '神奈川県横浜市港北区'
})

const orderInfo = ref({
  plan: '高速通信プラン',
  device: 'CLOUD AIR-WiFi AIR-2',
  deliveryMethod: '即日配送',
  contractPeriod: '2年契約コース',
  option: 'プレミアムサポート',
  paymentMethod: 'クレジットカード'
})

const paymentInfo = ref({
  monthlyFee: 4750,
  initialFee: 3300,
  optionFee: 1480,
  initialTotal: 9530,
  recurringTotal: 6230
})

const agreementChecked = ref(false)
</script>

<template>
  <v-container>
    <h1 class="text-h5 mb-4">注文内容確認</h1>
    <p class="text-caption mb-4">ページ下の「入力内容を修正する」ボタンで修正できます。</p>

    <v-card class="mb-4">
      <v-card-title class="text-h6 bg-grey-darken-3 text-white">お客様情報</v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item v-for="(value, key) in customerInfo" :key="key">
            <template v-slot:prepend>
              <v-list-item-title style="margin-right: 20px;">{{ key }}</v-list-item-title>
            </template>
            <v-list-item-subtitle>{{ value }}</v-list-item-subtitle>
            <template v-slot:append>
              <v-btn to="/ec/customer" color="warning" variant="text">修正</v-btn>
            </template>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>

    <v-card class="mb-4">
      <v-card-title class="text-h6 bg-grey-darken-3 text-white">ご注文内容</v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item v-for="(value, key) in orderInfo" :key="key">
            <template v-slot:prepend>
              <v-list-item-title style="margin-right: 20px;">{{ key }}</v-list-item-title>
            </template>
            <v-list-item-subtitle>{{ value }}</v-list-item-subtitle>
            <template v-slot:append>
              <v-btn to="/ec/plan" color="warning" variant="text">修正</v-btn>
            </template>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>

    <v-card class="mb-4">
      <v-card-title class="text-h6 bg-grey-darken-3 text-white">お支払い内容</v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item>
            <v-list-item-title>月額料金</v-list-item-title>
            <v-list-item-subtitle>{{ paymentInfo.monthlyFee }}円(税込)</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>初期事務手数料</v-list-item-title>
            <v-list-item-subtitle>{{ paymentInfo.initialFee }}円(税込)</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>オプション費用</v-list-item-title>
            <v-list-item-subtitle>{{ paymentInfo.optionFee }}円(税込)</v-list-item-subtitle>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-title class="text-h6">初回支払い金額</v-list-item-title>
            <v-list-item-subtitle class="text-h6">{{ paymentInfo.initialTotal }}円(税込)</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="text-h6">次回以降</v-list-item-title>
            <v-list-item-subtitle class="text-h6">{{ paymentInfo.recurringTotal }}円(税込)</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>

    <v-card class="mb-4">
      <v-card-title class="text-h6 bg-grey-darken-3 text-white">MUGEN WiFi サービス同意事項</v-card-title>
      <v-card-text>
        <p>MUGEN WiFiにご加入いただくため、以下の事項をご確認ください。</p>
        <p>MUGEN WiFi ご利用にあたっての重要事項</p>
        <p>2023年2月1日 施行</p>
        <p>株式会社FREEDIVE</p>
        <p>MUGEN WiFi カスタマーセンター</p>
        <p>【重要】30日間返品レンタルについて</p>
        <v-checkbox v-model="agreementChecked" label="MUGEN WiFi に関する詳細情報を受け取ります"></v-checkbox>
      </v-card-text>
    </v-card>

    <nuxt-link to="/ec/thanks" style="text-decoration: none;">
        <v-btn color="success" block x-large class="mb-4">
        注文手続きを完了する
        </v-btn>
    </nuxt-link>
  </v-container>
</template>