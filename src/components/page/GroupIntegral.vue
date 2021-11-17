<template>
    <div>
        <h3>小组积分明细管理</h3>
        <el-row>
            <el-button type="primary">添加小组积分明细</el-button>
            <el-button type="primary">清空小组积分明细</el-button>
            <el-button type="primary">导出小组积分明细到Excel表格</el-button>
        </el-row>
        <el-divider></el-divider>
        <h3>小组积分明细列表</h3>
        <el-table :data="tableData">
            <el-table-column prop="date" label="序列号">
            </el-table-column>
            <el-table-column prop="name" label="小组名称">
            </el-table-column>
            <el-table-column prop="address" label="小组明细积分">
            </el-table-column>
            <el-table-column prop="date" label="加分原因">
            </el-table-column>
            <el-table-column prop="name" label="添加时间">
            </el-table-column>
            <el-table-column prop="address" label="添加管理员">
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