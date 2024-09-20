<template>
  <Header />
  <main>
    <MenuComponent @add-item="addItemToCart" />
    <CartComponent
      :cart-items="cartItems"
      :total-price="totalPrice"
      @modify-quantity="modifyQuantity"
      @remove-item="removeItemFromCart"
    />
  </main>
</template>

<script setup lang="ts">
import Header from '../../components/Header.vue';
import { reactive, computed } from 'vue';
import MenuComponent from './components/Menu.vue';
import CartComponent from './components/Cart.vue';

interface Item {
  name: string;
  price: number;
  imgSrc: string;
}

interface CartItem extends Item {
  quantity: number;
}

const cartItems = reactive<Record<string, CartItem>>({});

const totalPrice = computed(() => {
  return Object.values(cartItems).reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
});

function addItemToCart(item: Item) {
  if (cartItems[item.name]) {
    cartItems[item.name].quantity += 1;
  } else {
    cartItems[item.name] = {
      ...item,
      quantity: 1,
    };
  }
}

function modifyQuantity(name: string, amount: number) {
  if (cartItems[name]) {
    cartItems[name].quantity += amount;
    if (cartItems[name].quantity <= 0) {
      delete cartItems[name];
    }
  }
}

function removeItemFromCart(name: string) {
  delete cartItems[name];
}
</script>

<style lang="scss">
main {
  display: flex;
  height: calc(100vh - 60px);

  ::-webkit-scrollbar {
    display: none;
  }

  * {
    cursor: pointer;
  }

}
</style>
