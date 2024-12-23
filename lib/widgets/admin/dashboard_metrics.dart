import 'package:flutter/material.dart';

class DashboardMetrics extends StatelessWidget {
  const DashboardMetrics({super.key});

  @override
  Widget build(BuildContext context) {
    return GridView.count(
      shrinkWrap: true,
      crossAxisCount: 2,
      crossAxisSpacing: 16,
      mainAxisSpacing: 16,
      childAspectRatio: 1.5,
      physics: const NeverScrollableScrollPhysics(),
      children: const [
        MetricCard(
          title: 'Total Orders',
          value: '1,234',
          icon: Icons.shopping_bag,
          color: Colors.blue,
        ),
        MetricCard(
          title: 'Active Restaurants',
          value: '56',
          icon: Icons.restaurant,
          color: Colors.green,
        ),
        MetricCard(
          title: 'Active Drivers',
          value: '89',
          icon: Icons.delivery_dining,
          color: Colors.orange,
        ),
        MetricCard(
          title: 'Revenue',
          value: '\$12,345',
          icon: Icons.attach_money,
          color: Colors.purple,
        ),
      ],
    );
  }
}

class MetricCard extends StatelessWidget {
  final String title;
  final String value;
  final IconData icon;
  final Color color;

  const MetricCard({
    super.key,
    required this.title,
    required this.value,
    required this.icon,
    required this.color,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 2,
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Icon(icon, color: color),
            const Spacer(),
            Text(
              value,
              style: const TextStyle(
                fontSize: 24,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              title,
              style: TextStyle(
                color: Colors.grey[600],
              ),
            ),
          ],
        ),
      ),
    );
  }
}