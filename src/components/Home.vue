<template>
    <div class="div_home">
        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>查看</el-dropdown-item>
                        <el-dropdown-item>新增</el-dropdown-item>
                        <el-dropdown-item>删除</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span>王小虎</span>
            </el-header>
            <el-container >
                <el-aside  style="width: 260px;">
                    <el-row>
                        <el-col :span="24" >
                            <el-menu router
                                     :default-active="$route.path"
                                     class="el-menu-vertical-demo"
                                     @open="handleOpen"
                                     @close="handleClose">

                                <el-menu-item index="/home/index">
                                    <i class="el-icon-menu"></i>
                                    <span slot="title">系统首页</span>
                                </el-menu-item>

                                <el-submenu index="1">
                                    <template slot="title">
                                        <i class="el-icon-location"></i>
                                        <span>积分管理</span>
                                    </template>
                                    <el-menu-item-group>
                                        <el-menu-item index="/home/system">班级积分制度</el-menu-item>
                                        <el-menu-item index="/home/UserIntegral">用户积分管理</el-menu-item>
                                        <el-menu-item index="/home/GroupIntegral">小组积分管理</el-menu-item>
                                    </el-menu-item-group>
                                </el-submenu>
                                <el-submenu index="2">
                                    <template slot="title">
                                        <i class="el-icon-location"></i>
                                        <span>系统管理</span>
                                    </template>
                                    <el-menu-item-group>
                                        <el-menu-item index="/home/AdminManage">角色管理</el-menu-item>
                                        <el-menu-item index="/home/UserManage">用户管理</el-menu-item>
                                        <el-menu-item index="/home/GroupManage">小组管理</el-menu-item>
                                    </el-menu-item-group>
                                </el-submenu>
                            </el-menu>
                        </el-col>
                    </el-row>
                </el-aside>
                <el-container style="height: 900px; border: 1px solid #eee">
                    <el-main>
                        <router-view/>
                    </el-main>
                    <el-footer>
                        <div>
                            备案号
                        </div>
                    </el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                tableData: Array(20).fill(item)
            }
        }
    }
</script>

<style scoped>
    .div_home{
        padding: 0 auto;
        margin: 0 auto;
    }
</style>