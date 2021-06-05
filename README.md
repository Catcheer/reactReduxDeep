## connect

使 component 和 redux 之间 建立连接
mapStateToprops 将 state 数据映射到 component,其中 State 来源于 Povider store
mapDispatchToprops 将方法映射到 component,如果不传此参数,则将 dispatch 方法传到被包裹的组件.此方法返回到对象传到子组件,但此时未经 dispatch 包装.给方法包装 dipatch 用 bindActionCreators

## bindActionCreators
