<template>
    <div>
        <h3>角色管理</h3>
        <el-row>
            <el-button type="primary">添加角色</el-button>
        </el-row>
        <el-divider></el-divider>
        <h3>角色列表</h3>
        <el-table :data="tableDataAdmin" height="594">
            <el-table-column type="index" label="序号" width="auto">
            </el-table-column>
            <el-table-column prop="adminName" label="角色姓名">
            </el-table-column>
            <el-table-column prop="adminAccount" label="角色账号">
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
                tableDataAdmin: [],
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            init() {
                var self = this
                this.$axios.get('/client/admin/search')
                    .then(function(res) {
                        console.log(res.data.list);
                        self.tableDataAdmin = res.data.list
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