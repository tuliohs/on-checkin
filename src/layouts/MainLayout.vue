<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-white">
      <q-toolbar>
        <img
          src="https://www.onfly.com.br/wp-content/uploads/2024/07/onfly-logo-azul-01-768x307-1.webp"
          alt="Logo Onfly"
          class="img-logo"
        />
        <q-space />
        <q-toolbar-title class="font-bold text-h5 title">
          onCheckin
        </q-toolbar-title>
        <q-space />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts"></script>

<style scoped>
.img-logo {
  width: 100px;
  height: auto;
}
.title {
  font-weight: bold;
  color: #192A3D;
}
</style>
