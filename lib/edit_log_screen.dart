import 'package:flutter/material.dart';
import 'components/journy_title.dart';
import 'components/log.dart';
import 'components/save_button.dart';
import 'components/date.dart';

class EditLog extends StatefulWidget {
  @override
  _EditLogState createState() => _EditLogState();
}

class _EditLogState extends State<EditLog> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: EdgeInsets.all(8),
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
                height: 25,
              ),
              EditDate(),
              SizedBox(
                height: 20,
              ),
              DailyLog(
                text: '',
              ),
              SizedBox(
                height: 20,
              ),
              SaveButton(),
            ],
          ),
        ),
      ),
    );
  }
}
