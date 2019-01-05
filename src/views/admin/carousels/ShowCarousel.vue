<template>
    <div class="content mt-3">
        <div class="animated fadeIn">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <img class="card-img-top" src="../../../admin-assets/images/admin.jpg" alt="banner" height="300">

                            <p class="card-text"> description</p>
                            <a href="#">
                                <button type="button" class="btn btn-link btn-sm"><i class="fa fa-link"></i>&nbsp; https://uloszone.com</button></a>
                            <br>

                            <div class="pull-right">
                                <div class="col-3 mr-3">
                                    <a href="/carousel/edit" class="btn btn-primary"> Edit </a>
                                </div>

                                <div class="col-3">
                                    <form method="POST" action="/carousels/delete">

                                        <button class="btn btn-danger"> Delete </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>