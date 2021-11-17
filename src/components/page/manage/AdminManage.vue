<template>
    <div>
        <h3>角色管理</h3>
        <el-row>
            <el-button type="primary">添加角色</el-button>
        </el-row>
        <el-divider></el-divider>
        <h3>角色列表</h3>
        <el-table :data="tableData">
            <el-table-column prop="date" label="序号">
            </el-table-column>
            <el-table-column prop="name" label="角色姓名">
            </el-table-column>
            <el-table-column prop="address" label="角色账号">
            </el-table-column>
            <el-table-column prop="address" label="操作">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>

</style>