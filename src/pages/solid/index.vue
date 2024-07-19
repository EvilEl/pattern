<script setup lang="ts">
import Steper from '@/components/steper'
import Image from 'primevue/image'

const data = [
  {
    title: 'S',
    img: 'img/S.png',
    description: 'Каждый класс должен отвечать только за одну операцию.'
  },
  {
    title: 'O',
    img: 'img/O.png',
    description: 'Классы должны  быть  открыты для расширения, но закрыты для модификации.'
  },
  {
    title: 'L',
    img: 'img/L.png',
    description:
      'Если П является подтипом Т, то любые объекты типа Т, присутствующие в программе, могут заменяться объектами типа П без негативных последствий для функциональности программы.'
  },
  {
    title: 'I',
    img: 'img/I.png',
    description: 'Не следует ставить клиент в зависимость от методов, которые он не использует.'
  },
  {
    title: 'D',
    img: 'img/D.png',
    description:
      'Модули верхнего уровня не должны зависеть от модулей нижнего уровня. И те, и другие должны зависеть от абстракций. Абстракции не должны зависеть от деталей. Детали должны зависеть от абстракций.'
  }
]
</script>
<template>
  <div class="solid">
    <Steper :data="data">
      <template #content="{ step }">
        <div class="flex flex-col">
          <p class="">
            {{ step.description }}
          </p>
          <div class="h-[60vh] mt-5">
            <Image
              :src="step.img"
              image-class="object-contain h-full w-full"
              :alt="step.title"
              preview
            />
          </div>
        </div>
      </template>
    </Steper>
  </div>
</template>

<style scoped>
.solid .p-image-preview-container {
  @apply object-contain;
  @apply h-full;
  @apply w-full;
}
.solid p {
  border-left: 4px solid #4cb7eb;
  padding-left: 5px;
}
</style>
