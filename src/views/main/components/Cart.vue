<template>
  <div class="cart">
    <div class="orderList">
      <div class="top">
        <div
          class="box-order ordered_item"
          v-for="(item, name) in cartItems"
          :key="name"
        >
          <span class="item_name">{{ name }}</span>
          <span></span>
          <span>
            <button class="modify_quantity" @click="modifyQuantity(name, 1)">
              +
            </button>
            <span class="quantity">{{ item.quantity }}</span>
            <button class="modify_quantity" @click="modifyQuantity(name, -1)">
              -
            </button>
          </span>
          <span
            ><button class="delete_item" @click="removeItem(name)">
              취소
            </button></span
          >
        </div>
      </div>
      <div class="bottom">
        <div class="bottom_top01">
          <span>총 금액</span>
          <span>{{ totalPrice.toLocaleString() }}원</span>
        </div>
        <div class="bottom_bottom01">
          <span class="order" @click="openPopup">주문하기</span>
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

const props = defineProps<{
  cartItems: Record<string, CartItem>;
  totalPrice: number;
}>();

const emit = defineEmits<{
  (e: "modify-quantity", name: string, amount: number): void;
  (e: "remove-item", name: string): void;
  (e: "open-popup"): void;
}>();

function modifyQuantity(name: string, amount: number) {
  emit("modify-quantity", name, amount);
}

function removeItem(name: string) {
  emit("remove-item", name);
}

function openPopup() {
  const itemCount = Object.keys(props.cartItems).length;
  if (itemCount === 0) {
    alert("상품을 선택해주세요");
  } else {
    emit("open-popup");
  }
}
</script>

<style scoped lang="scss">
.cart {
  width: 300px;
  box-shadow: inset -3px 0px 4px rgba(169, 169, 169, 0.25);

  .orderList {
    .top {
      padding: 20px 10px 0 10px;
      height: calc(100vh - 219px);
      overflow-y: scroll;
      border-left: 1px solid #333;
      border-bottom: 1px solid #333;
    }

    .box-title {
      padding-bottom: 10px;
      margin-left: 4px;
      border-bottom: 1px solid #000000;
    }

    .box-order {
      display: flex;
      flex-wrap: wrap;
      padding: 10px;
      border-bottom: 1px solid #000000;

      > span:nth-child(-n + 4) {
        width: 50%;
        font-size: 18px;
        font-weight: bold;
      }

      > span:nth-child(2),
      > span:nth-child(4) {
        text-align: right;
        font-weight: bold;
      }

      > span:nth-child(3),
      > span:nth-child(4) {
        margin-top: 14px;
      }

      > span:nth-child(4) button {
        border: 1px solid #dc1e1e;
        height: 34px;
        padding: 7px;
        color: #dc1e1e;
        font-weight: 700;
        border-radius: 4px;
      }

      > span:nth-child(3) {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      > span:nth-child(3) button {
        width: 40px;
        height: 34px;
        box-shadow: 0px 2px 2px rgba(164, 164, 164, 0.25),
          inset 0px 2px 3px 1px rgba(82, 82, 82, 0.25);
        border-radius: 4px;
        font-size: 22px;
      }

      > span:nth-child(5) {
        margin-top: 15px;
      }

      > span:nth-child(n + 6) {
        margin-top: 2px;
      }

      > span:nth-child(n + 5) {
        font-size: 15px;
        color: #767676;
      }
    }
  }

  .bottom {
    display: flex;
    flex-direction: column;
    border-left: 1px solid #333;
    padding-top: 20px;

    .bottom_top01 {
      display: flex;
      justify-content: space-evenly;
      margin-bottom: 30px;

      > * {
        font-weight: bold;
        font-size: 20px;
        color: #333333;
      }

      > :nth-of-type(2) {
        color: #dc1e1e;
      }
    }

    .bottom_bottom01 {
      display: flex;
      align-items: center;

      span {
        width: 100%;
        background: #25c3a8;
        box-shadow: inset 0px 0px 4px 1px rgba(118, 118, 118, 0.25);
        color: #ffffff;
        text-align: center;
        line-height: 80px;
        font-size: 26px;
        font-weight: bold;
      }
    }
  }
}
</style>
