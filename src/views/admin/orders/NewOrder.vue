<template>
    <div class="content mt-3">
        <div class="animated fadeIn">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <strong class="card-title">New Order</strong>
                        </div>
                        <div class="card-body">
                            <table class="table table-striped">
                                <thead>
                                <tr>
                                    <th scope="row">#</th>
                                    <th>Nama Customer</th>
                                    <th>Nama Merchant</th>
                                    <th>Tanggal Order</th>
                                    <th>Alamat</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row"> 1</th>
                                    <td>nama Customer</td>
                                    <td>Nama Merchant</td>
                                    <td>tgl</td>
                                    <td> <span class="address"> alamatnya</span> </td>
                                    <td>
                                        <a href="/new-order/detail">
                                            <button type="button" class="btn btn-primary btn-sm" title="Lihat Detail">
                                                <i class="fa fa-eye"></i>
                                            </button>
                                        </a>
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