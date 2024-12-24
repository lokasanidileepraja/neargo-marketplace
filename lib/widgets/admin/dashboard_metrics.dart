import 'package:flutter/material.dart';
import '../../constants/constants.dart';
import '../../responsive.dart';

class DashboardMetrics extends StatelessWidget {
  const DashboardMetrics({super.key});

  @override
  Widget build(BuildContext context) {
    final Size size = MediaQuery.of(context).size;

    return GridView.builder(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      itemCount: 4,
      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: Responsive.isDesktop(context) ? 4 : 2,
        crossAxisSpacing: defaultPadding,
        mainAxisSpacing: defaultPadding,
        childAspectRatio: Responsive.isDesktop(context) ? 1.4 : 1.2,
      ),
      itemBuilder: (context, index) {
        List<MetricInfo> metrics = [
          MetricInfo(
            title: 'Total Orders',
            value: '1,234',
            icon: Icons.shopping_bag,
            color: Colors.blue,
          ),
          MetricInfo(
            title: 'Active Restaurants',
            value: '56',
            icon: Icons.restaurant,
            color: Colors.green,
          ),
          MetricInfo(
            title: 'Active Drivers',
            value: '89',
            icon: Icons.delivery_dining,
            color: Colors.orange,
          ),
          MetricInfo(
            title: 'Revenue',
            value: '\$12,345',
            icon: Icons.attach_money,
            color: Colors.purple,
          ),
        ];

        return MetricCard(info: metrics[index]);
      },
    );
  }
}

class MetricInfo {
  final String title;
  final String value;
  final IconData icon;
  final Color color;

  MetricInfo({
    required this.title,
    required this.value,
    required this.icon,
    required this.color,
  });
}

class MetricCard extends StatelessWidget {
  final MetricInfo info;

  const MetricCard({
    super.key,
    required this.info,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(defaultPadding),
      decoration: BoxDecoration(
        color: secondaryColor,
        borderRadius: BorderRadius.circular(10),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Container(
                padding: const EdgeInsets.all(defaultPadding * 0.75),
                height: 40,
                width: 40,
                decoration: BoxDecoration(
                  color: info.color.withOpacity(0.1),
                  borderRadius: BorderRadius.circular(10),
                ),
                child: Icon(info.icon, color: info.color),
              ),
            ],
          ),
          Text(
            info.value,
            style: const TextStyle(
              fontSize: 24,
              fontWeight: FontWeight.bold,
            ),
          ),
          Text(
            info.title,
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            style: const TextStyle(color: Colors.grey),
          ),
        ],
      ),
    );
  }
}