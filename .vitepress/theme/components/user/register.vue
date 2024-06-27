<script setup lang="ts">
import { NForm, NFormItem, NInput, NButton, useMessage } from 'naive-ui'
import { DefaultService } from '../../../client'
import type { RegisterUser } from '../../../client'
import { ref } from 'vue';
import { withBase } from 'vitepress'
import { useRegisterStore } from '../../stores'
import FormLayout from './components/FormLayout.vue';
import AgreeRule from './components/AgreeRule.vue'
const info = ref<RegisterUser>({ name: '', password: '', ensure_password: '' })
const agreeRule = ref(false)
const message = useMessage()
const { toggleRegister } = useRegisterStore()
const submit = async () => {
    try {
        await DefaultService.register({ requestBody: info.value })
    } catch (e: any) {
        const errMsg = e.body.detail

        if (errMsg)
            message.error(e.body.detail)
        return
    }
    message.success('注册成功')
    toggleRegister()
}

</script>

<template>
    <FormLayout title="注 册" :closeClick="toggleRegister">
        <n-form class="" :model="info">
            <n-form-item label="用户名">
                <n-input v-model:value="info.name" placeholder="用户名"></n-input>
            </n-form-item>
            <n-form-item label="密码">
                <n-input v-model:value="info.password" placeholder="密码" type="password"></n-input>
            </n-form-item>
            <n-form-item label="重复密码">
                <n-input v-model:value="info.ensure_password" placeholder="请再次输入密码" type="password"></n-input>
            </n-form-item>

            <AgreeRule v-model="agreeRule" />
            <n-button class="w-full text-base font-bold mt-4" @click="submit" type="primary">快 速 注 册</n-button>
            <div class="flex justify-between text-xs mt-4">
                <a href="">忘记密码？</a>
                <span><span>已有账号？直接</span><a class="ml-1" :href="withBase('/user/login')">登录</a></span>

            </div>

        </n-form>
    </FormLayout>
</template>

<style lang="scss" scoped></style>