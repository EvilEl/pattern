<template>
  w
  <!-- <Builder /> -->
  <TestComponent ref="test" />
  <button @click="onPrint">Print</button>
</template>

<script setup lang="ts">
import Builder from './components/generating/Builder.vue'
import TestComponent from './components//TestComponent.vue'
import { ref } from 'vue'
import bb from './style.css?inline'
const isShowComponent = ref<boolean>(false)
const test = ref()

function onPrint() {
  isShowComponent.value = true
  const print = document.getElementById('print')
  if (!print) {
    return
  }

  const prtHtml = print.innerHTML
  const WinPrint = window.open(
    '',
    '',
    'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0'
  )

  if (!WinPrint) {
    return
  }

  WinPrint.document.write(`<!DOCTYPE html>
<html>
  <head>
    <style>
    ${bb}
    </style>
  </head>
  <body>
    ${prtHtml}
  </body>
</html>`)

  WinPrint.document.close()
  WinPrint.focus()
  WinPrint.print()
  // WinPrint.close()

  isShowComponent.value = false
}
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
