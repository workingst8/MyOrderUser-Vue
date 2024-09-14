<template>
    <div>
      <router-link to="/main">
        <button>주문시작</button>
      </router-link>
    </div>
  </template>
  
  <script setup lang="ts"></script>
  
  <style scoped lang="scss">
    button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 320px;
      height: 80px;
      line-height: 80px;
      color: #ffffff;
      font-size: 40px;
      font-weight: 700;
      background: linear-gradient(180deg, #25c3a8 0%, #0953ab 100%);
      border-radius: 40px;
    }
  </style>