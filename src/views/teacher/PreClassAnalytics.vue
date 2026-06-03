<template>
  <div>
    <div class="breadcrumb"><span class="muted">教师端 / 备课中心 / 课前学情分析</span></div>
    <div class="page-header">
      <h1>课前学情分析</h1>
      <el-select v-model="selectedClass" style="width: 200px">
        <el-option v-for="c in classes" :key="c" :label="c" :value="c" />
      </el-select>
    </div>
    <p class="page-desc">查看学生预习完成情况、测试成绩分布和认知薄弱点，辅助课堂教学设计</p>

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
          <template #header><strong>预习完成情况</strong></template>
          <el-table :data="completionData" style="width: 100%">
            <el-table-column prop="name" label="学生" width="100" />
            <el-table-column prop="progress" label="预习进度">
              <template #default="{ row }">
                <el-progress :percentage="row.progress" :color="row.progress >= 80 ? '#67C23A' : '#E6A23C'" />
              </template>
            </el-table-column>
            <el-table-column prop="quizScore" label="预习小测" width="100" />
            <el-table-column prop="status" label="状态" width="100">
              <template #default="{ row }">
                <el-tag :type="row.status === '已完成' ? 'success' : 'warning'" size="small">{{ row.status }}</el-tag>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="never" class="card">
          <template #header><strong>认知薄弱点Top5</strong></template>
          <div class="weakness-list">
            <div class="weakness-row" v-for="(w, i) in weaknesses" :key="i">
              <span class="rank">{{ i + 1 }}</span>
              <div style="flex: 1">
                <strong>{{ w.topic }}</strong>
                <div class="muted small">困惑学生 {{ w.count }} 人 · 建议课堂重点讲解</div>
              </div>
              <el-tag size="small" type="danger">{{ w.count }}人</el-tag>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="24">
        <el-card shadow="never" class="card">
          <template #header><strong>预习小测成绩分布</strong></template>
          <div style="display: flex; gap: 12px; align-items: flex-end; height: 200px; padding: 0 20px">
            <div v-for="b in scoreDist" :key="b.range" style="flex: 1; text-align: center">
              <div class="bar-fill" :style="{ height: b.height + 'px', background: b.color }"></div>
              <div class="muted small" style="margin-top: 6px">{{ b.range }}</div>
              <div style="font-weight: 700; font-size: 13px">{{ b.count }}人</div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedClass = ref('2023级1班')
const classes = ['2023级1班', '2023级2班', '2023级3班']

const summary = [
  { label: '预习完成率', value: '76%', color: '#67C23A' },
  { label: '预习小测均分', value: '78.5', color: '#409EFF' },
  { label: '高频困惑', value: '5类', color: '#E6A23C' },
  { label: '建议重点讲', value: '3节', color: '#2f2f2f' }
]

const completionData = [
  { name: '李明哲', progress: 92, quizScore: '88', status: '已完成' },
  { name: '王思远', progress: 85, quizScore: '82', status: '已完成' },
  { name: '张雨薇', progress: 60, quizScore: '72', status: '进行中' },
  { name: '赵一鸣', progress: 45, quizScore: '65', status: '进行中' },
  { name: '陈晓婷', progress: 100, quizScore: '90', status: '已完成' }
]

const weaknesses = [
  { topic: '社会主义核心价值观的国家层面内涵', count: 18 },
  { topic: '法治与德治的辩证关系', count: 15 },
  { topic: '个人理想与社会理想的统一', count: 12 },
  { topic: '文化自信的理论基础', count: 10 },
  { topic: '公民道德建设的实践路径', count: 8 }
]

const scoreDist = [
  { range: '90-100', count: 8, height: 140, color: '#67C23A' },
  { range: '80-89', count: 15, height: 160, color: '#67C23A' },
  { range: '70-79', count: 10, height: 110, color: '#409EFF' },
  { range: '60-69', count: 5, height: 70, color: '#E6A23C' },
  { range: '<60', count: 2, height: 40, color: '#F56C6C' }
]
</script>

<style scoped>
.breadcrumb { font-size: 12px; margin-bottom: 6px; }
.muted { color: var(--muted); font-size: 13px; }
.muted.small { font-size: 12px; }
.page-header { display: flex; justify-content: space-between; align-items: center; }
.page-header h1 { font-size: 26px; font-weight: 800; }
.page-desc { font-size: 13px; color: var(--muted); margin-top: 4px; }
.card { border-radius: 14px; border: 1px solid var(--line); background: var(--card); }
.stat-card { background: var(--soft); border-radius: 14px; padding: 20px; text-align: center; border: 1px dashed var(--line); }
.stat-num { font-size: 36px; font-weight: 800; margin-top: 4px; }
.weakness-list { display: flex; flex-direction: column; gap: 12px; }
.weakness-row { display: flex; align-items: center; gap: 12px; padding: 12px; background: var(--soft); border-radius: 10px; border: 1px dashed var(--line); }
.rank { width: 26px; height: 26px; border-radius: 50%; background: var(--active); display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 13px; flex-shrink: 0; }
.bar-fill { width: 40px; border-radius: 8px 8px 0 0; margin: 0 auto; }
</style>
