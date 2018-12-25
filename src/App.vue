<template>
    <div class="app">
        <Header/>
        <Sidebar/>
        <main>
            <router-view/>
        </main>
    </div>
</template>


<script>
    import Header from "@/components/layouts/Header.vue";
    import Sidebar from "@/components/layouts/Sidebar.vue";
    export default {
        name: "app",
        components: {
            Header,
            Sidebar
        }
    };
</script>


