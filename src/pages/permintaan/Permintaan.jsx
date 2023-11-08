import React from 'react'

const Permintaan = () => {
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

                    <div class="row g-0 border-top border-bottom border-300">
                <div class="col-sm-4">
                  <div class="nav flex-sm-column border-bottom border-bottom-sm-0 border-end-sm border-300 fs--1 vertical-tab h-100 justify-content-between" role="tablist" aria-orientation="vertical"><a class="nav-link border-end border-end-sm-0 border-bottom-sm border-300 text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center active" id="pricingTab" data-bs-toggle="tab" data-bs-target="#pricingTabContent" role="tab" aria-controls="pricingTabContent" aria-selected="true"> <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-tag me-sm-2 fs-4 nav-icons"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg><span class="d-none d-sm-inline">Pricing</span></a><a class="nav-link border-end border-end-sm-0 border-bottom-sm border-300 text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center" id="restockTab" data-bs-toggle="tab" data-bs-target="#restockTabContent" role="tab" aria-controls="restockTabContent" aria-selected="false" tabindex="-1"> <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-package me-sm-2 fs-4 nav-icons"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg><span class="d-none d-sm-inline">Restock</span></a><a class="nav-link border-end border-end-sm-0 border-bottom-sm border-300 text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center" id="shippingTab" data-bs-toggle="tab" data-bs-target="#shippingTabContent" role="tab" aria-controls="shippingTabContent" aria-selected="false" tabindex="-1"> <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-truck me-sm-2 fs-4 nav-icons"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg><span class="d-none d-sm-inline">Shipping</span></a><a class="nav-link border-end border-end-sm-0 border-bottom-sm border-300 text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center" id="productsTab" data-bs-toggle="tab" data-bs-target="#productsTabContent" role="tab" aria-controls="productsTabContent" aria-selected="false" tabindex="-1"> <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe me-sm-2 fs-4 nav-icons"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg><span class="d-none d-sm-inline">Global Delivery</span></a><a class="nav-link border-end border-end-sm-0 border-bottom-sm border-300 text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center" id="attributesTab" data-bs-toggle="tab" data-bs-target="#attributesTabContent" role="tab" aria-controls="attributesTabContent" aria-selected="false" tabindex="-1"> <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sliders me-sm-2 fs-4 nav-icons"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg><span class="d-none d-sm-inline">Attributes</span></a><a class="nav-link text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center" id="advancedTab" data-bs-toggle="tab" data-bs-target="#advancedTabContent" role="tab" aria-controls="advancedTabContent" aria-selected="false" tabindex="-1"> <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-lock me-sm-2 fs-4 nav-icons"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg><span class="d-none d-sm-inline">Advanced</span></a></div>
                </div>
                <div class="col-sm-8">
                  <div class="tab-content py-3 ps-sm-4 h-100">
                    <div class="tab-pane fade active show" id="pricingTabContent" role="tabpanel" aria-labelledby="#pricingTab">
                      <h4 class="mb-3 d-sm-none">Pricing</h4>
                      <div class="row g-3">
                        <div class="col-12 col-lg-6">
                          <h5 class="mb-2 text-1000">Regular price</h5><input class="form-control" type="text" placeholder="$$$"/>
                        </div>
                        <div class="col-12 col-lg-6">
                          <h5 class="mb-2 text-1000">Sale price</h5><input class="form-control" type="text" placeholder="$$$"/>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade h-100" id="restockTabContent" role="tabpanel" aria-labelledby="restockTab">
                      <div class="d-flex flex-column h-100">
                        <h5 class="mb-3 text-1000">Add to Stock</h5>
                        <div class="row g-3 flex-1 mb-4">
                          <div class="col-sm-7"><input class="form-control" type="number" placeholder="Quantity"/></div>
                          <div class="col-sm"><button class="btn btn-primary" type="button"><svg class="svg-inline--fa fa-check me-1 fs--2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path></svg>
                          {/* <!-- <span class="fa-solid fa-check me-1 fs--2"></span> Font Awesome fontawesome.com -->Confirm */}
                          </button>
                          </div>
                        </div>
                        <table>
                          <thead>
                            <tr>
                              <th style={{width: '200px'}}></th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="text-1000 fw-bold py-1">Product in stock now:</td>
                              <td class="text-700 fw-semi-bold py-1">$1,090<button class="btn p-0" type="button"><svg class="svg-inline--fa fa-rotate text-900 ms-1" style={{phoenixTextOpacity: '.6'}} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="rotate" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M449.9 39.96l-48.5 48.53C362.5 53.19 311.4 32 256 32C161.5 32 78.59 92.34 49.58 182.2c-5.438 16.81 3.797 34.88 20.61 40.28c16.97 5.5 34.86-3.812 40.3-20.59C130.9 138.5 189.4 96 256 96c37.96 0 73 14.18 100.2 37.8L311.1 178C295.1 194.8 306.8 223.4 330.4 224h146.9C487.7 223.7 496 215.3 496 204.9V59.04C496 34.99 466.9 22.95 449.9 39.96zM441.8 289.6c-16.94-5.438-34.88 3.812-40.3 20.59C381.1 373.5 322.6 416 256 416c-37.96 0-73-14.18-100.2-37.8L200 334C216.9 317.2 205.2 288.6 181.6 288H34.66C24.32 288.3 16 296.7 16 307.1v145.9c0 24.04 29.07 36.08 46.07 19.07l48.5-48.53C149.5 458.8 200.6 480 255.1 480c94.45 0 177.4-60.34 206.4-150.2C467.9 313 458.6 294.1 441.8 289.6z"></path></svg>
                              {/* <!-- <span class="fa-solid fa-rotate text-900 ms-1" style="--phoenix-text-opacity: .6;"></span> Font Awesome fontawesome.com --> */}
                              </button></td>
                            </tr>
                            <tr>
                              <td class="text-1000 fw-bold py-1">Product in transit:</td>
                              <td class="text-700 fw-semi-bold py-1">5000</td>
                            </tr>
                            <tr>
                              <td class="text-1000 fw-bold py-1">Last time restocked:</td>
                              <td class="text-700 fw-semi-bold py-1">30th June, 2021</td>
                            </tr>
                            <tr>
                              <td class="text-1000 fw-bold py-1">Total stock over lifetime:</td>
                              <td class="text-700 fw-semi-bold py-1">20,000</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="tab-pane fade h-100" id="shippingTabContent" role="tabpanel" aria-labelledby="shippingTab">
                      <div class="d-flex flex-column h-100">
                        <h5 class="mb-3 text-1000">Shipping Type</h5>
                        <div class="flex-1">
                          <div class="mb-4">
                            <div class="form-check mb-1"><input class="form-check-input" type="radio" name="shippingRadio" id="fullfilledBySeller"/><label class="form-check-label fs-0 text-900" for="fullfilledBySeller">Fullfilled by Seller</label></div>
                            <div class="ps-4">
                              <p class="text-800 fs--1 mb-0">You’ll be responsible for product delivery. <br/>Any damage or delay during shipping may cost you a Damage fee.</p>
                            </div>
                          </div>
                          <div class="mb-4">
                            <div class="form-check mb-1"><input class="form-check-input" type="radio" name="shippingRadio" id="fullfilledByPhoenix" checked="checked"/><label class="form-check-label fs-0 text-900 d-flex align-items-center" for="fullfilledByPhoenix">Fullfilled by Phoenix <span class="badge badge-phoenix badge-phoenix-warning fs--2 ms-2">Recommended</span></label></div>
                            <div class="ps-4">
                              <p class="text-800 fs--1 mb-0">Your product, Our responsibility.<br/>For a measly fee, we will handle the delivery process for you.</p>
                            </div>
                          </div>
                        </div>
                        <p class="fs--1 fw-semi-bold mb-0">See our <a class="fw-bold" href="#!">Delivery terms and conditions </a>for details.</p>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="productsTabContent" role="tabpanel" aria-labelledby="productsTab">
                      <h5 class="mb-3 text-1000">Global Delivery</h5>
                      <div class="mb-3">
                        <div class="form-check"><input class="form-check-input" type="radio" name="deliveryRadio" id="worldwideDelivery"/><label class="form-check-label fs-0 text-900" for="worldwideDelivery">Worldwide delivery</label></div>
                        <div class="ps-4">
                          <p class="fs--1 mb-0 text-800">Only available with Shipping method: <a href="#!">Fullfilled by Phoenix</a></p>
                        </div>
                      </div>
                      <div class="mb-3">
                        <div class="form-check"><input class="form-check-input" type="radio" name="deliveryRadio" checked="checked" id="selectedCountry"/><label class="form-check-label fs-0 text-900" for="selectedCountry">Selected Countries</label></div>
                        <div class="ps-4" style={{maxWidth: '350px'}}><div class="choices" data-type="select-multiple" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false"><div class="choices__inner"><select class="form-select ps-4 choices__input" id="organizerMultiple" data-choices="data-choices" multiple="multiple" data-options="{&quot;removeItemButton&quot;:true,&quot;placeholder&quot;:true}" hidden="" tabindex="-1" data-choice="active"></select><div class="choices__list choices__list--multiple"></div><input type="text" class="choices__input choices__input--cloned" autocomplete="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" aria-label="Type Country name" placeholder="Type Country name" style={{minWidth: '18ch', width: '1ch'}}/></div><div class="choices__list choices__list--dropdown" aria-expanded="false"><div class="choices__list" aria-multiselectable="true" role="listbox"><div id="choices--organizerMultiple-item-choice-1" class="choices__item choices__item--choice choices__item--selectable is-highlighted" role="option" data-choice="" data-id="1" data-value="Canada" data-select-text="" data-choice-selectable="" aria-selected="true">Canada</div><div id="choices--organizerMultiple-item-choice-2" class="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="2" data-value="Mexico" data-select-text="" data-choice-selectable="">Mexico</div><div id="choices--organizerMultiple-item-choice-4" class="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="4" data-value="United Kingdom" data-select-text="" data-choice-selectable="">United Kingdom</div><div id="choices--organizerMultiple-item-choice-5" class="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="5" data-value="United States of America" data-select-text="" data-choice-selectable="">United States of America</div></div></div></div></div>
                      </div>
                      <div>
                        <div class="form-check"><input class="form-check-input" type="radio" name="deliveryRadio" id="localDelivery"/><label class="form-check-label fs-0 text-900" for="localDelivery">Local delivery</label></div>
                        <p class="fs--1 ms-4 mb-0 text-800">Deliver to your country of residence <a href="#!">Change profile address </a></p>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="attributesTabContent" role="tabpanel" aria-labelledby="attributesTab">
                      <h5 class="mb-3 text-1000">Attributes</h5>
                      <div class="form-check"><input class="form-check-input" id="fragileCheck" type="checkbox"/><label class="form-check-label text-900 fs-0" for="fragileCheck">Fragile Product</label></div>
                      <div class="form-check"><input class="form-check-input" id="biodegradableCheck" type="checkbox"/><label class="form-check-label text-900 fs-0" for="biodegradableCheck">Biodegradable</label></div>
                      <div class="mb-3">
                        <div class="form-check"><input class="form-check-input" id="frozenCheck" type="checkbox" checked="checked"/><label class="form-check-label text-900 fs-0" for="frozenCheck">Frozen Product</label><input class="form-control" type="text" placeholder="Max. allowed Temperature" style={{maxWidth: '350px'}}/></div>
                      </div>
                      <div class="form-check"><input class="form-check-input" id="productCheck" type="checkbox" checked="checked"/><label class="form-check-label text-900 fs-0" for="productCheck">Expiry Date of Product</label><input class="form-control inventory-attributes datetimepicker flatpickr-input" id="inventory" type="text" style={{maxWidth: '350px'}} placeholder="d/m/y" data-options="{&quot;disableMobile&quot;:true}" readonly="readonly"/></div>
                    </div>
                    <div class="tab-pane fade" id="advancedTabContent" role="tabpanel" aria-labelledby="advancedTab">
                      <h5 class="mb-3 text-1000">Advanced</h5>
                      <div class="row g-3">
                        <div class="col-12 col-lg-6">
                          <h5 class="mb-2 text-1000">Product ID Type</h5><select class="form-select" aria-label="form-select-lg example">
                            <option selected="selected">ISBN</option>
                            <option value="1">UPC</option>
                            <option value="2">EAN</option>
                            <option value="3">JAN</option>
                          </select>
                        </div>
                        <div class="col-12 col-lg-6">
                          <h5 class="mb-2 text-1000">Product ID</h5><input class="form-control" type="text" placeholder="ISBN Number"/>
                        </div>
                      </div>


                    </div>
                  </div>
                </div>
                    </div>

                    <div class="flatpickr-input-container">
                    <div class="form-floating"><input class="form-control datetimepicker flatpickr-input" id="startDatepicker" type="text" placeholder="start date" data-options="{&quot;disableMobile&quot;:true}" readonly="readonly"/><span class="uil uil-calendar-alt flatpickr-icon text-700"></span><label class="ps-6" for="startDatepicker">Start date</label></div>
                  </div>



            <div class="row gx-5">
            <div class="col-12 col-xl-8 col-xxl-9">
              <div id="orderTable" data-list="{&quot;valueNames&quot;:[&quot;products&quot;,&quot;color&quot;,&quot;size&quot;,&quot;price&quot;,&quot;quantity&quot;,&quot;total&quot;],&quot;page&quot;:10}">
                <div class="table-responsive scrollbar">
                  <table class="table fs--1 mb-0 border-top border-200">
                    <thead>
                      <tr>
                        <th class="sort white-space-nowrap align-middle fs--2" scope="col"></th>
                        <th class="sort white-space-nowrap align-middle" scope="col" style={{minWidth: '400px'}} data-sort="products">PRODUCTS</th>
                        <th class="sort align-middle ps-4" scope="col" data-sort="color" style={{width:'150px'}}>COLOR</th>
                        <th class="sort align-middle ps-4" scope="col" data-sort="size" style={{width:'300px'}}>SIZE</th>
                        <th class="sort align-middle text-end ps-4" scope="col" data-sort="price" style={{width:'150px'}}>PRICE</th>
                        <th class="sort align-middle text-end ps-4" scope="col" data-sort="quantity" style={{width:'200px'}}>QUANTITY</th>
                        <th class="sort align-middle text-end ps-4" scope="col" data-sort="total" style={{width:'250px'}}>TOTAL</th>
                      </tr>
                    </thead>
                    <tbody class="list" id="order-table-body">
                        
                        
                        <tr class="hover-actions-trigger btn-reveal-trigger position-static">
                        <td class="align-middle white-space-nowrap py-2"><a class="d-block border rounded-2" href="../../../apps/e-commerce/landing/product-details.html"><img src="../../../assets/img//products/1.png" alt="" width="53"/></a></td>
                        <td class="products align-middle py-0"><a class="fw-semi-bold line-clamp-2 mb-0" href="../../../apps/e-commerce/landing/product-details.html">Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management &amp; Skin Temperature Trends, Carbon/Graphite, One Size (S &amp; L Bands)</a></td>
                        <td class="color align-middle white-space-nowrap text-900 py-0 ps-4">Pure matte black</td>
                        <td class="size align-middle white-space-nowrap text-700 fw-semi-bold py-0 ps-4">42</td>
                        <td class="price align-middle text-900 fw-semi-bold text-end py-0 ps-4">$57</td>
                        <td class="quantity align-middle text-end py-0 ps-4 text-700">4</td>
                        <td class="total align-middle fw-bold text-1000 text-end py-0 ps-4">$228</td>
                      </tr><tr class="hover-actions-trigger btn-reveal-trigger position-static">
                        <td class="align-middle white-space-nowrap py-2"><a class="d-block border rounded-2" href="../../../apps/e-commerce/landing/product-details.html"><img src="../../../assets/img//products/2.png" alt="" width="53"/></a></td>
                        <td class="products align-middle py-0"><a class="fw-semi-bold line-clamp-2 mb-0" href="../../../apps/e-commerce/landing/product-details.html">iPhone 13 pro max-Pacific Blue-128GB storage</a></td>
                        <td class="color align-middle white-space-nowrap text-900 py-0 ps-4">Glossy black</td>
                        <td class="size align-middle white-space-nowrap text-700 fw-semi-bold py-0 ps-4">XL</td>
                        <td class="price align-middle text-900 fw-semi-bold text-end py-0 ps-4">$199</td>
                        <td class="quantity align-middle text-end py-0 ps-4 text-700">2</td>
                        <td class="total align-middle fw-bold text-1000 text-end py-0 ps-4">$398</td>
                      </tr><tr class="hover-actions-trigger btn-reveal-trigger position-static">
                        <td class="align-middle white-space-nowrap py-2"><a class="d-block border rounded-2" href="../../../apps/e-commerce/landing/product-details.html"><img src="../../../assets/img//products/3.png" alt="" width="53"/></a></td>
                        <td class="products align-middle py-0"><a class="fw-semi-bold line-clamp-2 mb-0" href="../../../apps/e-commerce/landing/product-details.html">Apple MacBook Pro 13 inch-M1-8/256GB-space</a></td>
                        <td class="color align-middle white-space-nowrap text-900 py-0 ps-4">Glossy black</td>
                        <td class="size align-middle white-space-nowrap text-700 fw-semi-bold py-0 ps-4">L</td>
                        <td class="price align-middle text-900 fw-semi-bold text-end py-0 ps-4">$600</td>
                        <td class="quantity align-middle text-end py-0 ps-4 text-700">1</td>
                        <td class="total align-middle fw-bold text-1000 text-end py-0 ps-4">$600</td>
                      </tr><tr class="hover-actions-trigger btn-reveal-trigger position-static">
                        <td class="align-middle white-space-nowrap py-2"><a class="d-block border rounded-2" href="../../../apps/e-commerce/landing/product-details.html"><img src="../../../assets/img//products/4.png" alt="" width="53"/></a></td>
                        <td class="products align-middle py-0"><a class="fw-semi-bold line-clamp-2 mb-0" href="../../../apps/e-commerce/landing/product-details.html">Apple iMac 24" 4K Retina Display M1 8 Core CPU, 7 Core GPU, 256GB SSD, Green (MJV83ZP/A) 2021</a></td>
                        <td class="color align-middle white-space-nowrap text-900 py-0 ps-4">Gray</td>
                        <td class="size align-middle white-space-nowrap text-700 fw-semi-bold py-0 ps-4">22</td>
                        <td class="price align-middle text-900 fw-semi-bold text-end py-0 ps-4">$250</td>
                        <td class="quantity align-middle text-end py-0 ps-4 text-700">2</td>
                        <td class="total align-middle fw-bold text-1000 text-end py-0 ps-4">$500</td>
                      </tr><tr class="hover-actions-trigger btn-reveal-trigger position-static">
                        <td class="align-middle white-space-nowrap py-2"><a class="d-block border rounded-2" href="../../../apps/e-commerce/landing/product-details.html"><img src="../../../assets/img//products/5.png" alt="" width="53"/></a></td>
                        <td class="products align-middle py-0"><a class="fw-semi-bold line-clamp-2 mb-0" href="../../../apps/e-commerce/landing/product-details.html">Razer Kraken v3 x Wired 7.1 Surroung Sound Gaming headset</a></td>
                        <td class="color align-middle white-space-nowrap text-900 py-0 ps-4">Black</td>
                        <td class="size align-middle white-space-nowrap text-700 fw-semi-bold py-0 ps-4">L</td>
                        <td class="price align-middle text-900 fw-semi-bold text-end py-0 ps-4">$49</td>
                        <td class="quantity align-middle text-end py-0 ps-4 text-700">3</td>
                        <td class="total align-middle fw-bold text-1000 text-end py-0 ps-4">$147</td>
                      </tr><tr class="hover-actions-trigger btn-reveal-trigger position-static">
                        <td class="align-middle white-space-nowrap py-2"><a class="d-block border rounded-2" href="../../../apps/e-commerce/landing/product-details.html"><img src="../../../assets/img//products/6.png" alt="" width="53"/></a></td>
                        <td class="products align-middle py-0"><a class="fw-semi-bold line-clamp-2 mb-0" href="../../../apps/e-commerce/landing/product-details.html">PlayStation 5 DualSense Wireless Controller</a></td>
                        <td class="color align-middle white-space-nowrap text-900 py-0 ps-4">Green Golden</td>
                        <td class="size align-middle white-space-nowrap text-700 fw-semi-bold py-0 ps-4">Regular</td>
                        <td class="price align-middle text-900 fw-semi-bold text-end py-0 ps-4">$65</td>
                        <td class="quantity align-middle text-end py-0 ps-4 text-700">2</td>
                        <td class="total align-middle fw-bold text-1000 text-end py-0 ps-4">$130</td>
                      </tr></tbody>
                  </table>
                </div>
              </div>
              <div class="d-flex flex-between-center py-3 border-bottom mb-6">
                <p class="text-1100 fw-semi-bold lh-sm mb-0">Items subtotal :</p>
                <p class="text-1100 fw-bold lh-sm mb-0">$1690</p>
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
    </div>
  )
}

export default Permintaan