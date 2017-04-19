# simple page demo
- demo-01：[一个简单的自适应页面demo](https://xiongamao.github.io/simple-demos/a-simple-page/index.html)
- demo-02：[简单的导航栏（仿多玩首页）](https://xiongamao.github.io/simple-demos/nav-demo/navigation.html)
- demo-03：[诗词填空题](https://xiongamao.github.io/simple-demos/yulu-generator/yulu-generator.html)
- demo-04：[特价时间倒数器](https://xiongamao.github.io/simple-demos/deal-of-the-day/deal-of-the-day.html)
- demo-05：[时钟](https://xiongamao.github.io/simple-demos/clock-1/clock.html)
- demo-06：[3D hover](https://xiongamao.github.io/simple-demos/3d-hover-demo/3d-hover.html)
- demo-07：[3D eye](https://xiongamao.github.io/simple-demos/3d-eyes/3d-eye.html)

## TODO LIST
1. demo-01[简单的自适应页面demo]
    - 为<img>添加图片源
    - 图片成比例缩放
    - 页面缩放动画应用
2. demo-02[简单的导航栏（仿多玩首页）]
    - 迷之bug：jsbin 会割裂情况，但是正常浏览器没有
    - 修复选中后border撑宽整个框体的bug
    - 修复 1px 割裂的问题
    - 添加box-shadow
    - 重写一个CSS样式的导航栏（使用其他方法）
3. demo-04[特价时间倒数器]
    - 时间长短设置
    - 根据日期进行设置，显示距离特价结束时间/开始时间的剩余时间
    - 特价价格设置 
4. demo-05
    - 优化阴影
    - 修复bug
5. demo-06
    - 添加动态简历进去

## ISSUES

1. demo-05
    - border画出的针会有锯齿
    - background画出的针`transition=all 0.3s cubic-bezier(.04, 1.8, .66, .8)`会在指针转动时留下阴影
2. demo-07
    - ~~由于transition:rotate(-45deg)的原因，旋转角度需要重新计算~~
    - 动画有点卡顿