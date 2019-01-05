<template>
    <div class="content mt-3">
        <div class="animated fadeIn">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <strong class="card-title">New Merchant</strong>
                        </div>
                        <div class="card-body">
                            <table class="table">
                                <thead>
                                <tr>
                                    <th class="serial">#</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Phone</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row"> 1 </th>
                                    <td>Tota</td>
                                    <td>
                                        alamat disini
                                    </td>
                                    <td>081234567</td>
                                    <td>
                                        <form action="/merchantconfirmed" method="POST">

                                            <button type="Submit" class="btn btn-primary"> Konfirmasi</button>
                                        </form>
                                    </td>
                                </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>