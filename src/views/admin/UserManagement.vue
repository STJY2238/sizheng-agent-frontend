<template>
  <div>
    <div class="breadcrumb"><span class="muted">管理端 / 账号与组织 / 用户管理</span></div>
    <div class="page-header">
      <h1>用户管理</h1>
      <div>
        <el-button>批量导入</el-button>
        <el-button type="primary">新增用户</el-button>
      </div>
    </div>

    <el-card shadow="never" class="card" style="margin-top: 20px">
      <template #header>
        <div style="display: flex; justify-content: space-between; align-items: center">
          <div style="display: flex; gap: 12px; align-items: center">
            <el-select v-model="roleFilter" style="width: 120px" clearable placeholder="角色">
              <el-option label="学生" value="student" />
              <el-option label="教师" value="teacher" />
              <el-option label="管理员" value="admin" />
            </el-select>
            <el-select v-model="statusFilter" style="width: 120px" clearable placeholder="状态">
              <el-option label="正常" value="active" />
              <el-option label="禁用" value="disabled" />
            </el-select>
            <el-input v-model="search" placeholder="搜索姓名/学号/工号..." style="width: 240px" clearable />
          </div>
          <span class="muted small">共 {{ users.length }} 条记录</span>
        </div>
      </template>
      <el-table :data="users" style="width: 100%">
        <el-table-column prop="id" label="编号" width="80" />
        <el-table-column prop="name" label="姓名" width="100" />
        <el-table-column prop="role" label="角色" width="100">
          <template #default="{ row }">
            <el-tag :type="row.role === '学生' ? '' : row.role === '教师' ? 'success' : 'warning'" size="small">{{ row.role }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="dept" label="院系/部门" min-width="160" />
        <el-table-column prop="course" label="关联课程" min-width="160" />
        <el-table-column prop="status" label="状态" width="80">
          <template #default="{ row }">
            <el-switch :model-value="row.status === '正常'" active-color="#67C23A" />
          </template>
        </el-table-column>
        <el-table-column prop="lastLogin" label="最后登录" width="160" />
        <el-table-column label="操作" width="180">
          <template #default>
            <el-button size="small">编辑</el-button>
            <el-button size="small" type="primary">重置密码</el-button>
            <el-button size="small" type="danger">禁用</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin-top: 16px; text-align: right">
        <el-pagination layout="prev, pager, next" :total="42" background size="small" />
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const roleFilter = ref('')
const statusFilter = ref('')
const search = ref('')

const users = [
  { id: 'U001', name: '李明哲', role: '学生', dept: '马克思主义学院', course: '思想道德与法治', status: '正常', lastLogin: '2026-06-03 09:15' },
  { id: 'U002', name: '王思远', role: '学生', dept: '马克思主义学院', course: '思想道德与法治', status: '正常', lastLogin: '2026-06-02 16:40' },
  { id: 'U003', name: '陈教授', role: '教师', dept: '马克思主义学院', course: '思想道德与法治', status: '正常', lastLogin: '2026-06-03 08:00' },
  { id: 'U004', name: '张雨薇', role: '学生', dept: '马克思主义学院', course: '中国近现代史纲要', status: '正常', lastLogin: '2026-06-01 14:20' },
  { id: 'U005', name: '赵一鸣', role: '学生', dept: '马克思主义学院', course: '思想道德与法治', status: '禁用', lastLogin: '2026-05-20 10:00' },
  { id: 'U006', name: '李老师', role: '教师', dept: '马克思主义学院', course: '中国近现代史纲要', status: '正常', lastLogin: '2026-06-03 07:30' },
  { id: 'U007', name: '管理员', role: '管理员', dept: '教务处', course: '-', status: '正常', lastLogin: '2026-06-03 08:45' }
]
</script>

<style scoped>
.breadcrumb { font-size: 12px; margin-bottom: 6px; }
.muted { color: var(--muted); font-size: 13px; }
.muted.small { font-size: 12px; }
.page-header { display: flex; justify-content: space-between; align-items: center; }
.page-header h1 { font-size: 26px; font-weight: 800; }
.card { border-radius: 14px; border: 1px solid var(--line); background: var(--card); }
</style>
