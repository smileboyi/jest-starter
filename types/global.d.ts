declare namespace globalThis {
  // 一定要用var定义，不然类型不生效
  var jsdom: any;
}

declare module "*.less" {
  const content: any;
  export default content;
}
