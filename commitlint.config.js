module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        // 打包优化
        "build",
        // 杂活
        "chore",
        // ci cd相关
        "ci",
        // 文档修改
        "docs",
        // 新功能开发
        "feat",
        // bug修复
        "fix",
        // 性能优化
        "perf",
        // 重构
        "refactor",
        // 还原
        "revert",
        // 代码格式
        "style",
        // 单元测试
        "test",
      ],
    ],
  },
};
