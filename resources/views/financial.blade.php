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
                <h2 class="section-title">Financial Reporting & Analysis in QuickBooks</h2>
                <p class="section-subtitle">Accurate financial reporting is essential for making informed business decisions.
                    At Priority QB Services, we help businesses maximize the power of QuickBooks by providing expert
                    financial reporting and analysis services. Our solutions ensure that you have clear, accurate, and
                    actionable insights to drive your business forward.</p>

                <!-- Services Grid -->
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="service-card text-center">
                            <i class="fas fa-file-invoice service-icon"></i>
                            <h3>Custom Financial Reports</h3>
                            <p>We generate and customize financial reports, including profit & loss statements, balance
                                sheets, cash flow statements, and more.</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="service-card text-center">
                            <i class="fas fa-chart-line service-icon"></i>
                            <h3>Performance Analysis</h3>
                            <p>Get deep insights into your company’s financial health with trend analysis, budget
                                comparisons, and forecasting.</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="service-card text-center">
                            <i class="fas fa-tachometer-alt service-icon"></i>
                            <h3>KPI Tracking & Dashboards</h3>
                            <p>We set up key performance indicators (KPIs) and interactive dashboards to help you monitor
                                critical business metrics in real time.</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="service-card text-center">
                            <i class="fas fa-coins service-icon"></i>
                            <h3>Cash Flow Management</h3>
                            <p>Understand your cash flow better with detailed reports that help you plan for future expenses
                                and investments.</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="service-card text-center">
                            <i class="fas fa-check-double service-icon"></i>
                            <h3>Audit-Ready Financials</h3>
                            <p>We ensure your books are accurate, organized, and compliant with financial regulations,
                                making audits and tax filings hassle-free.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Why Choose Us Section -->
        <section class="why-choose-section">
            <div class="container">
                <h2 class="section-title">Why Choose Us?</h2>
                <p class="section-subtitle">Here’s why businesses trust Priority QB Services for their financial reporting
                    and analysis needs:</p>
                <div class="row">
                    <div class="col-md-8 mx-auto">
                        <ul class="why-choose-list">
                            <li><i class="fas fa-check"></i><strong>QuickBooks Expertise:</strong> We specialize in
                                leveraging QuickBooks to generate powerful financial insights.</li>
                            <li><i class="fas fa-check"></i><strong>Data-Driven Decision Making:</strong> Our reports help
                                you make informed business decisions with confidence.</li>
                            <li><i class="fas fa-check"></i><strong>Customized Solutions:</strong> We tailor financial
                                reports to your business needs for better clarity and efficiency.</li>
                            <li><i class="fas fa-check"></i><strong>Error-Free & Compliant Reporting:</strong> Minimize
                                reporting errors and maintain compliance with financial standards.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

       
    </main>
@endsection
