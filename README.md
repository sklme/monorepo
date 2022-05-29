## TODO

### 开发体验优化

1. pnpm run --parallel -r --filter 同步执行
2. [unbuild](https://github.com/unjs/unbuild) 执行每一个子目录的脚本
3. 或者是 tsup

### 发布

1. 研究 turbo 的流水线
2. 使用 turbo 管理发布流程

### 规范

1. eslint 共用部分的抽出
2. tsconfig 共用部分抽出
3. 加入 commitizen 工具管理

### 自动化测试

1. vitest
2. cypress(e2e)
3. nestjs test kit(base on jest)

### 参考链接

1. [vite 项目的构建参考](https://github.com/vitejs/vite)
2. [turbo 官方文档](https://turborepo.org/docs/core-concepts/pipelines)
3. [掘金：pnpm + workspace + changesets 构建你的 monorepo 工程](https://juejin.cn/post/7098609682519949325)
4. [掘金:Monorepo 下的模块包设计实践](https://juejin.cn/post/7052271542000074782)
5. [上面的示例代码](https://github.com/ycjcl868/monorepo)
6. [pnpm:run](https://pnpm.io/cli/run)
7. [pnpm:filtering](https://pnpm.io/filtering)
