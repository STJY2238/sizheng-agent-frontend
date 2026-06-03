<template>
  <div>
    <div class="breadcrumb"><span class="muted">教师端 / 课中 / 互动控制台</span></div>
    <div class="page-header">
      <h1>课堂快捷指令 / 发问抢答</h1>
      <div class="header-actions">
        <el-button>投屏展示</el-button>
        <el-button type="primary">结束抢答</el-button>
      </div>
    </div>
    <p class="page-desc">覆盖教师发问、Agent辅助抢答、课堂指令面板和学生作答聚合</p>

    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="14">
        <el-card shadow="never" class="section-card">
          <template #header><strong>课堂互动控制台</strong></template>
          <div class="hero-box">
            <div class="hero-label">教师快捷指令面板</div>
            <div class="hero-title">一键发问、开启抢答、生成追问、查看高频错题</div>
            <p class="hero-desc">教师先发起问题，学生输入关键词后由 Agent 扩展成完整回答。</p>
            <div class="hero-actions">
              <el-button type="primary">发起抢答</el-button>
              <el-button>生成追问</el-button>
            </div>
          </div>
          <el-row :gutter="16" style="margin-top: 16px">
            <el-col :span="12">
              <div class="status-card">
                <div class="status-label">当前问题</div>
                <div class="status-desc">如何理解社会主义核心价值观既是目标也是准则？</div>
                <el-tag size="small" type="warning">进行中</el-tag>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="status-card">
                <div class="status-label">互动状态</div>
                <div class="status-desc">已参与 41 人，待点评回答 6 条</div>
                <el-tag size="small" type="success">实时</el-tag>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>

      <el-col :span="10">
        <el-card shadow="never" class="section-card">
          <template #header><strong>教师指令与AI辅助</strong></template>
          <div class="chat-area">
            <div class="msg-bubble" style="margin-bottom: 12px">
              <div class="msg-role">教师</div>
              <div class="msg-text">请围绕"青年责任"生成一个追问。</div>
            </div>
            <div class="msg-bubble ai" style="margin-bottom: 12px">
              <div class="msg-role">AI</div>
              <div class="msg-text">可追问：大学生怎样把价值目标落实到日常行为？</div>
            </div>
            <div class="msg-bubble" style="margin-bottom: 12px">
              <div class="msg-role">教师</div>
              <div class="msg-text">开启30秒抢答，并把回答按观点聚类。</div>
            </div>
          </div>
          <div class="chat-input-area">
            <el-input placeholder="输入指令：发问 / 抢答 / 点评 / 生成追问……" size="default">
              <template #append><el-button>发送</el-button></template>
            </el-input>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 学生回答聚合 -->
    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="24">
        <el-card shadow="never" class="section-card">
          <template #header><strong>学生回答聚合</strong></template>
          <el-table :data="answers" style="width: 100%" :border="false">
            <el-table-column prop="viewpoint" label="观点类型" width="280" />
            <el-table-column prop="content" label="核心内容" />
            <el-table-column prop="count" label="人数" width="100" align="center" />
            <el-table-column label="操作" width="160" align="center">
              <template #default>
                <el-button size="small">点评</el-button>
                <el-button size="small" type="primary">展示</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
const answers = [
  { viewpoint: '个人行为切入', content: '诚信考试、遵守规则、志愿服务被多次提到', count: '18人' },
  { viewpoint: '社会责任切入', content: '结合社区治理、乡村振兴、公共服务展开', count: '14人' },
  { viewpoint: '待教师点评', content: 'AI标出表达完整、观点有偏差和案例新颖回答', count: '6条' },
  { viewpoint: '课堂后续动作', content: '可把典型回答沉淀为案例或生成巩固题', count: '可用' }
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
.chat-area { margin-bottom: 12px; }
.msg-bubble { background: var(--card); border: 1px solid var(--line); border-radius: 12px; padding: 10px 14px; max-width: 90%; }
.msg-bubble.ai { background: var(--soft); margin-left: auto; }
.msg-role { font-size: 12px; font-weight: 700; color: var(--muted); margin-bottom: 4px; }
.msg-text { font-size: 13px; line-height: 1.5; }
.chat-input-area { border-top: 1px solid var(--line); padding-top: 12px; }
</style>
