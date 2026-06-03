<template>
  <div>
    <div class="breadcrumb"><span class="muted">管理端 / 知识库管理 / 知识来源与索引治理</span></div>
    <div class="page-header">
      <h1>知识库与来源管理</h1>
      <div class="header-actions">
        <el-button>重新索引</el-button>
        <el-button type="primary">新增资源</el-button>
      </div>
    </div>
    <p class="page-desc">管理教材、课件、案例库、题库等知识来源，控制RAG检索范围与内容质量</p>

    <!-- 概览统计 -->
    <el-row :gutter="16" style="margin-top: 20px">
      <el-col :span="6" v-for="stat in stats" :key="stat.label">
        <div class="stat-card">
          <div class="muted small">{{ stat.label }}</div>
          <div class="stat-num" :style="{ color: stat.color }">{{ stat.value }}</div>
          <div class="muted small">{{ stat.desc }}</div>
        </div>
      </el-col>
    </el-row>

    <!-- 知识资源列表 -->
    <el-card shadow="never" class="section-card" style="margin-top: 20px">
      <template #header>
        <div style="display: flex; justify-content: space-between">
          <strong>知识来源列表</strong>
          <el-input placeholder="搜索知识来源" style="width: 240px" size="small" />
        </div>
      </template>
      <el-table :data="knowledgeList" style="width: 100%">
        <el-table-column prop="name" label="资源名称" min-width="200" />
        <el-table-column label="类型" width="100" align="center">
          <template #default="{ row }">
            <el-tag size="small" type="info">{{ row.type }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="course" label="关联课程" min-width="180" />
        <el-table-column prop="size" label="内容量" width="100" align="center" />
        <el-table-column label="索引状态" width="100" align="center">
          <template #default="{ row }">
            <el-tag size="small" :type="row.indexStatus === '已索引' ? 'success' : 'warning'">{{ row.indexStatus }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="审核状态" width="100" align="center">
          <template #default="{ row }">
            <el-tag size="small" :type="row.auditType">{{ row.audit }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="updateTime" label="更新时间" width="140" align="center" />
        <el-table-column label="操作" width="160" align="center">
          <template #default>
            <el-button size="small">查看</el-button>
            <el-button size="small" type="primary">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup>
const stats = [
  { label: '教材资源', value: '8', color: '#409EFF', desc: '已全部索引' },
  { label: '课件资源', value: '23', color: '#67C23A', desc: '21份已索引' },
  { label: '案例库', value: '128', color: '#E6A23C', desc: '128条已审核' },
  { label: '题库', value: '94', color: '#909399', desc: '86道已审核' }
]

const knowledgeList = [
  { name: '《思想道德与法治》教材全文', type: '教材', course: '思想道德与法治', size: '12章', indexStatus: '已索引', audit: '已审核', auditType: 'success', updateTime: '2025-09-01' },
  { name: '王老师思政课教学课件合集', type: '课件', course: '思想道德与法治', size: '16份', indexStatus: '已索引', audit: '已审核', auditType: 'success', updateTime: '2025-10-15' },
  { name: '志愿服务青年担当案例集', type: '案例', course: '思想道德与法治', size: '32条', indexStatus: '已索引', audit: '已审核', auditType: 'success', updateTime: '2025-11-20' },
  { name: '社会主义核心价值观讨论题库', type: '题库', course: '思想道德与法治', size: '45道', indexStatus: '已索引', audit: '已审核', auditType: 'success', updateTime: '2025-12-05' },
  { name: '时事热点思政教学素材', type: '素材', course: '全校通用', size: '18条', indexStatus: '待索引', audit: '待审核', auditType: 'warning', updateTime: '2026-01-08' }
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
