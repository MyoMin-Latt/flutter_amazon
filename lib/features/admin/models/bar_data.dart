import 'package:flutter_amazon/features/admin/models/individual_bar.dart';

class BarData {
  final double mobiles;
  final double essentials;
  final double appliances;
  final double books;
  final double fashion;
  BarData({
    required this.mobiles,
    required this.essentials,
    required this.appliances,
    required this.books,
    required this.fashion,
  });

  List<IndividualBar> barData = [];

  void initilizeBarData() {
    barData = [
      IndividualBar(x: 0, y: mobiles),
      IndividualBar(x: 1, y: essentials),
      IndividualBar(x: 2, y: appliances),
      IndividualBar(x: 3, y: books),
      IndividualBar(x: 4, y: fashion),
    ];
  }
}
