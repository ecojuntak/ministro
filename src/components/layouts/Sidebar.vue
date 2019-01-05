<template>
    <aside id="left-panel" class="left-panel">
        <nav class="navbar navbar-expand-sm navbar-default">

            <div class="navbar-header">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-menu" aria-controls="main-menu" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand" href="/"><img src="../../admin-assets/images/logo.png" alt="Logo"></a>
                <a class="navbar-brand hidden" href="/"><img src="../../admin-assets/images/logo2.png" alt="Logo"></a>
            </div>

            <div id="main-menu" class="main-menu collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <h3 class="menu-title">Merchant</h3>
                    <li> <a href="/new-merchant"> <i class="menu-icon fa fa-user"></i>New Register Merchant </a> </li>
                    <li> <a href="/merchant"> <i class="menu-icon fa fa-users"></i>List of Merchant </a> </li>

                    <h3 class="menu-title">Order</h3>
                    <li> <a href=""> <i class="menu-icon fa fa-archive"></i> New Order </a> </li>
                    <li> <a href=""> <i class="menu-icon fa fa-archive"></i> Unpaid Order </a> </li>
                    <li> <a href=""> <i class="menu-icon fa fa-archive"></i> Paid Order </a> </li>
                    <li> <a href=""> <i class="menu-icon fa fa-archive"></i> Invalid Order </a> </li>
                    <li> <a href=""> <i class="menu-icon fa fa-archive"></i> On Process Order </a> </li>
                    <li> <a href=""> <i class="menu-icon fa fa-archive"></i> Successed Order </a> </li>

                    <h3 class="menu-title">View</h3>
                    <li> <a href="/carousel"> <i class="menu-icon fa fa-star"></i> Carousel </a> </li>
                    <li> <a href="/banner"> <i class="menu-icon fa fa-bookmark"></i> Banner </a> </li>
                    <li> <a href=""> <i class="menu-icon fa fa-stack-exchange"></i> Blogs </a> </li>

                    <h3 class="menu-title">Role & Permissions</h3>

                    <li> <a href=""> <i class="menu-icon fa fa-users"></i> Roles </a> </li>
                    <li> <a href=""> <i class="menu-icon fa fa-user"></i> Permissions </a> </li>
                </ul>
            </div>
        </nav>
    </aside>
</template>