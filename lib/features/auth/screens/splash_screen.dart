import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../../../common/widgets/bottom_bar.dart';
import '../../../providers/user_provider.dart';
import '../../admin/screens/admin_screen.dart';
import 'auth_screen.dart';

class SplashScreen extends StatefulWidget {
  static const String routeName = '/splash-screen';
  const SplashScreen({super.key});

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    super.initState();
    // goToButtomBar();
    afterSplash();
  }

  // need to listem userprovider
  // Future<void> goToButtomBar() async {
  //   print('goToButtomBar start');
  //   Future.delayed(const Duration(seconds: 3)).then((value) {
  //     Navigator.pushReplacementNamed(context, BottomBar.routeName);
  //     print(
  //         'goToButtomBar : user : ${Provider.of<UserProvider>(context, listen: false).user}');
  //   });
  // }

  Future<void> afterSplash() async {
    Future.delayed(const Duration(seconds: 3)).then(
      (value) => Navigator.pushReplacementNamed(
        context,
        Provider.of<UserProvider>(context, listen: false).user.token.isNotEmpty
            ? Provider.of<UserProvider>(context, listen: false).user.type ==
                    'user'
                ? BottomBar.routeName
                : AdminScreen.routeName
            : AuthScreen.routeName,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Image.asset(
          'assets/images/amazon_in.png',
          width: 120,
          height: 60,
        ),
      ),
    );
  }
}
