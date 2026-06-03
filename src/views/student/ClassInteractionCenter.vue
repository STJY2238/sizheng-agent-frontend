<template>
  <div>
    <div class="breadcrumb"><span class="muted">学生端 / 课中互动 / 互动中心</span></div>
    <div class="page-header"><h1>课中互动中心</h1></div>
    <p class="page-desc">参与课堂发问、抢答与随堂互动，实时查看互动积分</p>

    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="14">
        <el-card shadow="never" class="card" style="margin-bottom: 20px">
          <template #header><strong>当前问题</strong></template>
          <div class="question-box">
            <div class="question-label">教师发问</div>
            <div class="question-text">如何理解社会主义核心价值观既是价值目标，也是行为准则？</div>
            <div style="display: flex; gap: 10px; margin-top: 16px">
              <el-input placeholder="输入关键词，AI帮你扩展为完整回答" size="large" style="flex: 1" />
              <el-button type="primary" size="large">提交回答</el-button>
            </div>
          </div>
        </el-card>

        <el-card shadow="never" class="card">
          <template #header><strong>AI辅助回答</strong></template>
          <div class="ai-box">
            <div class="muted">AI 根据你的关键词扩展建议</div>
            <p style="font-size: 14px; margin-top: 8px; line-height: 1.8">可以从"价值目标指明方向、行为准则规范行动"两个角度展开，结合教材第2章的层次结构理论和社区志愿服务的案例进行说明。</p>
            <el-button size="small" style="margin-top: 10px">使用此回答</el-button>
          </div>
        </el-card>
      </el-col>

      <el-col :span="10">
        <el-card shadow="never" class="card">
          <template #header><strong>互动状态</strong></template>
          <div style="display: flex; gap: 12px; margin-bottom: 20px">
            <div class="stat-box"><div class="stat-num">41</div><div class="muted">已参与</div></div>
            <div class="stat-box"><div class="stat-num">23</div><div class="muted">已提交</div></div>
            <div class="stat-box"><div class="stat-num">12</div><div class="muted">待点评</div></div>
          </div>
          <el-divider />
          <strong>实时互动积分</strong>
          <div style="margin-top: 12px">
            <div v-for="(s, i) in scores" :key="i" style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-bottom: 1px dashed var(--line)">
              <span>{{ i + 1 }}. {{ s.name }}</span>
              <el-tag>{{ s.score }} 分</el-tag>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
const scores = [
  { name: '张同学', score: 18 }, { name: '李明哲', score: 15 }, { name: '王晓丽', score: 14 },
  { name: '陈雨涵', score: 12 }, { name: '赵志远', score: 10 }
]
</script>

<style scoped>
.breadcrumb { font-size: 12px; margin-bottom: 6px; }
.muted { color: var(--muted); font-size: 13px; }
.page-header { display: flex; justify-content: space-between; align-items: center; }
.page-header h1 { font-size: 26px; font-weight: 800; }
.page-desc { font-size: 13px; color: var(--muted); margin-top: 4px; }
.card { border-radius: 14px; border: 1px solid var(--line); background: var(--card); }
.question-box { padding: 8px 0; }
.question-label { font-size: 12px; color: var(--muted); font-weight: 700; }
.question-text { font-size: 20px; font-weight: 800; margin: 8px 0; }
.ai-box { background: var(--soft); border-radius: 12px; padding: 16px; border: 1px dashed var(--line); }
.stat-box { flex: 1; text-align: center; padding: 14px; background: var(--soft); border-radius: 12px; border: 1px dashed var(--line); }
.stat-num { font-size: 28px; font-weight: 800; }
</style>
