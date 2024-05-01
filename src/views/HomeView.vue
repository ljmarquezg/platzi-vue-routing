<script setup></script>

<template>
  <main>
    <h3>Introduce tu nombre de usuario</h3>
    <input
        placeholder="username"
        type="text"
        v-model="username"
    />
    <button
        type="button"
        @click="iniciarSesion()"
    >
      Iniciar Sesión
    </button>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const router = useRouter();

const iniciarSesion = () => {
  if (username.value) {
    localStorage.setItem('username', username.value);
    router.push({
      path: '/chats',
    });
  }
};

</script>
