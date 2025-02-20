@extends('layouts.master')
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
@section('title', 'Home - Priority QB Services')

@section('content')
    <main>
        <!-- Overview Section -->
        <section class="overview-section">
            <div class="container">
                <h2 class="section-title">QuickBooks Setup and Customization</h2>
                <p class="section-subtitle">Setting up QuickBooks correctly is crucial for maximizing its potential. At
                    Priority
                    QB Services, we provide expert QuickBooks setup and customization services tailored to your business
                    needs.
                    From initial configuration to advanced customization, we ensure your QuickBooks software is optimized
                    for
                    efficiency and productivity.</p>

                <!-- Services Grid -->
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="service-card text-center">
                            <i class="fas fa-cogs service-icon"></i>
                            <h3>Initial Setup & Configuration</h3>
                            <p>We handle the complete setup of QuickBooks, including company file creation, chart of
                                accounts setup,
                                and preferences configuration.</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="service-card text-center">
                            <i class="fas fa-tools service-icon"></i>
                            <h3>Customization for Your Business</h3>
                            <p>We customize QuickBooks to match your business workflows, including custom fields, templates,
                                and
                                reports.</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="service-card text-center">
                            <i class="fas fa-database service-icon"></i>
                            <h3>Data Migration</h3>
                            <p>We assist in migrating your existing financial data to QuickBooks, ensuring accuracy and
                                consistency.
                            </p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="service-card text-center">
                            <i class="fas fa-users service-icon"></i>
                            <h3>User Training & Support</h3>
                            <p>We provide training sessions to help your team get the most out of QuickBooks and offer
                                ongoing support
                                for any issues.</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="service-card text-center">
                            <i class="fas fa-link service-icon"></i>
                            <h3>Integration with Other Tools</h3>
                            <p>We integrate QuickBooks with third-party applications like CRM, payroll, and inventory
                                management
                                systems for seamless operations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Why Choose Us Section -->
        <section class="why-choose-section">
            <div class="container">
                <h2 class="section-title">Why Choose Us?</h2>
                <p class="section-subtitle">Here’s why businesses trust Priority QB Services for their QuickBooks setup and
                    customization needs:</p>
                <div class="row">
                    <div class="col-md-8 mx-auto">
                        <ul class="why-choose-list">
                            <li><i class="fas fa-check"></i><strong>QuickBooks Experts:</strong> Our team has extensive
                                experience in
                                QuickBooks setup and customization.</li>
                            <li><i class="fas fa-check"></i><strong>Tailored Solutions:</strong> We customize QuickBooks to
                                fit your
                                unique business needs.</li>
                            <li><i class="fas fa-check"></i><strong>Efficient Data Migration:</strong> We ensure a smooth
                                transition
                                of your data to QuickBooks.</li>
                            <li><i class="fas fa-check"></i><strong>Ongoing Support:</strong> We provide training and
                                support to help
                                you make the most of QuickBooks.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

       
    </main>
@endsection
