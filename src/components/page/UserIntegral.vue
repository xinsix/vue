<template>
    <div>
        <h3>个人积分明细管理</h3>
        <el-row>
            <el-button type="primary">添加个人积分明细</el-button>
            <el-button type="primary">清空个人积分明细</el-button>
            <el-button type="primary">导出个人积分明细到Excel表格</el-button>
        </el-row>
        <el-divider></el-divider>
        <h3>个人积分明细列表</h3>
        <el-table :data="tableDataUserIntegral" >
            <el-table-column type="index" label="序号" width="auto">
            </el-table-column>
            <el-table-column prop="userName" label="学生姓名">
            </el-table-column>
            <el-table-column prop="integralUserChange" label="学生明细积分">
            </el-table-column>
            <el-table-column prop="specificName" label="加分原因"  width="600">
            </el-table-column>
            <el-table-column prop="integralUserTime" label="添加时间"  width="300">
                <template slot-scope="scope">
                    <span>{{ scope.row.integralUserTime|timeFilter }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="adminName" label="添加管理员">
            </el-table-column>
            <el-table-column prop="address" label="操作">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import "@/utils/filters";//引入时间过滤器
    export default {
        data() {
            return {
                tableData: [],
                tableDataUserIntegral: [],
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            init() {
                var self = this
                this.$axios.get('/client/integralUser/search')
                    .then(function(res) {
                        console.log(res.data);
                        self.tableDataUserIntegral = res.data.list
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