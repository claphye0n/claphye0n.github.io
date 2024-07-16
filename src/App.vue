<template>
  <div class="wrap">
  <Header></Header>
  <Main></Main>
  <Footer></Footer>
  </div>
</template>

<script>
  import Header from './layout/Header.vue';
  import Footer from './layout/Footer.vue';
  import Main from './pages/main/MainPage.vue';

  const App = {
      data: () => {
      },
      methods: {
          
      },
      watch: {
      },
      computed: {
      },
      components: {
          'Header': Header,
          'Main': Main,
          'Footer': Footer,
      },
      mounted: () => {
      }
  }

  export default App;
</script>

<style></style>