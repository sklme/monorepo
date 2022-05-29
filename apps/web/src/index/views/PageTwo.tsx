import style from '@/index/views/PageTwo.module.less';

function render() {
  return (
    <div class="page-2">
      <div class={style.title}>页面2</div>
      <div class={style.pageDesc}>这个页面2，使用tsx编写</div>
      <div class="the-red">红色红色</div>
    </div>
  );
}

// [Vue Router warn]: Component "default" in record with path "/page-2" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.
render.displayName = 'page2';

export default render;
