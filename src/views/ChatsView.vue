<template>
  <div>
    <aside>
      <div
          v-for="chat in chats"
          :key="chat.id"
      >
        <RouterLink :to="`/chats/${chat.id}`">{{ chat.name }}</RouterLink>
      </div>
    </aside>
    <article>
      <RouterView/>
    </article>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const chats = ref([]);
const route = useRoute();

watch(
    () => route.params,
    (params) => {
      chats.value = [
        {
          id: 1,
          name: 'Gimena'
        },
        {
          id: 2,
          name: 'Jorge'
        },
        {
          id: 3,
          name: 'Mariana'
        }
      ];
    },
    { immediate: true }
);


</script>
