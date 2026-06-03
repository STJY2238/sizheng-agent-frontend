<template>
  <div>
    <div class="breadcrumb"><span class="muted">学生端 / 课前学习 / 预习小测</span></div>
    <div class="page-header">
      <h1>预习小测</h1>
      <div class="header-actions">
        <span class="muted">剩余时间 4:32</span>
        <el-button type="primary">提交答卷</el-button>
      </div>
    </div>
    <p class="page-desc">完成 5 道小测，系统即时反馈正确答案、知识点、错因与复习建议</p>

    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="16">
        <el-card shadow="never" class="card" v-for="(q, qi) in questions" :key="qi" style="margin-bottom: 20px">
          <template #header>
            <div style="display: flex; justify-content: space-between">
              <strong>第 {{ qi + 1 }} 题 · {{ q.type }}</strong>
              <el-tag size="small">知识点：{{ q.tag }}</el-tag>
            </div>
          </template>
          <p style="font-size: 15px; font-weight: 700; margin-bottom: 16px">{{ q.title }}</p>
          <el-radio-group v-model="q.answer" style="display: flex; flex-direction: column; gap: 10px">
            <el-radio v-for="(opt, oi) in q.options" :key="oi" :value="oi" size="large">{{ String.fromCharCode(65 + oi) }}. {{ opt }}</el-radio>
          </el-radio-group>
        </el-card>
      </el-col>

      <el-col :span="8">
        <el-card shadow="never" class="card">
          <template #header><strong>答题卡</strong></template>
          <div style="display: flex; flex-wrap: wrap; gap: 8px">
            <div v-for="(q, qi) in questions" :key="qi"
              :style="{ width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', fontSize: '16px', fontWeight: '700', background: q.answer !== null ? '#e6e4de' : '#fcfcfa', border: '1px solid ' + (q.answer !== null ? '#606060' : '#c9c9c9'), cursor: 'pointer' }">
              {{ qi + 1 }}
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const questions = ref([
  { type: '单选题', tag: '核心价值观', title: '社会主义核心价值观在国家层面的价值目标是？', options: ['自由、平等、公正、法治', '富强、民主、文明、和谐', '爱国、敬业、诚信、友善', '创新、协调、绿色、开放'], answer: null },
  { type: '单选题', tag: '价值准则', title: '下列哪项属于公民个人层面的价值准则？', options: ['民主', '公正', '诚信', '和谐'], answer: null },
  { type: '判断题', tag: '概念辨析', title: '社会主义核心价值观只适用于国家层面，与个人行为无关。', options: ['正确', '错误'], answer: null },
  { type: '单选题', tag: '理论联系实际', title: '大学生参与社区志愿服务最能体现哪项价值准则？', options: ['富强', '文明', '友善', '法治'], answer: null },
  { type: '多选题', tag: '综合理解', title: '以下哪些属于社会层面的价值取向？（多选）', options: ['自由', '平等', '公正', '和谐'], answer: null }
])
</script>

<style scoped>
.breadcrumb { font-size: 12px; margin-bottom: 6px; }
.muted { color: var(--muted); }
.page-header { display: flex; justify-content: space-between; align-items: center; }
.page-header h1 { font-size: 26px; font-weight: 800; }
.header-actions { display: flex; align-items: center; gap: 16px; }
.page-desc { font-size: 13px; color: var(--muted); margin-top: 4px; }
.card { border-radius: 14px; border: 1px solid var(--line); background: var(--card); }
</style>
