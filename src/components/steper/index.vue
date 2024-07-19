<script setup lang="ts">
import Stepper from 'primevue/stepper'
import StepperPanel from 'primevue/stepperpanel'
import Button from 'primevue/button'

interface IData {
  title: string
  img: string
  description: string
}
interface IProps {
  data: Array<IData>
}

const props = defineProps<IProps>()

function getJustificationClass(index: number) {
  const isFirst = index === 0
  const isLast = index === props.data.length - 1
  if (isFirst) {
    return 'justify-end'
  } else if (isLast) {
    return 'justify-start'
  } else {
    return 'justify-between'
  }
}
</script>

<template>
  <Stepper>
    <StepperPanel v-for="(step, index) in props.data" :key="index" :header="step.title">
      <template #content="{ prevCallback, nextCallback }">
        <slot name="content" :step="step"> </slot>
        <div class="flex mt-10" :class="getJustificationClass(index)">
          <Button
            v-if="index > 0"
            label="Back"
            severity="secondary"
            icon="pi pi-arrow-left"
            @click="prevCallback"
          />
          <Button
            v-if="index < props.data.length - 1"
            label="Next"
            icon="pi pi-arrow-right"
            iconPos="right"
            @click="nextCallback"
          />
        </div>
      </template>
    </StepperPanel>
  </Stepper>
</template>
