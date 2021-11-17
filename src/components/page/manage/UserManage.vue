<template>
    <div>
        <h3>学生管理</h3>
        <el-row>
            <el-button type="primary">添加学生</el-button>
            <el-button type="primary">清空学生积分</el-button>
        </el-row>
        <el-divider></el-divider>
        <h3>学生列表</h3>
        <el-table :data="tableData">
            <el-table-column prop="date" label="序号">
            </el-table-column>
            <el-table-column prop="name" label="学生姓名">
            </el-table-column>
            <el-table-column prop="address" label="学生小组">
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