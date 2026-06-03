import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: () => import('../views/login/LoginView.vue') },

    // ===== 学生端 =====
    {
      path: '/student',
      component: () => import('../layouts/StudentLayout.vue'),
      children: [
        { path: '', redirect: '/student/dashboard' },
        { path: 'dashboard', component: () => import('../views/student/StudentDashboard.vue') },
        { path: 'pre-study', component: () => import('../views/student/PreStudyCenter.vue') },
        { path: 'pre-study-quiz', component: () => import('../views/student/PreStudyQuiz.vue') },
        { path: 'class-interaction', component: () => import('../views/student/ClassInteractionCenter.vue') },
        { path: 'in-class-quiz', component: () => import('../views/student/InClassQuiz.vue') },
        { path: 'ai-qa', component: () => import('../views/student/AiQa.vue') },
        { path: 'feedback', component: () => import('../views/student/FeedbackCenter.vue') },
        { path: 'learning-report', component: () => import('../views/student/LearningReport.vue') },
        { path: 'notifications', component: () => import('../views/student/Notifications.vue') },
        { path: 'profile', component: () => import('../views/student/Profile.vue') }
      ]
    },

    // ===== 教师端 =====
    {
      path: '/teacher',
      component: () => import('../layouts/TeacherLayout.vue'),
      children: [
        { path: '', redirect: '/teacher/dashboard' },
        { path: 'dashboard', component: () => import('../views/teacher/TeacherDashboard.vue') },
        { path: 'lesson-design', component: () => import('../views/teacher/LessonDesign.vue') },
        { path: 'preclass-analytics', component: () => import('../views/teacher/PreClassAnalytics.vue') },
        { path: 'class-interaction', component: () => import('../views/teacher/ClassInteraction.vue') },
        { path: 'live-quiz', component: () => import('../views/teacher/LiveQuizGeneration.vue') },
        { path: 'grading-review', component: () => import('../views/teacher/GradingReview.vue') },
        { path: 'class-report', component: () => import('../views/teacher/ClassLearningReport.vue') },
        { path: 'resource-library', component: () => import('../views/teacher/ResourceLibrary.vue') }
      ]
    },

    // ===== 管理端 =====
    {
      path: '/admin',
      component: () => import('../layouts/AdminLayout.vue'),
      children: [
        { path: '', redirect: '/admin/dashboard' },
        { path: 'dashboard', component: () => import('../views/admin/AdminDashboard.vue') },
        { path: 'user-management', component: () => import('../views/admin/UserManagement.vue') },
        { path: 'course-management', component: () => import('../views/admin/CourseClassManagement.vue') },
        { path: 'knowledge-base', component: () => import('../views/admin/KnowledgeBase.vue') },
        { path: 'ai-review', component: () => import('../views/admin/AiReview.vue') },
        { path: 'assignment-management', component: () => import('../views/admin/AssignmentManagement.vue') },
        { path: 'analytics', component: () => import('../views/admin/Analytics.vue') },
        { path: 'audit-log', component: () => import('../views/admin/AuditLog.vue') },
        { path: 'system-settings', component: () => import('../views/admin/SystemSettings.vue') },
        { path: 'role-permission', component: () => import('../views/admin/RolePermission.vue') }
      ]
    }
  ]
})

export default router
