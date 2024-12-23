import 'package:flutter/material.dart';

class VendorMetrics extends StatelessWidget {
  const VendorMetrics({super.key});

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
          title: 'Today\'s Orders',
          value: '12',
          icon: Icons.shopping_bag,
          color: Colors.blue,
        ),
        MetricCard(
          title: 'Revenue',
          value: '\$345',
          icon: Icons.attach_money,
          color: Colors.green,
        ),
        MetricCard(
          title: 'Menu Items',
          value: '45',
          icon: Icons.restaurant_menu,
          color: Colors.orange,
        ),
        MetricCard(
          title: 'Reviews',
          value: '4.5',
          icon: Icons.star,
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