<template>
  <div>
    <div class="breadcrumb"><span class="muted">教师端 / 课堂互动 / 随堂测验</span></div>
    <div class="page-header">
      <h1>随堂测验生成</h1>
      <el-button type="primary">AI 生成新题</el-button>
    </div>
    <p class="page-desc">基于当前教学章节，AI 自动生成随堂测验题目，支持教师编辑、筛选后推送到学生端</p>

    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="16">
        <el-card shadow="never" class="card">
          <template #header>
            <div style="display: flex; justify-content: space-between; align-items: center">
              <strong>题目列表（共 {{ questions.length }} 题）</strong>
              <div>
                <el-radio-group v-model="filter" size="small" style="margin-right: 12px">
                  <el-radio-button value="all">全部</el-radio-button>
                  <el-radio-button value="single">单选</el-radio-button>
                  <el-radio-button value="multi">多选</el-radio-button>
                </el-radio-group>
                <el-button type="primary" size="small">推送至学生端</el-button>
              </div>
            </div>
          </template>
          <div v-for="(q, i) in questions" :key="i" class="question-card">
            <div style="display: flex; align-items: flex-start; gap: 10px">
              <el-tag size="small" :type="q.type === '单选' ? '' : 'warning'">{{ q.type }}</el-tag>
              <div style="flex: 1">
                <strong>{{ i + 1 }}. {{ q.stem }}</strong>
                <div style="margin-top: 6px; display: flex; flex-direction: column; gap: 4px">
                  <div v-for="(opt, oi) in q.options" :key="oi" class="muted"> {{ opt.key }}. {{ opt.text }}</div>
                </div>
                <div style="margin-top: 8px; display: flex; gap: 8px; align-items: center">
                  <el-tag size="small" type="success">答案: {{ q.answer }}</el-tag>
                  <span class="muted small">来源: {{ q.source }}</span>
                </div>
              </div>
              <div style="display: flex; flex-direction: column; gap: 6px">
                <el-button size="small">编辑</el-button>
                <el-button size="small" type="danger">移除</el-button>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>

      <el-col :span="8">
        <el-card shadow="never" class="card">
          <template #header><strong>题目配置</strong></template>
          <el-form label-width="80px" size="small">
            <el-form-item label="关联章节"><el-select v-model="chapter" style="width: 100%"><el-option v-for="ch in chapters" :key="ch" :label="ch" :value="ch" /></el-select></el-form-item>
            <el-form-item label="题目数量"><el-slider v-model="count" :min="3" :max="10" show-input style="width: 100%" /></el-form-item>
            <el-form-item label="题型比例"><el-radio-group v-model="ratio"><el-radio value="balanced">均衡</el-radio><el-radio value="singleMore">单选为主</el-radio></el-radio-group></el-form-item>
            <el-form-item label="难度"><el-radio-group v-model="difficulty"><el-radio value="easy">偏易</el-radio><el-radio value="medium">中等</el-radio><el-radio value="hard">偏难</el-radio></el-radio-group></el-form-item>
            <el-form-item><el-button type="primary" style="width: 100%">重新生成</el-button></el-form-item>
          </el-form>
        </el-card>

        <el-card shadow="never" class="card" style="margin-top: 16px">
          <template #header><strong>推送状态</strong></template>
          <div style="text-align: center; padding: 20px 0">
            <el-progress type="dashboard" :percentage="0" :width="100">
              <template #default><span style="font-size: 12px; color: var(--muted)">未推送</span></template>
            </el-progress>
            <p class="muted" style="margin-top: 12px">当前测验尚未推送给学生</p>
            <el-divider />
            <div class="muted small">· 推送后学生将立即收到测验通知</div>
            <div class="muted small">· 默认限时 5 分钟完成</div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const filter = ref('all')
const chapter = ref('第二章 社会主义核心价值观')
const chapters = ['第一章 导论', '第二章 社会主义核心价值观', '第三章 法治与德治', '第四章 文化自信']
const count = ref(5)
const ratio = ref('balanced')
const difficulty = ref('medium')

const questions = [
  { type: '单选', stem: '社会主义核心价值观在国家层面的价值目标是？', options: [{ key: 'A', text: '富强、民主、文明、和谐' }, { key: 'B', text: '自由、平等、公正、法治' }, { key: 'C', text: '爱国、敬业、诚信、友善' }], answer: 'A', source: '教材第2章第1节' },
  { type: '单选', stem: '大学生参与志愿服务活动最能体现以下哪项价值准则？', options: [{ key: 'A', text: '法治' }, { key: 'B', text: '友善' }, { key: 'C', text: '敬业' }], answer: 'B', source: '教材第2章第3节' },
  { type: '多选', stem: '以下哪些属于公民个人层面的价值准则？', options: [{ key: 'A', text: '爱国' }, { key: 'B', text: '敬业' }, { key: 'C', text: '诚信' }, { key: 'D', text: '友善' }], answer: 'ABCD', source: '教材第2章第1节' },
  { type: '单选', stem: '社会主义核心价值体系的灵魂是？', options: [{ key: 'A', text: '马克思主义指导思想' }, { key: 'B', text: '中国特色社会主义共同理想' }, { key: 'C', text: '民族精神与时代精神' }], answer: 'A', source: '教材第2章第2节' },
  { type: '多选', stem: '培育和践行社会主义核心价值观的途径包括？', options: [{ key: 'A', text: '学习教育' }, { key: 'B', text: '实践养成' }, { key: 'C', text: '制度保障' }, { key: 'D', text: '文化熏陶' }], answer: 'ABCD', source: '教材第2章第4节' }
]
</script>

<style scoped>
.breadcrumb { font-size: 12px; margin-bottom: 6px; }
.muted { color: var(--muted); font-size: 13px; }
.muted.small { font-size: 12px; }
.page-header { display: flex; justify-content: space-between; align-items: center; }
.page-header h1 { font-size: 26px; font-weight: 800; }
.page-desc { font-size: 13px; color: var(--muted); margin-top: 4px; }
.card { border-radius: 14px; border: 1px solid var(--line); background: var(--card); }
.question-card { padding: 16px; margin-bottom: 12px; background: var(--soft); border-radius: 12px; border: 1px dashed var(--line); }
.question-card:last-child { margin-bottom: 0; }
</style>
