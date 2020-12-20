import 'package:flutter/material.dart';

class Journy extends StatelessWidget {
  final Color bgColor;
  final Color txtColor;
  final String text;
  final Function fn;
  Journy({this.bgColor, this.txtColor, this.text,this.fn});
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: fn,
      child: Container(
        //padding: EdgeInsets.all(20),
        decoration: BoxDecoration(
          color: bgColor,
          borderRadius: BorderRadius.all(
            Radius.circular(20),
          ),
        ),
        width: 150,
        //color: Color(0xffFFFF00),
        //height: 50,
        child: Center(
          child: Text(
            text,
            style: TextStyle(
              color: txtColor,
              fontFamily: 'Pacifico',
              fontSize: 25,
            ),
          ),
        ),
      ),
    );
  }
}
