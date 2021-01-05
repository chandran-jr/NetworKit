import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'components/journy_title.dart';
import 'components/button.dart';
import 'create_log_screen.dart';
import 'edit_log_screen.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        body: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Journy(
                  bgColor: Color(0xffFFFF00),
                  txtColor: Color(0xffFF0000),
                  text: 'Journy',
                ),
                SizedBox(
                  height: 20,
                ),
                SvgPicture.asset(
                  "images/journy.svg",
                  height: (MediaQuery.of(context).size.height) * 0.25,
                  width: (MediaQuery.of(context).size.width) * 0.25,
                ),
                SizedBox(
                  height: 30,
                ),
                Button(
                  text: 'Create new page',
                  fn: () {
                    Navigator.push(context,
                        MaterialPageRoute(builder: (context) => CreateNew()));
                  },
                ),
                SizedBox(
                  height: 30,
                ),
                Button(
                  text: 'Edit a page',
                  fn: () {
                    Navigator.push(context,
                        MaterialPageRoute(builder: (context) => EditLog()));
                  },
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

