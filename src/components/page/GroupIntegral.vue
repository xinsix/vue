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
        <el-table :data="tableDataGroupIntegral">
            <el-table-column type="index" label="序号">
            </el-table-column>
            <el-table-column prop="groupName" label="小组名称">
            </el-table-column>
            <el-table-column prop="integralGroupChange" label="小组明细积分">
            </el-table-column>
            <el-table-column prop="specificName" label="加分原因" width="600">
            </el-table-column>
            <el-table-column prop="integralGroupTime" label="添加时间" width="300">
                <template slot-scope="scope">
                    <span>{{ scope.row.integralGroupTime|timeFilter }}</span>
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
                tableDataGroupIntegral: [],
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            init() {
                var self = this
                this.$axios.get('/client/integralGroup/search')
                    .then(function(res) {
                        console.log(res.data);
                        self.tableDataGroupIntegral = res.data.list
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