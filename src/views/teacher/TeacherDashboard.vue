<template>
  <div>
    <div class="breadcrumb"><span class="muted">教师端 / 首页 / 教学工作台</span></div>
    <div class="page-header">
      <h1>教师工作台</h1>
      <div class="header-actions">
        <el-button>查看平台概览</el-button>
        <el-button type="primary">导出运行日报</el-button>
      </div>
    </div>
    <p class="page-desc">把管理首页收成待处理队列、治理入口和运行状态三部分，先分流再深处理</p>

    <!-- 待处理队列 -->
    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="14">
        <el-card shadow="never" class="section-card">
          <template #header><strong>今天先处理什么</strong></template>
          <div class="hero-box">
            <div class="hero-label">教师入口页 / 三条主任务线</div>
            <div class="hero-title">先备课、再上课、最后批改复核，所有 AI 结果都由教师确认后发布</div>
            <p class="hero-desc">首页只保留今天课程、待审核内容、待复核作业和班级风险提醒。</p>
            <div class="hero-actions">
              <el-button type="primary">进入今日备课</el-button>
              <el-button>查看课堂</el-button>
            </div>
          </div>
          <el-row :gutter="16" style="margin-top: 16px">
            <el-col :span="12" v-for="s in statusCards" :key="s.label">
              <div class="status-card">
                <div class="status-label">{{ s.label }}</div>
                <div class="status-value">{{ s.value }}</div>
                <div class="status-desc">{{ s.desc }}</div>
                <el-tag size="small" :type="s.tagType">{{ s.tag }}</el-tag>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>

      <el-col :span="10">
        <el-card shadow="never" class="section-card">
          <template #header><strong>进入页面</strong></template>
          <div class="entry-item" v-for="e in entries" :key="e.title">
            <div>
              <strong>{{ e.title }}</strong>
              <div class="muted small">{{ e.desc }}</div>
            </div>
            <el-tag size="small" type="info">{{ e.tag }}</el-tag>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 教学路径 -->
    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="14">
        <el-card shadow="never" class="section-card">
          <template #header><strong>本周教学路径</strong></template>
          <el-row :gutter="12">
            <el-col :span="6" v-for="(s, i) in teachingSteps" :key="s.step">
              <div class="step-card" :class="{ active: i === 0 }">
                <div class="step-num" :class="{ active: i === 0 }">{{ s.step }}</div>
                <div class="step-title">{{ s.title }}</div>
                <div class="step-desc">{{ s.desc }}</div>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>

      <el-col :span="10">
        <el-card shadow="never" class="section-card">
          <template #header><strong>今日待处理队列</strong></template>
          <div v-for="(q, i) in teacherQueue" :key="i" style="margin-bottom: 14px">
            <div style="display: flex; justify-content: space-between; align-items: center">
              <strong style="font-size: 14px">{{ q.title }}</strong>
              <el-tag size="small" :style="{ background: q.color, color: '#fff', border: 'none' }">{{ q.level }}</el-tag>
            </div>
            <div class="muted" style="font-size: 12px; margin-top: 2px">{{ q.count }} 条待处理</div>
            <el-divider v-if="i < teacherQueue.length - 1" style="margin: 10px 0" />
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 当前状态 -->
    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="8" v-for="col in stateCols" :key="col.title">
        <el-card shadow="never" class="section-card">
          <template #header><strong>{{ col.title }}</strong></template>
          <div v-for="(item, i) in col.items" :key="i" class="muted" style="font-size: 13px; padding: 6px 0">· {{ item }}</div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { teacherQueue, teachingSteps } from '../../mock/data.js'

const statusCards = [
  { label: '今日课程', value: '14:00 上课', desc: '思想道德与法治 · 2023级1班', tag: '即将开始', tagType: 'warning' },
  { label: '待处理', value: '4+12+18', desc: 'AI教案4条、作业复核12份、学生问题18条', tag: '优先', tagType: 'danger' }
]

const entries = [
  { title: '备课中心', desc: '教学设计、课前学情', tag: '课前' },
  { title: '课堂互动', desc: '快捷指令、发问、随堂微测', tag: '课中' },
  { title: '批改报告', desc: '三栏复核、班级学情报告', tag: '课后' }
]

const stateCols = [
  { title: '待审核', items: ['章节教案 4 条', '案例推荐 6 条', '讨论题 12 道'] },
  { title: '课堂提醒', items: ['预习完成率 76%', '高频困惑 5 类', '建议课堂重点讲价值目标'] },
  { title: '批改复核', items: ['OCR低置信度 9 处', 'AI建议待确认 12 份', '异常分数 2 份'] }
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
.hero-box { background: var(--active); border-radius: 14px; padding: 20px 24px; border: 1px solid #606060; }
.hero-label { font-size: 12px; color: var(--muted); font-weight: 700; }
.hero-title { font-size: 19px; font-weight: 800; margin: 8px 0; }
.hero-desc { font-size: 13px; color: var(--muted); margin-bottom: 14px; }
.hero-actions { display: flex; gap: 10px; }
.status-card { background: var(--soft); border-radius: 12px; padding: 14px 16px; border: 1px dashed var(--line); }
.status-label { font-size: 14px; font-weight: 600; color: var(--muted); }
.status-value { font-size: 22px; font-weight: 800; margin: 4px 0; }
.status-desc { font-size: 12px; color: var(--muted); margin-bottom: 6px; }
.entry-item { display: flex; justify-content: space-between; align-items: center; padding: 14px 0; border-bottom: 1px dashed var(--line); }
.entry-item:last-child { border-bottom: none; }
.step-card { background: var(--card); border-radius: 12px; padding: 14px; border: 1px dashed var(--line); height: 100%; }
.step-card.active { background: var(--active); border-color: #606060; border-style: solid; }
.step-num { width: 26px; height: 26px; border-radius: 50%; background: var(--soft); display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 800; margin-bottom: 6px; }
.step-num.active { background: #fcfcfa; }
.step-title { font-size: 14px; font-weight: 700; margin-bottom: 4px; }
.step-desc { font-size: 11px; color: var(--muted); }
</style>
