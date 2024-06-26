<script setup lang="ts">
import { NForm, NFormItem, NInput, NButton, useMessage } from 'naive-ui'
import { DefaultService } from '../../../client'
import type { RegisterUser } from '../../../client'
import { reactive, ref } from 'vue';
import { useRouter, withBase } from 'vitepress'

const info = ref<RegisterUser>({ name: '', password: '', ensure_password: '' })
const message = useMessage()
const router = useRouter()
const submit = async () => {
    const urlParams = new URLSearchParams(window.location.search)
    const toUrl = urlParams.get('redirect') || '/'
    console.log(toUrl)
    try {
        const res = await DefaultService.register({ requestBody: info.value })
    } catch (e) {
        const errMsg = e.body.detail

        if (errMsg)
            message.error(e.body.detail)
        return
    }
    message.success('注册成功')
    router.go(toUrl)
}

</script>

<template>
    <div class="bg-[var(--vp-c-bg)] p-8 flex">
        <div class="flex-none w-64">
            <img class="w-full h-full object-cover rounded-xl" :src="withBase('/register.png')" alt="注册时候的图片">
        </div>
        <n-form class="grow pl-6" :model="info">
            <n-form-item label="用户名">
                <n-input v-model:value="info.name" placeholder="用户名"></n-input>
            </n-form-item>
            <n-form-item label="密码">
                <n-input v-model:value="info.password" placeholder="密码" type="password"></n-input>
            </n-form-item>
            <n-form-item label="重复密码">
                <n-input v-model:value="info.ensure_password" placeholder="请再次输入密码" type="password"></n-input>
            </n-form-item>
            <n-button class="w-full font-bold" @click="submit" type="primary">注 册</n-button>
            <div class="text-right text-sm mt-2">
                <span>已有账号？直接</span><a class="ml-1" :href="withBase('/user/login')">登录</a>
            </div>

        </n-form>

    </div>



</template>

<style lang="scss" scoped></style>