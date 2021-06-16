import { Component, OnInit } from '@angular/core';
import { ConfirmServiceService } from '../../shared/confirm-service.service';
import { order } from './orderModel';
declare var $: any;
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  orders: {
    Order_Number: string;
    Order_Due_Date: string;
    Customer_buyer_name: string;
    Customer_Address: string;
    Customer_Phone: string;
    OrderTotal: string;
  }[];
  orderModel: order;
  editFlag: boolean = false;
  editValues: boolean = false;

  constructor(private confirmService: ConfirmServiceService) {}

  ngOnInit(): void {
    this.orderModel = new order();
    // Sample Test Data
    this.orders = [
      {
        Order_Number: '54301',
        Order_Due_Date: '2021-06-20',
        Customer_buyer_name: 'Robin Hood',
        Customer_Address: '3-73,kalimandir,Hyderabad,TS-500068',
        Customer_Phone: '9587465124',
        OrderTotal: '540',
      },
      {
        Order_Number: '54302',
        Order_Due_Date: '2021-06-25',
        Customer_buyer_name: 'Revanth',
        Customer_Address: '5-83,kodangal,Hyderabad,TS-500088',
        Customer_Phone: '9582586547',
        OrderTotal: '680',
      },
      {
        Order_Number: '54303',
        Order_Due_Date: '2021-06-30',
        Customer_buyer_name: 'prabhas',
        Customer_Address: '5-73,gachbowli,Hyderabad,TS-500056',
        Customer_Phone: '9587888456',
        OrderTotal: '4520',
      },
      {
        Order_Number: '54304',
        Order_Due_Date: '2021-06-23',
        Customer_buyer_name: 'rana',
        Customer_Address: '3-73,mehdipatnam,Hyderabad,TS-500068',
        Customer_Phone: '9587654456',
        OrderTotal: '5450',
      },
    ];
  }

  // For new user creations submit method
  createNewOrder(orderModel) {
    if (this.editValues === true) {
      this.orders.forEach((element) => {
        if (element.Order_Number === orderModel.Order_Number) {
          element = orderModel;
        }
      });
    } else {
      this.orders.push(orderModel);
      const filtrvalue = this.orders.filter((plan: any) => plan);
      this.orders = filtrvalue;
    }
    this.editValues = false;
//for opening the bootstrap model
    $('#order_creation_Modal').modal('toggle');
    
   
  }
  //  to check isNumber
  isNumber(evt) {
    evt = evt ? evt : window.event;
    let charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  //  For Form closing
  closeForm(form: any) {
    //for closing the bootstrap model
    $('#order_creation_Modal').modal('toggle');
    this.orderModel = new order();
    form.reset();
  }

  //  Create user button flags
  createOrder() {
    $('#order_creation_Modal').modal('show');
    this.editFlag = false;
    this.editValues = false;
    this.orderModel = new order();
  }
  // Edit the selected user details
  editOrder(row) {
    $('#order_creation_Modal').modal('show');
    this.orderModel = new order();
    this.editFlag = false;
    this.editValues = true;
    const filtrvalue = this.orders.filter(
      (plan: any) => plan.Order_Number === row.Order_Number
    );
    this.orderModel = filtrvalue[0];
  }

  // Delete the selected user data and make API call with method DELETE

  deleteOrder(row: any) {
    console.log('delete', row);

    let that = this;
    this.confirmService.confirm(
      'Are you sure?',
      function () {
        const obj = { Order_Number: row.Order_Number };
        const filtrvalue = that.orders.filter(
          (plan: any) => plan.Order_Number !== row.Order_Number
        );
        that.orders = filtrvalue;
      },
      function () {}
    );
  }
}
