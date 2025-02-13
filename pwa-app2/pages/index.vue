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
import { ref } from 'vue';

const sharedData = ref('');

const getData = async () => {
  if ('sharedStorage' in window) {
    const worklet = new SharedStorageWorklet('shared-worklet');
    sharedData.value = await worklet.handleOperation('get', { key: 'sharedKey' });
    console.log('Data fetched:', sharedData.value);
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
</template>
