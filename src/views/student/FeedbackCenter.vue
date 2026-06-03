<template>
  <div>
    <div class="breadcrumb"><span class="muted">学生端 / 课后反馈 / 作业与批改</span></div>
    <div class="page-header"><h1>课后反馈中心</h1></div>
    <p class="page-desc">查看作业批改结果、AI评语和改进建议</p>

    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="16">
        <el-card shadow="never" class="card" v-for="(f, i) in feedbacks" :key="i" style="margin-bottom: 16px">
          <div style="display: flex; justify-content: space-between; align-items: flex-start">
            <div style="flex: 1">
              <div style="display: flex; align-items: center; gap: 10px">
                <strong style="font-size: 16px">{{ f.title }}</strong>
                <el-tag :type="f.scoreType">{{ f.score }} 分</el-tag>
              </div>
              <p class="muted" style="margin-top: 6px; line-height: 1.6">{{ f.comment }}</p>
              <div style="margin-top: 8px">
                <el-tag size="small" v-for="t in f.tags" :key="t" style="margin-right: 6px">{{ t }}</el-tag>
              </div>
            </div>
            <el-button>查看详情</el-button>
          </div>
        </el-card>
      </el-col>

      <el-col :span="8">
        <el-card shadow="never" class="card">
          <template #header><strong>成绩概览</strong></template>
          <div style="display: flex; gap: 12px; margin-bottom: 16px">
            <div class="stat-box"><div class="stat-num">85</div><div class="muted">均分</div></div>
            <div class="stat-box"><div class="stat-num">3</div><div class="muted">已批</div></div>
            <div class="stat-box"><div class="stat-num">1</div><div class="muted">待批</div></div>
          </div>
          <el-divider />
          <strong>改进方向</strong>
          <div class="muted" style="margin-top: 8px; line-height: 1.8">· 加强案例论证的深度<br/>· 注意理论概念的准确表达<br/>· 结论部分增加价值引导</div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
const feedbacks = [
  { title: '课堂讨论总结', score: 88, scoreType: 'success', comment: '观点清晰，能从个人实际出发谈践行。建议进一步结合社会层面的制度建设展开论述。', tags: ['观点清晰', '建议深化'] },
  { title: '社会主义核心价值观学习心得', score: 82, scoreType: '', comment: '理论概念基本准确，但在案例论证的深度上还可以加强。可以尝试用所学原理解释社会现象。', tags: ['概念准确', '案例不足'] },
  { title: '志愿服务与青年担当小论文', score: 85, scoreType: 'success', comment: '结合自身志愿经历论述，内容充实。结构上建议先理论阐述再案例分析。', tags: ['内容充实', '结构可优化'] }
]
</script>

<style scoped>
.breadcrumb { font-size: 12px; margin-bottom: 6px; }
.muted { color: var(--muted); font-size: 13px; }
.page-header h1 { font-size: 26px; font-weight: 800; }
.page-desc { font-size: 13px; color: var(--muted); margin-top: 4px; }
.card { border-radius: 14px; border: 1px solid var(--line); background: var(--card); }
.stat-box { flex: 1; text-align: center; padding: 14px; background: var(--soft); border-radius: 12px; border: 1px dashed var(--line); }
.stat-num { font-size: 28px; font-weight: 800; }
</style>
