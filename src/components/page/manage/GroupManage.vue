<template>
    <div>
        <h3>小组管理</h3>
        <el-row>
            <el-button type="primary">添加小组</el-button>
            <el-button type="primary">清空小组积分</el-button>
        </el-row>
        <el-divider></el-divider>
        <h3>小组列表</h3>
        <el-table :data="tableData">
            <el-table-column prop="date" label="序号">
            </el-table-column>
            <el-table-column prop="name" label="小组昵称">
            </el-table-column>
            <el-table-column prop="address" label="小组口号">
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