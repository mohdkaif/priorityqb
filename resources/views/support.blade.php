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
                <h2 class="section-title">Technical Support</h2>
                <p class="section-subtitle">Our technical support team is here to help you with all your QuickBooks-related
                    issues. Whether you're facing software glitches, installation problems, or need assistance with advanced
                    features, we've got you covered.</p>

                <!-- Services Grid -->
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="service-card text-center">
                            <i class="fas fa-download service-icon"></i>
                            <h3>QuickBooks Installation & Setup</h3>
                            <p>We provide expert assistance with QuickBooks installation and setup to ensure your software
                                is ready to use.</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="service-card text-center">
                            <i class="fas fa-tools service-icon"></i>
                            <h3>Software Troubleshooting & Error Resolution</h3>
                            <p>We diagnose and resolve software glitches and errors to keep your QuickBooks running
                                smoothly.</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="service-card text-center">
                            <i class="fas fa-database service-icon"></i>
                            <h3>Data Backup & Recovery</h3>
                            <p>We ensure your data is securely backed up and can be recovered in case of any loss or
                                corruption.</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="service-card text-center">
                            <i class="fas fa-link service-icon"></i>
                            <h3>Integration with Third-Party Applications</h3>
                            <p>We help integrate QuickBooks with other software and applications for seamless data flow.</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="service-card text-center">
                            <i class="fas fa-headset service-icon"></i>
                            <h3>24/7 Customer Support</h3>
                            <p>Our team is available round the clock to assist you with any QuickBooks-related issues.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Why Choose Us Section -->
        <section class="why-choose-section">
            <div class="container">
                <h2 class="section-title">Why Choose Us?</h2>
                <p class="section-subtitle">Here’s why businesses trust Priority QB Services for their technical support
                    needs:</p>
                <div class="row">
                    <div class="col-md-8 mx-auto">
                        <ul class="why-choose-list">
                            <li><i class="fas fa-check"></i><strong>Expert Technicians:</strong> Our team specializes in
                                QuickBooks troubleshooting and support.</li>
                            <li><i class="fas fa-check"></i><strong>Fast & Reliable:</strong> We provide quick and efficient
                                solutions to minimize downtime.</li>
                            <li><i class="fas fa-check"></i><strong>24/7 Availability:</strong> Our support team is
                                available round the clock to assist you.</li>
                            <li><i class="fas fa-check"></i><strong>Proactive Solutions:</strong> We help prevent issues
                                before they arise with proactive monitoring and support.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

       
    </main>
@endsection
