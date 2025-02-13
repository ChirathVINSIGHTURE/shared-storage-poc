<!-- <script setup lang="ts">
import db from '~/utils/shared-db'
import { ref, onMounted } from 'vue'

const items = ref([]);

onMounted(async () => {
  items.value = await db.items.toArray();
});
</script>

<template>
  <div>
    <h1>PWA - App 2</h1>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}: {{ item.value }}</li>
    </ul>
  </div>
</template> -->


<!-- <script setup lang="ts">
import { ref } from 'vue';

const sharedData = ref('');

const getData = async () => {
  if ('sharedStorage' in window) {
    sharedData.value = await sharedStorage.get('sharedKey');
  } else {
    console.log('Shared Storage API not supported');
  }
};

getData();
</script>

<template>
  <div>
    <h1>PWA - App 2</h1>
    <p>Shared Data: {{ sharedData }}</p>
  </div>
</template> -->

<script setup lang="ts">
let group = 0;

const getGroup = async () => {
  if ("sharedStorage" in window) {
    await window.sharedStorage.worklet.addModule("/ab-testing-worklet.js");

    group = await window.sharedStorage.get("ab-testing-group");
    console.log("User belongs to group:", group);
  } else {
    console.log("Shared Storage API not supported.");
  }
};

getGroup();
</script>

<template>
  <div>
    <h1>PWA - App 2</h1>
    <p v-if="group === 0">Default Content (Group 0)</p>
    <p v-else>Experimental Content (Group 1)</p>
  </div>
</template>
