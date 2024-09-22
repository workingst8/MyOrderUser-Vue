<template>
  <div class="popup">
    <div class="bg-black" @click="closePopup">
      <div class="bg-white" @click.stop>
        <div class="top">
          <span>{{ tableNum }}번 테이블</span>
          <span class="close" @click="closePopup">×</span>
        </div>
        <p>주문이 완료되었습니다.</p>
        <div class="wrap-order_item">
          <div class="item" v-for="(item, name) in cartItems" :key="name">
            <img :src="item.imgSrc" alt="" />
            <p>{{ name }} {{ item.quantity }}개</p>
          </div>
        </div>
        <div class="total_price">
          총 금액 <span>{{ totalPrice.toLocaleString() }}원</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface CartItem {
  price: number;
  quantity: number;
  imgSrc: string;
}

defineProps<{
  tableNum: number;
  cartItems: Record<string, CartItem>;
  totalPrice: number;
}>();

const emit = defineEmits<{
  (e: "close-popup"): void;
}>();

function closePopup() {
  emit("close-popup");
}
</script>

<style scoped lang="scss">
.bg-black {
  position: absolute;
  top: 0;
  z-index: 99999999 !important;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
}

.bg-white {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: auto;
  background: rgba(255, 255, 255);
  z-index: 99999999999999999;
  border-radius: 4px;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    background: #25c3a8;
    border-radius: 4px 4px 0px 0px;
    padding: 0 10px;

    span:nth-of-type(1) {
      font-weight: 700;
      font-size: 20px;
      color: #ffffff;
    }

    span:nth-of-type(2) {
      font-weight: 700;
      font-size: 18px;
      color: #ffffff;
      cursor: pointer;
    }
  }

  > p {
    font-weight: 700;
    font-size: 26px;
    text-align: center;
    color: #333333;
    margin-top: 30px;
    margin-bottom: 38px;
  }

  .wrap-order_item {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .item {
      width: 20%;
      text-align: center;
      margin-bottom: 16px;
      padding: 0 10px;
      margin-bottom: 50px;

      img {
        width: 100%;
        height: 130px;
      }

      :nth-child(2) {
        font-size: 15px;
        font-weight: bold;
        color: #333333;
        margin-bottom: 6px;
      }
    }
  }

  .total_price {
    text-align: right;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 50px;
    margin-right: 50px;

    span {
      color: #dc1e1e;
    }
  }
}
</style>
