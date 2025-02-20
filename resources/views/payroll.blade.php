@extends('layouts.master')

@section('title', 'Home - Priority QB Services')
@push('styles')
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f8f9fa;
            color: #333;
        }

        .overview-section,
        .why-choose-section {
            padding: 60px 0;
        }

        .overview-section {
            background: #fff;
        }

        .why-choose-section {
            background: #f8f9fa;
        }

        .section-title {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 20px;
            text-align: center;
        }

        .section-subtitle {
            font-size: 1.25rem;
            color: #555;
            text-align: center;
            margin-bottom: 40px;
        }

        .service-card {
            background: #fff;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .service-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
        }

        .service-icon {
            font-size: 2.5rem;
            color: #007bff;
            margin-bottom: 15px;
        }

        .service-card h3 {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 15px;
            color: #007bff;
        }

        .service-card p {
            font-size: 1rem;
            line-height: 1.6;
            color: #555;
        }

        .why-choose-list {
            list-style: none;
            padding: 0;
        }

        .why-choose-list li {
            font-size: 1.1rem;
            margin-bottom: 10px;
            color: #555;
        }

        .why-choose-list li i {
            color: #007bff;
            margin-right: 10px;
        }

        
    </style>
@endpush
@section('content')
    <main>
        <!-- Overview Section -->
        <section class="overview-section">
            <div class="container">
                <h2 class="section-title">Payroll Integration & Management</h2>
                <p class="section-subtitle">Managing payroll can be time-consuming and complex, but with Priority QB
                    Services, we make it simple and stress-free. Our team specializes in integrating and managing payroll
                    within QuickBooks, ensuring accuracy, compliance, and efficiency for your business.</p>

                <!-- Services Grid -->
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="service-card text-center">
                            <i class="fas fa-cogs service-icon"></i>
                            <h3>Seamless Payroll Setup</h3>
                            <p>We help you set up payroll in QuickBooks, ensuring proper tax configurations, employee
                                classifications, and direct deposit setup.</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="service-card text-center">
                            <i class="fas fa-robot service-icon"></i>
                            <h3>Automated Payroll Processing</h3>
                            <p>Say goodbye to manual calculations! We automate payroll, reducing errors and saving you time.
                            </p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="service-card text-center">
                            <i class="fas fa-file-invoice-dollar service-icon"></i>
                            <h3>Tax Compliance & Filing</h3>
                            <p>We ensure payroll tax calculations, filings, and payments are accurate and on time, keeping
                                you compliant with IRS and state regulations.</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="service-card text-center">
                            <i class="fas fa-hand-holding-heart service-icon"></i>
                            <h3>Employee Benefits & Deductions</h3>
                            <p>We configure employee benefits, retirement contributions, and deductions to reflect correctly
                                in payroll reports.</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="service-card text-center">
                            <i class="fas fa-tools service-icon"></i>
                            <h3>Payroll Troubleshooting & Support</h3>
                            <p>Experiencing payroll issues in QuickBooks? Our experts provide ongoing support and
                                troubleshooting to resolve errors quickly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Why Choose Us Section -->
        <section class="why-choose-section">
            <div class="container">
                <h2 class="section-title">Why Choose Us?</h2>
                <p class="section-subtitle">Here’s why businesses trust Priority QB Services for their payroll needs:</p>
                <div class="row">
                    <div class="col-md-8 mx-auto">
                        <ul class="why-choose-list">
                            <li><i class="fas fa-check"></i><strong>QuickBooks Experts:</strong> We specialize in QuickBooks
                                payroll integration and optimization.</li>
                            <li><i class="fas fa-check"></i><strong>Time-Saving Solutions:</strong> We handle the
                                complexities, so you can focus on running your business.</li>
                            <li><i class="fas fa-check"></i><strong>Error-Free Payroll Processing:</strong> Minimize
                                mistakes and ensure your employees are paid accurately and on time.</li>
                            <li><i class="fas fa-check"></i><strong>Customized Payroll Management:</strong> We tailor
                                payroll solutions to fit your business needs.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    </main>
@endsection
