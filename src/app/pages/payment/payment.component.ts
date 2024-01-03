import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  totalAmount: number = 0;
  selectedPaymentMethod: string = 'creditCard';
  userDetailsForm!: FormGroup; // Use the non-null assertion operator

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.totalAmount = parseFloat(params['totalAmount']) || 0;
    });

    // Initialize the form with validators
    this.userDetailsForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      // Add more card details fields and validators as needed
      expiration: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]],
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3,4}$/)]]
    });
  }

  submitPaymentForm() {
    if (this.userDetailsForm.invalid) {
      return;
    }

    // Implement your payment processing logic here
    console.log('Payment Method:', this.selectedPaymentMethod);
    console.log('User Details:', this.userDetailsForm.value);
    // After processing payment, you might want to navigate to a confirmation page
  }
  
}
