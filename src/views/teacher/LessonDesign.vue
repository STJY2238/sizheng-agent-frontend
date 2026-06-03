<template>
  <div>
    <div class="breadcrumb"><span class="muted">教师端 / 课前备课 / AI 教学设计</span></div>
    <div class="page-header">
      <h1>AI备课中心 / 教学设计生成与审核</h1>
      <div class="header-actions">
        <el-button>重新生成</el-button>
        <el-button type="primary">发布给学生</el-button>
      </div>
    </div>
    <p class="page-desc">覆盖章节教学设计生成、三维目标、案例匹配、讨论题和教师审核流</p>

    <!-- 章节信息 -->
    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="14">
        <el-card shadow="never" class="section-card">
          <template #header><strong>章节教学设计生成</strong></template>
          <div class="hero-box">
            <div class="hero-label">输入章节后生成结构化教案</div>
            <div class="hero-title">围绕教学目标、重点难点、课堂流程、案例、互动问题和预习任务生成初稿</div>
            <p class="hero-desc">教师可逐项接受、修改或退回；所有发布内容保留来源类型和审核状态。</p>
            <div class="hero-actions">
              <el-button type="primary">生成教案</el-button>
              <el-button>保存草稿</el-button>
            </div>
          </div>
          <el-row :gutter="16" style="margin-top: 16px">
            <el-col :span="12">
              <div class="status-card">
                <div class="status-label">输入条件</div>
                <div class="status-desc">课程：思想道德与法治<br/>章节：社会主义核心价值观</div>
                <el-tag size="small" type="info">已选择</el-tag>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="status-card">
                <div class="status-label">生成状态</div>
                <div class="status-desc">目标、案例、讨论题已生成，等待教师确认</div>
                <el-tag size="small" type="warning">待审核</el-tag>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>

      <el-col :span="10">
        <el-card shadow="never" class="section-card">
          <template #header><strong>教师审核流程</strong></template>
          <el-steps direction="vertical" :active="1" style="height: auto">
            <el-step title="生成" description="AI按模板生成完整教案" />
            <el-step title="溯源" description="展示教材、课件、案例来源" />
            <el-step title="修改" description="教师逐项调整表达和重点" />
            <el-step title="发布" description="确认后导学、小测、课堂问题同步到学生端" />
            <el-step title="沉淀" description="确认内容进入教学资源库" />
          </el-steps>
        </el-card>
      </el-col>
    </el-row>

    <!-- AI 生成内容 -->
    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="8" v-for="col in contentCols" :key="col.title">
        <el-card shadow="never" class="section-card">
          <template #header><strong>{{ col.title }}</strong></template>
          <div v-for="(item, i) in col.items" :key="i" class="muted" style="font-size: 13px; padding: 6px 0">· {{ item }}</div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
const contentCols = [
  {
    title: '三维目标',
    items: ['知识目标：理解核心价值观内涵', '能力目标：能联系现实案例分析', '价值目标：增强责任意识']
  },
  {
    title: '案例与问题',
    items: ['案例：社区志愿服务中的青年担当', '讨论题：价值目标如何转化为行动', '预习任务：阅读教材第2章']
  },
  {
    title: '审核与发布',
    items: ['逐项查看引用来源', '修改后形成版本记录', '确认后发布给学生端']
  }
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
.hero-box { background: var(--active); border-radius: 14px; padding: 20px 24px; border: 1px solid #606060; }
.hero-label { font-size: 12px; color: var(--muted); font-weight: 700; }
.hero-title { font-size: 19px; font-weight: 800; margin: 8px 0; }
.hero-desc { font-size: 13px; color: var(--muted); margin-bottom: 14px; }
.hero-actions { display: flex; gap: 10px; }
.status-card { background: var(--soft); border-radius: 12px; padding: 14px 16px; border: 1px dashed var(--line); }
.status-label { font-size: 14px; font-weight: 700; margin-bottom: 6px; }
.status-desc { font-size: 12px; color: var(--muted); margin-bottom: 8px; }
</style>
