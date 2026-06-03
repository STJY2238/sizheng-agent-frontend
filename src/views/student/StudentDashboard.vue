<template>
  <div>
    <!-- 面包屑 -->
    <div class="breadcrumb">
      <span class="muted">学生端 / 首页 / 学生工作台</span>
    </div>

    <!-- 标题栏 -->
    <div class="page-header">
      <h1>学生工作台</h1>
      <div class="header-actions">
        <el-button>查看本周课程</el-button>
        <el-button type="primary">导出学习周报</el-button>
      </div>
    </div>
    <p class="page-desc">把首页收成课程、任务、消息三类固定入口，先完成主任务，再进入具体页面</p>

    <!-- 任务入口区 -->
    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="14">
        <el-card shadow="never" class="section-card">
          <template #header><strong>今天先做什么</strong></template>

          <div class="hero-box">
            <div class="hero-label">学生入口页 / 课程、任务、消息</div>
            <div class="hero-title">先完成本节课任务，再决定要不要提问、看反馈或回顾进度</div>
            <p class="hero-desc">首页只保留今天这一门课最重要的动作，避免把导学、小测、问答、反馈同时摊开。</p>
            <div class="hero-actions">
              <el-button type="primary">进入今日任务</el-button>
              <el-button>查看最近反馈</el-button>
            </div>
          </div>

          <el-row :gutter="16" style="margin-top: 16px">
            <el-col :span="12" v-for="s in statusCards" :key="s.label">
              <div class="status-card">
                <div class="status-label">{{ s.label }}</div>
                <div class="status-value" :style="{ color: s.color }">{{ s.value }}</div>
                <div class="status-desc">{{ s.desc }}</div>
                <el-tag size="small">{{ s.tag }}</el-tag>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>

      <el-col :span="10">
        <el-card shadow="never" class="section-card">
          <template #header><strong>进入页面</strong></template>
          <div class="entry-item" v-for="e in entries" :key="e.title">
            <strong>{{ e.title }}</strong>
            <span class="muted">{{ e.desc }}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 学习路径 -->
    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="14">
        <el-card shadow="never" class="section-card">
          <template #header><strong>今天的学习路径</strong></template>
          <el-row :gutter="12">
            <el-col :span="6" v-for="lp in learningPath" :key="lp.step">
              <div class="step-card" :class="{ active: lp.active }">
                <div class="step-num" :class="{ active: lp.active }">{{ lp.step }}</div>
                <div class="step-title">{{ lp.title }}</div>
                <div class="step-desc">{{ lp.desc }}</div>
                <el-tag size="small" :type="lp.active ? '' : 'info'">{{ lp.active ? '当前' : '第' + lp.step + '步' }}</el-tag>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>

      <el-col :span="10">
        <el-card shadow="never" class="section-card">
          <template #header><strong>最近状态</strong></template>
          <div v-for="(t, i) in tasks" :key="i" style="margin-bottom: 14px">
            <div style="display: flex; justify-content: space-between; align-items: center">
              <strong style="font-size: 14px">{{ t.title }}</strong>
              <el-tag size="small" v-if="t.score">得分 {{ t.score }}</el-tag>
              <el-tag size="small" type="warning" v-else>{{ t.status }}</el-tag>
            </div>
            <div class="muted" style="font-size: 12px; margin-top: 2px">{{ t.desc }} · {{ t.time }}</div>
            <el-divider v-if="i < tasks.length - 1" style="margin: 12px 0" />
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 今日状态 -->
    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="12">
        <div class="stat-row">
          <div class="stat-card">
            <div class="muted">今天待办</div>
            <div class="stat-num">3 项</div>
            <div class="muted small">导学 / 小测 / 作业</div>
          </div>
          <div class="stat-card">
            <div class="muted">最近消息</div>
            <div class="stat-num">2 条</div>
            <div class="muted small">反馈 / 截止提醒</div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { studentTasks as tasks, learningPath } from '../../mock/data.js'

const statusCards = [
  { label: '当前步骤', value: '导学中', desc: '《社会主义核心价值观》预计 8 分钟', tag: '当前', color: '#2f2f2f' },
  { label: '完成之后', value: '看反馈', desc: '做完小测再看反馈，不在首页展开解析', tag: '下一步', color: '#8a8a8a' }
]

const entries = [
  { title: '今日任务', desc: '02-04 课前学习 / 导学 / 小测' },
  { title: '课堂与提问', desc: '05-07 互动、小测、AI 问答' }
]
</script>

<style scoped>
.breadcrumb { font-size: 12px; margin-bottom: 6px; }
.muted { color: var(--muted); }
.muted.small { font-size: 12px; }
.page-header { display: flex; justify-content: space-between; align-items: center; }
.page-header h1 { font-size: 26px; font-weight: 800; }
.header-actions { display: flex; gap: 10px; }
.page-desc { font-size: 13px; color: var(--muted); margin-top: 4px; }
.section-card { border-radius: 14px; border: 1px solid var(--line); background: var(--card); }
.hero-box {
  background: var(--active); border-radius: 14px; padding: 20px 24px;
  border: 1px solid #606060;
}
.hero-label { font-size: 12px; color: var(--muted); font-weight: 700; }
.hero-title { font-size: 19px; font-weight: 800; margin: 8px 0; }
.hero-desc { font-size: 13px; color: var(--muted); margin-bottom: 14px; }
.hero-actions { display: flex; gap: 10px; }
.status-card {
  background: var(--soft); border-radius: 12px; padding: 14px 16px;
  border: 1px solid var(--line); border-style: dashed;
}
.status-label { font-size: 14px; font-weight: 600; color: var(--muted); }
.status-value { font-size: 24px; font-weight: 800; margin: 4px 0; }
.status-desc { font-size: 12px; color: var(--muted); margin-bottom: 6px; }
.entry-item {
  display: flex; justify-content: space-between; padding: 14px 0;
  border-bottom: 1px dashed var(--line); font-size: 14px;
}
.entry-item:last-child { border-bottom: none; }
.step-card {
  background: var(--card); border-radius: 12px; padding: 14px;
  border: 1px solid var(--line); border-style: dashed; height: 100%;
}
.step-card.active { background: var(--active); border-color: #606060; border-style: solid; }
.step-num {
  width: 26px; height: 26px; border-radius: 50%; background: var(--soft);
  display: flex; align-items: center; justify-content: center;
  font-size: 12px; font-weight: 800; margin-bottom: 6px;
}
.step-num.active { background: #fcfcfa; }
.step-title { font-size: 14px; font-weight: 700; margin-bottom: 4px; }
.step-desc { font-size: 11px; color: var(--muted); margin-bottom: 8px; }
.stat-row { display: flex; gap: 16px; }
.stat-card {
  flex: 1; background: var(--soft); border-radius: 14px;
  padding: 18px 20px; border: 1px dashed var(--line);
}
.stat-num { font-size: 28px; font-weight: 700; margin: 4px 0; }
</style>
