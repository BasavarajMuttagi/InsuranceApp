
import logo from './logo1.png'
function PaymentReceipt(props) {
  const userName = localStorage.getItem('userName')
    return ( <>
<div class="container ">
  <div class="card m-5">

<div class="card-body">
<div class="row mb-4">




<div class="col-sm-6 float-end">
<h6 class="mb-3"></h6>
<div>
<strong></strong>
</div>
<img src={logo} alt="brand logo" width="130" height="100" className="d-inline-block align-text-top "/>
{/* <div>Attn: Daniel Marek</div>
<div>43-190 Mikolow, Poland</div>
<div>Email: marek@daniel.com</div>
<div>Phone: +48 123 456 789</div> */}
</div>


<div class="col-sm-6">
<h6 class="mb-3"></h6>
<div>
<strong>India</strong>
</div>
<div>{userName}</div>
<div>{props.date}</div>
<div>Email: info@webz.com.pl</div>
<div>Phone: +48 444 666 3333</div>
</div>


</div>



<div class="table-responsive-sm">
<table class="table table-striped">
<thead>
<tr>
<th class="center">#</th>
<th>Insurance Plan</th>
<th>Premium Type</th>

<th class="right">Unit Cost</th>
  <th class="center">Qty</th>
<th class="right">Total</th>
</tr>
</thead>
<tbody>
<tr>
<td class="center">1</td>
<td class="left strong">{props.plan}</td>
<td class="left">{props.premiumType}</td>

<td class="right">{props.instalment}</td>
  <td class="center">1</td>
<td class="right">{props.instalment}</td>
</tr>


</tbody>
</table>
</div>
<div class="row">
<div class="col-lg-4 col-sm-5">

</div>

<div class="col-lg-4 col-sm-5 ml-auto">
<table class="table table-clear">
<tbody>

<tr>
<td class="left">
<strong>Subtotal</strong>
</td>

{/* <td class="right">$8.497,00</td>
</tr>
<tr>
<td class="left">

<strong>Discount (20%)</strong>
</td>
<td class="right">$1,699,40</td>
</tr>
<tr> */}

<td class="left">
 <strong>Tax (18%)</strong>
</td>
<td class="right">₹{(parseFloat((props.instalment)*18)/100)}</td>
</tr>
<tr>
<td class="left">
<strong>Total</strong>
</td>
<td class="right">
<strong>₹{parseFloat(props.instalment) + (parseFloat((props.instalment)*18)/100)}</strong>
</td>
</tr>
</tbody>
</table>

</div>

</div>

</div>
</div>
</div>
    </> );
}

export default PaymentReceipt;
