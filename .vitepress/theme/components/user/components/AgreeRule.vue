<script setup lang="ts">
import { NCheckbox } from 'naive-ui'

const model = defineModel<boolean>()

</script>

<template>
    <div class="text-center text-sm">
        <n-checkbox v-model:checked="model">
        </n-checkbox>
        <span> 我已同意
            <a class="ml-1" href="#" _target="blank">用户协议</a>
            和
            <a class="ml-1" href="#">隐私政策</a></span>
    </div>
</template>

<style lang="scss" scoped></style>