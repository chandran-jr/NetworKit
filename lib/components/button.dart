import 'package:flutter/material.dart';

class Button extends StatelessWidget {
  final String text;
  final Function fn;
  Button({this.text, this.fn});
  @override
  Widget build(BuildContext context) {
    return Container(
      width: MediaQuery.of(context).size.width * 0.5,
      height: 50.0,
      child: GestureDetector(
        onTap: fn,
        child: Container(
          decoration: BoxDecoration(
            color: Color(0xff0470EE),
            borderRadius: BorderRadius.circular(5.0),
            boxShadow: [
              BoxShadow(
                color: Colors.grey,
                offset: Offset(2.0, 2.0), //(x,y)
                blurRadius: 6.0,
              ),
            ],
          ),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Center(
                child: Text(
                  text,
                  style: TextStyle(
                    color: Color(0xFFFFFFFE),
                    fontFamily: 'Roboto',
                    fontSize: 16,
                    //fontWeight: FontWeight.w600,
                    letterSpacing: 1,
                  ),
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}
