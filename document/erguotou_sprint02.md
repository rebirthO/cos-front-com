# 迭代2的关键点总结
这次我的主要开发内容是Start up的详情和Bounty的详情

Start up的详情将每个模块拆分成一个组件，然后基础信息模块作为一个上层组件保持固定，下面的内容通过组件插入即可。

Bounty的详情目前是集中在一起，主要是抽象了Description组件和钱包地址链接组件来统一。