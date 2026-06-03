<template>
  <div>
    <div class="breadcrumb"><span class="muted">管理端 / 运行治理 / 数据看板</span></div>
    <div class="page-header">
      <h1>数据看板</h1>
      <div>
        <el-date-picker v-model="dateRange" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" size="default" style="margin-right: 10px" />
        <el-button type="primary">导出报表</el-button>
      </div>
    </div>

    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="6" v-for="m in metrics" :key="m.label">
        <div class="stat-card">
          <div class="muted small">{{ m.label }}</div>
          <div class="stat-num" :style="{ color: m.color }">{{ m.value }}</div>
          <div class="muted small" style="margin-top: 4px">{{ m.change }}</div>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="16">
        <el-card shadow="never" class="card">
          <template #header><strong>平台使用趋势</strong></template>
          <div style="display: flex; gap: 12px; align-items: flex-end; height: 240px; padding: 0 20px">
            <div v-for="d in trendData" :key="d.month" style="flex: 1; text-align: center">
              <div class="trend-bar" :style="{ height: d.value * 2 + 'px', background: d.color }"></div>
              <div class="muted small" style="margin-top: 6px">{{ d.month }}</div>
              <div style="font-weight: 700; font-size: 12px">{{ d.value }}</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="never" class="card">
          <template #header><strong>课程活跃度排行</strong></template>
          <div v-for="(r, i) in rankings" :key="r.name" style="display: flex; align-items: center; gap: 12px; padding: 10px 0; border-bottom: 1px dashed var(--line)">
            <span class="rank-num" :class="'rank-' + (i + 1)">{{ i + 1 }}</span>
            <div style="flex: 1">
              <strong>{{ r.name }}</strong>
              <div class="muted small">{{ r.teacher }}</div>
            </div>
            <span style="font-weight: 700; font-size: 14px">{{ r.active }}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const dateRange = ref([])

const metrics = [
  { label: '平台总用户', value: '1,280', color: '#67C23A', change: '↑ 12% 较上月' },
  { label: '月活用户', value: '856', color: '#409EFF', change: '↑ 8% 较上月' },
  { label: 'AI交互次数', value: '4,520', color: '#E6A23C', change: '↑ 25% 较上月' },
  { label: '待处理告警', value: '3', color: '#F56C6C', change: '↓ 2 较上月' }
]

const trendData = [
  { month: '1月', value: 320, color: '#e0ded8' },
  { month: '2月', value: 280, color: '#d5d3cd' },
  { month: '3月', value: 450, color: '#c9c7c0' },
  { month: '4月', value: 520, color: '#bdbab3' },
  { month: '5月', value: 610, color: '#b0ada5' },
  { month: '6月', value: 720, color: '#2f2f2f' }
]

const rankings = [
  { name: '思想道德与法治', teacher: '陈教授', active: '92%' },
  { name: '中国近现代史纲要', teacher: '李老师', active: '85%' },
  { name: '马克思主义基本原理', teacher: '王教授', active: '78%' },
  { name: '形势与政策', teacher: '张老师', active: '72%' }
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
.trend-bar { width: 40px; border-radius: 8px 8px 0 0; margin: 0 auto; }
.rank-num { width: 26px; height: 26px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 12px; background: var(--soft); flex-shrink: 0; }
.rank-1 { background: #2f2f2f; color: #fff; }
.rank-2 { background: #606060; color: #fff; }
.rank-3 { background: var(--active); }
</style>
