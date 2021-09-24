<template>
  {{ n }}
  <article v-if="cart.length > 0">
    <ul>
      <li v-for="item in cart" :key="item.name">
        {{ item.name }} : {{ item.price }}元
        <input v-model="item.count" type="number" style="width: 48px" />
      </li>
    </ul>
    <h5 style="margin-left: 100px">原价:{{ totalPrice }}元</h5>
    <h5 style="margin-left: 100px; color: #f10">总价:{{ realTotalPrice }}元</h5>
  </article>
</template>

<script lang="ts">
import {
  ref,
  Ref,
  computed,
  watch,
  defineComponent,
  onMounted,
  reactive,
} from "vue";
export default defineComponent({
  name: "Cart",

  setup() {
    const n = ref(110);
    console.log(n);
    const [cart, totalPrice] = useGetCart();
    const realTotalPrice = useCoupon(totalPrice);
    return { cart, totalPrice, realTotalPrice, n };
  },
});

/**
 * 获取购物车详情
 */
function useGetCart() {
  //  购物车详情
  const cart = reactive<{ name: string; count: number; price: number }[]>([]);

  // 模拟异步请求
  setTimeout(() => {
    cart.push(
      { name: "苹果", count: 10, price: 10 },
      { name: "香蕉", count: 20, price: 20 }
    );
  }, 1000);

  // 总价格
  const totalPrice = computed(() => {
    return cart.reduce((total, item) => item.count * item.price + total, 0);
  });

  return [cart, totalPrice] as const;
}

/**
 * 获取优惠劵
 */
function useCoupon(totalPrice: Ref<number>) {
  const realTotalPrice = ref(0);
  // 此处实际可以不用onMouted,
  // 仅仅为了演示用法
  onMounted(() => {
    // 模拟异步请求
    setTimeout(() => {
      const coupon = 9;
      watch(
        totalPrice,
        (value) => {
          realTotalPrice.value = value - coupon;
        },
        { immediate: true }
      );
    }, 1000);
  });

  return realTotalPrice;
}
</script>