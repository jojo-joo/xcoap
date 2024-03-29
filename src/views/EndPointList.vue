<template>
    <el-table ref="multipleTableRef" :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" />
        <el-table-column label="URL" width="120">
            <template #default="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column property="ip" label="ip" width="120" />
    </el-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElTable } from 'element-plus'

interface User {
    ip: string
    port: string
}

const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref<User[]>([])
const toggleSelection = (rows?: User[]) => {
    if (rows) {
        rows.forEach((row) => {
            // TODO: improvement typing when refactor table
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            multipleTableRef.value!.toggleRowSelection(row, undefined)
        })
    } else {
        multipleTableRef.value!.clearSelection()
    }
}
const handleSelectionChange = (val: User[]) => {
    multipleSelection.value = val
}

const tableData: User[] = [
    {
        ip: '192.168.1.1',
        port: '80',
    },
    {
        ip: '192.168.1.2',
        port: '8080',
    },
    {
        ip: '192.168.1.3',
        port: '443',
    },
    {
        ip: '192.168.1.4',
        port: '22',
    },
    {
        ip: '192.168.1.5',
        port: '3306',
    },
    {
        ip: '192.168.1.6',
        port: '5432',
    },
    {
        ip: '192.168.1.7',
        port: '27017',
    },
];
</script>

<style scoped></style>