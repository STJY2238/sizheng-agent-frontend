<template>
  <div>
    <div class="breadcrumb"><span class="muted">学生端 / 课中互动 / 随堂小测详情</span></div>
    <div class="page-header"><h1>随堂小测详情</h1></div>
    <el-card shadow="never" class="card" style="margin-top: 20px">
      <template #header><strong>已完成</strong></template>
      <el-result icon="success" title="提交成功" sub-title="3/5 题正确 · 得分 60 分">
        <template #extra>
          <el-button type="primary">查看错题解析</el-button>
          <el-button>再做一次</el-button>
        </template>
      </el-result>

      <el-divider />
      <strong>错题详情</strong>
      <div v-for="(e, i) in errors" :key="i" style="margin: 16px 0; padding: 14px; background: var(--soft); border-radius: 12px; border: 1px dashed var(--line)">
        <div style="display: flex; justify-content: space-between">
          <strong>{{ e.question }}</strong>
          <el-tag type="danger">{{ e.yourAnswer }}</el-tag>
        </div>
        <p class="muted" style="margin-top: 6px">正确答案：{{ e.correct }}</p>
        <p class="muted">错因分析：{{ e.reason }}</p>
        <p class="muted">知识点出处：{{ e.source }}</p>
      </div>
    </el-card>
  </div>
</template>

<script setup>
const errors = [
  { question: '社会主义核心价值观在国家层面的价值目标？', yourAnswer: '自由、平等、公正、法治', correct: '富强、民主、文明、和谐', reason: '混淆了国家层面与社会层面的价值取向', source: '教材第2章第1节' },
  { question: '大学生参与志愿服务最能体现哪项价值准则？', yourAnswer: '法治', correct: '友善', reason: '志愿服务主要体现公民友善互助', source: '教材第2章第3节' }
]
</script>

<style scoped>
.breadcrumb { font-size: 12px; margin-bottom: 6px; }
.muted { color: var(--muted); font-size: 13px; }
.page-header h1 { font-size: 26px; font-weight: 800; }
.card { border-radius: 14px; border: 1px solid var(--line); background: var(--card); }
</style>
