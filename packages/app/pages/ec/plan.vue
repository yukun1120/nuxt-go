<script setup lang="ts">
import {ref,computed} from 'vue'
import { useCounterStore } from '~/stores/ec';
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

definePageMeta({
  layout: 'ec-layout'
})

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

// piniaテスト
const counterStore = useCounterStore();
const { increment } = counterStore;
const { count } = storeToRefs(counterStore);


interface Plan {
  planId: number,
  name: string
  price: number
}


const plans = ref<Plan[]>([
  { planId:1, name: "レンタルプラン", price: 4750},
  { planId:2, name: '新規購入レンタルプラン', price: 5250 },
  { planId:3, name: '新規購入分割払いプラン', price: 4800 },
])

const selectedPlan = ref(0)
const safetyOption = ref(false)
const deliveryMethod = ref('sameday')

const selectPlan = (index: number) => {
  selectedPlan.value = index
}

const calculateInitialPayment = computed(() => {
  let total = plans.value[selectedPlan.value].price + 3300
  if (safetyOption.value) total += 660
  return total
})

const calculateRecurringPayment = computed(() => {
  let total = plans.value[selectedPlan.value].price
  if (safetyOption.value) total += 660
  return total
})
</script>

<template>
  <v-container style="height: calc(100vh - 64px); overflow-y: auto;">
    <!-- piniaテスト -->
    <div style="background-color: aquamarine;">
      <h1>Count:{{ count }}</h1>
      <button @click="increment">たすよ</button>
      <br />
      <nuxt-link to="/">もどる</nuxt-link>
    </div>
    <!-- piniaテスト -->
    <h1 class="text-h5 mb-4">ご希望のプランをお選びください</h1>
    <v-row>
      <v-col cols="12" sm="4" v-for="(plan, index) in plans" :key="index">
        <v-card :class="{ 'selected-plan': selectedPlan === index }" @click="selectPlan(index)">
          <v-card-title>{{ plan.name }}</v-card-title>
          <v-card-text>
            <p class="text-h6">月額{{ plan.price }}円(税込)</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <h2 class="text-h6 mt-6 mb-2">オプションはご一緒にいかがですか？</h2>
    <v-checkbox v-model="safetyOption" label="安心保証オプション" style="background-color: white;">
      <template v-slot:label>
        <div>
          安心保証オプション
          <span class="text-h6 ml-2">月額660円(税込)</span>
        </div>
      </template>
    </v-checkbox>
    <v-card v-if="safetyOption" class="mb-4 pa-4">
      <p>端末が故障・水濡れなど、さまざまな原因で故障した際に無償で交換が行えるサービスです。</p>
      <p>カバーの対象など安心の補償内容となっております。</p>
      <p>さらに、2年契約プランのお客様は端末買取システムもご利用いただけます！</p>
      <v-btn color="primary" class="mt-2">注意事項</v-btn>
      <v-btn color="primary" class="mt-2 ml-2">端末買取システムについて</v-btn>
    </v-card>

    <h2 class="text-h6 mt-6 mb-2">配送方法をお選びください</h2>
    <v-radio-group v-model="deliveryMethod">
      <v-radio label="最短即日配送" value="sameday">
        <template v-slot:label>
          <div>
            最短即日配送
            <p class="text-caption">12:00までのお申し込みで当日の配送となります</p>
          </div>
        </template>
      </v-radio>
      <v-radio label="翌月配送予約" value="nextmonth" >
        <template v-slot:label>
          <div>
            翌月配送予約
            <p class="text-caption">翌月1-3日での新規配送となります</p>
          </div>
        </template>
      </v-radio>
    </v-radio-group>

    <v-card class="mt-6 pa-4">
      <h3 class="text-h6 mb-2">プラン内容</h3>
      <v-simple-table>
        <template v-slot:default>
          <tbody>
            <tr>
              <td>プラン</td>
              <td>{{ plans[selectedPlan].name }}</td>
            </tr>
            <tr>
              <td>端末</td>
              <td>Speed Wi-Fi HOME 5G L11</td>
            </tr>
            <tr>
              <td>契約</td>
              <td>契約期間縛りなし</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>

      <h3 class="text-h6 mt-4 mb-2">お支払い内容</h3>
      <v-simple-table>
        <template v-slot:default>
          <tbody>
            <tr>
              <td>配送方法</td>
              <td>{{ deliveryMethod === 'sameday' ? '最短即日配送' : '翌月配送予約' }}</td>
            </tr>
            <tr>
              <td>月額料金</td>
              <td>{{ plans[selectedPlan].price }}円(税込)</td>
            </tr>
            <tr>
              <td>契約事務手数料<br>(初回請求時のみ)</td>
              <td>3,300円(税込)</td>
            </tr>
            <tr v-if="safetyOption">
              <td>オプション費用</td>
              <td>660円(税込)</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>

      <v-divider class="my-4"></v-divider>

      <div class="d-flex justify-space-between">
        <div class="text-h6">初回支払い金額</div>
        <div class="text-h6">{{ calculateInitialPayment }}円(税込)</div>
      </div>
      <div class="d-flex justify-space-between mt-2">
        <div class="text-h6">次回以降</div>
        <div class="text-h6">{{ calculateRecurringPayment }}円(税込)</div>
      </div>
    </v-card>

    <nuxt-link to="/ec/customer" style="text-decoration: none;">
      <v-btn color="success" x-large block class="mt-6" >
        お客様情報登録に進む
      </v-btn>
    </nuxt-link>
  </v-container>
</template>

  <style scoped>
    .selected-plan {
      border: 2px solid #ff4081;
    }
  </style>