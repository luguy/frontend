<template>

    <div>
          <a-table :columns="columns" :dataSource="data" :pagination="{ pageSize: 10 }" :scroll="{ y: 350 }" />
    </div>

</template>
<script>
    const columns = [{
    title: 'Name',
    dataIndex: 'name',
    width: 150,
    }, {
    title: 'Age',
    dataIndex: 'age',
    width: 150,
    }, {
    title: 'Address',
    dataIndex: 'address',
    }];

    const data = [];
    for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
    }

    export default {
    name: "RegisterList",
    data() {
        return {
        data,
        columns,
        }
    }
}