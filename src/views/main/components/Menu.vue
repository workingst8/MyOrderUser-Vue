<template>
  <div class="menu">
    <div class="box-item">
      <div
        class="item"
        v-for="item in items"
        :key="item.name"
        @click="addItem(item)"
      >
        <img :src="item.imgSrc" :alt="item.name" />
        <p>
          <span class="name">{{ item.name }}</span
          ><span class="price">{{ item.price.toLocaleString() }}원</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref, onMounted } from "vue";

interface Item {
  name: string;
  price: number;
  imgSrc: string;
}

const items = ref<Item[]>([]);

const emit = defineEmits<{
  (e: "add-item", item: Item): void;
}>();

function addItem(item: Item) {
  emit("add-item", item);
}

async function fetchItems() {
  try {
    const response = await axios.get(
      "https://myorder11.mycafe24.com/api/v1/items"
    );
    items.value = response.data.map((post: any) => ({
      name: post.product,
      price: post.price,
      imgSrc: `https://myorder11.mycafe24.com/storage/${post.image}`,
    }));
  } catch (error) {
    console.error("Failed to fetch items:", error);
  }
}

onMounted(fetchItems);
</script>

<style scoped lang="scss">
.menu {
  width: calc(100% - 300px);
  height: 100%;
  padding: 10px 10px 0 10px;
  box-shadow: inset 3px 0px 4px rgba(169, 169, 169, 0.25);

  .box-item {
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    max-height: calc(100% - 90px);
    margin-top: 10px;
    justify-content: flex-start;
    align-items: flex-start;

    .item {
      width: 24%;
      display: flex;
      flex-direction: column;
      margin-right: 1%;
      position: relative;
      border-radius: 0px 4px;
      margin-bottom: 10px;

      img {
        height: 100px;
        object-fit: cover;
      }

      > span:nth-of-type(1) {
        width: 50px;
        background: #dc1e1e;
        border-radius: 0px 4px;
        position: absolute;
        top: 0;
        right: 0;
        color: #ffffff;
        text-align: center;
        padding: 2px 8px;
        font-size: 13px;
      }

      > p {
        background-color: #ffffff;
        font-size: 15px;
        text-align: center;
        color: #333333;
        text-align: left;
        padding: 4px 9px;
        width: 100%;

        span {
          display: block;
          text-align: center;
        }

        > span:nth-of-type(2) {
          width: 100%;
          font-size: 15px;
          font-weight: 700;
        }
      }
    }
  }
}
</style>
