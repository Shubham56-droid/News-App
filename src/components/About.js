import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
  <header class="about-header text-center text-white">
    <div class="container header-text-about">
      <h1 class="display-2">About Us</h1>
      <p class="lead">Your Gateway to Truthful, Unbiased and Timely News.</p>
    </div>
  </header>

  <section class="container my-5">
    <div class="row align-items-center">
      <div class="col-md-6">
        <h2>Who We Are</h2>
        <p>
          Welcome to <strong>Insight Orbit</strong> — a modern digital news platform dedicated to delivering fast, reliable, and unbiased news from across the globe. Our team of passionate journalists and editors works relentlessly to keep you updated on current affairs, politics, technology, entertainment, and much more.
        </p>
        <p>
          In an era of misinformation, Insight Orbit stands as a beacon of integrity, committed to transparency and the highest journalistic standards.
        </p>
      </div>
      <div class="col-md-6">
        <img src="https://images.unsplash.com/photo-1593789198777-f29bc259780e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid rounded shadow" alt="Newsroom" />
      </div>
    </div>
  </section>

  <section class="bg-light py-2">
    <div class="container">
      <div class="row text-center">
        <div class="col-md-6 mb-4">
          <h3>Our Mission</h3>
          <p>
            To empower communities with factual, fearless, and in-depth news coverage, fostering informed decision-making and healthy public discourse.
          </p>
        </div>
        <div class="col-md-6">
          <h3>Our Vision</h3>
          <p>
            To become the most trusted and influential source of news globally, setting new benchmarks for ethical journalism in the digital era.
          </p>
        </div>
      </div>
    </div>
  </section>
      </div>
    )
  }
}
