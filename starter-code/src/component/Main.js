import React, { Component } from 'react';


class Grid3 extends Component{
    render(){
        return (
            <div>
                <div className="row">
                    <div className="col-8 mt-1">
                        <section className="breadcrumbSection">
                            <nav className="navbar navbar-dark bg-white breadcrumb has-succeeds-separator" style={{width:979}}>
                                <ul><label>
                                    <li>HOME</li>
                                    <li>TU CUENTA</li>
                                    <li>TUS ORDENES</li>
                                    <li><strong>DETALLE DE ORDEN</strong></li>
                                </label></ul>
                            </nav>
                        </section>
                    <div className='section'>
                        <p className="black-text text-darken font-weight-bold"><img src='/ordenes.png' alt='ordenes' width='40px'/>DETALLE DE ORDEN</p>
                        <br/>
                        <p>Desde esta pantalla podrás ver el detalle por orden</p>
                    </div>
                <div className="row">
                     <div className="col-12">
                            <div>
                                <div className="card-content green lighten-5 green-text text-lighten font-weight-bold" style={{width:1300}}>
                                    <h2>DETALLE DE ORDEN</h2>
                                </div>
                                <div className="card-content grey lighten-5 green-text text-lighten font-weight-bold" style={{width:1300, height:10}}>
                                    <label className="black-text text-darken font-weight-bold">NÚMERO DE ORDEN 83975</label>
                                </div>
                                <div class="card-content">
                                    <div className="columns">
                                        <div className="column is-2 padd">
                                            <label className="black-text text-darken font-weight-bold mt-2"><span>Nº ORDEN</span></label>
                                            <br/>
                                            <label className="black-text text-darken">34679</label>
                                        </div>
                                        <div className="column">
                                            <label className="black-text text-darken font-weight-bold mt-2 ml-5"><span>FECHA</span></label>
                                        <br/>
                                            <label className="black-text text-darken mt-2 ml-5">20/03/2018</label>
                                        </div>
                                        <div className="column">
                                            <label className="black-text text-darken font-weight-bold mt-3"><span>TOTAL</span></label>
                                        <br/>
                                            <label className="black-text text-darken mt-2">$2,340MXN</label>
                                        </div>
                                        <div className="column">
                                            <label className="black-text text-darken font-weight-bold mt-3"><span>CANTIDAD</span></label>
                                        <br/>
                                            <label className="black-text text-darken mt-2">3</label>
                                        </div>
                                        <div className="column">
                                            <label className="black-text text-darken font-weight-bold mt-2"><span>ESTATUS</span></label>
                                        <br/>
                                            <label className="black-text text-darken mt-2">Entregado</label>
                                        </div>
                                        <div className="column is-1.5 padd">
                                            <label className="black-text text-darken font-weight-bold mt-2 ml-5"><span>ENVIAR A</span></label>
                                        <br/>
                                            <label className="black-text text-darken ml-5" style={{width:250}}>Lucía Susana Martínez Reyes</label>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="row ml-4" style={{width:940}}>
                                <div className="card" style={{width:1000, height:200}} >
                                <div className="columns">
                                    <div className="column is-2 padd">
                                        <h3 className="mt-4 ml-3 text-center"><span>ACCUVE OASIS</span></h3>
                                        <img className="mt-4 ml-4" src="/accuve.png" alt="accuve" />
                                    </div>
                                <div className="column is-2 padd">
                                    <p className="font-weight-bold mt-5 ml-5 text-center">CANTIDAD</p><br />
                                <div className="select ml-5 mr-1">
                                    <select>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                            </div>
                        <div className="column is-2 ">
                            <p className="font-weight-bold mt-5 ml-5 text-center">PRECIO UNITARIO</p>
                            <p className="mt-2 ml-4 text-center">$2,345</p>
                        </div>
                        <div className="column is-2">
                            <p className="font-weight-bold mt-5 ml-5 text-center">PRECIO TOTAL</p>
                            <p className="mt-2 ml-4 text-center">$4,567</p>
                        </div>
                        <div className="column">
                        <br/>
                        <button className="btn btn-primary btn-medium waves-effect waves-light font-weight-bold mt-5 ml-4 text-center" style={{borderRadius:50}}>VOLVER A COMPRAR</button>
                        </div>
                                </div>
                            </div>
                            <div className="card" style={{width:1000, height:200}} >
                            <div className="columns">
                                <div className="column is-2 padd">
                                    <h3 className="mt-4 ml-3 text-center"><span>LENTES</span></h3>
                                    <img className="mt-4 ml-4" src="/lentes.png" alt="accuve" />
                                </div>
                            <div className="column is-2 padd">
                                <p className="font-weight-bold mt-5 ml-5 text-center">CANTIDAD</p><br />
                            <div className="select ml-5 mr-1">
                                <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>
                    <div className="column is-2 ">
                        <p className="font-weight-bold mt-5 ml-5 text-center">PRECIO UNITARIO</p>
                        <p className="mt-2 ml-4 text-center">$2,345</p>
                    </div>
                    <div className="column is-2">
                        <p className="font-weight-bold mt-5 ml-5 text-center">PRECIO TOTAL</p>
                        <p className="mt-2 ml-4 text-center">$4,567</p>
                    </div>
                    <div className="column">
                    <br/>
                    <button className="btn btn-primary btn-medium waves-effect waves-light font-weight-bold mt-5 ml-4 text-center" style={{borderRadius:50}}>VOLVER A COMPRAR</button>
                    </div>
                            </div>
                        </div>
                        <div className="card" style={{width:1000, height:200}} >
                        <div className="columns">
                            <div className="column is-2 padd">
                                <h3 className="mt-4 ml-3 text-center"><span>ACCUVE OASIS</span></h3>
                                <img className="mt-4 ml-4" src="/accuve.png" alt="accuve" />
                            </div>
                        <div className="column is-2 padd">
                            <p className="font-weight-bold mt-5 ml-5 text-center">CANTIDAD</p><br />
                        <div className="select ml-5 mr-1">
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                <div className="column is-2 ">
                    <p className="font-weight-bold mt-5 ml-5 text-center">PRECIO UNITARIO</p>
                    <p className="mt-2 ml-4 text-center">$2,345</p>
                </div>
                <div className="column is-2">
                    <p className="font-weight-bold mt-5 ml-5 text-center">PRECIO TOTAL</p>
                    <p className="mt-2 ml-4 text-center">$4,567</p>
                </div>
                <div className="column">
                <br/>
                <button className="btn btn-primary btn-medium waves-effect waves-light font-weight-bold mt-5 ml-4 text-center" style={{borderRadius:50}}>VOLVER A COMPRAR</button>
                </div>
                        </div>
                    </div>
                                </div>
                         
                        
            </div>
        </div>      
</div>
<div className="col-4">
    <div className="row" style={{width:450, height:1158}}>
        <div className="col-md-12">
            <div className="card grey lighten-4 text-dark mt-1" style={{width:1600, height:1158, margin:210}}>
                <div className="card-content" style={{width:450, height:3158}}>
                  <span className="card-title"><label>HISTORIAL CLINICO</label></span>
                  <h5><img src="/graduacion.png" alt="graduacion" width="40px"/>TU GRADUACION</h5>
                  <br/>
                  <label>GRADUACIÓN OJO DERECHO</label>
                  <table>
                      <thead>
                      <tr>
                          <th><label>ESPERA</label></th>
                          <th><label>CILINDRO</label></th>
                          <th><label>EJE</label></th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                          <td><container class="form-control">-0.05</container></td>
                          <td><container class="form-control">-0.05</container></td>
                          <td><container class="form-control">-0.05</container></td>
                      </tr>
                      </tbody>
                </table>
                <br/>
                <label>GRADUACIÓN OJO IZQUIERDO</label>
                  <table>
                      <thead>
                      <tr>
                          <th><label>ESPERA</label></th>
                          <th><label>CILINDRO</label></th>
                          <th><label>EJE</label></th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                          <td><container class="form-control">-0.05</container></td>
                          <td><container class="form-control">-0.05</container></td>
                          <td><container class="form-control">-0.05</container></td>
                      </tr>
                      </tbody>
                  </table>
                <br/>
                    <div className="card-action">
                        <div className="columns">
                            <div className="column">
                                <label className="black-text text-darken font-weight-bold"><span>OPTOMETRISTA</span></label>
                                <br/>
                                <label className="black-text text-darken">Daniel Zavala</label>
                            </div>
                            <div className="column">
                                <label className="black-text text-darken font-weight-bold"><span>FECHA</span></label>
                            <br/>
                                <label className="black-text text-darken">20/03/2018</label>
                            </div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</div>
)}
}


export default Grid3



