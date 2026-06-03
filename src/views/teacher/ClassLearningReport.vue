<template>
  <div>
    <div class="breadcrumb"><span class="muted">教师端 / 课后反馈 / 班级学情报告</span></div>
    <div class="page-header">
      <h1>班级学情报告</h1>
      <div>
        <el-select v-model="selectedClass" style="width: 180px; margin-right: 10px">
          <el-option v-for="c in classes" :key="c" :label="c" :value="c" />
        </el-select>
        <el-button type="primary">导出报告</el-button>
      </div>
    </div>

    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="6" v-for="s in overviewStats" :key="s.label">
        <div class="stat-card">
          <div class="muted small">{{ s.label }}</div>
          <div class="stat-num" :style="{ color: s.color }">{{ s.value }}</div>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="12">
        <el-card shadow="never" class="card">
          <template #header><strong>学生成绩分布</strong></template>
          <el-table :data="studentScores" style="width: 100%">
            <el-table-column prop="rank" label="排名" width="60" />
            <el-table-column prop="name" label="姓名" width="100" />
            <el-table-column prop="homework" label="作业" width="70" />
            <el-table-column prop="quiz" label="测验" width="70" />
            <el-table-column prop="interaction" label="互动" width="70" />
            <el-table-column prop="total" label="总分" width="70">
              <template #default="{ row }">
                <strong :style="{ color: row.total >= 85 ? '#67C23A' : row.total >= 70 ? '#409EFF' : '#E6A23C' }">{{ row.total }}</strong>
              </template>
            </el-table-column>
            <el-table-column prop="trend" label="趋势" width="80">
              <template #default="{ row }">
                <span :style="{ color: row.trend > 0 ? '#67C23A' : '#F56C6C' }">{{ row.trend > 0 ? '↑' : '↓' }} {{ Math.abs(row.trend) }}</span>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="never" class="card">
          <template #header><strong>知识点掌握热力</strong></template>
          <div style="display: flex; flex-direction: column; gap: 12px">
            <div v-for="h in heatmap" :key="h.name" style="display: flex; align-items: center; gap: 12px">
              <span style="width: 80px; font-size: 13px; text-align: right">{{ h.name }}</span>
              <div style="flex: 1; height: 28px; background: var(--soft); border-radius: 6px; overflow: hidden">
                <div :style="{ width: h.rate + '%', height: '100%', background: h.color, borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '12px', fontWeight: '700' }">{{ h.rate }}%</div>
              </div>
            </div>
          </div>
          <el-divider />
          <strong>教学建议</strong>
          <p class="muted" style="margin-top: 8px; line-height: 1.8">
            班级在"价值判断"维度得分偏低（均分72），建议下节课增加案例讨论环节；
            "理论溯源"掌握较好（均分88），可适当提高难度。
          </p>
        </el-card>
      </el-col>
    </el-row>

    <el-card shadow="never" class="card" style="margin-top: 20px">
      <template #header><strong>AI 教学总结</strong></template>
      <div style="display: flex; gap: 16px">
        <div class="ai-box" v-for="(ai, i) in aiSummary" :key="i">
          <div class="ai-label" :style="{ background: ai.color }">{{ ai.label }}</div>
          <p class="muted" style="margin-top: 8px; line-height: 1.6; font-size: 13px">{{ ai.content }}</p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedClass = ref('2023级1班')
const classes = ['2023级1班', '2023级2班', '2023级3班']

const overviewStats = [
  { label: '班级均分', value: '82.6', color: '#67C23A' },
  { label: '优秀率(≥85)', value: '38%', color: '#409EFF' },
  { label: '及格率', value: '94%', color: '#E6A23C' },
  { label: '互动参与率', value: '82%', color: '#2f2f2f' }
]

const studentScores = [
  { rank: 1, name: '陈晓婷', homework: 92, quiz: 90, interaction: 88, total: 90, trend: 5 },
  { rank: 2, name: '李明哲', homework: 88, quiz: 85, interaction: 90, total: 88, trend: 3 },
  { rank: 3, name: '王思远', homework: 85, quiz: 82, interaction: 85, total: 84, trend: -2 },
  { rank: 4, name: '张雨薇', homework: 78, quiz: 72, interaction: 80, total: 77, trend: 4 },
  { rank: 5, name: '赵一鸣', homework: 72, quiz: 65, interaction: 70, total: 69, trend: -5 }
]

const heatmap = [
  { name: '概念理解', rate: 88, color: '#67C23A' },
  { name: '案例分析', rate: 72, color: '#409EFF' },
  { name: '价值判断', rate: 68, color: '#E6A23C' },
  { name: '理论溯源', rate: 85, color: '#67C23A' },
  { name: '实践应用', rate: 76, color: '#409EFF' }
]

const aiSummary = [
  { label: '整体表现', color: '#67C23A', content: '班级整体学习态度积极，预习完成率76%在中上水平。课堂互动参与度较高，但部分学生在理论深度上需要加强。' },
  { label: '改进方向', color: '#E6A23C', content: '价值判断和案例分析得分相对偏低，建议增加现实案例讨论，引导学生从多角度分析社会现象，提升批判性思维能力。' },
  { label: '教学建议', color: '#409EFF', content: '下次课可采用分组辩论形式，针对"法治与德治"主题展开讨论，同时为后进生提供课后一对辅导。' }
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
.ai-box { flex: 1; background: var(--soft); border-radius: 14px; padding: 18px; border: 1px dashed var(--line); }
.ai-label { display: inline-block; padding: 4px 12px; border-radius: 20px; color: #fff; font-size: 12px; font-weight: 700; }
</style>
