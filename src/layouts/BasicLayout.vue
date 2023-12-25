<template>
  <div id="basicLayout">
    <a-layout style="height: 400px">
      <a-layout-header class="headers">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <a> vigOj by vighzhen </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<style>
#basicLayout {
}

#basicLayout .headers {
  margin-bottom: 16px;
}

#basicLayout .content {
  background: linear-gradient(to right, #bbb, #fff);
  margin-bottom: 16px;
}

#basicLayout .footer {
  background: #efefef;
  padding: 16px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
<script>
import GlobalHeader from "@/components/GlobalHeader";

export default {
  components: { GlobalHeader },
};
</script>
