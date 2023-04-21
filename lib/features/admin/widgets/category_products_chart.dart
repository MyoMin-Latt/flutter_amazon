import 'package:fl_chart/fl_chart.dart';
import 'package:flutter/material.dart';
import 'package:flutter_amazon/features/admin/models/bar_data.dart';

import '../models/sales.dart';

class CategoryProductsChart extends StatelessWidget {
  final List<Sales> salesList;
  const CategoryProductsChart({
    Key? key,
    required this.salesList,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    BarData myBarData = BarData(
      mobiles: salesList[0].earning.toDouble(),
      essentials: salesList[1].earning.toDouble(),
      appliances: salesList[2].earning.toDouble(),
      books: salesList[3].earning.toDouble(),
      fashion: salesList[4].earning.toDouble(),
    );
    myBarData.initilizeBarData();

    return BarChart(BarChartData(
      // maxY: 200,
      // minY: 0,
      gridData: FlGridData(show: false),
      borderData: FlBorderData(show: false),
      titlesData: FlTitlesData(
          show: true,
          topTitles: AxisTitles(sideTitles: SideTitles(showTitles: false)),
          // leftTitles: AxisTitles(sideTitles: SideTitles(showTitles: false)),
          rightTitles: AxisTitles(sideTitles: SideTitles(showTitles: false)),
          bottomTitles: getBottomTitles()),
      barGroups: myBarData.barData
          .map(
            (data) => BarChartGroupData(
              x: data.x,
              barRods: [
                BarChartRodData(
                  toY: data.y,
                  color: Colors.grey[800],
                  width: 50,
                  borderRadius: BorderRadius.circular(4),
                  backDrawRodData: BackgroundBarChartRodData(
                    show: true,
                    toY: 70,
                    color: Colors.grey[200],
                  ),
                )
              ],
            ),
          )
          .toList(),
    ));
  }

  AxisTitles getBottomTitles() {
    return AxisTitles(
      sideTitles: SideTitles(
        showTitles: true,
        getTitlesWidget: (value, meta) {
          const style = TextStyle(
            color: Colors.grey,
            fontWeight: FontWeight.bold,
            fontSize: 12,
          );

          Widget text;
          switch (value.toInt()) {
            case 0:
              text = Text(salesList[value.toInt()].label, style: style);
              break;
            case 1:
              text = Text(salesList[value.toInt()].label, style: style);
              break;
            case 2:
              text = Text(salesList[value.toInt()].label, style: style);
              break;
            case 3:
              text = Text(salesList[value.toInt()].label, style: style);
              break;
            case 4:
              text = Text(salesList[value.toInt()].label, style: style);
              break;
            default:
              text = const Text('', style: style);
              break;
          }
          return SideTitleWidget(
            axisSide: meta.axisSide,
            child: text,
          );
        },
      ),
    );
  }
}
