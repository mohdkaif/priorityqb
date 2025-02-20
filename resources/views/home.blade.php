@extends('layouts.master')

@section('title', 'Home - Priority QB Services')
@push('styles')
    <style>
        /* Global Styles */
        body {
            font-family: 'Poppins', sans-serif;
            background-color: #f8f9fa;
            color: #333;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            font-weight: 700;
        }

        a {
            text-decoration: none;
            color: inherit;
        }

        /* Hero Section */
        .hero-section {
            background: #fff;
            padding: 50px 0;
            color: #000;
            text-align: center;
        }

        .hero-section h1 {
            font-size: 3rem;
            margin-bottom: 20px;
            animation: fadeInDown 1.5s ease;
        }

        .hero-section p {
            font-size: 1.5rem;
            animation: fadeInUp 1.5s ease;
        }

        .hero-section .btn {
            margin-top: 30px;
            font-size: 1.25rem;
            padding: 10px 30px;
            background: #fff;
            color: #007bff;
            border: none;
            transition: transform 0.3s ease;
        }

        .hero-section .btn:hover {
            transform: scale(1.1);
        }

        /* Services Section */
        .service-card {
            background: #fff;
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            text-align: center;
            margin-bottom: 30px;
        }

        .service-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .service-card i {
            font-size: 2.5rem;
            color: #007bff;
            margin-bottom: 20px;
            animation: fadeIn 1s ease;
        }

        .service-card h3 {
            font-size: 1.75rem;
            margin-bottom: 15px;
            color: #007bff;
        }

        .service-card p {
            font-size: 1rem;
            color: #555;
        }

        /* Pricing Section */
        .pricing-card {
            background: #fff;
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            margin-bottom: 30px;
        }

        .pricing-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .pricing-card h3 {
            font-size: 1.75rem;
            margin-bottom: 20px;
            color: #007bff;
        }

        .pricing-card .original-price {
            font-size: 1.25rem;
            text-decoration: line-through;
            color: #888;
        }

        .pricing-card .price {
            font-size: 2.5rem;
            font-weight: bold;
            color: #28a745;
            margin: 15px 0;
        }

        .pricing-card .discount {
            font-size: 1rem;
            color: #555;
            margin-bottom: 20px;
        }

        .pricing-card .btn {
            width: 100%;
            font-size: 1.1rem;
            background: #007bff;
            border: none;
            transition: background 0.3s ease;
        }

        .pricing-card .btn:hover {
            background: #0056b3;
        }

        /* Testimonial Section */
        .testimonial-section {
            background: #f8f9fa;
            padding: 80px 0;
        }

        .testimonial-card {
            background: #fff;
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            text-align: center;
            margin-bottom: 30px;
        }

        .testimonial-card img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            margin-bottom: 20px;
        }

        .testimonial-card p {
            font-size: 1rem;
            color: #555;
            margin-bottom: 20px;
        }

        .testimonial-card h4 {
            font-size: 1.25rem;
            color: #007bff;
        }

        /* Statistics Section */
        .statistics-section {
            background: linear-gradient(135deg, #007bff, #0056b3);
            padding: 80px 0;
            color: #fff;
            text-align: center;
        }

        .statistics-section h2 {
            font-size: 2.5rem;
            margin-bottom: 40px;
        }

        .statistic-item {
            margin-bottom: 30px;
        }

        .statistic-item h3 {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .statistic-item p {
            font-size: 1.25rem;
        }

        /* Contact Section */
        .contact-section {
            background: #fff;
            padding: 80px 0;
            text-align: center;
        }

        .contact-section h2 {
            font-size: 2.5rem;
            margin-bottom: 20px;
            color: #007bff;
        }

        .contact-section p {
            font-size: 1.25rem;
            margin-bottom: 30px;
            color: #555;
        }

        .contact-section .btn {
            font-size: 1.25rem;
            padding: 10px 30px;
            background: #007bff;
            color: #fff;
            border: none;
            transition: transform 0.3s ease;
        }

        .contact-section .btn:hover {
            transform: scale(1.1);
        }

        /* Animations */
        @keyframes fadeIn {
            from {
                opacity: 0;
            }

            to {
                opacity: 1;
            }
        }

        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    </style>
@endpush
@section('content')

    <section class="hero-section">
        <div class="container">
            <h1>Welcome to Priority QB Services</h1>
            <p>Simplifying your financial management with QuickBooks solutions.</p>
            <a href="#services" class="btn btn-light">Explore Services</a>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="container my-5">
        <h2 class="text-center mb-5">Our Services</h2>
        <div class="row">
            <div class="col-md-4 mb-4">
                <a href="{{url('services')}}" class="text-decoration-none">
                    <div class="service-card">
                        <i class="fas fa-cogs"></i>
                        <h3>QuickBooks Setup</h3>
                        <p>Expert setup and customization for your business needs.</p>
                    </div>
                </a>
            </div>
            <div class="col-md-4 mb-4">
                <a href="{{url('bookkeeping')}}" class="text-decoration-none">
                    <div class="service-card">
                        <i class="fas fa-book"></i>
                        <h3>Bookkeeping</h3>
                        <p>Accurate and timely bookkeeping services.</p>
                    </div>
                </a>
            </div>
            <div class="col-md-4 mb-4">
                <a href="{{url('payroll')}}" class="text-decoration-none">
                    <div class="service-card">
                        <i class="fas fa-money-check-alt"></i>
                        <h3>Payroll Management</h3>
                        <p>Seamless payroll integration and management.</p>
                    </div>
                </a>
            </div>
            <div class="col-md-4 mb-4">
                <a href="{{url('support')}}" class="text-decoration-none">
                    <div class="service-card">
                        <i class="fas fa-tools"></i>
                        <h3>Technical Support</h3>
                        <p>Expert troubleshooting and support for QuickBooks.</p>
                    </div>
                </a>
            </div>
            <div class="col-md-4 mb-4">
                <a href="financial.html" class="text-decoration-none">
                    <div class="service-card">
                        <i class="fas fa-chart-line"></i>
                        <h3>Financial Reporting</h3>
                        <p>Comprehensive financial reporting and analysis.</p>
                    </div>
                </a>
            </div>
        </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="container my-5">
        <h2 class="text-center mb-5">Our Pricing</h2>
        <div class="row">
            <div class="col-md-3 mb-4">
                <div class="pricing-card">
                    <h3>QuickBooks Pro</h3>
                    <div class="original-price">$843.70/year</div>
                    <div class="price">$649/year</div>
                    <div class="discount">Perfect for small businesses.</div>
                    <button class="cta-button" data-bs-toggle="modal" data-bs-target="#contactModal">Choose Plan</button>
                </div>
            </div>
            <div class="col-md-3 mb-4">
                <div class="pricing-card">
                    <h3>QuickBooks Premier</h3>
                    <div class="original-price">$1,233.70/year</div>
                    <div class="price">$949/year</div>
                    <div class="discount">Ideal for industry-specific needs.</div>
                    <button class="cta-button" data-bs-toggle="modal" data-bs-target="#contactModal">Choose Plan</button>
                    {{-- <a href="pricing.html" class="btn btn-primary">Choose Plan</a> --}}
                </div>
            </div>
            <div class="col-md-3 mb-4">
                <div class="pricing-card">
                    <h3>QuickBooks Enterprise</h3>
                    <div class="original-price">$1,298.70/year</div>
                    <div class="price">$999/year</div>
                    <div class="discount">For growing businesses.</div>
                    <button class="cta-button" data-bs-toggle="modal" data-bs-target="#contactModal">Choose Plan</button>
                </div>
            </div>
            <div class="col-md-3 mb-4">
                <div class="pricing-card">
                    <h3>QuickBooks Online</h3>
                    <div class="original-price">$516.10/year</div>
                    <div class="price">$397/year</div>
                    <div class="discount">Cloud-based accounting.</div>
                    <button class="cta-button" data-bs-toggle="modal" data-bs-target="#contactModal">Choose Plan</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonial Section -->
    <section class="testimonial-section">
        <div class="container">
            <h2 class="text-center mb-5">What Our Clients Say</h2>
            <div class="row">
                <div class="col-md-4 mb-4">
                    <div class="testimonial-card">
                        <img src="https://via.placeholder.com/80" alt="Client 1">
                        <p>"Priority QB Services transformed our financial management. Highly recommended!"</p>
                        <h4>John Doe</h4>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="testimonial-card">
                        <img src="https://via.placeholder.com/80" alt="Client 2">
                        <p>"Their team is professional, efficient, and always available for support."</p>
                        <h4>Jane Smith</h4>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="testimonial-card">
                        <img src="https://via.placeholder.com/80" alt="Client 3">
                        <p>"The best QuickBooks service provider we've ever worked with!"</p>
                        <h4>Mike Johnson</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Statistics Section -->
    <section class="statistics-section">
        <div class="container">
            <h2>Our Achievements</h2>
            <div class="row">
                <div class="col-md-3">
                    <div class="statistic-item">
                        <h3>500+</h3>
                        <p>Happy Clients</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="statistic-item">
                        <h3>10+</h3>
                        <p>Years of Experience</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="statistic-item">
                        <h3>99%</h3>
                        <p>Customer Satisfaction</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="statistic-item">
                        <h3>24/7</h3>
                        <p>Support Available</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section">
        <div class="container">
            <h2>Contact Us</h2>
            <p>Ready to simplify your accounting? Get in touch with us today!</p>
            <button class="cta-button" data-bs-toggle="modal" data-bs-target="#contactModal">Contact Us Now</button>

        </div>
    </section>


@endsection
