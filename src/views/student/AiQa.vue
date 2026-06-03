<template>
  <div>
    <div class="breadcrumb"><span class="muted">学生端 / 学科知识问答 / 理论溯源</span></div>
    <div class="page-header">
      <h1>AI问答 / 学科知识问答</h1>
      <div class="header-actions">
        <el-button>停止生成</el-button>
        <el-button type="primary">继续追问</el-button>
      </div>
    </div>
    <p class="page-desc">参考 NotebookLM 的资料区 + 对话区 + 引用区结构，突出理论溯源</p>

    <el-row :gutter="16" style="margin-top: 20px">
      <!-- 左侧：知识来源 -->
      <el-col :span="6">
        <el-card shadow="never" class="section-card">
          <template #header><strong>知识来源列表 / 历史提问</strong></template>
          <div v-for="(s, i) in sources" :key="i" style="margin-bottom: 14px">
            <div style="display: flex; justify-content: space-between">
              <strong style="font-size: 14px">{{ s.title }}</strong>
              <el-tag size="small" type="info">{{ s.tag }}</el-tag>
            </div>
            <div class="muted" style="font-size: 12px; margin-top: 2px">{{ s.desc }}</div>
            <el-divider v-if="i < sources.length - 1" style="margin: 10px 0" />
          </div>
        </el-card>
      </el-col>

      <!-- 中间：对话区 -->
      <el-col :span="11">
        <el-card shadow="never" class="section-card" style="height: calc(100vh - 220px)">
          <template #header><strong>AI 对话区</strong></template>

          <div class="chat-area">
            <div v-for="(msg, i) in chatHistory" :key="i" class="msg-row" :class="{ user: msg.role === '我' }">
              <div class="msg-bubble" :class="{ user: msg.role === '我' }">
                <div class="msg-role">{{ msg.role }}</div>
                <div class="msg-text">{{ msg.content }}</div>
              </div>
            </div>
          </div>

          <div class="chat-input-area">
            <el-input placeholder="输入问题，继续追问 AI……" v-model="input" size="large">
              <template #append>
                <el-button :icon="'Promotion'">发送</el-button>
              </template>
            </el-input>
          </div>
        </el-card>
      </el-col>

      <!-- 右侧：引用与推荐 -->
      <el-col :span="7">
        <el-card shadow="never" class="section-card" style="height: calc(100vh - 220px)">
          <template #header><strong>引用区 / 相关知识点推荐</strong></template>

          <div class="ref-section">
            <strong style="font-size: 14px">本轮回答引用</strong>
            <ul class="ref-list">
              <li>教材第2章第1节：核心价值观的层次结构</li>
              <li>课件第14页：价值目标与行为规范统一</li>
              <li>案例库：社区志愿服务中的青年担当</li>
            </ul>
          </div>

          <el-divider style="margin: 14px 0" />

          <div class="ref-section">
            <strong style="font-size: 14px">相关知识点推荐</strong>
            <ul class="ref-list">
              <li v-for="t in relatedTopics" :key="t">{{ t }}</li>
            </ul>
          </div>

          <el-divider style="margin: 14px 0" />

          <div class="ref-section">
            <strong style="font-size: 14px">推荐追问</strong>
            <ul class="ref-list">
              <li v-for="q in suggestedQuestions" :key="q">{{ q }}</li>
            </ul>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { knowledgeSources as sources, chatHistory, relatedTopics, suggestedQuestions } from '../../mock/data.js'

const input = ref('')
</script>

<style scoped>
.breadcrumb { font-size: 12px; margin-bottom: 6px; }
.muted { color: var(--muted); }
.page-header { display: flex; justify-content: space-between; align-items: center; }
.page-header h1 { font-size: 26px; font-weight: 800; }
.header-actions { display: flex; gap: 10px; }
.page-desc { font-size: 13px; color: var(--muted); margin-top: 4px; }
.section-card { border-radius: 14px; border: 1px solid var(--line); background: var(--card); }
.chat-area { flex: 1; overflow-y: auto; padding-bottom: 16px; }
.msg-row { margin-bottom: 16px; }
.msg-bubble {
  display: inline-block; max-width: 80%;
  padding: 12px 16px; border-radius: 14px;
  background: var(--soft); border: 1px solid var(--line);
}
.msg-bubble.user { background: var(--card); border-color: #606060; margin-left: auto; }
.msg-role { font-size: 12px; font-weight: 700; color: var(--muted); margin-bottom: 4px; }
.msg-text { font-size: 13px; line-height: 1.6; }
.chat-input-area { margin-top: auto; padding-top: 12px; border-top: 1px solid var(--line); }
.ref-section { font-size: 13px; }
.ref-list { margin-top: 8px; padding-left: 16px; }
.ref-list li { font-size: 12px; color: var(--ink); margin-bottom: 6px; }
</style>
