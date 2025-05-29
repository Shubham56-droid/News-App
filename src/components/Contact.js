import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div>
         <header class="text-center bg-primary text-white py-5">
    <div class="container">
      <h1 class="display-4">Contact Us</h1>
      <p class="lead">Get in touch with the Insight Orbit team.</p>
    </div>
  </header>

  <section class="container my-5">
    <div class="text-center">
      <h2>We’d love to hear from you!</h2>
      <p class="fs-5 mt-3">For inquiries, news tips, or feedback — reach out to us via email:</p>
      <p class="fs-4 fw-bold mt-3">
        📧 <a href="mailto:shubhambawankar735@gmail.com">contact@insightorbit.com</a>
      </p>
      <p class="fs-5 mt-4">We typically respond within 24 hours.</p>
    </div>
  </section>
      </div>
    )
  }
}
