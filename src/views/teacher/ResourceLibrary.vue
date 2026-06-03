<template>
  <div>
    <div class="breadcrumb"><span class="muted">教师端 / 资源中心 / 教学资源库</span></div>
    <div class="page-header">
      <h1>教学资源库</h1>
      <el-button type="primary">上传资源</el-button>
    </div>

    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="6">
        <el-card shadow="never" class="card">
          <template #header><strong>资源分类</strong></template>
          <div class="category-list">
            <div v-for="c in categories" :key="c.name" class="category-item" :class="{ active: activeCat === c.name }" @click="activeCat = c.name">
              <span>{{ c.name }}</span>
              <el-tag size="small">{{ c.count }}</el-tag>
            </div>
          </div>
        </el-card>
      </el-col>

      <el-col :span="18">
        <el-card shadow="never" class="card">
          <template #header>
            <div style="display: flex; justify-content: space-between; align-items: center">
              <strong>{{ activeCat }}</strong>
              <el-input v-model="search" placeholder="搜索资源..." style="width: 260px" clearable />
            </div>
          </template>
          <el-table :data="resources" style="width: 100%">
            <el-table-column prop="title" label="资源名称" min-width="200">
              <template #default="{ row }">
                <div style="display: flex; align-items: center; gap: 8px">
                  <el-tag size="small" :type="row.fileType === '视频' ? 'danger' : row.fileType === '文档' ? '' : 'warning'">{{ row.fileType }}</el-tag>
                  <strong>{{ row.title }}</strong>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="chapter" label="关联章节" width="160" />
            <el-table-column prop="size" label="大小" width="80" />
            <el-table-column prop="uploadTime" label="上传时间" width="120" />
            <el-table-column label="操作" width="160">
              <template #default>
                <el-button size="small">预览</el-button>
                <el-button size="small" type="primary">下载</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const search = ref('')
const activeCat = ref('案例库')

const categories = [
  { name: '案例库', count: 42 },
  { name: '课件模板', count: 18 },
  { name: '视频素材', count: 25 },
  { name: '政策文献', count: 30 },
  { name: '讨论题集', count: 55 },
  { name: '试卷库', count: 12 }
]

const resources = [
  { title: '新时代青年与社会主义核心价值观', fileType: '视频', chapter: '第二章', size: '256MB', uploadTime: '2026-05-20' },
  { title: '法治中国建设典型案例汇编', fileType: '文档', chapter: '第三章', size: '12MB', uploadTime: '2026-05-18' },
  { title: '文化自信专题教学课件', fileType: '课件', chapter: '第四章', size: '38MB', uploadTime: '2026-05-15' },
  { title: '改革开放40年成就数据图表', fileType: '文档', chapter: '第一章', size: '8MB', uploadTime: '2026-05-12' },
  { title: '大学生志愿服务纪录片', fileType: '视频', chapter: '第二章', size: '480MB', uploadTime: '2026-05-10' },
  { title: '课堂讨论话题精选50例', fileType: '文档', chapter: '综合', size: '5MB', uploadTime: '2026-05-08' }
]
</script>

<style scoped>
.breadcrumb { font-size: 12px; margin-bottom: 6px; }
.muted { color: var(--muted); font-size: 13px; }
.page-header { display: flex; justify-content: space-between; align-items: center; }
.page-header h1 { font-size: 26px; font-weight: 800; }
.card { border-radius: 14px; border: 1px solid var(--line); background: var(--card); }
.category-list { display: flex; flex-direction: column; gap: 4px; }
.category-item { display: flex; justify-content: space-between; align-items: center; padding: 12px 14px; border-radius: 10px; cursor: pointer; font-size: 14px; transition: background 0.2s; }
.category-item:hover { background: var(--soft); }
.category-item.active { background: var(--active); font-weight: 700; }
</style>
