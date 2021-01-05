import 'package:flutter/material.dart';

class DailyLog extends StatefulWidget {
  final String text;
  DailyLog({this.text});
  @override
  _DailyLogState createState() => _DailyLogState();
}

class _DailyLogState extends State<DailyLog> {
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(12),
      height: MediaQuery.of(context).size.height * 0.4,
      width: MediaQuery.of(context).size.width * 0.7,
      decoration: BoxDecoration(
        color: Color(0xff22d50b),
        borderRadius: BorderRadius.all(
          Radius.circular(15),
        ),
      ),
      child: SingleChildScrollView(
        child: Text(
          widget.text,
          style: TextStyle(
            color: Colors.white,
            fontFamily: 'Pacifico',
            fontSize: 25,
          ),
        ),
      ),
    );
  }
}
