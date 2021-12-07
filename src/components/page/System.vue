<template>
    <div>
        <p class="">
            <span class="span_font">类别：</span>
            <el-dropdown>
                <el-select v-model="type" clearable placeholder="请选择" @change="changeType">
                    <el-option
                            v-for="item in dataType"
                            :key="item.typeId"
                            :label="item.typeName"
                            :value="item.typeId">
                    </el-option>
                </el-select>
            </el-dropdown>
            <span class="span_font" v-if="type!=''">详细分类：</span>
            <el-dropdown v-if="type!=''">
                <el-select v-model="sort" clearable placeholder="请选择" @change="changeSort">
                    <el-option
                            v-for="item in dataSort"
                            :key="item.sortId"
                            :label="item.sortName"
                            :value="item.sortId">
                    </el-option>
                </el-select>
            </el-dropdown>
            <span class="span_font" v-if="type!=''&&sort!=''">具体加分项：</span>
            <el-dropdown v-if="type!=''&&sort!=''">
                <el-select v-model="specificSort" clearable placeholder="请选择" @change="changeSpecificScore">
                    <el-option
                            v-for="item in dataSpecificScore"
                            :key="item.specificId"
                            :label="item.specificName"
                            :value="item.specificId">
                    </el-option>
                </el-select>
            </el-dropdown>
        </p>
        <el-table :data="tableDataSystem" height="717">
            <el-table-column prop="typeName" label="类别">
            </el-table-column>
            <el-table-column prop="sortName" label="详细分类">
            </el-table-column>
            <el-table-column prop="specificName" label="具体加分项">
            </el-table-column>
            <el-table-column prop="specificFraction" label="具体分值">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                dataType: [{
                    typeId: '',
                    typeName: ''
                }],
                dataSort: [{
                    sortId: '',
                    sortName: ''
                }],
                dataSpecificScore: [{
                    specificId: '',
                    specificName: ''
                }],
                type: '',
                sort:'',
                specificSort:'',
                tableDataSystem:[]
            }
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            init() {
                var self = this
                this.$axios.post('/client/specificscore/search',{})
                    .then(function(res) {
                        console.log(res.data.list);
                        self.tableDataSystem = res.data.list
                    })
                    .catch(function(err) {
                        console.log(err)
                    })
                this.$axios.get('/client/type/search')
                    .then(function(res) {
                        console.log(res.data.list);
                        self.dataType = res.data.list
                    })
                    .catch(function(err) {
                        console.log(err)
                    })
                this.$axios.post('/client/sort/search',{})
                    .then(function(res) {
                        console.log(res.data.list);
                        self.dataSort = res.data.list
                    })
                    .catch(function(err) {
                        console.log(err)
                    })
            },
            changeType(type) {
                var self = this
                self.sort = '';
                this.$axios.post('/client/sort/search',{sortType:type})
                    .then(function(res) {
                        self.dataSort = res.data.list
                        console.log(res.data.list);
                    })
                    .catch(function(err) {
                        console.log(err)
                    })
                this.$axios.post('/client/specificscore/search',{sortType:type})
                    .then(function(res) {
                        console.log(res.data.list);
                        self.tableDataSystem = res.data.list
                    })
                    .catch(function(err) {
                        console.log(err)
                    })
            },
            changeSort(sort) {
                var self = this
                self.specificSort = '';
                this.$axios.post('/client/specificscore/search',{sortType:self.type,specificSort:sort})
                    .then(function(res) {
                        console.log(res.data.list);
                        self.dataSpecificScore = res.data.list
                        self.tableDataSystem = res.data.list
                    })
                    .catch(function(err) {
                        console.log(err)
                    })
            },
            changeSpecificScore(specificSort) {
                var self = this
                this.$axios.post('/client/specificscore/search',{sortType:self.type,specificSort:self.sort,specificId:specificSort})
                    .then(function(res) {
                        console.log(res.data.list);
                        self.tableDataSystem = res.data.list
                    })
                    .catch(function(err) {
                        console.log(err)
                    })
            }
        },
        mounted: function() {
            this.init()
        }
    }
</script>

<style scoped>
    .span_font{
        padding-left: 20px;
        font-size: 18px;
        font-weight: bold;
    }
</style>