<template>
    <div class="content mt-3">
        <div class="animated fadeIn">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <strong class="card-title">Detail Order</strong>
                        </div>
                        <div class="card-body">
                            <div class="typo-headers">
                                <h3 class="pb-2 display-5"># 21893</h3>
                            </div>
                            <div class="typo-articles">
                                <blockquote class="blockquote mt-3 text-left">
                                    <p> 1 Januari 2019 </p>
                                    <footer class="blockquote-footer"><b> Nama customer disini</b></footer>
                                </blockquote>
                            </div>

                            <div class="vue-lists">
                                <h4 class="mb-4">Product List</h4>
                                <div class="row">
                                    <div class="col-md-12">
                                        <table class="table table-striped">
                                            <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Product Name</th>
                                                <th scope="col">Qty</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Discount (%)</th>
                                                <th scope="col">Total</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <th scope="row"> 1 </th>
                                                <td>ulos ragihotang</td>
                                                <td>2</td>
                                                <td>IDR 500000</td>
                                                <td>0%</td>
                                                <td>IDR 1000000</td>
                                            </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div class="vue-misc">
                                <div class="row">
                                    <div class="col-md-6">
                                    </div>

                                    <div class="col-md-6">
                                        <table class="table">
                                            <tr>
                                                <th scope="row">
                                                    Sum
                                                </th>
                                                <td>
                                                    IDR700000
                                                </td>
                                            </tr>

                                            <tr>
                                                <th>
                                                    Discount
                                                </th>
                                                <td>
                                                    0%
                                                </td>
                                            </tr>

                                            <tr>
                                                <th>
                                                    Total price
                                                </th>
                                                <th>
                                                    IDR700000
                                                </th>
                                            </tr>

                                        </table>
                                    </div>

                                </div>
                            </div>
                            <br>

                            <div class="vue-misc">
                                <!-- <h2 class="display-5 my-3">Misc</h2> -->
                                <div class="row">
                                    <div class="col-md-6">
                                        <h3>Address</h3>
                                        <address class="mt-3">
                                            transaction->address <br>
                                            Sitoluama, Laguboti, 22474<br>
                                            transaction->customer->email
                                        </address>
                                    </div>
                                    <div class="col-md-6">
                                        <h3 class="mb-3">Proof of Payment</h3>
                                        if $transaction->payment->proof
                                        <div class="jumbotron">
                                            <img class="card-img-top" src="" alt="Resi pembayaran">
                                        </div>
                                        else
                                        <div class="jumbotron align-center">
                                            <h3 class="text-danger"> Not Paid Yet </h3>
                                        </div>
                                        endif
                                    </div>
                                </div>
                            </div>

                            <div class="card-body">
                                <form action="/transaction/update-status" method="POST">

                                    <input type="hidden" name="status" value="acceptedByAdmin" />
                                    <button type="submit" class="btn btn-primary btn-lg btn-block">Accept</button>
                                </form>
                            </div>
                            <div class="card-body">
                                <form action="/transaction/update-status" method="POST">

                                    <input type="hidden" name="status" value="rejectedByAdmin" />
                                    <button type="submit" class="btn btn-danger btn-lg btn-block">Reject</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>