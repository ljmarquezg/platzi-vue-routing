<template>
  <div
      v-for="message in messagesFiltered"
      :key="message.id"
  >
    <p>{{ message.text }}</p>
  </div>
</template>

<script setup>
import { computed, ref, defineProps } from 'vue';
import { useRoute } from 'vue-router';

const messages = ref([
  {
    id: 1,
    text: 'Hola, ¿cómo estás?',
    author: 1
  },
  {
    id: 2,
    text: '¡Hola! Bien, gracias. ¿Y tú?',
    author: 2
  },
  {
    id: 3,
    text: '¡Muy bien! ¿Qué has hecho hoy?',
    author: 3
  },
  {
    id: 4,
    text: 'Adiós',
    author: 3
  },
  {
    id: 5,
    text: 'Que bueno verte',
    author: 2
  },
]);

/* Usando rutas desde la URL:
const messagesFiltered = computed(() =>
    messages.value.filter(message => `${message.author}` === useRoute().params.chatId)
);
 */

const props = defineProps({
  chatId: {
    type: String,
    required: true,
    default: ''
  }
});

// Usando parámetros desde la URL seteado como props (ver routes/index.js):
const messagesFiltered = computed(() =>
    messages.value.filter(message => `${message.author}` === props.chatId)
);

</script>
