<template>
    <div>
        <h3>学生管理</h3>
        <el-row>
            <el-button type="primary">添加学生</el-button>
            <el-button type="primary">清空学生积分</el-button>
        </el-row>
        <el-divider></el-divider>
        <h3>学生列表</h3>
        <el-table :data="tableDataUser" height="594">
            <el-table-column type="index" label="序号" width="auto">
            </el-table-column>
            <el-table-column prop="userName" label="学生姓名">
            </el-table-column>
            <el-table-column prop="groupName" label="学生小组" #default="scope">
                {{scope.row.groupName}}小组
            </el-table-column>
            <el-table-column label="操作">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableDataUser: [],
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            init() {
                var self = this
                this.$axios.get('/client/user/search')
                    .then(function(res) {
                        console.log(res.data.list);
                        self.tableDataUser = res.data.list
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