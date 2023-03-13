import 'package:flutter/material.dart';

import '../../../constants/global_variables.dart';
import 'single_product.dart';

class Orders extends StatefulWidget {
  const Orders({Key? key}) : super(key: key);

  @override
  State<Orders> createState() => _OrdersState();
}

class _OrdersState extends State<Orders> {
  List<String> orders = [
    'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNob3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1583922606661-0822ed0bd916?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNob3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1519114056088-b877fe073a5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZSUyMGJlYWNoJTIwYmx1ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://plus.unsplash.com/premium_photo-1663013219604-0a53b0b70fe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyZSUyMGJlYWNoJTIwYmx1ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  ];
//   List<Order>? orders;
//   final AccountServices accountServices = AccountServices();

  // @override
  // void initState() {
  //   super.initState();
  //   fetchOrders();
  // }

  // void fetchOrders() async {
  //   orders = await accountServices.fetchMyOrders(context: context);
  //   setState(() {});
  // }

  @override
  Widget build(BuildContext context) {
    return
        //  orders == null ? const Loader()   :
        Column(
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Container(
              padding: const EdgeInsets.only(
                left: 15,
              ),
              child: const Text(
                'Your Orders',
                style: TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.w600,
                ),
              ),
            ),
            Container(
              padding: const EdgeInsets.only(
                right: 15,
              ),
              child: Text(
                'See all',
                style: TextStyle(
                  color: GlobalVariables.selectedNavBarColor,
                ),
              ),
            ),
          ],
        ),
        // display orders
        Container(
          height: 170,
          padding: const EdgeInsets.only(
            left: 10,
            top: 20,
            right: 0,
          ),
          child: ListView.builder(
            scrollDirection: Axis.horizontal,
            itemCount: orders.length,
            itemBuilder: (context, index) {
              return GestureDetector(
                onTap: () {
                  // Navigator.pushNamed(
                  //   context,
                  //   OrderDetailScreen.routeName,
                  //   arguments: orders![index],
                  // );
                },
                child: SingleProduct(
                  image: orders[index],
                  // image: orders![index].products[0].images[0],
                ),
              );
            },
          ),
        ),
      ],
    );
  }
}
