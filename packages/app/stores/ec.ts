import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0);
    function increment() {
        count.value++
    }
    return { count, increment };
},
{
    persist: true,
}
)

export const useCustomerStore = defineStore('customer', () => {
  const customer = ref({
    lastName: '',
    firstName: '',
    lastNameKana: '',
    firstNameKana: '',
    birthYear: '',
    birthMonth: '',
    birthDay: '',
    email: '',
    mobilePhone: '',
    homePhone: '',
    postalCode: '',
    prefecture: '',
    city: '',
    building: '',
    separateDelivery: false
  });

  function saveCustomer(formData: any) {
    customer.value = { ...formData };
  }

  return { customer, saveCustomer };
},
{
  persist: {
    key: 'customer-info'
  },
})