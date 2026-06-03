<template>
  <div>
    <div class="breadcrumb"><span class="muted">教师端 / 课后 / 作业批改复核</span></div>
    <div class="page-header">
      <h1>教师复核批改工作台</h1>
      <div class="header-actions">
        <el-button type="danger">退回重批</el-button>
        <el-button type="primary">确认发布</el-button>
      </div>
    </div>
    <p class="page-desc">课后最核心页面：原图、OCR文本、AI批改建议三栏复核</p>

    <!-- 三栏复核 -->
    <el-row :gutter="16" style="margin-top: 20px">
      <el-col :span="8" v-for="col in reviewCols" :key="col.title">
        <el-card shadow="never" class="section-card" style="min-height: 480px">
          <template #header><strong>{{ col.title }}</strong></template>
          <div v-for="(item, i) in col.items" :key="i" class="muted" style="font-size: 13px; padding: 8px 0; border-bottom: 1px dashed var(--line)">· {{ item }}</div>
          <div style="margin-top: 20px">
            <el-button size="small" v-for="(btn, i) in col.actions" :key="i" style="margin-right: 8px">{{ btn }}</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 复核队列 + 流程 -->
    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="12">
        <el-card shadow="never" class="section-card">
          <template #header><strong>当前复核队列</strong></template>
          <div v-for="(q, i) in reviewQueue" :key="i" style="margin-bottom: 14px">
            <div style="display: flex; justify-content: space-between; align-items: center">
              <strong style="font-size: 14px">{{ q.name }}</strong>
              <el-tag size="small" :type="q.type">{{ q.tag }}</el-tag>
            </div>
            <div class="muted" style="font-size: 12px; margin-top: 2px">{{ q.desc }}</div>
            <el-divider v-if="i < reviewQueue.length - 1" style="margin: 10px 0" />
          </div>
        </el-card>
      </el-col>

      <el-col :span="12">
        <el-card shadow="never" class="section-card">
          <template #header><strong>复核流程</strong></template>
          <el-steps :active="1" align-center>
            <el-step title="定位" description="查看答题区域" />
            <el-step title="校正" description="修订OCR文本" />
            <el-step title="确认" description="调整分项得分" />
            <el-step title="发布" description="生成学生反馈" />
          </el-steps>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
const reviewCols = [
  {
    title: '原始答卷图像',
    items: ['第 2 页 / 第 3 题区域已定位', '低置信度片段高亮标注', '可放大、旋转、重新框选'],
    actions: ['放大', '旋转', '重新框选']
  },
  {
    title: 'OCR与答案文本',
    items: ['学生答案已跨页合并', '红色标记疑似识别错误', '教师可直接修订文本内容'],
    actions: ['编辑文本', '查看原图', '标记']
  },
  {
    title: 'AI批改建议',
    items: ['建议得分：14/20', '问题：理论概念准确但案例论证不足', '可接受、修改或退回重批'],
    actions: ['接受', '修改分数', '退回']
  }
]

const reviewQueue = [
  { name: '李明哲 第3题', desc: 'OCR低置信度 2 处，建议人工确认', tag: '优先', type: 'danger' },
  { name: '陈雨涵 第5题', desc: 'AI分数与规则差异较大，需复核', tag: '异常', type: 'warning' }
]
</script>

<style scoped>
.breadcrumb { font-size: 12px; margin-bottom: 6px; }
.muted { color: var(--muted); }
.page-header { display: flex; justify-content: space-between; align-items: center; }
.page-header h1 { font-size: 26px; font-weight: 800; }
.header-actions { display: flex; gap: 10px; }
.page-desc { font-size: 13px; color: var(--muted); margin-top: 4px; }
.section-card { border-radius: 14px; border: 1px solid var(--line); background: var(--card); }
</style>
