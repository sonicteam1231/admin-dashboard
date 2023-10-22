import React from 'react'
import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';

const Persedian = () => {
  return (
    <div className='class="container-xl px-4 mt-n10'>
        <div class="row justify-content-between align-items-center mb-5">
                            <div class="col flex-shrink-0 mb-5 mb-md-0 ">
                                <h1 class="display-6 mb-0 ">Rekap ATK</h1>
                                {/* <div class="text-muted">Sales overview &amp; summary</div> */}
                            </div>
                            <div class="col-12 col-md-auto ">
                                <div class="d-flex flex-column flex-sm-row gap-3 ">
                                  
                                    <mwc-select style={{ width: '400px' }} class="mw-50 mb-2 mb-md-0 " outlined="" label="Sub Kegiatan">
                                        <mwc-list-item selected="" value="0" mwc-list-item="" tabindex="0" aria-disabled="false" role="option" aria-selected="true">Kerjasama Internal Dengan Pihak Kepolisan</mwc-list-item>
                                        <mwc-list-item value="1" mwc-list-item="" tabindex="-1" aria-disabled="false" role="option">Korsupgah</mwc-list-item>
                                        <mwc-list-item value="2" mwc-list-item="" tabindex="-1" aria-disabled="false" role="option">Pemuktahiran</mwc-list-item>
                                    </mwc-select>
                                    <mwc-select style={{ width: '250px' }} class="mw-50" outlined="" label="Alat & Bahan">
                                        <mwc-list-item value="0" mwc-list-item="" tabindex="-1" aria-disabled="false" role="option">Map Biasa</mwc-list-item>
                                        <mwc-list-item value="1" mwc-list-item="" tabindex="-1" aria-disabled="false" role="option">Pulpen</mwc-list-item>
                                        <mwc-list-item value="2" mwc-list-item="" tabindex="-1" aria-disabled="false" role="option">Tinta 79A</mwc-list-item>
                                        <mwc-list-item selected="" value="3" mwc-list-item="" tabindex="0" aria-disabled="false" role="option" aria-selected="true">Kertas F4</mwc-list-item>
                                    </mwc-select>
                                </div>
                            </div>
        </div>
        
        <div class="row">
                                <div class="col-lg-6 col-xl-3 mb-4">
                                    <div class="card bg-primary text-white h-100">
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div class="me-3">
                                                    <div class="text-white-75 small">TOTAL (DPA)</div>
                                                    <div class="text-lg fw-bold">20 Rim</div>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar feather-xl text-white-50"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                            </div>
                                        </div>
                                        <div class="card-footer d-flex align-items-center justify-content-between small">
                                            <a class="text-white stretched-link" href="#!">View Report</a>
                                            <div class="text-white"><svg class="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg=""><path fill="currentColor" d="M246.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 41.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path></svg></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-xl-3 mb-4">
                                    <div class="card bg-warning text-white h-100">
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div class="me-3">
                                                    <div class="text-white-75 small">Telah Direalisasikan</div>
                                                    <div class="text-lg fw-bold">10 Rim</div>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-dollar-sign feather-xl text-white-50"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                                            </div>
                                        </div>
                                        <div class="card-footer d-flex align-items-center justify-content-between small">
                                            <a class="text-white stretched-link" href="#!">View Report</a>
                                            <div class="text-white"><svg class="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg=""><path fill="currentColor" d="M246.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 41.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path></svg></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-xl-3 mb-4">
                                    <div class="card bg-success text-white h-100">
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div class="me-3">
                                                    <div class="text-white-75 small">Sisa Pengadaan</div>
                                                    <div class="text-lg fw-bold">10 Rim</div>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-square feather-xl text-white-50"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
                                            </div>
                                        </div>
                                        <div class="card-footer d-flex align-items-center justify-content-between small">
                                            <a class="text-white stretched-link" href="#!">View Tasks</a>
                                            <div class="text-white"><svg class="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg=""><path fill="currentColor" d="M246.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 41.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path></svg></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-xl-3 mb-4">
                                    <div class="card bg-danger text-white h-100">
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div class="me-3">
                                                    <div class="text-white-75 small">Sisa ATK</div>
                                                    <div class="text-lg fw-bold">2 Rim</div>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle feather-xl text-white-50"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                            </div>
                                        </div>
                                        <div class="card-footer d-flex align-items-center justify-content-between small">
                                            <a class="text-white stretched-link" href="#!">View Requests</a>
                                            <div class="text-white"><svg class="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg=""><path fill="currentColor" d="M246.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 41.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path></svg></div>
                                        </div>
                                    </div>
                                </div>
        </div>
    </div>
  )
}

export default Persedian