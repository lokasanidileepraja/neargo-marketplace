import 'package:flutter/material.dart';

class VendorOrders extends StatelessWidget {
  const VendorOrders({super.key});

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'Recent Orders',
              style: TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 16),
            ListView.builder(
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              itemCount: 5,
              itemBuilder: (context, index) {
                return ListTile(
                  leading: const CircleAvatar(
                    child: Icon(Icons.shopping_bag),
                  ),
                  title: Text('Order #${1000 + index}'),
                  subtitle: const Text('2 items • \$24.99'),
                  trailing: Chip(
                    label: const Text('New'),
                    backgroundColor: Colors.orange[100],
                    labelStyle: const TextStyle(color: Colors.orange),
                  ),
                );
              },
            ),
          ],
        ),
      ),
    );
  }
}