<!DOCTYPE html>
<html>
<head>
    <title>SwiftLogix</title>
    </head>

<body> 
 
 <form action="booking.php" class="booking-form" method="POST">
    
        <div class="row">
        <input name="name" type="text" placeholder="Full Name" required>
        <input name="password" type="password" placeholder="Password" required>
      </div>

      <div class="row">
        <input name="pickup" type="text" placeholder="Pickup Location" >
        <input name="drop_location" type="text" placeholder="Drop Location" >
      </div>

      <div class="row">
        <input type="tel"  name="phone" placeholder="Phone Number">
        <input type="email" name="email" placeholder="Email Address">
      </div>

      <div class="row">
        <input name="date" type="date">
      </div>

      <textarea name="message" placeholder="Shipment Details / Message"></textarea>

      <button type="submit" name="submit">Book Now →</button>
       </div>
  </div>
</section>