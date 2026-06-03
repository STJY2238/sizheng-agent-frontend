<template>
  <div>
    <div class="breadcrumb"><span class="muted">管理端 / 内容治理 / 作业管理</span></div>
    <div class="page-header">
      <h1>作业管理</h1>
      <div>
        <el-select v-model="courseFilter" style="width: 180px; margin-right: 10px" clearable placeholder="按课程筛选">
          <el-option v-for="c in courses" :key="c" :label="c" :value="c" />
        </el-select>
        <el-button type="primary">批量导出</el-button>
      </div>
    </div>

    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="6" v-for="s in summary" :key="s.label">
        <div class="stat-card">
          <div class="muted small">{{ s.label }}</div>
          <div class="stat-num" :style="{ color: s.color }">{{ s.value }}</div>
        </div>
      </el-col>
    </el-row>

    <el-card shadow="never" class="card" style="margin-top: 20px">
      <template #header><strong>作业列表</strong></template>
      <el-table :data="assignments" style="width: 100%">
        <el-table-column prop="title" label="作业标题" min-width="180" />
        <el-table-column prop="course" label="所属课程" width="160" />
        <el-table-column prop="class" label="班级" width="100" />
        <el-table-column prop="submitCount" label="提交/总数" width="100" />
        <el-table-column prop="avgScore" label="均分" width="70">
          <template #default="{ row }">
            <span :style="{ color: row.avgScore >= 80 ? '#67C23A' : '#E6A23C', fontWeight: 700 }">{{ row.avgScore }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="deadline" label="截止时间" width="140" />
        <el-table-column prop="status" label="状态" width="100">
          <template #default="{ row }">
            <el-tag :type="row.status === '批改中' ? 'warning' : row.status === '已完成' ? 'success' : ''" size="small">{{ row.status }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="160">
          <template #default>
            <el-button size="small">查看详情</el-button>
            <el-button size="small" type="primary">催交</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const courseFilter = ref('')
const courses = ['思想道德与法治', '中国近现代史纲要', '马克思主义基本原理']

const summary = [
  { label: '总作业数', value: '24', color: '#67C23A' },
  { label: '待批改', value: '42', color: '#E6A23C' },
  { label: '已完成', value: '18', color: '#409EFF' },
  { label: '逾期未交', value: '15', color: '#F56C6C' }
]

const assignments = [
  { title: '社会主义核心价值观学习心得', course: '思想道德与法治', class: '2023级1班', submitCount: '38/42', avgScore: 82, deadline: '2026-06-01', status: '批改中' },
  { title: '课堂讨论总结', course: '思想道德与法治', class: '2023级2班', submitCount: '36/38', avgScore: 85, deadline: '2026-05-28', status: '已完成' },
  { title: '近代史人物评述', course: '中国近现代史纲要', class: '2023级1班', submitCount: '40/42', avgScore: 78, deadline: '2026-06-05', status: '进行中' },
  { title: '志愿服务与青年担当', course: '思想道德与法治', class: '2023级3班', submitCount: '32/40', avgScore: 80, deadline: '2026-05-30', status: '批改中' }
]
</script>

<style scoped>
.breadcrumb { font-size: 12px; margin-bottom: 6px; }
.muted { color: var(--muted); font-size: 13px; }
.muted.small { font-size: 12px; }
.page-header { display: flex; justify-content: space-between; align-items: center; }
.page-header h1 { font-size: 26px; font-weight: 800; }
.card { border-radius: 14px; border: 1px solid var(--line); background: var(--card); }
.stat-card { background: var(--soft); border-radius: 14px; padding: 20px; text-align: center; border: 1px dashed var(--line); }
.stat-num { font-size: 36px; font-weight: 800; margin-top: 4px; }
</style>
