<template>
  <div class="layout">
    <header class="topbar">
      <div class="topbar-left">
        <span class="logo">AI</span>
        <div>
          <div class="platform-name">智教AI教学平台</div>
          <div class="platform-sub">让教学更智能</div>
        </div>
        <el-tag type="info" class="course-tag">{{ info.course }}</el-tag>
        <span class="meta-text">{{ info.semester }}</span>
        <span class="meta-text">{{ info.college }}</span>
      </div>
      <div class="topbar-right">
        <el-icon size="18"><Bell /></el-icon>
        <span class="user-name">{{ info.name }}</span>
        <el-tag size="small">学生端</el-tag>
      </div>
    </header>

    <div class="layout-body">
      <aside class="sidebar">
        <div class="sidebar-title">学生学习空间</div>
        <div class="sidebar-sub">本周思政学习任务总览</div>

        <router-link to="/student/dashboard" class="nav-item">
          <el-icon><HomeFilled /></el-icon>
          <span>学生工作台</span>
        </router-link>
        <router-link to="/student/pre-study" class="nav-item">
          <el-icon><Reading /></el-icon>
          <span>课前学习</span>
        </router-link>
        <router-link to="/student/pre-study-quiz" class="nav-item">
          <el-icon><Edit /></el-icon>
          <span>预习小测</span>
        </router-link>
        <router-link to="/student/class-interaction" class="nav-item">
          <el-icon><Connection /></el-icon>
          <span>课中互动</span>
        </router-link>
        <router-link to="/student/ai-qa" class="nav-item">
          <el-icon><ChatDotRound /></el-icon>
          <span>学科问答</span>
        </router-link>
        <router-link to="/student/feedback" class="nav-item">
          <el-icon><Checked /></el-icon>
          <span>课后反馈</span>
        </router-link>
        <router-link to="/student/learning-report" class="nav-item">
          <el-icon><TrendCharts /></el-icon>
          <span>学习报告</span>
        </router-link>
        <router-link to="/student/notifications" class="nav-item">
          <el-icon><Bell /></el-icon>
          <span>消息通知</span>
        </router-link>
        <router-link to="/student/profile" class="nav-item">
          <el-icon><User /></el-icon>
          <span>个人中心</span>
        </router-link>

        <div class="sidebar-notice">
          <div class="notice-title">平台公告</div>
          <div v-for="(n, i) in notifications" :key="i" class="notice-item">· {{ n.content }}</div>
        </div>
      </aside>

      <main class="main-content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { studentInfo as info, studentNotifications as notifications } from '../mock/data.js'
</script>

<style scoped>
.layout { height: 100vh; display: flex; flex-direction: column; }
.topbar {
  height: 64px; display: flex; align-items: center; justify-content: space-between;
  padding: 0 24px; background: var(--card); border-bottom: 1px solid var(--line); flex-shrink: 0;
}
.topbar-left { display: flex; align-items: center; gap: 10px; }
.logo {
  width: 38px; height: 38px; display: flex; align-items: center; justify-content: center;
  background: var(--active); border-radius: 10px; font-weight: 800; font-size: 15px;
}
.platform-name { font-size: 17px; font-weight: 700; }
.platform-sub { font-size: 12px; color: var(--muted); }
.course-tag { margin-left: 8px; }
.meta-text { font-size: 13px; color: var(--muted); }
.topbar-right { display: flex; align-items: center; gap: 10px; }
.user-name { font-size: 14px; font-weight: 600; }
.layout-body { flex: 1; display: flex; overflow: hidden; }
.sidebar {
  width: 220px; background: var(--card); border-right: 1px solid var(--line);
  padding: 16px; flex-shrink: 0; display: flex; flex-direction: column; gap: 2px;
}
.sidebar-title { font-size: 16px; font-weight: 700; margin-bottom: 2px; }
.sidebar-sub { font-size: 12px; color: var(--muted); margin-bottom: 12px; }
.nav-item {
  display: flex; align-items: center; gap: 10px;
  padding: 10px 14px; border-radius: 10px; font-size: 14px; color: var(--ink);
  transition: background 0.15s;
}
.nav-item:hover { background: var(--soft); }
.nav-item.router-link-active { background: var(--active); font-weight: 700; }
.sidebar-notice {
  margin-top: auto; padding: 14px; background: var(--soft); border-radius: 12px;
}
.notice-title { font-size: 13px; font-weight: 700; margin-bottom: 6px; }
.notice-item { font-size: 11px; color: var(--muted); line-height: 1.8; }
.main-content { flex: 1; padding: 24px; overflow-y: auto; }
</style>
