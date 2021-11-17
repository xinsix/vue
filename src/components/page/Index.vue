<template>
    <div>
        <h2>班级积分管理系统</h2>
        <el-divider></el-divider>
        <el-row>
            <el-button type="primary">导出小组积分到Excel表格</el-button>
            <el-button type="primary">导出个人积分到Excel表格</el-button>
        </el-row>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="小组积分" name="groupIntegral">
                <!--小组积分-->
                <el-table :data="tableData">
                    <el-table-column prop="date" label="序号" width="300">
                    </el-table-column>
                    <el-table-column prop="name" label="小组名称" width="450">
                    </el-table-column>
                    <el-table-column prop="date" label="小组积分" width="500">
                    </el-table-column>
                    <el-table-column prop="name" label="小组总和积分" width="500">
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="个人积分" name="userIntegral">
                <!--个人积分-->
                <el-table :data="tableData" width="100%">
                    <el-table-column prop="date" label="序号" width="300">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="450">
                    </el-table-column>
                    <el-table-column prop="date" label="小组名称" width="500">
                    </el-table-column>
                    <el-table-column prop="name" label="个人积分" width="500">
                    </el-table-column>
                </el-table>
            </el-tab-pane>
        </el-tabs>


    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeName: 'groupIntegral'
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>

<style scoped>

</style>