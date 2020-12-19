import 'package:flutter/material.dart';

class Journy extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      //padding: EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: Color(0xffFFFF00),
        borderRadius: BorderRadius.all(
          Radius.circular(20),
        ),
      ),
      width: 150,
      //color: Color(0xffFFFF00),
      //height: 50,
      child: Center(
        child: Text(
          'Journy',
          style: TextStyle(
            color: Color(0xffFF0000),
            fontFamily: 'Pacifico',
            fontSize: 25,
          ),
        ),
      ),
    );
  }
}
