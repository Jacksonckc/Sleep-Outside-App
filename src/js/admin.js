import { alertMessage } from "../js/utils";
import ExternalServices from "../js/ExternalServices";

export default class Admin {
  constructor(outputSelector) {
    this.mainElement = document.getElementById(outputSelector);
    this.token = null;
    this.services = new ExternalServices();
  }
  async login(creds, next) {
    try {
      this.token = await this.services.loginRequest(creds);
      next();
    }
    catch(err) {
      alertMessage(err.message.message);
    }
  }

  showLogin() {
    this.mainElement.innerHTML = loginForm();

    document.querySelector('#loginButton').addEventListener('click', (e) => {
      const email = document.querySelector('#email').value;
      const password = document.querySelector('#password').value;
      this.login({email, password}, this.showOrders.bind(this));
    });
  }

  async showOrders() {
    try {
      // console.log(this.token.accessToken)
      const orders = await this.services.getOrders(this.token.accessToken);
      console.log(orders)
      this.mainElement.innerHTML = orderHtml();
      const parent = document.querySelector('#orders tbody');
      // why not a template like we have done before?  The markup here was simple enough that I didn't think it worth the overhead...but a template would certainly work!
      parent.innerHTML = orders.map(order => `<tr><td>${order.id}</td><td>${new Date(order.orderDate).toLocaleDateString('en-US')}</td><td>${order.items?.length}</td><td>${order.orderTotal}</td></tr>`).join('');
    } catch(err) {
      console.log(err);
    }
  }

  
}

function loginForm() {
  return `<fieldset class="login-form">
  <legend>Login</legend>
  <p>
    <label for="email">Email: </label>
    <input type="text" placeholder="email" id="email" value="user1@email.com"/>
  </p>
  <p>
    <label for="password">Password: </label>
    <input type="password" placeholder="password" id="password" />
  </p>
  <button type="submit" id="loginButton">Login</button>
</fieldset>`;
}

function orderHtml() {
  return `<h2>Current Orders</h2>
  <table id="orders">
  <thead>
  <tr><th>Id</th><th>Date</th><th>#Items</th><th>Total</th>
  </thead>
  <tbody class="order-body"></tbody>
  </table>
  `;
}

