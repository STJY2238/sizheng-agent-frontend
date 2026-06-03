<template>
  <div>
    <div class="breadcrumb"><span class="muted">学生端 / 课前学习 / 章节导学</span></div>
    <div class="page-header">
      <h1>课前学习中心</h1>
      <el-button type="primary">进入导学</el-button>
    </div>
    <p class="page-desc">课前给学生生成"本章怎么学"的导学说明，突出重点掌握内容与学习路径</p>

    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="16">
        <el-card shadow="never" class="card">
          <template #header><strong>本章导学：社会主义核心价值观</strong></template>
          <div class="guide-section">
            <h3>学习目标</h3>
            <div class="guide-item">知识目标：理解社会主义核心价值观的基本内涵与层次结构</div>
            <div class="guide-item">能力目标：能够运用核心价值观分析现实社会现象</div>
            <div class="guide-item">价值目标：增强对社会主义核心价值观的认同与践行意识</div>
          </div>
          <el-divider />
          <div class="guide-section">
            <h3>重点掌握</h3>
            <el-tag v-for="p in keyPoints" :key="p" style="margin: 4px 8px 4px 0" size="large">{{ p }}</el-tag>
          </div>
          <el-divider />
          <div class="guide-section">
            <h3>学习路径</h3>
            <el-steps :active="0" align-center>
              <el-step title="阅读导学" description="了解本章框架与重点" />
              <el-step title="概念学习" description="掌握核心概念与理论" />
              <el-step title="完成小测" description="检验理解程度" />
              <el-step title="提出问题" description="提交困惑与思考" />
            </el-steps>
          </div>
        </el-card>
      </el-col>

      <el-col :span="8">
        <el-card shadow="never" class="card">
          <template #header><strong>概念通俗解释</strong></template>
          <div class="concept-item" v-for="c in concepts" :key="c.name">
            <strong>{{ c.name }}</strong>
            <p class="muted">{{ c.explain }}</p>
            <el-tag size="small" type="info">来源：{{ c.source }}</el-tag>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
const keyPoints = ['核心价值观三个层面', '国家层面价值目标', '社会层面价值取向', '个人层面价值准则', '价值目标与行为准则的统一']
const concepts = [
  { name: '社会主义核心价值观', explain: '社会主义核心价值体系的内核，体现社会主义核心价值体系的根本性质和基本特征。', source: '教材第2章' },
  { name: '国家层面价值目标', explain: '富强、民主、文明、和谐，是国家层面的价值目标。', source: '教材' },
  { name: '个人层面价值准则', explain: '爱国、敬业、诚信、友善，是公民个人层面的价值准则。', source: '教材' }
]
</script>

<style scoped>
.breadcrumb { font-size: 12px; margin-bottom: 6px; }
.muted { color: var(--muted); font-size: 13px; }
.page-header { display: flex; justify-content: space-between; align-items: center; }
.page-header h1 { font-size: 26px; font-weight: 800; }
.page-desc { font-size: 13px; color: var(--muted); margin-top: 4px; }
.card { border-radius: 14px; border: 1px solid var(--line); background: var(--card); }
.guide-section { padding: 8px 0; }
.guide-section h3 { font-size: 16px; margin-bottom: 10px; }
.guide-item { font-size: 13px; color: var(--muted); padding: 6px 0; padding-left: 12px; border-left: 3px solid var(--active); margin-bottom: 4px; }
.concept-item { padding: 14px 0; border-bottom: 1px dashed var(--line); }
.concept-item:last-child { border-bottom: none; }
.concept-item p { margin: 6px 0 8px; line-height: 1.6; }
</style>
