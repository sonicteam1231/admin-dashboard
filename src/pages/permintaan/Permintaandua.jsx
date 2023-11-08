import React from 'react'

const Permintaandua = () => {
  return (
    <div className='"container-fluid px-4 mt-n10'>

    
                    <div class="card mb-4">
                                    <div class="card-header">Permintaan ATK</div>
                                    <div class="card-body">
                                        <form>
                                             {/* <!-- Form Group (Roles)--> */}
                                             <div class="mb-3">
                                                <label class="small mb-1">Sub Kegiatan :</label>
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected="" disabled="">Pilih kegiatan:</option>
                                                    <option value="administrator">Kerjasama Internal</option>
                                                    <option value="registered">TPKD</option>
                                                    <option value="edtior">Pemuktahiran APIP dan BPK</option>
                                                    <option value="guest">PMPRB & SAKIP</option>
                                                </select>
                                            </div>

                                            
                                            {/* <!-- Form Row--> */}
                                            <div class="row gx-3 mb-3">
                                                {/* <!-- Form Group (first name)--> */}
                                                <div class="col-md-6">
                                                    <label class="small mb-1" for="inputFirstName">Nama</label>
                                                    <input class="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" value=""/>
                                                </div>
                                                {/* <!-- Form Group (last name)--> */}
                                                <div class="col-md-6">
                                                    <label class="small mb-1" for="inputLastName">Last name</label>
                                                    <input class="form-control" id="inputLastName" type="text" placeholder="Enter your last name" value=""/>
                                                </div>
                                            </div>
                                            {/* <!-- Form Group (email address)--> */}
                                            <div class="mb-3">
                                                <label class="small mb-1" for="inputEmailAddress">Email address</label>
                                                <input class="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" value=""/>
                                            </div>
                                            {/* <!-- Form Group (Group Selection Checkboxes)--> */}
                                            <div class="mb-3">
                                                <label class="small mb-1">Group(s)</label>
                                                <div class="form-check">
                                                    <input class="form-check-input" id="groupSales" type="checkbox" value=""/>
                                                    <label class="form-check-label" for="groupSales">Sales</label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" id="groupDevs" type="checkbox" value=""/>
                                                    <label class="form-check-label" for="groupDevs">Developers</label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" id="groupMarketing" type="checkbox" value=""/>
                                                    <label class="form-check-label" for="groupMarketing">Marketing</label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" id="groupManagers" type="checkbox" value=""/>
                                                    <label class="form-check-label" for="groupManagers">Managers</label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" id="groupCustomer" type="checkbox" value=""/>
                                                    <label class="form-check-label" for="groupCustomer">Customer</label>
                                                </div>
                                            </div>
                                           
                                        {/* <!-- Submit button--> */}
                                            <button class="btn btn-primary" type="button">Add user</button>
                                        </form>
                                    </div>
                    </div>

               
               


            <div class="row gx-5">
            <div class="col-sm-8">
                  <div class="tab-content py-3 ps-sm-4 h-100">
                    <div class="tab-pane fade active show" id="pricingTabContent" role="tabpanel" aria-labelledby="#pricingTab">
                     
                      <div class="row g-3">
                        <div class="col-12 col-lg-6">
                          <h5 class="mb-2 text-1000">NAMA BARANG</h5>
                          <input class="form-control" type="text" placeholder="$$$"/>
                          <input class="form-control" type="text" placeholder="$$$"/>
                          <input class="form-control" type="text" placeholder="$$$"/>
                        </div>
                        <div class="col-12 col-lg-6">
                          <h5 class="mb-2 text-1000">JUMLAH BARANG</h5>
                          <td class="quantity align-middle fs-0 ps-5">
                          <div class="input-group input-group-sm flex-nowrap" data-quantity="data-quantity"><button class="btn btn-sm px-2" data-type="minus">-</button><input class="form-control text-center input-spin-none bg-transparent border-0 px-0" type="number" min="1" value="2" aria-label="Amount (to the nearest dollar)"/><button class="btn btn-sm px-2" data-type="plus">+</button></div>
                        </td>
                          <input class="form-control" type="text" placeholder="$$$"/>
                          <input class="form-control" type="text" placeholder="$$$"/>
                          <input class="form-control" type="text" placeholder="$$$"/>
                        </div>
                      </div>
                    </div>
                    
                  
                    </div>

                    
            </div>
            <div class="col-12 col-xl-4 col-xxl-3">
              <div class="row">
                <div class="col-12">
                  <div class="card mb-3">
                    <div class="card-body">
                      <h3 class="card-title mb-4">Summary</h3>
                      <div>
                        <div class="d-flex justify-content-between">
                          <p class="text-900 fw-semi-bold">Items subtotal :</p>
                          <p class="text-1100 fw-semi-bold">$691</p>
                        </div>
                        <div class="d-flex justify-content-between">
                          <p class="text-900 fw-semi-bold">Discount :</p>
                          <p class="text-danger fw-semi-bold">-$59</p>
                        </div>
                        <div class="d-flex justify-content-between">
                          <p class="text-900 fw-semi-bold">Tax :</p>
                          <p class="text-1100 fw-semi-bold">$126.20</p>
                        </div>
                        <div class="d-flex justify-content-between">
                          <p class="text-900 fw-semi-bold">Subtotal :</p>
                          <p class="text-1100 fw-semi-bold">$665</p>
                        </div>
                        <div class="d-flex justify-content-between">
                          <p class="text-900 fw-semi-bold">Shipping Cost :</p>
                          <p class="text-1100 fw-semi-bold">$30</p>
                        </div>
                      </div>
                      <div class="d-flex justify-content-between border-top border-dashed pt-4">
                        <h4 class="mb-0">Total :</h4>
                        <h4 class="mb-0">$695.20</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="card">
                    <div class="card-body">
                      <h4 class="card-title mb-4">Refund Amount</h4><input class="form-control mb-4" id="refundInput" type="text" placeholder="Amount"/><button class="btn btn-primary w-100">Refund $500</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row gx-5">
          <div class="col-sm-8">
          <table class="table fs--1 mb-0 border-top border-200">
                    <thead>
                      <tr>
                        <th class="sort white-space-nowrap align-middle fs--2" scope="col"></th>
                        <th class="sort white-space-nowrap align-middle" scope="col" style={{minWidth: '250px'}}>NAMA BARANG</th>
                        <th class="sort align-middle" scope="col" style={{width: '80px'}}>COLOR</th>
                        <th class="sort align-middle" scope="col" style={{width: '150px'}}>SIZE</th>
                        <th class="sort align-middle text-end" scope="col" style={{width: '80px'}}>PRICE</th>
                        <th class="sort align-middle ps-5" scope="col" style={{width: '200px'}}>QUANTITY</th>
                        <th class="sort align-middle text-end" scope="col" style={{width: '250px'}}>TOTAL</th>
                        <th class="sort text-end align-middle pe-0" scope="col"></th>
                      </tr>
                    </thead>
                    <tbody class="list" id="cart-table-body"><tr class="cart-table-row btn-reveal-trigger">
                        <td class="align-middle white-space-nowrap py-0"><a class="d-block border rounded-2" href="../../../apps/e-commerce/landing/product-details.html"><img src="../../../assets/img//products/1.png" alt="" width="53"/></a></td>
                        <input class="form-control" type="text" placeholder="$$$"/>
                        <td class="color align-middle white-space-nowrap fs--1 text-900">Glossy black</td>
                        <td class="size align-middle white-space-nowrap text-700 fs--1 fw-semi-bold">XL</td>
                        <td class="price align-middle text-900 fs--1 fw-semi-bold text-end">$199</td>
                        <td class="quantity align-middle fs-0 ps-5">
                          <div class="input-group input-group-sm flex-nowrap" data-quantity="data-quantity"><button class="btn btn-sm px-2" data-type="minus">-</button><input class="form-control text-center input-spin-none bg-transparent border-0 px-0" type="number" min="1" value="2" aria-label="Amount (to the nearest dollar)"/><button class="btn btn-sm px-2" data-type="plus">+</button></div>
                        </td>
                        <td class="total align-middle fw-bold text-1000 text-end">
                        <textarea class="tinymce" name="content" data-tinymce="{&quot;height&quot;:&quot;15rem&quot;,&quot;placeholder&quot;:&quot;Write a description here...&quot;}" id="mce_0" style={{display: 'none'}} aria-hidden="true">text</textarea>
                        
                        </td>
                        <td class="align-middle white-space-nowrap text-end pe-0 ps-3"><button class="btn btn-sm text-500 hover-text-600 me-2"><svg class="svg-inline--fa fa-trash" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"></path></svg>
                      
                        </button></td>
                      </tr><tr class="cart-table-row btn-reveal-trigger">
                        <td class="align-middle white-space-nowrap py-0"><a class="d-block border rounded-2" href="../../../apps/e-commerce/landing/product-details.html"><img src="../../../assets/img//products/2.png" alt="" width="53"/></a></td>
                        <td class="products align-middle"><a class="fw-semi-bold mb-0 line-clamp-2" href="../../../apps/e-commerce/landing/product-details.html">iPhone 13 pro max-Pacific Blue-128GB storage</a></td>
                        <td class="color align-middle white-space-nowrap fs--1 text-900">Glossy black</td>
                        <td class="size align-middle white-space-nowrap text-700 fs--1 fw-semi-bold">XL</td>
                        <td class="price align-middle text-900 fs--1 fw-semi-bold text-end">$150</td>
                        <td class="quantity align-middle fs-0 ps-5">
                          <div class="input-group input-group-sm flex-nowrap" data-quantity="data-quantity"><button class="btn btn-sm px-2" data-type="minus">-</button><input class="form-control text-center input-spin-none bg-transparent border-0 px-0" type="number" min="1" value="2" aria-label="Amount (to the nearest dollar)"/><button class="btn btn-sm px-2" data-type="plus">+</button></div>
                        </td>
                        <td class="total align-middle fw-bold text-1000 text-end">$300</td>
                        <td class="align-middle white-space-nowrap text-end pe-0 ps-3"><button class="btn btn-sm text-500 hover-text-600 me-2"><svg class="svg-inline--fa fa-trash" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"></path></svg>
                        
                        </button></td>
                      </tr><tr class="cart-table-row btn-reveal-trigger">
                        <td class="align-middle white-space-nowrap py-0"><a class="d-block border rounded-2" href="../../../apps/e-commerce/landing/product-details.html"><img src="../../../assets/img//products/3.png" alt="" width="53"/></a></td>
                        <td class="products align-middle"><a class="fw-semi-bold mb-0 line-clamp-2" href="../../../apps/e-commerce/landing/product-details.html">Apple MacBook Pro 13 inch-M1-8/256GB-space</a></td>
                        <td class="color align-middle white-space-nowrap fs--1 text-900">Glossy Golden</td>
                        <td class="size align-middle white-space-nowrap text-700 fs--1 fw-semi-bold">34mm</td>
                        <td class="price align-middle text-900 fs--1 fw-semi-bold text-end">$65</td>
                        <td class="quantity align-middle fs-0 ps-5">
                          <div class="input-group input-group-sm flex-nowrap" data-quantity="data-quantity"><button class="btn btn-sm px-2" data-type="minus">-</button><input class="form-control text-center input-spin-none bg-transparent border-0 px-0" type="number" min="1" value="2" aria-label="Amount (to the nearest dollar)"/><button class="btn btn-sm px-2" data-type="plus">+</button></div>
                        </td>
                        <td class="total align-middle fw-bold text-1000 text-end">$130</td>
                        <td class="align-middle white-space-nowrap text-end pe-0 ps-3"><button class="btn btn-sm text-500 hover-text-600 me-2"><svg class="svg-inline--fa fa-trash" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"></path></svg>
                       
                        </button></td>
                      </tr><tr class="cart-table-row btn-reveal-trigger">
                        <td class="text-1100 fw-semi-bold ps-0 fs-0" colspan="6">Items subtotal :</td>
                        <td class="text-1100 fw-bold text-end fs-0">$691</td>
                        <td></td>
                      </tr></tbody>
                  </table>
            </div>
            <div class="col-12 col-xl-4 col-xxl-3">
              <div class="row">
                <div class="col-12">
                  <div class="card mb-3">
                    <div class="card-body">
                      <h3 class="card-title mb-4">Summary</h3>
                      <div>
                        <div class="d-flex justify-content-between">
                          <p class="text-900 fw-semi-bold">Items subtotal :</p>
                          <p class="text-1100 fw-semi-bold">$691</p>
                        </div>
                        <div class="d-flex justify-content-between">
                          <p class="text-900 fw-semi-bold">Discount :</p>
                          <p class="text-danger fw-semi-bold">-$59</p>
                        </div>
                        <div class="d-flex justify-content-between">
                          <p class="text-900 fw-semi-bold">Tax :</p>
                          <p class="text-1100 fw-semi-bold">$126.20</p>
                        </div>
                        <div class="d-flex justify-content-between">
                          <p class="text-900 fw-semi-bold">Subtotal :</p>
                          <p class="text-1100 fw-semi-bold">$665</p>
                        </div>
                        <div class="d-flex justify-content-between">
                          <p class="text-900 fw-semi-bold">Shipping Cost :</p>
                          <p class="text-1100 fw-semi-bold">$30</p>
                        </div>
                      </div>
                      <div class="d-flex justify-content-between border-top border-dashed pt-4">
                        <h4 class="mb-0">Total :</h4>
                        <h4 class="mb-0">$695.20</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="card">
                    <div class="card-body">
                      <h4 class="card-title mb-4">Refund Amount</h4><input class="form-control mb-4" id="refundInput" type="text" placeholder="Amount"/><button class="btn btn-primary w-100">Refund $500</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Permintaandua