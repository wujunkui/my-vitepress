<script setup lang="ts">
import { NModal } from 'naive-ui'
import { useLoginStore, useRegisterStore } from '../../stores'
import FormLayout from './components/FormLayout.vue'
import { NForm, NFormItem, NInput, NButton, useMessage } from 'naive-ui'
import { DefaultService } from '../../../client'
import type { LoginUser } from '../../../client'
import AgreeRule from './components/AgreeRule.vue'
import { ref } from 'vue'

const loginStore = useLoginStore()
const { toggleRegister } = useRegisterStore()
const message = useMessage()
const info = ref<LoginUser>({
    name: '',
    password: '',
})
const agreeRule = ref(false)

const submit = () => {
    DefaultService.login({ requestBody: info.value })
        .then((res) => {
            message.success('登录成功')
            loginStore.toggleLogin()
        })
        .catch((err) => {
            message.error(err.message)
        })
}
const changeToRegister = () => {
    loginStore.toggleLogin()
    toggleRegister()
}
</script>

<template>
    <n-modal v-model:show="loginStore.loginShow">
        <FormLayout title="登 录" :closeClick="loginStore.toggleLogin">

            <n-form class="" :model="info">
                <n-form-item label="用户名">
                    <n-input v-model:value="info.name" placeholder="用户名"></n-input>
                </n-form-item>
                <n-form-item label="密码">
                    <n-input v-model:value="info.password" placeholder="密码" type="password"></n-input>
                </n-form-item>

                <AgreeRule v-model="agreeRule" />
                <n-button class="w-full text-base font-bold mt-4" @click="submit" type="primary">快 速 登 录</n-button>
                <div class="flex justify-between text-xs mt-4">
                    <a href="">忘记密码？</a>
                    <span><span>没有账号？直接</span><a class="ml-1 cursor-pointer" @click="changeToRegister">注册</a></span>

                </div>

            </n-form>
        </FormLayout>
    </n-modal>
</template>

<style lang="scss" scoped></style>