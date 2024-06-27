<script setup lang="ts">
import { NForm, NFormItem, NInput, NButton, useMessage, NCheckbox, NIcon } from 'naive-ui'
import { DefaultService } from '../../../client'
import type { RegisterUser } from '../../../client'
import { ref } from 'vue';
import { withBase } from 'vitepress'
import { Close } from '@vicons/ionicons5';
import { useRegisterStore } from '../../stores'

const info = ref<RegisterUser>({ name: '', password: '', ensure_password: '' })
const message = useMessage()
const { toggleRegister } = useRegisterStore()
const submit = async () => {
    try {
        const res = await DefaultService.register({ requestBody: info.value })
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
    <div class="bg-[var(--vp-c-bg)] flex">
        <div class="flex-none w-72 opacity-75">
            <img class="w-full h-full object-cover" :src="withBase('/register.png')" alt="注册时候的图片">
        </div>
        <div class="grow p-6">
            <div class="float-right ">
                <n-icon size="20" class="hover:bg-gray-100 cursor-pointer" @click="toggleRegister">
                    <Close />
                </n-icon>
            </div>
            <div class="text-center">
                <span>胡思乱想实验室</span>
                <p class="mt-4 text-xs opacity-50">注 册</p>
            </div>
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
                <div class="text-center text-sm">
                    <n-checkbox>

                    </n-checkbox>
                    <span> 我已同意
                        <a class="ml-1" href="#" _target="blank">用户协议</a>
                        和
                        <a class="ml-1" href="#">隐私政策</a></span>
                </div>

                <n-button class="w-full text-base font-bold mt-4" @click="submit" type="primary">快 速 注 册</n-button>
                <div class="flex justify-between text-xs mt-4">
                    <a href="">忘记密码？</a>
                    <span><span>已有账号？直接</span><a class="ml-1" :href="withBase('/user/login')">登录</a></span>

                </div>

            </n-form>
        </div>


    </div>



</template>

<style lang="scss" scoped></style>