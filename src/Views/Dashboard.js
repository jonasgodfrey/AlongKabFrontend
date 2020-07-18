import React, { Component } from 'react'

export default class Dashboard extends Component {
  componentDidMount (){
    const script = document.createElement("script");
    script.src = 'js/content.js';
    script.async = true;
 
    document.body.appendChild(script);
  }
    render() {
        return (
          
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0 text-dark">Dashboard</h1>
          </div>{/* /.col */}
         
        </div>{/* /.row */}
      </div>{/* /.container-fluid */}
    </div>
    {/* /.content-header */}
    {/* Main content */}
    <section className="content">
      <div className="container-fluid">
        {/* Small boxes (Stat box) */}
        <div className="row">
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-info">
              <div className="inner">
                <h3>01</h3>
                <p>Booked Rides</p>
              </div>
              <div className="icon">
                <ion-icon ios="ios-car" md="md-car" />
                <i className="ion-model-s" />
              </div>
              <p className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></p>
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-success">
              <div className="inner">
                <h3>₦0<sup style={{fontSize: 20}}></sup></h3>
                <p>Total Earnings</p>
              </div>
              <div className="icon">
                <i className="ion-cash" />
              </div>
              <p className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></p>
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-warning">
              <div className="inner">
                <h3>00</h3>
                <p>Total Drivers</p>
              </div>
              <div className="icon">
                <i className="ion-ios-people" />
              </div>
              <p className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></p>
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-danger">
              <div className="inner">
                <h3>00</h3>
                <p>Canceled Rides</p>
              </div>
              <div className="icon">
                <i className="ion-android-cancel" />
              </div>
              <p className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></p>
            </div>
          </div>
          {/* ./col */}
        </div>
        {/* /.row */}
        <div className="row">
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-secondary">
              <div className="inner">
                <h3>01</h3>
                <p>Uers Online</p>
              </div>
              <div className="icon">
                <ion-icon ios="ion-ios-people" md="md-car" />
                <i className="ion-model-s" />
              </div>
              <p className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></p>
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-success">
              <div className="inner">
                <h3>₦0<sup style={{fontSize: 20}}></sup></h3>
                <p>Drivers Online</p>
              </div>
              <div className="icon">
                <i className="ion-cash" />
              </div>
              <p className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></p>
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-warning">
              <div className="inner">
                <h3>00</h3>
                <p>Total Routes</p>
              </div>
              <div className="icon">
                <i className="ion-ios-people" />
              </div>
              <p className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></p>
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-danger">
              <div className="inner">
                <h3>00</h3>
                <p>Total Landmarks</p>
              </div>
              <div className="icon">
                <i className="ion-android-cancel" />
              </div>
              <p className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></p>
            </div>
          </div>
          {/* ./col */}
        </div>
        
        
      </div>{/* /.container-fluid */}
    </section>
    {/* /.content */}
    
    <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">  
          <div className="card card-blue">
            <div className="card-header">
              <h3 className="card-title">Current Rides</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" /></button>
              </div>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <table id="example1" className="table table-bordered table-striped">
                <thead>
                  <tr>                  
                    
                    <th>Driver</th>
                    <th>Current Route</th>
                    <th> Destination</th>
                    <th>Number of Passengers</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Abu Jakes</td>
                    <td>Bwari</td>
                    <td>Jabi</td>
                    <td>4</td>                    
                    <td><span className="badge bg-success">online</span></td>
                  </tr>
                  
                </tbody></table>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
    </div>
    {/* /.container-fluid */}
  </section>
  </div>



        )
    }
}
