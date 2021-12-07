<template>
    <div>
        <h3>小组管理</h3>
        <el-row>
            <el-button type="primary">添加小组</el-button>
            <el-button type="primary">清空小组积分</el-button>
        </el-row>
        <el-divider></el-divider>
        <h3>小组列表</h3>
        <el-table :data="tableDataGroup" height="594">
            <el-table-column type="index" label="序号" width="auto">
            </el-table-column>
            <el-table-column prop="groupName" label="小组昵称" #default="scope">
                {{scope.row.groupName}}小组
            </el-table-column>
            <el-table-column prop="groupSlogan" label="小组口号" #default="scope">
                <span v-if="scope.row.groupSlogan != '' && scope.row.groupSlogan != null">
                     {{scope.row.groupSlogan}}
                </span>
                <span v-else>
                     这个小组很懒，暂时还没有想到口号！！！
                </span>
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
                tableDataGroup: [],
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            init() {
                var self = this
                this.$axios.get('/client/studentgroup/search')
                    .then(function(res) {
                        console.log(res.data.list);
                        self.tableDataGroup = res.data.list
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