import React from 'react'
import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';

const Persedian = () => {
  return (
    <div className='container-xl px-4 mt-n10'>
        <div class="row justify-content-between align-items-center mb-5">
                            <div class="col flex-shrink-0 mb-5 mb-md-0 ">
                                <h1 class="display-6 mb-0 fw-bold">Rekap ATK</h1>
                                {/* <div class="text-muted">Sales overview &amp; summary</div> */}
                            </div>
                            <div class="col-12 col-md-auto ">
                                <div class="d-flex flex-column flex-sm-row gap-3 ">
                                  
                                    <mwc-select style={{ width: '400px' }} class="mw-50 mb-2 mb-md-0 " outlined="" label="Sub Kegiatan">
                                        <mwc-list-item selected="" value="0" mwc-list-item="" tabindex="0" aria-disabled="false" role="option" aria-selected="true">SUB KEGIATAN KERJASAMA INTERNAL</mwc-list-item>
                                        <mwc-list-item value="1" mwc-list-item="" tabindex="-1" aria-disabled="false" role="option">Korsupgah</mwc-list-item>
                                        <mwc-list-item value="2" mwc-list-item="" tabindex="-1" aria-disabled="false" role="option">Pemuktahiran</mwc-list-item>
                                    </mwc-select>
                                    <mwc-select style={{ width: '250px' }} class="mw-50" outlined="" label="Alat & Bahan">
                                        <mwc-list-item value="0" mwc-list-item="" tabindex="-1" aria-disabled="false" role="option">Map Biasa</mwc-list-item>

                                        <mwc-list-item value="1" mwc-list-item="" tabindex="-1" aria-disabled="false" role="option">Pulpen</mwc-list-item>

                                        <mwc-list-item value="2" mwc-list-item="" tabindex="-1" aria-disabled="false" role="option">Tinta 79A</mwc-list-item>

                                        

                                        <mwc-list-item selected="" value="4" mwc-list-item="" tabindex="0" aria-disabled="false" role="option" aria-selected="true">Pilih bahan</mwc-list-item>

                                        <mwc-list-item selected="" value="5" mwc-list-item="" tabindex="0" aria-disabled="false" role="option" aria-selected="false">Kertas F4</mwc-list-item>
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
                                                    <div class="text-lg fw-bold fs-4">60</div>
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
                                                    <div class="text-lg fw-bold fs-4">40 </div>
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
                                                    <div class="text-lg fw-bold fs-4">20</div>
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
                                                    <div class="text-lg fw-bold fs-4">10</div>
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

        <div id="list_manajemen_tl">
    





    <table cellpadding="4px" cellspacing="0px" border="1" autosize="1" id="list-data-tl" class="table table-bordered table-hover table-condensed scroll" width="100%">
            <thead style={{ backgroundColor: '#bf212f', color: '#fff', fontWeight: 'bold' }}>
            <tr style={{ fontWeight: 'bold' }}>

                    <th colspan="9" class="text-center">HASIL REKAP PENGADAAN PADA SUB KEGIATAN KERJASAMA INTERNAL</th>
                </tr>
                <tr style={{ fontWeight: 'bold' }}>
                    <th rowspan="3" class="text-center">NO.</th>
                    <th rowspan="3" class="text-center">URAIAN/NAMA</th>
                    <th rowspan="3" class="text-center">SATUAN</th>
                    <th rowspan="3" class="text-center">TOTAL DPA</th>
                    <th colspan="2" class="text-center">PENGADAAN</th>
                    <th rowspan="3" class="text-center">SISA PENGADAAN</th>
                    <th rowspan="3" class="text-center">TOTAL REALISASI</th>
                    <th rowspan="3" class="text-center">SISA BARANG</th>
                   
                </tr>
                <tr style={{ fontWeight: 'bold' }}>
                   
                    <th rowspan="2" class="text-center">SEMESTER  I</th>
                    <th rowspan="2" class="text-center">SEMESTER II</th>
                    
                </tr>
                <tr style={{ fontWeight: 'bold' }} className='bg-primary'>
                   
                </tr>
                <tr style={{ fontWeight: 'bold', backgroundColor: '#cf6972', color: 'black' }}>
                    <th class="text-center">1</th>
                    <th class="text-center">2</th>
                    <th class="text-center">3</th>
                    <th class="text-center">4</th>
                    <th class="text-center">5</th>
                    <th class="text-center">6</th>
                    <th class="text-center">7</th>
                    <th class="text-center">8</th>
                    <th class="text-center">9</th>
                    
                </tr>
            </thead>
            <tbody>
                    <tr  style={{
                  backgroundColor: '#eee',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
                data-toggle="collapse"
                data-target=".col_1"
                title="KLIK UNTUK MELIHAT DETAIL">
                        <td style={{ textAlign: 'center' }}>1</td>
                        <td>DOUBLE CLIP NO.155 </td>
                        <td style={{ textAlign: 'right' }}>RIM</td>
                        <td style={{ textAlign: 'right' }}>50</td>
                        <td style={{ textAlign: 'right' }}>30</td>
                        <td style={{ textAlign: 'right' }}>0</td>
    
                        <td style={{ textAlign: 'right' }}>20</td>
                        <td style={{ textAlign: 'right' }}>18</td>
                        <td style={{ textAlign: 'right' }}>2</td>
                       
                    </tr>
                        <tr class="col_1 collapse in" aria-expanded="false" style={{ height: '0px' }}>
                            <td style={{ textAlign: 'center' }}>-</td>
                            <td style={{ color: 'blue' }}>700.04/0080/ITKO/V/2015</td>
                            <td style={{ textAlign: 'right' }}>10</td>
                            <td style={{ textAlign: 'right' }}>3,164,199,336.00</td>
                            <td style={{ textAlign: 'right' }}>20</td>
                            <td style={{ textAlign: 'right' }}>3,164,199,336.00</td>
                            <td style={{ textAlign: 'right' }}>6</td>
                            <td style={{ textAlign: 'right' }}>1,022,880,443.00</td>
                            <td style={{ textAlign: 'right' }}>7</td>
                            <td style={{ textAlign: 'right' }}>0.00</td>
                            <td style={{ textAlign: 'right' }}>7</td>
                            <td style={{ textAlign: 'right' }}>2,141,318,893.00</td>
                            <td style={{ textAlign: 'right' }}>0</td>
                            <td style={{ textAlign: 'right' }}>0.00</td>
                        </tr>
                        <tr class="col_1 collapse" aria-expanded="false" style={{ height: '0px' }}>
                            <td style={{ textAlign: 'center' }}>-</td>
                            <td style={{ color: 'blue' }}>700.04/0237/ITKO/IX/2016</td>
                            <td style={{ textAlign: 'right' }}>10</td>
                            <td style={{ textAlign: 'right' }}>2,002,514,324.00</td>
                            <td style={{ textAlign: 'right' }}>15</td>
                            <td style={{ textAlign: 'right' }}>2,002,514,324.00</td>
                            <td style={{ textAlign: 'right' }}>10</td>
                            <td style={{ textAlign: 'right' }}>253,968,140.00</td>
                            <td style={{ textAlign: 'right' }}>2</td>
                            <td style={{ textAlign: 'right' }}>0.00</td>
                            <td style={{ textAlign: 'right' }}>3</td>
                            <td style={{ textAlign: 'right' }}>1,748,546,184.00</td>
                            <td style={{ textAlign: 'right' }}>0</td>
                            <td style={{ textAlign: 'right' }}>0.00</td>
                        </tr>
                        <tr class="col_1 collapse" aria-expanded="false" style={{ height: '0px' }}>
                            <td style={{ textAlign: 'center' }}>-</td>
                            <td style={{ color: 'blue' }}>700.04/2238/ITKO/XII/2014</td>
                            <td style={{ textAlign: 'right' }}>6</td>
                            <td style={{ textAlign: 'right' }}>1,674,620,030.00</td>
                            <td style={{ textAlign: 'right' }}>10</td>
                            <td style={{ textAlign: 'right' }}>1,674,620,030.00</td>
                            <td style={{ textAlign: 'right' }}>8</td>
                            <td style={{ textAlign: 'right' }}>0.00</td>
                            <td style={{ textAlign: 'right' }}>0</td>
                            <td style={{ textAlign: 'right' }}>0.00</td>
                            <td style={{ textAlign: 'right' }}>2</td>
                            <td style={{ textAlign: 'right' }}>1,674,620,030.00</td>
                            <td style={{ textAlign: 'right' }}>0</td>
                            <td style={{ textAlign: 'right' }}>0.00</td>
                        </tr>
                        <tr class="col_1 collapse" aria-expanded="false" style={{ height: '0px' }}>
                            <td style={{ textAlign: 'center' }}>-</td>
                            <td style={{ color: 'blue' }}>780.04/0638/ITKO/III/2014</td>
                            <td style={{ textAlign: 'right' }}>2</td>
                            <td style={{ textAlign: 'right' }}>1,536,920,030.00</td>
                            <td style={{ textAlign: 'right' }}>2</td>
                            <td style={{ textAlign: 'right' }}>1,536,920,030.00</td>
                            <td style={{ textAlign: 'right' }}>1</td>
                            <td style={{ textAlign: 'right' }}>0.00</td>
                            <td style={{ textAlign: 'right' }}>0</td>
                            <td style={{ textAlign: 'right' }}>0.00</td>
                            <td style={{ textAlign: 'right' }}>1</td>
                            <td style={{ textAlign: 'right' }}>1,536,920,030.00</td>
                            <td style={{ textAlign: 'right' }}>0</td>
                            <td style={{ textAlign: 'right' }}>0.00</td>
                        </tr>
                        <tr class="col_1 collapse" aria-expanded="false" style={{ height: '0px' }}>
                            <td style={{ textAlign: 'center' }}>-</td>
                            <td style={{ color: 'blue' }}>700.04/1041/ITKO/VII/2013</td>
                            <td style={{ textAlign: 'right' }}>13</td>
                            <td style={{ textAlign: 'right' }}>1,426,938,605.00</td>
                            <td style={{ textAlign: 'right' }}>18</td>
                            <td style={{ textAlign: 'right' }}>1,426,938,605.00</td>
                            <td style={{ textAlign: 'right' }}>14</td>
                            <td style={{ textAlign: 'right' }}>13,400,000.00</td>
                            <td style={{ textAlign: 'right' }}>2</td>
                            <td style={{ textAlign: 'right' }}>0.00</td>
                            <td style={{ textAlign: 'right' }}>2</td>
                            <td style={{ textAlign: 'right' }}>1,413,538,605.00</td>
                            <td style={{ textAlign: 'right' }}>0</td>
                            <td style={{ textAlign: 'right' }}>0.00</td>
                        </tr>
                        <tr class="col_1 collapse" aria-expanded="false" style={{ height: '0px' }}>
                            <td style={{ textAlign: 'center' }}>-</td>
                            <td style={{ color: 'blue' }}>700.04/0091/ITKO/I/2012</td>
                            <td style={{ textAlign: 'right' }}>4</td>
                            <td style={{ textAlign: 'right' }}>707,392,550.00</td>
                            <td style={{ textAlign: 'right' }}>4</td>
                            <td style={{ textAlign: 'right' }}>707,392,550.00</td>
                            <td style={{ textAlign: 'right' }}>2</td>
                            <td style={{ textAlign: 'right' }}>162,244,050.00</td>
                            <td style={{ textAlign: 'right' }}>1</td>
                            <td style={{ textAlign: 'right' }}>0.00</td>
                            <td style={{ textAlign: 'right' }}>1</td>
                            <td style={{ textAlign: 'right' }}>545,148,500.00</td>
                            <td style={{ textAlign: 'right' }}>0</td>
                            <td style={{ textAlign: 'right' }}>0.00</td>
                        </tr>
                        <tr class="col_1 collapse" aria-expanded="false" style={{ height: '0px' }}>
                            <td style={{ textAlign: 'center' }}>-</td>
                            <td style={{ color: 'blue' }}>700.04/0563/ITKO/IV/2012</td>
                            <td style={{ textAlign: 'right' }}>9</td>
                            <td style={{ textAlign: 'right' }}>264,193,000.00</td>
                            <td style={{ textAlign: 'right' }}>12</td>
                            <td style={{ textAlign: 'right' }}>264,193,000.00</td>
                            <td style={{ textAlign: 'right' }}>4</td>
                            <td style={{ textAlign: 'right' }}>0.00</td>
                            <td style={{ textAlign: 'right' }}>3</td>
                            <td style={{ textAlign: 'right' }}>0.00</td>
                            <td style={{ textAlign: 'right' }}>5</td>
                            <td style={{ textAlign: 'right' }}>264,193,000.00</td>
                            <td style={{ textAlign: 'right' }}>0</td>
                            <td style={{ textAlign: 'right' }}>0.00</td>
                        </tr>
                        <tr class="col_1 collapse" aria-expanded="false" style={{ height: '0px' }}>
                            <td style={{ textAlign: 'center' }}>-</td>
                            <td style={{ color: 'blue' }}>700.04/0198/ITKO/II/2011</td>
                            <td style={{ textAlign: 'right' }}>6</td>
                            <td style={{ textAlign: 'right' }}>303,641,467.00</td>
                            <td style={{ textAlign: 'right' }}>7</td>
                            <td style={{ textAlign: 'right' }}>303,641,467.00</td>
                            <td style={{ textAlign: 'right' }}>4</td>
                            <td style={{ textAlign: 'right' }}>105,504,875.00</td>
                            <td style={{ textAlign: 'right' }}>3</td>
                            <td style={{ textAlign: 'right' }}>0.00</td>
                            <td style={{ textAlign: 'right' }}>0</td>
                            <td style={{ textAlign: 'right' }}>198,136,592.00</td>
                            <td style={{ textAlign: 'right' }}>0</td>
                            <td style={{ textAlign: 'right' }}>0.00</td>
                        </tr>
                        <tr class="col_1 collapse" aria-expanded="false" style={{ height: '0px' }}>
                            <td style={{ textAlign: 'center' }}>-</td>
                            <td style={{ color: 'blue' }}>0011/INSP/780.04/I/2019 </td>
                            <td style={{ textAlign: 'right' }}>16</td>
                            <td style={{ textAlign: 'right' }}>447,861,591.55</td>
                            <td style={{ textAlign: 'right' }}>23</td>
                            <td style={{ textAlign: 'right' }}>447,861,591.55</td>
                            <td style={{ textAlign: 'right' }}>21</td>
                            <td style={{ textAlign: 'right' }}>440,770,291.55</td>
                            <td style={{ textAlign: 'right' }}>0</td>
                            <td style={{ textAlign: 'right' }}>0.00</td>
                            <td style={{ textAlign: 'right' }}>2</td>
                            <td style={{ textAlign: 'right' }}>7,091,300.00</td>
                            <td style={{ textAlign: 'right' }}>0</td>
                            <td style={{ textAlign: 'right' }}>0.00</td>
                        </tr>
                        <tr class="col_1 collapse" aria-expanded="false" style={{ height: '0px' }}>
                            <td style={{ textAlign: 'center' }}>-</td>
                            <td style={{ color: 'blue' }}> 0028/INSP/700.04/III/2021</td>
                            <td style={{ textAlign: 'right' }}>11</td>
                            <td style={{ textAlign: 'right' }}>1,104,850.00</td>
                            <td style={{ textAlign: 'right' }}>13</td>
                            <td style={{ textAlign: 'right' }}>1,104,850.00</td>
                            <td style={{ textAlign: 'right' }}>4</td>
                            <td style={{ textAlign: 'right' }}>108,250.00</td>
                            <td style={{ textAlign: 'right' }}>3</td>
                            <td style={{ textAlign: 'right' }}>0.00</td>
                            <td style={{ textAlign: 'right' }}>6</td>
                            <td style={{ textAlign: 'right' }}>996,600.00</td>
                            <td style={{ textAlign: 'right' }}>0</td>
                            <td style={{ textAlign: 'right' }}>0.00</td>
                        </tr>
                        <tr class="col_1 collapse" aria-expanded="false" style={{ height: '0px' }}>
                            <td style={{ textAlign: 'center' }}>-</td>
                            <td style={{ color: 'blue' }}>0058/INSP/700.04/VII/2022</td>
                            <td style={{ textAlign: 'right' }}>15</td>
                            <td style={{ textAlign: 'right' }}>0.00</td>
                            <td style={{ textAlign: 'right' }}>30</td>
                            <td style={{ textAlign: 'right' }}>0.00</td>
                            <td style={{ textAlign: 'right' }}>6</td>
                            <td style={{ textAlign: 'right' }}>0.00</td>
                            <td style={{ textAlign: 'right' }}>2</td>
                            <td style={{ textAlign: 'right' }}>0.00</td>
                            <td style={{ textAlign: 'right' }}>22</td>
                            <td style={{ textAlign: 'right' }}>0.00</td>
                            <td style={{ textAlign: 'right' }}>0</td>
                            <td style={{ textAlign: 'right' }}>0.00</td>
                        </tr>
                    <tr style={{ backgroundColor: '#eee', fontWeight: 'bold', cursor: 'pointer' }} data-bs-toggle="collapse" data-bs-target="#collapseLayouts1" aria-expanded="false" aria-controls="collapseLayouts">
                        <td style={{ textAlign: 'center' }}>2</td>
                        <td>ISI HEKTER</td>
                        <td style={{ textAlign: 'right' }}>DOS</td>
                        <td style={{ textAlign: 'right' }}>10</td>
                        <td style={{ textAlign: 'right' }}>10</td>
                        <td style={{ textAlign: 'right' }}>0</td>
    
                        <td style={{ textAlign: 'right' }}>0</td>
                        <td style={{ textAlign: 'right' }}>2</td>
                        <td style={{ textAlign: 'right' }}>8</td>
                       
                    </tr>
                        <tr class="collapse col_2" id="collapseLayouts1">
                            <td style={{ textAlign: 'center' }}>-</td>
                            <td style={{ color: 'blue' }}>RUHYADI</td>
                            <td style={{ textAlign: 'right' }}>DOS</td>
                            <td style={{ textAlign: 'right' }}>0</td>
                            <td style={{ textAlign: 'right' }}>0</td>
                            <td style={{ textAlign: 'right' }}>0</td>
                            <td style={{ textAlign: 'right' }}>0</td>
                            <td style={{ textAlign: 'right' }}>1</td>
                            <td style={{ textAlign: 'right' }}>9</td>
                        </tr>
                        <tr class="collapse col_2" id="collapseLayouts1">
                            <td style={{ textAlign: 'center' }}>-</td>
                            <td style={{ color: 'blue' }}>MUHAMMAD IKHSAN</td>
                            <td style={{ textAlign: 'right' }}>DOS</td>
                            <td style={{ textAlign: 'right' }}>0</td>
                            <td style={{ textAlign: 'right' }}>0</td>
                            <td style={{ textAlign: 'right' }}>0</td>
                            <td style={{ textAlign: 'right' }}>0</td>
                            <td style={{ textAlign: 'right' }}>1</td>
                            <td style={{ textAlign: 'right' }}>8</td>
                           
                        </tr>
                        
                    
                        
            </tbody>
        </table>
        </div>
           
    </div>
  )
}

export default Persedian