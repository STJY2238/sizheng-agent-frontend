<template>
  <div>
    <div class="breadcrumb"><span class="muted">管理端 / 账号与组织 / 课程班级管理</span></div>
    <div class="page-header">
      <h1>课程与班级管理</h1>
      <el-button type="primary">新建课程</el-button>
    </div>

    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="8">
        <el-card shadow="never" class="card">
          <template #header><strong>课程列表</strong></template>
          <div class="course-list">
            <div v-for="c in courses" :key="c.id" class="course-item" :class="{ active: activeCourse === c.id }" @click="activeCourse = c.id">
              <strong>{{ c.name }}</strong>
              <div class="muted small">共 {{ c.classCount }} 个班级 · {{ c.studentCount }} 名学生</div>
            </div>
          </div>
        </el-card>
      </el-col>

      <el-col :span="16">
        <el-card shadow="never" class="card">
          <template #header>
            <div style="display: flex; justify-content: space-between; align-items: center">
              <strong>班级列表</strong>
              <el-button type="primary" size="small">添加班级</el-button>
            </div>
          </template>
          <el-table :data="classes" style="width: 100%">
            <el-table-column prop="name" label="班级名称" width="140" />
            <el-table-column prop="teacher" label="授课教师" width="100" />
            <el-table-column prop="studentCount" label="学生人数" width="80" />
            <el-table-column prop="semester" label="学期" width="120" />
            <el-table-column prop="schedule" label="上课时间" width="140" />
            <el-table-column prop="status" label="状态" width="80">
              <template #default="{ row }">
                <el-tag :type="row.status === '进行中' ? 'success' : 'info'" size="small">{{ row.status }}</el-tag>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="180">
              <template #default>
                <el-button size="small">编辑</el-button>
                <el-button size="small">学生名单</el-button>
                <el-button size="small" type="danger">归档</el-button>
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

const activeCourse = ref('C001')

const courses = [
  { id: 'C001', name: '思想道德与法治', classCount: 3, studentCount: 120 },
  { id: 'C002', name: '中国近现代史纲要', classCount: 2, studentCount: 85 },
  { id: 'C003', name: '马克思主义基本原理', classCount: 2, studentCount: 90 },
  { id: 'C004', name: '形势与政策', classCount: 4, studentCount: 160 }
]

const classes = [
  { name: '2023级1班', teacher: '陈教授', studentCount: 42, semester: '2025-2026-2', schedule: '周一 14:00-15:40', status: '进行中' },
  { name: '2023级2班', teacher: '陈教授', studentCount: 38, semester: '2025-2026-2', schedule: '周三 14:00-15:40', status: '进行中' },
  { name: '2023级3班', teacher: '李老师', studentCount: 40, semester: '2025-2026-2', schedule: '周五 10:00-11:40', status: '进行中' }
]
</script>

<style scoped>
.breadcrumb { font-size: 12px; margin-bottom: 6px; }
.muted { color: var(--muted); font-size: 13px; }
.muted.small { font-size: 12px; }
.page-header { display: flex; justify-content: space-between; align-items: center; }
.page-header h1 { font-size: 26px; font-weight: 800; }
.card { border-radius: 14px; border: 1px solid var(--line); background: var(--card); }
.course-list { display: flex; flex-direction: column; gap: 6px; }
.course-item { padding: 14px; border-radius: 10px; cursor: pointer; border: 1px dashed transparent; transition: all 0.2s; }
.course-item:hover { background: var(--soft); }
.course-item.active { background: var(--active); border-color: #606060; }
</style>
