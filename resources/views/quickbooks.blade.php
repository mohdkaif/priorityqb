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
                <h2 class="section-title">Bookkeeping & Accounting</h2>
                <p class="section-subtitle">At Priority QB Services, we offer comprehensive bookkeeping and accounting
                    services tailored to your business needs. Our team of experts ensures that your financial records are
                    accurate, up-to-date, and compliant with all regulations.</p>

                <!-- Services Grid -->
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="service-card text-center">
                            <i class="fas fa-book service-icon"></i>
                            <h3>Daily, Weekly, or Monthly Bookkeeping</h3>
                            <p>We provide flexible bookkeeping services to suit your business needs, ensuring your financial
                                records are always up-to-date.</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="service-card text-center">
                            <i class="fas fa-file-alt service-icon"></i>
                            <h3>Financial Statement Preparation</h3>
                            <p>We prepare accurate financial statements, including balance sheets, income statements, and
                                cash flow statements.</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="service-card text-center">
                            <i class="fas fa-hand-holding-usd service-icon"></i>
                            <h3>Accounts Payable & Receivable Management</h3>
                            <p>We manage your accounts payable and receivable to ensure timely payments and healthy cash
                                flow.</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="service-card text-center">
                            <i class="fas fa-university service-icon"></i>
                            <h3>Bank & Credit Card Reconciliation</h3>
                            <p>We reconcile your bank and credit card statements to ensure accuracy and identify
                                discrepancies.</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="service-card text-center">
                            <i class="fas fa-file-invoice-dollar service-icon"></i>
                            <h3>Tax Preparation & Filing Support</h3>
                            <p>We provide expert support for tax preparation and filing, ensuring compliance with all
                                regulations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Why Choose Us Section -->
        <section class="why-choose-section">
            <div class="container">
                <h2 class="section-title">Why Choose Us?</h2>
                <p class="section-subtitle">Here’s why businesses trust Priority QB Services for their bookkeeping and
                    accounting needs:</p>
                <div class="row">
                    <div class="col-md-8 mx-auto">
                        <ul class="why-choose-list">
                            <li><i class="fas fa-check"></i><strong>Expert Bookkeepers:</strong> Our team specializes in
                                accurate and efficient bookkeeping.</li>
                            <li><i class="fas fa-check"></i><strong>Customized Solutions:</strong> We tailor our services to
                                fit your business needs.</li>
                            <li><i class="fas fa-check"></i><strong>Compliance Assurance:</strong> We ensure your financial
                                records are compliant with all regulations.</li>
                            <li><i class="fas fa-check"></i><strong>Time-Saving:</strong> Let us handle the numbers so you
                                can focus on growing your business.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

       
    </main>
@endsection
