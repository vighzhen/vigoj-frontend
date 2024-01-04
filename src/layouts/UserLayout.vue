<template>
  <div id="userLayout">
    <a-layout style="min-height: 400vh">
      <a-layout-header class="headers"> 用户布局 </a-layout-header>
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
#userLayout {
}

#userLayout .headers {
  margin-bottom: 16px;
}

#userLayout .content {
  background: linear-gradient(to right, #bbb, #fff);
  margin-bottom: 16px;
  padding: 15px;
}

#userLayout .footer {
  background: #efefef;
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
<script></script>
