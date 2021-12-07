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
                <el-table :data="tableDataGroupIntegral" height="595">
                    <el-table-column type="index" label="序号">
                    </el-table-column>
                    <el-table-column prop="groupName" label="小组名称" #default="scope">
                        {{scope.row.groupName}}小组
                    </el-table-column>
                    <el-table-column prop="groupIntegral" label="小组积分">
                    </el-table-column>
                    <el-table-column prop="group_sum" label="小组总和积分">
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="个人积分" name="userIntegral">
                <!--个人积分-->
                <el-table :data="tableDataUserIntegral" width="100%" height="595">
                    <el-table-column type="index" label="序号" width="auto">
                    </el-table-column>
                    <el-table-column prop="userName" label="姓名">
                    </el-table-column>
                    <el-table-column prop="groupName" label="小组名称" #default="scope">
                        {{scope.row.groupName}}小组
                    </el-table-column>
                    <el-table-column prop="userIntegral" label="个人积分">
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
                activeName: 'groupIntegral',
                tableDataGroupIntegral: [],
                tableDataUserIntegral: [],
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            init() {
                var self = this
                this.$axios.get('/client/studentgroup/queryStudentGroupSum')
                    .then(function(res) {
                        console.log(res.data);
                        self.tableDataGroupIntegral = res.data
                    })
                    .catch(function(err) {
                        console.log(err)
                    })
                this.$axios.get('/client/user/queryUserIntegral')
                    .then(function(res) {
                        console.log(res.data);
                        self.tableDataUserIntegral = res.data
                    })
                    .catch(function(err) {
                        console.log(err)
                    })
            },
        },
        mounted: function() {
            this.init()
        }
    }
</script>

<style scoped>

</style>