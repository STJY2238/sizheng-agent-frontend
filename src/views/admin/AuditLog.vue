<template>
  <div>
    <div class="breadcrumb"><span class="muted">管理端 / 运行治理 / 操作日志</span></div>
    <div class="page-header">
      <h1>操作日志</h1>
      <el-button type="primary">导出日志</el-button>
    </div>

    <el-card shadow="never" class="card" style="margin-top: 20px">
      <template #header>
        <div style="display: flex; justify-content: space-between; align-items: center">
          <div style="display: flex; gap: 12px; align-items: center">
            <el-select v-model="actionFilter" style="width: 120px" clearable placeholder="操作类型">
              <el-option label="登录" value="login" />
              <el-option label="修改" value="edit" />
              <el-option label="删除" value="delete" />
              <el-option label="审核" value="review" />
            </el-select>
            <el-select v-model="roleFilter" style="width: 120px" clearable placeholder="角色">
              <el-option label="学生" value="student" />
              <el-option label="教师" value="teacher" />
              <el-option label="管理员" value="admin" />
            </el-select>
            <el-date-picker v-model="date" type="date" placeholder="选择日期" size="default" />
          </div>
          <span class="muted small">共 {{ logs.length }} 条记录</span>
        </div>
      </template>
      <el-table :data="logs" style="width: 100%">
        <el-table-column prop="time" label="时间" width="170" />
        <el-table-column prop="operator" label="操作人" width="120">
          <template #default="{ row }">
            <strong>{{ row.operator }}</strong>
            <div class="muted" style="font-size: 11px">{{ row.role }}</div>
          </template>
        </el-table-column>
        <el-table-column prop="action" label="操作类型" width="100">
          <template #default="{ row }">
            <el-tag :type="row.actionType" size="small">{{ row.action }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="detail" label="操作详情" min-width="260" />
        <el-table-column prop="ip" label="IP地址" width="140" />
        <el-table-column prop="result" label="结果" width="80">
          <template #default="{ row }">
            <el-tag :type="row.result === '成功' ? 'success' : 'danger'" size="small">{{ row.result }}</el-tag>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin-top: 16px; text-align: right">
        <el-pagination layout="prev, pager, next" :total="156" background size="small" />
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const actionFilter = ref('')
const roleFilter = ref('')
const date = ref('')

const logs = [
  { time: '2026-06-03 09:15:32', operator: '李明哲', role: '学生', action: '登录', actionType: '', detail: '学生端登录 - 账号密码登录', ip: '10.0.1.42', result: '成功' },
  { time: '2026-06-03 08:45:10', operator: '管理员', role: '管理员', action: '审核', actionType: 'warning', detail: 'AI生成教案审核通过 - 第二章第1节教学设计', ip: '10.0.0.1', result: '成功' },
  { time: '2026-06-03 08:00:05', operator: '陈教授', role: '教师', action: '登录', actionType: '', detail: '教师端登录 - 账号密码登录', ip: '10.0.0.88', result: '成功' },
  { time: '2026-06-02 16:40:22', operator: '王思远', role: '学生', action: '修改', actionType: '', detail: '修改个人信息 - 更换手机号', ip: '10.0.1.56', result: '成功' },
  { time: '2026-06-02 15:20:18', operator: '李老师', role: '教师', action: '删除', actionType: 'danger', detail: '删除随堂测验题目 - 题目ID: Q2026-0032', ip: '10.0.0.92', result: '成功' },
  { time: '2026-06-02 14:10:45', operator: '管理员', role: '管理员', action: '修改', actionType: '', detail: '修改用户权限 - 将赵一鸣状态改为禁用', ip: '10.0.0.1', result: '成功' },
  { time: '2026-06-02 11:05:33', operator: '管理员', role: '管理员', action: '登录', actionType: '', detail: '管理端登录 - 账号密码登录', ip: '10.0.0.1', result: '失败' }
]
</script>

<style scoped>
.breadcrumb { font-size: 12px; margin-bottom: 6px; }
.muted { color: var(--muted); font-size: 13px; }
.page-header { display: flex; justify-content: space-between; align-items: center; }
.page-header h1 { font-size: 26px; font-weight: 800; }
.card { border-radius: 14px; border: 1px solid var(--line); background: var(--card); }
</style>
