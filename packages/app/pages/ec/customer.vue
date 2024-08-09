<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { useCustomerStore } from '~/stores/ec';
import { storeToRefs } from 'pinia'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const customerStore = useCustomerStore();
const { customer } = storeToRefs(customerStore);

const counter = useCounterStore();

const form = reactive({ ...customer.value })

const yearItems = Array.from({ length: 100 }, (_, i) => (new Date().getFullYear() - i).toString())
const monthItems = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'))
const dayItems = Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, '0'))

const submitForm = () => {
    customerStore.saveCustomer(form);
    console.log('フォームが送信されました', form)
    // ここで次のページにナビゲートするなどの処理を追加
}

onMounted(() => {
  // ストアからデータを読み込んでフォームに設定
  Object.assign(form, customer.value)
})
</script>

<template>
    <v-container style="height: calc(100vh - 64px); overflow-y: auto;">
        <div style="background-color: aqua;">
            <nuxt-link to="/ec/plan"> 戻る </nuxt-link>
            <!-- <nuxt-link to="/contentList"> 再描画ページへとぶ </nuxt-link>
            <nuxt-link to="/pinia"> 永続化実験用カウンターアプリへ飛ぶ </nuxt-link> -->
            <p>persistedState　ぼたんをおしました : {{ counter.count }}回</p>
        </div>
      <h1 class="text-h5 mb-4">お客様情報の登録をお願いいたします</h1>
      <p class="text-caption mb-4">※は必須項目となります</p>

      <v-form @submit.prevent="submitForm">
        <v-card class="pa-4">
          <h2 class="text-h6 mb-4">お客様情報</h2>

          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="form.lastName"
                label="氏名(姓)*"
                placeholder="山田"
                :rules="[(v:string) => !!v || '氏名(姓)は必須です']"
                outlined
                dense
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="form.firstName"
                label="氏名(名)*"
                placeholder="太郎"
                :rules="[(v:string) => !!v || '氏名(名)は必須です']"
                outlined
                dense
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="form.lastNameKana"
                label="氏名(セイ)*"
                placeholder="ヤマダ"
                :rules="[(v:string) => !!v || '氏名(セイ)は必須です']"
                outlined
                dense
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="form.firstNameKana"
                label="氏名(メイ)*"
                placeholder="タロウ"
                :rules="[(v:string) => !!v || '氏名(メイ)は必須です']"
                outlined
                dense
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="4">
              <v-select
                v-model="form.birthYear"
                label="生年月日(年)*"
                :items="yearItems"
                outlined
                dense
                required
              ></v-select>
            </v-col>
            <v-col cols="12" sm="4">
              <v-select
                v-model="form.birthMonth"
                label="生年月日(月)*"
                :items="monthItems"
                outlined
                dense
                required
              ></v-select>
            </v-col>
            <v-col cols="12" sm="4">
              <v-select
                v-model="form.birthDay"
                label="生年月日(日)*"
                :items="dayItems"
                outlined
                dense
                required
              ></v-select>
            </v-col>
          </v-row>

          <v-text-field
            v-model="form.email"
            label="メールアドレス*"
            placeholder="example@gigaprimo.com"
            :rules="[(v:string) => !!v || 'メールアドレスは必須です', (v:string) => /.+@.+\..+/.test(v) || 'メールアドレスの形式が正しくありません']"
            outlined
            dense
            required
          ></v-text-field>

          <v-text-field
            v-model="form.mobilePhone"
            label="携帯電話番号*"
            placeholder="09012345678"
            :rules="[(v:number) => !!v || '携帯電話番号は必須です', (v:string) => /^0\d{9,10}$/.test(v) || '携帯電話番号の形式が正しくありません']"
            outlined
            dense
            required
          ></v-text-field>

          <v-text-field
            v-model="form.homePhone"
            label="固定電話"
            placeholder="0312345678"
            outlined
            dense
          ></v-text-field>

          <v-text-field
            v-model="form.postalCode"
            label="郵便番号(7桁)*"
            placeholder="1234567"
            :rules="[(v:number) => !!v || '郵便番号は必須です', (v:string) => /^\d{7}$/.test(v) || '郵便番号は7桁の数字で入力してください']"
            outlined
            dense
            required
          ></v-text-field>

          <v-text-field
            v-model="form.prefecture"
            label="都道府県*"
            placeholder="東京都"
            :rules="[(v:string) => !!v || '都道府県は必須です']"
            outlined
            dense
            required
          ></v-text-field>

          <v-text-field
            v-model="form.city"
            label="市区町村/番地*"
            placeholder="千代田区丸の内1-1-1"
            :rules="[(v:string) => !!v || '市区町村/番地は必須です']"
            outlined
            dense
            required
          ></v-text-field>

          <v-text-field
            v-model="form.building"
            label="マンション/アパート名"
            placeholder="東京タワー101号室"
            outlined
            dense
          ></v-text-field>

          <v-checkbox
            v-model="form.separateDelivery"
            label="配送先住所を別途設定する"
          ></v-checkbox>

          <nuxt-link to="/ec/credit" style="text-decoration: none;">
            <v-btn
                color="primary"
                block
                large
                @click="submitForm"
            >
                カード情報の入力
            </v-btn>
          </nuxt-link>
          <nuxt-link to="/ec/plan" style="text-decoration: none;">
              <v-btn
              text
              block
              class="mt-4"
              >
              プラン選択の入力に戻る
              </v-btn>
          </nuxt-link>
        </v-card>
      </v-form>
    </v-container>
  </template>
