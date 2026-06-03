<template>
  <div>
    <div class="breadcrumb"><span class="muted">学生端 / 消息通知 / 通知中心</span></div>
    <div class="page-header"><h1>消息通知</h1></div>

    <el-tabs v-model="activeTab" style="margin-top: 16px">
      <el-tab-pane label="全部消息" name="all" />
      <el-tab-pane label="课程通知" name="course" />
      <el-tab-pane label="作业反馈" name="feedback" />
    </el-tabs>

    <div v-for="(msg, i) in messages" :key="i" style="margin-bottom: 12px">
      <el-card shadow="never" class="card" :class="{ unread: !msg.read }">
        <div style="display: flex; align-items: flex-start; gap: 14px">
          <div class="dot" v-if="!msg.read"></div>
          <div style="flex: 1">
            <div style="display: flex; justify-content: space-between">
              <strong>{{ msg.title }}</strong>
              <span class="muted small">{{ msg.time }}</span>
            </div>
            <p class="muted" style="margin-top: 6px; line-height: 1.6">{{ msg.content }}</p>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const activeTab = ref('all')

const messages = [
  { title: '预习任务提醒', content: '本周思政课预习任务截止周四 22:00，请尽快完成章节导学阅读和预习小测。', time: '今天 08:30', read: false },
  { title: '作业已批改', content: '你的"社会主义核心价值观学习心得"作业已批改完成，得分 82 分。请查看AI评语和修改建议。', time: '昨天 15:20', read: false },
  { title: '课程案例更新', content: '课程思政案例库本周新增 3 条与本章相关的现实案例，可在课前学习中心查看。', time: '前天 10:00', read: true },
  { title: '课堂讨论总结发布', content: '上次课堂讨论的总结已发布，你的观点被教师标记为优秀回答。', time: '3天前', read: true }
]
</script>

<style scoped>
.breadcrumb { font-size: 12px; margin-bottom: 6px; }
.muted { color: var(--muted); font-size: 13px; }
.muted.small { font-size: 12px; }
.page-header h1 { font-size: 26px; font-weight: 800; }
.card { border-radius: 14px; border: 1px solid var(--line); background: var(--card); }
.card.unread { background: #fafaf7; border-color: #606060; }
.dot { width: 10px; height: 10px; border-radius: 50%; background: #409EFF; margin-top: 6px; flex-shrink: 0; }
</style>
