<script setup lang="ts">
import { NForm, NFormItem, NInput, NButton, useMessage } from 'naive-ui'
import { register } from '@client'
import { reactive, ref } from 'vue';

interface UserInfo {
    name: string
    password: string
    ensure_password: string
}

const info: UserInfo = reactive({ name: '', password: '', ensure_password: '' })
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

    <n-form>
        <n-form-item label="用户名">
            <n-input v-model="info.name"></n-input>
        </n-form-item>
        <n-form-item label="密码">
            <n-input v-model="info.password"></n-input>
        </n-form-item>
        <n-form-item label="重复密码">
            <n-input v-model="info.ensure_password" placeholder="请再次输入密码"></n-input>
        </n-form-item>
        <n-button @click="submit">注册</n-button>

    </n-form>



</template>

<style lang="scss" scoped></style>