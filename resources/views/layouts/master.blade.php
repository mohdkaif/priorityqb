<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Priority QB Services')</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome Icons -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    @stack('styles')
    <style>
        .modal-content {
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            border: none;
        }

        .modal-header {
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
            color: white;
            border-radius: 15px 15px 0 0;
            border-bottom: none;
        }

        .modal-body {
            padding: 30px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-control {
            border-radius: 8px;
            border: 2px solid #e9ecef;
            transition: all 0.3s ease;
        }

        .form-control:focus {
            border-color: #2ecc71;
            box-shadow: 0 0 10px rgba(46, 204, 113, 0.2);
        }

        .btn-primary {
            background: linear-gradient(135deg, #3498db, #2ecc71);
            border: none;
            padding: 12px 30px;
            border-radius: 8px;
            transition: all 0.3s ease;
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        #contactResponse {
            display: none;
            margin-top: 20px;
        }

        .cta {
            text-align: center;
            padding: 80px 0;
            background: linear-gradient(135deg, #3498db 0%, #2ecc71 100%);
            color: white;
            position: relative;
            clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);
        }

        .cta h2 {
            font-size: 2.5em;
            margin-bottom: 20px;
            animation: fadeInUp 1s ease;
        }

        .cta-button {
            display: inline-block;
            padding: 15px 40px;
            background: white;
            color: #2ecc71;
            text-decoration: none;
            border-radius: 50px;
            font-weight: 600;
            margin-top: 25px;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .cta-button:hover {
            transform: scale(1.1);
            background: #1e3c72;
            color: white;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 768px) {
            /* header h1 {
                font-size: 2em;
            }

            .services-grid {
                grid-template-columns: 1fr;
            } */

            .cta h2 {
                font-size: 1.8em;
            }
        }
    </style>
</head>

<body>

    <!-- Include Header -->
    @include('partials.header')

    <!-- Page Content -->
    <div class="container my-5">
        @yield('content')
    </div>

    <!-- Include Footer -->
    @include('partials.footer')
    <div class="modal fade" id="contactModal" tabindex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="contactModalLabel">Contact Us</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="contactForm">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" name="name"
                                placeholder="Enter your name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" id="email" name="email"
                                placeholder="Enter your email" required>
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone</label>
                            <input type="tel" class="form-control" id="phone" name="phone"
                                placeholder="Enter your phone number" required>
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea class="form-control" id="message" name="message" rows="4" placeholder="Enter your message" required></textarea>
                        </div>
                        <div id="contactResponse" class="alert"></div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary" id="submitContact">Submit</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

    @stack('scripts')
    <script>
        $(document).ready(function() {
            $('#submitContact').click(function(e) {
                e.preventDefault();

                let form = $('#contactForm');
                let submitBtn = $(this);
                let responseDiv = $('#contactResponse');

                $.ajax({
                    url: '{{ route('contact.submit') }}',
                    type: 'POST',
                    data: form.serialize(),
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    },
                    beforeSend: function() {
                        submitBtn.prop('disabled', true).text('Sending...');
                        responseDiv.hide();
                    },
                    success: function(response) {
                        form[0].reset();
                        responseDiv.removeClass('alert-danger')
                            .addClass('alert-success')
                            .text(response.message)
                            .slideDown();

                        setTimeout(() => {
                            $('#contactModal').modal('hide');
                            responseDiv.hide();
                        }, 3000);
                    },
                    error: function(xhr) {
                        let errorMsg = xhr.responseJSON?.message ||
                            'Something went wrong. Please try again.';
                        responseDiv.removeClass('alert-success')
                            .addClass('alert-danger')
                            .text(errorMsg)
                            .slideDown();
                    },
                    complete: function() {
                        submitBtn.prop('disabled', false).text('Submit');
                    }
                });
            });

            // Reset form when modal is closed
            $('#contactModal').on('hidden.bs.modal', function() {
                $('#contactForm')[0].reset();
                $('#contactResponse').hide();
            });
        });
    </script>
</body>

</html>
