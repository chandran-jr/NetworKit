import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'components/journy_title.dart';
import 'components/button.dart';

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
              //crossAxisAlignment: CrossAxisAlignment.center,
              children: <Widget>[
                Journy(),
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
                ),
                SizedBox(
                  height: 30,
                ),
                Button(
                  text: 'Edit a page',
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
