@extends('layouts.master')

@section('title', 'Home - Priority QB Services')

@section('content')
    <!-- Hero Section -->
    <section class="hero-section text-center bg-primary text-white py-5">
        <div class="container">
            <h1>Welcome to Priority QB Services</h1>
            <p>At Priority QB Services, we simplify your financial management with QuickBooks solutions.</p>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="container my-5">
        <h2 class="section-title">Our Services</h2>
        <div class="row">
            <div class="col-md-4 mb-4">
                <div class="card h-100 text-center p-4 service-card">
                    <a href="{{url('services')}}">
                        <h3 class="card-title">QuickBooks Setup and Customization</h3>
                        <p class="card-text">We provide expert setup and customization of QuickBooks to meet your business
                            needs.</p>
                    </a>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card h-100 text-center p-4 service-card">
                    <a href="{{url(path: 'quickbooks')}}">
                        <h3 class="card-title">Bookkeeping and Financial Reconciliation</h3>
                        <p class="card-text">Accurate and timely bookkeeping services to keep your finances in order.</p>
                    </a>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card h-100 text-center p-4 service-card">
                    <a href="{{url('payroll')}}">
                        <h3 class="card-title">Payroll Integration and Management</h3>
                        <p class="card-text">Seamless payroll integration and management for your business.</p>
                    </a>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card h-100 text-center p-4 service-card">
                    <a href="{{url('support')}}">
                        <h3 class="card-title">Troubleshooting and Technical Support</h3>
                        <p class="card-text">Expert troubleshooting and technical support for QuickBooks.</p>
                    </a>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card h-100 text-center p-4 service-card">
                    <a href="{{url('financial')}}">
                        <h3 class="card-title">Financial Reporting and Analysis</h3>
                        <p class="card-text">Comprehensive financial reporting and analysis for better decision-making.</p>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="container my-5">
        <h2 class="section-title">Our Pricing</h2>
        <div class="row">
            <div class="col-md-3 mb-4">
                <div class="pricing-card">
                    <h3>QuickBooks Desktop Pro</h3>
                    <div class="original-price">$843.70/year</div>
                    <div class="price">$649/year</div>
                    <div class="discount">Perfect for small businesses seeking reliable accounting features.</div>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#contactModal">Choose
                        plan</button>
                </div>
            </div>
            <div class="col-md-3 mb-4">
                <div class="pricing-card">
                    <h3>QuickBooks Desktop Premier</h3>
                    <div class="original-price">$1,233.70/year</div>
                    <div class="price">$949/year</div>
                    <div class="discount">Ideal for industry-specific solutions with advanced reporting capabilities.</div>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#contactModal">Choose
                        plan</button>
                </div>
            </div>
            <div class="col-md-3 mb-4">
                <div class="pricing-card">
                    <h3>QuickBooks Desktop Enterprise</h3>
                    <div class="original-price">$1,298.70/year</div>
                    <div class="price">$999/year</div>
                    <div class="discount">Designed for growing businesses that require robust accounting and financial
                        tools.</div>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#contactModal">Choose
                        plan</button>
                </div>
            </div>
            <div class="col-md-3 mb-4">
                <div class="pricing-card">
                    <h3>QuickBooks Online</h3>
                    <div class="original-price">$516.10/year</div>
                    <div class="price">$397/year</div>
                    <div class="discount">Simplify your accounting with cloud-based access and real-time collaboration.
                    </div>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#contactModal">Choose
                        plan</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="container my-5">
        <h2 class="section-title">Contact Us</h2>
        <p class="text-center">Ready to make your accounting stress-free? Get in touch with Priority QB Services today and
            see the difference our expertise can make for your business.</p>
    </section>
@endsection
