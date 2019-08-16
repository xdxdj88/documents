(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{382:function(a,s,t){"use strict";t.r(s);var n=t(28),e=Object(n.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"准备环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备环境","aria-hidden":"true"}},[a._v("#")]),a._v(" 准备环境")]),a._v(" "),t("p",[a._v("在使用 Nginx 前，最好先去创建一个 "),t("a",{attrs:{href:"/OS/centos/add-user"}},[a._v("Linux 用户")]),a._v(" 账号。")]),a._v(" "),t("h3",{attrs:{id:"_1-基本环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-基本环境","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. 基本环境")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum -y "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" gcc gcc-c++ autoconf pcre-devel "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" automake\nyum -y "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" httpd-tools vim\n")])])]),t("h3",{attrs:{id:"_2-管理资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-管理资源","aria-hidden":"true"}},[a._v("#")]),a._v(" 2. 管理资源")]),a._v(" "),t("p",[a._v("在用户目录下新建几个文件夹来管理所有的资源。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# app 为 application 简写")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# backup 备份")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# logs 日志")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" app backup logs\n")])])]),t("h3",{attrs:{id:"_3-安装工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装工具","aria-hidden":"true"}},[a._v("#")]),a._v(" 3. 安装工具")]),a._v(" "),t("p",[a._v("RPM、YUM 和 APT 都可以安装和删除包。不过，个人习惯用 YUM 安装包，使用 "),t("code",[a._v("rpm -ql xxx")]),a._v(" 查看包相关的路径。")]),a._v(" "),t("h2",{attrs:{id:"nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx","aria-hidden":"true"}},[a._v("#")]),a._v(" Nginx")]),a._v(" "),t("h3",{attrs:{id:"_1-检测源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-检测源","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. 检测源")]),a._v(" "),t("p",[a._v("首先需要检查 yum 源是否有 Nginx，当没有的时候需要自己添加源。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum list "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" nginx\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# nginx.x86_64                             1:1.12.2-2.el7                  epel   ")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# nginx-all-modules.noarch                 1:1.12.2-2.el7                  epel   ")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# nginx-filesystem.noarch                  1:1.12.2-2.el7    ")]),a._v("\n")])])]),t("p",[t("a",{attrs:{href:"http://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("官网"),t("OutboundLink")],1),a._v(" 可见 Nginx 稳定版本已经是 "),t("code",[a._v("1.14.2")]),a._v(" ，所以需要"),t("a",{attrs:{href:"http://nginx.org/en/linux_packages.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("修改"),t("OutboundLink")],1),a._v(" yum 源。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("vim /etc/yum.repos.d/nginx.repo\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /etc/yum.repos.d/nginx.repo\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# [nginx-stable]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# name=nginx stable repo")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# baseurl=http://nginx.org/packages/centos/$releasever/$basearch/")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# gpgcheck=1")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# enabled=1")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# gpgkey=https://nginx.org/keys/nginx_signing.key")]),a._v("\n\n")])])]),t("p",[a._v("重新查看源。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum list "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" nginx \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# nginx.x86_64                             1:1.14.2-1.el7_4.ngx            nginx-stable")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# nginx-all-modules.noarch                 1:1.12.2-2.el7                  epel   ")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# nginx-debug.x86_64                       1:1.8.0-1.el7.ngx               nginx-stable")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# nginx-debuginfo.x86_64                   1:1.14.2-1.el7_4.ngx            nginx-stable")]),a._v("\n")])])]),t("h3",{attrs:{id:"_2-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装","aria-hidden":"true"}},[a._v("#")]),a._v(" 2. 安装")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" nginx\n")])])]),t("h3",{attrs:{id:"_3-查看版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-查看版本","aria-hidden":"true"}},[a._v("#")]),a._v(" 3. 查看版本")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("nginx -v\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# nginx version: nginx/1.14.2")]),a._v("\n")])])])])},[],!1,null,null,null);s.default=e.exports}}]);