<template>
  <div>
    <div class="breadcrumb"><span class="muted">管理端 / 账号与组织 / 角色权限</span></div>
    <div class="page-header">
      <h1>角色与权限管理</h1>
      <el-button type="primary">新增角色</el-button>
    </div>

    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="8">
        <el-card shadow="never" class="card">
          <template #header><strong>角色列表</strong></template>
          <div class="role-list">
            <div v-for="r in roles" :key="r.id" class="role-item" :class="{ active: activeRole === r.id }" @click="activeRole = r.id">
              <div style="display: flex; justify-content: space-between; align-items: center">
                <strong>{{ r.name }}</strong>
                <el-tag size="small" :type="r.type === '系统' ? 'danger' : ''">{{ r.type }}</el-tag>
              </div>
              <div class="muted small">{{ r.desc }}</div>
              <div class="muted" style="font-size: 11px; margin-top: 2px">{{ r.userCount }} 个用户</div>
            </div>
          </div>
        </el-card>
      </el-col>

      <el-col :span="16">
        <el-card shadow="never" class="card">
          <template #header><strong>{{ activeRoleName }} - 权限配置</strong></template>
          <div v-for="group in permissionGroups" :key="group.name" style="margin-bottom: 20px">
            <strong style="font-size: 14px">{{ group.name }}</strong>
            <el-divider style="margin: 10px 0" />
            <div style="display: flex; flex-wrap: wrap; gap: 10px">
              <el-checkbox v-for="p in group.permissions" :key="p.key" :model-value="p.granted" border size="small">
                {{ p.label }}
              </el-checkbox>
            </div>
          </div>
          <el-divider />
          <div style="text-align: right">
            <el-button>重置</el-button>
            <el-button type="primary">保存权限</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeRole = ref('role_admin')

const roles = [
  { id: 'role_admin', name: '超级管理员', type: '系统', desc: '拥有平台所有功能权限', userCount: 2 },
  { id: 'role_teacher', name: '授课教师', type: '系统', desc: '课程教学、资源管理、学情分析', userCount: 12 },
  { id: 'role_student', name: '学生', type: '系统', desc: '课程学习、作业提交、AI问答', userCount: 1200 },
  { id: 'role_assistant', name: '教学助理', type: '自定义', desc: '辅助教师管理课程和批改作业', userCount: 5 },
  { id: 'role_reviewer', name: '内容审核员', type: '自定义', desc: '审核AI生成内容和知识库', userCount: 3 }
]

const activeRoleName = computed(() => {
  const role = roles.find(r => r.id === activeRole.value)
  return role ? role.name : ''
})

const permissionGroups = [
  {
    name: '用户管理',
    permissions: [
      { key: 'user_view', label: '查看用户', granted: true },
      { key: 'user_create', label: '新增用户', granted: true },
      { key: 'user_edit', label: '编辑用户', granted: true },
      { key: 'user_delete', label: '删除用户', granted: false },
      { key: 'user_import', label: '批量导入', granted: true }
    ]
  },
  {
    name: '课程管理',
    permissions: [
      { key: 'course_view', label: '查看课程', granted: true },
      { key: 'course_create', label: '新建课程', granted: true },
      { key: 'course_edit', label: '编辑课程', granted: true },
      { key: 'course_archive', label: '归档课程', granted: true }
    ]
  },
  {
    name: '内容治理',
    permissions: [
      { key: 'content_review', label: 'AI内容审核', granted: true },
      { key: 'content_approve', label: '内容发布', granted: true },
      { key: 'knowledge_edit', label: '知识库管理', granted: true },
      { key: 'assignment_view', label: '查看作业', granted: true }
    ]
  },
  {
    name: '系统设置',
    permissions: [
      { key: 'settings_view', label: '查看设置', granted: true },
      { key: 'settings_edit', label: '修改设置', granted: true },
      { key: 'log_view', label: '查看日志', granted: true },
      { key: 'role_manage', label: '角色权限管理', granted: true }
    ]
  }
]
</script>

<style scoped>
.breadcrumb { font-size: 12px; margin-bottom: 6px; }
.muted { color: var(--muted); font-size: 13px; }
.muted.small { font-size: 12px; }
.page-header { display: flex; justify-content: space-between; align-items: center; }
.page-header h1 { font-size: 26px; font-weight: 800; }
.card { border-radius: 14px; border: 1px solid var(--line); background: var(--card); }
.role-list { display: flex; flex-direction: column; gap: 6px; }
.role-item { padding: 14px; border-radius: 10px; cursor: pointer; border: 1px dashed transparent; transition: all 0.2s; }
.role-item:hover { background: var(--soft); }
.role-item.active { background: var(--active); border-color: #606060; }
</style>
