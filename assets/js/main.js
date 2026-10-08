// 1. 判断当前页面在哪个目录：URL 路径里含 /works/ 就是详情页
const ROOT = location.pathname.includes('/works/') ? '..' : '.';

// 2. 导航的单一数据源
const NAV_HTML = `
  <ul class="nav-menu">
    <li><a href="{root}/index.html">首页</a></li>

    <li position="relative">
        <a href="{root}/index.html#works">我的作品</a>
        <ul class="dropdown">
            <li><a href="{root}/works/work1.html">1：美美</a></li>
            <li><a href="{root}/works/work2.html">2：随机井字棋</a></li>
            <li><a href="{root}/works/work3.html">3：我也不知道是啥</a></li>
            <li><a href="{root}/works/work4.html">4：我也不知道是啥</a></li>
            <li><a href="{root}/works/work5.html">5：杀死一个炼金术师</a></li>
        </ul>
    </li>

    <li><a href="{root}/thanks.html">致谢</a></li>

  </ul>
`;

// 3. 找到容器，替换占位符后注入
document.querySelector('#site-nav').innerHTML = NAV_HTML.replaceAll('{root}', ROOT);