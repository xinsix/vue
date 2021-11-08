<template>
    <div class="_div">
        <h2>管理员登录</h2>
        <el-form ref="form" :model="form"  class="form-login">
            <el-form-item label="">
                <el-input v-model="form.name" auto-complete="off"  placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item label="">
                <el-input type="password" v-model="form.pwd" auto-complete="off"  placeholder="密码" show-password="false"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                form: {
                    name: '',
                    pwd: ''
                }
            }
        },
        methods: {
            onSubmit() {
                //console.log('submit!');
            }
        }
    }
</script>

<style scoped>
    ._div{
        margin: 300px;
    }
    .form-login{
        width: 300px;
        /*margin-left: 35%;*/
    }
</style>