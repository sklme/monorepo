import { defineComponent } from 'vue';
import testTSXStyle from '@/components/TestComp/TestTSX.module.less';

export default defineComponent({
  render: () => (
    <div class={testTSXStyle.testTsx}>
      外面的innerText
      <div class={testTSXStyle.innerElem}>里面的元素</div>
      <div class="global-style__test">全局样式</div>
    </div>
  ),
});
