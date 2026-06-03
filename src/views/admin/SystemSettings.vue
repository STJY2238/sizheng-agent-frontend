<template>
  <div>
    <div class="breadcrumb"><span class="muted">管理端 / 运行治理 / 系统设置</span></div>
    <div class="page-header"><h1>系统设置</h1></div>

    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="16">
        <el-card shadow="never" class="card">
          <template #header><strong>基础配置</strong></template>
          <el-form label-width="120px">
            <el-form-item label="平台名称"><el-input v-model="config.platformName" /></el-form-item>
            <el-form-item label="学期设置"><el-select v-model="config.semester" style="width: 100%"><el-option v-for="s in semesters" :key="s" :label="s" :value="s" /></el-select></el-form-item>
            <el-form-item label="AI模型选择">
              <el-radio-group v-model="config.aiModel">
                <el-radio value="default">默认模型</el-radio>
                <el-radio value="advanced">高级模型</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="自动审核阈值">
              <el-slider v-model="config.autoReviewThreshold" :min="60" :max="95" show-input style="width: 100%" />
              <div class="muted small">AI评分高于此阈值的作业自动通过审核</div>
            </el-form-item>
            <el-form-item label="登录失败锁定">
              <el-input-number v-model="config.loginLockAttempts" :min="3" :max="10" /> <span class="muted" style="margin-left: 8px">次失败后锁定账号</span>
            </el-form-item>
            <el-form-item label="会话超时">
              <el-input-number v-model="config.sessionTimeout" :min="15" :max="480" :step="15" /> <span class="muted" style="margin-left: 8px">分钟</span>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">保存配置</el-button>
              <el-button>恢复默认</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>

      <el-col :span="8">
        <el-card shadow="never" class="card">
          <template #header><strong>系统状态</strong></template>
          <div v-for="(item, i) in sysStatus" :key="i" style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px dashed var(--line)">
            <span class="muted">{{ item.label }}</span>
            <span :style="{ color: item.color, fontWeight: 700 }">{{ item.value }}</span>
          </div>
        </el-card>

        <el-card shadow="never" class="card" style="margin-top: 16px">
          <template #header><strong>数据维护</strong></template>
          <div style="display: flex; flex-direction: column; gap: 10px">
            <el-button>清理过期日志</el-button>
            <el-button>备份数据库</el-button>
            <el-button>重建搜索索引</el-button>
            <el-button type="danger">重置系统</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const semesters = ['2025-2026-1', '2025-2026-2', '2026-2027-1']

const config = reactive({
  platformName: '智教AI教学平台',
  semester: '2025-2026-2',
  aiModel: 'default',
  autoReviewThreshold: 80,
  loginLockAttempts: 5,
  sessionTimeout: 120
})

const sysStatus = [
  { label: '服务运行时间', value: '28天 6小时', color: '#67C23A' },
  { label: 'CPU使用率', value: '34%', color: '#67C23A' },
  { label: '内存使用率', value: '62%', color: '#E6A23C' },
  { label: '磁盘空间', value: '45%', color: '#67C23A' },
  { label: '活跃连接数', value: '128', color: '#409EFF' }
]
</script>

<style scoped>
.breadcrumb { font-size: 12px; margin-bottom: 6px; }
.muted { color: var(--muted); font-size: 13px; }
.muted.small { font-size: 12px; }
.page-header h1 { font-size: 26px; font-weight: 800; }
.card { border-radius: 14px; border: 1px solid var(--line); background: var(--card); }
</style>
