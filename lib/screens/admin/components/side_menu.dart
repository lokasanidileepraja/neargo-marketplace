import 'package:flutter/material.dart';
import '../../../constants/constants.dart';

class SideMenu extends StatelessWidget {
  const SideMenu({super.key});

  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: ListView(
        children: [
          DrawerHeader(
            decoration: const BoxDecoration(color: primaryColor),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: const [
                Text(
                  'NearGo',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 24,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                SizedBox(height: 8),
                Text(
                  'Admin Dashboard',
                  style: TextStyle(color: Colors.white),
                ),
              ],
            ),
          ),
          DrawerListTile(
            title: "Dashboard",
            icon: Icons.dashboard,
            onTap: () {},
          ),
          DrawerListTile(
            title: "Restaurants",
            icon: Icons.restaurant,
            onTap: () {},
          ),
          DrawerListTile(
            title: "Drivers",
            icon: Icons.delivery_dining,
            onTap: () {},
          ),
          DrawerListTile(
            title: "Users",
            icon: Icons.people,
            onTap: () {},
          ),
          DrawerListTile(
            title: "Settings",
            icon: Icons.settings,
            onTap: () {},
          ),
        ],
      ),
    );
  }
}

class DrawerListTile extends StatelessWidget {
  const DrawerListTile({
    super.key,
    required this.title,
    required this.icon,
    required this.onTap,
  });

  final String title;
  final IconData icon;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return ListTile(
      onTap: onTap,
      horizontalTitleGap: 0.0,
      leading: Icon(icon, color: Colors.grey),
      title: Text(
        title,
        style: const TextStyle(color: Colors.grey),
      ),
    );
  }
}