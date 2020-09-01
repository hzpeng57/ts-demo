// Es6模块化

declare module 'jquery' {
  interface JqueryIntance {
    html: (html: string) => JqueryIntance;
  }

  // 混合类型
  function $(param: () => void): void;
  function $(selector: string): JqueryIntance;
  namespace $ {
    namespace fn {
      class init {}
    }
  }

  export = $;
}
