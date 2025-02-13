<!-- <script setup lang="ts">
import db from '~/utils/shared-db'
import { ref, onMounted } from 'vue'

const items = ref([]);

const addItem = async () => {
  await db.items.add({ name: 'Test Item', value: 'Data from App 1' });
  console.log('Item added');
}

onMounted(async () => {
  items.value = await db.items.toArray();
  console.log('Fetched items:', items.value);
});
</script>

<template>
  <div>
    <h1>PWA - App 1</h1>
    <button @click="addItem">Add Item</button>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}: {{ item.value }}</li>
    </ul>
  </div>
</template> -->


<!-- <script setup lang="ts">
const addData = async () => {
  if ('sharedStorage' in window) {
    await window.sharedStorage.set('sharedKey', 'Data from App 1');
    console.log('Data set in shared storage');
  } else {
    console.log('Shared Storage API not supported');
  }
};
</script>

<template>
  <div>
    <h1>PWA - App 1</h1>
    <button @click="addData">Add Data to Shared Storage</button>
  </div>
</template> -->

<script setup lang="ts">
const getExperimentGroup = () => Math.round(Math.random());

const injectContent = async () => {
  if ("sharedStorage" in window) {
    // Register the worklet
    await window.sharedStorage.worklet.addModule("/ab-testing-worklet.js");

    // Assign the user to a random group and store it in shared storage
    await window.sharedStorage.set("ab-testing-group", getExperimentGroup(), {
      ignoreIfPresent: true,
    });

    

    console.log("User assigned to A/B testing group and data stored.");
  } else {
    console.log("Shared Storage API not supported.");
  }
};

injectContent();
</script>

<template>
  <div>
    <h1>PWA - App 1</h1>
    <p>User is being assigned to an A/B testing group...</p>
  </div>
</template>
