<template>
  <div>
    <div class="breadcrumb"><span class="muted">管理端 / AI内容管理 / 审核治理</span></div>
    <div class="page-header">
      <h1>AI内容审核</h1>
      <div class="header-actions">
        <el-button>批量通过</el-button>
        <el-button type="primary">开始审核</el-button>
      </div>
    </div>
    <p class="page-desc">对AI生成的教案、导学、案例、题目等内容进行安全审核与治理</p>

    <!-- 审核统计 -->
    <el-row :gutter="16" style="margin-top: 20px">
      <el-col :span="6" v-for="stat in stats" :key="stat.label">
        <div class="stat-card">
          <div class="muted small">{{ stat.label }}</div>
          <div class="stat-num" :style="{ color: stat.color }">{{ stat.value }}</div>
          <div class="muted small">{{ stat.desc }}</div>
        </div>
      </el-col>
    </el-row>

    <!-- 审核表格 -->
    <el-card shadow="never" class="section-card" style="margin-top: 20px">
      <template #header>
        <div style="display: flex; justify-content: space-between; align-items: center">
          <strong>AI内容审核列表</strong>
          <div style="display: flex; gap: 10px">
            <el-input placeholder="搜索内容标题或来源" style="width: 240px" size="small" />
            <el-select placeholder="内容类型" size="small" style="width: 140px">
              <el-option label="全部" value="all" />
              <el-option label="教案" value="plan" />
              <el-option label="导学" value="guide" />
              <el-option label="案例" value="case" />
              <el-option label="题目" value="question" />
            </el-select>
          </div>
        </div>
      </template>

      <el-table :data="reviewList" style="width: 100%">
        <el-table-column prop="title" label="内容标题" min-width="220" />
        <el-table-column prop="type" label="类型" width="100" align="center">
          <template #default="{ row }">
            <el-tag size="small" type="info">{{ row.type }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="source" label="来源" min-width="180" />
        <el-table-column prop="author" label="生成者" width="120" align="center" />
        <el-table-column prop="time" label="生成时间" width="140" align="center" />
        <el-table-column label="风险等级" width="100" align="center">
          <template #default="{ row }">
            <el-tag size="small" :type="row.riskType">{{ row.risk }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200" align="center">
          <template #default>
            <el-button size="small" type="success">通过</el-button>
            <el-button size="small" type="warning">修改</el-button>
            <el-button size="small" type="danger">拒绝</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup>
const stats = [
  { label: '待审核', value: '18', color: '#F56C6C', desc: '需要人工审核' },
  { label: '已通过', value: '142', color: '#67C23A', desc: '本周累计通过' },
  { label: '已拒绝', value: '6', color: '#909399', desc: '含违规内容' },
  { label: '被拦截', value: '3', color: '#E6A23C', desc: '敏感词自动拦截' }
]

const reviewList = [
  { title: '社会主义核心价值观教学设计方案', type: '教案', source: '教材第2章 + 教师修订版课件', author: '系统生成', time: '今天 10:23', risk: '低风险', riskType: 'success' },
  { title: '青年担当与时代使命案例讨论', type: '案例', source: '案例库 + 教材第2章', author: '系统生成', time: '今天 09:15', risk: '低风险', riskType: 'success' },
  { title: '价值目标与行为准则对照表', type: '导学', source: '教材 + AI整合', author: '系统生成', time: '昨天 16:42', risk: '待审查', riskType: 'warning' },
  { title: '关于公民道德建设的讨论题', type: '题目', source: '教材第4章', author: '王老师', time: '昨天 14:08', risk: '低风险', riskType: 'success' },
  { title: '理想信念与核心价值观融合教案', type: '教案', source: '教材第1-2章', author: '系统生成', time: '昨天 11:30', risk: '高风险', riskType: 'danger' }
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
.stat-card {
  background: var(--soft); border-radius: 14px; padding: 18px 20px;
  border: 1px dashed var(--line); text-align: center;
}
.stat-num { font-size: 32px; font-weight: 800; margin: 4px 0; }
</style>
