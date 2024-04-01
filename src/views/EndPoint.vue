<template>
  <el-aside class="side" width="200px">
    <!-- <Card /> -->
    <List />
  </el-aside>
  <el-main>
    <Message />
    <Text />
  </el-main>
</template>

<script setup>
// import { actions } from './store';

import Card from '@/components/card';
import List from '@/components/list';
import Text from '@/components/text';
import Message from '@/components/message';

</script>


