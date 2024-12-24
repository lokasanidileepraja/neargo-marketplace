import 'package:flutter/material.dart';
import '../../responsive.dart';
import '../../constants/constants.dart';
import '../../widgets/admin/dashboard_metrics.dart';
import '../../widgets/admin/recent_orders.dart';
import '../../widgets/admin/activity_feed.dart';
import 'components/header.dart';
import 'components/side_menu.dart';

class AdminDashboard extends StatelessWidget {
  const AdminDashboard({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      drawer: const SideMenu(),
      body: SafeArea(
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // We want this side menu only for large screen
            if (Responsive.isDesktop(context))
              const Expanded(
                // default flex = 1
                // and it takes 1/6 part of the screen
                child: SideMenu(),
              ),
            Expanded(
              // It takes 5/6 part of the screen
              flex: 5,
              child: Column(
                children: [
                  const Padding(
                    padding: EdgeInsets.all(defaultPadding),
                    child: Header(),
                  ),
                  Expanded(
                    child: SingleChildScrollView(
                      padding: const EdgeInsets.all(defaultPadding),
                      child: Column(
                        children: const [
                          DashboardMetrics(),
                          SizedBox(height: defaultPadding),
                          RecentOrders(),
                          SizedBox(height: defaultPadding),
                          ActivityFeed(),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}