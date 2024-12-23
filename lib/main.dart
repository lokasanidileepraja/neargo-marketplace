import 'package:flutter/material.dart';
import 'screens/admin/admin_dashboard.dart';
import 'screens/vendor/vendor_dashboard.dart';
import 'screens/login_screen.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'NearGo Dashboard',
      theme: ThemeData(
        primarySwatch: Colors.orange,
        scaffoldBackgroundColor: Colors.white,
        appBarTheme: const AppBarTheme(
          backgroundColor: Colors.white,
          foregroundColor: Colors.black,
          elevation: 0,
        ),
      ),
      home: const LoginScreen(),
      routes: {
        '/admin': (context) => const AdminDashboard(),
        '/vendor': (context) => const VendorDashboard(),
      },
    );
  }
}