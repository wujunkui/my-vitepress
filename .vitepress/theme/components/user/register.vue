<script setup lang="ts">
import { NForm, NFormItem, NInput, NButton, useMessage } from 'naive-ui'
import { register } from '../../../client'
import { reactive, ref } from 'vue';

interface UserInfo {
    name: string
    password: string
    ensurePassword: string
}

const info: UserInfo = reactive({ name: '', password: '', ensurePassword: '' })
const message = useMessage()

const submit = async () => {
    try {
        const res = await register(info)
    } catch (e) {
        message.error("两次密码不一致")
        return
    }
    // todo 跳转去哪一页？
}

</script>

<template>
    <div class="bg-[var(--vp-c-bg)] p-8 m-[-20px] flex">
        <div class="w-64">
            <img class="w-full" src="" alt="注册时候的图片">
        </div>
        <n-form class="grow">
            <n-form-item label="用户名">
                <n-input v-model="info.name" placeholder="用户名"></n-input>
            </n-form-item>
            <n-form-item label="密码">
                <n-input v-model="info.password" placeholder="密码"></n-input>
            </n-form-item>
            <n-form-item label="重复密码">
                <n-input v-model="info.ensurePassword" placeholder="请再次输入密码"></n-input>
            </n-form-item>
            <n-button class="w-full" @click="submit" type="primary">注册</n-button>

        </n-form>

    </div>



</template>

<style lang="scss" scoped></style>