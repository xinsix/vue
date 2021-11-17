<template>
    <div>
        <p class="" >
            <span class="span_font">类别：</span>
            <el-dropdown>
                <el-select v-model="value" clearable placeholder="请选择">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-dropdown>
            <span class="span_font">详细分类：</span>
            <el-dropdown>
                <el-select v-model="value" clearable placeholder="请选择">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-dropdown>
                <span class="span_font">具体加分项：</span>
            <el-dropdown>
                <el-select v-model="value" clearable placeholder="请选择">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-dropdown>
        </p>
        <el-table :data="tableData">
            <el-table-column prop="date" label="类别">
            </el-table-column>
            <el-table-column prop="name" label="详细分类">
            </el-table-column>
            <el-table-column prop="address" label="具体加分项">
            </el-table-column>
            <el-table-column prop="address" label="具体分值">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: ''
            }
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