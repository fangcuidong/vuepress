## codePush常用命令

功能 | 命令
---|---
安装 | `npm install -g code-push-cli`
注册账号 | `code-push register`
登陆 | `code-push login`
注销 | `code-push logout`
添加项目 | `code-push app add [app名称]`
删除项目| `code-push app remove [app名称]`
列出账号下的所有项目 | `code-push app list`
显示登陆的token | `code-push access-key ls`
删除某个access-key | `code-push access-key rm <accessKey>`
添加协作人员 | `code-push collaborator add <appName> next@126.com`
部署一个环境 | `code-push deployment add <appName> <deploymentName>`
删除部署 | `code-push deployment rm <appName>`
列出应用的部署 | `code-push deployment ls <appName>`
查询部署环境的key | `code-push deployment ls <appName> -k`
查看部署的历史版本信息 | `code-push deployment history <appName> <deploymentNmae>`
重命名一个部署 | `code-push deployment rename <appName> <currentDeploymentName> <newDeploymentName>`