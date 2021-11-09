<template>
    <div class="_div">
        <h1>管理员登录</h1>
        <el-form ref="form" :rules="rules" :model="form"  class="form-login">
            <el-form-item label="" prop="name">
                <el-input v-model="form.name" auto-complete="off"  placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item label="" prop="pwd">
                <el-input type="password" v-model="form.pwd" auto-complete="off"  placeholder="密码" show-password="false"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit('form')" class="_sub"><span class="_sub_span">登录</span></el-button>
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
                },
                rules: {
                    name: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    pwd: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            onSubmit(form) {

                this.$refs[form].validate((valid) => {
                    if (valid) {
                        if (this.form.name == 'xinsix' && this.form.pwd == "lrq"){
                            location.href="https://xinsix.lrzanlz.top/";
                            this.$message({
                                type: 'success',
                                message: `登录成功！`
                            });
                            return true;
                        }else if (this.form.name == 'lrz' && this.form.pwd == "lz"){
                            location.href="https://www.lrzanlz.top/";
                            this.$message({
                                type: 'success',
                                message: `登录成功！`
                            });
                            return true;
                        }else if (this.form.name == 'bdqn' && this.form.pwd == "bdqn"){
                            location.href="https://www.bdqn90.top/";
                            this.$message({
                                type: 'success',
                                message: `登录成功！`
                            });
                            return true;
                        }else{
                            this.$message({
                                type: 'error',
                                message: `登录失败：账号或密码错误`
                            });
                            return false;
                        }
                    } else {
                        //console.log('error submit!!');
                        return false;
                    }
                });
                

                //console.log('submit!');
            }
        }
    }
</script>

<style scoped>
    @media (min-width: 374px){
        ._div{
            padding-top: 25%;
        }
    }
    @media (min-width: 768px){
        ._div{
            padding: 20%;
        }
    }
    @media (min-width: 992px){
        ._div{
            padding: 15%;
        }
    }
    @media (min-width: 1200px){
        ._div{
            padding: 10%;
        }
    }
    ._div{
        text-align: center;
        width:300px;
        margin:0 auto;
    }
    .form-login{
        width: 300px;
    }
    ._sub{
        width: 100%;
    }
    ._sub_span{
        font-size: 20px;
    }
</style>