<template>
  <div>
    <div class="breadcrumb"><span class="muted">学生端 / 学习报告 / 学习记录</span></div>
    <div class="page-header">
      <h1>学习记录 / 学习报告</h1>
      <el-button type="primary">导出报告</el-button>
    </div>

    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="6" v-for="s in summary" :key="s.label">
        <div class="stat-card">
          <div class="muted small">{{ s.label }}</div>
          <div class="stat-num" :style="{ color: s.color }">{{ s.value }}</div>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="12">
        <el-card shadow="never" class="card">
          <template #header><strong>成绩趋势</strong></template>
          <div class="chart-placeholder">
            <div class="bar-row" v-for="(b, i) in bars" :key="i">
              <span class="bar-label">{{ b.label }}</span>
              <div class="bar-track"><div class="bar-fill" :style="{ width: b.value + '%', background: b.color }"></div></div>
              <span style="font-weight: 700; font-size: 13px; margin-left: 8px; width: 50px">{{ b.value }}分</span>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="never" class="card">
          <template #header><strong>知识点掌握雷达</strong></template>
          <div style="padding: 20px; text-align: center">
            <div style="display: flex; justify-content: space-around; flex-wrap: wrap; gap: 16px">
              <div v-for="r in radarData" :key="r.name" style="text-align: center">
                <el-progress type="dashboard" :percentage="r.value" :color="r.color" :width="90">
                  <template #default><span style="font-size: 14px; font-weight: 700">{{ r.value }}%</span></template>
                </el-progress>
                <div class="muted" style="margin-top: 4px; font-size: 12px">{{ r.name }}</div>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
const summary = [
  { label: '本学期均分', value: '85.4', color: '#67C23A' },
  { label: '完成作业', value: '8/10', color: '#409EFF' },
  { label: '预习次数', value: '12', color: '#E6A23C' },
  { label: '互动积分', value: '156', color: '#2f2f2f' }
]

const bars = [
  { label: '导学阅读', value: 92, color: '#67C23A' },
  { label: '预习小测', value: 78, color: '#409EFF' },
  { label: '课堂互动', value: 85, color: '#E6A23C' },
  { label: '作业心得', value: 88, color: '#67C23A' }
]

const radarData = [
  { name: '概念理解', value: 88, color: '#67C23A' },
  { name: '案例分析', value: 72, color: '#409EFF' },
  { name: '价值判断', value: 80, color: '#E6A23C' },
  { name: '理论溯源', value: 85, color: '#2f2f2f' }
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
.chart-placeholder { display: flex; flex-direction: column; gap: 16px; padding: 8px 0; }
.bar-row { display: flex; align-items: center; }
.bar-label { width: 80px; font-size: 13px; color: var(--muted); }
.bar-track { flex: 1; height: 22px; background: var(--soft); border-radius: 11px; overflow: hidden; }
.bar-fill { height: 100%; border-radius: 11px; transition: width 0.5s; }
</style>
