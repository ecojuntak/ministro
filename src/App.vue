<template>
    <body>
    <div class="app">

        </div>
        <Sidebar/>

        <div id="right-panel" class="right-panel">
            <Header/>
            <main>
                <router-view/>

                <!--<div style="width:100%">content here </div>-->
            </main>
        </div>


    </body>
</template>


<script>
    import Header from "@/components/layouts/Header"
    import Sidebar from "@/components/layouts/Sidebar"
    export default {
        name: "app",
        components: {
            Header,
            Sidebar
        }
    };
</script>


