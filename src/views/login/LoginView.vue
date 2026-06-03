<template>
  <div class="login-page">
    <!-- 左侧说明区 -->
    <div class="login-left">
      <div class="brand">
        <span class="brand-logo">AI</span>
        <div>
          <div class="brand-name">智教AI教学平台</div>
          <div class="brand-sub">大学思政课智慧教学与学习支持系统</div>
        </div>
      </div>

      <h1 class="hero-title">统一入口，按身份进入对应工作空间</h1>
      <p class="hero-desc">学生完成导学、小测、问答与反馈；教师完成备课、课堂互动与批改复核；管理端负责审核治理与系统配置。</p>

      <div class="role-cards">
        <div class="role-card" v-for="r in roles" :key="r.name">
          <div class="role-card-title">{{ r.name }}</div>
          <div class="role-card-desc" v-for="d in r.descs" :key="d">{{ d }}</div>
        </div>
      </div>

      <div class="login-flow">
        <h3>登录后跳转逻辑</h3>
        <p>1. 账号登录后识别身份角色：学生、教师、管理员。</p>
        <p>2. 多角色用户可在登录后选择进入具体工作空间。</p>
        <p>3. 登录态保存后，默认回到上次使用的课程与页面。</p>
        <p>4. 管理端高风险操作需二次确认或校验。</p>
      </div>
    </div>

    <!-- 右侧登录表单 -->
    <div class="login-right">
      <div class="login-card">
        <h2>登录平台</h2>
        <p class="login-sub">请选择身份并输入账号信息</p>

        <el-radio-group v-model="role" size="large" class="role-group">
          <el-radio-button value="student">学生</el-radio-button>
          <el-radio-button value="teacher">教师</el-radio-button>
          <el-radio-button value="admin">管理</el-radio-button>
        </el-radio-group>

        <div class="form-item">
          <label>账号</label>
          <el-input v-model="account" placeholder="学号 / 工号 / 手机号" size="large" />
        </div>

        <div class="form-item">
          <label>密码</label>
          <el-input v-model="password" placeholder="请输入密码" type="password" show-password size="large" />
        </div>

        <div class="form-extra">
          <el-checkbox v-model="remember">记住本设备</el-checkbox>
          <a class="forgot">忘记密码</a>
        </div>

        <el-button type="primary" size="large" class="login-btn" @click="login">登录</el-button>

        <el-divider />

        <div class="login-others">
          <el-button class="other-btn">统一身份认证</el-button>
          <el-button class="other-btn">扫码登录</el-button>
        </div>

        <p class="login-footer">登录即表示遵守平台教学数据与内容安全规范</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const role = ref('student')
const account = ref('')
const password = ref('')
const remember = ref(false)
const router = useRouter()

const roles = [
  { name: '学生端', descs: ['导学 / 小测 / AI问答', '作业反馈 / 学习报告'] },
  { name: '教师端', descs: ['AI备课 / 课前学情', '课堂互动 / 批改复核'] },
  { name: '管理端', descs: ['用户 / 课程 / 知识库', '审核 / 权限 / 日志'] }
]

function login() {
  router.push(`/${role.value}/dashboard`)
}
</script>

<style scoped>
.login-page { display: flex; min-height: 100vh; }
.login-left {
  flex: 1; background: #e6e4de;
  padding: 48px 60px; display: flex; flex-direction: column; gap: 24px;
}
.brand { display: flex; align-items: center; gap: 14px; }
.brand-logo {
  width: 52px; height: 52px; display: flex; align-items: center; justify-content: center;
  background: #fcfcfa; border-radius: 14px; font-size: 22px; font-weight: 800;
}
.brand-name { font-size: 24px; font-weight: 800; }
.brand-sub { font-size: 13px; color: #6f6f6f; }
.hero-title { font-size: 30px; font-weight: 800; line-height: 1.4; }
.hero-desc { font-size: 14px; color: #6f6f6f; line-height: 1.8; }
.role-cards { display: flex; gap: 16px; }
.role-card {
  flex: 1; background: #fcfcfa; border-radius: 16px; padding: 16px 18px;
  border: 1px solid #c9c9c9;
}
.role-card-title { font-size: 16px; font-weight: 800; margin-bottom: 4px; }
.role-card-desc { font-size: 12px; color: #6f6f6f; }
.login-flow {
  background: #efeee9; border-radius: 16px; padding: 20px 24px;
  border: 1px dashed #c9c9c9;
}
.login-flow h3 { font-size: 16px; margin-bottom: 8px; }
.login-flow p { font-size: 12px; color: #6f6f6f; line-height: 2; }
.login-right {
  width: 480px; display: flex; align-items: center; justify-content: center;
  background: #f7f6f2; padding: 48px;
}
.login-card {
  width: 100%; background: #fff; border-radius: 24px; padding: 40px 36px;
  border: 1px solid #c9c9c9; text-align: center;
}
.login-card h2 { font-size: 26px; font-weight: 800; }
.login-sub { font-size: 13px; color: #8a8a8a; margin: 6px 0 24px; }
.role-group { margin-bottom: 24px; }
.form-item { text-align: left; margin-bottom: 16px; }
.form-item label { display: block; font-size: 14px; font-weight: 700; margin-bottom: 6px; }
.form-extra { display: flex; justify-content: space-between; align-items: center; font-size: 13px; margin-bottom: 4px; }
.forgot { color: #2f2f2f; font-weight: 700; cursor: pointer; }
.login-btn { width: 100%; height: 48px; font-size: 16px; }
.login-others { display: flex; gap: 12px; justify-content: center; }
.other-btn { flex: 1; }
.login-footer { font-size: 11px; color: #8a8a8a; margin-top: 14px; }
</style>
